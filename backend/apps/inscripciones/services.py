from django.db import transaction
from rest_framework.exceptions import ValidationError, PermissionDenied
from apps.actividades.models import Sesion
from apps.participantes.models import Afiliacion
from .models import Inscripcion


@transaction.atomic
def inscribir(*, usuario, afiliacion_id, sesion_id):
    # Lock session to serialize concurrent requests for its final seat.
    sesion = Sesion.objects.select_for_update().select_related("actividad").get(pk=sesion_id)
    afiliacion = Afiliacion.objects.select_related("participante").get(pk=afiliacion_id)
    if afiliacion.participante.usuario_id != usuario.pk:
        raise PermissionDenied("Solo puedes inscribirte con tu propia afiliación")
    if afiliacion.institucion_id != sesion.actividad.institucion_id:
        raise ValidationError("La afiliación y la sesión pertenecen a instituciones diferentes")
    if afiliacion.estado != Afiliacion.Estado.ACTIVA:
        raise ValidationError("La afiliación debe estar activa")
    if not afiliacion.institucion.activa or not sesion.actividad.activa:
        raise ValidationError("La institución o actividad no está activa")
    if sesion.estado != Sesion.Estado.PROGRAMADA:
        raise ValidationError("La sesión no admite inscripciones")
    if Inscripcion.objects.filter(
        afiliacion=afiliacion, sesion=sesion,
        estado__in=[Inscripcion.Estado.CONFIRMADA, Inscripcion.Estado.LISTA_ESPERA]
    ).exists():
        raise ValidationError("Ya existe una inscripción activa para esta sesión")
    ocupados = Inscripcion.objects.filter(sesion=sesion, estado=Inscripcion.Estado.CONFIRMADA).count()
    estado = Inscripcion.Estado.CONFIRMADA if ocupados < sesion.cupo_maximo else Inscripcion.Estado.LISTA_ESPERA
    return Inscripcion.objects.create(
        afiliacion=afiliacion, sesion=sesion, estado=estado, registrada_por=usuario
    )

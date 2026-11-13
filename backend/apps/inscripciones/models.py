import uuid
from django.conf import settings
from django.db import models
from django.db.models import Q


class Inscripcion(models.Model):
    class Estado(models.TextChoices):
        CONFIRMADA = "confirmada", "Confirmada"
        CANCELADA = "cancelada", "Cancelada"
        LISTA_ESPERA = "lista_espera", "Lista de espera"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    afiliacion = models.ForeignKey("participantes.Afiliacion", on_delete=models.PROTECT, related_name="inscripciones")
    sesion = models.ForeignKey("actividades.Sesion", on_delete=models.PROTECT, related_name="inscripciones")
    estado = models.CharField(max_length=15, choices=Estado.choices, default=Estado.CONFIRMADA)
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)
    registrada_por = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True,
        related_name="inscripciones_registradas"
    )
    cancelada_en = models.DateTimeField(null=True, blank=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["afiliacion", "sesion"],
                condition=Q(estado__in=["confirmada", "lista_espera"]),
                name="inscripcion_activa_unica"
            )
        ]

import uuid
from django.conf import settings
from django.db import models


class Participante(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    usuario = models.OneToOneField(
        settings.AUTH_USER_MODEL, null=True, blank=True,
        on_delete=models.SET_NULL, related_name="perfil_participante"
    )
    nombre = models.CharField(max_length=150)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    telefono = models.CharField(max_length=30, blank=True)
    creado_por = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True,
        on_delete=models.SET_NULL, related_name="participantes_creados"
    )
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre


class Afiliacion(models.Model):
    class Estado(models.TextChoices):
        PENDIENTE = "pendiente", "Pendiente"
        ACTIVA = "activa", "Activa"
        SUSPENDIDA = "suspendida", "Suspendida"
        BAJA = "baja", "Baja"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    participante = models.ForeignKey(Participante, on_delete=models.PROTECT, related_name="afiliaciones")
    institucion = models.ForeignKey("instituciones.Institucion", on_delete=models.PROTECT, related_name="afiliaciones")
    estado = models.CharField(max_length=15, choices=Estado.choices, default=Estado.PENDIENTE)
    fecha_afiliacion = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["participante", "institucion"], name="afiliacion_unica_por_institucion"),
        ]

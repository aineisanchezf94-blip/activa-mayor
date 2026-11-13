import uuid
from django.core.validators import MinValueValidator
from django.db import models
from django.db.models import F, Q


class Actividad(models.Model):
    class Movilidad(models.TextChoices):
        BAJA = "baja", "Baja"
        MEDIA = "media", "Media"
        ALTA = "alta", "Alta"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    institucion = models.ForeignKey("instituciones.Institucion", on_delete=models.PROTECT, related_name="actividades")
    titulo = models.CharField(max_length=180)
    descripcion = models.TextField(blank=True)
    movilidad_requerida = models.CharField(max_length=10, choices=Movilidad.choices)
    duracion_minutos = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    activa = models.BooleanField(default=True)
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo


class Sesion(models.Model):
    class Estado(models.TextChoices):
        PROGRAMADA = "programada", "Programada"
        CANCELADA = "cancelada", "Cancelada"
        FINALIZADA = "finalizada", "Finalizada"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    actividad = models.ForeignKey(Actividad, on_delete=models.PROTECT, related_name="sesiones")
    inicio = models.DateTimeField()
    fin = models.DateTimeField()
    cupo_maximo = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    estado = models.CharField(max_length=15, choices=Estado.choices, default=Estado.PROGRAMADA)
    lugar = models.CharField(max_length=180, blank=True)
    creado_en = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.CheckConstraint(condition=Q(fin__gt=F("inicio")), name="sesion_fin_posterior_inicio"),
            models.CheckConstraint(condition=Q(cupo_maximo__gte=1), name="sesion_cupo_positivo"),
        ]

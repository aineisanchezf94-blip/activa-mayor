import uuid
from django.conf import settings
from django.db import models


class Institucion(models.Model):
    class Tipo(models.TextChoices):
        MUNICIPALIDAD = "municipalidad", "Municipalidad"
        FUNDACION = "fundacion", "Fundación"
        CENTRO = "centro", "Centro"
        OTRA = "otra", "Otra"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=180)
    tipo = models.CharField(max_length=20, choices=Tipo.choices)
    comuna = models.CharField(max_length=120, blank=True)
    activa = models.BooleanField(default=True)
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre


class Membresia(models.Model):
    class Rol(models.TextChoices):
        ADMIN = "admin", "Administrador institucional"
        OPERADOR = "operador", "Operador"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name="membresias")
    institucion = models.ForeignKey(Institucion, on_delete=models.PROTECT, related_name="membresias")
    rol = models.CharField(max_length=15, choices=Rol.choices)
    activa = models.BooleanField(default=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["usuario", "institucion"], name="membresia_unica_por_institucion"),
        ]

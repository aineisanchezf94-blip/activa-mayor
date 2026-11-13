from rest_framework import serializers, generics, permissions
from .models import Actividad, Sesion


class ActividadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = ["id", "institucion", "titulo", "descripcion", "movilidad_requerida", "duracion_minutos"]


class SesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sesion
        fields = ["id", "actividad", "inicio", "fin", "cupo_maximo", "estado", "lugar"]


class ActividadesList(generics.ListAPIView):
    serializer_class = ActividadSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Actividad.objects.filter(activa=True, institucion__activa=True).order_by("titulo")


class SesionesList(generics.ListAPIView):
    serializer_class = SesionSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Sesion.objects.filter(
            estado=Sesion.Estado.PROGRAMADA, actividad__activa=True,
            actividad__institucion__activa=True
        ).order_by("inicio")

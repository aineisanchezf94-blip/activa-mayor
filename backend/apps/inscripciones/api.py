from django.shortcuts import get_object_or_404
from rest_framework import serializers, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.participantes.models import Afiliacion
from apps.actividades.models import Sesion
from .models import Inscripcion
from .services import inscribir


class InscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = ["id", "afiliacion", "sesion", "estado", "fecha_inscripcion"]
        read_only_fields = fields


class InscripcionCreateSerializer(serializers.Serializer):
    afiliacion = serializers.PrimaryKeyRelatedField(queryset=Afiliacion.objects.all())
    sesion = serializers.PrimaryKeyRelatedField(queryset=Sesion.objects.all())


class InscripcionesList(generics.ListAPIView):
    serializer_class = InscripcionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Inscripcion.objects.filter(afiliacion__participante__usuario=self.request.user).order_by("-fecha_inscripcion")


class InscripcionCreate(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = InscripcionCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        inscripcion = inscribir(
            usuario=request.user,
            afiliacion_id=serializer.validated_data["afiliacion"].pk,
            sesion_id=serializer.validated_data["sesion"].pk,
        )
        return Response(InscripcionSerializer(inscripcion).data, status=201)

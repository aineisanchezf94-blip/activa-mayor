from datetime import timedelta
from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
from rest_framework.test import APIClient
from apps.instituciones.models import Institucion
from apps.participantes.models import Participante, Afiliacion
from apps.actividades.models import Actividad, Sesion
from .models import Inscripcion


class InscripcionAPITests(TestCase):
    def setUp(self):
        User = get_user_model()
        self.user = User.objects.create_user(email="maria@example.test", password="safe-test-password")
        self.other = User.objects.create_user(email="otra@example.test", password="safe-test-password")
        self.institucion = Institucion.objects.create(nombre="Centro A", tipo="centro")
        self.otra_institucion = Institucion.objects.create(nombre="Centro B", tipo="centro")
        self.participante = Participante.objects.create(usuario=self.user, nombre="María")
        self.afiliacion = Afiliacion.objects.create(
            participante=self.participante, institucion=self.institucion, estado="activa"
        )
        self.otra_afiliacion = Afiliacion.objects.create(
            participante=self.participante, institucion=self.otra_institucion, estado="activa"
        )
        self.actividad = Actividad.objects.create(
            institucion=self.institucion, titulo="Yoga", movilidad_requerida="baja", duracion_minutos=45
        )
        inicio = timezone.now() + timedelta(days=1)
        self.sesion = Sesion.objects.create(
            actividad=self.actividad, inicio=inicio, fin=inicio + timedelta(hours=1), cupo_maximo=1
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def inscribir(self, afiliacion=None):
        return self.client.post(
            reverse("inscripcion-crear"),
            {"afiliacion": str((afiliacion or self.afiliacion).pk), "sesion": str(self.sesion.pk)},
            format="json",
        )

    def test_inscripcion_confirmada(self):
        response = self.inscribir()
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["estado"], "confirmada")

    def test_no_duplicar_inscripcion(self):
        self.inscribir()
        self.assertEqual(self.inscribir().status_code, 400)

    def test_no_cruzar_instituciones(self):
        self.assertEqual(self.inscribir(self.otra_afiliacion).status_code, 400)

    def test_no_inscribir_afiliacion_ajena(self):
        self.client.force_authenticate(user=self.other)
        self.assertEqual(self.inscribir().status_code, 403)

    def test_lista_espera_con_cupo_lleno(self):
        self.inscribir()
        otro_participante = Participante.objects.create(usuario=self.other, nombre="Otra")
        otra_afiliacion = Afiliacion.objects.create(
            participante=otro_participante, institucion=self.institucion, estado="activa"
        )
        self.client.force_authenticate(user=self.other)
        response = self.inscribir(otra_afiliacion)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["estado"], "lista_espera")

    def test_listado_no_expone_inscripciones_ajenas(self):
        self.inscribir()
        self.client.force_authenticate(user=self.other)
        response = self.client.get(reverse("inscripciones"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)

    def test_sin_autenticacion_no_inscribe(self):
        self.client.force_authenticate(user=None)
        self.assertIn(self.inscribir().status_code, [401, 403])

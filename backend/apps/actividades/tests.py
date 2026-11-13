from django.test import SimpleTestCase
from .models import Sesion


class SesionModelTests(SimpleTestCase):
    def test_sesion_tiene_estados_definidos(self):
        self.assertIn("programada", Sesion.Estado.values)
        self.assertIn("cancelada", Sesion.Estado.values)

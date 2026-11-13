from django.test import SimpleTestCase
from django.contrib.auth import get_user_model


class UsuarioModelTests(SimpleTestCase):
    def test_email_es_identificador_de_acceso(self):
        self.assertEqual(get_user_model().USERNAME_FIELD, "email")

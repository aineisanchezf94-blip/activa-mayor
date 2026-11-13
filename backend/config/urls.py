from django.contrib import admin
from django.urls import path
from apps.actividades.api import ActividadesList, SesionesList
from apps.inscripciones.api import InscripcionesList, InscripcionCreate

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/actividades/", ActividadesList.as_view(), name="actividades"),
    path("api/sesiones/", SesionesList.as_view(), name="sesiones"),
    path("api/inscripciones/", InscripcionesList.as_view(), name="inscripciones"),
    path("api/inscripciones/crear/", InscripcionCreate.as_view(), name="inscripcion-crear"),
]

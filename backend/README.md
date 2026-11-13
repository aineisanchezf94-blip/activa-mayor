# Backend Django de Activa Mayor

Primera implementación de los ocho modelos de dominio: Usuario, Institucion, Membresia, Participante, Afiliacion, Actividad, Sesion e Inscripcion.

## Requisitos
- Python 3.11 o superior compatible con Django 5.2
- PostgreSQL
- Variables de entorno según `.env.example` (exportarlas en el shell; el archivo no se carga automáticamente)

## Preparación (desde backend/)
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export DJANGO_SECRET_KEY='una-clave-larga-aleatoria'
export DB_NAME=activa_mayor DB_USER=activa_mayor DB_PASSWORD='tu-clave'
python manage.py check
python manage.py makemigrations cuentas instituciones participantes actividades inscripciones
python manage.py migrate
python manage.py test
python manage.py runserver
```

**Estado:** código inicial, sin migraciones generadas ni ejecución verificada. Los endpoints de API, autenticación de participantes, controles de autorización multiinstitución, transacciones de cupos y pruebas de integración están pendientes. No usar con datos reales de participantes ni desplegar en producción.

## Decisiones
- Una cuenta digital puede vincularse a un perfil Participante; los participantes asistidos pueden existir sin cuenta.
- La tabla Afiliacion permite que un participante pertenezca a varias instituciones.
- Membresia vincula operadores y administradores con su institución.
- Inscripcion relaciona Afiliacion con Sesion. La correspondencia de institución y los cupos deben validarse en servicios transaccionales futuros.
- `DJANGO_DEBUG` está desactivado por defecto. Configurar una clave secreta real para cualquier despliegue.

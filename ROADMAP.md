# Hoja de ruta de Activa Mayor

**Objetivo:** transformar el prototipo React en un MVP institucional verificable, con evolución gradual hacia un SaaS. Esta hoja de ruta es una planificación, no una declaración de funcionalidades terminadas.

## Fase 0. Diagnóstico y orden del repositorio

- [x] Crear rama `develop` desde `main`.
- [x] Documentar estado actual y visión en README.
- [x] Crear esta hoja de ruta.
- [ ] Ejecutar `npm run lint` y `npm run build`; registrar resultados.
- [ ] Auditar accesibilidad, navegación, filtros, enlaces, imágenes y contenido demostrativo.
- [ ] Revisar dependencias y exposición de secretos.
- [ ] Configurar CI en GitHub Actions para lint y build.
- [ ] Definir plantilla de issues y pull requests.

**Criterio de salida:** diagnóstico documentado y controles automáticos básicos verificables.

## Fase 1. Definición del MVP institucional

- [ ] Entrevistar al menos a un potencial usuario institucional y personas mayores.
- [ ] Definir roles: administrador de plataforma, administrador institucional y participante.
- [ ] Diseñar flujos de talleres, cupos, inscripciones y cancelaciones.
- [ ] Establecer requisitos de accesibilidad y usabilidad.
- [ ] Priorizar funcionalidades con criterios de aceptación y prototipos.

**Criterio de salida:** alcance acordado y casos de uso comprobables.

## Fase 2. Base técnica y seguridad

- [ ] Evaluar backend (por ejemplo Django REST Framework) y base de datos (por ejemplo PostgreSQL).
- [ ] Diseñar entidades: institución, usuario, rol, actividad, sesión e inscripción.
- [ ] Implementar autenticación y autorización por rol.
- [ ] Aislar datos por institución y probar acceso cruzado.
- [ ] Configurar entornos, migraciones, respaldos, gestión de secretos y registros.
- [ ] Establecer política de privacidad y tratamiento de datos personales.

**Criterio de salida:** acceso seguro y separación institucional probada.

## Fase 3. MVP funcional

- [ ] Panel administrativo para crear y editar actividades.
- [ ] Gestión de sesiones, cupos e inscripciones reales.
- [ ] Vista de actividades accesible para participantes.
- [ ] Estados, mensajes de error y confirmaciones comprensibles.
- [ ] Pruebas unitarias, de integración y de flujos principales.

**Criterio de salida:** una institución piloto puede publicar y administrar talleres sin usar datos ficticios para simular inscripciones.

## Fase 4. Piloto y validación comercial

- [ ] Probar con una institución interesada, con acuerdos y consentimiento adecuados.
- [ ] Medir facilidad de uso, fallos, inscripciones y carga administrativa.
- [ ] Corregir problemas observados.
- [ ] Evaluar costos operativos, soporte, precio y disposición real a pagar.
- [ ] Preparar demo y propuesta de licencia sin transferir el código fuente.

**Criterio de salida:** evidencia de utilidad y decisión informada sobre comercialización.

## Funcionalidades posteriores, no incluidas en el MVP inicial

- Directorio y agenda de profesionales verificados.
- Información sobre programas de apoyo.
- Contenidos de alimentación y bienestar revisados por especialistas.
- Personalización basada en condiciones de salud **solo** tras evaluación clínica, legal y de protección de datos.
- Facturación, suscripciones y herramientas avanzadas para múltiples instituciones.

## Riesgos y decisiones pendientes

1. **Privacidad:** evitar recopilar diagnósticos y otros datos sensibles hasta contar con una necesidad justificada y medidas adecuadas.
2. **Seguridad:** `localStorage` no equivale a autenticación; reemplazar el registro demostrativo.
3. **Accesibilidad:** validar con personas mayores, no asumir que una interfaz visualmente simple basta.
4. **Propiedad intelectual:** verificar autoría, licencias de recursos y marca antes de comercializar.
5. **Alcance:** evitar funciones clínicas o de recomendación personalizada sin profesionales responsables.
6. **Escalabilidad:** no prometer capacidad para una cantidad concreta de usuarios sin pruebas de carga.

## Convención de seguimiento

Cada tarea debe indicar: problema, alcance, criterios de aceptación, rama, cambios realizados, pruebas ejecutadas con resultados PASS/FAIL y evidencia (commit/PR). Marcar como completado únicamente lo verificado.

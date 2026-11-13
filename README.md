# Activa Mayor

**Estado:** prototipo frontend en evolución. **Rama de trabajo:** `develop`.

Activa Mayor es una propuesta de plataforma digital para facilitar el acceso de personas mayores a actividades físicas adaptadas y, en futuras etapas, apoyar la gestión de talleres y servicios de instituciones que trabajan con ellas.

## Visión del producto

Evolucionar hacia un software como servicio (SaaS) para centros de adultos mayores, fundaciones y municipalidades. Cada institución podrá gestionar sus actividades y participantes en un espacio propio. Esta visión **no representa funcionalidades implementadas actualmente**.

## Funcionalidades actuales (prototipo)

- Página de inicio y navegación entre secciones.
- Catálogo estático de actividades físicas.
- Búsqueda y filtro de actividades según movilidad.
- Formulario de registro demostrativo.

**Limitaciones conocidas:** no hay backend, base de datos, autenticación real, reserva/inscripción funcional a talleres ni separación de datos por institución. El formulario guarda solamente el nombre en `localStorage`; no crea una cuenta. Las descripciones sobre supervisión profesional son contenido de demostración y requieren validación antes de comercializarse.

## Tecnologías actuales

- React 19
- React Router 7
- Vite 8
- Tailwind CSS 4
- ESLint

## Ejecutar en desarrollo

Requisitos: Node.js y npm compatibles con la versión de Vite indicada en `package.json`.

```bash
git clone https://github.com/aineisanchezf94-blip/activa-mayor.git
cd activa-mayor
git switch develop
npm install
npm run dev
```

Abrir la URL local indicada por Vite.

### Comprobaciones disponibles

```bash
npm run lint
npm run build
```

Actualmente no existe un script de pruebas automatizadas. La presencia de estos comandos no implica que se hayan ejecutado o aprobado en esta revisión.

## Estructura principal

```text
src/
  components/  # Componentes de interfaz reutilizables
  pages/       # Inicio, Actividades y Registro
  App.jsx      # Rutas y estructura principal
  main.jsx     # Punto de entrada de React
```

## Flujo de trabajo

- `main`: conservar la versión principal.
- `develop`: integrar cambios planificados y revisados.
- Ramas `feature/...` y `fix/...`: trabajo aislado por funcionalidad o corrección.
- Documentar cambios, comprobaciones y pendientes en cada pull request.
- No incluir secretos ni información médica real en commits, ejemplos o demostraciones públicas.

## Próximos pasos

Consultar [ROADMAP.md](ROADMAP.md). Antes de recopilar datos personales o de salud, definir controles de acceso, privacidad, consentimiento y revisión legal/profesional aplicable.

## Estado comercial y titularidad

Proyecto en etapa de prototipo; no se declara listo para producción ni validado comercialmente. La titularidad de los aportes, licencias de recursos de terceros y disponibilidad de marca deben revisarse antes de ofrecer contratos comerciales.

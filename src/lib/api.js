const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export async function obtenerActividades() {
  const response = await fetch(`${API_BASE}/actividades/`);
  if (!response.ok) throw new Error('No fue posible cargar las actividades');
  return response.json();
}

export async function obtenerSesiones() {
  const response = await fetch(`${API_BASE}/sesiones/`);
  if (!response.ok) throw new Error('No fue posible cargar las sesiones');
  return response.json();
}

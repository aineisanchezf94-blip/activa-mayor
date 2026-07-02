import React, { useState, useEffect } from 'react';

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    movilidad: 'alta',
    contactoEmergencia: ''
  });

  const [mensaje, setMensaje] = useState('');
  // Estado para saludar al usuario si ya está registrado localmente
  const [usuarioGuardado, setUsuarioGuardado] = useState('');

  // Al cargar el componente, verificamos si ya existe un registro en el navegador
  useEffect(() => {
    const nombreExistente = localStorage.getItem('usuario_activa_mayor');
    if (nombreExistente) {
      setUsuarioGuardado(nombreExistente);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.edad || !formData.contactoEmergencia) {
      setMensaje('❌ Por favor, completa todos los campos requeridos.');
      return;
    }

    // Guardamos el nombre en el localStorage del navegador
    localStorage.setItem('usuario_activa_mayor', formData.nombre);
    setUsuarioGuardado(formData.nombre);

    if (parseInt(formData.edad) < 60) {
      setMensaje('⚠️ Nota: Aplicación optimizada para mayores de 60 años. ¡Igual te registramos!');
    } else {
      setMensaje('✅ ¡Registro completado con éxito! Bienvenido a Activa Mayor.');
    }
  };

  // Función opcional para cerrar sesión o borrar el almacenamiento
  const handleCerrarSesion = () => {
    localStorage.removeItem('usuario_activa_mayor');
    setUsuarioGuardado('');
    setMensaje('');
    setFormData({ nombre: '', edad: '', movilidad: 'alta', contactoEmergencia: '' });
  };

  return (
    <main className="max-w-xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-brand-dark mb-2 tracking-tight">
          Formulario de Registro
        </h2>
        {/* Renderizado condicional si el navegador ya recuerda al usuario */}
        {usuarioGuardado ? (
          <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl mb-4 border border-emerald-100 flex justify-between items-center">
            <span>👋 ¡Hola de nuevo, <strong className="font-bold">{usuarioGuardado}</strong>! Sesión activa.</span>
            <button onClick={handleCerrarSesion} className="text-xs bg-brand-dark text-white px-3 py-1 rounded-md hover:bg-slate-700">
              Cambiar cuenta
            </button>
          </div>
        ) : (
          <p className="text-slate-500 text-sm md:text-base">
            Únete a Activa Mayor para recibir rutinas adaptadas a tus necesidades físicas.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100 flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="font-semibold text-brand-accent text-sm">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. María González"
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="edad" className="font-semibold text-brand-accent text-sm">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            placeholder="Ej. 68"
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="movilidad" className="font-semibold text-brand-accent text-sm">Nivel de Movilidad:</label>
          <select
            id="movilidad"
            name="movilidad"
            value={formData.movilidad}
            onChange={handleChange}
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
          >
            <option value="alta">Alta (Camina sin dificultad)</option>
            <option value="media">Media (Usa bastón o apoyo ocasional)</option>
            <option value="baja">Baja (Movilidad reducida / Silla de ruedas)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contactoEmergencia" className="font-semibold text-brand-accent text-sm">Teléfono de un Familiar:</label>
          <input
            type="tel"
            id="contactoEmergencia"
            name="contactoEmergencia"
            value={formData.contactoEmergencia}
            onChange={handleChange}
            placeholder="Ej. +56912345678"
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        <button type="submit" className="w-full py-3.5 bg-brand-primary text-white rounded-xl text-base font-bold shadow-md hover:bg-emerald-600 transition-all">
          Inscribirse Ahora
        </button>
      </form>

      {mensaje && (
        <div className={`mt-6 p-4 rounded-xl text-center font-semibold text-sm border ${
          mensaje.includes('❌') ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
        }`}>
          {mensaje}
        </div>
      )}
    </main>
  );
}

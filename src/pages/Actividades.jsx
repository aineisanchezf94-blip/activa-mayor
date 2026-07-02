import React, { useState } from 'react';

// 1. IMPORTAMOS LAS IMÁGENES LOCALES DESDE LA CARPETA ASSETS
import imgYoga from '../assets/yoga.jpg';
import imgCaminata from '../assets/caminata.jpg';
import imgGimnasia from '../assets/gimnasia.jpg';

const listaActividades = [
  {
    id: 1,
    titulo: 'Yoga Adaptado',
    intensidad: 'Baja',
    duracion: '45 min',
    movilidadRequerida: 'media',
    descripcion: 'Ejercicios de estiramiento y respiración adaptados en silla o colchoneta para mejorar la flexibilidad sin sobreesfuerzo.',
    imagen: imgYoga // <- Asignamos la imagen importada
  },
  {
    id: 2,
    titulo: 'Caminata Guiada',
    intensidad: 'Media',
    duracion: '60 min',
    movilidadRequerida: 'alta',
    descripcion: 'Recorridos grupales al aire libre a ritmo moderado, ideales para fortalecer el sistema cardiovascular y socializar.',
    imagen: imgCaminata // <- Asignamos la imagen importada
  },
  {
    id: 3,
    titulo: 'Gimnasia Mayor',
    intensidad: 'Media-Alta',
    duracion: '50 min',
    movilidadRequerida: 'alta',
    descripcion: 'Rutinas de fuerza con mancuernas ligeras y bandas elásticas para mantener la masa muscular y corregir la postura.',
    imagen: imgGimnasia // <- Asignamos la imagen importada
  },
  {
    id: 4,
    titulo: 'Taller de Equilibrio',
    intensidad: 'Baja',
    duracion: '40 min',
    movilidadRequerida: 'media',
    descripcion: 'Ejercicios específicos diseñados para mejorar la estabilidad diaria y prevenir de manera eficaz el riesgo de caídas.',
    imagen: imgYoga // Podemos reutilizar yoga o caminata para las faltantes temporales
  },
  {
    id: 5,
    titulo: 'Movilidad en Silla',
    intensidad: 'Baja',
    duracion: '30 min',
    movilidadRequerida: 'baja',
    descripcion: 'Gimnasia pasiva y activa realizada completamente sentados. Ideal para articulaciones rígidas o movilidad muy reducida.',
    imagen: imgYoga
  }
];

export default function Actividades() {
  const [filtroMovilidad, setFiltroMovilidad] = useState('todas');
  const [busquedaTexto, setBusquedaTexto] = useState('');

  const actividadesFiltradas = listaActividades.filter((actividad) => {
    let pasaMovilidad = true;
    if (filtroMovilidad === 'baja') {
      pasaMovilidad = actividad.movilidadRequerida === 'baja';
    } else if (filtroMovilidad === 'media') {
      pasaMovilidad = actividad.movilidadRequerida === 'media' || actividad.movilidadRequerida === 'baja';
    }

    const cumpleTexto = 
      actividad.titulo.toLowerCase().includes(busquedaTexto.toLowerCase()) ||
      actividad.descripcion.toLowerCase().includes(busquedaTexto.toLowerCase());

    return pasaMovilidad && cumpleTexto;
  });

  return (
    <main className="w-full py-8 max-w-6xl mx-auto px-4">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3 tracking-tight">
          Nuestras Actividades Adaptadas
        </h2>
        <p className="text-slate-500 text-base max-w-2xl mx-auto">
          Encuentra tus talleres ideales buscando por nombre o seleccionando tu capacidad física actual.
        </p>
      </div>

      {/* Entrada de Búsqueda por Texto */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Buscar actividad (ej: Yoga, Silla, Caminata...)"
            value={busquedaTexto}
            onChange={(e) => setBusquedaTexto(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setFiltroMovilidad('todas')}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
            filtroMovilidad === 'todas' ? 'bg-brand-dark text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          ✨ Mostrar Todas
        </button>
        <button
          onClick={() => setFiltroMovilidad('alta')}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
            filtroMovilidad === 'alta' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-emerald-700 hover:bg-slate-200'
          }`}
        >
          🟢 Movilidad Alta
        </button>
        <button
          onClick={() => setFiltroMovilidad('media')}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
            filtroMovilidad === 'media' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-amber-700 hover:bg-slate-200'
          }`}
        >
          🟡 Movilidad Media
        </button>
        <button
          onClick={() => setFiltroMovilidad('baja')}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
            filtroMovilidad === 'baja' ? 'bg-rose-500 text-white' : 'bg-slate-100 text-rose-700 hover:bg-slate-200'
          }`}
        >
          🔴 Movilidad Baja
        </button>
      </div>

      {/* Rejilla de Tarjetas Modulares */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {actividadesFiltradas.map((actividad) => (
          <div key={actividad.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xl shadow-slate-100 flex flex-col transform hover:-translate-y-1 transition-transform duration-200">
            <div className="h-48 w-full overflow-hidden bg-slate-100">
              {/* Renderiza de forma segura la imagen local cargada en el bundle */}
              <img src={actividad.imagen} alt={actividad.titulo} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <h3 className="font-bold text-brand-dark text-xl">{actividad.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{actividad.descripcion}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  📊 {actividad.intensidad}
                </span>
                <span className="text-xs font-semibold text-slate-500">⏱️ {actividad.duracion}</span>
              </div>
              <button className="w-full py-2.5 mt-2 border border-brand-primary text-brand-primary font-bold text-sm rounded-xl hover:bg-emerald-50 transition-all">
                Inscribirme a este taller
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}


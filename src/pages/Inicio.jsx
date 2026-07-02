import React from 'react';
import { Link } from 'react-router-dom';

// 🌟 IMPORTAMOS LA IMAGEN DE PORTADA DESDE LA CARPETA ASSETS
import imgPortada from '../assets/portada.jpg';

export default function Inicio() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-6">
      
      {/* Sección Hero con Imagen Local */}
      <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-16 bg-slate-900 min-h-[450px] md:min-h-[500px] flex items-center">
        
        {/* Usamos la imagen local importada de forma segura */}
        <img 
          src={imgPortada} 
          alt="Adultos mayores activos y sonrientes" 
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity transform scale-105 transition-transform duration-700 hover:scale-100"
        />

        {/* Capa de degradado para asegurar la lectura del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent"></div>

        {/* Contenido de la sección principal */}
        <div className="relative z-10 max-w-2xl px-6 md:px-12 py-12 text-white">
          <span className="inline-block bg-brand-primary text-white text-xs md:text-sm font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
            🏃‍♂️ Enfoque Tercera Edad
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight">
            ¡Mantente Fuerte, Siente la Energía!
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-8 font-medium leading-relaxed">
            Descubre un espacio diseñado especialmente para adultos mayores que desean mejorar su movilidad, vitalidad y bienestar diario mediante rutinas seguras y en comunidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/registro" 
              className="bg-brand-primary hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-extrabold text-base md:text-lg shadow-lg transform hover:-translate-y-0.5 transition-all inline-block no-underline"
            >
              Comenzar Gratis ➡️
            </Link>
            <Link 
              to="/actividades" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs px-6 py-3.5 rounded-xl font-bold text-base transition-all inline-block no-underline"
            >
              Ver Talleres
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Pilares o Beneficios */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
            ¿Por qué elegir Activa Mayor?
          </h3>
          <p className="text-slate-500 text-sm md:text-base mt-2">Tres pilares fundamentales para tu bienestar diario</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 text-center flex flex-col items-center transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-4">🩺</div>
            <h4 className="text-lg font-bold text-brand-dark mb-2">Ejercicios Seguros</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Todas las rutinas están adaptadas por profesionales de la kinesiología para proteger tus articulaciones y espalda.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 text-center flex flex-col items-center transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl bg-amber-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-4">👥</div>
            <h4 className="text-lg font-bold text-brand-dark mb-2">Comunidad Activa</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Comparte experiencias, asiste a entretenidos talleres grupales y haz nuevas amistades mientras entrenas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 text-center flex flex-col items-center transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl bg-rose-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-4">📊</div>
            <h4 className="text-lg font-bold text-brand-dark mb-2">Progreso Guiado</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Evaluamos interactivamente tu nivel de movilidad para recomendarte las actividades idóneas paso a paso.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Inferior de Conectividad */}
      <section className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 md:p-10 text-center md:flex md:justify-between md:items-center md:text-left shadow-xs">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl md:text-2xl font-bold text-brand-dark mb-1">¿Listo para dar el primer paso hacia tu vitalidad?</h4>
          <p className="text-slate-500 text-sm md:text-base">Regístrate en menos de 2 minutos de forma fácil, accesible y digital.</p>
        </div>
        <Link 
          to="/registro" 
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 active:scale-98 transition-all shadow-md no-underline"
        >
          Ir al Formulario de Registro 📝
        </Link>
      </section>
    </main>
  );
}

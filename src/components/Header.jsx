import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center padding px-6 py-4 bg-slate-50 border-b border-slate-200 shadow-sm方案">
      {/* Identidad / Logotipo de la marca */}
      <div className="flex items-center">
        <Link to="/" className="text-xl md:text-2xl no-underline text-brand-dark hover:opacity-90 transition-opacity">
          🏃‍♂️ <span className="font-extrabold tracking-tight">Activa Mayor</span>
        </Link>
      </div>

      {/* Navegación Funcional Semántica */}
      <nav className="flex items-center gap-6">
        <Link to="/" className="no-underline text-brand-accent font-medium hover:text-brand-primary transition-colors">
          Inicio
        </Link>
        <Link to="/actividades" className="no-underline text-brand-accent font-medium hover:text-brand-primary transition-colors">
          Actividades
        </Link>
        <Link 
          to="/registro" 
          className="no-underline text-white bg-brand-primary px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-emerald-600 transition-all transform hover:scale-105"
        >
          Registrarse
        </Link>
      </nav>
    </header>
  );
}

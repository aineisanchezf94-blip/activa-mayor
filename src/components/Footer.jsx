import React from 'react';

export default function Footer() {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-100 pt-10 pb-4 px-6 mt-auto border-t-4 border-brand-primary">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 mb-8">
        
        {/* Sección de Contacto */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-brand-primary font-bold text-lg mb-4">Contacto Activa Mayor</h4>
          <p className="my-2 text-sm text-slate-300">📍 Dirección: Av. Principal 123, Santiago</p>
          <p className="my-2 text-sm text-slate-300">📞 Teléfono: +56 9 1234 5678</p>
          <p className="my-2 text-sm text-slate-300">✉️ Email: contacto@activamayor.cl</p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-brand-primary font-bold text-lg mb-4">Síguenos en Redes</h4>
          <div className="flex gap-3 flex-wrap">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white no-underline text-xs bg-brand-accent px-4 py-2 rounded-lg font-medium hover:bg-slate-600 transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white no-underline text-xs bg-brand-accent px-4 py-2 rounded-lg font-medium hover:bg-slate-600 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white no-underline text-xs bg-brand-accent px-4 py-2 rounded-lg font-medium hover:bg-slate-600 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

      </div>

      {/* Derechos de autor */}
      <div className="text-center border-t border-slate-700 pt-4 text-xs text-slate-400">
        <p>© {añoActual} Activa Mayor. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

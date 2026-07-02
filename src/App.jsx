import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importamos los componentes globales
import Header from './components/Header';
import Footer from './components/Footer'; // <- Añadido

// Importamos las páginas
import Inicio from './pages/Inicio';
import Actividades from './pages/Actividades';
import Registro from './pages/Registro';

export default function App() {
  return (
    // Usamos flexbox básico para que el footer se mantenga abajo si hay poco contenido
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Cabecera global */}
      <Header />
      
      {/* Contenedor dinámico que crece para empujar el footer hacia abajo */}
      <div style={{ padding: '2rem', flex: '1' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>

      {/* Pie de página global */}
      <Footer />
      
    </div>
  );
}

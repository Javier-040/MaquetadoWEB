import React, { useState } from 'react';

// 1. BARRA SUPERIOR (TOPBAR AZUL)
function Topbar({ setPaginaActual }) {
  return (
    <header className="bg-[#002B66] text-white text-xs fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>Directorio Telefónico</span> |
          <span>Mesa de Partes: 993573589</span> |
          <span>CePre: 967 279 159</span> |
          <span>Admisión: 967 279 139</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setPaginaActual('docente')} 
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded font-semibold text-[11px] transition"
          >
            DOCENTE
          </button>
          <button 
            onClick={() => setPaginaActual('administrativo')} 
            className="bg-red-700 hover:bg-red-800 text-white px-2 py-1 rounded font-semibold text-[11px] transition"
          >
            ADMINISTRATIVO
          </button>
        </div>
      </div>
    </header>
  );
}

// 2. NAVEGACIÓN PRINCIPAL (NAVBAR AMARILLO)
function Navbar({ setPaginaActual }) {
  return (
    <nav className="bg-[#FFB800] text-black font-bold text-sm uppercase tracking-wide relative z-40 shadow-md">
      <div className="container mx-auto px-4 flex justify-center gap-6 py-3">
        <button onClick={() => setPaginaActual('inicio')} className="hover:underline py-1">
          INICIO
        </button>
        <button onClick={() => setPaginaActual('docente')} className="hover:underline py-1">
          DOCENTE
        </button>
        <button onClick={() => setPaginaActual('administrativo')} className="hover:underline py-1">
          ADMINISTRATIVO
        </button>
      </div>
    </nav>
  );
}

// 3. VISTA INICIO
function VistaInicio() {
  return (
    <div>
      {/* Hero con Imagen de fondo y Capa Azul Semitransparente */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80')` }}>
        {/* Capa Azul Transparente */}
        <div className="absolute inset-0 bg-[#002B66]/80"></div>

        {/* Contenido Centrado */}
        <div className="container mx-auto px-4 py-16 relative z-10 text-center text-white flex flex-col items-center">
          <span className="inline-block bg-[#FFB800] text-black text-xs px-3 py-1 font-bold uppercase rounded mb-3">
            Bienvenidos a la UNDC
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight mb-4">
            Universidad Nacional de Cañete
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-lg">
            Portal institucional desarrollado en React con la guía de estilo Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Sección Eventos Breve */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold uppercase text-gray-800">Eventos Institucionales</h2>
        <div className="w-12 h-1 bg-[#FFB800] mx-auto my-3"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          <div className="bg-white p-6 rounded border shadow-sm flex items-center gap-4 text-left">
            <div className="bg-blue-100 text-[#002B66] p-3 rounded font-bold text-center min-w-[70px]">
              <span className="block text-2xl">24</span>
              <span className="text-xs">AGO</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">Ceremonia de Inicio de Semestre 2026-II</h3>
              <p className="text-xs text-gray-500">Bienvenida a los nuevos alumnos y docentes.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border shadow-sm flex items-center gap-4 text-left">
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded font-bold text-center min-w-[70px]">
              <span className="block text-2xl">15</span>
              <span className="text-xs">SET</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">Feria de Investigación y Ciencia</h3>
              <p className="text-xs text-gray-500">Exposición de proyectos académicos de la UNDC.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 4. VISTA DOCENTE
function VistaDocente() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-center">
      <span className="bg-[#FFB800] text-black text-xs font-bold px-3 py-1 rounded uppercase">PORTAL DOCENTE</span>
      <h1 className="text-3xl font-bold text-[#002B66] mt-3 mb-2">Servicios para Profesores</h1>
      <div className="w-12 h-1 bg-[#FFB800] mx-auto mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white rounded overflow-hidden border shadow-sm">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" alt="Aula Virtual" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-base text-gray-800 mb-1">Aula Virtual (Moodle)</h3>
            <p className="text-xs text-gray-600 mb-3">Gestión de cursos, publicación de tareas y registro de notas lectivas.</p>
            <button className="bg-[#002B66] text-white text-xs px-3 py-2 rounded font-semibold hover:bg-blue-900 transition">Ingresar a Moodle</button>
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden border shadow-sm">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="SIVIRENO" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-base text-gray-800 mb-1">Sistema SIVIRENO</h3>
            <p className="text-xs text-gray-600 mb-3">Marcación de asistencia docente y registro de actividades de clase.</p>
            <button className="bg-[#002B66] text-white text-xs px-3 py-2 rounded font-semibold hover:bg-blue-900 transition">Acceder a SIVIRENO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. VISTA ADMINISTRATIVO
function VistaAdministrativo() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-center">
      <span className="bg-[#FFB800] text-black text-xs font-bold px-3 py-1 rounded uppercase">PORTAL ADMINISTRATIVO</span>
      <h1 className="text-3xl font-bold text-[#002B66] mt-3 mb-2">Módulo de Gestión Interna</h1>
      <div className="w-12 h-1 bg-[#FFB800] mx-auto mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white rounded overflow-hidden border shadow-sm">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Trámite Documentario" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-base text-gray-800 mb-1">Trámite Documentario</h3>
            <p className="text-xs text-gray-600 mb-3">Gestión y seguimiento de solicitudes, memorandos y resoluciones institucionales.</p>
            <button className="bg-[#002B66] text-white text-xs px-3 py-2 rounded font-semibold hover:bg-blue-900 transition">Ver Expedientes</button>
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden border shadow-sm">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" alt="Recursos Humanos" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-base text-gray-800 mb-1">Portal del Empleado</h3>
            <p className="text-xs text-gray-600 mb-3">Consulta de boletas de pago, permisos y cronogramas de trabajo.</p>
            <button className="bg-[#002B66] text-white text-xs px-3 py-2 rounded font-semibold hover:bg-blue-900 transition">Entrar al Portal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. COMPONENTE PRINCIPAL (APP)
export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
      <Topbar setPaginaActual={setPaginaActual} />
      <div className="h-[33px]"></div> {/* Espaciador para la barra fija */}
      <Navbar setPaginaActual={setPaginaActual} />

      <main className="flex-grow">
        {paginaActual === 'inicio' && <VistaInicio />}
        {paginaActual === 'docente' && <VistaDocente />}
        {paginaActual === 'administrativo' && <VistaAdministrativo />}
      </main>

      <footer className="bg-[#111827] text-gray-400 py-4 text-center text-xs mt-auto">
        <p>© Universidad Nacional de Cañete - Proyecto React Principiante</p>
      </footer>
    </div>
  );
}
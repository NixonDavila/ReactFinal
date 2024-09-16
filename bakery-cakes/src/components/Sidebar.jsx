import React, { useState } from 'react';
// import "../styles/sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);  // Estado para controlar si el sidebar está abierto o cerrado

  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón para abrir/cerrar el sidebar */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
      </button>

      {/* Sidebar con clase dinámica para abrir/cerrar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul className="sidebar-menu">
            <li><a href="#home" onClick={toggleSidebar}>Inicio</a></li>
            <li><a href="#about" onClick={toggleSidebar}>Acerca de</a></li>
            <li><a href="#services" onClick={toggleSidebar}>Servicios</a></li>
            <li><a href="#contact" onClick={toggleSidebar}>Contacto</a></li>
          </ul>
        </nav>
      </aside>

      {/* Sombra detrás del sidebar cuando está abierto */}
      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </>
  );
}

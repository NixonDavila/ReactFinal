import React from "react";
import "../style/header.css"
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
 const Navigate = useNavigate();
  function cerrarSesion() {
    localStorage.removeItem('Autentificado');
    Navigate('/');
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>Mi Aplicación</h1> {/* Título o logotipo */}
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/Tareas">Lista de tareas</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          <button onClick={cerrarSesion}>Cerrar Sesión</button> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
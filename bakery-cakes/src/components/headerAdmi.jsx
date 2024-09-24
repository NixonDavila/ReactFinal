import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import '../style/header.css'; // Asegúrate de tener un archivo CSS para estilos

const Header = () => {
  const currentDate = new Date().toLocaleDateString();
  const lastLoginTime = new Date().toLocaleTimeString();

  return (
    <header className="admin-header">
      <h1>Panel de Administración</h1>
      <div className="admin-info">
        <p>Bienvenido</p>
        <p>Fecha: {currentDate}</p>
        <p>Último inicio de sesión: {lastLoginTime}</p>
      </div>
      <nav className="admin-nav">
        <ul>
          <li><Link to="/pruebas">Producto</Link></li>
          <li><Link to="/administrador">Principal</Link></li>
          <li><Link to="/settings">Configuraciones</Link></li>
          <li><Link to="/reports">Informes</Link></li>
          <li><Link to="/support">Soporte</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


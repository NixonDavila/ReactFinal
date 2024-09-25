import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import '../style/header.css'; // Asegúrate de tener un archivo CSS para estilos
import imagen from '/src/img/+506 6206 4042 20240627_211905 - Cindy baletti (1).jpg';

const Header = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const currentDate = new Date().toLocaleDateString();
  const lastLoginTime = new Date().toLocaleTimeString();

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem('Administrador');
    navigate('/'); // Redirigir a la página de inicio
  };

  return (
    <header className="admin-header">
      <h1>Panel de Administración</h1>
      <div className='contenedorNav'>     
      <div className="admin-info">
        <p>Bienvenido</p>
        <p>Fecha: {currentDate}</p>
        <p>Último inicio de sesión: {lastLoginTime}</p>
      </div>
      <div id='img_container'>
        <img id='logo2' src={imagen} alt="Logo2" />
      </div>
      </div>
      
     
      <nav className="admin-nav">
        <ul>
          <li><Link to="/pruebas">Producto</Link></li>
          <li><Link to="/administrador">Principal</Link></li>
          <li><Link to="/registro-empleados">Registro-Empleados</Link></li>
         
        </ul>
      </nav>
      <button onClick={cerrarSesion} className="btn-logout">Cerrar Sesión</button>
    
    </header>
  );
};

export default Header;



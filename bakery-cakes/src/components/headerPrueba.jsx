import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importa Link
import "../style/App.css";
import imagen from '/src/img/+506 6206 4042 20240627_211905 - Cindy baletti (1).jpg';

const HeaderP = ({ setTipoPastel }) => {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem('Autentificado');
    navigate('/');
  }

  const handleTipoPastelChange = (event) => {
    setTipoPastel(event.target.value);
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <img id='logo' src={imagen} alt="Logo" />
      </div>
      <nav>
        <ul className="navigation-links">
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className="cake-type-selector">
        <label htmlFor="tipoPastel">Tipo de pastel:</label>
        <select id="tipoPastel" onChange={handleTipoPastelChange}>
          <option value="">--Elige una opción--</option>
          <option value="ninos">Para Niño</option>
          <option value="ninas">Para Niña</option>
          <option value="hombre">Para Hombre</option>
          <option value="mujer">Para Mujer</option>
          <option value="graduacion">Graduación</option>
          <option value="papa">Para Papá</option>
          <option value="mama">Para Mamá</option>
        </select>
      </div>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </header>
  );
};

export default HeaderP;



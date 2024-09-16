import React from "react";
import "../style/footer.css"; // Importa el archivo CSS para el footer

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><a className="af" href="#about">Acerca de</a></li>
            <li><a className="af" href="#contact">Contacto</a></li>
            <li><a className="af" href="#privacy">Política de Privacidad</a></li>
            <li><a className="af" href="#terms">Términos y Condiciones</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <ul className="social-links">
            <li><a className="af" href="https://facebook.com">Facebook</a></li>
            <li><a className="af" href="https://twitter.com">Twitter</a></li>
            <li><a className="af" href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
import React from "react";
// import "../styles/contacto.css"; // Importa el archivo CSS para el formulario de contacto

function ContactForm() {
  return (
    <div className="contact-us-container">
    <h1>Contáctanos</h1>
    <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través del siguiente formulario o usando los detalles de contacto que se muestran a continuación.</p>
    
    {/* Información de contacto */}
    <div className="contact-info">
      <div className="contact-info-item">
        <h3>Dirección</h3>
        <p>Calle Falsa 123, Ciudad, País</p>
      </div>
      <div className="contact-info-item">
        <h3>Teléfono</h3>
        <p>+1 (234) 567-890</p>
      </div>
      <div className="contact-info-item">
        <h3>Correo Electrónico</h3>
        <p>info@example.com</p>
      </div>
    </div>

    {/* Formulario de contacto */}
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder="Ingresa tu nombre" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" placeholder="Ingresa tu correo electrónico" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Asunto</label>
        <input type="text" id="subject" placeholder="Ingresa el asunto" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" placeholder="Escribe tu mensaje" rows="4" required></textarea>
      </div>
      <button type="submit" className="btn-submit">Enviar</button>
    </form>

    {/* Enlaces a redes sociales */}
    <div className="social-media">
      <h3>Síguenos</h3>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  </div>
  );
}

export default ContactForm;

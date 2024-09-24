// import React from "react";
import "../style/contacto.css"// Importa el archivo CSS para el formulario de contacto
// import Email from "./email";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6365jdo', 'template_y1da1fr', form.current, {
        publicKey: 'vQRSOmVSKnrmyCeOG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className="contact-us-container">
    <h1>Contáctanos</h1>
    <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través del siguiente formulario o usando los detalles de contacto que se muestran a continuación.</p>
    
    {/* Información de contacto */}
    <div className="contact-info">
      <div className="contact-info-item">
        <h3>Teléfono</h3>
        <p>+506 63235727 </p>
      </div>
      <div className="contact-info-item">
        <h3>WhatsApp</h3>
        <p>+506  62064042</p>
      </div>
      <div className="contact-info-item">
        <h3>Correo Electrónico</h3>
        <p>balettisalgomez@gmail.com</p>
      </div>
    </div>

    {/* Formulario de contacto */}
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
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

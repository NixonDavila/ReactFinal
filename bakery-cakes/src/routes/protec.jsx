
import React from 'react';
import { Navigate } from 'react-router-dom';

const Protec = ({ children }) => { // 'children' con c minúscula

  const estaAutentificado = localStorage.getItem("Autentificado") === "true";

  if (!estaAutentificado) {
    return <Navigate to={"/"} />; // Redirigir a la página de login si no está autenticado
  }

  return children;
}

export default Protec;


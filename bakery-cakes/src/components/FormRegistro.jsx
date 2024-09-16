import React, { useState } from "react";
import postUser from "../services/post";
import "../style/registro.css";
import { useNavigate } from "react-router-dom";
import getUsers from "../services/get";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate(); // Hook para navegar programáticamente

  const registrar = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
     
    const users = await getUsers();

    const user = users.some((user) => user.username === username);

    if (user) {
     alert("nombre no disponible")
    }else{
      alert("")
    }
   
    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden, por favor revisa");
      return;
    }

    try {
      // Intentar enviar los datos del usuario
      await postUser(username, email, password);
      alert("El usuario se ha registrado exitosamente");
      navigate("/login"); // Redirigir a la página de login después del registro exitoso

      // Limpiar los campos del formulario
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error al registrar el usuario", error);
      alert("Hubo un problema con el registro");
    }
  };

  // Función para redirigir a la página de login
  const goToLogin = () => {
    navigate("/login"); // Navegar a la página de Login
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={registrar}>
        <h2 className="colorLetra">Registro</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirma tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn-register">
          Registrarse
        </button>
     
      </form>
        {/* Botón de Login */}
        <button onClick={goToLogin} className="btn-logi">
                ¿Ya tienes una cuenta? Inicia sesión
              </button>
    </div>
  );
}

export default FormRegister;







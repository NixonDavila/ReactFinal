import React, { useState } from "react";
import getUsers from "../services/get";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import Swal from 'sweetalert2';

function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    try {

      if (username === 'PATRONCITA' && password === 'c1n1dybal3') {
        localStorage.setItem('Autentificado', 'true');
        Swal.fire("La patrona a llegado !").then(() => {
          navigate('/administrador'); // Redirigir al usuario a la página de administrador
        });
       return
      }


      const users = await getUsers();
      const user = users.find((user) => user.username === username);

      if (user) {
        if (user.password === password) {
          localStorage.setItem('Autentificado', 'true');
          Swal.fire("Inicio de sesión exitoso!").then(() => {
            navigate("/home"); // Redirigir al usuario a la página de Home
          });
        } else {        
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contraseña incorrecta!",         
          });
        }
      } else {      
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario incorrecto!",         
        });
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al iniciar sesión. Inténtalo de nuevo.",
      });
    }
  };

  // Función para manejar la navegación al registro
  const goToRegister = () => {
    navigate("/registro"); // Cambia la ruta a la página de registro
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
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
        <button type="submit" className="btn-login">
          Ingresar
        </button>
        {/* Botón estilizado como enlace */}
        <button type="button" onClick={goToRegister} className="btn-link">
          ¿No tienes una cuenta? Regístrate aquí
        </button>
      </form>
    </div>
  );
}

export default FormLogin;


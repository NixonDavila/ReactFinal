import React, { useState, useEffect } from "react";
import postUser from "../services/post";
import "../style/registro.css";
import { useNavigate } from "react-router-dom";
import getUsers from "../services/get";
import Swal from 'sweetalert2';

function FormRegister() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Hook para navegar programáticamente

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const registrar = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    
    const { username, email, password, confirmPassword } = formData;

    if (users.some(user => user.username === username)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nombre de usuario no disponible!",
      });
    }

    if (users.some(user => user.email === email)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo no disponible!",
      });
    }

    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden, por favor revisa!",
      });
    }

    try {
      // Intentar enviar los datos del usuario
      await postUser(username, email, password);
      Swal.fire("El usuario se ha registrado exitosamente!").then(() => {
        navigate("/login"); // Redirigir a la página de login después del registro exitoso
      });

      // Limpiar los campos del formulario
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema con el registro!",
      });
    }
  };

  const goToLogin = () => {
    navigate("/login"); // Navegar a la página de Login
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={registrar}>
        <h2 className="colorLetra">𝑅𝑒𝑔𝒾𝓈𝓉𝓇𝑜</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
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








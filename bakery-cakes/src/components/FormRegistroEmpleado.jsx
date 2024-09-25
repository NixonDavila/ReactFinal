import React, { useState, useEffect } from "react";
import postEmpleado from "../services/postEmpleados"; // Servicio para registrar empleados
import "../style/registro.css";
import { useNavigate } from "react-router-dom";
import getEmpleados from "../services/getEmpleados"; // Servicio para obtener empleados
import Swal from 'sweetalert2';

function FormularioRegistroEmpleado() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    email: "",
    cedula: "",
    contraseña: "",
    confirmarContraseña: "",
  });
  const [empleados, setEmpleados] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    const obtenerEmpleados = async () => {
      const empleadosObtenidos = await getEmpleados();
      setEmpleados(empleadosObtenidos);
    };
    obtenerEmpleados();
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const registrarEmpleado = async (e) => {
    e.preventDefault();

    const { nombre, email, cedula, contraseña, confirmarContraseña } = datosFormulario;

    if (empleados.some(empleado => empleado.email === email)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo no disponible!",
      });
    }

    if (empleados.some(empleado => empleado.cedula === cedula)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cédula no disponible!",
      });
    }

    if (contraseña !== confirmarContraseña) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden, por favor revisa!",
      });
    }

    try {
      await postEmpleado(nombre, email, cedula, contraseña);
      Swal.fire("El empleado se ha registrado exitosamente!");

      setDatosFormulario({ nombre: "", email: "", cedula: "", contraseña: "", confirmarContraseña: "" });
    } catch (error) {
      console.error("Error al registrar el empleado:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema con el registro!",
      });
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={registrarEmpleado}>
        <h2 className="colorLetra">𝑅𝑒𝑔𝒾𝓈𝓉𝓇𝑜 𝑒𝓶𝓹𝑙𝑒𝒶𝒹𝑜</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datosFormulario.nombre}
            onChange={manejarCambio}
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={datosFormulario.email}
            onChange={manejarCambio}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cedula">Número de Cédula</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={datosFormulario.cedula}
            onChange={manejarCambio}
            placeholder="Ingresa tu número de cédula"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={datosFormulario.contraseña}
            onChange={manejarCambio}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarContraseña"
            name="confirmarContraseña"
            value={datosFormulario.confirmarContraseña}
            onChange={manejarCambio}
            placeholder="Confirma tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn-register">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default FormularioRegistroEmpleado;



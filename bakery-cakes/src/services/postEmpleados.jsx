// services/postEmpleado.js
async function postEmpleado(nombre, email, cedula, contraseña) {
    try {
        let nuevoEmpleado = {
            nombre,
            email,
            cedula,
            contraseña
        };

        let response = await fetch('http://localhost:3001/empleados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoEmpleado)
        });

        if (!response.ok) {
            throw new Error('No se pudo guardar el empleado');
        }

        let data = await response.json();
        console.log('Empleado guardado con éxito:', data);
    } catch (error) {
        console.error('No se pudo guardar el empleado:', error);
    }
}

export default postEmpleado;



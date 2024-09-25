// services/getEmpleados.js
async function getEmpleados() {
    try {
        const response = await fetch('http://localhost:3001/empleados', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener empleados');
        }

        const empleados = await response.json();
        return empleados;
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        throw error;
    }
}

export default getEmpleados;

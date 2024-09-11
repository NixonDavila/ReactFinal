export default async function putTarea(editarTarea,id) {
    try {
     
        const response = await fetch(`http://localhost:3001/tareas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editarTarea, id)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}


async function deleteTarea(id) {
    try {
        const response = await fetch(`http://localhost:3001/tareas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting tarea with id ${id}`);
        }

        return { message: `tarea with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting tarea:', error);
        throw error;
    }
}

export default deleteTarea
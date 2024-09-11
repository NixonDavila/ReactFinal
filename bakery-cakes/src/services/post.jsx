async function postUser(username, email, password) {
    try {
        let nuevoUsuario = {
            username,
            email,
            password
        };

        let response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        });

        if (!response.ok) {
            throw new Error('No se pudo guardar el usuario');
        }

        let data = await response.json();
        console.log('Usuario guardado con éxito:', data);
    } catch (error) {
        console.error('No se pudo guardar el usuario:', error);
    }
}




export default postUser

async function getProducts() {
    try {
        const response = await fetch('http://localhost:3001/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export default getProducts
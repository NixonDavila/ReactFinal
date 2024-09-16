async function postProduct(productData) {
    try {
        const response = await fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify(productData)
        });

        console.log('Response status:', response.status); // Añadido para depuración
        if (!response.ok) {
            throw new Error('No se pudo guardar el producto');
        }

        const data = await response.json();
        console.log('Producto guardado con éxito:', data);
    } catch (error) {
        console.error('No se pudo guardar el producto:', error);
    }
}

export default postProduct

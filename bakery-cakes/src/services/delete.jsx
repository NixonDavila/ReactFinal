


export default async function deleteProduct(productId) {
    try {
        const response = await fetch(`http://localhost:3001/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error eliminando el producto con id ${productId}`);
        }

        return { message: `Producto con id ${productId} eliminado exitosamente` };
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
}



 
// services/put.js
export default async function putProducto(productData, productId) {
    try {
      const response = await fetch(`http://localhost:3001/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData) // Envia el objeto con los datos a actualizar
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta de la red');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      throw error;
    }
  }
  


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import deleteProduct from '../services/delete';
import getProducts from '../services/getProducts';
import "../style/Editar.css";
import ModalEditar from './ModalEditar'; // Asegúrate de que esta ruta sea correcta

function TarjetaAdmin() {
  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProductos(products);
    };
    fetchProducts();
  }, []);

  const eliminarP = async (productId) => {
    try {
      await deleteProduct(productId);
      setProductos(productos.filter(producto => producto.id !== productId));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const editarProducto = (producto) => {
    setProductoEditado(producto);
  };

  const actualizarProducto = async (productoActualizado) => {
    try {
      const updatedProducts = productos.map(p => p.id === productoActualizado.id ? productoActualizado : p);
      setProductos(updatedProducts);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
    setProductoEditado(null);
  };

  return (
    <div>
      {productos.map((producto) => (
        <Card style={{ width: '18rem' }} key={producto.id}>
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Img src={producto.image} />
            <Card.Text>{producto.price}</Card.Text>
            <Card.Text>{producto.size}</Card.Text>
            <Button variant='danger' onClick={() => eliminarP(producto.id)}>
              Eliminar
            </Button>
            <Button variant='primary' onClick={() => editarProducto(producto)}>
              Editar
            </Button>
          </Card.Body>
        </Card>
      ))}
      {productoEditado && (
        <ModalEditar 
          productoEditado={productoEditado}
          actualizarProducto={actualizarProducto}
        />
      )}
    </div>
  );
}

export default TarjetaAdmin;









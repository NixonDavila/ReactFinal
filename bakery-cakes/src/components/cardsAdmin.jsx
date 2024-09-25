
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import deleteProduct from '../services/delete';
import getProducts from '../services/getProducts';
import "../style/Editar.css";
import ModalEditar from './ModalEditar'; 
import Swal from 'sweetalert2';
import "../style/cardsAdmin.css"

function TarjetaAdmin() {
  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const products = await getProducts();
      setProductos(products);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron cargar los productos.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchProducts()}, [fetchProducts]);

  const eliminarP = (async (productId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
  
    const result = await swalWithBootstrapButtons.fire({
      title: "¿Está seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, Elimina esto!",
      cancelButtonText: "No, cancela!",
      reverseButtons: true
    });
  
    if (result.isConfirmed) {
      try {
        await deleteProduct(productId);
        setProductos(prevProductos => prevProductos.filter(producto => producto.id !== productId));
        swalWithBootstrapButtons.fire({
          title: "¡Eliminado!",
          text: "Tu archivo ha sido eliminado.",
          icon: "success"
        });
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        swalWithBootstrapButtons.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el producto.",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Tu archivo está a salvo :)",
        icon: "error"
      });
    }
  }, []);

  const editarProducto = ((producto) => {
    setProductoEditado(producto);
  });

  const actualizarProducto = (async (productoActualizado) => {
    try {
      setProductos(prevProductos =>
        prevProductos.map(p => p.id === productoActualizado.id ? productoActualizado : p)
      );
      
      setProductoEditado(null);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el producto.",
      });
    }
  });

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className='cardsAd'>
      <h1>Productos</h1>
      <Container className='contenedorAd' fluid="md">
        <Row>
          {productos.map((producto) => (
            <Col xs={12} md={6} lg={4} key={producto.id}>
              <Card className='card-admin' style={{ margin: '10px 0' }}>
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Img src={producto.image} alt={producto.name} />
                  <Card.Text>Precio: {producto.price}</Card.Text>
                  <Card.Text>Tamaño: {producto.size}</Card.Text>
                  <div>
                    <h5>Especificaciones:</h5>
                    {producto.tipo && (
                      <ul>
                        {producto.tipo.isChild && <li>Niño</li>}
                        {producto.tipo.isGirl && <li>Niña</li>}
                        {producto.tipo.isMan && <li>Hombre</li>}
                        {producto.tipo.isWoman && <li>Mujer</li>}
                        {producto.tipo.isGraduation && <li>Graduación</li>}
                        {producto.tipo.isForDad && <li>Para Papá</li>}
                        {producto.tipo.isForMom && <li>Para Mamá</li>}
                      </ul>
                    )}
                  </div>
                  <Button variant='danger' onClick={() => eliminarP(producto.id)}>
                    Eliminar
                  </Button>
                  <Button variant='primary' onClick={() => editarProducto(producto)}>
                    Editar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
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









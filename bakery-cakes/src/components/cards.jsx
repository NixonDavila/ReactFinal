import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import getProducts from '../services/getProducts';
import '../style/cards.css';

function Tarjeta({ tipoPastel }) { //VA A PAGE HOME
  const [productos, setProductos] = useState([]);

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
    }
  };

  useEffect(() => {fetchProducts()}, [fetchProducts]);

  // Filtrar productos usado el value de la option del select 
  const filteredProductos = tipoPastel ? productos.filter(producto => {
      switch (tipoPastel) {
        case 'ninos':
          return producto.tipo.isChild;
        case 'ninas':
          return producto.tipo.isGirl;
        case 'hombre':
          return producto.tipo.isMan;
        case 'mujer':
          return producto.tipo.isWoman;
        case 'graduacion':
          return producto.tipo.isGraduation;
        case 'papa':
          return producto.tipo.isForDad;
        case 'mama':
          return producto.tipo.isForMom;
        default:
          return false;
      }
    }) : productos;

  return (
    <div className='cardsM'>
      <h1>Productos</h1>
      <Container fluid="md">
        <Row>
          {filteredProductos.map((producto, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card id='prueba' style={{ margin: '10px 0' }}>
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Img src={producto.image} alt={producto.name} />
                  <Card.Text>Precio: {producto.price}</Card.Text>
                  <Card.Text>Tamaño: {producto.size}</Card.Text>
                  <div>
                    <p>Especificaciones:</p>
                    <ul>
                      {producto.tipo.isChild && <li>Niño</li>}
                      {producto.tipo.isGirl && <li>Niña</li>}
                      {producto.tipo.isMan && <li>Hombre</li>}
                      {producto.tipo.isWoman && <li>Mujer</li>}
                      {producto.tipo.isGraduation && <li>Graduación</li>}
                      {producto.tipo.isForDad && <li>Para Papá</li>}
                      {producto.tipo.isForMom && <li>Para Mamá</li>}
                    </ul>
                    <Button  variant="primary" >contactnos</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Tarjeta;

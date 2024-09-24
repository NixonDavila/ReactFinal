import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import getProducts from '../services/getProducts';
import '../style/destacado.css';

const ProductosDestacados = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);

  useEffect(() => {
    const fetchProductosDestacados = async () => {
      const products = await getProducts();
      const destacados = products.filter(producto => producto.destacado);
      setProductosDestacados(destacados);
    };
    fetchProductosDestacados();
  }, []);

  return (
    <div className='cardsd'>
        <h1>Destacado</h1>
      <Container fluid="md">
        <Row>
          {productosDestacados.map((producto, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card style={{ margin: '10px 0' }}>
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductosDestacados;


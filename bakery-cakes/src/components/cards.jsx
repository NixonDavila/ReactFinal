import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import merryCake from "../img/merryCake.jpg"

import getProducts from '../services/getProducts';

function Tarjeta() {

  const [productos, setProductos] = useState([])

      useEffect(()=>{
        const getProductos = async ()=>{
          const products = await getProducts()
          setProductos(products)
        } 
        getProductos();
      },[])

      console.log(productos);
      

  return (

    <div>
      {
      productos.map((producto,index)=>{ return(<Card style={{ width: '18rem' }} key={index}>
        <Card.Body >
          <Card.Title>{producto.name}</Card.Title>
          <Card.Img src={producto.image}></Card.Img>
          <Card.Text>
          {producto.price}
          </Card.Text>
          <Card.Text>
          {producto.size}
          </Card.Text>
        
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>)

      })
    }
    </div>
  );
}

export default Tarjeta;
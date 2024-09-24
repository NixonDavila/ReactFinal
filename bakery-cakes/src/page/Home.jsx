import React, { useState } from 'react';
import HeaderP from '../components/headerPrueba';
import Footer from '../components/Footer';

import Tarjeta from '../components/cards';
import "../style/home.css"
import DarkVariantExample from '../components/carrucel';
import Destacado from '../components/destacado';


export default function Home() {
  const [tipoPastel, setTipoPastel] = useState('');

  return (
    <div className='pantalla'>
      <HeaderP setTipoPastel={setTipoPastel} />
     < DarkVariantExample/>
    <Destacado/>
      <Tarjeta tipoPastel={tipoPastel} />
      <Footer />
    </div>
  );
}
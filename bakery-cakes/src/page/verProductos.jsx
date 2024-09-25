import React from 'react'
import "../style/admin.css"
import TarjetaAdmin from '../components/cardsAdmin'
import Destacado from '../components/destacado'

import Header from '../components/headerAdmi'

export default function Pruebas() {
  return (
    <div className='fondo3'>
      <Header/>
      <TarjetaAdmin/>
      <Destacado/>
     

    </div>
  )
}

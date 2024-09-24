import React from 'react'

import BasicExample from '../components/navbar'
import Footer from '../components/Footer'
import FormularioProducto from '../components/FormularioProducto'
import HeaderP from '../components/headerPrueba'
import Header from '../components/headerAdmi'
import "../style/admin.css"

export default function Administrador() {
  return (
    <div className='fondo3'>
        <Header/>
         {/* <HeaderP/> */}
         <BasicExample/>
         <FormularioProducto/>
         <Footer/>
    </div>
  )
}

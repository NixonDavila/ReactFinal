import React from 'react'
import Footer from '../components/Footer'
import FormularioProducto from '../components/FormularioProducto'
import Header from '../components/headerAdmi'
import "../style/admin.css"

export default function Administrador() {
  return (
    <div className='fondo3'>
        <Header/>
      
        
         <FormularioProducto/>
         <Footer/>
    </div>
  )
}

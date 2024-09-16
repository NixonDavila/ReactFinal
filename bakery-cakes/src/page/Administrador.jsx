import React from 'react'
import Header from '../components/Header'
import BasicExample from '../components/navbar'
import Footer from '../components/Footer'
import FormularioProducto from '../components/FormularioProducto'

export default function Administrador() {
  return (
    <div>
         <Header/>
         <BasicExample/>
         <FormularioProducto/>
         <Footer/>
    </div>
  )
}

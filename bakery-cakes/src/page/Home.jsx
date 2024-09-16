import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import BasicExample from '../components/navbar'
import Tarjeta from '../components/cards'


// import "../styles/home.css"

export default function Home() {
  return (
    <div className='pantalla'>
     
      <Header/>
      <BasicExample/>
     <Tarjeta/>
      <Footer/>      
 

     
      
    </div>
  )
}
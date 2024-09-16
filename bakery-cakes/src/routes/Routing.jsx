import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Registro from '../page/Registro';
import Home from '../page/Home';
import Contacto from '../page/contacto.jsx'; 
import Protec from './protec.jsx';
import Administrador from '../page/Administrador.jsx';
import Pruebas from '../page/pruebas.jsx';



const Routing = () => {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<Registro />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registro" element={<Registro />} />
       <Route path='/home' element={<Protec><Home /></Protec>} />
       <Route path='/Contacto' element={<Protec><Contacto/></Protec>} />
       <Route path='/administrador' element={<Administrador/>} />
       <Route path="/pruebas" element={<Pruebas/>} />
     </Routes>
    </Router>
   );
};

export default Routing;
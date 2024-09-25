import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Registro from '../page/Registro';
import Home from '../page/Home';
import Contacto from '../page/contacto copy.jsx';
import Protec from './protec.jsx';
import Administrador from '../page/Administrador.jsx';
import Pruebas from '../page/verProductos.jsx';
import AcercaDeNosotros from '../components/nosotros.jsx';
import RegistroEmpleados from '../page/RegistroEmpleados.jsx';



const Routing = () => {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<Registro />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registro" element={<Registro />} />
       <Route path='/home' element={<Protec><Home /></Protec>} />
       <Route path='/Contacto' element={<Contacto/>} />
       <Route path='/administrador' element={<Protec><Administrador/></Protec>} />
       <Route path="/pruebas" element={<Protec> <Pruebas/></Protec>} />
       <Route path="/nosotros" element={<Protec> <AcercaDeNosotros/></Protec>} />
       <Route path='/registro-empleados' element={<Protec>  <RegistroEmpleados/></Protec>} />
      
     </Routes>
    </Router>
   );
};

export default Routing;
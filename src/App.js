import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Proyecto from './pages/Proyecto';
import Footer from './components/Footer/Footer';
import ContactoPage from './pages/ContactoPage';
import Talleres from './pages/Talleres';
import Semana1 from './pages/Semanas/Semana1';
import Semana2 from './pages/Semanas/Semana2';
import Semana3 from './pages/Semanas/Semana3';
import Semana4 from './pages/Semanas/Semana4';
import Semana5 from './pages/Semanas/Semana5';
import Semana6 from './pages/Semanas/Semana6';
import Semana7 from './pages/Semanas/Semana7';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/Portafolio/" element={<Home />} />
        <Route path="/Portafolio/about" element={<About />} />
        <Route path="/Portafolio/proyecto" element={<Proyecto />} />
        <Route path="/Portafolio/talleres" element={<Talleres />} />
        <Route path="/Portafolio/contacto" element={<ContactoPage />} />
        <Route path="/Portafolio/semana1" element={<Semana1 />} />
        <Route path="/Portafolio/semana2" element={<Semana2 />} />
        <Route path="/Portafolio/semana3" element={<Semana3 />} />
        <Route path="/Portafolio/semana4" element={<Semana4 />} />
        <Route path="/Portafolio/semana5" element={<Semana5 />} />
        <Route path="/Portafolio/semana6" element={<Semana6 />} />
        <Route path="/Portafolio/semana7" element={<Semana7 />} />
        {/* <Route exact path="/users" render={() => <Users name='John Serrano' />} /> */}
        <Route path="*" element={<Home />} />
        <Route element={<Home />} />
      </Routes>
      <Footer />
    </Router>
   );
}

export default App;

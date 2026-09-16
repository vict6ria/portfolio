import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import './sections/Navbar.css';
import './sections/Hero.css';
import Footer from './sections/Footer';
import './sections/Footer.css';
import SobreMi from './pages/SobreMi/SobreMi.jsx';
import Contacto from './pages/Contact/Contactar.jsx';
import Inicio from './pages/Inicio.jsx';

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

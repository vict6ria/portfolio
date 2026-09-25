import { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-logo">Victoria Benitez</div>

            <ul className={`nav-links ${menuAbierto ? 'abierto' : ''}`}>
                <li><a className="nav-link" href="#hero" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
                <li><a className="nav-link" href="#sobre-mi" onClick={() => setMenuAbierto(false)}>Sobre mí</a></li>
                <li><a className="nav-link" href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
            </ul>

            <button
                className="nav-toggle"
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Abrir menú"
            >
                ☰
            </button>
        </nav>
    )
}

export default Navbar
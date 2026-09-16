import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre Mí', path: '/sobre-mi' },
    { label: 'Contactar', path: '/contacto' },
];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="nav">
            <span className="nav-logo">Vicky</span>

            <ul className="nav-links">
                {LINKS.map(({ label, path }) => (
                    <li key={path}>
                        <button
                            className={`nav-link ${location.pathname === path ? 'nav-link--active' : ''}`}
                            onClick={() => navigate(path)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
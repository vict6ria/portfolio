import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contactar.css';

const CONTACT_CHANNELS = [
    {
        icon: FaEnvelope,
        label: 'victoriaaabenitez16@gmail.com',
        href: 'mailto:victoriaaabenitez16@gmail.com',
    },
    {
        icon: FaGithub,
        label: 'github.com/vict6ria',
        href: 'https://github.com/vict6ria',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/victoriabenitez16',
    },
];

function Contacto() {
    return (
        <section id="contacto" className="contacto">
            <h1 className="contacto-title">Contactar</h1>

            <ul className="contacto-list">
                {CONTACT_CHANNELS.map(({ icon: Icon, label, href }) => (
                    <li key={label}>
                        <a
                            className="contacto-link"
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            <Icon className="contacto-icon" />
                            <span>{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Contacto;
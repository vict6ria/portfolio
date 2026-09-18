import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">

            <a
                className="footer-link"
                href="https://github.com/vict6ria"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>

            <a
                className="footer-link"
                href="https://www.linkedin.com/in/victoriabenitez16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
        </footer>
    );
}

export default Footer;
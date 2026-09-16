
import "./Hero.css"

function Hero() {
    return (
        <section id="hero" className="hero">

            <button className="menu-button">
                ☰
            </button>

            <p className="hero-greeting">
                Hola! soy Vic
            </p>

            <hr className="hero-line" />

            <h1 className="hero-title">
                Junior Full Stack <br /> Developer | JavaScript · React · Node.js
            </h1>

            <p className="hero-description">
                Desarrollo aplicaciones web de punta a punta, desde interfaces en React hasta APIs y lógica de backend con Node.js.
            </p>

            <div className="hero-actions">



            </div>



        </section>
    );
}

export default Hero;
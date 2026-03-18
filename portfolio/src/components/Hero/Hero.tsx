import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HeroImage from "../../assets/hero-image.jpeg"
import Curriculo from "../../assets/Curriculo-pedrosantos-frontend.pdf"
import "./Hero.css"

export function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Olá, meu nome é
          <br />
          <span>Pedro Santos</span>
        </h1>

        <p className="hero-subtitle">Web Developer</p>

        <nav className="social-media" aria-label="Redes Sociais">
          <a href="https://instagram.com/seu-user" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://linkedin.com/in/seu-user" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </nav>

        <div className="actions-btn">
          <button className="btn-default">Contact Me</button>
          
          <a href={Curriculo} download className="btn-secondary">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Pedro Santos sorrindo" />
      </div>

      <div className="shape" aria-hidden="true"></div>
    </section>
  );
}
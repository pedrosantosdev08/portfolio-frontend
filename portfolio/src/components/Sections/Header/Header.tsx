import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="home" className="header-container">
      <nav className="nav-bar" aria-label="Navegação principal">
        {/* Botão Hambúrguer */}
        <button 
          className={`menu-hamburger ${isMenuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Lista de Navegação */}
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#service" onClick={() => setIsMenuOpen(false)}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About me</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#contactme" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
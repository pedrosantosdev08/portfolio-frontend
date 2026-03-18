import "./Header.css"

export function Header() {
  return (
    <header id="home" className="header-container">
      
      
      
      <nav className="nav-bar" aria-label="Navegação principal">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#service">Services</a></li>
          <li className="nav-item"><a href="#about">About me</a></li>
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>

      
    </header>
  );
}
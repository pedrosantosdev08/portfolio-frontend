import "../App.css";

export function Header() {
  return (
    <header className="header-container">
      
      <div className="logo-title">Logo</div>
      
      <nav className="nav-bar" aria-label="Navegação principal">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#service">Services</a></li>
          <li className="nav-item"><a href="#about">About me</a></li>
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>

      <button className="btn-default">Contact me</button>
    </header>
  );
}
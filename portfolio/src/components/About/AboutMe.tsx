import "./AboutMe.css";
import ProfileImage from "../../assets/hero-image.jpeg";
import Curriculo from "../../assets/Curriculo-pedrosantos-frontend.pdf"

export function AboutMe() {
  return (
    <section className="about-container" aria-labelledby="about-title">
      
      <header className="about-header">
        <h2 id="about-title">About Me</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          nulla rem beatae molestias similique quaerat.
        </p>
      </header>

      <div className="about-content">
        
        <figure className="about-image">
          <img src={ProfileImage} alt="Foto de perfil de Pedro Santos" />
        </figure>

        <div className="about-body">
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet
            repudiande ratione sequi doloremque laboriosam odit minus.
          </p>
          
          
          <a href={Curriculo} download className="btn-secondary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
import "./AboutMe.css";
import ProfileImage from "../../../assets/hero-image.jpeg";
import Curriculo from "../../../assets/Curriculo-pedrosantos-frontend.pdf";


export function AboutMe() {
  return (
    <section
      id="about"
      className="about-container"
      aria-labelledby="about-title"
    >
      <header className="about-header">
        <h2 id="about-title">About me</h2>
        <p>Interface de Usuário, Experiência do Usuário e Edição de Vídeo</p>
      </header>

      <div className="about-content">
        <figure className="about-image">
          <img src={ProfileImage} alt="Foto de perfil de Pedro Santos" />
        </figure>

        <div className="about-body">
          <p className="about-description">
            Como desenvolvedor, atuo como um arquiteto do mundo digital, 
            navegando pelas paisagens do código para esculpir estruturas 
            que moldam nossa realidade tecnológica. Com foco em lógica e 
            precisão, transformo linhas de comando em experiências fluidas, 
            compondo soluções inovadoras para problemas complexos.
          </p>

          <a href={Curriculo} download className="btn-secondary">
           Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  image: string;
  onClick: () => void;
  isMobile?: boolean; 
}

export function ProjectCard({ title, image, onClick, isMobile }: ProjectCardProps) {
  return (
    <div 
      className={`project-card ${isMobile ? "is-mobile-card" : ""}`} 
      onClick={onClick}
    >
      <div className="project-image-container">
        <img 
          src={image} 
          alt={title} 
          className={`project-thumb ${isMobile ? "thumb-mobile" : ""}`} 
        />
        <div className="project-overlay">
          <span>Ver detalhes</span>
        </div>
      </div>
      <div className="project-title-bar">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
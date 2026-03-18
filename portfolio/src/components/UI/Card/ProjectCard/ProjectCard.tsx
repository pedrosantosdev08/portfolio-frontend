import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export function ProjectCard({ title, image, onClick }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-thumb" />
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
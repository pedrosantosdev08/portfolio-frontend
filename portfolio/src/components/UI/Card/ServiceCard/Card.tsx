import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  title: string;
  description?: string; // Opcional para o card de projeto
  tech?: string[]; // Opcional
  icon?: IconDefinition;
  image?: string; // Nova prop para a thumbnail do projeto
  onClick?: () => void; // Função para disparar o modal
}

export function Card({
  title,
  description,
  tech,
  icon,
  image,
  onClick,
}: CardProps) {
  return (
    <div
      className={`card ${onClick ? "clickable" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : "article"}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="card-content">
        {icon && <FontAwesomeIcon icon={icon} size="lg" />}
        <h3>{title}</h3>

        {description && <p>{description}</p>}

        {tech && tech.length > 0 && (
          <div className="tags">
            {tech.map((item, index) => (
              <span key={index} className="tag">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

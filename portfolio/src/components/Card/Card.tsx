import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  title: string;
  description: string;
  tech: string[];
  icon?: IconDefinition;
}

export function Card({ title, description, tech, icon }: CardProps) {
  return (
    <div className="card">
      {icon && <FontAwesomeIcon icon={icon} size="lg" />}

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tags">
        {tech.map((item, index) => (
          <span key={index} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

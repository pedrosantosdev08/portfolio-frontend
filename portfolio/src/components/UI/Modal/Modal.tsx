import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    image: string;
    description: string;
    tech: string[];
    fullDetails?: string;
    isMobile?: boolean;
    link?: string; 
    themeColor?: string; 
  } | null;
}

export function Modal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen || !data) return null;

  // Definimos um fallback caso o projeto não tenha cor definida
  const accentColor = data.themeColor; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ "--project-accent": accentColor } as React.CSSProperties} // Injeção da cor
      >
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img src={data.image} alt={data.title} className="modal-image" />
          </div>
          
          <div className="modal-info">
            <div className="modal-header-group">
              <h2 className="dynamic-title">{data.title}</h2>
              <div className="modal-tags">
                {data.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <p className="description">{data.description}</p>
            {data.fullDetails && <p className="details">{data.fullDetails}</p>}
            
            <button 
              className="btn-visit" 
              onClick={() => data.link && window.open(data.link, "_blank")}
              disabled={!data.link}
            >
              {data.link ? "Visualizar Projeto" : "Em breve"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
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
  } | null;
}

export function Modal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen || !data) return null;

  const handleVisitProject = () => {
    if (data.link) {
      window.open(data.link, "_blank", "noopener,noreferrer");
    } else {
      alert("Link não disponível para este projeto.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} size="1x" />
        </button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              src={data.image} 
              alt={data.title} 
              className={`modal-image ${data.isMobile ? 'is-mobile' : 'is-desktop'}`} 
            />
          </div>
          
          <div className="modal-info">
            <h2>{data.title}</h2>
            
            <div className="modal-tags">
              {data.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>

            <p className="description">{data.description}</p>
            {data.fullDetails && <p className="details">{data.fullDetails}</p>}
            
            <button 
              className="btn-visit" 
              onClick={handleVisitProject}
              disabled={!data.link} 
              style={{ opacity: data.link ? 1 : 0.5, cursor: data.link ? 'pointer' : 'not-allowed' }}
            >
              {data.link ? "Visualizar Projeto" : "Em breve"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
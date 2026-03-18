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
  } | null;
}

export function Modal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} size="2x"/>
        </button>

        <div className="modal-body">
          <img src={data.image} alt={data.title} className="modal-image" />
          
          <div className="modal-info">
            <h2>{data.title}</h2>
            
            <div className="modal-tags">
              {data.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>

            <p className="description">{data.description}</p>
            {data.fullDetails && <p className="details">{data.fullDetails}</p>}
            
            <button className="btn-visit">Visualizar Projeto</button>
          </div>
        </div>
      </div>
    </div>
  );
}
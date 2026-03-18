import { useState } from 'react';
 // Importação do novo componente

import "./Portfolio.css";

import CatalogoFilmes from "../../../assets/images/projects/catalogo-filmes-image.png"
import { ProjectCard } from '../../UI/Card/ProjectCard/ProjectCard';
import { Modal } from '../../UI/Modal/Modal';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const myProjects = [
    {
      title: "Catálogo de Filmes",
      image: CatalogoFilmes, 
      description: "Página para maiores informações sobre filmes e séries",
      tech: ["HTML, CSS, JavaScript"],
      fullDetails: "Sistema completo com informações sobre filmes e séries."
    },
    {
      title: "Catálogo de Filmes",
      image: CatalogoFilmes, 
      description: "Página para maiores informações sobre filmes e séries",
      tech: ["HTML, CSS, JavaScript"],
      fullDetails: "Sistema completo com informações sobre filmes e séries."
    },
    {
      title: "Catálogo de Filmes",
      image: CatalogoFilmes, 
      description: "Página para maiores informações sobre filmes e séries",
      tech: ["HTML, CSS, JavaScript"],
      fullDetails: "Sistema completo com informações sobre filmes e séries."
    },
    
    
  ];

  return (
    <section
    id='portfolio' className="portfolio-container">
      <div className="section-title">
          <h2 >Meus Projetos</h2>
          <p>Aqui estão os melhores projetos</p>
      </div>
      
      <div className="portfolio-grid">
        {myProjects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            image={project.image}
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {selectedProject && (
        <Modal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)}
          data={selectedProject}
        />
      )}
    </section>
  );
}
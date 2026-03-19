import { useState } from 'react';
import "./Portfolio.css";

import CatalogoFilmes from "../../../assets/images/projects/catalogo-filmes-image.png";
import { ProjectCard } from '../../UI/Card/ProjectCard/ProjectCard';
import { Modal } from '../../UI/Modal/Modal';

export function Portfolio() {
  const myProjects = [
    {
      id: 1,
      title: "Catálogo de Filmes",
      image: CatalogoFilmes, 
      description: "Página para maiores informações sobre filmes e séries",
      tech: ["HTML", "CSS", "JavaScript"],
      fullDetails: "Sistema completo com informações sobre filmes e séries."
    },
    {
      id: 2,
      title: "Catálogo de Filmes",
      image: CatalogoFilmes, 
      description: "Página para maiores informações sobre filmes e séries",
      tech: ["HTML", "CSS", "JavaScript"],
      fullDetails: "Sistema completo com informações sobre filmes e séries."
    },
    {
      id: 3,
      title: "Catálogo de Filmes",
      image: CatalogoFilmes, 
      description: "Página para maiores informações sobre filmes e séries",
      tech: ["HTML", "CSS", "JavaScript"],
      fullDetails: "Sistema completo com informações sobre filmes e séries."
    },
  ];

  type ProjectType = typeof myProjects[0];
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id='portfolio' className="portfolio-container">
      <div className="section-title">
          <h2>Meus Projetos</h2>
          <p>Aqui estão os melhores projetos</p>
      </div>
      
      <div className="portfolio-grid">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id}
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
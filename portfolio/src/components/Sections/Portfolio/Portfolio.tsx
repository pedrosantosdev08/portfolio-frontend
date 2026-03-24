import { useState } from 'react';
import "./Portfolio.css";

import CatalogoFlix from "../../../assets/images/projects/catalogflix.png";
import ConfeitariaLandinPage from "../../../assets/images/projects/confeitaria-landingpage.png";
import NaBagImage from "../../../assets/images/projects/Nabag-image.jpeg";
import OxeCompreiImage from "../../../assets/images/projects/oxecomprei-image.jpeg";
import { ProjectCard } from '../../UI/Card/ProjectCard/ProjectCard';
import { Modal } from '../../UI/Modal/Modal';

export function Portfolio() {
  const myProjects = [
    {
      id: 1,
      title: "CatalogFlix",
      image: CatalogoFlix,
      link: "https://catalogflix.vercel.app/",
      isMobile: false,
      description: "Plataforma de streaming moderna com consumo da API TMDB.",
      tech: ["React", "TypeScript", "Vite", "CSS Modules"],
      fullDetails: "Aplicação escalável que realiza a transição de Vanilla JS para React, implementando busca dinâmica com debouncing, filtragem por gêneros e interface responsiva com design premium."
    },
    {
      id: 2,
      title: "NaBag",
      image: NaBagImage, 
      link: "https://github.com/pedrosantosdev08/NaBag-App",
      isMobile: true,
      description: "App de gestão financeira para motoristas de aplicativo.",
      tech: ["React Native", "Expo", "SQLite"],
      fullDetails: "Ferramenta desenvolvida para entregadores gerenciarem ganhos diários, semanais e mensais de múltiplas plataformas, com armazenamento local e interface focada em UX mobile."
    },
    {
      id: 3,
      title: "Confeitaria Landing Page",
      image: ConfeitariaLandinPage,
      link: "https://confeitaria-landingpage.vercel.app/",
      isMobile: false,
      description: "Landing page otimizada para vendas via WhatsApp.",
      tech: ["React", "TypeScript", "Vite", "Typescript"],
      fullDetails: "Site institucional focado em conversão para uma confeitaria, apresentando catálogo de produtos e integração direta com API do WhatsApp para automação de pedidos."
    },
    {
      id: 4,
      title: "OxeComprei",
      image: OxeCompreiImage,
      link: "https://github.com/pedrosantosdev08/Oxe_Comprei-",
      isMobile: true,
      description: "Marketplace geolocalizado para comércio local.",
      tech: ["React Native", "Expo", "MVC"],
      fullDetails: "Projeto de conclusão de ciclo focado em conectar pequenos negócios a clientes próximos, utilizando arquitetura MVC para facilitar a manutenção e escalabilidade do código."
    }
  ];

  type ProjectType = typeof myProjects[0];
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id='portfolio' className="portfolio-container">
      <div className="section-title">
          <h2>Meus Projetos</h2>
          <p>Exploração de tecnologias e soluções reais</p>
      </div>
      
      <div className="portfolio-grid">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            image={project.image}
            isMobile={project.isMobile} // Certifique-se que o ProjectCard recebe essa prop
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
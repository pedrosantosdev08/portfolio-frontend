import { useState } from 'react';
import "./Portfolio.css";
import CatalogoFlix from "../../../assets/images/projects/catalogflix.png";
import ConfeitariaLandinPage from "../../../assets/images/projects/confeitaria-landingpage.png";
import JujutsuLandingPage from "../../../assets/images/projects/jujutsukaisen-wiki.png";
import { ProjectCard } from '../../UI/Card/ProjectCard/ProjectCard';
import { Modal } from '../../UI/Modal/Modal';

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  isMobile: boolean;
  description: string;
  tech: string[];
  fullDetails: string;
  themeColor?: string;
}

export function Portfolio() {
  const myProjects: Project[] = [
    {
      id: 1,
      title: "CatalogFlix",
      image: CatalogoFlix,
      link: "https://catalogflix.vercel.app/",
      isMobile: false,
      description: "Plataforma de streaming moderna com consumo da API TMDB.",
      tech: ["React", "TypeScript", "Vite", "CSS Modules"],
      fullDetails: "Aplicação escalável que realiza a transição de Vanilla JS para React, implementando busca dinâmica com debouncing, filtragem por gêneros e interface responsiva com design premium.",
      themeColor: "#0ea5e9"
    },
    {
      id: 2,
      title: "Confeitaria Landing Page",
      image: ConfeitariaLandinPage,
      link: "https://confeitaria-landingpage.vercel.app/",
      isMobile: false,
      description: "Landing page otimizada para vendas via WhatsApp.",
      tech: ["React", "TypeScript", "Vite"],
      fullDetails: "Site institucional focado em conversão para uma confeitaria, apresentando catálogo de produtos e integração direta com API do WhatsApp para automação de pedidos.",
      themeColor: "#ec4899"
    },
    {
      id: 3,
      title: "Jujutsu Kaisen Wiki",
      image: JujutsuLandingPage,
      link: "https://jujutsukaisen-landingpage.vercel.app/",
      isMobile: false,
      description: "Landing page imersiva apresentando os personagens e habilidades da obra.",
      tech: ["React", "TypeScript", "Vite", "Font Awesome"],
      fullDetails: "Interface temática desenvolvida com foco em UI/UX, utilizando animações dinâmicas, renderização de listas complexas para o catálogo de feiticeiros e um sistema de filtragem baseado em níveis de poder.",
      themeColor: "#dd1025"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            isMobile={project.isMobile}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        data={selectedProject}
      />
    </section>
  );
}

import { faCode, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
import { Card } from "../../UI/Card/ServiceCard/Card";

export function Services() {
  // 1. Criamos a lista de serviços (Poderia vir de uma API no futuro)
  const myServices = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de sites modernos e responsivos com React.",
      link: "https://github.com/seu-github",
      tech: ["React", "TypeScript", "Styled Components"],
      icon: faCode,
    },
    {
      title: "Sites Institucionais",
      description:
        "Presença digital para empresas (quem somos, serviços, contato).",
      link: "#",
      tech: ["Next.js", "Typescript", "Node.js"],
      icon: faLayerGroup,
    },
    {
      title: "Landing Pages de Alta Conversão:",
      description:
        "Focadas em vendas ou captura de leads para lançamentos e produtos específicos.",
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: faCode,
    },
  ];

  return (
    <section id="service" className="service-container">
      <div className="service-title">
        {" "}
        {/* Corrigi o typo 'tittle' para 'title' */}
        <h2>Services</h2>
        <p>Ofereço soluções completas de desenvolvimento e design...</p>
      </div>

      <div className="services-grid">
        {/* 2. Renderizamos os cards dinamicamente */}
        {myServices.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            tech={service.tech}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

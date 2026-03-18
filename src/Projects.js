import React, { useState } from "react";
import "./styles.css";
import agentTree from "./assets/agent-tree.png";
import agentArchitecture from "./assets/agent-architecture.png";

const projects = [
  {
    title: "Autonomous Recursive Multi-Agent System",
    impact:
      "Built a multi-agent system that can autonomously decompose complex tasks, create specialized agents, and coordinate collaborative problem solving.",
    details: [
      "Designed a main controller agent that analyzes user tasks and dynamically generates expert sub-agents.",
      "Implemented recursive task delegation so sub-agents can create additional specialized agents when needed.",
    ],
    tech: [
      "Python",
      "Multi-Agent Systems",
      "LLM",
      "Task Planning",
    ],
    meta: "AI Agent System • 2025",
    link: "https://github.com/ZoeLee23277789/Autonomous-Recursive-Multi-Agent-System",
    linkLabel: "View Project",
    images: [agentTree, agentArchitecture],
  },
  {
    title: "DevOps Data Simulation Platform",
    impact:
      "Built a containerized monitoring and automation platform for simulated equipment data pipelines and dashboard-based observability.",
    details: [
      "Integrated simulated sensor data, backend APIs, and dashboard visualization into a unified development platform.",
      "Orchestrated services with Docker Compose and organized workflow components for automation and reporting.",
      "Included observability and pipeline infrastructure with Prometheus configuration, Airflow components, and a dashboard frontend.",
    ],
    tech: [ "Python", "Airflow", "Prometheus", "Dashboard"],
    meta: "DevOps / Monitoring Platform • 2025",
    link: "https://github.com/ZoeLee23277789/DevOps-data-simulation-platform",
    linkLabel: "View Project",
  },
  {
    title: "EA-MT: Entity-Aware Machine Translation",
    impact:
      "Built an entity-aware English-to-Chinese translation pipeline using mBART to improve translation quality and semantic consistency.",
    details: [
      "Fine-tuned mBART on the IWSLT 2017 dataset for English-to-Chinese machine translation.",
      "Evaluated model outputs using BLEU, METEOR, and BERTScore for overlap-based and contextual quality analysis.",
      "Organized the project with reproducible notebooks, result artifacts, and a report for model evaluation.",
    ],
    tech: ["mBART", "Machine Translation", "PyTorch", "BERTScore", "NLP"],
    meta: "NLP Project • 2024",
    link: "https://github.com/ZoeLee23277789/EA-MT-Entity-Aware-Machine-Translation",
    linkLabel: "View Project",
  },
  {
    title: "Parts Tracking System (PTS)",
    impact:
      "Shipped full-stack components for equipment and parts status tracking in an industry environment.",
    details: [
      "Built and supported production-oriented tracking workflows for equipment and parts status.",
      "Standardized Windows development environments with Chocolatey and containerized services with Docker.",
      "Supported Azure CI/CD for more reproducible deployment and development processes.",
    ],
    tech: ["React", "Node.js", "Docker", "Azure CI/CD"],
    meta: "TSMC • Jun 2025 – Sep 2025",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const toggleProject = (title) => {
    setExpandedProject((prev) => (prev === title ? null : title));
  };

  const addRipple = (e) => {
    const target = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const rect = target.getBoundingClientRect();

    circle.className = "ripple";
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    target.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };

  return (
    <section id="projects" className="section">
      <div className="projects-header reveal visible">
        <h2 className="section-title">Featured Projects</h2>

        {!showAll && projects.length > 3 && (
          <button
            className="project-more-btn magnetic"
            onClick={() => setShowAll(true)}
            type="button"
          >
            More
          </button>
        )}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => {
          const isExpanded = expandedProject === project.title;

          return (
            <article
              key={project.title}
              className={`project-card magnetic ${
                showAll ? "visible-card" : "reveal visible"
              }`}
            >
              <h3>{project.title}</h3>
              <p className="project-impact">“{project.impact}”</p>

              <ul className="project-details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag magnetic">
                    {t}
                  </span>
                ))}
              </div>

              {project.images && project.images.length > 0 && (
                <button
                  type="button"
                  className="project-toggle-btn"
                  onClick={() => toggleProject(project.title)}
                >
                  {isExpanded ? "Hide Details" : "Show Details"}
                </button>
              )}

              {isExpanded && project.images && project.images.length > 0 && (
                <div className="project-image-gallery">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="project-gallery-image"
                    />
                  ))}
                </div>
              )}

              <div className="project-meta">{project.meta}</div>

              {project.link && (
                <a
                  className="read-paper-btn magnetic"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={addRipple}
                  style={{ marginTop: "16px", display: "inline-flex" }}
                >
                  {project.linkLabel || "Learn more"}
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
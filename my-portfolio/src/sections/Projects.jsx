import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>
          My <span className="accent">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className="status-badge">🚧 In Development</span>
              </div>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  className="project-btn"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    className="project-btn accent-btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="project-btn disabled-btn">
                    Live Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

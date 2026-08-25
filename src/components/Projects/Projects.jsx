import { useState } from "react";

import { projects } from "../../data/projects";

import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="section projects"
    >
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            04.
          </span>

          <div>
            <h2 className="section__title">
              Proyectos
            </h2>

            <p className="projects__intro">
              Experiencia aplicada al desarrollo
              backend, automatización, integración
              de sistemas y soluciones empresariales.
            </p>
          </div>
        </div>

        <div className="projects__grid">

          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
            >

              <div className="project-card__top">

                <span className="project-card__number">
                  0{index + 1}
                </span>

                <span className="project-card__type">
                  {project.type}
                </span>

              </div>

              <div className="project-card__body">

                <div className="project-card__visibility">
                  {project.visibility}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__role">
                  <span>Rol</span>

                  <strong>
                    {project.role}
                  </strong>
                </div>

                <div className="project-card__technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                <div className="project-card__highlights">

                  {project.highlights.map(
                    (highlight) => (
                      <span key={highlight}>
                        {highlight}
                      </span>
                    )
                  )}

                </div>

              </div>

              <button
                type="button"
                className="project-card__button"
                onClick={() =>
                  setSelectedProject(project)
                }
              >
                Ver caso de estudio
                <span>→</span>
              </button>

            </article>
          ))}

        </div>

      </div>

      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="project-modal__close"
              onClick={() =>
                setSelectedProject(null)
              }
              aria-label="Cerrar caso de estudio"
            >
              ×
            </button>

            <span className="project-modal__eyebrow">
              {selectedProject.type}
            </span>

            <h2>
              {selectedProject.title}
            </h2>

            <span className="project-modal__visibility">
              {selectedProject.visibility}
            </span>

            <div className="project-modal__section">
              <span>Contexto</span>

              <p>
                {selectedProject.caseStudy.context}
              </p>
            </div>

            <div className="project-modal__section">
              <span>Problema</span>

              <p>
                {selectedProject.caseStudy.problem}
              </p>
            </div>

            <div className="project-modal__section">
              <span>Solución</span>

              <p>
                {selectedProject.caseStudy.solution}
              </p>
            </div>

            <div className="project-modal__section">
              <span>Mi contribución</span>

              <ul>
                {selectedProject.caseStudy.contribution.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="project-modal__section">
              <span>Tecnologías</span>

              <div className="project-modal__technologies">
                {selectedProject.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="project-modal__private">

              <strong>
                Código fuente
              </strong>

              <p>
                {selectedProject.caseStudy.code}
              </p>

            </div>

          </div>

        </div>
      )}
    </section>
  );
}

export default Projects;
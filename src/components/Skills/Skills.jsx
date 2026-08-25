import { skills } from "../../data/skills";

import "./Skills.css";

function Skills() {
  return (
    <section id="technologies" className="section skills">
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            05.
          </span>

          <div>
            <h2 className="section__title">
              Tecnologías
            </h2>

            <p className="skills__intro">
              Tecnologías y herramientas que utilizo para
              desarrollar, integrar y mantener soluciones
              empresariales.
            </p>
          </div>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <article
              key={skill.category}
              className="skill-group"
            >
              <div className="skill-group__header">

                <h3 className="skill-group__title">
                  {skill.category}
                </h3>

                <span className="skill-group__count">
                  {String(skill.technologies.length).padStart(
                    2,
                    "0"
                  )}
                </span>

              </div>

              <p className="skill-group__description">
                {skill.description}
              </p>

              <div className="skill-group__technologies">
                {skill.technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="skill"
                  >
                    <span className="skill__name">
                      {technology.name}
                    </span>

                    <span className="skill__level">
                      {technology.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
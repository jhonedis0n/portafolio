import { experience } from "../../data/experience";

import "./Experience.css";

function Experience() {
  return (
    <section
      id="experience"
      className="section experience"
    >
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            04
          </span>

          <h2 className="section__title">
            Experiencia profesional
          </h2>
        </div>

        <div className="experience__list">

          {experience.map((item) => (
            <article
              key={item.id}
              className="experience-card"
            >

              <div className="experience-card__period">
                {item.period}
              </div>

              <div className="experience-card__content">

                <div className="experience-card__heading">

                  <div>
                    <h3 className="experience-card__position">
                      {item.position}
                    </h3>

                    <p className="experience-card__company">
                      {item.company}
                    </p>
                  </div>

                </div>

                <p className="experience-card__description">
                  {item.description}
                </p>

                <div className="experience-card__details">

                  <div className="experience-card__block">

                    <h4>
                      Responsabilidades
                    </h4>

                    <ul>
                      {item.responsibilities.map(
                        (responsibility) => (
                          <li key={responsibility}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                  <div className="experience-card__block">

                    <h4>
                      Tecnologías
                    </h4>

                    <div className="experience-card__technologies">

                      {item.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
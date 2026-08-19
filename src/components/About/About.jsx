import { siteConfig } from "../../config/site";

import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">01.</span>

          <h2 className="section__title">
            Sobre mí
          </h2>
        </div>

        <div className="about__grid">

          <div className="about__content">
            <p className="about__text">
              {siteConfig.profile.about}
            </p>

            <p className="about__text">
              {siteConfig.profile.approach}
            </p>
          </div>

          <div className="about__summary">

            <div className="about__item">
              <span className="about__label">
                Perfil
              </span>

              <strong>
                {siteConfig.profile.role}
              </strong>
            </div>

            <div className="about__item">
              <span className="about__label">
                Especialización
              </span>

              <strong>
                {siteConfig.profile.specialization}
              </strong>
            </div>

            <div className="about__item">
              <span className="about__label">
                Experiencia
              </span>

              <strong>
                +5 años
              </strong>
            </div>

            <div className="about__item">
              <span className="about__label">
                Modalidad
              </span>

              <strong>
                Remoto
              </strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
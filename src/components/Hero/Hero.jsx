import { siteConfig } from "../../config/site";
import "./Hero.css";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="hero__container">

        <div className="hero__content">

          <p className="hero__eyebrow">
            {siteConfig.profile.role}
          </p>

          <h1 className="hero__title">
            {siteConfig.personal.name}
          </h1>

          <p className="hero__description">
            {siteConfig.profile.approach}
          </p>

          <div className="hero__technologies">
            <span>PHP</span>
            <span>Python</span>
            <span>MySQL</span>
            <span>REST APIs</span>
            <span>Odoo</span>
          </div>

          <div className="hero__actions">

            <a
              href="#projects"
              className="button button--primary"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="button button--secondary"
            >
              Contactarme
            </a>

          </div>

        </div>

        <div className="hero__status">

          <span className="hero__status-dot" />

          <span>
            Disponible para trabajo remoto
          </span>

        </div>

      </div>
    </section>
  );
}

export default Hero;
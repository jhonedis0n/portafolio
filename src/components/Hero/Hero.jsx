import { siteConfig } from "../../config/site";

import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">

        <div className="hero__content">

          <p className="hero__eyebrow">
            <span className="hero__status"></span>

            {siteConfig.personal.availability}
          </p>

          <p className="hero__role">
            {siteConfig.profile.role}
          </p>

          <h1 className="hero__title">
            {siteConfig.personal.name}
          </h1>

          <h2 className="hero__headline">
            {siteConfig.profile.headline}
          </h2>

          <p className="hero__description">
            {siteConfig.profile.description}
          </p>

          <div className="hero__actions">

            <a
              href="#projects"
              className="button button--primary"
            >
              Ver proyectos
            </a>

            {siteConfig.cv.enabled && (
              <a
                href={siteConfig.cv.path}
                className="button button--secondary"
                target="_blank"
                rel="noreferrer"
              >
                Descargar CV
              </a>
            )}

          </div>

          <div className="hero__technologies">

            <span>Python</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>REST APIs</span>
            <span>Odoo</span>

          </div>

        </div>

        <div className="hero__visual">

          <div className="hero__card">

            <div className="hero__card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero__code">

              <p>
                <span className="code-keyword">
                  const
                </span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="code-string">
                  "Jhon Pinilla"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="code-string">
                  "Backend Developer"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;focus:{" "}
                <span className="code-string">
                  "Business Solutions"
                </span>
              </p>

              <p>{"}"}</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
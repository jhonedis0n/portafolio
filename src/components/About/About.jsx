import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="section about"
    >
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            02
          </span>

          <h2 className="section__title">
            Sobre mí
          </h2>
        </div>

        <div className="about__content">

          <div className="about__main">

            <p className="about__lead">
              Soy Ingeniero de Sistemas y Backend Developer con más de 5 años de experiencia en desarrollo de software, desarrollo web, automatización de procesos y soluciones empresariales.
            </p>

            <p>
              Mi experiencia se centra en el desarrollo backend, integración de sistemas, construcción de APIs y desarrollo de aplicaciones utilizando PHP, Python, JavaScript, MySQL y tecnologías web.
            </p>

            <p>
              También he participado en la automatización de procesos empresariales mediante Google Apps Script y AppSheet, así como en la implementación y personalización de sistemas ERP con Odoo, adaptando soluciones a requerimientos específicos de las organizaciones.
            </p>

            <p>
              Me interesa resolver problemas mediante soluciones mantenibles, optimizar procesos y transformar requerimientos de negocio en implementaciones tecnológicas funcionales.
            </p>

          </div>

          <aside className="about__facts">

            <div className="about__fact">
              <span className="about__fact-label">
                Experiencia
              </span>

              <strong>
                +5 años
              </strong>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">
                Enfoque
              </span>

              <strong>
                Backend · Desarrollo Web
              </strong>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">
                Fortalezas
              </span>

              <strong>
                Automatización · APIs · ERP
              </strong>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">
                Tecnologías
              </span>

              <strong>
                Python · PHP · JavaScript
              </strong>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}

export default About;
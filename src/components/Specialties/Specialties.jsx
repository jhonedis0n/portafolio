import "./Specialties.css";

const specialties = [
  {
    number: "01",
    title: "Backend & Desarrollo Web",
    description:
      "Desarrollo de aplicaciones web, lógica de negocio y soluciones orientadas a procesos empresariales, participando tanto en componentes backend como en interfaces de usuario.",
    technologies:
      "PHP · Python · JavaScript · HTML · CSS",
  },

  {
    number: "02",
    title: "APIs e Integración",
    description:
      "Diseño, desarrollo e integración de APIs REST y servicios web para conectar aplicaciones, sistemas y procesos empresariales.",
    technologies:
      "REST APIs · Web Services · Postman",
  },

  {
    number: "03",
    title: "Automatización",
    description:
      "Automatización de procesos empresariales mediante desarrollo de soluciones e integración de herramientas orientadas a reducir tareas manuales, centralizar información y optimizar procesos internos.",
    technologies:
      "Google Apps Script · AppSheet · Python",
  },

  {
    number: "04",
    title: "Odoo / ERP",
    description:
      "Implementación, personalización e integración de soluciones Odoo para adaptar procesos y funcionalidades a requerimientos empresariales específicos.",
    technologies:
      "Odoo · Python · PostgreSQL",
  },
];

function Specialties() {
  return (
    <section
      id="specialties"
      className="section specialties"
    >
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            03
          </span>

          <h2 className="section__title">
            Especialidades
          </h2>
        </div>

        <div className="specialties__grid">

          {specialties.map((specialty) => (
            <article
              key={specialty.number}
              className="specialty-card"
            >

              <span className="specialty-card__number">
                {specialty.number}
              </span>

              <h3 className="specialty-card__title">
                {specialty.title}
              </h3>

              <p className="specialty-card__description">
                {specialty.description}
              </p>

              <span className="specialty-card__technologies">
                {specialty.technologies}
              </span>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Specialties;
const specialties = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Desarrollo de lógica de negocio, servicios backend y aplicaciones orientadas a procesos empresariales.",
    technologies: ["Python", "PHP", "Laravel"],
  },

  {
    number: "02",
    title: "APIs & Integraciones",
    description:
      "Diseño e integración de APIs y servicios web para conectar aplicaciones y sistemas empresariales.",
    technologies: ["REST API", "Postman", "Web Services"],
  },

  {
    number: "03",
    title: "Bases de Datos",
    description:
      "Diseño, administración y optimización de bases de datos relacionales para aplicaciones empresariales.",
    technologies: ["MySQL", "SQL"],
  },

  {
    number: "04",
    title: "ERP & Automatización",
    description:
      "Implementación y personalización de soluciones ERP orientadas a mejorar y automatizar procesos de negocio.",
    technologies: ["Odoo", "Python", "Automatización"],
  },
];

function Specialties() {
  return (
    <section className="section specialties">
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            02.
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

              <div className="specialty-card__technologies">
                {specialty.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Specialties;
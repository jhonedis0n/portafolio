import "./Odoo.css";

function Odoo() {
  const areas = [
    {
      number: "01",
      title: "Implementación",
      description:
        "Adaptación de soluciones ERP a requerimientos específicos del negocio.",
    },
    {
      number: "02",
      title: "Personalización",
      description:
        "Desarrollo y configuración de funcionalidades orientadas a procesos empresariales.",
    },
    {
      number: "03",
      title: "Integraciones",
      description:
        "Comunicación entre Odoo y servicios o sistemas externos mediante APIs.",
    },
    {
      number: "04",
      title: "Automatización",
      description:
        "Automatización de procesos para reducir tareas manuales y mejorar operaciones.",
    },
  ];

  return (
    <section id="odoo" className="section odoo">
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            06.
          </span>

          <h2 className="section__title">
            Odoo & Soluciones Empresariales
          </h2>
        </div>

        <div className="odoo__content">

          <div className="odoo__intro">

            <span className="odoo__eyebrow">
              ERP · BACKEND · AUTOMATIZACIÓN
            </span>

            <h3 className="odoo__title">
              Implementación y desarrollo de soluciones empresariales
            </h3>

            <p className="odoo__description">
              Experiencia en implementación, personalización e integración
              de soluciones Odoo, combinando desarrollo backend,
              automatización de procesos y servicios empresariales.
            </p>

            <div className="odoo__stack">
              <span>Odoo</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
              <span>Automatización</span>
            </div>

          </div>

          <div className="odoo__areas">

            {areas.map((area) => (
              <article
                key={area.number}
                className="odoo__area"
              >
                <span className="odoo__area-number">
                  {area.number}
                </span>

                <div className="odoo__area-content">
                  <h4>{area.title}</h4>

                  <p>
                    {area.description}
                  </p>
                </div>
              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Odoo;
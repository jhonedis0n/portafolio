import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="section contact"
    >
      <div className="section__container">

        <div className="contact__content">

          <span className="contact__eyebrow">
            08. Contacto
          </span>

          <h2 className="contact__title">
            ¿Hablamos de un proyecto o una oportunidad?
          </h2>

          <p className="contact__description">
            Estoy disponible para oportunidades profesionales,
            desarrollo de software, automatización e integración
            de soluciones empresariales.
          </p>

          <div className="contact__links">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jhon3pinilla@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span>Correo</span>

              <strong>
                jhon3pinilla@gmail.com
              </strong>

              <span>↗</span>
            </a>

            <a
              href="https://linkedin.com/in/jhon-edison-pinilla-paez"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span>LinkedIn</span>

              <strong>
                Perfil profesional
              </strong>

              <span>↗</span>
            </a>

            <a
              href="https://github.com/jhonedis0n"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span>GitHub</span>

              <strong>
                Repositorios
              </strong>

              <span>↗</span>
            </a>

          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jhon3pinilla@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact__cta"
          >
            <span>Contactarme</span>
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
import {
  education,
  complementaryEducation,
} from "../../data/education";

import "./Education.css";

function Education() {
  return (
    <section
      id="education"
      className="section education"
    >
      <div className="section__container">

        <div className="section__header">
          <span className="section__number">
            07.
          </span>

          <div>
            <h2 className="section__title">
              Formación
            </h2>

            <p className="education__intro">
              Formación profesional y aprendizaje
              continuo orientado al desarrollo de
              software y soluciones empresariales.
            </p>
          </div>
        </div>

        <div className="education__academic">

          {education.map((item) => (
            <article
              key={item.id}
              className="education-card"
            >

              <div className="education-card__type">
                {item.type === "academic"
                  ? "Formación profesional"
                  : "Especialización"}
              </div>

              <h3>
                {item.title}
              </h3>

              {item.institution && (
                <p className="education-card__institution">
                  {item.institution}
                </p>
              )}

              {item.period && (
                <span className="education-card__period">
                  {item.period}
                </span>
              )}

              <p className="education-card__description">
                {item.description}
              </p>

            </article>
          ))}

        </div>

        <div className="education__complementary">

          <div className="education__subheader">

            <span>
              Formación complementaria
            </span>

          </div>

          <div className="education__courses">

            {complementaryEducation.map((course) => (
              <article
                key={course.id}
                className="course"
              >

                <span className="course__year">
                  {course.year}
                </span>

                <h3>
                  {course.title}
                </h3>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
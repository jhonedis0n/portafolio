import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">
          <span>JEP</span>

          <p>
            Ingeniero de Sistemas · Backend · Desarrollo Web · Automatización · Odoo
          </p>
        </div>

        <div className="footer__meta">
          <span>
            Colombia
          </span>

          <span>
            © {currentYear}
          </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
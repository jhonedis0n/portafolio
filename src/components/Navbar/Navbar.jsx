import { siteConfig } from "../../config/site";
import { navigation } from "../../config/navigation";

import "./Navbar.css";

function Navbar() {
  const visibleLinks = navigation.filter((item) => item.enabled);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#hero" className="navbar__brand">
          <span className="navbar__brand-symbol">&lt;/&gt;</span>

          <span>
            {siteConfig.personal.name.split(" ")[0]}
          </span>
        </a>

        <nav className="navbar__links">
          {visibleLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="navbar__contact"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Navbar;
import { useState } from "react";

import { navigation } from "../../config/navigation";

import { useActiveSection } from "../../hooks/useActiveSection";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = navigation.map(
    (item) => item.id
  );

  const activeSection =
    useActiveSection(sectionIds);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar__container">

        <a
          href="#home"
          className="navbar__logo"
          onClick={handleNavigation}
        >
          JEP
        </a>

        <nav
          className={`navbar__nav ${
            menuOpen
              ? "navbar__nav--open"
              : ""
          }`}
          aria-label="Navegación principal"
        >

          <div className="navbar__links">

            {navigation.map((item, index) => {
              const isActive =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`navbar__link ${
                    isActive
                      ? "navbar__link--active"
                      : ""
                  }`}
                  onClick={handleNavigation}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >

                  {item.label}
                </a>
              );
            })}

          </div>

        </nav>

        <button
          type="button"
          className={`navbar__toggle ${
            menuOpen
              ? "navbar__toggle--active"
              : ""
          }`}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label={
            menuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>

    </header>
  );
}

export default Navbar;
# Portafolio Personal

Proyecto desarrollado con React + Vite para mostrar información personal, experiencia, educación, habilidades y proyectos.

## Tecnologías

- React
- Vite
- CSS personalizado
- JavaScript

## Estructura del proyecto

```bash
portafolio/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── BackToTop/
│   │   │   ├── BackToTop.css
│   │   │   └── BackToTop.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── Education/
│   │   │   ├── Education.css
│   │   │   └── Education.jsx
│   │   ├── Experience/
│   │   │   ├── Experience.css
│   │   │   └── Experience.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── Odoo/
│   │   │   ├── Odoo.css
│   │   │   └── Odoo.jsx
│   │   ├── Projects/
│   │   │   ├── Projects.css
│   │   │   └── Projects.jsx
│   │   ├── Skills/
│   │   │   ├── Skills.css
│   │   │   └── Skills.jsx
│   │   ├── Specialties/
│   │   │   ├── Specialties.css
│   │   │   └── Specialties.jsx
│   │   └── ...
│   ├── config/
│   │   ├── navigation.js
│   │   ├── sections.js
│   │   ├── site.js
│   │   └── theme.js
│   ├── data/
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── specialties.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   └── styles/
│       └── sections.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── package-lock.json
```

## Descripción de carpetas

- `src/components/`: contiene los bloques principales de la página como Hero, About, Projects, Contact, etc.
- `src/data/`: almacena los datos de educación, experiencia, habilidades y proyectos.
- `src/config/`: centraliza configuraciones de navegación, tema y secciones.
- `src/hooks/`: incluye hooks personalizados, como la lógica para la sección activa.
- `src/styles/`: estilos globales compartidos.
- `public/`: archivos estáticos.

## Ejecución local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

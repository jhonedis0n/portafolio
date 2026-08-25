# Jhon Pinilla | Backend Developer

Portafolio profesional de **Jhon Edison Pinilla Páez**, Ingeniero de Sistemas y Backend Developer especializado en desarrollo backend, automatización de procesos empresariales e implementación de soluciones con Odoo.

El sitio presenta la experiencia profesional, proyectos, habilidades, formación académica y medios de contacto en una interfaz responsive construida con React.

## Características

- Presentación profesional y perfil técnico.
- Secciones de especialidades, experiencia, proyectos, habilidades y educación.
- Apartado dedicado a Odoo y soluciones ERP.
- Navegación por secciones con estado activo.
- Diseño responsive para dispositivos móviles y escritorio.
- Enlaces a GitHub, LinkedIn y descarga del CV.
- Botón para volver rápidamente al inicio.

## Tecnologías

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- JavaScript (ES modules)
- CSS personalizado
- ESLint

## Requisitos

- Node.js 20 o superior
- npm

## Instalación y uso local

Clona el repositorio e instala las dependencias:

```bash
git clone <URL_DEL_REPOSITORIO>
cd portafolio
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la URL local de la aplicación, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con Vite. |
| `npm run build` | Genera la versión optimizada para producción. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

## Estructura del proyecto

```text
src/
├── components/       # Secciones y componentes visuales del portafolio
├── config/            # Navegación, tema, secciones y datos del sitio
├── data/              # Experiencia, proyectos, habilidades y educación
├── hooks/             # Hooks personalizados
├── styles/            # Estilos compartidos
├── App.jsx            # Composición principal de la página
└── main.jsx           # Punto de entrada de React
public/                # Recursos estáticos, iconos y CV
```

## Personalización

Los datos principales del portafolio están separados de la interfaz para facilitar su actualización:

- `src/config/site.js`: nombre, perfil, contacto, redes sociales y ruta del CV.
- `src/config/sections.js`: activa o desactiva secciones de la página.
- `src/config/theme.js`: colores y tokens visuales del sitio.
- `src/data/`: contenido de experiencia, proyectos, habilidades, especialidades y educación.
- `public/cv/`: ubicación recomendada para el archivo PDF del CV.

## Build para producción

Genera los archivos listos para publicar con:

```bash
npm run build
```

El resultado se crea en `dist/`. Puedes comprobarlo localmente con:

```bash
npm run preview
```

Este proyecto puede desplegarse en servicios compatibles con aplicaciones Vite, como GitHub Pages, Vercel o Netlify. Configura el directorio de salida como `dist` y ejecuta `npm run build` durante el proceso de despliegue.

## Autor

**Jhon Edison Pinilla Páez**  
Ingeniero de Sistemas · Backend Developer · Odoo

- [GitHub](https://github.com/jhonedis0n)
- [LinkedIn](https://linkedin.com/in/jhon-edison-pinilla-paez)
- [Correo electrónico](mailto:jhon3pinilla@gmail.com)

## Licencia

Este repositorio contiene un portafolio personal. El código puede consultarse con fines de referencia; el contenido personal, la identidad visual y los documentos no deben reutilizarse sin autorización.

import { sections } from "./config/sections";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Specialties from "./components/Specialties/Specialties";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Odoo from "./components/Odoo/Odoo";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {sections.hero.enabled && <Hero />}

        {sections.about.enabled && <About />}

        {sections.specialties.enabled && (
          <Specialties />
        )}

        {sections.experience.enabled && (
          <Experience />
        )}

        {sections.projects.enabled && (
          <Projects />
        )}
        
        {sections.skills.enabled && (
          <Skills />
        )}

        {sections.odoo.enabled && (
          <Odoo />
        )}

        {sections.education.enabled && (
          <Education />
        )}

        {sections.contact.enabled && (
          <Contact />
        )}
      </main>
      
      <BackToTop />
      
      <Footer />
    </>
  );
}

export default App;
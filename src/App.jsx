import { sections } from "./config/sections";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {sections.hero.enabled && <Hero />}
      </main>
    </>
  );
}

export default App;
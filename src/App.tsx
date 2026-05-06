import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

import NeuralBackground from './components/layout/NeuralBackground';
import AIAssistant from './components/layout/AIAssistant';
import CommandPalette from './components/layout/CommandPalette';

function App() {
  return (
    <div className="bg-primary min-h-screen relative selection:bg-accent/30">
      <NeuralBackground />
      <AIAssistant />
      <CommandPalette />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

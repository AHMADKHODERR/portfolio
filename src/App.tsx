import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen font-sans text-gray-900 dark:text-white relative selection:bg-accent selection:text-white">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

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

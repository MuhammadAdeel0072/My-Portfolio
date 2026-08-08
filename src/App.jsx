import { useState } from 'react';
import Loader from './components/Loader';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative overflow-x-hidden bg-background text-text min-h-screen font-sans">
      {/* Loader */}
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary transform origin-left z-[60] opacity-60" />

      {/* Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

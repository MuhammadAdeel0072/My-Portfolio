import { motion, useScroll, useSpring } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden bg-background text-text min-h-screen font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent transform origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923180552193"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;

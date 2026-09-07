'use client';

import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext';
import Loader from './Loader';
import FloatingNav from './FloatingNav';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';

const PortfolioApp = () => {
  const [introDone, setIntroDone] = useState(false);

  // Prevent scrolling behind the loader, then release control
  useEffect(() => {
    if (introDone) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [introDone]);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Loader onComplete={() => setIntroDone(true)} />

        <FloatingNav />

        <div className="flex min-h-screen flex-col">
          <main className="flex-1">
            <Hero introDone={introDone} />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Achievements />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
};

export default PortfolioApp;

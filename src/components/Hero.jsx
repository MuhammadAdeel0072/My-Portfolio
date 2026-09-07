'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ThreeHero from './ThreeHero';
import { scrollToSection } from './FloatingNav';
import { EASE } from '../lib/motion';

const techStack = ['MERN', 'JAVA', 'REACT', 'NODE', 'MONGODB', 'FULL STACK'];

const Hero = ({ introDone = true }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const play = introDone || reduceMotion;

  // Masked, editorial rise for each line of the name
  const nameLine = {
    hidden: { y: '110%' },
    visible: {
      y: '0%',
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const fadeUp = (delay = 0, distance = 22) => ({
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: EASE },
    },
  });

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.35 },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Ambient background */}
      <ThreeHero />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-transparent to-background"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* ============ Text column ============ */}
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate={play ? 'visible' : 'hidden'}
            variants={stagger}
            className="text-center lg:text-left"
          >
            {/* Mobile avatar — identity first on small screens */}
            <motion.div variants={fadeUp(0, 14)} className="mb-5 lg:hidden">
              <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24">
                <span
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-accent-secondary/30"
                />
                <img
                  src="/Adeel.png"
                  alt="Muhammad Adeel"
                  width={96}
                  height={96}
                  className="relative h-full w-full rounded-full border border-border object-cover shadow-lift"
                />
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeUp(0.05, 14)} className="mb-6">
              <span className="glass-light inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2 font-mono text-xs text-text-secondary sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="sr-only">Muhammad Adeel</h1>
            <div aria-hidden="true" className="mb-5 select-none sm:mb-6">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={nameLine}
                  className="block font-display text-5xl font-bold leading-[1.02] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-[5.25rem]"
                >
                  Muhammad
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={nameLine}
                  className="text-gradient block font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]"
                >
                  Adeel
                </motion.span>
              </span>
            </div>

            {/* Role — typed */}
            <motion.div variants={fadeUp(0.15)} className="mb-5">
              <p className="font-display text-xl font-medium text-text-secondary sm:text-2xl md:text-[1.7rem]">
                <span className="sr-only">Full Stack MERN &amp; Java Developer</span>
                <span aria-hidden="true">
                  <TypeAnimation
                    sequence={[
                      'Full Stack MERN & Java Developer',
                      2000,
                      'Full Stack Developer',
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    cursor={false}
                    wrapper="span"
                  />
                  <span
                    className="animate-caret ml-1 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] bg-accent motion-reduce:hidden"
                  />
                </span>
              </p>
            </motion.div>

            {/* Description — untouched wording */}
            <motion.p
              variants={fadeUp(0.25)}
              className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg lg:mx-0"
            >
              Building modern, scalable, and user-focused applications.{' '}
              <br className="hidden sm:block" />
              Transforming complex problems into elegant, highly usable software products.
            </motion.p>

            {/* Tech badges */}
            <motion.ul
              variants={fadeUp(0.35)}
              aria-label="Core technologies"
              className="mb-9 flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:justify-start"
            >
              {techStack.map((tech, i) => (
                <motion.li
                  key={tech}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                  animate={play ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.05, ease: EASE }}
                  className="glass-light cursor-default rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-text-secondary transition-colors duration-300 hover:border-accent/40 hover:text-accent sm:text-sm"
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.45)}
              className="flex flex-col items-stretch gap-3.5 px-1 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-0 lg:justify-start"
            >
              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex min-h-[3.25rem] items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-3.5 font-semibold text-[#04211c] shadow-lg shadow-accent/20 transition-[background-color,box-shadow] duration-300 hover:bg-accent-hover hover:shadow-accent/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="glass inline-flex min-h-[3.25rem] items-center justify-center rounded-xl border border-border px-8 py-3.5 font-semibold text-text transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ============ Desktop portrait ============ */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
            animate={play ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="hidden lg:block"
          >
            <div className="animate-float-slow relative w-72 xl:w-80">
              {/* Gradient halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-secondary/20 blur-2xl"
              />
              {/* Frame */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
                <img
                  src="/Adeel.png"
                  alt="Portrait of Muhammad Adeel"
                  width={640}
                  height={800}
                  className="h-auto w-full object-cover"
                />
                {/* Bottom sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/5"
                />
              </div>
              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-[1.75rem] border-b-2 border-r-2 border-accent/40"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — now interactive */}
      <motion.button
        type="button"
        initial={reduceMotion || !introDone ? false : { opacity: 0 }}
        animate={play ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.15 }}
        onClick={() => scrollToSection('about')}
        className="group absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-full p-2"
        aria-label="Scroll to the About section"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-text-muted transition-colors group-hover:text-accent">
            Scroll to explore
          </span>
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-text-muted transition-colors group-hover:text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, scroller } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import ThreeHero from './ThreeHero';
import heroImg from '../assets/Portfolio.jpeg';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleNavClick = (to) => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 600,
      offset: -80,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 3D Background */}
      <ThreeHero />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-[1]" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-1 text-center lg:text-left"
          >
            {/* Developer label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-border text-xs sm:text-sm font-mono text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={containerVariants} className="mb-6">
              <div className="overflow-hidden">
                {['Muhammad', 'Adeel'].map((word, i) => (
                  <motion.h1
                    key={word}
                    variants={wordVariants}
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight ${
                      i === 1 ? 'text-gradient' : 'text-text'
                    }`}
                  >
                    {word}
                  </motion.h1>
                ))}
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-text-secondary mb-3">
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
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building modern, scalable, and user-focused applications.
                <br className="hidden sm:block" />
                Transforming complex problems into elegant, highly usable software products.
              </motion.p>
            </motion.div>

            {/* Tech badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-12">
              {['MERN', 'JAVA', 'REACT', 'NODE', 'MONGODB', 'FULL STACK'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 glass-light border border-border rounded-full text-xs sm:text-sm font-mono text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/25 w-full sm:w-auto text-center overflow-hidden block"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Projects
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-8 py-4 glass border border-border text-text font-semibold rounded-xl hover:border-accent hover:text-accent transition-all w-full sm:w-auto"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0 hidden lg:block"
          >
            <div className="relative w-72 xl:w-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-3xl blur-2xl" />
                <img
                  src={heroImg}
                  alt="Muhammad Adeel"
                  className="relative w-full h-auto rounded-3xl border border-border shadow-2xl"
                />
            </div>
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:hidden mt-8"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-full blur-2xl" />
              <img
                src={heroImg}
                alt="Muhammad Adeel"
                className="relative w-full h-full object-cover rounded-full border-2 border-border shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted font-mono tracking-widest uppercase">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

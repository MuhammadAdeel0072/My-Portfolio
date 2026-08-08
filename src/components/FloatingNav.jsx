import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, scroller } from 'react-scroll';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.to);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setIsOpen(false);
    scroller.scrollTo(to, {
      smooth: true,
      duration: 600,
      offset: -80,
    });
  };

  return (
    <>
      {/* Desktop Floating Nav - Centered */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
          scrolled
            ? 'glass shadow-2xl shadow-black/20 scale-[0.98]'
            : 'glass-light'
        }`}
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="px-3 py-2 text-sm font-display font-bold text-text hover:text-accent transition-colors mr-1"
        >
          AD
        </Link>

        <div className="h-4 w-px bg-border" />

        {/* Nav Links */}
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
              activeSection === link.to ? 'text-white' : 'text-text-secondary hover:text-text'
            }`}
          >
            {activeSection === link.to && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-accent rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        ))}

        <div className="h-4 w-px bg-border ml-1" />

        {/* Status */}
        <div className="flex items-center gap-2 px-3 py-2">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-400"
          />
          <span className="text-xs text-text-muted font-mono hidden lg:block">
            Available
          </span>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background border-l border-border p-8 flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-text-secondary hover:text-text transition-colors"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Mobile Logo */}
              <div className="mt-16 mb-12">
                <h2 className="text-3xl font-display font-bold text-gradient">MA</h2>
                <p className="text-text-muted text-sm mt-2 font-mono tracking-widest">PORTFOLIO</p>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleNavClick(link.to)}
                    className={`text-left px-6 py-4 rounded-xl text-2xl font-display font-medium transition-all ${
                      activeSection === link.to
                        ? 'text-white bg-accent'
                        : 'text-text-secondary hover:text-text hover:bg-background-tertiary'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              {/* Mobile Social */}
              <div className="mt-auto pt-8 border-t border-border flex items-center gap-6">
                <a
                  href="https://github.com/MuhammadAdeel0072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-adeel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:madeelkhan072@gmail.com"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 md:hidden p-3 glass rounded-full text-text hover:text-accent transition-colors"
        aria-label="Open menu"
      >
        <FiMenu className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default FloatingNav;

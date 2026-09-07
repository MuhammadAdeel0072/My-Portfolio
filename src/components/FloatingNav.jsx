'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { EASE } from '../lib/motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
];

// Shared, guarded smooth-scroll — silently skips targets that don't
// exist yet instead of throwing console errors (error prevention).
export const scrollToSection = to => {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(to)) return;
  scroller.scrollTo(to, {
    smooth: true,
    duration: 650,
    offset: -88,
  });
};

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();
  const closeBtnRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Scroll spy + elevation state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const current = navLinks.find(link => {
        const element = document.getElementById(link.to);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (current) {
        setActiveSection(current.to);
      } else if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock while the mobile drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeBtnRef.current?.focus({ preventScroll: true });

    const onKeyDown = e => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = useCallback(to => {
    setIsOpen(false);
    // Return focus to a sensible place, then scroll after the drawer exits
    setTimeout(() => scrollToSection(to), 60);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsOpen(false);
    menuBtnRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      {/* ============ Desktop — floating pill navigation ============ */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
        aria-label="Primary"
        className={`fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full py-1.5 pl-2 pr-1.5 transition-[background,box-shadow,border-color] duration-500 md:flex glass-light ${
          scrolled
            ? 'glass border border-border shadow-lift'
            : 'border border-transparent'
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="mr-1 rounded-full px-3 py-2 font-display text-sm font-bold text-text transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          AD
        </button>

        <div className="h-4 w-px bg-border" aria-hidden="true" />

        {/* Links */}
        <ul className="flex items-center gap-0.5">
          {navLinks.map(link => {
            const isActive = activeSection === link.to;
            return (
              <li key={link.name}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.to)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-text-secondary hover:text-text'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="ml-1 h-4 w-px bg-border" aria-hidden="true" />

        {/* Availability status */}
        <div className="flex items-center gap-2 px-3 py-2" title="Available for opportunities">
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-success"
          />
          <span className="sr-only">Available for opportunities</span>
          <span aria-hidden="true" className="hidden font-mono text-xs text-text-muted lg:block">
            Available
          </span>
        </div>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full p-2.5 text-text-secondary transition-colors hover:text-accent"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
        </button>
      </motion.nav>

      {/* ============ Mobile — full drawer ============ */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] md:hidden" id="mobile-menu">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleDrawerClose}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="absolute bottom-0 right-0 top-0 flex w-full max-w-sm flex-col border-l border-border bg-background-secondary p-7"
            >
              {/* Close */}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={handleDrawerClose}
                className="absolute right-6 top-6 rounded-full border border-border bg-background p-2.5 text-text-secondary transition-colors hover:text-text"
                aria-label="Close menu"
              >
                <FiX className="h-5 w-5" />
              </button>

              {/* Brand */}
              <div className="mb-10 mt-14">
                <h2 className="font-display text-3xl font-bold text-gradient">MA</h2>
                <p className="mt-2 font-mono text-xs tracking-[0.3em] text-text-muted">PORTFOLIO</p>
              </div>

              {/* Links */}
              <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1.5 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    type="button"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.35, ease: EASE }}
                    onClick={() => handleNavClick(link.to)}
                    aria-current={activeSection === link.to ? 'true' : undefined}
                    className={`rounded-xl px-5 py-3.5 text-left font-display text-xl font-medium transition-colors ${
                      activeSection === link.to
                        ? 'bg-accent text-white'
                        : 'text-text-secondary hover:bg-background-tertiary hover:text-text'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              {/* Footer of drawer */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="rounded-lg p-2.5 text-text-secondary transition-colors hover:text-accent"
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href="https://github.com/MuhammadAdeel0072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2.5 text-text-secondary transition-colors hover:text-accent"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammad-adeel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2.5 text-text-secondary transition-colors hover:text-accent"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:madeelkhan072@gmail.com"
                    className="rounded-lg p-2.5 text-text-secondary transition-colors hover:text-accent"
                    aria-label="Send an email"
                  >
                    <FiMail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============ Mobile — menu trigger ============ */}
      <motion.button
        ref={menuBtnRef}
        type="button"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: EASE }}
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-4 z-50 rounded-full border border-border p-3 text-text transition-colors hover:text-accent glass md:hidden"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <FiMenu className="h-5 w-5" />
      </motion.button>
    </>
  );
};

export default FloatingNav;

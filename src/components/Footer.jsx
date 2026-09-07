'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '../lib/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border bg-background" aria-label="Footer">
      {/* Gradient hairline */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-accent/60 via-accent-secondary/50 to-accent/60" />
      </div>

      <motion.div
        variants={staggerContainer(0.09, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
      >
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <motion.div variants={fadeUp(0, 16)} className="mb-7">
            <h3 className="mb-2.5 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Muhammad Adeel
            </h3>
            <p className="mx-auto max-w-md text-sm text-text-secondary sm:text-base">
              Building scalable and user-focused applications.
            </p>
          </motion.div>

          {/* Socials */}
          <motion.ul variants={fadeUp(0.08, 16)} className="mb-8 flex items-center gap-3.5" aria-label="Social profiles">
            {[
              { href: 'https://github.com/MuhammadAdeel0072', icon: <FiGithub className="h-5 w-5" />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/muhammad-adeel', icon: <FiLinkedin className="h-5 w-5" />, label: 'LinkedIn' },
              { href: 'mailto:madeelkhan072@gmail.com', icon: <FiMail className="h-5 w-5" />, label: 'Email' },
            ].map((social, index) => (
              <li key={index}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              </li>
            ))}
          </motion.ul>

          {/* Section links */}
          <motion.nav
            variants={fadeUp(0.16, 16)}
            aria-label="Footer navigation"
            className="mb-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {[
              { name: 'About', href: '#about' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent"
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </motion.nav>

          {/* Legal */}
          <motion.div
            variants={fadeUp(0.24, 14)}
            className="w-full max-w-md border-t border-border pt-7"
          >
            <p className="font-mono text-xs text-text-muted">
              &copy; {currentYear} Muhammad Adeel. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

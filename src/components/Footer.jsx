import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="h-full bg-gradient-to-r from-accent via-accent-secondary to-accent"
          style={{ backgroundSize: '200% 100%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-text mb-3">
              Muhammad Adeel
            </h3>
            <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto">
              Building scalable and user-focused applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            {[
              { href: 'https://github.com/MuhammadAdeel0072', icon: <FiGithub className="w-5 h-5" />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/muhammad-adeel', icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn' },
              { href: 'mailto:madeelkhan072@gmail.com', icon: <FiMail className="w-5 h-5" />, label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8"
          >
            {[
              { name: 'About', href: 'about' },
              { name: 'Experience', href: 'experience' },
              { name: 'Projects', href: 'projects' },
              { name: 'Skills', href: 'skills' },
              { name: 'Contact', href: 'contact' },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={`#${link.href}`}
                whileHover={{ y: -2 }}
                className="relative text-text-secondary hover:text-accent text-sm font-medium transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-border w-full max-w-md"
          >
            <p className="text-text-muted text-xs font-mono">
              &copy; {currentYear} Muhammad Adeel. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../lib/motion';

/**
 * Shared section shell — guarantees identical rhythm, heading treatment,
 * anchor offsets and reveal behavior across the whole portfolio.
 * `title` renders as a small mono overline; big headlines live inside children
 * so each section keeps its own hierarchy.
 */
const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative py-20 sm:py-24 lg:py-28 scroll-mt-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-12 sm:mb-16"
          >
            {title && (
              <p
                id={`${id}-heading`}
                className="flex items-center gap-3 font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-accent"
              >
                <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
                {title}
              </p>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary">
                {subtitle}
              </p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

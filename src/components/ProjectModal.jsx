'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi';
import { EASE } from '../lib/motion';

/**
 * Project detail dialog.
 * Content strings (Overview / Technologies / Key Features / View Source /
 * Live Demo) and every project field are rendered verbatim.
 *
 * HCI behavior: ESC + backdrop close, body scroll lock, focus moved into the
 * dialog on open and returned to the trigger on close, Tab looped inside the
 * panel, and exit animations that actually run (the panel stays mounted via
 * AnimatePresence until the fade-out completes).
 */
const ProjectModal = ({ project, onClose }) => {
  const closeBtnRef = useRef(null);
  const panelRef = useRef(null);
  const onCloseRef = useRef(onClose);

  // Keep the latest close callback without re-triggering the open effects
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Open-state behavior: focus management, ESC, focus trap, scroll lock
  useEffect(() => {
    if (!project) return undefined;

    const lastFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const focusTimer = setTimeout(() => {
      closeBtnRef.current?.focus({ preventScroll: true });
    }, 60);

    const onKeyDown = e => {
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }

      // Loop Tab inside the dialog (error prevention — focus never escapes)
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      clearTimeout(focusTimer);
      lastFocused?.focus?.();
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/85 p-3 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ scale: 0.96, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 16, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            onClick={e => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-2xl"
          >
            {/* ===== Header image ===== */}
            <div className="relative h-56 shrink-0 overflow-hidden sm:h-72 md:h-80">
              {/* Fallback underlay — only visible if the remote image fails */}
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/12 via-background-tertiary to-background"
              >
                <FiLayers className="h-12 w-12 text-text-muted/50" />
              </span>

              <img
                src={project.image}
                alt={project.title}
                className="relative h-full w-full object-cover"
                decoding="async"
                onError={e => {
                  e.currentTarget.style.opacity = '0';
                }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary/55 to-transparent"
              />

              {/* Close — high contrast over any imagery */}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => onClose()}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/40 p-2.5 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/65"
                aria-label="Close project details"
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Title block */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.category && (
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  )}
                </div>
                <h2
                  id="project-modal-title"
                  className="mb-1.5 font-display text-2xl font-bold leading-tight text-text sm:text-3xl md:text-4xl"
                >
                  {project.title}
                </h2>
                <p className="text-sm text-accent sm:text-base">{project.subtitle}</p>
              </div>
            </div>

            {/* ===== Scrollable content ===== */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="mb-3 flex items-center gap-2.5 text-base font-bold text-text sm:text-lg">
                  <span aria-hidden="true" className="h-5 w-1 rounded-full bg-accent" />
                  Overview
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="mb-3 flex items-center gap-2.5 text-base font-bold text-text sm:text-lg">
                  <span aria-hidden="true" className="h-5 w-1 rounded-full bg-accent" />
                  Technologies
                </h3>
                <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <li
                      key={tech}
                      className="rounded-lg border border-border bg-background-tertiary/60 px-3.5 py-2 text-sm font-medium text-text-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 flex items-center gap-2.5 text-base font-bold text-text sm:text-lg">
                    <span aria-hidden="true" className="h-5 w-1 rounded-full bg-accent" />
                    Key Features
                  </h3>
                  <ul className="space-y-2.5">
                    {project.features.map(feature => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary sm:text-[0.9375rem]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background-tertiary/50 px-6 py-3 font-medium text-text transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    <FiGithub className="h-5 w-5" aria-hidden="true" />
                    View Source
                    <FiExternalLink className="h-4 w-4 opacity-60" aria-hidden="true" />
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-colors duration-300 hover:bg-accent-hover"
                  >
                    Live Demo
                    <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

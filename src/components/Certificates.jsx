'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiAward, FiFileText, FiBook } from 'react-icons/fi';
import Section from './Section';
import { fadeUp, staggerContainer, VIEWPORT, EASE } from '../lib/motion';

// Original data — untouched (titles, issuers, categories, files, descriptions).
// Files live in /public/certificates — drop the real PDFs there to enable previews.
const certificates = [
  {
    id: 1,
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    file: '/certificates/IOT Certifcate.pdf',
    brand: 'Cisco',
    color: 'from-teal-600 to-teal-900',
    description: 'Foundation in Internet of Things concepts and technologies.',
  },
  {
    id: 2,
    title: 'C++ Essential 2 (OOP)',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    file: '/certificates/C++ Essential 2.pdf',
    brand: 'Cisco',
    color: 'from-cyan-700 to-cyan-950',
    description: 'Advanced Object-Oriented Programming principles in C++.',
  },
  {
    id: 3,
    title: 'C++ Advanced (Data Structures)',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    file: '/certificates/C++ Advance.pdf',
    brand: 'Cisco',
    color: 'from-emerald-600 to-emerald-950',
    description: 'Implementation of complex data structures and algorithms.',
  },
  {
    id: 4,
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    file: '/certificates/IT Essential.pdf',
    brand: 'Cisco',
    color: 'from-teal-700 to-emerald-950',
    description: 'Fundamental computer hardware and software skills.',
  },
  {
    id: 5,
    title: 'SQL and Relational Databases',
    issuer: 'CognitiveClass.ai',
    category: 'Databases',
    file: '/certificates/DB.Certificate.pdf',
    brand: 'IBM / CognitiveClass',
    color: 'from-slate-700 to-slate-950',
    description: 'Database management, SQL queries, and relational data modeling.',
  },
  {
    id: 6,
    title: 'Engaging Stakeholders',
    issuer: 'Business Professional',
    category: 'Business',
    file: '/certificates/Engagging StakeHolders.pdf',
    brand: 'Business',
    color: 'from-amber-600 to-orange-800',
    description: 'Professional communication and stakeholder management.',
  },
  {
    id: 7,
    title: 'Discovering Entrepreneurship',
    issuer: 'Business Professional',
    category: 'Business',
    file: '/certificates/Enterpreneurships.pdf',
    brand: 'Business',
    color: 'from-orange-600 to-red-800',
    description: 'Fundamentals of business innovation and startup growth.',
  },
];

const filters = ['All', 'Programming', 'Databases', 'Business'];

const CertIcon = ({ cert }) => {
  if (cert.brand === 'Cisco') {
    return (
      <svg aria-hidden="true" className="h-14 w-14 text-white/90" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.35-.9 4.47-2.36 6.13z" />
      </svg>
    );
  }
  if (cert.category === 'Databases') {
    return <FiBook className="h-14 w-14 text-white/90" aria-hidden="true" />;
  }
  return <FiFileText className="h-14 w-14 text-white/90" aria-hidden="true" />;
};

const CertificateCard = ({ cert, onOpen }) => {
  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(cert);
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.45, ease: EASE }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl hover:border-accent/30 hover:shadow-lift"
    >
      <button
        type="button"
        onClick={() => onOpen(cert)}
        onKeyDown={handleKeyDown}
        aria-label={`View certificate: ${cert.title} — opens a preview`}
        className="relative block h-44 w-full cursor-pointer overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
      >
        {/* Deep duotone document preview */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-noise opacity-20" />
        </div>

        {/* Brand chip */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {cert.brand}
        </span>

        {/* Watermark icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <CertIcon cert={cert} />
        </div>

        {/* Category spine */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-white/25 transition-[width] duration-300 group-hover:w-1.5"
        />

        {/* Hover affordance */}
        <span className="absolute inset-0 hidden items-center justify-center bg-black/35 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:flex">
          <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-xl transition-transform duration-300 group-hover:translate-y-0">
            View PDF
          </span>
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug text-text transition-colors duration-300 group-hover:text-accent">
            {cert.title}
          </h3>
          <FiAward className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        </div>

        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-accent/90">
          {cert.issuer}
        </p>

        <p className="mb-5 text-sm leading-relaxed text-text-secondary">{cert.description}</p>

        {/* Always-visible action — mobile users have no hover */}
        <button
          type="button"
          onClick={() => onOpen(cert)}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-text-secondary transition-colors duration-300 hover:border-accent/50 hover:text-accent"
        >
          View certificate
          <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [pdfState, setPdfState] = useState('idle'); // idle | checking | ready | missing
  const closeBtnRef = useRef(null);
  const lastFocused = useRef(null);

  const filteredCerts =
    activeFilter === 'All' ? certificates : certificates.filter(cert => cert.category === activeFilter);

  const openCert = useCallback(cert => {
    lastFocused.current = document.activeElement;
    setPdfState('checking');
    setSelectedCert(cert);
  }, []);

  const closeCert = useCallback(() => {
    setSelectedCert(null);
    setPdfState('idle');
    lastFocused.current?.focus?.();
  }, []);

  // Verify the PDF exists before embedding (graceful fallback instead of a broken frame)
  useEffect(() => {
    if (!selectedCert) return;
    let cancelled = false;
    fetch(selectedCert.file, { method: 'HEAD' })
      .then(res => {
        if (!cancelled) setPdfState(res.ok ? 'ready' : 'missing');
      })
      .catch(() => {
        if (!cancelled) setPdfState('missing');
      });
    return () => {
      cancelled = true;
    };
  }, [selectedCert]);

  // Modal behavior: ESC, scroll lock, initial focus
  useEffect(() => {
    if (!selectedCert) return;
    const onKeyDown = e => {
      if (e.key === 'Escape') closeCert();
    };
    document.addEventListener('keydown', onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => closeBtnRef.current?.focus(), 60);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      clearTimeout(t);
    };
  }, [selectedCert, closeCert]);

  return (
    <Section
      id="certificates"
      title="Certificates & Achievements"
      subtitle="Validated learning and professional development through globally recognized institutions."
    >
      {/* ===== Filter tabs ===== */}
      <motion.div
        variants={fadeUp(0, 16)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        role="group"
        aria-label="Filter certificates by category"
        className="mb-10 flex flex-wrap justify-center gap-2.5 sm:mb-12 sm:gap-3"
      >
        {filters.map(filter => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 sm:px-6 ${
                isActive
                  ? 'text-white'
                  : 'glass border border-border text-text-secondary hover:border-accent/40 hover:text-accent'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="certFilterPill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-accent shadow-lg shadow-accent/25"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          );
        })}
      </motion.div>

      {/* ===== Grid ===== */}
      <motion.div
        variants={staggerContainer(0.06, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredCerts.map(cert => (
            <CertificateCard key={cert.id} cert={cert} onOpen={openCert} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ===== PDF viewer modal ===== */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
            onClick={closeCert}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Certificate preview: ${selectedCert.title}`}
              initial={{ scale: 0.95, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={e => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 border-b border-border bg-background-secondary p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-bold leading-tight text-text sm:text-xl">
                    {selectedCert.title}
                  </h3>
                  <p className="mt-1 truncate text-sm text-accent">{selectedCert.issuer}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border bg-background p-2.5 text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                    aria-label="Open certificate in a new tab"
                    title="Open in new tab"
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={closeCert}
                    className="rounded-lg border border-border bg-background p-2.5 text-text transition-colors hover:border-accent/40 hover:text-accent"
                    aria-label="Close certificate preview"
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative min-h-[60vh] flex-1 bg-slate-100 dark:bg-slate-950">
                {pdfState === 'checking' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent motion-reduce:animate-none" />
                  </div>
                )}

                {pdfState === 'ready' && (
                  <iframe
                    src={`${selectedCert.file}#toolbar=0&navpanes=0`}
                    className="h-full min-h-[60vh] w-full border-none"
                    title={`${selectedCert.title} — ${selectedCert.issuer}`}
                  />
                )}

                {pdfState === 'missing' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background-secondary text-accent">
                      <FiAward className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-text">{selectedCert.title}</p>
                      <p className="mt-1 text-sm text-text-secondary">
                        {selectedCert.issuer} · {selectedCert.category}
                      </p>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-text-muted">
                      The inline PDF preview isn&apos;t available right now. Add the certificate
                      file <span className="font-mono text-text-secondary">{selectedCert.file}</span> to
                      the project&apos;s public folder to enable it.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certificates;

'use client';

import { useState, useCallback } from 'react';
import Section from './Section';
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiLayers } from 'react-icons/fi';
import { fadeUp, staggerContainer, VIEWPORT, EASE } from '../lib/motion';

// Original project data — untouched (titles, subtitles, descriptions, tech,
// images, links, categories and features are preserved verbatim).
const projects = [
  {
    id: 1,
    title: 'InternLink',
    subtitle: 'Internship Management Platform',
    description:
      'A comprehensive platform for managing internship applications, tracking progress, and connecting students with opportunities.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/InternLink',
    live: 'https://internlink.adeelkhan.online/login',
    category: 'MERN · Full Stack',
    features: [
      'Application tracking and status management',
      'Real-time notifications with Socket.io',
      'Role-based access control',
      'Analytics dashboard for progress tracking',
    ],
  },
  {
    id: 2,
    title: 'DineXis',
    subtitle: 'Restaurant Ecosystem',
    description:
      'A premium, full-stack dining experience crafted for the digital age. Luxury restaurant management ecosystem built on the MERN stack.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image:
      // Original photo (photo-1565299624946) was removed from Unsplash (404);
      // replaced with an equivalent fine-dining image so the card never shows broken.
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/DineXis-MERN',
    live: '#',
    category: 'MERN · Full Stack',
    features: [
      'Real-time order tracking',
      'Mood-based food recommendations',
      'Product variations and customizations',
      'Secure payment integration with Stripe',
    ],
  },
  {
    id: 3,
    title: 'BISTRO Landing Page',
    subtitle: 'Restaurant Website',
    description:
      'A modern, animated landing page for a fine dining restaurant built with React, Vite, and Tailwind CSS.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/BISTRO-Landing-Page',
    live: '#',
    category: 'React · Tailwind',
    features: [
      'Responsive design for all devices',
      'Interactive menu showcase',
      'Smooth animations and transitions',
      'Reservation form integration',
    ],
  },
  {
    id: 4,
    title: 'SmileCare',
    subtitle: 'Modern Dental Clinic Website',
    description:
      'A modern, responsive dental clinic website built with React.js and CSS Modules.',
    tech: ['React', 'CSS Modules'],
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/SmileCare',
    live: 'https://smile-care-ashy.vercel.app',
    category: 'React · CSS',
    features: [
      'Appointment booking system',
      'Service showcase with details',
      'Patient testimonials',
      'Contact and location integration',
    ],
  },
  {
    id: 5,
    title: 'ESCAPE',
    subtitle: 'Zombie Escape Simulator',
    description:
      'An immersive algorithm-based simulation game built for the Analysis of Algorithms project.',
    tech: ['Algorithms', 'Game Development'],
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/ESCAPE-Zombie-Escape-Simulator',
    live: '#',
    category: 'Algorithms',
    features: [
      'Pathfinding algorithms',
      'Game simulation logic',
      'Interactive UI',
      'Algorithm analysis',
    ],
  },
  {
    id: 6,
    title: 'Smart Delivery Route Optimization',
    subtitle: 'Delivery Management System',
    description:
      'A professional-grade Java Swing desktop application for solving complex multi-objective delivery routing problems.',
    tech: ['Java', 'Swing', 'Algorithms'],
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/Smart-Delivery-Route-Optimization-System',
    live: '#',
    category: 'Java · Algorithms',
    features: [
      'Package tracking system',
      'Route optimization',
      'Delivery status management',
      'Reporting and analytics',
    ],
  },
  {
    id: 7,
    title: 'Bank Management System',
    subtitle: 'Core Banking Engine',
    description:
      'A professional C++ console application simulating a complete banking system with secure authentication.',
    tech: ['C++', 'Data Structures'],
    image:
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/Bank-Management-System-DSA',
    live: '#',
    category: 'C++ · DSA',
    features: [
      'Account management',
      'Transaction processing',
      'Secure data handling',
      'Advanced data structures implementation',
    ],
  },
  {
    id: 8,
    title: 'Cartsy',
    subtitle: 'Store Management System',
    description:
      'A sleek, professional Java Swing desktop application for managing a single large store with products, sales, and analytics.',
    tech: ['Java', 'Swing', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/MuhammadAdeel0072/CARTSY',
    live: '#',
    category: 'Java · Swing',
    features: [
      'Inventory management',
      'User authentication',
      'Shopping cart functionality',
      'Secure checkout process',
    ],
  },
];

const ProjectCard = ({ project, onOpen }) => {
  // Whole-card click mirrors the original behavior; real buttons below keep
  // keyboard/AT users first-class. Guard avoids double-firing on inner controls.
  const handleCardClick = e => {
    if (e.target.closest('button, a')) return;
    onOpen(project);
  };

  return (
    <motion.article
      variants={fadeUp(0, 26)}
      onClick={handleCardClick}
      className="glass-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl hover:border-accent/30 hover:shadow-lift"
    >
      {/* ===== Image preview — a real button so the card is keyboard operable ===== */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View project details: ${project.title}`}
        className="relative block h-48 w-full cursor-pointer overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent sm:h-52"
      >
        {/* Fallback underlay — only visible if the remote image fails */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/12 via-background-tertiary to-background"
        >
          <FiLayers className="h-10 w-10 text-text-muted/50" />
        </span>

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          draggable="false"
          onError={e => {
            e.currentTarget.style.opacity = '0';
          }}
          className="relative h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />

        {/* Readability gradient */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent"
        />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {project.category}
        </span>

        {/* Hover affordance — desktop only (touch devices have the Details button below) */}
        <span className="absolute inset-0 hidden items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:flex">
          <span className="flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:translate-y-0">
            <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </span>
      </button>

      {/* ===== Body ===== */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-1 font-display text-lg font-bold leading-snug text-text transition-colors duration-300 group-hover:text-accent sm:text-xl">
          {project.title}
        </h3>
        <p className="mb-3 text-xs font-semibold tracking-wide text-accent sm:text-sm">
          {project.subtitle}
        </p>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tech chips — first four, remainder counted */}
        <ul
          aria-label="Technologies used"
          className="mb-4 flex flex-wrap gap-2"
        >
          {project.tech.slice(0, 4).map(tech => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background-tertiary/60 px-2 py-1 font-mono text-[11px] font-medium text-text-muted"
            >
              {tech}
            </li>
          ))}
          {project.tech.length > 4 && (
            <li className="px-1 py-1 font-mono text-[11px] font-medium text-text-muted">
              +{project.tech.length - 4}
            </li>
          )}
        </ul>

        {/* Actions — always visible, touch friendly */}
        <div className="mt-auto flex items-center gap-4 border-t border-border pt-4">
          <a
            href={project.github}
            onClick={e => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            <FiGithub className="h-4 w-4" aria-hidden="true" />
            Source
          </a>

          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              onClick={e => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo (opens in a new tab)`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              <FiExternalLink className="h-4 w-4" aria-hidden="true" />
              Live
            </a>
          )}

          <button
            type="button"
            onClick={() => onOpen(project)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-text-secondary transition-colors duration-300 hover:border-accent/50 hover:text-accent"
          >
            Details
            <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = useCallback(project => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <Section id="projects" title="Selected Projects">
      <motion.div
        variants={staggerContainer(0.07, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onOpen={openProject} />
        ))}
      </motion.div>

      {/* Detail modal */}
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </Section>
  );
};

export default Projects;

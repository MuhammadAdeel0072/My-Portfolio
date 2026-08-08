import Section from './Section';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import ProjectModal from './ProjectModal';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "InternLink",
    subtitle: "Internship Management Platform",
    description: "A comprehensive platform for managing internship applications, tracking progress, and connecting students with opportunities.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/InternLink",
    live: "https://internlink.adeelkhan.online/login",
    category: "MERN · Full Stack",
    features: [
      "Application tracking and status management",
      "Real-time notifications with Socket.io",
      "Role-based access control",
      "Analytics dashboard for progress tracking",
    ],
  },
  {
    id: 2,
    title: "DineXis",
    subtitle: "Restaurant Ecosystem",
    description: "A premium, full-stack dining experience crafted for the digital age. Luxury restaurant management ecosystem built on the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae37?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/DineXis-MERN",
    live: "#",
    category: "MERN · Full Stack",
    features: [
      "Real-time order tracking",
      "Mood-based food recommendations",
      "Product variations and customizations",
      "Secure payment integration with Stripe",
    ],
  },
  {
    id: 3,
    title: "BISTRO Landing Page",
    subtitle: "Restaurant Website",
    description: "A modern, animated landing page for a fine dining restaurant built with React, Vite, and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/BISTRO-Landing-Page",
    live: "#",
    category: "React · Tailwind",
    features: [
      "Responsive design for all devices",
      "Interactive menu showcase",
      "Smooth animations and transitions",
      "Reservation form integration",
    ],
  },
  {
    id: 4,
    title: "SmileCare",
    subtitle: "Modern Dental Clinic Website",
    description: "A modern, responsive dental clinic website built with React.js and CSS Modules.",
    tech: ["React", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/SmileCare",
    live: "https://smile-care-ashy.vercel.app",
    category: "React · CSS",
    features: [
      "Appointment booking system",
      "Service showcase with details",
      "Patient testimonials",
      "Contact and location integration",
    ],
  },
  {
    id: 5,
    title: "ESCAPE",
    subtitle: "Zombie Escape Simulator",
    description: "An immersive algorithm-based simulation game built for the Analysis of Algorithms project.",
    tech: ["Algorithms", "Game Development"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/ESCAPE-Zombie-Escape-Simulator",
    live: "#",
    category: "Algorithms",
    features: [
      "Pathfinding algorithms",
      "Game simulation logic",
      "Interactive UI",
      "Algorithm analysis",
    ],
  },
  {
    id: 6,
    title: "Smart Delivery Route Optimization",
    subtitle: "Delivery Management System",
    description: "A professional-grade Java Swing desktop application for solving complex multi-objective delivery routing problems.",
    tech: ["Java", "Swing", "Algorithms"],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/Smart-Delivery-Route-Optimization-System",
    live: "#",
    category: "Java · Algorithms",
    features: [
      "Package tracking system",
      "Route optimization",
      "Delivery status management",
      "Reporting and analytics",
    ],
  },
  {
    id: 7,
    title: "Bank Management System",
    subtitle: "Core Banking Engine",
    description: "A professional C++ console application simulating a complete banking system with secure authentication.",
    tech: ["C++", "Data Structures"],
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/Bank-Management-System-DSA",
    live: "#",
    category: "C++ · DSA",
    features: [
      "Account management",
      "Transaction processing",
      "Secure data handling",
      "Advanced data structures implementation",
    ],
  },
  {
    id: 8,
    title: "Cartsy",
    subtitle: "Store Management System",
    description: "A sleek, professional Java Swing desktop application for managing a single large store with products, sales, and analytics.",
    tech: ["Java", "Swing", "MySQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/MuhammadAdeel0072/CARTSY",
    live: "#",
    category: "Java · Swing",
    features: [
      "Inventory management",
      "User authentication",
      "Shopping cart functionality",
      "Secure checkout process",
    ],
  },
];

const ProjectCard = ({ project, onOpen, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onOpen(project)}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full"
    >
      {/* Image Preview */}
      <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 glass rounded-full text-xs font-medium text-accent">
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
            <FiArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-display font-bold text-text group-hover:text-accent transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-accent text-xs sm:text-sm font-medium">
            {project.subtitle}
          </p>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-background/50 border border-border text-text-muted text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-text-muted text-xs font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm font-medium"
          >
            <FiGithub className="w-4 h-4" />
            <span>Source</span>
          </a>
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm font-medium"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects" title="Selected Projects">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
};

export default Projects;

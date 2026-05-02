import Section from './Section';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DineXis",
      subtitle: "Online Web First App",
      description: "A comprehensive MERN stack food delivery application featuring real-time order tracking, smart variations, and a mood-based recommendation engine. Built for scale with modern React.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/dinexis.png",
      github: "https://github.com/MuhammadAdeel0072/DineXis",
      live: "#"
    },
    {
      id: 2,
      title: "CartSy",
      subtitle: "Online Shopping System",
      description: "A robust Java-based desktop e-commerce application handling inventory management, user authentication, and secure checkout processes.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      image: "/cartsy.png",
      github: "https://github.com/MuhammadAdeel0072",
    },
    {
      id: 3,
      title: "TileDesk",
      subtitle: "Factory Management System",
      description: "An industrial management system designed in Java to streamline factory operations, monitor raw materials, and track production efficiency.",
      tech: ["Java", "OOP", "File Handling"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/MuhammadAdeel0072",
    },
    {
      id: 4,
      title: "Bank Management System",
      subtitle: "Core Banking Engine",
      description: "A highly optimized terminal-based banking application built with C++ utilizing advanced data structures for secure transaction processing.",
      tech: ["C++", "Data Structures", "Pointers"],
      image: "https://images.unsplash.com/photo-1616803140344-6682afb13cda?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/MuhammadAdeel0072",
    }
  ];

  return (
    <Section id="projects" title="Featured Work">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-background-secondary rounded-xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
          >
            {/* Image Area */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-border">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Content Area */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-text mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase">{project.subtitle}</p>
              </div>
              
              <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 sm:px-3 py-1 bg-background border border-border text-text-secondary text-xs font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4 border-t border-border">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-medium text-sm"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-medium text-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

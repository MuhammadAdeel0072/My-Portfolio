import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 glass rounded-full text-text-secondary hover:text-text transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category && (
                    <span className="px-3 py-1 glass rounded-full text-xs font-medium text-accent">
                      {project.category}
                    </span>
                  )}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-text mb-2">
                  {project.title}
                </h2>
                <p className="text-text-secondary text-sm sm:text-base">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent rounded-full" />
                  Overview
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent rounded-full" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 glass rounded-lg text-sm text-text-secondary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-accent rounded-full" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 glass rounded-xl text-text hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="font-medium">View Source</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover rounded-xl text-white font-medium transition-all"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="w-4 h-4" />
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

import Section from './Section';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Think & Code Pvt. Ltd.",
      period: "2026",
      duration: "2 Months",
      description: "Worked as Full Stack Development Intern using MERN stack. Developed responsive web applications with modern React patterns, implemented RESTful APIs, and collaborated with the team on scalable backend solutions.",
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub", "Postman"],
    }
  ];

  const timeline = [
    { year: '2026', label: 'Internship Period' },
    { company: 'Think & Code', label: 'Company' },
    { role: 'Full Stack Development', label: 'Role' },
    { tech: 'MERN Stack', label: 'Technology' },
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="max-w-4xl mx-auto">
        {/* Timeline Visual */}
        <div className="hidden lg:flex flex-col items-center mb-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-2">
                <span className="text-xs font-bold text-accent font-mono text-center leading-tight">
                  {item.year || item.company || item.role || item.tech}
                </span>
              </div>
              <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest mb-4">
                {item.label}
              </span>
              {index < timeline.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="w-px h-8 bg-gradient-to-b from-accent/50 to-accent/20 origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block" />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20 flex-shrink-0"
                />
              </div>

              {/* Content */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold font-mono rounded-full flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="text-text-muted text-xs font-mono">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-text mb-2">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <FiMapPin className="w-4 h-4 text-accent" />
                  <p className="text-accent font-semibold text-lg">
                    {exp.company}
                  </p>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-background-tertiary/50 border border-border text-text-secondary text-xs font-medium rounded-lg hover:border-accent/30 hover:text-text transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { fadeUp, staggerContainer, VIEWPORT, EASE } from '../lib/motion';

const Experience = () => {
  // Original content — untouched
  const experiences = [
    {
      title: 'Full Stack Development Intern',
      company: 'Think & Code Pvt. Ltd.',
      period: '2026',
      duration: '2 Months',
      image: '/Internship Certificate.png',
      description:
        'Worked as Full Stack Development Intern using MERN stack. Developed responsive web applications with modern React patterns, implemented RESTful APIs, and collaborated with the team on scalable backend solutions.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub', 'Postman'],
    },
  ];

  const timeline = [
    { value: '2026', label: 'Internship Period' },
    { value: 'Think & Code', label: 'Company' },
    { value: 'Full Stack Development', label: 'Role' },
    { value: 'MERN Stack', label: 'Technology' },
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="mx-auto max-w-4xl">
        {/* ===== Key facts progression — same data, presented as a strip ===== */}
        <motion.ol
          variants={staggerContainer(0.09, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-10 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-4 sm:gap-0"
        >
          {timeline.map((item, index) => (
            <motion.li key={item.label} variants={fadeUp(0, 16)} className="relative flex items-center">
              <div className="glass-card flex w-full flex-col gap-1 rounded-xl px-4 py-3.5 sm:items-center sm:py-4">
                <span className="break-words text-center font-mono text-xs font-bold leading-snug text-accent sm:text-[13px]">
                  {item.value}
                </span>
                <span className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                  {item.label}
                </span>
              </div>
              {/* Connector */}
              {index < timeline.length - 1 && (
                <FiChevronRight
                  aria-hidden="true"
                  className="absolute -right-[7px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-accent/60 sm:block"
                />
              )}
            </motion.li>
          ))}
        </motion.ol>

        {/* ===== Entry card with timeline rail ===== */}
        <div className="relative">
          {/* Rail */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/50 via-accent/15 to-transparent sm:block"
          />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
              className="relative flex gap-6 sm:gap-8"
            >
              {/* Node */}
              <span aria-hidden="true" className="mt-8 hidden shrink-0 sm:block">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
                  className="block h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20"
                />
              </span>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="glass-card group flex-1 rounded-2xl p-6 hover:border-accent/30 sm:p-8"
              >
                {/* Meta row */}
                <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-bold text-accent">
                    <FiCalendar className="h-3 w-3" aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="font-mono text-xs text-text-muted">{exp.duration}</span>
                </div>

                <h3 className="mb-2 font-display text-2xl font-bold leading-tight text-text sm:text-[1.7rem]">
                  {exp.title}
                </h3>

                <p className="mb-5 flex items-center gap-2">
                  <FiMapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-semibold text-accent sm:text-lg">{exp.company}</span>
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={`${exp.company} Internship Certificate`}
                      className="h-7 w-7 rounded-md object-cover"
                      title="Internship Certificate"
                    />
                  )}
                </p>

                <p className="mb-7 leading-relaxed text-text-secondary">{exp.description}</p>

                {/* Technologies */}
                <div
                  role="list"
                  aria-label="Technologies used"
                  className="flex flex-wrap gap-2 border-t border-border pt-5"
                >
                  {exp.technologies.map(tech => (
                    <span
                      role="listitem"
                      key={tech}
                      className="rounded-lg border border-border bg-background-tertiary/50 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-300 hover:border-accent/40 hover:text-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

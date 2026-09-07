'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { fadeUp, staggerContainer, VIEWPORT, hoverLift, EASE } from '../lib/motion';

const Education = () => {
  // Original content — untouched
  const education = [
    {
      degree: 'FSc (Pre-Engineering)',
      institution: 'Kallar Kahar Science College',
      score: '82%',
      year: 'Completed',
    },
    {
      degree: 'Matriculation',
      institution: 'Kallar Kahar Science College',
      score: '88.36%',
      year: 'Completed',
    },
  ];

  return (
    <Section id="education" title="Education">
      <div className="mx-auto max-w-4xl">
        <motion.ol
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
        >
          {education.map((edu, index) => (
            <motion.li
              key={edu.degree}
              variants={fadeUp(0, 22)}
              whileHover={hoverLift}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background-secondary p-6 shadow-lift transition-colors duration-300 hover:border-accent/30 sm:p-7"
            >
              {/* Soft corner wash */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/[0.06] blur-xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent">
                    <FiBookOpen className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-muted">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-success"
                    />
                    {edu.year}
                  </span>
                </div>

                <h3 className="mb-1.5 font-display text-xl font-bold text-text sm:text-2xl">
                  {edu.degree}
                </h3>

                <p className="mb-6 text-sm font-medium text-text-secondary sm:text-base">
                  {edu.institution}
                </p>

                <div className="flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      Score
                    </p>
                    <p className="font-display text-2xl font-bold text-gradient sm:text-[1.7rem]">
                      {edu.score}
                    </p>
                  </div>
                  {/* Progress ring visual — maps to the score */}
                  <ScoreRing score={parseFloat(edu.score)} />
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
};

/** Compact radial gauge derived from the existing score value */
const ScoreRing = ({ score }) => {
  const circumference = 2 * Math.PI * 26;
  const offset = circumference * (1 - score / 100);

  return (
    <div
      className="relative h-16 w-16 shrink-0"
      role="img"
      aria-label={`Score ${score} out of 100`}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          strokeWidth="5"
          className="stroke-border"
        />
        <motion.circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          className="stroke-accent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-bold text-text-secondary">
        {score}
      </span>
    </div>
  );
};

export default Education;

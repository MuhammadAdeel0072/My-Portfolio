'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiGithub } from 'react-icons/fi';
import { fadeUp, staggerContainer, VIEWPORT, hoverLift } from '../lib/motion';

const Achievements = () => {
  // Original content — untouched
  const achievements = [
    {
      icon: <FiAward className="h-6 w-6" />,
      iconClass: 'text-accent-secondary',
      title: 'Cisco Certificates',
      items: ['C++ Essentials', 'C++ Advanced', 'Entrepreneurship'],
    },
    {
      icon: <FiStar className="h-6 w-6" />,
      iconClass: 'text-accent',
      title: 'Competitions',
      items: ['Participated in Speed Programming Competition at NUST EME College'],
    },
    {
      icon: <FiGithub className="h-6 w-6" />,
      iconClass: 'text-text',
      title: 'Open Source',
      items: ['Active GitHub collaboration and version control experience'],
    },
  ];

  return (
    <Section id="achievements" title="Achievements">
      <motion.ul
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        aria-label="Achievements"
        className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {achievements.map((achievement, index) => (
          <motion.li
            key={achievement.title}
            variants={fadeUp(0, 22)}
            whileHover={hoverLift}
            className="glass-card group relative overflow-hidden rounded-2xl p-6 sm:p-7"
          >
            {/* Icon chip */}
            <div className="mb-5 flex items-center gap-4">
              <span
                className={`glass flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${achievement.iconClass}`}
              >
                {achievement.icon}
              </span>
              <h3 className="font-display text-lg font-bold text-text sm:text-xl">
                {achievement.title}
              </h3>
            </div>

            {/* Items — left aligned for readability */}
            <ul className="space-y-2.5">
              {achievement.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Hover accent line */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent/40 transition-[width] duration-500 ease-out group-hover:w-full"
            />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
};

export default Achievements;

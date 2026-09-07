'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiMonitor, FiCode, FiLayout, FiTool } from 'react-icons/fi';
import { fadeUp, popIn, staggerContainer, VIEWPORT, hoverLift, EASE } from '../lib/motion';

// Skill → icon mapping preserved from the original project (same brand colors).
const skillIcons = {
  'C++': <SiCplusplus className="text-2xl text-[#00599C]" aria-hidden="true" />,
  Java: <FaJava className="text-2xl text-[#007396]" aria-hidden="true" />,
  JavaScript: <SiJavascript className="text-2xl text-[#F7DF1E]" aria-hidden="true" />,
  'React.js': <SiReact className="text-2xl text-[#61DAFB]" aria-hidden="true" />,
  'Next.js': <SiNextdotjs className="text-2xl text-text" aria-hidden="true" />,
  'Express.js': <SiExpress className="text-2xl text-text" aria-hidden="true" />,
  MongoDB: <SiMongodb className="text-2xl text-[#47A248]" aria-hidden="true" />,
  MySQL: <SiMysql className="text-2xl text-[#4479A1]" aria-hidden="true" />,
  'Tailwind CSS': <SiTailwindcss className="text-2xl text-[#06B6D4]" aria-hidden="true" />,
  'VS Code': <FiMonitor className="text-2xl text-[#007ACC]" aria-hidden="true" />,
  Git: <SiGit className="text-2xl text-[#F05032]" aria-hidden="true" />,
  GitHub: <SiGithub className="text-2xl text-text" aria-hidden="true" />,
  Figma: <SiFigma className="text-2xl text-[#F24E1E]" aria-hidden="true" />,
  HCI: <FiMonitor className="text-2xl text-accent" aria-hidden="true" />,
};

const categoryIcons = {
  'Programming Languages': <FiCode className="h-5 w-5" aria-hidden="true" />,
  'Web Development': <FiLayout className="h-5 w-5" aria-hidden="true" />,
  'Tools & Design': <FiTool className="h-5 w-5" aria-hidden="true" />,
};

const Skills = () => {
  // Original content — untouched (category titles and skill names verbatim).
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'JavaScript'],
    },
    {
      title: 'Web Development',
      skills: ['React.js', 'Next.js', 'Express.js', 'MongoDB', 'MySQL', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Design',
      skills: ['VS Code', 'Git', 'GitHub', 'Figma', 'HCI'],
    },
  ];

  return (
    <Section id="skills" title="Technical Arsenal">
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map(category => (
          <motion.div
            key={category.title}
            variants={fadeUp(0, 26)}
            className="glass-card rounded-2xl p-6 sm:p-7"
          >
            {/* Category header */}
            <div className="mb-6 flex items-center gap-3.5 border-b border-border pb-4">
              <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-accent">
                {categoryIcons[category.title]}
              </span>
              <h3 className="font-display text-lg font-bold text-text sm:text-xl">
                {category.title}
              </h3>
            </div>

            {/* Skill tiles */}
            <motion.ul
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              aria-label={category.title}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5"
            >
              {category.skills.map(skill => (
                <motion.li
                  key={skill}
                  variants={popIn}
                  whileHover={hoverLift}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="group relative flex cursor-default flex-col items-center gap-3 rounded-xl border border-border bg-background/50 p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-background/80 sm:p-5"
                >
                  {/* Icon tile */}
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background-tertiary transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/40">
                    {skillIcons[skill]}
                  </span>

                  {/* Name */}
                  <span className="text-center text-xs font-medium leading-tight text-text-secondary transition-colors duration-300 group-hover:text-text sm:text-sm">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;

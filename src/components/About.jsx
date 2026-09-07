'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiTrendingUp } from 'react-icons/fi';
import { fadeUp, staggerContainer, VIEWPORT, hoverLift, EASE } from '../lib/motion';

const About = () => {
  // Original content — untouched
  const highlights = [
    {
      icon: <FiCode className="h-5 w-5" />,
      title: 'MERN Stack',
      desc: 'Building responsive, full-featured web applications with modern React patterns and scalable backends.',
      number: '01',
    },
    {
      icon: <FiTerminal className="h-5 w-5" />,
      title: 'Java Desktop',
      desc: 'Developing robust desktop systems with clean OOP architecture and efficient file handling.',
      number: '02',
    },
    {
      icon: <FiTrendingUp className="h-5 w-5" />,
      title: 'Continuous Learning',
      desc: 'Currently expanding into Android App Development to deliver seamless cross-platform experiences.',
      number: '03',
    },
  ];

  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-20">
        {/* ===== Left: statement ===== */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.h2
            variants={fadeUp(0, 20)}
            className="mb-8 font-display text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.12]"
          >
            <span
              aria-hidden="true"
              className="mb-5 block h-1 w-14 rounded-full bg-gradient-to-r from-accent to-accent-secondary"
            />
            I am a Software Engineer focused on building{' '}
            <span className="text-gradient">impactful digital products</span>.
          </motion.h2>

          <motion.div variants={fadeUp(0.1)} className="space-y-5 sm:space-y-6">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              With a strong foundation in both web and desktop application development, I bridge
              the gap between design and engineering. My passion lies in architecting systems that
              are not only scalable and efficient under the hood, but also incredibly intuitive and
              engaging for the end user.
            </p>

            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              Currently expanding my horizons into Android App Development to deliver seamless
              cross-platform experiences. My ultimate goal is to build software products that solve
              genuine problems at a global scale.
            </p>
          </motion.div>
        </motion.div>

        {/* ===== Right: capability cards ===== */}
        <motion.ul
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          aria-label="Focus areas"
          className="flex flex-col gap-4"
        >
          {highlights.map((item, index) => (
            <motion.li
              key={item.number}
              variants={fadeUp(0, 22)}
              whileHover={hoverLift}
              className="glass-card group relative overflow-hidden rounded-2xl p-5 sm:p-6"
            >
              {/* Ghost numeral */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-6xl font-bold text-text/[0.045] transition-colors duration-500 group-hover:text-accent/10 sm:text-7xl"
              >
                {item.number}
              </span>

              <div className="relative flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-accent transition-transform duration-300 group-hover:scale-105"
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1.5 font-display text-lg font-bold text-text transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              </div>

              {/* Hover accent line */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent/40 transition-[width] duration-500 ease-out group-hover:w-full"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
};

export default About;

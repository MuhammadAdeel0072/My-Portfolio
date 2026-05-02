import Section from './Section';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack MERN Developer",
      role: "Independent Developer",
      description: "Developed an online food web application (DineXis) from scratch. Implemented complex features like real-time tracking, product variations, and mood-based recommendations using React, Node.js, Express, and MongoDB."
    },
    {
      title: "Java Desktop Applications Developer",
      role: "Independent Developer",
      description: "Built multiple robust Java desktop applications including 'CartSy' (Online Shopping System) and 'TileDesk' (Factory Management System), focusing on object-oriented programming, file handling, and intuitive UI."
    },
    {
      title: "Self-Learned Web & Software Development",
      role: "Continuous Learner",
      description: "Dedicated to continuous learning and self-improvement in software engineering. Mastered core concepts in front-end and back-end development, database management, and currently exploring Android App Development."
    }
  ];

  return (
    <Section id="experience" title="Experience" className="bg-white dark:bg-dark-200">
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/30 dark:border-primary/20 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <span className="absolute -left-[41px] md:-left-[57px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary ring-4 ring-white dark:ring-dark-200">
                <FiBriefcase className="w-4 h-4" />
              </span>
              <div className="bg-slate-50 dark:bg-dark-100 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-dark-100 hover:shadow-md transition-shadow">
                <h3 className="flex items-center mb-1 text-xl font-bold text-slate-800 dark:text-slate-200">
                  {exp.title}
                </h3>
                <span className="block mb-3 text-sm font-medium text-primary">
                  {exp.role}
                </span>
                <p className="mb-4 text-base font-normal text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

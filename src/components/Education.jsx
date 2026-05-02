import Section from './Section';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: "FSc (Pre-Engineering)",
      institution: "Kallar Kahar Science College",
      score: "82%",
      year: "Completed"
    },
    {
      degree: "Matriculation",
      institution: "Kallar Kahar Science College",
      score: "88.36%",
      year: "Completed"
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-6 sm:p-8 bg-background-secondary border border-border rounded-xl sm:rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <FiBookOpen className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-6 relative z-10" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-2 relative z-10">
                {edu.degree}
              </h3>
              
              <p className="text-base sm:text-lg text-text-secondary mb-4 relative z-10 font-medium">
                {edu.institution}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-6 border-t border-border relative z-10 gap-3 sm:gap-0">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  Score: {edu.score}
                </span>
                <span className="text-text-secondary text-xs sm:text-sm font-medium">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;

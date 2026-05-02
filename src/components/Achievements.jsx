import Section from './Section';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiGithub } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      icon: <FiAward className="w-8 h-8 text-yellow-500" />,
      title: "Cisco Certificates",
      items: ["C++ Essentials", "C++ Advanced", "Entrepreneurship"]
    },
    {
      icon: <FiStar className="w-8 h-8 text-primary" />,
      title: "Competitions",
      items: ["Participated in Speed Programming Competition at NUST EME College"]
    },
    {
      icon: <FiGithub className="w-8 h-8 text-slate-800 dark:text-white" />,
      title: "Open Source",
      items: ["Active GitHub collaboration and version control experience"]
    }
  ];

  return (
    <Section id="achievements" title="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-background-secondary border border-border p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm text-center hover:shadow-lg transition-shadow"
          >
            <div className="mx-auto w-14 sm:w-16 h-14 sm:h-16 bg-background border border-border rounded-full flex items-center justify-center mb-4 sm:mb-6">
              {achievement.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-text mb-3 sm:mb-4">
              {achievement.title}
            </h3>
            <ul className="text-text-secondary space-y-2">
              {achievement.items.map((item, i) => (
                <li key={i} className="text-xs sm:text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;

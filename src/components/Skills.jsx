import Section from './Section';
import { motion } from 'framer-motion';
import {
  SiCplusplus, SiJavascript,
  SiReact, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss,
  SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { FiMonitor, FiCode, FiLayout, FiTool } from 'react-icons/fi';

const skillIcons = {
  "C++": <SiCplusplus className="text-[#00599C] text-2xl" />,
  "Java": <span className="text-2xl font-bold text-[#007396]">J</span>,
  "JavaScript": <SiJavascript className="text-[#F7DF1E] text-2xl" />,
  "React.js": <SiReact className="text-[#61DAFB] text-2xl" />,
  "Next.js": <SiNextdotjs className="text-text text-2xl" />,
  "Express.js": <SiExpress className="text-text text-2xl" />,
  "MongoDB": <SiMongodb className="text-[#47A248] text-2xl" />,
  "MySQL": <SiMysql className="text-[#4479A1] text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4] text-2xl" />,
  "VS Code": <FiMonitor className="text-[#007ACC] text-2xl" />,
  "Git": <SiGit className="text-[#F05032] text-2xl" />,
  "GitHub": <SiGithub className="text-text text-2xl" />,
  "Figma": <SiFigma className="text-[#F24E1E] text-2xl" />,
  "HCI": <FiMonitor className="text-accent text-2xl" />,
};

const categoryIcons = {
  "Programming Languages": <FiCode className="w-5 h-5" />,
  "Web Development": <FiLayout className="w-5 h-5" />,
  "Tools & Design": <FiTool className="w-5 h-5" />,
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Next.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"]
    },
    {
      title: "Tools & Design",
      skills: ["VS Code", "Git", "GitHub", "Figma", "HCI"]
    }
  ];

  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-accent">
                  {categoryIcons[category.title]}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-text">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill, sIndex) => (
                  <motion.div
                    key={sIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: sIndex * 0.05 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group relative flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-background/50 border border-border hover:border-accent/30 hover:bg-background/80 transition-all duration-300 cursor-default"
                  >
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-background-secondary border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-accent/30 transition-all">
                        {skillIcons[skill]}
                      </div>
                    </div>

                    {/* Name */}
                    <span className="text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text transition-colors text-center leading-tight">
                      {skill}
                    </span>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;

import Section from './Section';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiJavascript, 
  SiReact, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss,
  SiGit, SiGithub, SiFigma 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FiMonitor } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: 85 },
        { name: "Java", icon: <FaJava className="text-[#007396]" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 88 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs className="text-text" />, level: 75 },
        { name: "Express.js", icon: <SiExpress className="text-text" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 82 },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: 78 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" />, level: 95 },
        { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: 85 },
        { name: "GitHub", icon: <SiGithub className="text-text" />, level: 90 },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, level: 70 },
        { name: "HCI", icon: <FiMonitor className="text-accent" />, level: 85 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-background-secondary border border-border rounded-xl p-6 sm:p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg sm:text-xl font-bold text-text mb-6 sm:mb-8 border-b border-border pb-3 sm:pb-4">
              {category.title}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:gap-6 flex-grow"
            >
              {category.skills.map((skill, sIndex) => (
                <motion.div 
                  key={sIndex} 
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl bg-background border border-border flex items-center justify-center text-lg sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-text-secondary group-hover:text-text transition-colors text-sm sm:text-base">{skill.name}</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-background rounded-full overflow-hidden border border-border">
                    <motion.div 
                      className="h-full bg-accent rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (sIndex * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

import Section from './Section';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-5 h-5" />,
      title: 'MERN Stack',
      desc: 'Building responsive web apps.'
    },
    {
      icon: <FiTerminal className="w-5 h-5" />,
      title: 'Java Desktop',
      desc: 'Robust system development.'
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      title: 'Learning',
      desc: 'Android App Development.'
    }
  ];

  return (
    <Section id="about" title="About Me" className="relative">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-12">
        
        {/* Left Column: Image/Avatar Placeholder */}
        <div className="w-full lg:w-2/5 flex justify-center px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-3xl glass-card p-3 overflow-hidden">
              <img 
                src={`https://picsum.photos/300/400?random=${Math.floor(Math.random() * 1000)}`}
                alt="About Me"
                className="w-full h-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 rounded-2xl"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full filter blur-[20px] opacity-40 animate-pulse"></div>
          </motion.div>
        </div>
        
        {/* Right Column: Text content */}
        <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4">
              I am a <span className="text-accent">Software Engineer</span> focused on building impactful digital products.
            </h3>
            
            <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              With a strong foundation in both web and desktop application development, I bridge the gap between design and engineering. My passion lies in architecting systems that are not only scalable and efficient under the hood, but also incredibly intuitive and engaging for the end user.
            </p>
            
            <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Currently, I am expanding my horizons into Android App Development to deliver seamless cross-platform experiences. My ultimate career goal is to build my own software products that solve genuine problems at a global scale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-background-secondary border border-border p-4 flex flex-col justify-between group hover:border-accent/50 transition-colors rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-text font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </Section>
  );
};

export default About;

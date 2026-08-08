import Section from './Section';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'MERN Stack',
      desc: 'Building responsive, full-featured web applications with modern React patterns and scalable backends.',
      number: '01',
    },
    {
      icon: <FiTerminal className="w-6 h-6" />,
      title: 'Java Desktop',
      desc: 'Developing robust desktop systems with clean OOP architecture and efficient file handling.',
      number: '02',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Continuous Learning',
      desc: 'Currently expanding into Android App Development to deliver seamless cross-platform experiences.',
      number: '03',
    },
  ];

  return (
    <Section id="about" title="About">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Statement */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text leading-tight mb-8"
              >
                I am a Software Engineer focused on building{' '}
                <span className="text-gradient">impactful digital products</span>.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  With a strong foundation in both web and desktop application development, I bridge the gap between design and engineering. My passion lies in architecting systems that are not only scalable and efficient under the hood, but also incredibly intuitive and engaging for the end user.
                </p>

                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  Currently expanding my horizons into Android App Development to deliver seamless cross-platform experiences. My ultimate goal is to build software products that solve genuine problems at a global scale.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Capability Cards */}
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-6 group hover:border-accent/30 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-5xl font-display font-bold text-text/5 group-hover:text-accent/10 transition-colors">
                        {item.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-display font-bold text-text group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

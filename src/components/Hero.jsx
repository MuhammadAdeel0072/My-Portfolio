import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import PortfolioImage from '../assets/Portfolio.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Column: Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 sm:mt-8 lg:mt-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-background-secondary rounded-2xl border border-border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden relative"
              >
                <img 
                  src={PortfolioImage} 
                  alt="Muhammad Adeel Portfolio" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h2 className="text-accent font-semibold tracking-wide uppercase text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                Full Stack MERN & Java Developer
              </h2>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-text leading-tight tracking-tight">
                Muhammad Adeel
              </h1>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-text-secondary mb-4 sm:mb-6">
                I build modern, scalable, and user-focused applications.
              </h3>
              
              <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-2 sm:px-0">
                Transforming complex problems into elegant, highly usable software products. Passionate about clean code, robust architecture, and premium user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover active:scale-95 transition-all shadow-md hover:shadow-lg cursor-pointer w-full sm:w-auto text-center text-sm sm:text-base"
                >
                  View Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-background-secondary border border-border text-text font-semibold hover:border-accent hover:text-accent active:scale-95 transition-all shadow-sm cursor-pointer w-full sm:w-auto text-center text-sm sm:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

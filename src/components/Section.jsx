import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-10 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold inline-block relative text-text">
              {title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></div>
            </h2>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;

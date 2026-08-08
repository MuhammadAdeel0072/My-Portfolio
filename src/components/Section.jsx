import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`relative py-20 sm:py-28 lg:py-32 ${className}`}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/20 to-background pointer-events-none" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14 sm:mb-16 lg:mb-20 text-center"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="text-xs font-mono text-accent tracking-[0.25em] uppercase">
                Portfolio Section
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text">
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="mt-5 text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;

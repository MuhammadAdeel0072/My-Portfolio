import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => onComplete?.(), 800);
      }, 400);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Subtle background animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative">
                <div className="text-6xl sm:text-8xl font-display font-bold text-gradient">
                  MA
                </div>
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -inset-8 border border-accent/20 rounded-full"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h1 className="text-xl sm:text-2xl font-display font-semibold text-text tracking-wide mb-2">
                MUHAMMAD ADEEL
              </h1>
              <p className="text-sm text-text-muted font-mono tracking-widest">
                FULL STACK DEVELOPER
              </p>
            </motion.div>

            {/* Progress counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative w-48 h-1 bg-background-tertiary rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <div className="flex items-baseline gap-1">
                <motion.span 
                  className="text-3xl font-display font-bold text-text tabular-nums"
                  key={progress}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {String(progress).padStart(3, '0')}
                </motion.span>
                <span className="text-text-muted text-sm font-mono">%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <p className="text-xs text-text-muted font-mono tracking-widest uppercase">
                Loading Experience
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

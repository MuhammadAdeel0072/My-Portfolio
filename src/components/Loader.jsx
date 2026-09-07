'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

/**
 * Loading experience.
 * - Fast: resolves in roughly a second so it never feels like a barrier.
 * - Reduced motion: skips the counting theatre entirely, brief static card, quick fade.
 * - Signals completion once so the app can hand over to the hero entrance.
 */
const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const reduceMotion = useReducedMotion();
  const completedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      // Respect the user: no counting theatre — a brief static card, then hand over
      let t2;
      const t = setTimeout(() => {
        setIsComplete(true);
        t2 = setTimeout(() => onComplete?.(), 450);
      }, 250);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Larger steps → ~0.9s total, still feels alive
        return Math.min(100, prev + Math.floor(Math.random() * 11) + 9);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [reduceMotion, onComplete]);

  useEffect(() => {
    if (progress >= 100 && !completedRef.current) {
      completedRef.current = true;
      const t = setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => onComplete?.(), reduceMotion ? 450 : 650);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete, reduceMotion]);

  // Derived: reduced-motion users see a static 100% instead of a running counter
  const displayProgress = reduceMotion ? 100 : progress;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: EASE } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          role="status"
          aria-label="Loading portfolio"
        >
          {/* Ambient glow */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={reduceMotion ? undefined : { scale: [1, 1.35, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-[110px]"
              style={{ background: 'var(--glow)' }}
            />
            <div className="absolute inset-0 bg-noise opacity-[0.03]" />
          </div>

          {/* Monogram */}
          <motion.div
            initial={reduceMotion ? false : { scale: 0.86, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative z-10 mb-7"
          >
            <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
              <motion.span
                aria-hidden="true"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-[1.4rem] border border-accent/25"
              />
              <span
                aria-hidden="true"
                className="absolute inset-2 rounded-[1.1rem] border border-border/70"
              />
              <span className="font-display text-4xl font-bold text-gradient sm:text-5xl">MA</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
            className="relative z-10 mb-10 text-center"
          >
            <h1 className="font-display text-xl font-semibold tracking-wide text-text sm:text-2xl">
              MUHAMMAD ADEEL
            </h1>
            <p className="mt-2 font-mono text-xs tracking-[0.3em] text-text-muted sm:text-sm">
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          {/* Progress */}
          <div className="relative z-10 flex w-52 flex-col items-center gap-4 sm:w-60">
            <div
              className="h-[3px] w-full overflow-hidden rounded-full bg-background-tertiary"
              role="progressbar"
              aria-valuenow={Math.round(displayProgress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-hover to-accent transition-[width] duration-150 ease-out"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
            <p className="font-mono text-sm tabular-nums text-text-secondary">
              {String(Math.round(displayProgress)).padStart(3, '0')}
              <span className="ml-1 text-text-muted">%</span>
            </p>
          </div>

          {/* Bottom status */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-text-muted">
              <motion.span
                aria-hidden="true"
                animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Loading Experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

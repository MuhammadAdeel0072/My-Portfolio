/**
 * Shared motion vocabulary.
 * One timing/easing system so every section feels like the same product.
 * All variants are transform/opacity only (GPU friendly) and are
 * automatically neutralized for reduced-motion users via <MotionConfig reducedMotion="user">.
 */

// Signature ease — fast start, soft landing
export const EASE = [0.22, 1, 0.36, 1];

// Viewport config — reveal once, slightly before fully visible
export const VIEWPORT = { once: true, margin: '-72px' };

// Staggered container for lists/grids
export const staggerContainer = (stagger = 0.08, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Standard item reveal
export const fadeUp = (distance = 24) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
});

// Side reveal for columns / rails
export const fadeFrom = (direction = 'left', distance = 28) => ({
  hidden: {
    opacity: 0,
    [direction === 'left' ? 'x' : direction === 'right' ? 'x' : 'y']:
      direction === 'left' ? -distance : distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
});

// Scale reveal for cards
export const popIn = {
  hidden: { opacity: 0, scale: 0.94, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// Micro hover/tap — consistent interactive feedback
export const hoverLift = { y: -4, transition: { duration: 0.25, ease: EASE } };
export const tapPress = { scale: 0.97 };

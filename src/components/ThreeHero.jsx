'use client';

/**
 * Hero background layer.
 * Recreates the ambient depth the original three.js scene provided —
 * without a 3D library: layered radial glows + faint blueprint grid +
 * film grain + a very slow drift. Purely decorative, GPU-cheap,
 * pointer-transparent, and fully static for reduced-motion users.
 */
const ThreeHero = () => {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Faint blueprint grid, masked toward edges */}
      <div
        className="absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black_35%,transparent_100%)]"
      />

      {/* Key glow — teal, upper right */}
      <div
        className="absolute -top-32 right-[8%] h-[34rem] w-[34rem] rounded-full opacity-60 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 65%)' }}
      />

      {/* Counter glow — deep neutral, lower left */}
      <div
        className="absolute -bottom-40 left-[4%] h-[30rem] w-[30rem] rounded-full opacity-45 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--accent-secondary) 12%, transparent) 0%, transparent 65%)',
        }}
      />

      {/* Slow drifting aurora (disabled for reduced motion via CSS) */}
      <div
        className="absolute top-1/3 left-1/2 h-[26rem] w-[42rem] max-w-none -translate-x-1/2 rounded-full opacity-25 blur-[140px] animate-float-slow"
        style={{
          background:
            'radial-gradient(ellipse, color-mix(in oklab, var(--accent) 14%, transparent) 0%, transparent 70%)',
        }}
      />

      {/* Film grain for texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.035]" />

      {/* Vignette keeps edges quiet and the content focal */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_125%)]" />
    </div>
  );
};

export default ThreeHero;

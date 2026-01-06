import React from 'react';

export const HyperspeedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space base - darker for contrast */}
      <div className="absolute inset-0 bg-[hsl(220,60%,4%)]" />
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(220,50%,12%)] via-[hsl(220,60%,6%)] to-black" />
      
      {/* Hyperspeed tunnel effect - more rings for density */}
      <div className="hyperspeed-tunnel">
        <div className="tunnel-ring tunnel-ring-1" />
        <div className="tunnel-ring tunnel-ring-2" />
        <div className="tunnel-ring tunnel-ring-3" />
        <div className="tunnel-ring tunnel-ring-4" />
        <div className="tunnel-ring tunnel-ring-5" />
        <div className="tunnel-ring tunnel-ring-6" />
        <div className="tunnel-ring tunnel-ring-7" />
        <div className="tunnel-ring tunnel-ring-8" />
      </div>

      {/* Grid scan overlay */}
      <div className="grid-scan-overlay">
        <div className="scan-line" />
        <div className="grid-horizontal" />
        <div className="grid-vertical" />
      </div>

      {/* Speed particles - more for denser effect */}
      <div className="speed-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="speed-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Central glow - enhanced for focal point */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyber-cyan/15 via-cyber-magenta/8 to-transparent blur-[100px] animate-pulse-slow" />
      </div>
      
      {/* Secondary outer glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-white/5 via-cyber-cyan/5 to-transparent blur-2xl" />
      </div>

      {/* Vignette - stronger edges */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black" />
    </div>
  );
};

export default HyperspeedBackground;

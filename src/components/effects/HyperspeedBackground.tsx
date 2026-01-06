import React from 'react';

export const HyperspeedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space base - NO BLUR, sharp and crisp */}
      <div className="absolute inset-0 bg-[hsl(220,60%,3%)]" />
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(220,50%,10%)] via-[hsl(220,60%,4%)] to-black" />
      
      {/* Hyperspeed tunnel effect */}
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

      {/* Grid scan overlay - SHARP, no blur */}
      <div className="grid-scan-overlay">
        <div className="scan-line" />
        <div className="grid-horizontal" />
        <div className="grid-vertical" />
      </div>

      {/* Speed particles */}
      <div className="speed-particles">
        {[...Array(50)].map((_, i) => (
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

      {/* Central glow - subtle, NO heavy blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-30" 
          style={{
            background: 'radial-gradient(circle, hsl(185 100% 50% / 0.15) 0%, hsl(300 100% 60% / 0.08) 40%, transparent 70%)'
          }}
        />
      </div>

      {/* Subtle dark overlay for text readability - NOT blur, just gradient */}
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)'
        }}
      />
    </div>
  );
};

export default HyperspeedBackground;

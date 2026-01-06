import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const SpeedLine = ({ delay, top }: { delay: number; top: number }) => (
  <div
    className="speed-line"
    style={{
      top: `${top}%`,
      left: '-100%',
      width: `${Math.random() * 200 + 100}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${Math.random() * 1 + 1.5}s`,
    }}
  />
);

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="cyber-grid">
        <div className="grid-lines" />
        <div className="grid-lines-red" />
        <div className="tunnel-glow" />
        
        {/* Speed lines */}
        <div className="speed-lines">
          {[...Array(8)].map((_, i) => (
            <SpeedLine key={i} delay={i * 0.3} top={Math.random() * 100} />
          ))}
        </div>
        
        <div className="vignette" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-cyan/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className={`text-sm md:text-base tracking-[0.3em] text-white/70 uppercase mb-6 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Annual Techno-Management Symposium
        </p>

        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 ${
            mounted ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">INSPIRIA</span>{' '}
          <span className="text-shimmer">5.0</span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/60 italic mb-10 font-light ${
            mounted ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
          }`}
        >
          Innovate. Integrate. Inspire.
        </p>

        <div
          className={`${
            mounted ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
          }`}
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-10 py-6 text-base rounded-md transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10"
          >
            GET TICKETS
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

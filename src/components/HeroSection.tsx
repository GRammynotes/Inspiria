import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { GradientText, ClickSpark, HyperspeedBackground } from '@/components/effects';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Merged Hyperspeed + GridScan Background */}
      <HyperspeedBackground />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-cyan/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content - Above background with high z-index */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p
          className={`text-xs md:text-sm tracking-[0.4em] text-white/60 uppercase mb-6 font-light ${
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
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">INSPIRIA</span>{' '}
          <GradientText
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold"
            colors={['#00f5ff', '#bf00ff', '#ffcc00', '#00f5ff']}
            animationSpeed={4}
          >
            5.0
          </GradientText>
        </h1>

        <p
          className={`text-lg md:text-2xl text-white/50 italic mb-12 font-light tracking-wide ${
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
          <ClickSpark
            sparkColor="#ffcc00"
            sparkSize={12}
            sparkRadius={50}
            sparkCount={10}
            duration={600}
          >
            <Button
              size="lg"
              className="bg-white text-navy-deep hover:bg-white/90 font-bold px-12 py-7 text-base rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] uppercase tracking-wider"
            >
              Get Tickets
            </Button>
          </ClickSpark>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

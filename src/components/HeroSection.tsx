import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { HyperspeedBackground, LightRays, Hyperspeed, SparklesText, ShinyText } from '@/components/effects';
import { CountdownTimer } from '@/components/CountdownTimer';

// Event date - February 15, 2025
const EVENT_DATE = new Date('2025-02-15T09:00:00');

const hyperspeedOptions = {
  onSpeedUp: () => { },
  onSlowDown: () => { },
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xFFFFFF,
    brokenLines: 0xFFFFFF,
    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
    sticks: 0x03B3C3,
  }
};

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x: x * 10, y: y * 10 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sharp Hyperspeed + GridScan Background - NO BLUR */}
      {/* Sharp Hyperspeed + GridScan Background - NO BLUR */}
      {/* HyperspeedBackground removed for performance optimization, using Hyperspeed component instead */}

      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Hyperspeed Effect - Centered Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', opacity: 0.6 }}>
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Floating particles - slower on hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hero-particles">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full particle-float ${Math.random() > 0.5 ? 'bg-cyber-cyan/50' : 'bg-gold/40'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Hero Content - 3D Floating Effect */}
      <div
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Small tagline - flat, gold, not 3D */}
        <p
          className={`text-xs md:text-sm tracking-[0.5em] uppercase mb-2 font-medium ${mounted ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          style={{ color: 'hsl(45, 90%, 55%)' }}
        >
          Annual Techno-Management Symposium
        </p>

        {/* 3D Floating Title Container - Single Line */}
        <h1
          className={`hero-title-3d flex items-baseline justify-center gap-2 md:gap-4 font-display text-[clamp(2.5rem,10vw,8rem)] font-bold whitespace-nowrap ${mounted ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
          style={{
            animation: mounted ? 'hero-float 6s ease-in-out infinite' : 'none',
            color: 'white',
            textShadow: `
                0 0 20px rgba(255,255,255,0.2),
                0 10px 20px rgba(0,0,0,0.5)
              `,
          }}
        >
          {/* INSPIRIA -银色 */}
          <span className="hero-text-3d" style={{ transform: 'translateZ(40px)' }}>
            <SparklesText
              colors={['#99CCFF', '#ADD8E6', '#E0FFFF']}
              style={{
                background: 'linear-gradient(135deg, #C0C0C0 0%, #FFFFFF 30%, #C0C0C0 50%, #E0E0E0 70%, #C0C0C0 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gold-shimmer 3s ease-in-out infinite',
                display: 'inline-block'
              }}
            >
              INSPIRIA
            </SparklesText>
          </span>

          {/* 5.0 - 金色 */}
          <span className="hero-text-5" style={{ transform: 'translateZ(40px)' }}>
            <SparklesText
              colors={['#FFC700', '#FFD700', '#FFA500']}
              style={{
                background: 'linear-gradient(135deg, #ffcc00 0%, #fff8dc 30%, #ffcc00 50%, #ffd700 70%, #ffcc00 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(255,204,0,0.4))',
                animation: 'gold-shimmer 3s ease-in-out infinite',
                display: 'inline-block'
              }}
            >
              5.0
            </SparklesText>
          </span>
        </h1>

        {/* Subtitle - calm, elegant, not animated */}
        <p
          className={`text-lg md:text-xl text-white/60 italic mt-8 mb-12 font-light tracking-widest ${mounted ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
        >
          Innovate. Integrate. Inspire.
        </p>

        {/* Countdown Timer */}
        <div className="mb-10">
          <CountdownTimer targetDate={EVENT_DATE} />
        </div>

        {/* Button - solid, bold, premium, no glass */}
        <div
          className={`${mounted ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
            }`}
        >
          <Button
            size="lg"
            className="bg-white text-[hsl(220,60%,8%)] hover:bg-white/95 font-bold px-12 py-7 text-base rounded-full transition-all hover:scale-105 uppercase tracking-wider shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
          >
            Register
          </Button>
        </div>
      </div>



      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

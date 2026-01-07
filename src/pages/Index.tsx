import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EventSchedule } from '@/components/EventSchedule';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { Galaxy } from '@/components/effects';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EventSchedule />

      {/* Wrapper for Testimonials + Footer with continuous Galaxy background */}
      <div className="relative overflow-hidden">
        {/* Single continuous Galaxy background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Galaxy
            density={1.7}
            glowIntensity={0.5}
            saturation={0.7}
            hueShift={260}
            twinkleIntensity={0.5}
            rotationSpeed={0.2}
            repulsionStrength={1.5}
            starSpeed={1.2}
            speed={1.6}
            transparent={false}
          />
        </div>

        {/* Top transition from EventSchedule */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

        {/* Content sections */}
        <div className="relative z-10">
          <Testimonials />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;

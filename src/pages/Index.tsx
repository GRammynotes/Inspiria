import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EventSchedule } from '@/components/EventSchedule';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { LightRays } from '@/components/effects';

const Index = () => {
  return (
    <main className="min-h-screen relative bg-background">
      {/* Global subtle background rays for continuity */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.5}
          fadeDistance={1.2}
          saturation={0.5}
          followMouse={false}
          noiseAmount={0.05}
          distortion={0.1}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <EventSchedule />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Index;

import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { EventSchedule } from '@/components/EventSchedule';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EventSchedule />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;

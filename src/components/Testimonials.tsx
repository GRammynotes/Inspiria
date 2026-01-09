import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { BlurText, PixelCard } from '@/components/effects';

const testimonials = [
  {
    quote: "Inspiria didn't just motivate me; it gave me a roadmap. The gap between academics and corporate expectations is huge, and this event finally helped me to understand how to bridge it. The speakers didn’t sugarcoat things—they gave us the real insights we needed.",
    name: "Engineering Student",
    branch: "Final Year"
  },
  {
    quote: "Initially, I signed up mostly for the certificate, but I ended up staying for the experience. The energy was contagious, and the networking session wasn't awkward like it usually is. I actually met mentors who are willing to guide me. Definitely coming back next year.",
    name: "Tech Enthusiast",
    branch: "Third Year"
  },
  {
    quote: "The energy at Inspiria 4.0 was electric! It didn't feel like a college event; it felt like a professional tech conference. The organization, the speakers, the setup—everything was top tier. Already waiting for 5.0.",
    name: "Event Participant",
    branch: "PCE Alum"
  },
];

const TestimonialCard = ({ quote, name, branch }: { quote: string; name: string; branch: string }) => (
  <div className="min-w-[260px] md:min-w-[380px] mx-2 md:mx-3 h-[260px] md:h-[340px]">
    <PixelCard variant="default" gap={12} className="group w-full h-full rounded-2xl overflow-hidden glass-dark border-0">
      <div className="absolute inset-0 flex flex-col p-5 md:p-8 justify-between z-10 hover:text-white transition-colors duration-300">
        <div className="flex flex-col h-full relative">
          <Quote className="w-3.5 h-3.5 md:w-5 md:h-5 text-accent/30 group-hover:text-accent mb-2 transition-colors duration-300 rotate-180" />
          <p className="text-[#FFD700] group-hover:text-white leading-tight md:leading-relaxed text-[10px] md:text-sm transition-colors duration-300 font-medium px-1 md:px-2">
            {quote}
          </p>
          <div className="flex justify-end mt-auto">
            <Quote className="w-3.5 h-3.5 md:w-5 md:h-5 text-accent/30 group-hover:text-accent transition-colors duration-300" />
          </div>
        </div>
        <div className="border-t border-white/10 pt-2 md:pt-3 mt-2 md:mt-4">
          <h4 className="font-semibold text-foreground group-hover:text-primary-foreground uppercase tracking-wide text-[9px] md:text-xs transition-colors duration-300">{name}</h4>
          <p className="text-accent font-medium text-[8px] md:text-[11px]">{branch}</p>
        </div>
      </div>
    </PixelCard>
  </div>
);

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const handleScroll = () => {
      // Resume animation when scrolling on mobile
      if (isPaused) {
        setIsPaused(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative pt-10 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 mb-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="gold-shimmer-text">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            <BlurText delay={200}>Student Testimonials</BlurText>
          </h3>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background/80 to-transparent z-20 pointer-events-none" />

        {/* Scrolling content */}
        <div
          className={`flex animate-marquee transform-gpu md:hover:[animation-play-state:paused] ${isPaused ? '[animation-play-state:paused]' : ''}`}
          onClick={() => setIsPaused(true)}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

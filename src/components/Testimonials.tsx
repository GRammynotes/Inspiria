import { Quote } from 'lucide-react';
import { BlurText, PixelCard, GradientText } from '@/components/effects';

const testimonials = [
  {
    quote: "The event opened up new perspectives in technology. The speakers were exceptional.",
    name: "Akshay Savad",
    branch: "BE/IT"
  },
  {
    quote: "Great networking opportunities and insightful sessions. Can't wait for next year!",
    name: "Suraj Choudhary",
    branch: "BE/IT"
  },
  {
    quote: "The hands-on workshops were the highlight. Learned so much in just two days!",
    name: "Harsh Patil",
    branch: "BE/IT"
  },
  {
    quote: "Inspiria truly bridges the gap between academia and industry. Amazing experience!",
    name: "Sneha Mehta",
    branch: "BE/CS"
  },
  {
    quote: "The technical sessions were incredibly informative. Highly recommended for all students.",
    name: "Rahul Sharma",
    branch: "BE/EXTC"
  },
  {
    quote: "Met industry experts who shared invaluable insights about career growth.",
    name: "Priya Nair",
    branch: "BE/IT"
  },
];

const TestimonialCard = ({ quote, name, branch }: { quote: string; name: string; branch: string }) => (
  <div className="min-w-[300px] md:min-w-[350px] mx-3 h-[300px]">
    <PixelCard variant="default" className="group w-full h-full rounded-2xl overflow-hidden glass-dark border-0">
      <div className="absolute inset-0 flex flex-col p-6 md:p-8 justify-between z-10 hover:text-white transition-colors duration-300">
        <div>
          <Quote className="w-8 h-8 text-accent/30 group-hover:text-accent mb-4 transition-colors duration-300" />
          <p className="text-muted-foreground group-hover:text-primary-foreground leading-relaxed text-sm md:text-base transition-colors duration-300">
            {quote}
          </p>
          <Quote className="w-8 h-8 text-accent/30 group-hover:text-accent ml-auto rotate-180 transition-colors duration-300" />
        </div>
        <div className="border-t border-white/10 pt-4 mt-auto">
          <h4 className="font-semibold text-foreground group-hover:text-primary-foreground uppercase tracking-wide text-sm transition-colors duration-300">{name}</h4>
          <p className="text-accent font-medium text-sm">{branch}</p>
        </div>
      </div>
    </PixelCard>
  </div>
);

export const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Top Transition Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="container mx-auto px-4 mb-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <BlurText delay={100}>
              <GradientText colors={['#FFD700', '#FFA500', '#FFED4E', '#FFD700']} direction="135deg">
                Testimonials
              </GradientText>
            </BlurText>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            <BlurText delay={200}>Student Testimonials</BlurText>
          </h3>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

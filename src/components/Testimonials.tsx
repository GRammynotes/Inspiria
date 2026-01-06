import { Quote } from 'lucide-react';
import { BlurText } from '@/components/effects';

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
  <div className="glass-dark rounded-2xl p-6 md:p-8 shadow-lg min-w-[300px] md:min-w-[350px] mx-3 card-hover">
    <Quote className="w-8 h-8 text-accent/30 mb-4" />
    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
      {quote}
    </p>
    <Quote className="w-8 h-8 text-accent/30 ml-auto mb-4 rotate-180" />
    <div className="border-t pt-4">
      <h4 className="font-semibold text-foreground uppercase tracking-wide text-sm">{name}</h4>
      <p className="text-accent font-medium text-sm">{branch}</p>
    </div>
  </div>
);

export const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            <BlurText delay={100}>Testimonials</BlurText>
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

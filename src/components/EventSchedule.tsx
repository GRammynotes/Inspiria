import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Image as ImageIcon, User, Info } from 'lucide-react';
import { BlurText } from '@/components/effects';

const tabs = [
  { id: 'inspiria', label: 'INSPIRIA 4.0' },
  { id: 'day1', label: 'DAY 1' },
  { id: 'day2', label: 'DAY 2' },
  { id: 'gallery', label: 'IMAGE GALLERY' },
  { id: 'speaker', label: 'PREVIOUS SPEAKER' },
  { id: 'about', label: 'ABOUT TPC-PCE' },
];

const day1Events = [
  { time: '10:00 AM', title: 'Inauguration', description: 'Opening ceremony and welcome address' },
  { time: '11:00 AM', title: 'Keynote', description: 'Industry expert keynote session' },
  { time: '12:30 PM', title: 'Technical Session', description: 'Deep dive into latest technologies' },
  { time: '02:00 PM', title: 'Workshop', description: 'Hands-on technical workshop' },
];

const day2Events = [
  { time: '10:00 AM', title: 'Panel Discussion', description: 'Industry leaders panel' },
  { time: '11:30 AM', title: 'Competition Finals', description: 'Final round of tech competitions' },
  { time: '01:30 PM', title: 'Networking Session', description: 'Connect with peers and mentors' },
  { time: '03:00 PM', title: 'Valedictory', description: 'Closing ceremony and awards' },
];

const speakers = [
  { name: 'Dr. Rajesh Kumar', company: 'Tech Innovations Ltd', description: 'AI & ML Expert' },
  { name: 'Ms. Priya Sharma', company: 'Digital Solutions', description: 'Startup Mentor' },
  { name: 'Mr. Amit Patel', company: 'Future Tech Corp', description: 'Industry Leader' },
];

const testimonialImages = Array(8).fill(null);

export const EventSchedule = () => {
  const [activeTab, setActiveTab] = useState('inspiria');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inspiria':
        return (
          <Card className="bg-gradient-to-br from-secondary to-white border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Poster placeholder */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="w-48 h-64 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-xl flex flex-col items-center justify-center text-white p-4">
                      <span className="text-xs tracking-widest mb-2">✦ ✦ ✦</span>
                      <span className="font-display text-2xl font-bold">inspiria</span>
                      <span className="text-3xl font-display font-bold text-accent">2025</span>
                      <span className="text-xs mt-4 text-white/70">26th & 27th February 2025</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                    Welcome to Inspiria 4.0
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Inspiria is a testament to revolution and progress. It's a rendezvous of innovation and inspiration, 
                    where students gain valuable insights helping them develop the right mindset. Inspiria also aims to 
                    bridge the gap between academic learning and real-world application. It is an immersive event that 
                    seamlessly blends professional development and technical expertise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'day1':
      case 'day2':
        const events = activeTab === 'day1' ? day1Events : day2Events;
        return (
          <div className="grid gap-4">
            {events.map((event, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-2 text-primary font-semibold min-w-[120px]">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{event.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'gallery':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testimonialImages.map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-xl flex items-center justify-center card-hover cursor-pointer group overflow-hidden"
              >
                <div className="text-muted-foreground group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-10 h-10" />
                </div>
              </div>
            ))}
          </div>
        );

      case 'speaker':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">{speaker.name}</h4>
                  <p className="text-primary text-sm font-medium">{speaker.company}</p>
                  <p className="text-muted-foreground text-sm mt-2">{speaker.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'about':
        return (
          <Card className="bg-white border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[250px]">
                  <div className="w-32 h-32 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Info className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">About TPC-PCE</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Training and Placement Cell of PCE is dedicated to providing students with the best 
                    opportunities to launch their careers. We bridge the gap between academia and industry, 
                    preparing students for the professional world through skill development, internships, 
                    and placement drives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <section id="schedule" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            <BlurText delay={100}>Event Schedule</BlurText>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'tab-active'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

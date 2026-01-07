import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Image as ImageIcon, User, Info } from 'lucide-react';
import { BlurText, GridScan, TrueFocus, MagicBento, AnimatedList } from '@/components/effects';

const tabs = [
  { id: 'inspiria', label: 'INSPIRIA 4.0' },
  { id: 'day1', label: 'EVENT TIMELINE' },
  { id: 'gallery', label: 'IMAGE GALLERY' },
  { id: 'speaker', label: 'PREVIOUS SPEAKER' },
  { id: 'about', label: 'ABOUT TPC-PCE' },
];

const day1Events = [
  { time: '10:00 AM', title: 'Inauguration', description: 'Opening ceremony and welcome address' },
  { time: '11:00 AM', title: 'Keynote', description: 'Industry expert keynote session' },
  { time: '12:30 PM', title: 'Technical Session', description: 'Deep dive into latest technologies' },
  { time: '02:00 PM', title: 'Workshop', description: 'Hands-on technical workshop' },
  { time: '03:30 PM', title: 'Panel Discussion', description: 'Industry leaders share insights' },
  { time: '05:00 PM', title: 'Networking', description: 'Connect with peers and professionals' }
];



const speakers = [
  {
    name: 'Mr. Dinesh Kumar (Prof. Dineshkumar Gupta)',
    company: 'Renowned Educator / Visionary Teacher',
    eventTitle: 'From Classroom to Cubicle',
    description: 'An inspiring session bridging the gap between academics and the corporate world, focusing on problem-solving skills, career insights, and professional growth using innovative teaching methods and strong digital presence.',
    date: '25th February 2025',
    time: '3:00 PM – 5:00 PM',
    venue: 'Auditorium, Pillai College of Engineering, New Panvel',
    organizer: 'Training & Placement Cell (TPC-PCE)',
    image: '/images/dinesh-kumar.png'
  }
];

const testimonialImages = Array(8).fill(null);

export const EventSchedule = () => {
  const [activeTab, setActiveTab] = useState('inspiria');
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<any>(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inspiria':
        return (
          <Card className="glass-dark border-0 shadow-lg overflow-hidden">
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
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-gold mb-4">
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
        const eventItems = day1Events.map((event, index) => (
          <div key={index} className="flex items-start gap-4 p-2">
            <div className="flex items-center gap-2 text-primary font-semibold min-w-[120px]">
              <Clock className="w-4 h-4" />
              {event.time}
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-lg">{event.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
            </div>
          </div>
        ));

        return (
          <AnimatedList
            items={eventItems}
            enableArrowNavigation={false}
            showGradients={true}
            displayScrollbar={false}
            className="max-w-3xl mx-auto"
          />
        );

      case 'gallery':
        const bentoCards = [
          {
            title: 'Keynote Session',
            description: 'Prof. Dinesh Kumar sharing visionary insights on professional growth.',
            label: 'Vision',
            color: '#1a103d',
            image: '/images/gallery-1.jpg'
          },
          {
            title: 'Interactive Learning',
            description: 'Engaging discussions bridging the gap between classroom and corporate life.',
            label: 'Engage',
            color: '#2d1b4e',
            image: '/images/gallery-2.jpg'
          },
          {
            title: 'Audience Focus',
            description: 'Students absorbing transformative ideas for their future careers.',
            label: 'Inspire',
            color: '#1a103d',
            image: '/images/gallery-3.jpg'
          },
          {
            title: 'Expert Talk',
            description: 'In-depth session exploring modern industry requirements.',
            label: 'Growth',
            color: '#2d1b4e',
            image: '/images/gallery-4.jpg'
          },
          {
            title: 'Special Recognition',
            description: 'Honoring excellence and commitment to student development.',
            label: 'Honored',
            color: '#1a103d',
            image: '/images/gallery-5.jpg'
          },
          {
            title: 'Organizing Team',
            description: 'The dedicated TPC-PCE team behind the successful event.',
            label: 'Network',
            color: '#2d1b4e',
            image: '/images/gallery-1.jpg'
          }
        ];

        return (
          <div className="w-full relative py-4 group/carousel overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />

            <div className="flex animate-marquee-slow hover:[animation-play-state:paused] gap-8">
              <div className="flex shrink-0">
                <MagicBento
                  cardData={bentoCards}
                  spotlightRadius={610}
                  enableTilt={true}
                  enableMagnetism={true}
                  glowColor="255, 215, 0"
                  onCardClick={(card) => setSelectedGalleryImage(card)}
                />
              </div>
              <div className="flex shrink-0">
                <MagicBento
                  cardData={bentoCards}
                  spotlightRadius={610}
                  enableTilt={true}
                  enableMagnetism={true}
                  glowColor="255, 215, 0"
                  onCardClick={(card) => setSelectedGalleryImage(card)}
                />
              </div>
            </div>
          </div>
        );

      case 'speaker':


        if (selectedSpeaker) {
          return (
            <div className="animate-fade-in-up">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="mb-6 flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                ← Back to Speakers
              </button>

              <Card className="glass-dark border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 min-h-[400px]">
                      <img
                        src={selectedSpeaker.image}
                        alt={selectedSpeaker.name}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                      />
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-gold mb-2">
                        {selectedSpeaker.eventTitle}
                      </h3>
                      <p className="text-xl text-white/90 font-semibold mb-6">
                        {selectedSpeaker.name}
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {selectedSpeaker.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                          <span className="w-24 text-primary font-semibold">Date:</span>
                          <span>{selectedSpeaker.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                          <span className="w-24 text-primary font-semibold">Time:</span>
                          <span>{selectedSpeaker.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                          <span className="w-24 text-primary font-semibold">Venue:</span>
                          <span>{selectedSpeaker.venue}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                          <span className="w-24 text-primary font-semibold">Organized by:</span>
                          <span>{selectedSpeaker.organizer}</span>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <h4 className="text-lg font-semibold mb-4 text-accent">Event Gallery</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-video bg-white/5 rounded-md animate-pulse"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        }

        return (
          <div className="max-w-md mx-auto">
            {speakers.map((speaker, index) => (
              <Card key={index} className="card-hover glass-dark border-0 shadow-md text-center group overflow-hidden">
                <div className="relative h-64 bg-gradient-to-b from-primary/20 to-transparent">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>

                <CardContent className="p-6 relative -mt-12">
                  <h4 className="font-semibold text-xl text-foreground mb-1">{speaker.name}</h4>
                  <p className="text-accent text-sm font-medium mb-2">{speaker.eventTitle}</p>
                  <p className="text-muted-foreground text-xs mb-6">{speaker.company}</p>

                  <div className="grid grid-cols-2 gap-4 text-xs text-left mb-6 bg-white/5 p-4 rounded-lg">
                    <div>
                      <p className="text-primary font-semibold">Date</p>
                      <p className="text-foreground/80">Feb 2025</p>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={() => setSelectedSpeaker(speaker)}
                        className="text-accent hover:text-white transition-colors underline font-medium text-sm"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );


      case 'about':
        return (
          <Card className="glass-dark border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[250px] group">
                  <div className="w-32 h-32 bg-primary/20 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Info className="w-12 h-12 text-accent transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-gradient-gold mb-4">About TPC-PCE</h3>
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
    <section id="schedule" className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Top Transition Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Grid Scan Background */}
      <div className="absolute inset-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            <BlurText delay={100}>Event Schedule</BlurText>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          <TrueFocus
            items={tabs.map(tab => tab.label)}
            manualMode={true}
            blurAmount={2}
            borderColor="#FFD700"
            glowColor="rgba(255, 215, 0, 0.6)"
            animationDuration={0.6}
            defaultIndex={0}
            onIndexChange={(index) => setActiveTab(tabs[index].id)}
          />
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {renderTabContent()}
        </div>
      </div>

      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Image Gallery Popup Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white/10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedGalleryImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedGalleryImage.image}
              alt={selectedGalleryImage.title}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-display font-bold text-white mb-1">{selectedGalleryImage.title}</h3>
              <p className="text-white/70 text-sm">{selectedGalleryImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

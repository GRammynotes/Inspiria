import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ClickSpark } from '@/components/effects';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#statistics', label: 'Statistics' },
  { href: '#placements', label: 'Placements' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Premium Logo */}
        <a href="#home" className="group flex items-center gap-2">
          {/* Logo emblem - hexagon style */}
          <div 
            className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, hsl(270 70% 50%) 0%, hsl(45 90% 55%) 100%)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            <div 
              className="absolute inset-[2px] flex items-center justify-center"
              style={{
                background: 'hsl(220 60% 8%)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <span 
                className="font-display font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #ffffff, #ffcc00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                I
              </span>
            </div>
          </div>
          {/* Logo text */}
          <div className="flex flex-col -space-y-1">
            <span 
              className="font-display text-xl font-bold tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #ffcc00 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              INSPIRIA
            </span>
            <span 
              className="text-[8px] tracking-[0.3em] uppercase opacity-60"
              style={{ color: 'hsl(45, 90%, 55%)' }}
            >
              5.0
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                activeSection === link.href.slice(1)
                  ? 'text-gold bg-white/5'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
              <span className="nav-link-underline" />
            </a>
          ))}
          <ClickSpark
            sparkColor="#ffcc00"
            sparkSize={10}
            sparkRadius={35}
            sparkCount={8}
            duration={500}
          >
            <Button
              className="relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold px-6 py-2 rounded-full border border-white/10 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
            >
              <span className="relative z-10">REGISTER</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </Button>
          </ClickSpark>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-dark mt-2 mx-4 rounded-xl p-4 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ClickSpark
              sparkColor="#ffcc00"
              sparkSize={10}
              sparkRadius={35}
              sparkCount={8}
              duration={500}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-semibold w-full rounded-full mt-2"
              >
                REGISTER
              </Button>
            </ClickSpark>
          </div>
        </div>
      )}
    </nav>
  );
};

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-dark py-3 shadow-lg shadow-black/20'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Premium Logo */}
        <a href="#home" className="group flex items-center gap-2">
          {/* Logo emblem - hexagon style */}
          <div className="bg-white/60 py-0 px-16 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300 overflow-hidden">
            <img
              src="/images/inspiria-logo.png"
              alt="Inspiria Logo"
              className="h-16 w-auto object-contain transform scale-[3]"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${activeSection === link.href.slice(1)
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
          <div className="flex flex-col gap-4 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors py-2 w-full"
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
                className="bg-primary hover:bg-primary/90 text-white font-semibold w-full md:w-auto px-8 rounded-full mt-2"
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

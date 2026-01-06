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
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-white tracking-wider">
            inspiria
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                activeSection === link.href.slice(1)
                  ? 'text-gold'
                  : 'text-white/80'
              }`}
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
              variant="outline"
              className="border-primary bg-primary text-white hover:bg-primary/90 hover:text-white font-semibold px-6 rounded-full"
            >
              REGISTER
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
                variant="outline"
                className="border-primary bg-primary text-white hover:bg-primary/90 font-semibold w-full rounded-full mt-2"
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

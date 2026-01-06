import { Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-lg text-accent">TPC</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Training and Placement Cell of PCE - Bridging the gap between academia and industry.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Team</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Committee
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Faculty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>022-27456100</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>022-27482400</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <div>
                  <span className="text-accent">Email:</span>
                  <br />
                  <a href="mailto:studenttpc@mes.ac.in" className="text-white/70 hover:text-white transition-colors">
                    studenttpc@mes.ac.in
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © 2025 Inspiria 5.0. All rights reserved. | TPC-PCE
          </p>
        </div>
      </div>
    </footer>
  );
};

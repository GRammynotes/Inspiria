import React, { useState, useEffect } from "react";
// NavLink removed as it is no longer used
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

// Use the logo from public folder
const Logo = "/images/tpc-pce.png";

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <img src={Logo} alt="TPC PCE Logo" className="footer-logo" />
          </div>

          {/* Links Grid */}
          <div className="footer-grid">
            <div className="footer-box">
              <h3 className="footer-title">Links</h3>
              <ul className="footer-links">
                <li><a href="https://tpc.pce.ac.in/" target="_blank" rel="noopener noreferrer">Home</a></li>
                <li><a href="https://tpc.pce.ac.in/about" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://tpc.pce.ac.in/events" target="_blank" rel="noopener noreferrer">Events</a></li>
                <li><a href="https://tpc.pce.ac.in/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href="https://tpc.pce.ac.in/statistics" target="_blank" rel="noopener noreferrer">Statistics</a></li>
                <li><a href="https://tpc.pce.ac.in/placements" target="_blank" rel="noopener noreferrer">Placements</a></li>
              </ul>
            </div>

            <div className="footer-box">
              <h3 className="footer-title">Team</h3>
              <ul className="footer-links">
                <li><a href="https://tpc.pce.ac.in/team" target="_blank" rel="noopener noreferrer">Committee</a></li>
                <li><a href="https://tpc.pce.ac.in/team" target="_blank" rel="noopener noreferrer">Faculty</a></li>
              </ul>
            </div>

            <div className="footer-box">
              <h3 className="footer-title">Other services</h3>
              <ul className="footer-links">
                <li><a target="_blank" href="https://linktr.ee/TPCPCE" rel="noreferrer">LinkTree</a></li>
                <li><a target="_blank" href="https://www.pce.ac.in/" rel="noreferrer">PCE</a></li>
                <li><a target="_blank" href="https://www.instagram.com/tpc.pce/" rel="noreferrer">Social-Media</a></li>
              </ul>
            </div>

            <div className="footer-box">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-links contact-info">
                <li><a href="tel:022-27456100">022-27456100</a></li>
                <li><a href="tel:022-27482400">022-27482400</a></li>
                <li><a href="mailto:studenttpc@mes.ac.in">studenttpc@mes.ac.in</a></li>
              </ul>
              <div className="footer-socials">
                <a href="https://www.instagram.com/tpc.pce/" target="_blank" rel="noreferrer" className="social-icon instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com/tpc.pce" target="_blank" rel="noreferrer" className="social-icon facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com/company/tpc-pce" target="_blank" rel="noreferrer" className="social-icon linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                {/* Mobile Scroll Top Button (Inline) */}
                <button
                  className="social-icon mobile-scroll-top"
                  onClick={topFunction}
                  aria-label="Scroll to top"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
        onClick={topFunction}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
const logoImage = '/images/2135abd8723dc81edc9e85faf50aaf699dee149d.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Logo and Tagline */}
          <div>
            <button
              onClick={() => handleLinkClick("home")}
              className="mb-4 transition-transform hover:scale-105 block"
            >
              <img
                src={logoImage}
                alt="KTPOA Logo"
                className="h-[82px] w-auto cursor-pointer"
              />
            </button>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bridging Education and Employment for a Brighter
              Tomorrow
            </p>
          </div>

          {/* Right Side: Quick Links, Contact, and Social */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleLinkClick("home")}
                    className="text-gray-300 hover:text-[#C9A870] transition-colors text-sm"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("pillars")}
                    className="text-gray-300 hover:text-[#C9A870] transition-colors text-sm"
                  >
                    Pillars
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("members")}
                    className="text-gray-300 hover:text-[#C9A870] transition-colors text-sm"
                  >
                    Executive Members
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("events")}
                    className="text-gray-300 hover:text-[#C9A870] transition-colors text-sm"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("benefits")}
                    className="text-gray-300 hover:text-[#C9A870] transition-colors text-sm"
                  >
                    Benefits
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("contact")}
                    className="text-gray-300 hover:text-[#C9A870] transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#C9A870]" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ktpoa.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    info@ktpoa.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#C9A870]" />
                  <span className="text-gray-300 text-sm">
                    +91 80 1234 5678
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#C9A870] mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Bangalore, Karnataka, India
                  </span>
                </li>
              </ul>

              {/* Social Media - Horizontal below Contact */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Social
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/ktpoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-[#0077B5]" />
                  </a>
                  <a
                    href="https://www.instagram.com/ktpoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label="Instagram"
                  >
                    <svg
                      className="instagram-icon h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <defs>
                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="10%" stopColor="#F58529" />
                          <stop offset="50%" stopColor="#DD2A7B" />
                          <stop offset="100%" stopColor="#8134AF" />
                        </linearGradient>
                      </defs>
                      <rect 
                        x="2" 
                        y="2" 
                        width="20" 
                        height="20" 
                        rx="5" 
                        ry="5" 
                        className="stroke-gray-300"
                      />
                      <path 
                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" 
                        className="stroke-gray-300"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/ktpoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      className="h-6 w-6 text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-[#8B5FCF]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Karnataka Training & Placement Officers
            Association. All Rights Reserved.
          </p>
        </div>

        {/* Created By Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-3">
            <span>Created by Aditya P</span>
            <a
              href="https://www.linkedin.com/in/aditya-pq"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center"
              aria-label="Aditya P LinkedIn"
            >
              <Linkedin 
                className="h-5 w-5 transition-all duration-300 ease-in-out" 
                style={{
                  color: '#64748b',
                  filter: 'drop-shadow(0 0 0px transparent)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0ea5e9';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px #0ea5e9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)';
                }}
              />
            </a>
            <a
              href="https://github.com/Dai-Ski"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center"
              aria-label="Aditya P GitHub"
            >
              <Github 
                className="h-5 w-5 transition-all duration-300 ease-in-out" 
                style={{
                  color: '#64748b',
                  filter: 'drop-shadow(0 0 0px transparent)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a855f7';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px #a855f7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)';
                }}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
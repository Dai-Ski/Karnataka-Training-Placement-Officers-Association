import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const logoImage = '/images/2135abd8723dc81edc9e85faf50aaf699dee149d.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", id: "home" },
    { label: "Pillars", id: "pillars" },
    { label: "Executive Members", id: "executive-members" },
    { label: "Events", id: "events" },
    { label: "Benefits", id: "benefits" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer
      className="bg-[#0F172A] text-white relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo + tagline */}
          <div className="space-y-5">
            <button
              onClick={() => handleLinkClick("home")}
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src={logoImage}
                alt="KTPOA Logo"
                className="h-16 w-auto"
              />
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bridging Education and Employment for a Brighter Tomorrow
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#EAB308] flex-shrink-0" />
                <a
                  href="mailto:info@ktpoa.org"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  info@ktpoa.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#EAB308] flex-shrink-0" />
                <a
                  href="tel:+918012345678"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  +91 80 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#EAB308] flex-shrink-0" />
                <span className="text-slate-400 text-sm">Bangalore, Karnataka, India</span>
              </li>
            </ul>

            {/* Social */}
            <div className="pt-2">
              <h5 className="text-white font-bold text-base mb-4">Social</h5>
              <div className="flex items-center gap-5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 Karnataka Training &amp; Placement Officers Association. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const logoImage = '/images/2135abd8723dc81edc9e85faf50aaf699dee149d.png';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({
  currentPage,
  setCurrentPage,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "pillars", label: "Pillars" },
    { id: "executive-members", label: "Executive Members" },
    { id: "events", label: "Events" },
    { id: "benefits", label: "Benefits" },
    { id: "faq", label: "FAQ" },
  ];

  const handleNavClick = (pageId: string) => {
    if (pageId === "pillars") {
      setCurrentPage("pillars");
      setIsMenuOpen(false);
      setTimeout(() => {
        const pillarsElement = document.getElementById("core-pillars");
        if (pillarsElement) {
          const y = pillarsElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const targetPage = pageId === "about" ? "home" : pageId;
    setCurrentPage(targetPage);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`${isVisible ? "translate-y-0" : "-translate-y-full"} fixed w-full top-0 z-50 transition-transform duration-500 bg-[#0F172A] font-sans`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavClick("home")}
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={logoImage}
              alt="KTPOA Logo"
              className="h-11 w-auto"
            />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-8">
          {navItems.map((item) => {
            const isActive =
              (item.id === "about" && currentPage === "home") ||
              currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-semibold transition-all duration-200 pb-1.5 ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("registration")}
            className="px-6 py-2 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-md text-sm transition-all duration-200 shadow-sm"
          >
            Join KTPOA
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive =
                (item.id === "about" && currentPage === "home") ||
                currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => handleNavClick("registration")}
                className="w-full px-4 py-3 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-md text-sm transition-all"
              >
                Join KTPOA
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
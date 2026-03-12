import { Menu, X, ChevronDown } from "lucide-react";
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
  const [
    isRegistrationDropdownOpen,
    setIsRegistrationDropdownOpen,
  ] = useState(false);
  const [
    isMobileRegistrationOpen,
    setIsMobileRegistrationOpen,
  ] = useState(false);
  const [isPillarsDropdownOpen, setIsPillarsDropdownOpen] =
    useState(false);
  const [isMobilePillarsOpen, setIsMobilePillarsOpen] =
    useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down and not at the top
      else if (
        currentScrollY > lastScrollY &&
        currentScrollY > 80
      ) {
        setIsVisible(false);
        setIsRegistrationDropdownOpen(false); // Close dropdowns when hiding
        setIsHamburgerOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "pillars", label: "Pillars" },
    { id: "executive-members", label: "Executive Members" },
    { id: "events", label: "Events" },
    { id: "benefits", label: "Benefits" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const hamburgerItems = [
    { id: "help", label: "Help Section" },
  ];

  const handleNavClick = (pageId: string) => {
    // Handle Pillars navigation - go to home and scroll to pillars section
    if (pageId === "pillars") {
      setCurrentPage("pillars");
      setIsMenuOpen(false);
      setIsHamburgerOpen(false);
      setIsPillarsDropdownOpen(false);

      // Wait for page to render, then scroll to pillars section
      setTimeout(() => {
        const pillarsElement =
          document.getElementById("core-pillars");
        if (pillarsElement) {
          const yOffset = -96; // Height of navbar (h-24 = 96px)
          const y =
            pillarsElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // Map "about" to "home" internally to show homepage content
    const targetPage = pageId === "about" ? "home" : pageId;

    setCurrentPage(targetPage);
    setIsMenuOpen(false);
    setIsHamburgerOpen(false);
    setIsPillarsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getNavbarColor = () => {
    // Solid navy blue color for all pages
    return "bg-[#1E293B]";
  };

  return (
    <nav
      className={`${getNavbarColor()} fixed w-full top-0 z-50 transition-all duration-300 shadow-lg`}
    >
      <div className="max-w-full mx-auto px-2 h-24 flex items-center justify-between relative">
        {/* Logo in left - Desktop */}
        <div className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2">
          <button
            onClick={() => handleNavClick("home")}
            className="transition-transform hover:scale-105"
          >
            <img
              src={logoImage}
              alt="KTPOA Logo"
              className="h-[70px] w-auto drop-shadow-lg cursor-pointer"
            />
          </button>
        </div>

        {/* Desktop Navigation - Aligned to Right */}
        <div className="hidden md:flex space-x-6 px-8 h-full items-center ml-auto mr-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 transition-colors font-medium ${
                (item.id === "about" &&
                  currentPage === "home") ||
                currentPage === item.id
                  ? "text-white border-b-2 border-white font-semibold"
                  : "text-white/95 hover:text-white"
              }`}
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Join KTPOA Button - Desktop */}
        <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => handleNavClick("registration")}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-md transition-all shadow-lg hover:shadow-xl"
          >
            Join KTPOA
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-white/80 p-2"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  (item.id === "about" &&
                    currentPage === "home") ||
                  currentPage === item.id
                    ? "bg-[rgb(68,87,232)] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Join KTPOA Button in mobile menu */}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick("registration")}
                className="w-full px-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-md transition-all shadow-lg"
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
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { EventsPage } from "./components/EventsPage";
import { BenefitsPage } from "./components/BenefitsPage";
import { FAQPage } from "./components/FAQPage";
import { ContactPage } from "./components/ContactPage";
import { RegistrationPage } from "./components/RegistrationPage";
import { TPORegistrationPage } from "./components/TPORegistrationPage";
import { IndustryRegistrationPage } from "./components/IndustryRegistrationPage";
import { StudentRegistrationPage } from "./components/StudentRegistrationPage";
import { ExecutiveMembersPage } from "./components/ExecutiveMembersPage";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    if (page === "pillars") {
      // Check if we're already on home page
      const wasOnHomePage =
        currentPage === "home" || currentPage === "pillars";

      // Set page to pillars to highlight it in navbar
      setCurrentPage("pillars");

      // Wait for the page to render, then scroll to core pillars
      // Use longer delay if coming from a different page to allow animation to complete
      setTimeout(
        () => {
          const corePillarsElement =
            document.getElementById("core-pillars");
          if (corePillarsElement) {
            const yOffset = -96; // Height of navbar (h-24 = 96px)
            const y =
              corePillarsElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        },
        wasOnHomePage ? 100 : 500,
      );
    } else if (page === "about") {
      // Navigate to home page first
      setCurrentPage("home");
      // Wait for the page to render, then scroll to message from president
      setTimeout(() => {
        const messageElement = document.getElementById(
          "message-from-president",
        );
        if (messageElement) {
          const yOffset = -96; // Height of navbar
          const y =
            messageElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const renderPage = () => {
    const pages = {
      home: HomePage,
      pillars: HomePage, // Show HomePage for pillars, but scroll to pillars section
      events: EventsPage,
      benefits: BenefitsPage,
      faq: FAQPage,
      contact: ContactPage,
      registration: RegistrationPage,
      "tpo-registration": TPORegistrationPage,
      "industry-registration": IndustryRegistrationPage,
      "student-registration": StudentRegistrationPage,
      "executive-members": ExecutiveMembersPage,
    };

    const PageComponent = pages[currentPage] || HomePage;

    // Use a consistent key for home and pillars to prevent re-render
    const pageKey =
      currentPage === "pillars" ? "home" : currentPage;

    return (
      <motion.div
        key={pageKey}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageComponent onNavigate={handleNavigation} />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigation}
      />
      <div className="pt-24">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
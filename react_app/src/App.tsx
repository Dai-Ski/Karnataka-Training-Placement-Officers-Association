import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HomePage } from "@/pages/Home";
import { EventsPage } from "@/pages/Events";
import { BenefitsPage } from "@/pages/Benefits";
import { FAQPage } from "@/pages/FAQ";
import { ContactPage } from "@/pages/Contact";
import { RegistrationPage } from "@/pages/Registration";
import { TPORegistrationPage } from "@/pages/Registration/TPO";
import { IndustryRegistrationPage } from "@/pages/Registration/Industry";
import { StudentRegistrationPage } from "@/pages/Registration/Student";
import { ExecutiveMembersPage } from "@/pages/ExecutiveMembers";
import { AdminLoginPage } from "@/pages/Admin/Login";
import { AdminDashboardPage } from "@/pages/Admin/Dashboard";
import { Toaster } from "@/components/ui/sonner";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    localStorage.getItem("admin_auth") === "true"
  );

  const handleNavigation = (page: string) => {
    if (page === "pillars") {
      const wasOnHomePage =
        currentPage === "home" || currentPage === "pillars";

      setCurrentPage("pillars");

      setTimeout(
        () => {
          const corePillarsElement =
            document.getElementById("core-pillars");
          if (corePillarsElement) {
            const yOffset = -96;
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
      setCurrentPage("home");
      setTimeout(() => {
        const messageElement = document.getElementById(
          "message-from-president",
        );
        if (messageElement) {
          const yOffset = -96;
          const y =
            messageElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
    } else if (page === "admin") {
      setCurrentPage("admin");
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      pillars: HomePage,
      events: EventsPage,
      benefits: BenefitsPage,
      faq: FAQPage,
      contact: ContactPage,
      registration: RegistrationPage,
      "tpo-registration": TPORegistrationPage,
      "industry-registration": IndustryRegistrationPage,
      "student-registration": StudentRegistrationPage,
      "executive-members": ExecutiveMembersPage,
      admin: isAdminAuthenticated ? AdminDashboardPage : () => (
        <AdminLoginPage onLogin={() => setIsAdminAuthenticated(true)} />
      ),
    };

    const PageComponent = pages[currentPage] || HomePage;

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
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigation}
      />
      <div style={{ paddingTop: '96px' }}>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
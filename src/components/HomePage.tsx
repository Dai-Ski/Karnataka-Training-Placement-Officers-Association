import { useRef } from "react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { HeroSection } from "../sections/HeroSection";
import { AboutUsSection } from "../sections/AboutUsSection";
import { MessageFromPresidentSection } from "../sections/MessageFromPresidentSection";
import { VisionMissionSection } from "../sections/VisionMissionSection";
import { CorePillarsSection } from "../sections/CorePillarsSection";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <HeroSection onLearnMore={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutUsSection />
      </div>
      <MessageFromPresidentSection />
      <VisionMissionSection />
      <CorePillarsSection />
      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="home" />
    </div>
  );
}
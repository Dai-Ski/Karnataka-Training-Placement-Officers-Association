import { motion } from "motion/react";

const logoImage = '/images/2135abd8723dc81edc9e85faf50aaf699dee149d.png';
const heroBackgroundImage = '/images/739529fb32f5f1fd2a512e1a21fe9ec15d4a09a9.png';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export function HeroSection({ onLearnMore }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center pt-[72px] overflow-hidden bg-[#0F172A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      />
      {/* Dark overlay - matches figma's navy tint */}
      <div className="absolute inset-0 bg-[#0F172A]/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={logoImage}
            alt="KTPOA Logo"
            className="h-[210px] w-auto mx-auto mb-6"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-[3.25rem] text-white font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bridging Campuses and Corporates Across<br className="hidden md:block" /> Karnataka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed"
        >
          The Karnataka Training & Placement Officers Association (KTPOA) unites placement officers, career <br className="hidden md:block" />
          counsellors and industry leaders to create impactful career pathways for students.
        </motion.p>
      </div>
    </section>
  );
}

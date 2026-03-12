import { motion, useInView } from "motion/react";
import logoImage from "figma:asset/2135abd8723dc81edc9e85faf50aaf699dee149d.png";
import heroBackgroundImage from "figma:asset/739529fb32f5f1fd2a512e1a21fe9ec15d4a09a9.png";
import { Card, CardContent } from "./ui/card";
import { QuotationMark } from "./QuotationMark";
import {
  Handshake,
  GraduationCap,
  Users,
  BookOpen,
} from "lucide-react";
import { useRef } from "react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import React from "react";

interface HeroSectionProps {
  onLearnMore: () => void;
}

function HeroSection({ onLearnMore }: HeroSectionProps) {
  return (
    <section className="relative h-[67vh] flex items-center justify-center overflow-hidden bg-[#2D3E50]">
      {/* Background Image with 25% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-12">
        <img
          src={logoImage}
          alt="KTPOA Logo"
          className="h-56 w-auto mx-auto mb-2 drop-shadow-2xl"
        />
        <h1
          className="text-3xl md:text-4xl mb-3 text-white font-bold font-serif"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Bridging Campuses and Corporates Across Karnataka
        </h1>
        <p className="text-base md:text-lg mb-5 text-gray-200">
          The Karnataka Training & Placement Officers
          Association (KTPOA) unites placement officers, career
          counsellors and industry leaders to create impactful
          career pathways for students.
        </p>
      </div>
    </section>
  );
}

function AboutUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 bg-white mt-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-2">
            WHO WE ARE
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            About KTPOA
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
            The Karnataka Training & Placement Officers
            Association (KTPOA) is a professional body dedicated
            to uniting placement officers, training
            coordinators, and career counsellors from
            educational institutions across Karnataka. We serve
            as the bridge connecting academia with industry,
            ensuring that students receive the guidance, skills,
            and opportunities they need to thrive in today's
            competitive job market.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function MessageFromPresidentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 bg-white mb-16"
      id="message-from-president"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-2">
            MESSAGE FROM THE PRESIDENT
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Leading With Purpose
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 relative border-4 border-[#3B5A7F]">
          {/* Opening Quote Icon - Flies in from left */}
          <motion.div
            className="absolute -bottom-16 -right-22 z-20 pointer-events-none"
            initial={{ x: -300, opacity: 0 }}
            animate={
              isInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <QuotationMark orientation="opening" size={144} />
          </motion.div>

          <div className="relative z-10 space-y-3 text-gray-700 text-[14px] leading-relaxed">
            <p className="font-semibold text-gray-800">
              Dear Members, Partners and Stakeholders,
            </p>

            <p>
              It gives me immense pride to lead KTPOA — a
              collective initiative driven by a shared
              commitment to student success and institutional
              excellence. In today's dynamic employment
              landscape, placement is no longer just a process —
              it is a strategic function that demands
              collaboration, foresight and continuous
              innovation.
            </p>

            <p className="font-semibold text-gray-800">
              Our focus is clear:
            </p>

            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Foster deeper industry engagement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Promote skill-driven education</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Share proven placement strategies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  Elevate the professional stature of placement
                  officers
                </span>
              </li>
            </ul>

            <p>
              Together, we are not merely coordinating
              placements; we are shaping career ecosystems. I
              invite institutions, industry partners and
              placement professionals to join hands with KTPOA.
            </p>

            <p className="font-bold text-gray-900 pt-1">
              Let us collaborate, innovate and lead.
            </p>

            <p className="text-[hsl(var(--gold))] font-semibold pt-2">
              — President, KTPOA
            </p>
          </div>

          {/* Closing Quote Icon - Flies in from right */}
          <motion.div
            className="absolute -top-16 -left-22 z-20 pointer-events-none"
            initial={{ x: 300, opacity: 0 }}
            animate={
              isInView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <QuotationMark orientation="closing" size={144} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function VisionMissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [isBlinking, setIsBlinking] = React.useState(false);
  const [isPulsing, setIsPulsing] = React.useState(false);

  const handleVisionHover = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  const handleMissionHover = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 800);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 bg-[#1A2332]"
      id="vision-mission"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Vision - with natural eye blinking animation on hover */}
          <Card
            className="bg-[#1E3A5F]/40 border border-[#2D4A6B]/30 text-white transition-all"
            onMouseEnter={handleVisionHover}
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="gradient-gold p-3 rounded-md flex-shrink-0 shadow-lg">
                  {/* Custom animated eye */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative"
                  >
                    {/* Eye outline - always visible */}
                    <motion.path
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                      animate={{
                        d: isBlinking
                          ? "M2 12s3-0.5 10-0.5 10 0.5 10 0.5-3 0.5-10 0.5-10-0.5-10-0.5z"
                          : "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z",
                      }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                    />

                    {/* Pupil/circle - scales during blink */}
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{
                        scale: isBlinking ? 0.3 : 1,
                        opacity: isBlinking ? 0.5 : 1,
                      }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                      style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-[#B8BCC4] text-base leading-relaxed">
                To build a collaborative and future-ready
                placement ecosystem across Karnataka that
                ensures every student has access to meaningful
                career opportunities.
              </p>
            </CardContent>
          </Card>

          {/* Our Mission - with bullseye/target animation on hover */}
          <Card
            className="bg-[#1E3A5F]/40 border border-[#2D4A6B]/30 text-white group transition-all"
            onMouseEnter={handleMissionHover}
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="gradient-gold p-3 rounded-md flex-shrink-0 shadow-lg relative overflow-visible">
                  {/* Custom animated concentric circles */}
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      scale: isPulsing ? [1, 1.08, 1] : 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "center",
                    }}
                  >
                    {/* Outer circle */}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-black"
                    />
                    {/* Middle circle */}
                    <circle
                      cx="12"
                      cy="12"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-black"
                    />
                    {/* Inner circle */}
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-black"
                    />
                  </motion.svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-3 text-[#B8BCC4] text-base">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--gold))] mr-3 mt-1">
                    •
                  </span>
                  <span>
                    Strengthen industry-institution partnerships
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--gold))] mr-3 mt-1">
                    •
                  </span>
                  <span>
                    Enhance employability through skill
                    development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--gold))] mr-3 mt-1">
                    •
                  </span>
                  <span>
                    Promote best practices in campus recruitment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--gold))] mr-3 mt-1">
                    •
                  </span>
                  <span>
                    Elevate the professional stature of
                    placement officers
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}

function CorePillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const pillars = [
    {
      icon: Handshake,
      title: "Industry Connect",
      description:
        "We create strong, sustainable relationships between institutions and employers across diverse sectors.",
      points: [
        "Campus-corporate networking events",
        "Industry roundtables & HR meets",
        "Centralized hiring initiatives",
      ],
    },
    {
      icon: Users,
      title: "Professional Development",
      description:
        "We believe placement professionals must continuously evolve.",
      points: [
        "Leadership development programs",
        "HR & recruitment seminars",
        "Annual conferences & summits",
      ],
    },
    {
      icon: BookOpen,
      title: "Knowledge Exchange",
      description:
        "A collaborative platform for placement officers to exchange insights, strategies, and success stories.",
      points: [
        "Best practice workshops",
        "Data-driven recruitment insights",
        "Regional networking forums",
      ],
    },
    {
      icon: GraduationCap,
      title: "Student Empowerment",
      description:
        "Ensuring every student receives career guidance, skill development, and meaningful opportunities.",
      points: [
        "Career readiness programs",
        "Industry mentorship initiatives",
        "Soft skills training sessions",
      ],
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-white"
      id="core-pillars"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
            WHAT WE STAND FOR
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Core Pillars
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="gradient-gold p-4 rounded-xl inline-block mb-4 shadow-lg">
                      <Icon className="h-7 w-7 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="text-[hsl(var(--gold))] mr-2 mt-1">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white">
      <HeroSection
        onLearnMore={() =>
          aboutRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />

      <AboutUsSection />

      <MessageFromPresidentSection />

      <VisionMissionSection />

      <CorePillarsSection />

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="home" />
    </div>
  );
}
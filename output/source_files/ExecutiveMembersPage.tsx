import { motion, useInView } from "motion/react";
import { Card, CardContent } from "./ui/card";
import {
  Users,
  ArrowRight,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  User,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import hemamaliniPhoto from "figma:asset/cd67160cd5ff3195a83045aed3ab56f8647b87fe.png";
import { AnimatePresence } from "motion/react";

interface ExecutiveMember {
  name: string;
  position: string;
  institution: string;
  qualifications?: string;
  image?: string;
  about: string;
  areasOfExpertise: string[];
  keyAchievements: string[];
  email: string;
  linkedin?: string;
}

interface Message {
  name: string;
  position: string;
  message: string;
  image?: string;
}

interface ExecutiveMembersPageProps {
  onNavigate?: (page: string) => void;
}

export function ExecutiveMembersPage({
  onNavigate,
}: ExecutiveMembersPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [selectedMember, setSelectedMember] =
    useState<ExecutiveMember | null>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Messages from executive members
  const messages: Message[] = [
    {
      name: "Prof. N RAVIKUMAR",
      position: "President, KTPOA",
      message:
        "As we navigate the evolving landscape of education and employment, KTPOA remains committed to bridging the gap between academia and industry. Our collective efforts ensure that every student in Karnataka has access to quality placement opportunities and career guidance. Together, we are building a brighter future for our students.",
      image: undefined,
    },
    {
      name: "Dr. HEMAMALINI M.J",
      position: "Vice President, KTPOA",
      message:
        "Training and placement is not just about securing jobs; it's about shaping careers and transforming lives. With 20+ years in this field, I've witnessed the power of mentorship and industry partnerships. Let's continue to empower our students with the skills and confidence they need to succeed in the global marketplace.",
      image: hemamaliniPhoto,
    },
    {
      name: "Prof. GURUCHARAN SINGH",
      position: "Honorary President, KTPOA",
      message:
        "KTPOA has grown from a vision to a vibrant community of dedicated professionals. Our strength lies in our unity and shared commitment to student success. As we move forward, let us continue to innovate, collaborate, and set new benchmarks in placement excellence across Karnataka.",
      image: undefined,
    },
    {
      name: "Prof. Dr. NABI A",
      position: "General Secretary, KTPOA",
      message:
        "Effective coordination and seamless communication are the backbone of successful placement operations. At KTPOA, we ensure that every member institution receives the support and resources needed to excel. Our network is our strength, and together we create opportunities that change lives.",
      image: undefined,
    },
    {
      name: "Mr. SANTOSH KUMAR B.S",
      position: "Joint Secretary, KTPOA",
      message:
        "Building strong relationships with recruiters is an art that requires dedication, trust, and consistent delivery. Every placement drive is an opportunity to showcase the exceptional talent Karnataka produces. Let's work together to ensure our students are industry-ready and future-proof.",
      image: undefined,
    },
  ];

  // Auto-advance timer (7 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [messages.length]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const duration = 7000; // 7 seconds
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [currentMessageIndex]);

  const goToPrevious = () => {
    setCurrentMessageIndex(
      (prev) => (prev - 1 + messages.length) % messages.length
    );
  };

  const goToNext = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next
      goToNext();
    }
  };

  const executives: ExecutiveMember[] = [
    {
      name: "Prof. GURUCHARAN SINGH",
      position: "Honorary President",
      institution: "Sapthagiri NPS University, Bangalore",
      qualifications: "Ph.D., M.Tech, B.E.",
      email: "gurucharan.singh@ktpoa.org",
      about:
        "Prof. Gurucharan Singh is a distinguished educator and administrator with over 25 years of experience in higher education and placement activities.",
      areasOfExpertise: [
        "Strategic Leadership",
        "Educational Administration",
        "Industry Partnerships",
      ],
      keyAchievements: [
        "Pioneered placement initiatives across Karnataka",
        "Established KTPOA as a premier professional body",
        "Mentored hundreds of TPOs across the state",
      ],
      linkedin: "https://www.linkedin.com/in/gurucharan-singh",
    },
    {
      name: "Prof. N RAVIKUMAR",
      position: "President",
      institution:
        "Rajiv Gandhi Institute of Technology, Bangalore",
      qualifications:
        "Master in HR, Diploma & Degree in Electronics",
      email: "n.ravikumar@ktpoa.org",
      about:
        "Prof. N. Ravikumar holds a Diploma and Degree in Electronics & Master in HR, with more than 40 plus years of experience in both Industry & Academia. He entered the industry with BPL India Ltd as a Service Engineer in 1983 and worked till 2000 in various capacities including Branch Manager, Imports Manager, Service Head, and Regional Head. He started his journey in academics as Placement Head from 2003 and continues till date. As a placement counselor and advisor, he conducts tech talks and motivational sessions to students, guiding them for an appropriate career path.",
      areasOfExpertise: [
        "Corporate Relations",
        "Industry-Academia Liaison",
        "Placement Strategy",
        "Career Counseling",
        "Student Training & Development",
        "Campus Recruitment",
        "Strategic Partnerships",
      ],
      keyAchievements: [
        "40+ years of combined experience in Industry (BPL India Ltd, 1983-2000) and Academia (2003-present)",
        "Worked in various leadership roles: Branch Manager, Imports Manager, Service Head, Regional Head at BPL India Ltd",
        "Instrumental in setting up Industry at Campus for manufacturing components for BOSCH, providing on-hand practice to students as interns",
        "Established Centre of Excellence by TOYOTA at campus where students receive skill-based training leading to placements",
        "Extensive experience in organizing placement drives - on campus, virtual, and off-campus placements",
        "Conducts tech talks and motivational sessions for students, guiding them for appropriate career paths",
        "Training students for campus placements at appropriate times during their studies",
        "Strong liaison with industry partners for continuous student development and placement opportunities",
      ],
      linkedin: "https://www.linkedin.com/in/ravikumar",
    },
    {
      name: "Dr. HEMAMALINI M J",
      position: "Vice President",
      institution:
        "Acharya Institutes of Technology, Bangalore",
      qualifications: "Ph.D in Social Work, M.S.W",
      email: "hemamalini3416@gmail.com",
      about:
        "Dr. Hemamalini M.J is a dedicated Training & Placement professional with 20+ years of extensive experience in Recruitment, Training & Development, Talent Management, Student Counselling, and Academic Leadership. She has a proven track record in building strong industry–academia partnerships, enhancing campus placement outcomes, designing employability programs, and mentoring thousands of students for career success. Committed to driving institutional excellence through strategic planning, stakeholder engagement, and holistic student development.",
      areasOfExpertise: [
        "Campus Recruitment & Talent Acquisition",
        "Training & Development",
        "Industry–Academia Collaboration",
        "Student Career Guidance & Counselling",
        "Placement Strategy & Execution",
        "Soft Skills and Employability Training",
        "Stakeholder & Corporate Relationship Management",
      ],
      keyAchievements: [
        "Ph.D in Social Work from Bangalore University, M.S.W in Personnel Management & Industrial Relations",
        "Leading institute-wide placement strategy for Engineering, Management, and Non-Technical programs at Acharya Institutes",
        "Built MoUs with MNCs for Centres of Excellence and industry-led skill programs",
        "Received 100% UGC Travel Grant to present research in Canada (2019)",
        "Significantly increased placement participation and student employability across 20+ years",
        "Founded the Placement Forum (Bangalore) and organized high-impact placement events",
        "Former Director – Strategic Planning at Wealthmax and Head – Training & Placements at mLAC",
        "Trained thousands of students in soft skills, communication, and aptitude",
      ],
      image: hemamaliniPhoto,
      linkedin: "https://www.linkedin.com/in/hemamalini",
    },
    {
      name: "Dr. NABI A",
      position: "General Secretary",
      institution: "BMS College of Engineering, Bangalore",
      qualifications: "Ph.D., M.Tech",
      email: "nabi.a@ktpoa.org",
      about:
        "Prof. Dr. Nabi A manages the administrative and operational excellence of KTPOA, ensuring smooth coordination among all member institutions.",
      areasOfExpertise: [
        "Event Management",
        "Administration",
        "Coordination",
      ],
      keyAchievements: [
        "Organized 75+ successful KTPOA events",
        "Streamlined membership processes",
        "Increased membership by 80% in 3 years",
      ],
      linkedin: "https://www.linkedin.com/in/nabi",
    },
    {
      name: "Prof. BABU REDDY N",
      position: "Joint Secretary",
      institution: "RV College of Engineering, Bangalore",
      qualifications: "M.Tech, B.E.",
      email: "babu.reddyn@ktpoa.org",
      about:
        "Prof. Babu Reddyn supports the secretarial functions and focuses on member engagement and communication initiatives.",
      areasOfExpertise: [
        "Member Relations",
        "Communication",
        "Networking",
      ],
      keyAchievements: [
        "Enhanced member communication systems",
        "Coordinated regional chapter activities",
        "Improved member satisfaction by 60%",
      ],
      linkedin: "https://www.linkedin.com/in/babureddyn",
    },
    {
      name: "Mr. SANTOSH KUMAR B S",
      position: "Treasurer",
      institution: "Sapthagiri NPS University, Bangalore",
      qualifications: "MBA, B.Com",
      email: "santosh.kumar.bs@ktpoa.org",
      about:
        "Mr. Santosh Kumar B.S contribute to building strong recruiter relationships, conducting effective training programs, and guiding students toward suitable career opportunities while improving overall career outcomes in KTPOA.",
      areasOfExpertise: [
        "Financial Management",
        "Budgeting",
        "Compliance",
      ],
      keyAchievements: [
        "Enhanced Placement Performance",
        "Strengthened Industry & Corporate Partnerships",
        "Improved Student Employability & Career Readiness",
      ],
      linkedin: "https://www.linkedin.com/in/santoshkumar",
    },
    {
      name: "Dr. H R ANANTH",
      position: "Executive Committee Member",
      institution:
        "M.S. Ramaiah Institute of Technology, Bangalore",
      qualifications: "Ph.D., M.E.",
      email: "hr.ananth@ktpoa.org",
      about:
        "Dr. HR Ananth specializes in technology integration and digital transformation in placement processes.",
      areasOfExpertise: [
        "Digital Transformation",
        "Technology Integration",
        "Innovation",
      ],
      keyAchievements: [
        "Launched KTPOA digital portal",
        "Implemented online placement systems",
        "Reduced placement cycle time by 40%",
      ],
      linkedin: "https://www.linkedin.com/in/hrananth",
    },
    {
      name: "Ms. VANDANA R",
      position: "Executive Committee Member",
      institution:
        "JSS Science and Technology University, Mysore",
      qualifications: "MBA, B.Tech",
      email: "vandana.r@ktpoa.org",
      about:
        "Ms. Vandana R focuses on women empowerment and diversity initiatives in campus placements.",
      areasOfExpertise: [
        "Diversity & Inclusion",
        "Women Empowerment",
        "Career Guidance",
      ],
      keyAchievements: [
        "Increased women placement by 65%",
        "Launched women leadership programs",
        "Advocated for inclusive hiring practices",
      ],
      linkedin: "https://www.linkedin.com/in/vandanar",
    },
    {
      name: "Dr. SHARANA BASAVANA GOWDA",
      position: "Executive Committee Member",
      institution:
        "SDM College of Engineering and Technology, Dharwad",
      qualifications: "Ph.D., M.Tech",
      email: "sharana.bg@ktpoa.org",
      about:
        "Dr. Sharana Basavana Gowda works extensively with tier-2 and tier-3 city institutions to enhance placement opportunities.",
      areasOfExpertise: [
        "Rural Outreach",
        "Regional Development",
        "Inclusive Placement",
      ],
      keyAchievements: [
        "Placed 3,000+ students from tier-2/3 cities",
        "Conducted 120+ rural campus drives",
        "Partnered with 60+ regional companies",
      ],
      linkedin: "https://www.linkedin.com/in/sharanagowda",
    },
    {
      name: "Mr. RAKESHS",
      position: "Executive Committee Member",
      institution: "NIE Institute of Technology, Mysore",
      qualifications: "MBA, B.E.",
      email: "rakeshs@ktpoa.org",
      about:
        "Mr. Rakesh S focuses on industry-academia collaboration and corporate relationship management.",
      areasOfExpertise: [
        "Industry Relations",
        "Corporate Partnerships",
        "Placement Strategy",
      ],
      keyAchievements: [
        "Established 80+ corporate partnerships",
        "Organized successful job fairs",
        "Enhanced industry connect programs",
      ],
      linkedin: "https://www.linkedin.com/in/rakeshs",
    },
    {
      name: "Ms. SALESTENA MARY T",
      position: "Executive Committee Member",
      institution: "St. Joseph Engineering College, Mangalore",
      qualifications: "M.Tech, B.E.",
      email: "salestena.mary@ktpoa.org",
      about:
        "Ms. Salestena Mary T specializes in curriculum development aligned with industry requirements.",
      areasOfExpertise: [
        "Curriculum Development",
        "Industry-Academia Collaboration",
        "Skills Training",
      ],
      keyAchievements: [
        "Developed industry-aligned training modules",
        "Established 40+ MoUs with companies",
        "Mentored 300+ placement officers",
      ],
      linkedin: "https://www.linkedin.com/in/salestenamary",
    },
    {
      name: "Dr. BHEEMESWARA REDDY",
      position: "Executive Committee Member",
      institution: "Siddaganga Institute of Technology, Tumkur",
      qualifications: "Ph.D., M.E.",
      email: "bheemeswara.reddy@ktpoa.org",
      about:
        "Dr. Bheemeswara Reddy brings expertise in research and academic excellence to placement strategies.",
      areasOfExpertise: [
        "Research",
        "Academic Excellence",
        "Quality Assurance",
      ],
      keyAchievements: [
        "Published 20+ research papers on placements",
        "Improved placement quality metrics",
        "Enhanced TPO training standards",
      ],
      linkedin: "https://www.linkedin.com/in/bheemeswara",
    },
    {
      name: "Mr. ANANDKUMAR V",
      position: "Executive Committee Member",
      institution: "NMAM Institute of Technology, Nitte",
      qualifications: "MBA, B.Tech",
      email: "anandkumar.v@ktpoa.org",
      about:
        "Mr. Anandkumar V specializes in startup ecosystem development and entrepreneurship initiatives for students.",
      areasOfExpertise: [
        "Entrepreneurship",
        "Startup Ecosystem",
        "Innovation",
      ],
      keyAchievements: [
        "Facilitated 50+ student startups",
        "Established incubation partnerships",
        "Promoted entrepreneurial culture",
      ],
      linkedin: "https://www.linkedin.com/in/anandkumar",
    },
    {
      name: "Mrs. RASHMI",
      position: "Executive Committee Member",
      institution:
        "The Oxford College of Engineering, Bangalore",
      qualifications: "M.Tech, B.E.",
      email: "rashmi@ktpoa.org",
      about:
        "Mrs. Rashmi focuses on student counseling and career guidance programs across member institutions.",
      areasOfExpertise: [
        "Career Counseling",
        "Student Mentoring",
        "Guidance Programs",
      ],
      keyAchievements: [
        "Counseled 5,000+ students",
        "Developed career guidance frameworks",
        "Improved student career readiness",
      ],
      linkedin: "https://www.linkedin.com/in/rashmi",
    },
    {
      name: "Mr. MUJTHABA WASEEM K",
      position: "Executive Committee Member",
      institution: "KLE Technological University, Hubli",
      qualifications: "MBA, B.E.",
      email: "mujthaba.waseem@ktpoa.org",
      about:
        "Mr. Mujthaba Waseem K works on digital marketing and branding initiatives for placement activities.",
      areasOfExpertise: [
        "Digital Marketing",
        "Branding",
        "Social Media",
      ],
      keyAchievements: [
        "Enhanced KTPOA digital presence",
        "Increased employer engagement",
        "Improved brand visibility",
      ],
      linkedin: "https://www.linkedin.com/in/mujthaba",
    },
    {
      name: "Mr. BALUCY",
      position: "Executive Committee Member",
      institution: "Manipal Institute of Technology, Manipal",
      qualifications: "M.Tech, B.E.",
      email: "balucy@ktpoa.org",
      about:
        "Mr. Balucy specializes in data analytics and placement performance metrics.",
      areasOfExpertise: [
        "Data Analytics",
        "Performance Metrics",
        "Reporting",
      ],
      keyAchievements: [
        "Implemented placement analytics dashboard",
        "Improved data-driven decision making",
        "Enhanced reporting mechanisms",
      ],
      linkedin: "https://www.linkedin.com/in/balucy",
    },
    {
      name: "Mrs. NETHARAVATHI",
      position: "Executive Committee Member",
      institution: "Canara Engineering College, Mangalore",
      qualifications: "M.Tech, B.E.",
      email: "netharavathi@ktpoa.org",
      about:
        "Mrs. Netharavathi focuses on skill development programs and training coordination.",
      areasOfExpertise: [
        "Skill Development",
        "Training Coordination",
        "Capacity Building",
      ],
      keyAchievements: [
        "Coordinated 200+ training sessions",
        "Enhanced skill development programs",
        "Improved student readiness",
      ],
      linkedin: "https://www.linkedin.com/in/netharavathi",
    },
    {
      name: "Mr. SANTHOSH KUMARK",
      position: "Executive Committee Member",
      institution: "RVCE, Bangalore",
      qualifications: "MBA, B.Tech",
      email: "santhosh.kumark@ktpoa.org",
      about:
        "Mr. Santhosh Kumar K works on international placement opportunities and global collaborations.",
      areasOfExpertise: [
        "International Placements",
        "Global Partnerships",
        "Study Abroad",
      ],
      keyAchievements: [
        "Established 25+ international partnerships",
        "Facilitated 500+ international placements",
        "Enhanced global opportunities",
      ],
      linkedin: "https://www.linkedin.com/in/santhoshkumar",
    },
  ];

  return (
    <div className="bg-white">
      {/* Message Slider - Hero Style */}
      <section className="h-[40vh] min-h-[400px] bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy))]/95 to-[hsl(var(--navy))]/90 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A870] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A870] rounded-full blur-3xl"></div>
        </div>

        {/* Left Arrow - Hidden on mobile */}
        <button
          className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-10 transition-all"
          onClick={goToPrevious}
          aria-label="Previous message"
        >
          <ChevronLeft className="h-8 w-8 text-white hover:text-white/80" />
        </button>

        {/* Right Arrow - Hidden on mobile */}
        <button
          className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10 transition-all"
          onClick={goToNext}
          aria-label="Next message"
        >
          <ChevronRight className="h-8 w-8 text-white hover:text-white/80" />
        </button>

        {/* Message Container */}
        <div className="relative h-full flex items-center justify-center px-4 md:px-8 lg:px-12 pb-3">
          <div className="max-w-5xl w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative pb-20"
                drag="x"
                dragConstraints={{ left: -50, right: 50 }}
                onDragEnd={handleDragEnd}
              >
                {/* Message Text */}
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 italic font-light px-6 text-justify">
                  "{messages[currentMessageIndex].message}"
                </p>

                {/* Member Info - Bottom Left */}
                <div className="absolute bottom-0 left-6 px-[0px] py-[68px]">
                  <h4 className="font-bold text-white text-lg md:text-xl mb-1">
                    {messages[currentMessageIndex].name}
                  </h4>
                  <p className="text-[#C9A870] font-semibold text-sm md:text-base">
                    {messages[currentMessageIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators - Bottom Center - Outside AnimatePresence */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2.5 z-10">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMessageIndex(index)}
                  className="relative rounded-full overflow-hidden"
                  aria-label={`Go to message ${index + 1}`}
                >
                  {/* Background dot - always visible */}
                  <div
                    className={`rounded-full transition-all duration-300 ease-in-out ${
                      index === currentMessageIndex
                        ? "w-12 h-1 bg-white/30"
                        : "w-2 h-1 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                  {/* Progress fill - only on active dot */}
                  {index === currentMessageIndex && (
                    <div
                      className="absolute top-0 left-0 h-full bg-white rounded-full"
                      style={{ 
                        width: `${progress}%`,
                        transition: 'none'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {executives.map((member, index) => (
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
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Card
                  className="bg-white border-2 border-gray-200 hover:border-[#C9A870] shadow-md hover:shadow-xl transition-all h-full cursor-pointer flex flex-col"
                  onClick={() => setSelectedMember(member)}
                >
                  <CardContent className="p-8 flex flex-col flex-1">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                      {member.image ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-[#C9A870]/10 flex items-center justify-center">
                          <Users className="h-12 w-12 text-[#1E293B]" />
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                      {member.name}
                    </h3>

                    {/* Position */}
                    <p className="text-[#C9A870] font-semibold text-center text-sm mb-4">
                      {member.position}
                    </p>

                    {/* Institution */}
                    <div className="flex items-start gap-2 mb-3 text-gray-600 text-sm">
                      <Building2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#1E293B]" />
                      <span>{member.institution}</span>
                    </div>

                    {/* Qualifications */}
                    {member.qualifications && (
                      <div className="flex items-start gap-2 mb-4 text-gray-600 text-sm">
                        <GraduationCap className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#1E293B]" />
                        <span>{member.qualifications}</span>
                      </div>
                    )}

                    {/* View Profile Link - Pushed to bottom */}
                    <div className="w-full flex items-center justify-center gap-2 text-[#1E293B] hover:text-[#C9A870] font-medium text-sm mt-auto pt-4 border-t border-gray-100 transition-colors">
                      <span>View Full Profile</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Header Section */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex-shrink-0">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-[#C9A870]/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {selectedMember.image ? (
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-[#1E293B]" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedMember.name}
                      </h2>
                      <p className="text-[#C9A870] font-semibold text-sm mt-1">
                        {selectedMember.position}
                      </p>
                      {selectedMember.qualifications && (
                        <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                          <GraduationCap className="h-4 w-4 text-gray-400" />
                          <span>
                            {selectedMember.qualifications}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Contact Icons */}
                    <div className="flex items-center gap-2">
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="w-10 h-10 rounded-full bg-[#C9A870]/10 hover:bg-[#C9A870]/20 flex items-center justify-center transition-colors"
                          title="Send Email"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="h-5 w-5 text-[#1E293B]" />
                        </a>
                      )}
                      {selectedMember.linkedin && (
                        <a
                          href={selectedMember.linkedin || "#"}
                          className="w-10 h-10 rounded-full bg-[#C9A870]/10 hover:bg-[#C9A870]/20 flex items-center justify-center transition-colors"
                          title="LinkedIn Profile"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-5 w-5 text-[#1E293B]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scrollable Content Section */}
                <div className="overflow-y-auto px-6 py-6 space-y-6 flex-1">
                  {/* Institution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-[#C9A870]" />
                      <h3 className="font-semibold text-gray-900">
                        Institution
                      </h3>
                    </div>
                    <p className="text-gray-700 ml-7">
                      {selectedMember.institution}
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Contact Information
                    </h3>
                    <div className="ml-7 space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[#C9A870]" />
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="text-[#1E293B] hover:text-[#C9A870] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {selectedMember.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      About
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedMember.about}
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  {selectedMember.areasOfExpertise.length >
                    0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.areasOfExpertise.map(
                          (area, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-[#C9A870]/20 text-[#1E293B] rounded-full text-sm font-medium"
                            >
                              {area}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {selectedMember.keyAchievements.length >
                    0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.keyAchievements.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="text-[#C9A870] mt-1.5">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="members" />
    </div>
  );
}
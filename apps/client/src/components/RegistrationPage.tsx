import { ImageWithFallback } from "./ImageWithFallback";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Building2, UserPlus, GraduationCap } from "lucide-react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface RegistrationPageProps {
  onNavigate?: (page: string) => void;
}

export function RegistrationPage({
  onNavigate,
}: RegistrationPageProps) {
  const handleRegistrationClick = (type: string) => {
    if (onNavigate) {
      onNavigate(type);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll to registration type section on mount
  useEffect(() => {
    const registrationSection = document.getElementById("registration-types");
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Registration Options */}
      <section id="registration-types" className="py-24 bg-white">
        <motion.div
          className="max-w-6xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <p className="text-[#EAB308] font-bold tracking-[0.2em] text-sm mb-4 uppercase">Join the Network</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Select Your Registration Type
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Join Karnataka's premier placement network and be part of the future of campus recruitment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Industry Registration */}
            <motion.div variants={itemVariants}>
              <Card
                className="border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col rounded-2xl overflow-hidden"
                onClick={() => handleRegistrationClick("industry-registration")}
              >
                <CardHeader className="pt-10 pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#0F172A] rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                    <Building2
                      className="w-10 h-10 text-[#EAB308]"
                    />
                  </div>
                  <CardTitle
                    className="text-center text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Industry
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-8 pt-0">
                  <p className="text-slate-500 text-center mb-8 text-sm leading-relaxed">
                    For companies and organizations looking to connect with
                    talented students across Karnataka's premier institutions.
                  </p>
                  <ul className="space-y-4 mb-10 flex-grow text-sm">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Access to statewide talent pool</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Streamlined campus recruitment</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Direct institutional engagement</span>
                    </li>
                  </ul>
                  <button className="w-full py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-md transition-all shadow-md active:scale-95">
                    Register as Partner
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            {/* TPO Registration */}
            <motion.div variants={itemVariants}>
              <Card
                className="border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col rounded-2xl overflow-hidden bg-slate-50/50"
                onClick={() => handleRegistrationClick("tpo-registration")}
              >
                <CardHeader className="pt-10 pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#EAB308] rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                    <UserPlus
                      className="w-10 h-10 text-[#0F172A]"
                    />
                  </div>
                  <CardTitle
                    className="text-center text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    TPO
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-8 pt-0">
                  <p className="text-slate-500 text-center mb-8 text-sm leading-relaxed">
                    For Training & Placement Officers seeking professional
                    development, networking and collaboration.
                  </p>
                  <ul className="space-y-4 mb-10 flex-grow text-sm">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Professional networking</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Best practices sharing</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Industry connections</span>
                    </li>
                  </ul>
                  <button className="w-full py-3.5 bg-[#EAB308] hover:bg-[#D9A307] text-[#0F172A] font-bold rounded-md transition-all shadow-md active:scale-95">
                    Register as Member
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Student Registration */}
            <motion.div variants={itemVariants}>
              <Card
                className="border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col rounded-2xl overflow-hidden"
                onClick={() => handleRegistrationClick("student-registration")}
              >
                <CardHeader className="pt-10 pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#0F172A] rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                    <GraduationCap
                      className="w-10 h-10 text-[#EAB308]"
                    />
                  </div>
                  <CardTitle
                    className="text-center text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Student
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-8 pt-0">
                  <p className="text-slate-500 text-center mb-8 text-sm leading-relaxed">
                    For students looking to enhance their career readiness,
                    access workshops and job opportunities.
                  </p>
                  <ul className="space-y-4 mb-10 flex-grow text-sm">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Career guidance resources</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Skill development workshops</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="text-[#EAB308] font-bold">•</span>
                      <span>Job placement opportunities</span>
                    </li>
                  </ul>
                  <button className="w-full py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold rounded-md transition-all shadow-md active:scale-95">
                    Register Now
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="registration" />
    </div>
  );
}
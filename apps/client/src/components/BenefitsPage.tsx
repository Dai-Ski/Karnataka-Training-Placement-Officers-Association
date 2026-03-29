import {
  Building,
  Users,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BenefitsPageProps {
  onNavigate?: (page: string) => void;
}

const GOLD_ICON_STYLE = { background: "linear-gradient(135deg, #C9A870 0%, #EAB308 100%)" };

const memberBenefits = [
  {
    icon: Building,
    title: "For Institutions",
    items: [
      "Access to centralized employer communication",
      "Placement benchmarking reports",
      "Shared hiring calendars",
      "Reduced duplication of campus drives",
    ],
  },
  {
    icon: Users,
    title: "For Placement Officers",
    items: [
      "Professional recognition",
      "Training certifications",
      "Peer knowledge exchange",
      "Leadership opportunities",
    ],
  },
  {
    icon: Briefcase,
    title: "For Corporate Partners",
    items: [
      "Access to curated talent pools",
      "Streamlined campus coordination",
      "Employer branding opportunities",
      "Participation in conclaves and job fairs",
    ],
  },
];

const ecosystemBenefits = [
  {
    icon: Users,
    title: "Networking & Collaboration",
    items: [
      "Statewide placement officer community",
      "Industry leader connections",
      "Multi-institution collaboration platforms",
      "Regional and district-level meets",
    ],
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    items: [
      "Exclusive training workshops",
      "Industry certification programs",
      "Leadership development initiatives",
      "Conference participation opportunities",
    ],
  },
  {
    icon: Target,
    title: "Resource Access",
    items: [
      "Placement analytics and benchmarks",
      "Recruitment trend reports",
      "Best practice documentation",
      "Shared hiring calendars",
    ],
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    items: [
      "Annual excellence awards",
      "Best placement officer recognition",
      "Innovation and achievement spotlights",
      "Peer-nominated honors",
    ],
  },
];

const stats = [
  { value: "150+", label: "Member Institutions" },
  { value: "500+", label: "Placement Professionals" },
  { value: "300+", label: "Corporate Partners" },
  { value: "25K+", label: "Students Impacted" },
];

export function BenefitsPage({ onNavigate }: BenefitsPageProps) {
  const ref1 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1, { once: true, margin: "-60px" });

  return (
    <div className="bg-[#F8F9FB]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <section className="bg-[#0F172A] py-20 text-center">
        <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Why Join Us</p>
        <h1
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Member Benefits
        </h1>
        <p className="text-slate-400 text-sm mt-4">Experience the power of collaborative success</p>
      </section>

      {/* Core Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={GOLD_ICON_STYLE}>
                    <Icon className="h-8 w-8 text-[#0F172A]" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3 text-left">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-500 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#EAB308] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join KTPOA */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Membership Value</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Join KTPOA?
            </h2>
          </div>
          <div className="bg-[#1E293B] rounded-2xl p-8 md:p-12">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Access to statewide industry network",
                "Direct engagement with top recruiters",
                "Continuous professional development",
                "Shared institutional insights",
                "Strong collaborative support system",
                "Recognition and excellence awards",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#EAB308] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#EAB308] font-semibold text-center mt-8 text-base">
              Together, we create greater placement outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Comprehensive Support</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Complete Ecosystem Benefits
            </h2>
          </div>
          <div ref={ref1} className="grid md:grid-cols-2 gap-6">
            {ecosystemBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={GOLD_ICON_STYLE}>
                      <Icon className="h-5 w-5 text-[#0F172A]" />
                    </div>
                    <h3 className="text-[#0F172A] font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {benefit.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-500 text-sm">
                        <span className="text-[#EAB308] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Our Impact</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#1E293B] rounded-2xl p-7 text-center border border-white/10"
              >
                <p className="text-4xl font-bold text-[#EAB308] mb-2">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-[#1E293B] rounded-2xl p-7 text-center border border-white/10">
            <p className="text-4xl font-bold text-[#EAB308] mb-2">1,200+</p>
            <p className="text-slate-400">Annual Recruitment Drives Facilitated</p>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate?.("registration")}
              className="px-8 py-3.5 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-md text-sm transition-all"
            >
              Join KTPOA
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="benefits" />
    </div>
  );
}
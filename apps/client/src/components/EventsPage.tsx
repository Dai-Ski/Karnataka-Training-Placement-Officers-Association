import {
  Calendar,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Mic,
  ClipboardList,
  CheckCircle,
  Bell,
  MapPin,
} from "lucide-react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface EventsPageProps {
  onNavigate?: (page: string) => void;
}

const flagshipEvents = [
  {
    title: "Karnataka Placement Conclave",
    icon: ClipboardList,
    description: "A state-level annual gathering of placement officers, HR leaders, and institutional heads focused on emerging recruitment trends.",
    highlights: ["Expert keynote sessions", "Panel discussions on future of work", "Networking opportunities", "Best practices showcase"],
  },
  {
    title: "Industry–Academia Summit",
    icon: Mic,
    description: "An interactive forum for policy discussions, skill alignment, and hiring outlook analysis.",
    highlights: ["Policy roundtables", "Skill gap analysis", "Industry trend presentations", "Collaborative workshops"],
  },
  {
    title: "Recruiters Meet",
    icon: Users,
    description: "A centralized networking platform connecting recruiters with multiple institutions under one umbrella.",
    highlights: ["Multi-institution engagement", "Direct recruiter access", "Recruitment drive coordination", "Talent pool showcasing"],
  },
  {
    title: "Placement Excellence Awards",
    icon: Award,
    description: "Recognition for Best Placement Officer, Best Emerging Institution, Outstanding Industry Partner and more.",
    highlights: ["Multiple award categories", "Peer-nominated recognition", "Best practice awards", "Innovation spotlights"],
  },
];

const upcomingEvents = [
  { date: "March 15-16, 2026", title: "Karnataka Placement Conclave 2026", location: "Bengaluru", status: "Registration Open", type: "Flagship Event" },
  { date: "April 22, 2026", title: "Regional TPO Workshop - North Karnataka", location: "Hubballi", status: "Coming Soon", type: "Workshop" },
  { date: "May 10, 2026", title: "Industry-Academia Summit", location: "Mysuru", status: "Save the Date", type: "Summit" },
];

const studentInitiatives = [
  {
    title: "Career Readiness Program",
    icon: GraduationCap,
    items: ["Resume building workshops", "Mock interviews", "Group discussion training", "Corporate etiquette sessions"],
  },
  {
    title: "Industry Mentorship Program",
    icon: Users,
    description: "Pairing students with industry mentors for career guidance and professional exposure.",
  },
  {
    title: "Internship Facilitation Drive",
    icon: Briefcase,
    description: "Connecting institutions with companies offering structured internship opportunities.",
  },
];

const regularActivities = [
  { title: "Regional Industry Meets", description: "Localized networking forums to strengthen district-level collaborations.", frequency: "Quarterly" },
  { title: "Training & Certification Programs", description: "Skill enhancement programs for students and placement teams.", frequency: "Monthly" },
  { title: "Knowledge Exchange Forums", description: "Panel discussions and workshops focused on recruitment strategies and employability metrics.", frequency: "Bi-monthly" },
];

const GOLD_ICON_STYLE = { background: "linear-gradient(135deg, #C9A870 0%, #EAB308 100%)" };

export function EventsPage({ onNavigate }: EventsPageProps) {
  const ref1 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1, { once: true, margin: "-60px" });
  const ref2 = useRef<HTMLDivElement>(null);
  const inView2 = useInView(ref2, { once: true, margin: "-60px" });

  return (
    <div className="bg-[#F8F9FB]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <section className="bg-[#0F172A] py-20 text-center">
        <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Programs & Activities</p>
        <h1
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Events & Programs
        </h1>
        <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
          Premier gatherings that shape Karnataka's placement ecosystem
        </p>
      </section>

      {/* Annual Flagship Events */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Flagship</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Annual Flagship Events
            </h2>
          </div>
          <div ref={ref1} className="grid md:grid-cols-2 gap-6">
            {flagshipEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={GOLD_ICON_STYLE}>
                      <Icon className="h-6 w-6 text-[#0F172A]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] pt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{event.description}</p>
                  <p className="text-[#0F172A] font-semibold text-xs mb-2">Key Highlights:</p>
                  <ul className="space-y-2">
                    {event.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-[#EAB308] flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">What's Next</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Upcoming Events
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1E293B] rounded-2xl p-7 border border-white/10"
              >
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full mb-5 inline-block ${
                    event.status === "Registration Open"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : event.status === "Coming Soon"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-slate-500/20 text-slate-400"
                  }`}
                >
                  {event.status}
                </span>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={GOLD_ICON_STYLE}>
                    <Calendar className="h-5 w-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <p className="text-[#EAB308] text-xs font-semibold mb-1">{event.type}</p>
                    <h3 className="text-white font-bold text-sm">{event.title}</h3>
                  </div>
                </div>
                <div className="space-y-1.5 mb-5 text-slate-400 text-xs">
                  <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" />{event.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{event.location}</div>
                </div>
                {event.status === "Registration Open" && (
                  <button
                    onClick={() => onNavigate?.("registration")}
                    className="w-full py-2.5 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-lg text-sm transition-all"
                  >
                    Join KTPOA
                  </button>
                )}
                {event.status === "Coming Soon" && (
                  <button className="w-full py-2.5 border border-[#EAB308]/40 text-[#EAB308] rounded-lg text-sm hover:bg-[#EAB308]/10 transition-all flex items-center justify-center gap-2">
                    <Bell className="h-3.5 w-3.5" /> Notify Me
                  </button>
                )}
                {event.status === "Save the Date" && (
                  <button className="w-full py-2.5 border border-white/20 text-slate-400 rounded-lg text-sm hover:bg-white/5 transition-all">
                    Learn More
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Initiatives */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">For Students</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Student-Centric Initiatives
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {studentInitiatives.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={GOLD_ICON_STYLE}>
                    <Icon className="h-7 w-7 text-[#0F172A]" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-base mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  {item.items ? (
                    <ul className="text-left space-y-2 mt-3">
                      {item.items.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                          <span className="text-[#EAB308] mt-0.5">•</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regular Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Year-Round Engagement</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Regular Programs & Activities
            </h2>
          </div>
          <div ref={ref2} className="space-y-4">
            {regularActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F9FB] rounded-2xl p-7 flex items-center justify-between gap-6 border border-slate-100"
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={GOLD_ICON_STYLE}>
                    <Calendar className="h-5 w-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] font-bold text-sm mb-1">{activity.title}</h3>
                    <p className="text-slate-500 text-sm">{activity.description}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#EAB308] bg-[#EAB308]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {activity.frequency}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="events" />
    </div>
  );
}
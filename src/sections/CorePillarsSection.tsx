import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Handshake, Users, BookOpen, GraduationCap } from "lucide-react";

export function CorePillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    {
      icon: Handshake,
      title: "Industry Connect",
      description: "We create strong, sustainable relationships between institutions and employers across diverse sectors.",
      points: [
        "Campus-corporate networking events",
        "Industry roundtables & HR meets",
        "Centralized hiring initiatives",
      ],
    },
    {
      icon: Users,
      title: "Professional Development",
      description: "We believe placement professionals must continuously evolve.",
      points: [
        "Leadership development programs",
        "HR & recruitment seminars",
        "Annual conferences & summits",
      ],
    },
    {
      icon: BookOpen,
      title: "Knowledge Exchange",
      description: "A collaborative platform for placement officers to exchange insights, strategies, and success stories.",
      points: [
        "Best practice workshops",
        "Data-driven recruitment insights",
        "Regional networking forums",
      ],
    },
    {
      icon: GraduationCap,
      title: "Student Empowerment",
      description: "Ensuring every student receives career guidance, skill development, and meaningful opportunities.",
      points: [
        "Career readiness programs",
        "Industry mentorship initiatives",
        "Soft skills training sessions",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FB]" id="core-pillars">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-5 uppercase">
            What We Stand For
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Core Pillars
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Gold gradient icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm"
                  style={{ background: "linear-gradient(135deg, #C9A870 0%, #EAB308 100%)" }}
                >
                  <Icon className="h-7 w-7 text-[#0F172A]" />
                </div>

                <h3
                  className="text-lg font-bold text-[#0F172A] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pillar.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5">{pillar.description}</p>

                <ul className="space-y-2.5">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-slate-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

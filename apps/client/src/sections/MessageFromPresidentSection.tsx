import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function MessageFromPresidentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 bg-[#F4F5F7] relative"
      id="message-from-president"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#EAB308] font-bold tracking-[0.18em] text-xs mb-4 uppercase">
            Message from the President
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Leading With Purpose
          </h2>
        </div>

        {/* Quote card with decorative quote mark */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative gold bracket/quote left */}
          <div className="absolute -left-6 md:-left-12 -top-10 md:-top-16 text-[#E2CD9F] select-none pointer-events-none z-0">
             <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M10 11h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4v8zm0 0v5a4 4 0 0 1-4 4h-1" />
              <path d="M20 11h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4v8zm0 0v5a4 4 0 0 1-4 4h-1" />
            </svg>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative z-10 bg-[#F4F5F7] border-[2px] border-[#2A3B57] rounded-xl p-8 md:p-14"
          >
            <p className="text-[#0F172A] font-bold text-base mb-6">
              Dear Members, Partners and Stakeholders,
            </p>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              It gives me immense pride to lead KTPOA — a collective initiative driven by a shared commitment to student success and institutional excellence. In today's dynamic employment landscape, placement is no longer just a process — it is a strategic function that demands collaboration, foresight and continuous innovation.
            </p>

            <p className="text-[#0F172A] font-bold text-base mb-4">Our focus is clear:</p>
            <ul className="space-y-3 mb-6 pl-2 text-slate-700 text-base">
              {[
                "Foster deeper industry engagement",
                "Promote skill-driven education",
                "Share proven placement strategies",
                "Elevate the professional stature of placement officers",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#334155] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              Together, we are not merely coordinating placements; we are shaping career ecosystems. I invite institutions, industry partners and placement professionals to join hands with KTPOA.
            </p>

            <p className="text-[#0F172A] font-bold text-base mb-6">Let us collaborate, innovate and lead.</p>

            <p className="text-[#C9A870] font-bold text-base">— President, KTPOA</p>
          </motion.div>

          {/* Decorative gold bracket/quote right */}
          <div className="absolute -right-6 md:-right-12 -bottom-10 md:-bottom-16 text-[#E2CD9F] select-none pointer-events-none z-0" style={{ transform: "rotate(180deg)" }}>
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M10 11h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4v8zm0 0v5a4 4 0 0 1-4 4h-1" />
              <path d="M20 11h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4v8zm0 0v5a4 4 0 0 1-4 4h-1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

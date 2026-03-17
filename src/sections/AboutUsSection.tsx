import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function AboutUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="py-24 bg-[#F8F9FB]"
      id="about"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-5 uppercase">Who We Are</p>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About KTPOA
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          The Karnataka Training & Placement Officers Association (KTPOA) is a professional body dedicated to
          uniting placement officers, training coordinators, and career counsellors from educational institutions
          across Karnataka. We serve as the bridge connecting academia with industry, ensuring that students receive
          the guidance, skills, and opportunities they need to thrive in today's competitive job market.
        </p>
      </div>
    </motion.section>
  );
}

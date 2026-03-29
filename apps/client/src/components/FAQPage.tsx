import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { motion, AnimatePresence } from "motion/react";

interface FAQPageProps {
  onNavigate?: (page: string) => void;
}

const faqs = [
  {
    question: "Who can become a member of KTPOA?",
    answer:
      "Training & Placement Officers, career counselors, institutional representatives, HR professionals, and corporate talent acquisition leaders are welcome to join KTPOA.",
  },
  {
    question: "Is membership limited to engineering colleges?",
    answer:
      "No. KTPOA welcomes institutions across all disciplines including engineering, management, arts, science, and other professional streams.",
  },
  {
    question: "How does KTPOA support recruiters?",
    answer:
      "KTPOA supports recruiters through centralized communication, access to curated talent pools across multiple institutions, statewide hiring events, and streamlined campus recruitment coordination.",
  },
  {
    question: "Does KTPOA organize job fairs?",
    answer:
      "Yes, KTPOA periodically conducts regional and state-level recruitment drives, job fairs, and industry-academia conclaves that bring together multiple institutions and recruiters.",
  },
  {
    question: "What are the membership fees?",
    answer:
      "Membership fees vary based on the type of membership (individual TPO, institutional, or corporate). Please contact us or fill out the registration form for detailed information.",
  },
  {
    question: "How can institutions benefit from KTPOA membership?",
    answer:
      "Institutions gain access to centralized employer communication, placement benchmarking reports, shared hiring calendars, reduced duplication of campus drives, and collaborative networking opportunities.",
  },
  {
    question: "Does KTPOA provide training and certifications?",
    answer:
      "Yes, KTPOA organizes regular training programs, workshops, and certification courses for placement officers and career counselors to enhance their professional skills.",
  },
  {
    question: "How can companies partner with KTPOA?",
    answer:
      "Companies can partner with KTPOA by registering as industry partners through our Industry Registration page. This provides access to our statewide network of institutions and talent pools.",
  },
  {
    question: "What is the Karnataka Placement Conclave?",
    answer:
      "The Karnataka Placement Conclave is our annual flagship event that brings together placement officers, HR leaders, and institutional heads to discuss emerging recruitment trends, challenges, and opportunities.",
  },
  {
    question: "Can students directly access KTPOA resources?",
    answer:
      "Students can participate in KTPOA initiatives through their institution's placement cell. We also conduct student-centric programs like career readiness workshops, mentorship programs, and internship facilitation drives.",
  },
  {
    question: "How does KTPOA ensure ethical placement practices?",
    answer:
      "KTPOA members commit to a Code of Ethics that includes transparency in placement reporting, ethical recruitment practices, fair opportunities for all students, and respectful industry engagement.",
  },
  {
    question: "What is the Research & Insights Wing?",
    answer:
      "The Research & Insights Wing focuses on building a data-driven placement ecosystem through annual placement reports, salary and hiring trend analysis, skill gap studies, and employer feedback surveys.",
  },
];

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#F8F9FB]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <section className="bg-[#0F172A] py-20 text-center">
        <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">
          Common Questions
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[#0F172A] font-semibold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#EAB308] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3
            className="text-2xl font-bold text-[#0F172A] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Still Have Questions?
          </h3>
          <p className="text-slate-500 text-sm mb-8">
            We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="px-7 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold rounded-md text-sm transition-all"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate && onNavigate("registration")}
              className="px-7 py-3 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-md text-sm transition-all"
            >
              Join KTPOA
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="faq" />
    </div>
  );
}
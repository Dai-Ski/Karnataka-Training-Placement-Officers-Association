import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { useState } from "react";

interface FAQPageProps {
  onNavigate?: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can become a member of KTPOA?",
      answer:
        "Training & Placement Officers, career counselors, institutional representatives, HR professionals, and corporate talent acquisition leaders are welcome to join KTPOA.",
    },
    {
      question:
        "Is membership limited to engineering colleges?",
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
      question:
        "How can institutions benefit from KTPOA membership?",
      answer:
        "Institutions gain access to centralized employer communication, placement benchmarking reports, shared hiring calendars, reduced duplication of campus drives, and collaborative networking opportunities.",
    },
    {
      question:
        "Does KTPOA provide training and certifications?",
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
        "The Karnataka Placement Conclave is our annual flagship event that brings together placement officers, HR leaders, and institutional heads to discuss emerging recruitment trends, challenges, and opportunities in the placement ecosystem.",
    },
    {
      question: "Can students directly access KTPOA resources?",
      answer:
        "Students can participate in KTPOA initiatives through their institution's placement cell. We also conduct student-centric programs like career readiness workshops, mentorship programs, and internship facilitation drives.",
    },
    {
      question:
        "How does KTPOA ensure ethical placement practices?",
      answer:
        "KTPOA members commit to a Code of Ethics that includes transparency in placement reporting, ethical recruitment practices, fair opportunities for all students, professional collaboration among institutions, and respectful industry engagement.",
    },
    {
      question: "What is the Research & Insights Wing?",
      answer:
        "The Research & Insights Wing focuses on building a data-driven placement ecosystem through annual placement reports, salary and hiring trend analysis, skill gap studies, and employer feedback surveys.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              COMMON QUESTIONS
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900 font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Frequently Asked Questions
            </h1>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`bg-white border border-gray-200 transition-all cursor-pointer hover:shadow-md ${
                  openIndex === index
                    ? "shadow-md"
                    : "shadow-sm"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base md:text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border border-gray-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                We're here to help! Reach out to us and we'll
                get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    onNavigate && onNavigate("contact")
                  }
                  className="px-6 py-3 bg-[#1E293B] hover:bg-[#2D3B4E] text-white font-semibold rounded-md transition-all shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
                <button
                  onClick={() =>
                    onNavigate && onNavigate("registration")
                  }
                  className="px-6 py-3 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black font-semibold rounded-md transition-all shadow-lg hover:shadow-xl"
                >
                  Join KTPOA
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="faq" />
    </div>
  );
}
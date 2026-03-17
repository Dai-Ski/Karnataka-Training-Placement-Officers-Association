import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
} from "lucide-react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { useState } from "react";
import { submitToGoogleSheets } from "../utils/googleSheets";
import { motion } from "motion/react";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const result = await submitToGoogleSheets("contact", data);
      if (result.success) {
        setSubmitStatus({ type: "success", message: "Thank you for contacting us! We'll get back to you soon." });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch {
      setSubmitStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const GOLD_ICON = { background: "linear-gradient(135deg, #C9A870 0%, #EAB308 100%)" };

  const contactCards = [
    { icon: Mail, label: "Email Us", sub: "Send us an email anytime", value: "info@ktpoa.org", href: "mailto:info@ktpoa.org" },
    { icon: Phone, label: "Call Us", sub: "Mon–Fri, 9:00 AM – 6:00 PM", value: "+91 80 1234 5678", href: "tel:+918012345678" },
    { icon: MapPin, label: "Visit Us", sub: "Our office location", value: "Bangalore, Karnataka", href: undefined },
  ];

  const inputClass = "w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#EAB308] focus:border-[#EAB308] outline-none transition-all bg-white text-[#0F172A] placeholder:text-slate-400";

  return (
    <div className="bg-[#F8F9FB]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <section className="bg-[#0F172A] py-20 text-center">
        <p className="text-[#EAB308] font-semibold tracking-[0.18em] text-xs mb-4 uppercase">Get In Touch</p>
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Us
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={GOLD_ICON}>
                    <Icon className="h-7 w-7 text-[#0F172A]" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-base mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {card.label}
                  </h3>
                  <p className="text-slate-400 text-xs mb-3">{card.sub}</p>
                  {card.href ? (
                    <a href={card.href} className="text-[#0F172A] font-semibold text-sm hover:text-[#EAB308] transition-colors">
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-[#0F172A] font-semibold text-sm">{card.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Form + Sidebar */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-[#0F172A] px-7 py-5">
                  <h2 className="text-white font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Send Us a Message
                  </h2>
                </div>
                <div className="p-7">
                  {submitStatus.type && (
                    <div className={`mb-5 p-3.5 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-2 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input type="text" name="name" required className={inputClass + " pl-10"} placeholder="Enter your full name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-2 uppercase tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input type="email" name="email" required className={inputClass + " pl-10"} placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-2 uppercase tracking-wide">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input type="text" name="subject" required className={inputClass + " pl-10"} placeholder="What is this regarding?" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-2 uppercase tracking-wide">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className={inputClass + " resize-none"}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#EAB308] hover:bg-[#FACC15] disabled:opacity-60 text-[#0F172A] font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <h3 className="text-[#0F172A] font-bold text-base mb-5 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Clock className="h-4 w-4 text-[#EAB308]" /> Office Hours
                </h3>
                <div className="space-y-3.5 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-500">{item.day}</span>
                      <span className={`font-semibold ${item.hours === "Closed" ? "text-red-500" : "text-[#0F172A]"}`}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-[#0F172A] rounded-2xl p-7 text-center border border-white/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={GOLD_ICON}>
                  <Clock className="h-6 w-6 text-[#0F172A]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Quick Response
                </h3>
                <p className="text-slate-400 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="contact" />
    </div>
  );
}
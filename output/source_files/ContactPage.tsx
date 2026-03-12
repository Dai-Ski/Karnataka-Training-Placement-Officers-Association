import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { Button } from "./ui/button";
import { useState } from "react";
import { submitToGoogleSheets } from "../utils/googleSheets";

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
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for contacting us! We'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
            GET IN TOUCH
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help.
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-32 mb-16">
            {/* Email Card */}
            <Card className="bg-white border-2 border-gray-200 hover:border-[hsl(var(--gold))] shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Send us an email anytime
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ktpoa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--navy))] hover:text-[hsl(var(--gold))] font-semibold transition-colors inline-block"
                >
                  info@ktpoa.org
                </a>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white border-2 border-gray-200 hover:border-[hsl(var(--gold))] shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mon-Fri, 9:00 AM - 6:00 PM
                </p>
                <p className="text-[hsl(var(--navy))] font-semibold">
                  +91 80 1234 5678
                </p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-white border-2 border-gray-200 hover:border-[hsl(var(--gold))] shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our office location
                </p>
                <p className="text-[hsl(var(--navy))] font-semibold">
                  Bangalore, Karnataka
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Form - Takes 3 columns */}
              <div className="lg:col-span-3">
                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 text-white rounded-t-lg py-4 px-6">
                    <CardTitle className="text-lg">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    {submitStatus.type && (
                      <div
                        className={`mb-5 p-3 rounded-lg text-sm ${
                          submitStatus.type === "success"
                            ? "bg-green-50 border border-green-200 text-green-800"
                            : "bg-red-50 border border-red-200 text-red-800"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-[hsl(var(--gold))] outline-none transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                          Email Address{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-[hsl(var(--gold))] outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            name="subject"
                            required
                            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-[hsl(var(--gold))] outline-none transition-all"
                            placeholder="What is this regarding?"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          className="w-full px-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-[hsl(var(--gold))] outline-none transition-all resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full gradient-gold text-black hover:opacity-90 transition-opacity py-2.5 text-sm font-semibold"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {/* Info Text at Bottom */}
                      <p className="text-center text-xs text-gray-500 pt-2">
                        Fill out the form and we'll get back to you within 24 hours
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                {/* Office Hours */}
                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-lg flex items-center gap-2 text-gray-900">
                      <Clock className="h-5 w-5 text-[hsl(var(--gold))]" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">
                          Monday - Friday
                        </span>
                        <span className="text-gray-900 font-semibold">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">
                          Saturday
                        </span>
                        <span className="text-gray-900 font-semibold">
                          10:00 AM - 2:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">
                          Sunday
                        </span>
                        <span className="text-red-600 font-semibold">
                          Closed
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time Info */}
                <Card className="bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 border-2 border-[hsl(var(--gold))] shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Quick Response
                    </h3>
                    <p className="text-gray-200 text-sm">
                      We typically respond to all inquiries within 24
                      hours during business days.
                    </p>
                  </CardContent>
                </Card>
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
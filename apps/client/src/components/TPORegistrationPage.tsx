import { useState } from "react";
import {
  UserPlus,
  Building,
  Mail,
  Phone,
  User,
  MapPin,
  Briefcase,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { submitToGoogleSheets } from "../utils/googleSheets";
import { toast } from "sonner";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { motion } from "framer-motion";

interface TPORegistrationPageProps {
  onNavigate?: (page: string) => void;
}

export function TPORegistrationPage({
  onNavigate,
}: TPORegistrationPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [institutionType, setInstitutionType] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "TPO Registration",
      fullName: formData.get("fullName"),
      designation: formData.get("designation"),
      institution: formData.get("institution"),
      institutionType: formData.get("institutionType"),
      institutionTypeOther: formData.get(
        "institutionTypeOther",
      ),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      state: formData.get("state"),
      experience: formData.get("experience"),
    };

    try {
      const result = await submitToGoogleSheets("tpo", data);

      if (result.success) {
        toast.success("Registration Successful!", {
          description:
            "Thank you for registering. We will review your application and get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Submission Failed", {
          description: result.message,
        });
      }
    } catch (error) {
      toast.error("Error", {
        description:
          "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <section className="bg-[#0F172A] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#EAB308_0%,_transparent_70%)] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center justify-center gap-6 mb-8"
          >
            <div className="p-5 bg-[#EAB308]/10 rounded-2xl border border-[#EAB308]/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <UserPlus className="h-14 w-14 text-[#EAB308]" />
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              TPO Registration
            </h1>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Join KTPOA's prestigious network of Training & Placement
            Officers and elevate your professional journey.
          </motion.p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
            <CardHeader className="bg-slate-50 border-b border-slate-100 p-10">
              <CardTitle className="text-3xl text-slate-900 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Member Details
              </CardTitle>
              <CardDescription className="text-lg text-slate-500">
                Please provide your institutional information for verification.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10">
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Full Name{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="designation"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Designation{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <Input
                    id="designation"
                    name="designation"
                    placeholder="e.g., Training & Placement Officer"
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="institution"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Institution Name{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <Input
                    id="institution"
                    name="institution"
                    placeholder="Name of your institution"
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="institutionType"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Institution Type{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <select
                    id="institutionType"
                    name="institutionType"
                    className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EAB308] focus:bg-white transition-all text-slate-600"
                    required
                    onChange={(e) =>
                      setInstitutionType(e.target.value)
                    }
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select institution type
                    </option>
                    <option value="Engineering College">
                      Engineering College
                    </option>
                    <option value="University">
                      University
                    </option>
                    <option value="Business School">
                      Business School
                    </option>
                    <option value="Arts & Science College">
                      Arts & Science College
                    </option>
                    <option value="Polytechnic">
                      Polytechnic
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {institutionType === "Other" && (
                  <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label
                      htmlFor="institutionTypeOther"
                      className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                    >
                      Specify Institution Type{" "}
                      <span className="text-[#EAB308]">*</span>
                    </label>
                    <Input
                      id="institutionTypeOther"
                      name="institutionTypeOther"
                      placeholder="Enter institution type"
                      required
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                    >
                      City{" "}
                      <span className="text-[#EAB308]">*</span>
                    </label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                    >
                      State{" "}
                      <span className="text-[#EAB308]">*</span>
                    </label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="State"
                      defaultValue="Karnataka"
                      required
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Email Address{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@institution.edu"
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Phone Number{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="experience"
                    className="block text-sm font-semibold tracking-wide text-slate-700 uppercase"
                  >
                    Years of Experience{" "}
                    <span className="text-[#EAB308]">*</span>
                  </label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    placeholder="e.g., 5"
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#EAB308] hover:bg-[#D9A307] text-[#0F172A] font-bold py-7 rounded-md transition-all duration-300 shadow-lg text-lg"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting Your Application..."
                    : "Complete Registration"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-lg italic">
              For membership queries, contact us at{" "}
              <a
                href="mailto:membership@ktpoa.org"
                className="text-[#EAB308] hover:underline font-bold"
              >
                membership@ktpoa.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="tpo-registration" />
    </div>
  );
}
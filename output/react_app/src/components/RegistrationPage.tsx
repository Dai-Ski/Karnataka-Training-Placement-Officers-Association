import { ImageWithFallback } from "@/components/ImageWithFallback";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Building2, UserPlus, GraduationCap } from "lucide-react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { useEffect } from "react";

interface RegistrationPageProps {
  onNavigate?: (page: string) => void;
}

export function RegistrationPage({
  onNavigate,
}: RegistrationPageProps) {
  const handleRegistrationClick = (type: string) => {
    if (onNavigate) {
      onNavigate(type);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll to registration type section on mount
  useEffect(() => {
    const registrationSection = document.getElementById("registration-types");
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Registration Options */}
      <section id="registration-types" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Select Your Registration Type
            </h2>
            <p className="text-lg text-gray-600">
              Join Karnataka's premier placement network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Industry Registration */}
            <Card
              className="border-2 border-[#C9A870]/30 shadow-lg hover:shadow-xl hover:border-[#C9A870] transition-all cursor-pointer group"
              onClick={() =>
                handleRegistrationClick("industry-registration")
              }
            >
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-[#1E293B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-12 h-12 text-[#C9A870]" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-center text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                  Industry Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center mb-4">
                  For companies and organizations looking to
                  connect with talented students across
                  Karnataka
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Access to statewide talent pool</li>
                  <li>✓ Streamlined campus recruitment</li>
                  <li>✓ Direct institutional engagement</li>
                  <li>✓ Employer branding opportunities</li>
                </ul>
                <button className="w-full mt-6 px-4 py-3 bg-[#1E293B] hover:bg-[#2D3748] text-white font-semibold rounded-md transition-all">
                  Register as Industry Partner
                </button>
              </CardContent>
            </Card>

            {/* TPO Registration */}
            <Card
              className="border-2 border-[#C9A870]/30 shadow-lg hover:shadow-xl hover:border-[#C9A870] transition-all cursor-pointer group"
              onClick={() =>
                handleRegistrationClick("tpo-registration")
              }
            >
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-[#1E293B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserPlus className="w-12 h-12 text-[#C9A870]" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-center text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                  TPO Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center mb-4">
                  For Training & Placement Officers seeking
                  professional development and collaboration
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Professional networking</li>
                  <li>✓ Best practices sharing</li>
                  <li>✓ Industry connections</li>
                  <li>✓ Training & certification</li>
                </ul>
                <button className="w-full mt-6 px-4 py-3 bg-[#C9A870] hover:bg-[#B89860] text-black font-semibold rounded-md transition-all">
                  Register as TPO Member
                </button>
              </CardContent>
            </Card>

            {/* Student Registration */}
            <Card
              className="border-2 border-[#C9A870]/30 shadow-lg hover:shadow-xl hover:border-[#C9A870] transition-all cursor-pointer group"
              onClick={() =>
                handleRegistrationClick("student-registration")
              }
            >
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-[#1E293B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-12 h-12 text-[#C9A870]" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-center text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                  Student Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center mb-4">
                  For students looking to enhance their career
                  readiness and access opportunities
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Career guidance resources</li>
                  <li>✓ Skill development workshops</li>
                  <li>✓ Job placement opportunities</li>
                  <li>✓ Industry mentorship</li>
                </ul>
                <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-[#1E293B] to-[#334155] hover:from-[#2D3748] hover:to-[#475569] text-white font-semibold rounded-md transition-all">
                  Register as Student
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="registration" />
    </div>
  );
}
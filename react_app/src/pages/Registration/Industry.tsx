import { useState } from "react";
import { EmailOTPField } from "@/components/shared/EmailOTPField";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Users,
  Briefcase,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitRegistration } from "@/utils/api";
import { toast } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

interface IndustryRegistrationPageProps {
  onNavigate?: (page: string) => void;
}

export function IndustryRegistrationPage({
  onNavigate,
}: IndustryRegistrationPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [industry, setIndustry] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!verifiedEmail) {
      toast.error("Email not verified", {
        description: "Please verify your email address before submitting.",
      });
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "Industry Registration",
      companyName: formData.get("companyName"),
      industry: formData.get("industry"),
      industryOther: formData.get("industryOther"),
      companySize: formData.get("companySize"),
      contactPersonName: formData.get("contactPersonName"),
      designation: formData.get("designation"),
      email: verifiedEmail,
      phone: formData.get("phone"),
      website: formData.get("website"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      hiringNeeds: formData.get("hiringNeeds"),
    };

    try {
      const result = await submitRegistration(
        "industry",
        data,
      );

      if (result.success) {
        setVerifiedEmail("");
        toast.success("Registration Successful!", {
          description:
            "Thank you for registering. Our team will contact you soon to discuss partnership opportunities.",
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
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-[#1E293B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="h-12 w-12 text-[hsl(var(--gold))]" />
            <h1
              className="text-5xl font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Industry Registration
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Partner with KTPOA to Access Top Talent from
            Karnataka
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Industry Partner Registration
              </CardTitle>
              <CardDescription>
                Register your organization to connect with
                talented students and collaborate with KTPOA
                member institutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Company Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Industry/Sector{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    onChange={(e) =>
                      setIndustry(e.target.value)
                    }
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select industry
                    </option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="Manufacturing">
                      Manufacturing
                    </option>
                    <option value="Finance & Banking">
                      Finance & Banking
                    </option>
                    <option value="Healthcare">
                      Healthcare
                    </option>
                    <option value="Education">Education</option>
                    <option value="Retail & E-commerce">
                      Retail & E-commerce
                    </option>
                    <option value="Telecommunications">
                      Telecommunications
                    </option>
                    <option value="Construction">
                      Construction
                    </option>
                    <option value="Consulting">
                      Consulting
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {industry === "Other" && (
                  <div>
                    <label
                      htmlFor="industryOther"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Specify Other Industry{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="industryOther"
                      name="industryOther"
                      placeholder="Enter your industry"
                      required
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="companySize"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Company Size{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select company size
                    </option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">
                      51-200 employees
                    </option>
                    <option value="201-500">
                      201-500 employees
                    </option>
                    <option value="501-1000">
                      501-1000 employees
                    </option>
                    <option value="1000+">
                      1000+ employees
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contactPersonName"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Contact Person Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="contactPersonName"
                    name="contactPersonName"
                    placeholder="Full name of contact person"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Designation{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="designation"
                    name="designation"
                    placeholder="e.g., HR Manager, Talent Acquisition Lead"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Email Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <EmailOTPField
                    onVerified={(email) => setVerifiedEmail(email)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Phone Number{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="contact number"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Company Website
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Office Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Complete office address"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      City{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      State{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="State"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hiringNeeds"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Current Hiring Needs/Requirements
                  </label>
                  <Textarea
                    id="hiringNeeds"
                    name="hiringNeeds"
                    placeholder="Describe your current and upcoming hiring requirements, preferred skills, etc."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1E293B] hover:bg-[#2D3748] disabled:opacity-50"
                  size="lg"
                  disabled={isSubmitting || !verifiedEmail}
                  title={!verifiedEmail ? "Please verify your email first" : undefined}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Registration"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              For partnership queries, contact us at{" "}
              <a
                href="mailto:industry@ktpoa.org"
                className="text-purple-600 hover:underline"
              >
                industry@ktpoa.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="industry-registration" />
    </div>
  );
}
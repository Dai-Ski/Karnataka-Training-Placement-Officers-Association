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
import { submitToGoogleSheets } from "./googleSheets";
import { toast } from "sonner";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

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
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-[#1E293B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <UserPlus className="h-12 w-12 text-[hsl(var(--gold))]" />
            <h1
              className="text-5xl font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              TPO Registration
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Join KTPOA's Network of Training & Placement
            Officers
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                TPO Member Registration Form
              </CardTitle>
              <CardDescription>
                Fill in your details to apply for KTPOA
                membership. All fields are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Full Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
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
                    placeholder="e.g., Training & Placement Officer"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Institution Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="institution"
                    name="institution"
                    placeholder="Name of your institution"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="institutionType"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Institution Type{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="institutionType"
                    name="institutionType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <div>
                    <label
                      htmlFor="institutionTypeOther"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Specify Institution Type{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="institutionTypeOther"
                      name="institutionTypeOther"
                      placeholder="Enter institution type"
                      required
                    />
                  </div>
                )}

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
                      defaultValue="Karnataka"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Email Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@institution.edu"
                    required
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
                    htmlFor="experience"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Years of Experience in Placement{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    placeholder="e.g., 5"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C9A870] hover:bg-[#B89860] text-black"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              For membership queries, contact us at{" "}
              <a
                href="mailto:membership@ktpoa.org"
                className="text-blue-600 hover:underline"
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
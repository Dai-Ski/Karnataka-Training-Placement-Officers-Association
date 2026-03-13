import { useState } from "react";
import {
  GraduationCap,
  Mail,
  Phone,
  Book,
  Award,
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
import { submitToGoogleSheets } from "@/utils/googleSheets";
import { toast } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

interface StudentRegistrationPageProps {
  onNavigate?: (page: string) => void;
}

export function StudentRegistrationPage({
  onNavigate,
}: StudentRegistrationPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "Student Registration",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      institution: formData.get("institution"),
      course: formData.get("course"),
      courseOther: formData.get("courseOther"),
      specialization: formData.get("specialization"),
      yearOfStudy: formData.get("yearOfStudy"),
      expectedGraduation: formData.get("expectedGraduation"),
      cgpa: formData.get("cgpa"),
      skills: formData.get("skills"),
      interests: formData.get("interests"),
      careerGoals: formData.get("careerGoals"),
    };

    try {
      const result = await submitToGoogleSheets(
        "student",
        data,
      );

      if (result.success) {
        toast.success("Registration Successful!", {
          description:
            "Thank you for registering. You will receive updates about placement opportunities and career events.",
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
            <GraduationCap className="h-12 w-12 text-[hsl(var(--gold))]" />
            <h1
              className="text-5xl font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Student Registration
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Register to Access Exclusive Career Opportunities
            and Guidance
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Student Career Registration
              </CardTitle>
              <CardDescription>
                Register with KTPOA to receive placement
                opportunities, career guidance, and skill
                development resources.
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
                    placeholder="your email"
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
                    placeholder="your contact number"
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
                    placeholder="Name of your college/university"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Course/Degree{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    onChange={(e) => setCourse(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your course
                    </option>
                    <option value="B.E/B.Tech">
                      B.E/B.Tech
                    </option>
                    <option value="M.E/M.Tech">
                      M.E/M.Tech
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="BBA">BBA</option>
                    <option value="B.Com">B.Com</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {course === "Other" && (
                  <div>
                    <label
                      htmlFor="courseOther"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Specify Course/Degree{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="courseOther"
                      name="courseOther"
                      placeholder="Enter your course/degree"
                      required
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="specialization"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Specialization/Branch{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="specialization"
                    name="specialization"
                    placeholder="e.g., Computer Science, Mechanical, Marketing"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="yearOfStudy"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Year of Study{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="yearOfStudy"
                      name="yearOfStudy"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select year
                      </option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Final Year">
                        Final Year
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="expectedGraduation"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Expected Graduation{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="expectedGraduation"
                      name="expectedGraduation"
                      type="month"
                      required
                      className="[&::-webkit-calendar-picker-indicator]:invert-0 [&::-webkit-calendar-picker-indicator]:opacity-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cgpa"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    CGPA/Percentage{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="cgpa"
                    name="cgpa"
                    placeholder="e.g., 8.5 CGPA or 85%"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="skills"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Technical Skills{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="skills"
                    name="skills"
                    placeholder="List your technical skills (e.g., Python, Java, Data Analysis, Marketing Tools, etc.)"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="interests"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Career Interests
                  </label>
                  <Textarea
                    id="interests"
                    name="interests"
                    placeholder="What industries or job roles are you interested in?"
                    rows={3}
                  />
                </div>

                <div>
                  <label
                    htmlFor="careerGoals"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Career Goals
                  </label>
                  <Textarea
                    id="careerGoals"
                    name="careerGoals"
                    placeholder="Share your short-term and long-term career aspirations"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E293B] to-[#334155] hover:from-[#2D3748] hover:to-[#475569] text-white"
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
              For student queries, contact us at{" "}
              <a
                href="mailto:students@ktpoa.org"
                className="text-green-600 hover:underline"
              >
                students@ktpoa.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="student-registration" />
    </div>
  );
}
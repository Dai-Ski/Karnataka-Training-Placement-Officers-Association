import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Briefcase, CheckCircle, TrendingUp, Award, Target } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Button } from '@/components/ui/button';

interface BenefitsPageProps {
  onNavigate?: (page: string) => void;
}

export function BenefitsPage({ onNavigate }: BenefitsPageProps) {
  return (
    <div className="bg-white">
      {/* Member Benefits - Main Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              WHY JOIN US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Member Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Institutions */}
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Building className="h-10 w-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">For Institutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Access to centralized employer communication</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Placement benchmarking reports</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Shared hiring calendars</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reduced duplication of campus drives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* For Placement Officers */}
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Users className="h-10 w-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">For Placement Officers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Professional recognition</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Training certifications</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Peer knowledge exchange</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Leadership opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* For Corporate Partners */}
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Briefcase className="h-10 w-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">For Corporate Partners</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Access to curated talent pools</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Streamlined campus coordination</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Employer branding opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Participation in conclaves and job fairs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join KTPOA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              MEMBERSHIP VALUE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Join KTPOA?
            </h2>
            <p className="text-lg text-gray-600">Experience the power of collaborative success</p>
          </div>
          <Card className="bg-white border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Access to statewide industry network</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Direct engagement with top recruiters</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Continuous professional development</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Shared institutional insights</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Strong collaborative support system</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Recognition and excellence awards</span>
                </li>
              </ul>
              <p className="text-[hsl(var(--gold))] font-semibold mt-8 text-center text-xl">
                Together, we create greater placement outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Benefits Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              COMPREHENSIVE SUPPORT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Ecosystem Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Networking & Collaboration */}
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[hsl(var(--navy))] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Networking & Collaboration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Statewide placement officer community</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Industry leader connections</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Multi-institution collaboration platforms</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Regional and district-level meets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Professional Growth */}
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[hsl(var(--navy))] rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Professional Growth</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Exclusive training workshops</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Industry certification programs</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Leadership development initiatives</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Conference participation opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Resource Access */}
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[hsl(var(--navy))] rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Resource Access</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Placement analytics and benchmarks</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Recruitment trend reports</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Best practice documentation</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Shared hiring calendars</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recognition & Awards */}
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[hsl(var(--navy))] rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-[hsl(var(--gold))]" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Recognition & Awards</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Annual excellence awards</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Best placement officer recognition</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Innovation and achievement spotlights</span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <span className="text-[hsl(var(--gold))] mr-1">•</span>
                    <span>Peer-nominated honors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              OPEN TO ALL
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who Can Join?
            </h2>
            <p className="text-lg text-gray-600">KTPOA welcomes all stakeholders in the placement ecosystem</p>
          </div>
          <Card className="bg-white border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-700">Training & Placement Officers</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-700">Career Counselors</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-700">Institutional Heads</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-700">HR Professionals</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-700">Corporate Talent Acquisition Leaders</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-gray-700">Students seeking career guidance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 gradient-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              OUR IMPACT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Impact in Numbers
            </h2>
            <p className="text-lg text-gray-300">Building Karnataka's largest placement network</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-[hsl(var(--gold))] mb-2">150+</p>
                <p className="text-gray-200">Member Institutions</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-[hsl(var(--gold))] mb-2">500+</p>
                <p className="text-gray-200">Placement Professionals</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-[hsl(var(--gold))] mb-2">300+</p>
                <p className="text-gray-200">Corporate Partners</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center">
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-[hsl(var(--gold))] mb-2">25K+</p>
                <p className="text-gray-200">Students Impacted</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-center mt-6">
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-[hsl(var(--gold))] mb-2">1,200+</p>
              <p className="text-gray-200 text-lg">Annual Recruitment Drives Facilitated</p>
            </CardContent>
          </Card>
          <div className="mt-10 text-center">
            <Button 
              className="gradient-gold text-black hover:opacity-90 transition-opacity px-8 py-6 text-lg"
              onClick={() => onNavigate?.('registration')}
            >
              Join KTPOA
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="benefits" />
    </div>
  );
}
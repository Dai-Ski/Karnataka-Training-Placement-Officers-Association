import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Mic,
  ClipboardList,
  CheckCircle,
  Bell,
  MapPin,
  Tag,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface EventsPageProps {
  onNavigate?: (page: string) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/api/events`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Mic,
      Users,
      Award,
      Briefcase,
      GraduationCap,
      ClipboardList,
      Calendar
    };
    return icons[iconName] || Calendar;
  };

  const flagshipEvents = events
    .filter((e) => e.section === "flagship")
    .map((e) => ({
      ...e,
      icon: getIcon(e.icon),
    }));

  const upcomingEvents = events
    .filter((e) => e.section === "upcoming")
    .map((e) => ({
      ...e,
      icon: getIcon(e.icon),
    }));

  const studentInitiatives = events
    .filter((e) => e.section === "student")
    .map((e) => ({
      ...e,
      icon: getIcon(e.icon),
      items: e.highlights,
    }));

  const regularActivities = events
    .filter((e) => e.section === "regular")
    .map((e) => ({
      ...e,
      icon: getIcon(e.icon),
      frequency: e.type, // Use type as frequency for regular events
    }));

  return (
    <div className="bg-white">
      {/* Annual Flagship Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              PROGRAMS & ACTIVITIES
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Annual Flagship Events
            </h2>
            <p className="text-lg text-gray-600">
              Premier gatherings that shape Karnataka's
              placement ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {flagshipEvents.map((event, index) => {
              const Icon = event.icon;

              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[hsl(var(--navy))] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-[hsl(var(--gold))]" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 pt-2">
                        {event.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    {event.highlights && event.highlights.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-800 mb-2">
                          Key Highlights:
                        </p>
                        <ul className="space-y-2">
                          {event.highlights.map(
                            (highlight, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />
                                {highlight}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              WHAT'S NEXT
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendars for these important dates
            </p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide no-scrollbar">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex-none w-[300px] md:w-[380px] snap-center">
                <Card
                  className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          event.status === "Registration Open"
                            ? "bg-green-100 text-green-700"
                            : event.status === "Coming Soon"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 gradient-gold p-3 rounded-lg">
                        <event.icon className="h-6 w-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[hsl(var(--gold))] font-semibold mb-2">
                          {event.type}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student-Centric Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              FOR STUDENTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student-Centric Initiatives
            </h2>
            <p className="text-lg text-gray-600">
              Empowering the next generation of professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {studentInitiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                >
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <div className="gradient-gold w-14 h-14 rounded-full flex items-center justify-center mb-3">
                        <Icon className="h-7 w-7 text-black" />
                      </div>
                      <CardTitle className="text-lg">
                        {initiative.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {initiative.description && (
                      <p className="text-sm text-gray-700">
                        {initiative.description}
                      </p>
                    )}
                    {initiative.items && initiative.items.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          A structured framework including:
                        </p>
                        <ul className="space-y-2">
                          {initiative.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-[hsl(var(--gold))] mt-1">
                                •
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regular Programs & Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[hsl(var(--gold))] font-semibold tracking-widest text-sm mb-3">
              YEAR-ROUND ENGAGEMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Regular Programs & Activities
            </h2>
            <p className="text-lg text-gray-600">
              Continuous engagement throughout the year
            </p>
          </div>

          <div className="space-y-6">
            {regularActivities.map((activity, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
                        <activity.icon className="h-5 w-5 text-black" />
                      </div>
                      {activity.title}
                    </CardTitle>
                    <span className="text-sm font-semibold text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 px-3 py-1 rounded-full">
                      {activity.frequency}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="events" />
    </div>
  );
}
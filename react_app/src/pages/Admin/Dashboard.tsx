import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Trash2, Plus, Calendar, MapPin, Tag, Type as TypeIcon, 
  Pencil, Mic, Users, Award, GraduationCap, Briefcase, ClipboardList 
} from "lucide-react";
import { toast } from "sonner";

interface Event {
  _id: string;
  title: string;
  date: string;
  location: string;
  status: string;
  type: string;
  section: string;
  description: string;
  highlights: string[];
  icon: string;
}

export function AdminDashboardPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportUrl, setExportUrl] = useState<string | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    location: "",
    status: "Registration Open",
    type: "Upcoming Event",
    section: "upcoming",
    description: "",
    highlights: "", // Comma-separated in form
    icon: "Calendar",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/events`);
      const data = await response.json();
      
      if (response.ok && Array.isArray(data)) {
        setEvents(data);
      } else {
        setEvents([]);
        toast.error(data.message || "Failed to load events");
      }
    } catch (error) {
      setEvents([]);
      toast.error("Failed to fetch events");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    // Prepare data (convert highlights string to array)
    const eventData = {
      ...eventForm,
      highlights: eventForm.highlights.split(',').map(h => h.trim()).filter(h => h !== ""),
    };

    try {
      let response;
      if (editingEventId) {
        // Update existing event
        response = await fetch(`${apiUrl}/api/events/${editingEventId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        });
      } else {
        // Add new event
        response = await fetch(`${apiUrl}/api/events`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        });
      }

      if (response.ok) {
        toast.success(editingEventId ? "Event updated successfully" : "Event added successfully");
        resetForm();
        fetchEvents();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to save event");
      }
    } catch (error) {
      toast.error("Network error. Failed to save event.");
    }
  };

  const resetForm = () => {
    setEventForm({
      title: "",
      date: "",
      location: "",
      status: "Registration Open",
      type: "Upcoming Event",
      section: "upcoming",
      description: "",
      highlights: "",
      icon: "Calendar",
    });
    setEditingEventId(null);
  };

  const handleEditClick = (event: Event) => {
    setEditingEventId(event._id);
    setEventForm({
      title: event.title,
      date: event.date,
      location: event.location || "",
      status: event.status || "",
      type: event.type || "",
      section: event.section || "upcoming",
      description: event.description || "",
      highlights: (event.highlights || []).join(', '),
      icon: event.icon || "Calendar",
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/events/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("Event deleted");
        fetchEvents();
      }
    } catch (error) {
      toast.error("Failed to delete event");
    }
  };

  const handleExportToSheets = async () => {
    setIsExporting(true);
    setExportUrl(null);
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    try {
      const response = await fetch(`${apiUrl}/api/admin/export-users`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.success) {
        setExportUrl(data.url);
        toast.success("Users exported successfully!");
      } else {
        toast.error(data.message || "Failed to export users");
      }
    } catch (error) {
      toast.error("An error occurred during export");
    } finally {
      setIsExporting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    window.location.reload();
  };

  const sections = [
    { id: 'upcoming', label: 'Upcoming Events' },
    { id: 'flagship', label: 'Annual Flagship Events' },
    { id: 'student', label: 'Student-Centric Initiatives' },
    { id: 'regular', label: 'Regular Programs & Activities' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold font-serif text-[hsl(var(--navy))]">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Manage website content and events</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="border-red-200 text-red-600 hover:bg-red-50">
          Logout
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add/Edit Event Form */}
        <Card className="lg:col-span-1 shadow-xl border-t-4 border-t-[hsl(var(--gold))] h-fit sticky top-24">
          <CardHeader>
            <CardTitle className="text-xl flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-[hsl(var(--gold))]" />
                {editingEventId ? "Edit Event" : "Add New Event"}
              </span>
              {editingEventId && (
                <Button variant="ghost" size="sm" onClick={resetForm} className="text-xs">
                  Cancel Edit
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <div className="relative">
                  <TypeIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    required
                    className="pl-10"
                    placeholder="Event Title"
                    value={eventForm.title}
                    onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    required
                    className="pl-10"
                    placeholder="e.g. March 15, 2026"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location / Frequency</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="e.g. Bengaluru or Monthly"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category Section</label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  value={eventForm.section}
                  onChange={(e) => setEventForm({ ...eventForm, section: e.target.value })}
                >
                  {sections.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Type & Status</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Type (e.g. Workshop)"
                    value={eventForm.type}
                    onChange={(e) => setEventForm({ ...eventForm, type: e.target.value })}
                  />
                  <Input
                    placeholder="Status (e.g. Open)"
                    value={eventForm.status}
                    onChange={(e) => setEventForm({ ...eventForm, status: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Icon</label>
                <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-gray-50/50">
                  {[
                    { name: 'Calendar', icon: Calendar },
                    { name: 'Mic', icon: Mic },
                    { name: 'Users', icon: Users },
                    { name: 'Award', icon: Award },
                    { name: 'GraduationCap', icon: GraduationCap },
                    { name: 'Briefcase', icon: Briefcase },
                    { name: 'ClipboardList', icon: ClipboardList },
                  ].map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setEventForm({ ...eventForm, icon: item.name })}
                      className={`p-2 rounded-md transition-all ${
                        eventForm.icon === item.name 
                          ? "bg-[hsl(var(--gold))] text-white shadow-md scale-110" 
                          : "bg-white text-gray-400 hover:text-gray-600 border"
                      }`}
                      title={item.name}
                    >
                      <item.icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Highlights (comma separated)</label>
                <Input
                  placeholder="Feature 1, Feature 2, Feature 3"
                  value={eventForm.highlights}
                  onChange={(e) => setEventForm({ ...eventForm, highlights: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="w-full p-3 rounded-md border border-input bg-background text-sm min-h-[80px]"
                  placeholder="Brief description..."
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full gradient-gold text-black font-semibold py-6">
                {editingEventId ? "Update Event" : "Create Event"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Event List Grouped by Section */}
        <div className="lg:col-span-2 space-y-12">
          {sections.map((section) => {
            const sectionEvents = events.filter(e => e.section === section.id);
            return (
              <div key={section.id}>
                <h2 className="text-xl font-bold text-[hsl(var(--navy))] mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-[hsl(var(--gold))] rounded-full"></div>
                  {section.label}
                  <span className="text-sm font-normal text-gray-400 ml-2">({sectionEvents.length})</span>
                </h2>

                {isLoading ? (
                  <p className="py-4 text-gray-500">Loading...</p>
                ) : sectionEvents.length === 0 ? (
                  <p className="py-8 text-gray-400 border border-dashed rounded-lg text-center">No {section.label} found.</p>
                ) : (
                  <div className="grid gap-4">
                    {sectionEvents.map((event) => {
                      const IconComponent = [
                        { name: 'Calendar', icon: Calendar },
                        { name: 'Mic', icon: Mic },
                        { name: 'Users', icon: Users },
                        { name: 'Award', icon: Award },
                        { name: 'GraduationCap', icon: GraduationCap },
                        { name: 'Briefcase', icon: Briefcase },
                        { name: 'ClipboardList', icon: ClipboardList },
                      ].find(i => i.name === event.icon)?.icon || Calendar;

                      return (
                        <Card key={event._id} className="hover:shadow-md transition-shadow group">
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                                <IconComponent className="h-6 w-6 text-[hsl(var(--gold))]" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">{event.title}</h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {event.date}
                                  </span>
                                  {event.location && (
                                    <span className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" /> {event.location}
                                    </span>
                                  )}
                                  <span className="flex items-center gap-1">
                                    <Tag className="h-3 w-3" /> {event.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                                onClick={() => handleEditClick(event)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-400 hover:text-red-600 hover:bg-red-50"
                                onClick={() => handleDeleteEvent(event._id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Export Section */}
      <Card className="mt-12 border-t-4 border-t-[hsl(var(--gold))]">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[hsl(var(--navy))]">Export Registerated Users</h3>
              <p className="text-gray-500 text-sm">Download all Student, TPO, and Industry registration data directly to a Google Sheet.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3">
              <Button 
                onClick={handleExportToSheets}
                disabled={isExporting}
                className="gradient-gold text-black font-bold h-12 px-8 flex items-center gap-2"
              >
                {isExporting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                    Generating Sheet...
                  </>
                ) : (
                  <>
                    <ClipboardList className="h-5 w-5" />
                    Export to Google Sheets
                  </>
                )}
              </Button>
              
              {exportUrl && (
                <a 
                  href={exportUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-semibold underline flex items-center gap-1"
                >
                  View Generated Sheet <Plus className="h-3 w-3 rotate-45" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

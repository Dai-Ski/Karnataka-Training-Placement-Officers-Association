import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, Calendar, MapPin, Tag, Type as TypeIcon } from "lucide-react";
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
}

export function AdminDashboardPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    status: "Registration Open",
    type: "Upcoming Event",
    section: "upcoming",
    description: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      toast.error("Failed to fetch events");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      if (response.ok) {
        toast.success("Event added successfully");
        setNewEvent({
          title: "",
          date: "",
          location: "",
          status: "Registration Open",
          type: "Upcoming Event",
          section: "upcoming",
          description: "",
        });
        fetchEvents();
      }
    } catch (error) {
      toast.error("Failed to add event");
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
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

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    window.location.reload();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold font-serif text-[hsl(var(--navy))]">
            Event Management
          </h1>
          <p className="text-gray-600 mt-2">Manage all website events from here</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="border-red-200 text-red-600 hover:bg-red-50">
          Logout
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add Event Form */}
        <Card className="lg:col-span-1 shadow-xl border-t-4 border-t-[hsl(var(--gold))]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Plus className="h-5 w-5 text-[hsl(var(--gold))]" />
              Add New Event
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <div className="relative">
                  <TypeIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    required
                    className="pl-10"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
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
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="e.g. Bengaluru"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Section</label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  value={newEvent.section}
                  onChange={(e) => setNewEvent({ ...newEvent, section: e.target.value })}
                >
                  <option value="upcoming">Upcoming Events</option>
                  <option value="flagship">Flagship Events</option>
                  <option value="student">Student Initiatives</option>
                  <option value="regular">Regular Programs</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Type / Status</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Type (e.g. Workshop)"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                  />
                  <Input
                    placeholder="Status (e.g. Open)"
                    value={newEvent.status}
                    onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="w-full p-3 rounded-md border border-input bg-background text-sm min-h-[100px]"
                  placeholder="Brief description..."
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full gradient-gold text-black font-semibold">
                Add Event
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Event List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-[hsl(var(--navy))] mb-4">Current Events</h2>
          {isLoading ? (
            <p className="text-center py-10 text-gray-500">Loading events...</p>
          ) : events.length === 0 ? (
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-200 p-20 text-center">
              <p className="text-gray-400">No events found. Add your first event!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {events.map((event) => (
                <Card key={event._id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-[hsl(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{event.title}</h3>
                        <div className="flex gap-4 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Tag className="h-3 w-3" /> {event.section}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleDeleteEvent(event._id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

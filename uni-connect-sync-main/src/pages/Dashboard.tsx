import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, Users, LogOut, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const announcements = [
    {
      id: 1,
      title: "Mid-term Examinations Schedule Released",
      content: "The mid-term examination schedule for all departments has been published. Please check your department notice board.",
      date: "2024-01-15",
      author: "Academic Office",
      badge: "Important"
    },
    {
      id: 2,
      title: "Winter Festival 2024",
      content: "Join us for the annual Winter Festival featuring cultural performances, food stalls, and competitions.",
      date: "2024-01-12",
      author: "Student Council",
      badge: "Event"
    },
    {
      id: 3,
      title: "Library Hours Extended",
      content: "Due to upcoming exams, the library will remain open until 10 PM on weekdays.",
      date: "2024-01-10",
      author: "Library Administration",
      badge: "Update"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Tech Symposium 2024",
      date: "2024-01-25",
      time: "10:00 AM",
      location: "Main Auditorium",
      registered: 145,
      capacity: 200
    },
    {
      id: 2,
      name: "Career Fair",
      date: "2024-02-05",
      time: "9:00 AM",
      location: "Sports Complex",
      registered: 320,
      capacity: 500
    },
    {
      id: 3,
      name: "Annual Cultural Night",
      date: "2024-02-14",
      time: "6:00 PM",
      location: "Open Air Theatre",
      registered: 450,
      capacity: 600
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-lg font-bold text-white">CC</span>
              </div>
              <h1 className="text-xl font-bold">Campus Connect</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/auth">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-slide-up">
          <Card className="gradient-hero text-white border-0">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h2>
              <p className="text-white/90">Here's what's happening in your campus today</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-elevated transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">New Announcements</CardTitle>
              <Bell className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,451</div>
              <p className="text-xs text-muted-foreground">Online now: 342</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="announcements" className="space-y-6">
          <TabsList>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements" className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="shadow-card hover:shadow-elevated transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{announcement.title}</CardTitle>
                        <Badge variant={announcement.badge === "Important" ? "destructive" : "secondary"}>
                          {announcement.badge}
                        </Badge>
                      </div>
                      <CardDescription>
                        Posted by {announcement.author} • {new Date(announcement.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-card hover:shadow-elevated transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
                      <CardDescription className="flex flex-col gap-1">
                        <span>📅 {new Date(event.date).toLocaleDateString()} at {event.time}</span>
                        <span>📍 {event.location}</span>
                        <span>👥 {event.registered}/{event.capacity} registered</span>
                      </CardDescription>
                    </div>
                    <Button>Register</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;

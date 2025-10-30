import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Bell, MessageSquare, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Bell,
      title: "Instant Announcements",
      description: "Stay updated with real-time notifications for important campus news and updates"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Discover, register, and manage all campus events in one centralized platform"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Tailored experiences for students, faculty, and administrators"
    },
    {
      icon: MessageSquare,
      title: "Seamless Communication",
      description: "Connect with peers, professors, and staff through integrated messaging"
    },
    {
      icon: BarChart3,
      title: "Attendance Tracking",
      description: "Monitor and manage attendance with comprehensive analytics"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security protecting all your academic data"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-grid-white/10" />
        
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Welcome to Campus Connect
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Your complete digital ecosystem for seamless college communication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Streamline campus communication with powerful features designed for modern education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="shadow-elevated border-border/50">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Campus?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students and faculty using Campus Connect for seamless communication
              </p>
              <Button size="lg" className="text-lg" asChild>
                <Link to="/auth">Start Now - It's Free</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Campus Connect Platform. Built for better education.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

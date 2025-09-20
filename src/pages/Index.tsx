import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import ExpertCard from "@/components/ExpertCard";
import { Link } from "react-router-dom";
import { useRealTimeData, useNotifications } from "@/hooks/useRealTimeData";
import { 
  Shield, 
  Users, 
  Zap, 
  Award, 
  Search, 
  DollarSign, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Target,
  Bell
} from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";

const Index = () => {
  const { onlineExperts, averageResponseTime, totalProjects } = useRealTimeData();
  const { notifications, clearNotification } = useNotifications();
  // Sample expert data
  const featuredExperts = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Senior Penetration Tester",
      avatar: "",
      rating: 4.9,
      reviewCount: 127,
      location: "Singapore",
      hourlyRate: 85,
      skills: ["Penetration Testing", "OWASP", "Network Security", "Vulnerability Assessment"],
      certifications: ["CISSP", "CEH", "OSCP"],
      completedProjects: 89,
      responseTime: "2 hours",
      isVerified: true,
    },
    {
      id: "2",
      name: "Marcus Johnson",
      title: "Incident Response Specialist",
      avatar: "",
      rating: 4.8,
      reviewCount: 95,
      location: "London, UK",
      hourlyRate: 95,
      skills: ["Incident Response", "Digital Forensics", "Malware Analysis", "SIEM"],
      certifications: ["GCIH", "GNFA", "CISSP"],
      completedProjects: 67,
      responseTime: "1 hour",
      isVerified: true,
    },
    {
      id: "3",
      name: "Priya Sharma",
      title: "Cloud Security Architect",
      avatar: "",
      rating: 5.0,
      reviewCount: 73,
      location: "Mumbai, India",
      hourlyRate: 75,
      skills: ["AWS Security", "Azure Security", "DevSecOps", "Container Security"],
      certifications: ["CCSP", "AWS Security", "Azure Security"],
      completedProjects: 45,
      responseTime: "3 hours",
      isVerified: true,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Experts",
      description: "All cybersecurity professionals are thoroughly vetted and certified.",
    },
    {
      icon: Search,
      title: "Smart Matching",
      description: "Advanced filtering by skills, certifications, and location.",
    },
    {
      icon: DollarSign,
      title: "Secure Payments",
      description: "Escrow system with milestone-based payouts for your protection.",
    },
    {
      icon: MessageSquare,
      title: "Encrypted Chat",
      description: "Secure communication channels for all project discussions.",
    },
    {
      icon: Award,
      title: "Skill Verification",
      description: "Regular assessments and CTF challenges maintain quality.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with cybersecurity talent worldwide, 24/7 availability.",
    },
  ];

  const stats = [
    { label: "Verified Experts", value: "5,000+" },
    { label: "Projects Completed", value: `${Math.floor(totalProjects / 1000)}K+` },
    { label: "Success Rate", value: "98%" },
    { label: "Countries", value: "50+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Cybersecurity professionals connected globally" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="mb-6">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Trusted by 10,000+ Organizations
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Connect with 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Elite</span>
                  <br />
                  Cybersecurity Talent
                </h1>
                <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                  Find verified cybersecurity experts for penetration testing, incident response, 
                  compliance audits, and security consulting. Secure your business with trusted professionals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-primary shadow-glow" asChild>
                  <Link to="/experts">
                    Find Security Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                  <Link to="/projects">Post Your Project</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                <Card className="bg-card/80 backdrop-blur-sm shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-3 w-3 bg-success rounded-full animate-pulse" />
                      <span className="text-sm font-medium">{onlineExperts} experts online now</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Average Response Time</div>
                        <div className="text-2xl font-bold text-accent">{averageResponseTime.toFixed(1)} hours</div>
                      </div>
                      <Zap className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Real-time Notifications */}
                {notifications.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur-sm shadow-card border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Bell className="h-4 w-4 text-primary animate-pulse" />
                        <span className="text-xs font-medium text-primary">Live Updates</span>
                      </div>
                      {notifications.slice(0, 2).map((notification) => (
                        <div key={notification.id} className="text-xs text-muted-foreground mb-1">
                          • {notification.title}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose CyberTalent?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most trusted platform for connecting with cybersecurity professionals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Top <span className="text-primary">Security Experts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked professionals with proven track records in cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
              <Link to="/experts">
                View All Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes with our streamlined process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Post Your Project",
                description: "Describe your cybersecurity needs, budget, and timeline.",
                icon: Target,
              },
              {
                step: "2", 
                title: "Review Proposals",
                description: "Receive proposals from verified experts within hours.",
                icon: Users,
              },
              {
                step: "3",
                title: "Secure Collaboration",
                description: "Work together using our secure platform and payment system.",
                icon: Lock,
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of organizations that trust CyberTalent for their security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary shadow-glow" asChild>
              <Link to="/projects">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">CyberTalent</span>
              </div>
              <p className="text-muted-foreground mb-4">
                The world's most trusted cybersecurity talent marketplace.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Businesses</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Find Experts</li>
                <li>Post Projects</li>
                <li>Enterprise Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Experts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Join as Expert</li>
                <li>Skill Verification</li>
                <li>Success Stories</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 CyberTalent. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
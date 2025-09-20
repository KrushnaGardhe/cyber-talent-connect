import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import ExpertCard from "@/components/ExpertCard";
import { Search, Filter, MapPin, DollarSign, Star } from "lucide-react";

const Experts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Sample expert data - in a real app this would come from an API
  const experts = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Senior Penetration Tester",
      avatar: "",
      rating: 4.9,
      reviewCount: 127,
      location: "Singapore",
      hourlyRate: 85,
      skills: ["Penetration Testing", "OWASP", "Network Security", "Vulnerability Assessment", "Web Application Security"],
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
      skills: ["Incident Response", "Digital Forensics", "Malware Analysis", "SIEM", "Threat Hunting"],
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
      skills: ["AWS Security", "Azure Security", "DevSecOps", "Container Security", "Kubernetes Security"],
      certifications: ["CCSP", "AWS Security", "Azure Security"],
      completedProjects: 45,
      responseTime: "3 hours",
      isVerified: true,
    },
    {
      id: "4",
      name: "David Rodriguez",
      title: "Compliance & Risk Expert",
      avatar: "",
      rating: 4.7,
      reviewCount: 156,
      location: "Madrid, Spain",
      hourlyRate: 80,
      skills: ["GDPR Compliance", "ISO 27001", "Risk Assessment", "PCI DSS", "HIPAA"],
      certifications: ["CISA", "CRISC", "ISO 27001 LA"],
      completedProjects: 112,
      responseTime: "4 hours",
      isVerified: true,
    },
    {
      id: "5",
      name: "Alex Kim",
      title: "DevSecOps Engineer",
      avatar: "",
      rating: 4.9,
      reviewCount: 84,
      location: "Seoul, South Korea",
      hourlyRate: 90,
      skills: ["DevSecOps", "Container Security", "CI/CD Security", "Infrastructure Security", "Code Review"],
      certifications: ["CSSLP", "CKS", "AWS DevOps"],
      completedProjects: 58,
      responseTime: "2 hours",
      isVerified: true,
    },
    {
      id: "6",
      name: "Emily Watson",
      title: "Security Researcher",
      avatar: "",
      rating: 4.8,
      reviewCount: 92,
      location: "Toronto, Canada",
      hourlyRate: 100,
      skills: ["Vulnerability Research", "Reverse Engineering", "Exploit Development", "Threat Intelligence"],
      certifications: ["OSEE", "GREM", "CISSP"],
      completedProjects: 34,
      responseTime: "6 hours",
      isVerified: true,
    }
  ];

  const skillCategories = [
    "Penetration Testing",
    "Incident Response", 
    "Cloud Security",
    "DevSecOps",
    "Compliance",
    "Digital Forensics",
    "Threat Intelligence",
    "Security Architecture"
  ];

  const locations = [
    "United States",
    "India", 
    "United Kingdom",
    "Canada",
    "Germany",
    "Singapore",
    "Australia",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Find Cybersecurity <span className="text-primary">Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse verified security professionals and find the perfect match for your project.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-card shadow-card">
          <CardHeader>
            <h2 className="text-xl font-semibold">Search & Filter Experts</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Skill Filter */}
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Select skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-skills">All Skills</SelectItem>
                  {skillCategories.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Hourly rate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-rate">Any Rate</SelectItem>
                  <SelectItem value="0-50">$0 - $50/hr</SelectItem>
                  <SelectItem value="50-100">$50 - $100/hr</SelectItem>
                  <SelectItem value="100-150">$100 - $150/hr</SelectItem>
                  <SelectItem value="150+">$150+/hr</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button 
                size="sm" 
                className="bg-gradient-primary"
                onClick={() => {
                  // Apply filters logic would go here
                  console.log("Applying filters:", { selectedSkill, selectedLocation, priceRange });
                }}
              >
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => {
                  setSelectedSkill("all-skills");
                  setSelectedLocation("all-locations");
                  setPriceRange("any-rate");
                }}
              >
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popular Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Popular Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skillCategories.slice(0, 6).map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{experts.length}</span> experts
          </div>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Expert Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            Load More Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
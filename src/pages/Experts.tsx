import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import ExpertCard from "@/components/ExpertCard";
import { Search, Filter, Users, Loader2 } from "lucide-react";
import { useExperts } from "@/hooks/useExperts";

const Experts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all-skills");
  const [selectedLocation, setSelectedLocation] = useState("all-locations");
  const [priceRange, setPriceRange] = useState("any-rate");
  const [sortBy, setSortBy] = useState("rating");

  const { experts, loading, applyFilters } = useExperts();

  // Apply filters whenever filter values change
  useEffect(() => {
    applyFilters({
      searchTerm,
      selectedSkill,
      selectedLocation,
      priceRange,
      sortBy,
    });
  }, [searchTerm, selectedSkill, selectedLocation, priceRange, sortBy, applyFilters]);

  const skillCategories = [
    "Penetration Testing",
    "Incident Response", 
    "Cloud Security",
    "DevSecOps",
    "Compliance",
    "Digital Forensics",
    "Threat Intelligence",
    "Security Architecture",
    "OWASP",
    "Network Security",
    "Vulnerability Assessment",
    "Web Application Security",
    "Malware Analysis",
    "SIEM",
    "Threat Hunting",
    "AWS Security",
    "Azure Security",
    "Container Security",
    "Kubernetes Security"
  ];

  const locations = [
    "United States",
    "India", 
    "United Kingdom",
    "Canada",
    "Germany",
    "Singapore",
    "Australia",
    "Spain",
    "South Korea",
    "Other"
  ];

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedSkill("all-skills");
    setSelectedLocation("all-locations");
    setPriceRange("any-rate");
    setSortBy("rating");
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

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
                onClick={handleClearFilters}
                variant="outline"
              >
                Clear All Filters
              </Button>
              <div className="text-sm text-muted-foreground flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {loading ? "Loading..." : `${experts.length} experts found`}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Popular Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Popular Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skillCategories.slice(0, 8).map((skill) => (
              <Badge
                key={skill}
                variant={selectedSkill === skill ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors"
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-muted-foreground">
            {loading ? (
              <div className="flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading experts...
              </div>
            ) : (
              <>
                Showing <span className="font-semibold text-foreground">{experts.length}</span> expert{experts.length !== 1 ? 's' : ''}
              </>
            )}
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="recent">Most Active</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Expert Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">Loading cybersecurity experts...</p>
            </div>
          </div>
        ) : experts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {experts.map((expert) => (
              <ExpertCard 
                key={expert.id} 
                expert={{
                  id: expert.id,
                  name: expert.display_name || 'Expert',
                  title: expert.bio?.split('.')[0] || 'Cybersecurity Expert',
                  avatar: expert.avatar_url || "",
                  rating: expert.rating || 0,
                  reviewCount: expert.review_count || 0,
                  location: expert.location || 'Remote',
                  hourlyRate: expert.hourly_rate || 0,
                  skills: expert.skills || [],
                  certifications: expert.certifications || [],
                  completedProjects: expert.completed_projects || 0,
                  responseTime: expert.response_time || '24 hours',
                  isVerified: expert.is_verified || false,
                }} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No experts found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters to find more cybersecurity experts.
            </p>
            <Button onClick={handleClearFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}

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
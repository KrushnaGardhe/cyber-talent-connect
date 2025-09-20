import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/ui/navigation";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  FileText, 
  MapPin, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Plus,
  X
} from "lucide-react";

const Projects = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [urgency, setUrgency] = useState("");

  const skillOptions = [
    "Penetration Testing",
    "Vulnerability Assessment", 
    "Incident Response",
    "Digital Forensics",
    "Cloud Security",
    "Network Security",
    "Web Application Security",
    "Mobile Security",
    "DevSecOps",
    "Compliance Audit",
    "Risk Assessment",
    "Security Architecture",
    "Threat Intelligence",
    "Malware Analysis",
    "Social Engineering Testing",
    "Security Training"
  ];

  const complianceStandards = [
    "GDPR",
    "HIPAA", 
    "PCI DSS",
    "SOX",
    "ISO 27001",
    "NIST",
    "SOC 2",
    "FISMA"
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Post Your <span className="text-primary">Security Project</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Describe your cybersecurity needs and connect with verified experts who can help secure your business.
          </p>
        </div>

        {/* Project Form */}
        <Card className="bg-card shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Project Details
            </CardTitle>
            <CardDescription>
              Provide detailed information about your security requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Project Title */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Project Title *
              </label>
              <Input
                placeholder="e.g., Penetration Testing for E-commerce Platform"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Project Description *
              </label>
              <Textarea
                placeholder="Describe your security requirements, scope, and any specific concerns..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full min-h-32"
              />
            </div>

            {/* Skills Required */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Required Skills *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {skillOptions.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={skill}
                      checked={selectedSkills.includes(skill)}
                      onCheckedChange={() => toggleSkill(skill)}
                    />
                    <label
                      htmlFor={skill}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
              {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => toggleSkill(skill)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Budget and Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Budget Range *
                </label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50000+">$50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Timeline *
                </label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (Rush Job)</SelectItem>
                    <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                    <SelectItem value="1month">1 month</SelectItem>
                    <SelectItem value="2-3months">2-3 months</SelectItem>
                    <SelectItem value="3+months">3+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Urgency Level
              </label>
              <Select value={urgency} onValueChange={setUrgency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Low - Regular timeline
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-warning" />
                      Medium - Some time pressure
                    </div>
                  </SelectItem>
                  <SelectItem value="high">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      High - Urgent security concern
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Preference */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Location Preference
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Location (Remote)</SelectItem>
                  <SelectItem value="local">Local Experts Only</SelectItem>
                  <SelectItem value="timezone">Same Timezone</SelectItem>
                  <SelectItem value="onsite">On-site Required</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Requirements */}
        <Card className="bg-card shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Compliance Requirements
            </CardTitle>
            <CardDescription>
              Select any compliance standards your project must adhere to
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {complianceStandards.map((standard) => (
                <div key={standard} className="flex items-center space-x-2">
                  <Checkbox id={standard} />
                  <label
                    htmlFor={standard}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {standard}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="bg-card shadow-card mb-8">
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>
              Any other details that would help experts understand your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Industry context, current security measures, specific concerns, etc..."
              className="min-h-24"
            />
          </CardContent>
        </Card>

        {/* Project Summary */}
        <Card className="bg-card shadow-card mb-8">
          <CardHeader>
            <CardTitle>Project Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Budget</div>
                  <div className="text-sm text-muted-foreground">
                    {budget || "Not specified"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
                <Calendar className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">Timeline</div>
                  <div className="text-sm text-muted-foreground">
                    {timeline || "Not specified"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-success/5 rounded-lg">
                <Users className="h-5 w-5 text-success" />
                <div>
                  <div className="font-medium">Skills Required</div>
                  <div className="text-sm text-muted-foreground">
                    {selectedSkills.length} selected
                  </div>
                </div>
              </div>
            </div>

            {selectedSkills.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Selected Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-glow"
            onClick={() => {
              // Post project logic
              console.log("Posting project:", { 
                projectTitle, 
                projectDescription, 
                selectedSkills, 
                budget, 
                timeline, 
                urgency 
              });
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Post Project
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => {
              // Save draft logic
              console.log("Saving draft...");
            }}
          >
            Save as Draft
          </Button>
        </div>

        {/* Help Section */}
        <Card className="bg-accent/5 border-accent/20 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our security consultants can help you define your project requirements and choose the right expert for your needs.
                </p>
                <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
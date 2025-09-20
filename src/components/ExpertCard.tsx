import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Shield, Award, Clock } from "lucide-react";

interface ExpertCardProps {
  expert: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    location: string;
    hourlyRate: number;
    skills: string[];
    certifications: string[];
    completedProjects: number;
    responseTime: string;
    isVerified: boolean;
  };
}

const ExpertCard = ({ expert }: ExpertCardProps) => {
  return (
    <Card className="bg-card shadow-card hover:shadow-glow transition-all duration-300 border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-16 w-16 ring-2 ring-primary/20">
              <AvatarImage src={expert.avatar} alt={expert.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{expert.name}</h3>
                {expert.isVerified && (
                  <Shield className="h-4 w-4 text-success" />
                )}
              </div>
              <p className="text-muted-foreground text-sm">{expert.title}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="text-sm font-medium">{expert.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({expert.reviewCount})
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span className="text-sm">{expert.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ${expert.hourlyRate}
            </div>
            <div className="text-sm text-muted-foreground">per hour</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Skills */}
        <div>
          <h4 className="text-sm font-medium mb-2">Core Skills</h4>
          <div className="flex flex-wrap gap-2">
            {expert.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {expert.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{expert.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-sm font-medium mb-2">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            {expert.certifications.slice(0, 3).map((cert) => (
              <Badge key={cert} variant="outline" className="text-xs bg-success/10 text-success-glow border-success/30">
                <Award className="h-3 w-3 mr-1" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center space-x-1">
            <Award className="h-4 w-4" />
            <span>{expert.completedProjects} projects</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{expert.responseTime}</span>
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button className="flex-1 bg-gradient-primary shadow-glow" size="sm">
            Hire Expert
          </Button>
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
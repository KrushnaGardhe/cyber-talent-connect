import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/ui/navigation";
import { 
  User, 
  Briefcase, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Clock, 
  Shield, 
  Award,
  MessageSquare,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Eye,
  FileText
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Projects",
      value: "3",
      change: "+2 this month",
      icon: Briefcase,
      color: "text-primary"
    },
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+$2,100 this month",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Client Rating",
      value: "4.9",
      change: "Based on 67 reviews",
      icon: Star,
      color: "text-warning"
    },
    {
      title: "Profile Views",
      value: "342",
      change: "+89 this week",
      icon: Eye,
      color: "text-accent"
    }
  ];

  const recentProjects = [
    {
      id: "1",
      title: "Penetration Testing - E-commerce Platform",
      client: "TechCorp Inc.",
      status: "In Progress",
      deadline: "2024-01-15",
      budget: "$3,500",
      progress: 65
    },
    {
      id: "2", 
      title: "Security Audit - Healthcare App",
      client: "MedTech Solutions",
      status: "Under Review",
      deadline: "2024-01-20",
      budget: "$5,200",
      progress: 90
    },
    {
      id: "3",
      title: "Incident Response - Data Breach",
      client: "FinanceFirst",
      status: "Completed",
      deadline: "2023-12-28",
      budget: "$8,000",
      progress: 100
    }
  ];

  const upcomingTasks = [
    {
      id: "1",
      title: "Submit penetration test report",
      project: "TechCorp Pentest",
      due: "Today",
      priority: "high"
    },
    {
      id: "2",
      title: "Client review meeting",
      project: "MedTech Audit",
      due: "Tomorrow",
      priority: "medium"
    },
    {
      id: "3",
      title: "Security assessment planning",
      project: "RetailChain Security",
      due: "Jan 18",
      priority: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Welcome back, <span className="text-primary">Sarah</span> 👋
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your cybersecurity consulting activities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="projects" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="proposals">Proposals</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-6">
                {/* Recent Projects */}
                <Card className="bg-card shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Recent Projects
                    </CardTitle>
                    <CardDescription>
                      Your active and completed security projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-semibold">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Client: {project.client}
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge 
                                variant={
                                  project.status === "Completed" ? "default" :
                                  project.status === "In Progress" ? "secondary" : "outline"
                                }
                                className={
                                  project.status === "Completed" ? "bg-success text-success-foreground" : ""
                                }
                              >
                                {project.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {project.deadline}
                              </span>
                              <span className="text-sm font-medium text-primary">
                                {project.budget}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{project.progress}%</div>
                            <div className="w-16 h-2 bg-muted rounded-full mt-1">
                              <div 
                                className="h-2 bg-primary rounded-full" 
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View All Projects
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="proposals" className="space-y-6">
                <Card className="bg-card shadow-card">
                  <CardHeader>
                    <CardTitle>Active Proposals</CardTitle>
                    <CardDescription>
                      Proposals you've submitted that are under review
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        No active proposals at the moment
                      </p>
                      <Button className="mt-4" variant="outline">
                        Browse Projects
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="bg-card shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Performance Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">This Month</p>
                        <p className="text-2xl font-bold text-primary">$4,200</p>
                        <p className="text-sm text-success">+25% from last month</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Projects Completed</p>
                        <p className="text-2xl font-bold text-accent">8</p>
                        <p className="text-sm text-success">+2 from last month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary shadow-glow" size="sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Browse New Projects
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Update Profile
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages (3)
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      task.priority === "high" ? "bg-destructive" :
                      task.priority === "medium" ? "bg-warning" : "bg-success"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground">{task.project}</p>
                      <p className="text-xs text-accent mt-1">{task.due}</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline" size="sm">
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <div className="text-sm">
                    <p>Project completed</p>
                    <p className="text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <div className="text-sm">
                    <p>New message from client</p>
                    <p className="text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-4 w-4 text-warning" />
                  <div className="text-sm">
                    <p>Received 5-star review</p>
                    <p className="text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
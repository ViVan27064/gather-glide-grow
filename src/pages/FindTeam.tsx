import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Users, Code, Brain, Calculator, X, Plus, Send, Clock } from "lucide-react";

const FindTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("SIH Team");
  const [removedTeams, setRemovedTeams] = useState<number[]>([]);
  const [requestSent, setRequestSent] = useState<number[]>([]);

  const categories = [
    { name: "SIH Team", icon: Code, count: 24 },
    { name: "Robotics Team", icon: Brain, count: 18 },
    { name: "Maths Study Team", icon: Calculator, count: 12 },
    { name: "Web Development", icon: Code, count: 31 },
    { name: "AI/ML Projects", icon: Brain, count: 19 },
  ];

  const mockTeams = [
    {
      id: 1,
      name: "Smart City Solutions",
      description: "Building IoT solutions for urban challenges in SIH 2024. We're creating smart traffic management and waste monitoring systems.",
      members: 3,
      maxMembers: 6,
      skills: ["React", "IoT", "Python", "MongoDB"],
      category: "SIH Team",
      leader: "Priya Sharma",
      timeline: "3 months",
    },
    {
      id: 2,
      name: "Healthcare Innovation",
      description: "Developing AI-powered diagnostic tools for rural healthcare. Join us to make healthcare accessible to everyone.",
      members: 2,
      maxMembers: 5,
      skills: ["Machine Learning", "Python", "TensorFlow", "React"],
      category: "SIH Team",
      leader: "Raj Kumar",
      timeline: "4 months",
    },
    {
      id: 3,
      name: "EduTech Revolution",
      description: "Creating personalized learning platforms with AR/VR integration. Transform how students learn and engage.",
      members: 4,
      maxMembers: 7,
      skills: ["Unity", "AR/VR", "Node.js", "React Native"],
      category: "SIH Team",
      leader: "Anita Desai",
      timeline: "5 months",
    },
    {
      id: 4,
      name: "FinTech for Rural India",
      description: "Building blockchain-based financial inclusion solutions. Help bring banking services to remote areas.",
      members: 1,
      maxMembers: 4,
      skills: ["Blockchain", "Solidity", "React", "Express.js"],
      category: "SIH Team",
      leader: "Vikram Singh",
      timeline: "6 months",
    },
  ];

  const handleSendRequest = (teamId: number) => {
    setRequestSent([...requestSent, teamId]);
  };

  const handleRemoveTeam = (teamId: number) => {
    setRemovedTeams([...removedTeams, teamId]);
  };

  const visibleTeams = mockTeams.filter(team => !removedTeams.includes(team.id));

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Categories */}
        <div className="w-80 glass-effect border-r border-white/20 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Find Teams</h2>
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-primary text-white shadow-md'
                      : 'hover:bg-white/10 text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <category.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <Badge variant={selectedCategory === category.name ? "secondary" : "outline"} className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              ))}
            </div>

            <Button className="w-full" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add New Category
            </Button>
          </div>
        </div>

        {/* Main Content - Team Grid */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-gradient">Discover Your Perfect Team</h1>
              <p className="text-muted-foreground">
                AI-powered recommendations based on your skills and interests
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visibleTeams.map((team) => (
                <Card key={team.id} className="card-team hover-lift group relative">
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveTeam(team.id)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-destructive/10 rounded-full"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>{team.members}/{team.maxMembers} members</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{team.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {team.description}
                    </p>

                    {/* Skills Required */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Skills Required
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {team.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Team Leader */}
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-primary text-white text-xs">
                          {team.leader.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Led by {team.leader}</span>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => handleSendRequest(team.id)}
                      disabled={requestSent.includes(team.id)}
                      className="w-full"
                      variant={requestSent.includes(team.id) ? "secondary" : "default"}
                    >
                      {requestSent.includes(team.id) ? (
                        <>
                          <Clock className="h-4 w-4 mr-2" />
                          Request Sent
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Request
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {visibleTeams.length === 0 && (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">No more teams in this category</h3>
                  <p className="text-muted-foreground">
                    Try exploring other categories or create your own team!
                  </p>
                </div>
                <Button variant="outline">
                  Explore Other Categories
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FindTeam;
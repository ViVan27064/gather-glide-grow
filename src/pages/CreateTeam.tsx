import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, X, Users, Target, Calendar, AlertTriangle, Send, Clock } from "lucide-react";

const CreateTeam = () => {
  const navigate = useNavigate();
  const [showSimilarTeams, setShowSimilarTeams] = useState(false);
  const [teamCreated, setTeamCreated] = useState(false);
  
  const [teamData, setTeamData] = useState({
    name: "",
    purpose: "",
    description: "",
    timeline: "",
    maxMembers: ""
  });
  
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !requiredSkills.includes(newSkill.trim())) {
      setRequiredSkills([...requiredSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setRequiredSkills(requiredSkills.filter(s => s !== skill));
  };

  const handleCreateTeam = () => {
    // Simulate checking for similar teams
    setShowSimilarTeams(true);
  };

  const handleConfirmCreate = () => {
    setShowSimilarTeams(false);
    setTeamCreated(true);
    // Redirect to dashboard after creation
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const similarTeams = [
    {
      id: 1,
      name: "Smart City IoT Solutions",
      description: "Building IoT infrastructure for smart city management and monitoring systems.",
      members: 4,
      maxMembers: 6,
      skills: ["IoT", "React", "Python", "MongoDB"],
      leader: "Arjun Patel"
    },
    {
      id: 2,
      name: "Urban Tech Innovators",
      description: "Developing technology solutions for urban challenges and city planning.",
      members: 3,
      maxMembers: 5,
      skills: ["React", "Node.js", "IoT", "Machine Learning"],
      leader: "Meera Singh"
    },
    {
      id: 3,
      name: "Smart Infrastructure Team",
      description: "Creating intelligent systems for traffic, utilities, and public services.",
      members: 2,
      maxMembers: 7,
      skills: ["Python", "IoT", "React", "AWS"],
      leader: "Karan Sharma"
    },
    {
      id: 4,
      name: "Digital City Solutions",
      description: "Working on digital transformation projects for smart city initiatives.",
      members: 5,
      maxMembers: 8,
      skills: ["React", "Python", "Blockchain", "IoT"],
      leader: "Priya Reddy"
    }
  ];

  if (teamCreated) {
    return (
      <MainLayout>
        <div className="max-w-2xl mx-auto p-6 flex items-center justify-center min-h-[60vh]">
          <Card className="card-soft text-center">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gradient">Team Created Successfully!</h2>
                <p className="text-muted-foreground">
                  Your team "{teamData.name}" has been created. You can now start inviting members!
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Redirecting to dashboard...</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">Create Your Dream Team</h1>
          <p className="text-xl text-muted-foreground">
            Build something amazing with like-minded collaborators
          </p>
        </div>

        <Card className="card-soft shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Team Details</span>
            </CardTitle>
            <CardDescription>
              Tell us about your project and what kind of team members you're looking for
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Team Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Team Name *</Label>
              <Input
                id="name"
                placeholder="e.g., Smart City Solutions, AI Research Team..."
                value={teamData.name}
                onChange={(e) => setTeamData({...teamData, name: e.target.value})}
              />
            </div>

            {/* Purpose */}
            <div className="space-y-2">
              <Label htmlFor="purpose">Team Purpose *</Label>
              <Input
                id="purpose"
                placeholder="e.g., SIH 2024, Startup, Research Project, Study Group..."
                value={teamData.purpose}
                onChange={(e) => setTeamData({...teamData, purpose: e.target.value})}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Team Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your project, goals, and what you want to achieve together..."
                value={teamData.description}
                onChange={(e) => setTeamData({...teamData, description: e.target.value})}
                className="min-h-[120px]"
              />
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Input
                  id="timeline"
                  placeholder="e.g., 3 months, 1 year..."
                  value={teamData.timeline}
                  onChange={(e) => setTeamData({...teamData, timeline: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxMembers">Max Team Size</Label>
                <Input
                  id="maxMembers"
                  type="number"
                  placeholder="e.g., 6"
                  value={teamData.maxMembers}
                  onChange={(e) => setTeamData({...teamData, maxMembers: e.target.value})}
                />
              </div>
            </div>

            {/* Required Skills */}
            <div className="space-y-3">
              <Label>Skills/People Required *</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add required skills..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  className="flex-1"
                />
                <Button onClick={addSkill} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {requiredSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Create Button */}
            <Button 
              onClick={handleCreateTeam}
              disabled={!teamData.name || !teamData.purpose || !teamData.description || requiredSkills.length === 0}
              className="w-full btn-hero"
            >
              <Users className="h-4 w-4 mr-2" />
              Create Team
            </Button>
          </CardContent>
        </Card>

        {/* Similar Teams Dialog */}
        <Dialog open={showSimilarTeams} onOpenChange={setShowSimilarTeams}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Similar Teams Found</span>
              </DialogTitle>
              <DialogDescription>
                We found some teams with similar goals. You might want to join one of these instead, or continue creating your own team.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {similarTeams.map((team) => (
                  <Card key={team.id} className="card-team">
                    <CardContent className="p-4 space-y-3">
                      <div className="space-y-1">
                        <h4 className="font-medium">{team.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>{team.members}/{team.maxMembers} members</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{team.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {team.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="bg-primary text-white text-xs">
                              {team.leader.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-muted-foreground">{team.leader}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Send className="h-3 w-3 mr-1" />
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button onClick={handleConfirmCreate} className="flex-1">
                  <Plus className="h-4 w-4 mr-2" />
                  Create My Own Team
                </Button>
                <Button variant="outline" onClick={() => setShowSimilarTeams(false)} className="flex-1">
                  Let Me Join One Instead
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default CreateTeam;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MainLayout from "@/components/layout/MainLayout";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TeamSidebar } from "@/components/TeamSidebar";
import { X, Plus } from "lucide-react";

const CreateTeamAttributes = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");
  const [teamPurpose, setTeamPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [timeline, setTimeline] = useState("");
  const [maxMembers, setMaxMembers] = useState("");
  const [category, setCategory] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !requiredSkills.includes(newSkill.trim())) {
      setRequiredSkills([...requiredSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setRequiredSkills(requiredSkills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to create team final step
    navigate('/create-team');
  };

  const isFormValid = teamName && teamPurpose && description && requiredSkills.length > 0 && timeline && maxMembers;

  return (
    <MainLayout>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <TeamSidebar />
          
          <main className="flex-1 p-6">
            <div className="max-w-2xl mx-auto">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gradient">
                    Create Your Team
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Define your team details to find the perfect members
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Team Name */}
                    <div className="space-y-2">
                      <Label htmlFor="teamName">Team Name</Label>
                      <Input
                        id="teamName"
                        placeholder="Enter your team name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                      />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <Label>Team Category</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sih">SIH Team</SelectItem>
                          <SelectItem value="robotics">Robotics Team</SelectItem>
                          <SelectItem value="study">Study Group</SelectItem>
                          <SelectItem value="innovation">Innovation Lab</SelectItem>
                          <SelectItem value="startup">Startup Team</SelectItem>
                          <SelectItem value="research">Research Team</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Team Purpose */}
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Team Purpose</Label>
                      <Input
                        id="purpose"
                        placeholder="What is your team's main goal?"
                        value={teamPurpose}
                        onChange={(e) => setTeamPurpose(e.target.value)}
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Team Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your team, project, and what you're looking to achieve..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                      />
                    </div>

                    {/* Required Skills */}
                    <div className="space-y-3">
                      <Label>Required Skills</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add required skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                        />
                        <Button type="button" onClick={addSkill} size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {requiredSkills.map((skill) => (
                          <Badge key={skill} variant="default" className="gap-1">
                            {skill}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => removeSkill(skill)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <Label>Project Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long-term (6+ months)</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Maximum Members */}
                    <div className="space-y-2">
                      <Label htmlFor="maxMembers">Maximum Team Size</Label>
                      <Select value={maxMembers} onValueChange={setMaxMembers}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 members</SelectItem>
                          <SelectItem value="4">4 members</SelectItem>
                          <SelectItem value="5">5 members</SelectItem>
                          <SelectItem value="6">6 members</SelectItem>
                          <SelectItem value="8">8 members</SelectItem>
                          <SelectItem value="10">10+ members</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-primary"
                      disabled={!isFormValid}
                    >
                      Continue to Create Team
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </MainLayout>
  );
};

export default CreateTeamAttributes;
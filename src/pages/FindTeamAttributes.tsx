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

const FindTeamAttributes = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [location, setLocation] = useState("");
  const [goals, setGoals] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests(interests.filter(interest => interest !== interestToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to team suggestions with search criteria
    navigate('/find-team');
  };

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
                    Find Your Perfect Team
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Tell us about yourself to get matched with the best teams
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Skills */}
                    <div className="space-y-3">
                      <Label>Your Skills</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a skill (e.g., React, Python, Design)"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                        />
                        <Button type="button" onClick={addSkill} size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="gap-1">
                            {skill}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => removeSkill(skill)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="space-y-3">
                      <Label>Interests & Domains</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add interest (e.g., AI, Robotics, Web Dev)"
                          value={newInterest}
                          onChange={(e) => setNewInterest(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                        />
                        <Button type="button" onClick={addInterest} size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <Badge key={interest} variant="outline" className="gap-1">
                            {interest}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => removeInterest(interest)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Experience Level */}
                    <div className="space-y-2">
                      <Label>Experience Level</Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Availability */}
                    <div className="space-y-2">
                      <Label>Availability</Label>
                      <Select value={availability} onValueChange={setAvailability}>
                        <SelectTrigger>
                          <SelectValue placeholder="How much time can you commit?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="part-time">Part-time (5-10 hours/week)</SelectItem>
                          <SelectItem value="moderate">Moderate (10-20 hours/week)</SelectItem>
                          <SelectItem value="full-time">Full-time (20+ hours/week)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location Preference */}
                    <div className="space-y-2">
                      <Label>Location Preference</Label>
                      <Input
                        placeholder="e.g., Remote, Mumbai, Delhi, or Any"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    {/* Goals */}
                    <div className="space-y-2">
                      <Label>What are your goals?</Label>
                      <Textarea
                        placeholder="Describe what you want to achieve by joining a team..."
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-secondary"
                      disabled={skills.length === 0}
                    >
                      Find Teams
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

export default FindTeamAttributes;
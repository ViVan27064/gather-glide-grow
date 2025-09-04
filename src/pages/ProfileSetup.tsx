import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, User, Calendar, BookOpen, Briefcase, Heart } from "lucide-react";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    bio: "",
    education: "",
    experience: ""
  });
  
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const removeInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };

  const handleComplete = () => {
    // Mock completion - navigate to main app
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-bg p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-2">Almost There!</h1>
          <p className="text-muted-foreground">Complete your profile to get personalized team recommendations</p>
        </div>

        <Card className="card-soft border-0 shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Profile Setup</CardTitle>
            <CardDescription>Tell us about yourself to find the perfect teams</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="age"
                    type="number"
                    placeholder="Your age"
                    value={profile.age}
                    onChange={(e) => setProfile({...profile, age: e.target.value})}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself, your goals, and what makes you unique..."
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                className="min-h-[100px]"
              />
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <Label>Skills *</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill..."
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
                {skills.map((skill) => (
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

            {/* Education */}
            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="education"
                  placeholder="e.g., Computer Science at MIT, High School Graduate..."
                  value={profile.education}
                  onChange={(e) => setProfile({...profile, education: e.target.value})}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience">Experience</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="experience"
                  placeholder="e.g., 2 years in web development, Intern at Google..."
                  value={profile.experience}
                  onChange={(e) => setProfile({...profile, experience: e.target.value})}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <Label>Interests</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add an interest..."
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                  className="flex-1"
                />
                <Button onClick={addInterest} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="px-3 py-1">
                    <Heart className="h-3 w-3 mr-1" />
                    {interest}
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Complete Button */}
            <Button 
              className="w-full btn-hero" 
              onClick={handleComplete}
              disabled={!profile.name || skills.length === 0}
            >
              Complete Profile & Start Collaborating
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;
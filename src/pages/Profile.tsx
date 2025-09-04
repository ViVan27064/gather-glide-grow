import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Edit, 
  Save, 
  X, 
  Plus, 
  MapPin, 
  Mail, 
  Calendar, 
  Users, 
  Target, 
  Award,
  Settings,
  Bell,
  Shield,
  Palette,
  Globe
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate full-stack developer with 3+ years of experience in React, Node.js, and cloud technologies. Love building innovative solutions and collaborating with diverse teams.",
    age: "24",
    location: "San Francisco, CA",
    education: "Computer Science, Stanford University",
    experience: "Senior Developer at TechCorp, Previously at StartupXYZ"
  });

  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB", "UI/UX", "Machine Learning"]);
  const [interests, setInterests] = useState(["Web Development", "AI/ML", "Startups", "Open Source", "Teaching", "Photography"]);
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

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const stats = [
    { label: "Teams Joined", value: "12", icon: Users },
    { label: "Projects Completed", value: "8", icon: Target },
    { label: "Success Rate", value: "96%", icon: Award },
    { label: "Profile Views", value: "234", icon: Globe },
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Profile Header */}
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-white text-4xl">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-10 h-10">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gradient">{profileData.name}</h1>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{profileData.age} years old</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="card-soft text-center">
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile Info</TabsTrigger>
            <TabsTrigger value="teams">Team History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="card-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your personal information and skills</CardDescription>
                </div>
                <Button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  variant={isEditing ? "default" : "outline"}
                >
                  {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      value={profileData.age}
                      onChange={(e) => setProfileData({...profileData, age: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Input
                    id="education"
                    value={profileData.education}
                    onChange={(e) => setProfileData({...profileData, education: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    id="experience"
                    value={profileData.experience}
                    onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <Label>Skills</Label>
                  {isEditing && (
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
                  )}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-3">
                  <Label>Interests</Label>
                  {isEditing && (
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
                  )}
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge key={interest} variant="outline" className="px-3 py-1">
                        {interest}
                        {isEditing && (
                          <button
                            onClick={() => removeInterest(interest)}
                            className="ml-2 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <Card className="card-soft">
              <CardHeader>
                <CardTitle>Team History</CardTitle>
                <CardDescription>Your collaboration journey and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Mock team history */}
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">SIH Team 2024</h4>
                      <p className="text-sm text-muted-foreground">Team Leader • Active</p>
                      <p className="text-xs text-muted-foreground">Smart city IoT solutions</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Web Dev Squad</h4>
                      <p className="text-sm text-muted-foreground">Member • Active</p>
                      <p className="text-xs text-muted-foreground">Modern web application development</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex items-center space-x-4 p-4 border rounded-lg opacity-75">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">AI Research Group</h4>
                      <p className="text-sm text-muted-foreground">Data Scientist • Completed</p>
                      <p className="text-xs text-muted-foreground">Healthcare AI diagnostics</p>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Account Settings</span>
                </CardTitle>
                <CardDescription>Manage your account preferences and privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Notifications */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Notifications</h4>
                  </div>
                  <div className="space-y-3 pl-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="team-invites">Team invitations</Label>
                      <Switch id="team-invites" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="messages">New messages</Label>
                      <Switch id="messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="recommendations">Team recommendations</Label>
                      <Switch id="recommendations" defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Privacy */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Privacy</h4>
                  </div>
                  <div className="space-y-3 pl-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="profile-visibility">Public profile</Label>
                      <Switch id="profile-visibility" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="skills-visible">Show skills to others</Label>
                      <Switch id="skills-visible" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="activity-visible">Show activity status</Label>
                      <Switch id="activity-visible" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Appearance */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Palette className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Appearance</h4>
                  </div>
                  <div className="space-y-3 pl-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode">Dark mode</Label>
                      <Switch id="dark-mode" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
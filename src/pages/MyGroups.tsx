import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, MessageCircle, Calendar, Target, Crown, Star, Settings, UserPlus, MoreVertical, Send } from "lucide-react";

const MyGroups = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  const myTeams = [
    {
      id: 1,
      name: "SIH Team 2024",
      purpose: "Smart India Hackathon",
      description: "Building IoT solutions for smart city management. Our goal is to create an integrated platform for traffic monitoring, waste management, and energy optimization.",
      role: "Team Leader",
      members: [
        { name: "You", role: "Team Leader", avatar: "", skills: ["React", "Python", "IoT"] },
        { name: "Alex Morgan", role: "Frontend Developer", avatar: "", skills: ["React", "TypeScript", "UI/UX"] },
        { name: "Priya Singh", role: "Backend Developer", avatar: "", skills: ["Python", "Django", "PostgreSQL"] },
        { name: "Raj Kumar", role: "IoT Specialist", avatar: "", skills: ["Arduino", "Sensors", "Embedded C"] },
      ],
      status: "Active",
      progress: 65,
      deadline: "March 15, 2024",
      lastActivity: "2 hours ago",
      skills: ["React", "Python", "IoT", "MongoDB"],
      unreadMessages: 3
    },
    {
      id: 2,
      name: "Web Dev Squad",
      purpose: "Learning & Projects",
      description: "A collaborative group focused on building modern web applications and learning new technologies together.",
      role: "Member",
      members: [
        { name: "Sarah Wilson", role: "Team Leader", avatar: "", skills: ["React", "Node.js", "AWS"] },
        { name: "Mike Johnson", role: "Full Stack Developer", avatar: "", skills: ["Vue.js", "Express", "MongoDB"] },
        { name: "You", role: "Frontend Developer", avatar: "", skills: ["React", "TypeScript", "Tailwind"] },
        { name: "Lisa Chen", role: "Designer", avatar: "", skills: ["Figma", "UI/UX", "Prototyping"] },
      ],
      status: "Active",
      progress: 40,
      deadline: "Ongoing",
      lastActivity: "1 day ago",
      skills: ["React", "Node.js", "Vue.js", "Design"],
      unreadMessages: 0
    },
    {
      id: 3,
      name: "AI Research Group",
      purpose: "Research Project",
      description: "Exploring machine learning applications in healthcare diagnostics and developing AI models for medical image analysis.",
      role: "Researcher",
      members: [
        { name: "Dr. Anita Sharma", role: "Research Lead", avatar: "", skills: ["Machine Learning", "Python", "Research"] },
        { name: "Vikram Patel", role: "ML Engineer", avatar: "", skills: ["TensorFlow", "PyTorch", "Python"] },
        { name: "You", role: "Data Scientist", avatar: "", skills: ["Python", "Data Analysis", "Statistics"] },
      ],
      status: "Completed",
      progress: 100,
      deadline: "December 20, 2023",
      lastActivity: "2 weeks ago",
      skills: ["Machine Learning", "Python", "TensorFlow", "Research"],
      unreadMessages: 0
    }
  ];

  const TeamDetailsDialog = ({ team }: { team: any }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Users className="h-4 w-4 text-white" />
          </div>
          <span>{team.name}</span>
          <Badge variant={team.status === 'Active' ? 'default' : team.status === 'Completed' ? 'secondary' : 'outline'}>
            {team.status}
          </Badge>
        </DialogTitle>
        <DialogDescription>{team.purpose}</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        {/* Team Description */}
        <div>
          <h4 className="font-medium mb-2">About This Team</h4>
          <p className="text-sm text-muted-foreground">{team.description}</p>
        </div>

        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Project Progress</h4>
            <span className="text-sm text-muted-foreground">{team.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${team.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h4 className="font-medium mb-3">Team Members ({team.members.length})</h4>
          <div className="space-y-3">
            {team.members.map((member: any, index: number) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-secondary">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{member.name}</p>
                    {member.role === 'Team Leader' && <Crown className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {member.skills.slice(0, 3).map((skill: string) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Actions */}
        <div className="flex space-x-3">
          <Button className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Open Group Chat
          </Button>
          {team.role === 'Team Leader' && (
            <Button variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Members
            </Button>
          )}
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">My Teams</h1>
          <p className="text-xl text-muted-foreground">
            Manage your collaborations and track project progress
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Teams ({myTeams.length})</TabsTrigger>
            <TabsTrigger value="active">Active ({myTeams.filter(t => t.status === 'Active').length})</TabsTrigger>
            <TabsTrigger value="leading">Leading ({myTeams.filter(t => t.role === 'Team Leader').length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({myTeams.filter(t => t.status === 'Completed').length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTeams.map((team) => (
                <Card key={team.id} className="card-team hover-lift">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{team.name}</span>
                          {team.role === 'Team Leader' && <Crown className="h-4 w-4 text-primary" />}
                        </CardTitle>
                        <CardDescription>{team.purpose}</CardDescription>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{team.members.length} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{team.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={team.status === 'Active' ? 'default' : team.status === 'Completed' ? 'secondary' : 'outline'}>
                          {team.status}
                        </Badge>
                        {team.unreadMessages > 0 && (
                          <Badge className="bg-destructive">
                            {team.unreadMessages}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {team.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                          style={{ width: `${team.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {team.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {team.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{team.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Team Members Preview */}
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {team.members.slice(0, 4).map((member, index) => (
                          <Avatar key={index} className="h-6 w-6 border-2 border-background">
                            <AvatarFallback className="bg-primary text-white text-xs">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {team.members.length > 4 ? `+${team.members.length - 4} more` : ''}
                      </span>
                      <div className="flex-1"></div>
                      <span className="text-xs text-muted-foreground">{team.lastActivity}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <Target className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <TeamDetailsDialog team={team} />
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTeams.filter(team => team.status === 'Active').map((team) => (
                <Card key={team.id} className="card-team hover-lift">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{team.name}</span>
                          {team.role === 'Team Leader' && <Crown className="h-4 w-4 text-primary" />}
                        </CardTitle>
                        <CardDescription>{team.purpose}</CardDescription>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{team.members.length} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{team.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={team.status === 'Active' ? 'default' : team.status === 'Completed' ? 'secondary' : 'outline'}>
                          {team.status}
                        </Badge>
                        {team.unreadMessages > 0 && (
                          <Badge className="bg-destructive">
                            {team.unreadMessages}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {team.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                          style={{ width: `${team.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {team.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {team.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{team.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {team.members.slice(0, 4).map((member, index) => (
                          <Avatar key={index} className="h-6 w-6 border-2 border-background">
                            <AvatarFallback className="bg-primary text-white text-xs">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {team.members.length > 4 ? `+${team.members.length - 4} more` : ''}
                      </span>
                      <div className="flex-1"></div>
                      <span className="text-xs text-muted-foreground">{team.lastActivity}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <Target className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <TeamDetailsDialog team={team} />
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTeams.filter(team => team.role === 'Team Leader').map((team) => (
                <Card key={team.id} className="card-team hover-lift">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{team.name}</span>
                          {team.role === 'Team Leader' && <Crown className="h-4 w-4 text-primary" />}
                        </CardTitle>
                        <CardDescription>{team.purpose}</CardDescription>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{team.members.length} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{team.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={team.status === 'Active' ? 'default' : team.status === 'Completed' ? 'secondary' : 'outline'}>
                          {team.status}
                        </Badge>
                        {team.unreadMessages > 0 && (
                          <Badge className="bg-destructive">
                            {team.unreadMessages}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {team.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                          style={{ width: `${team.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {team.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {team.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{team.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {team.members.slice(0, 4).map((member, index) => (
                          <Avatar key={index} className="h-6 w-6 border-2 border-background">
                            <AvatarFallback className="bg-primary text-white text-xs">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {team.members.length > 4 ? `+${team.members.length - 4} more` : ''}
                      </span>
                      <div className="flex-1"></div>
                      <span className="text-xs text-muted-foreground">{team.lastActivity}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <Target className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <TeamDetailsDialog team={team} />
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTeams.filter(team => team.status === 'Completed').map((team) => (
                <Card key={team.id} className="card-team hover-lift">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{team.name}</span>
                          {team.role === 'Team Leader' && <Crown className="h-4 w-4 text-primary" />}
                        </CardTitle>
                        <CardDescription>{team.purpose}</CardDescription>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{team.members.length} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{team.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={team.status === 'Active' ? 'default' : team.status === 'Completed' ? 'secondary' : 'outline'}>
                          {team.status}
                        </Badge>
                        {team.unreadMessages > 0 && (
                          <Badge className="bg-destructive">
                            {team.unreadMessages}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {team.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                          style={{ width: `${team.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {team.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {team.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{team.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {team.members.slice(0, 4).map((member, index) => (
                          <Avatar key={index} className="h-6 w-6 border-2 border-background">
                            <AvatarFallback className="bg-primary text-white text-xs">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {team.members.length > 4 ? `+${team.members.length - 4} more` : ''}
                      </span>
                      <div className="flex-1"></div>
                      <span className="text-xs text-muted-foreground">{team.lastActivity}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <Target className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <TeamDetailsDialog team={team} />
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MyGroups;

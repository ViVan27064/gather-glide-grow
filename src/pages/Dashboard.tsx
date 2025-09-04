import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TeamSidebar } from "@/components/TeamSidebar";
import { Users, Target, Zap, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Teams Joined", value: "3", icon: Users },
    { label: "Active Projects", value: "2", icon: Target },
    { label: "Team Matches", value: "12", icon: Zap },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
  ];

  return (
    <MainLayout>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <TeamSidebar />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Welcome Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gradient">
                  Welcome to TeamSync
                </h1>
                <p className="text-lg text-muted-foreground">
                  Choose an action from the sidebar to get started
                </p>
              </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="card-soft hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="card-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 hover:bg-muted/20 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Alex joined your SIH Team</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 hover:bg-muted/20 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New team suggestion available</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 hover:bg-muted/20 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">You were invited to Web Dev Squad</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Recommendations */}
          <Card className="card-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Recommended for You</span>
              </CardTitle>
              <CardDescription>Teams that match your skills and interests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="card-team p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">AI Research Team</h4>
                    <p className="text-sm text-muted-foreground">Machine Learning • Research</p>
                    <p className="text-xs text-muted-foreground mt-1">3/5 members</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
              <div className="card-team p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mobile App Startup</h4>
                    <p className="text-sm text-muted-foreground">React Native • Startup</p>
                    <p className="text-xs text-muted-foreground mt-1">2/4 members</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => navigate('/find-team')}
              >
                View All Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </MainLayout>
  );
};

export default Dashboard;
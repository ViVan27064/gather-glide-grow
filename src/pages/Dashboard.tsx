import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, Users, Target, Zap, TrendingUp } from "lucide-react";

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
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              Ready to Collaborate?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing teams, share your skills, and build something incredible together.
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
            <Button
              onClick={() => navigate('/create-team')}
              className="btn-circle hover-lift group"
            >
              <div className="text-center">
                <Plus className="h-8 w-8 mb-2 mx-auto group-hover:animate-hover-bounce" />
                <span className="block text-lg font-semibold">Create a Team</span>
              </div>
            </Button>

            <Button
              onClick={() => navigate('/find-team')}
              className="btn-circle hover-lift group"
              variant="secondary"
            >
              <div className="text-center">
                <Search className="h-8 w-8 mb-2 mx-auto group-hover:animate-hover-bounce" />
                <span className="block text-lg font-semibold">Find a Team</span>
              </div>
            </Button>
          </div>
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
    </MainLayout>
  );
};

export default Dashboard;
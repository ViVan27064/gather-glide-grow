import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, User, Bell, Settings, Home, Users, Search, Plus } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);
  const [notifications] = useState(3); // Mock notification count

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen gradient-bg">
      {/* Top Navbar */}
      <header className="glass-effect border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">TeamSync</span>
              </Link>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/dashboard"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/dashboard')
                    ? 'bg-primary text-white shadow-md'
                    : 'text-foreground hover:bg-white/10'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/my-groups"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/my-groups')
                    ? 'bg-primary text-white shadow-md'
                    : 'text-foreground hover:bg-white/10'
                }`}
              >
                <Users className="h-4 w-4" />
                <span>My Groups</span>
              </Link>
            </nav>

            {/* Right Sidebar Icons */}
            <div className="flex items-center space-x-4">
              {/* Chat Button */}
              <Button
                variant={chatOpen ? "default" : "ghost"}
                size="sm"
                onClick={() => setChatOpen(!chatOpen)}
                className="relative"
              >
                <MessageCircle className="h-4 w-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-destructive">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Profile Button */}
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-secondary text-xs">JD</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-4rem)]">
          {children}
        </main>

        {/* Right Chat Sidebar */}
        {chatOpen && (
          <div className="w-80 glass-effect border-l border-white/20 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Messages</h3>
              <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>
                ×
              </Button>
            </div>

            {/* Chat Categories */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Requests</div>
              <div className="card-soft p-3 cursor-pointer hover:bg-muted/20">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-white text-xs">AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Alex Morgan</p>
                    <p className="text-xs text-muted-foreground truncate">
                      Wants to join your Robotics Team
                    </p>
                  </div>
                  <Badge variant="destructive" className="text-xs">New</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Group Chats</div>
              <div className="card-soft p-3 cursor-pointer hover:bg-muted/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">SIH Team 2024</p>
                    <p className="text-xs text-muted-foreground truncate">
                      Sarah: Let's meet tomorrow at 3 PM
                    </p>
                  </div>
                  <Badge className="text-xs">2</Badge>
                </div>
              </div>
              <div className="card-soft p-3 cursor-pointer hover:bg-muted/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Web Dev Squad</p>
                    <p className="text-xs text-muted-foreground truncate">
                      Mike: Check out this new framework!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
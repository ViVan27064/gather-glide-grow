import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TeamSidebar } from "@/components/TeamSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [chatOpen, setChatOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  // Don't show sidebar on login/signup pages
  const showSidebar = !location.pathname.includes('/login') && !location.pathname.includes('/signup');

  if (!showSidebar) {
    return <div className="min-h-screen bg-background">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <TeamSidebar />
          
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
              <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Left side with sidebar trigger and logo */}
                <div className="flex items-center space-x-4">
                  <SidebarTrigger />
                  <Link to="/" className="text-2xl font-bold text-gradient">
                    TeamSync
                  </Link>
                </div>
                
                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                  <Link 
                    to="/dashboard" 
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/my-groups" 
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/my-groups') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    My Groups
                  </Link>
                </nav>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setChatOpen(!chatOpen)}
                    className={chatOpen ? "bg-muted" : ""}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            <div className="flex flex-1">
              {/* Main Content */}
              <main className="flex-1">
                {children}
              </main>

              {/* Chat Sidebar */}
              {chatOpen && (
                <div className="w-80 border-l bg-card/30 backdrop-blur-sm">
                  <div className="p-4 border-b flex items-center justify-between">
                    <h3 className="font-semibold">Team Chat</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setChatOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <Card className="p-4 mb-4">
                      <p className="text-sm text-muted-foreground">
                        Connect with your teammates in real-time. Chat functionality coming soon!
                      </p>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
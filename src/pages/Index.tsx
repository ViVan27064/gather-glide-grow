import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Zap, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gradient">TeamSync</h1>
          <p className="text-2xl text-muted-foreground">Connect. Collaborate. Create.</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The smart team collaboration platform that connects you with the perfect teammates 
            using AI-powered matching based on skills, interests, and goals.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button className="btn-hero">Get Started</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" className="px-8 py-6 text-lg">
              Create Account
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Find Perfect Teams</h3>
            <p className="text-muted-foreground">AI matches you with teams that align with your skills and interests</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Smart Matching</h3>
            <p className="text-muted-foreground">Advanced algorithms ensure compatible team member recommendations</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Achieve Goals</h3>
            <p className="text-muted-foreground">Collaborate effectively with built-in project management tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Plus, Search, Users, Target, Lightbulb, BookOpen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const teamActions = [
  {
    title: "Create a Team",
    url: "/create-team",
    icon: Plus,
    description: "Start your own project",
    colorClass: "text-primary hover:bg-primary/10 border-primary/20",
    iconBg: "bg-primary/10"
  },
  {
    title: "Find a Team",
    url: "/find-team", 
    icon: Search,
    description: "Join existing teams",
    colorClass: "text-secondary hover:bg-secondary/10 border-secondary/20",
    iconBg: "bg-secondary/10"
  }
];

const teamCategories = [
  { title: "SIH Teams", icon: Target, count: 12 },
  { title: "Robotics Teams", icon: Users, count: 8 },
  { title: "Study Groups", icon: BookOpen, count: 15 },
  { title: "Innovation Labs", icon: Lightbulb, count: 6 },
];

export function TeamSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const collapsed = state === "collapsed";
  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-72"} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent className="p-4">
        {/* Main Actions */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground mb-3">
            Team Actions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {teamActions.map((action) => (
                <NavLink
                  key={action.title}
                  to={action.url}
                  className={({ isActive }) =>
                    `block p-4 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? `${action.colorClass} shadow-sm`
                        : "border-border hover:border-primary/30"
                    }`
                  }
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${action.iconBg}`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    {!collapsed && (
                      <div>
                        <h3 className="font-medium text-sm">{action.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                    )}
                  </div>
                </NavLink>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Team Categories */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground mb-3 mt-6">
              Browse Categories
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {teamCategories.map((category) => (
                  <SidebarMenuItem key={category.title}>
                    <SidebarMenuButton asChild>
                      <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{category.title}</span>
                        </div>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
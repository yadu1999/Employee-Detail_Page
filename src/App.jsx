
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";

const App = () => {
  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background text-foreground overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <TopBar />
          <MainContent />
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  );
};

export default App;

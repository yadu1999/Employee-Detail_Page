
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const DetailsTabs = () => {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="bg-transparent p-0 border-b rounded-none justify-start gap-2">
        <TabsTrigger 
          value="details" 
          className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Details
        </TabsTrigger>
        <TabsTrigger 
          value="documents"
          className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Documents
        </TabsTrigger>
        <TabsTrigger 
          value="attendance"
          className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Attendance
        </TabsTrigger>
        <TabsTrigger 
          value="payslips"
          className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Payslips
        </TabsTrigger>
      </TabsList>
      {/* Content for tabs can be added here later if needed */}
      {/* <TabsContent value="details">Details Content</TabsContent> */}
      {/* <TabsContent value="documents">Documents Content</TabsContent> */}
    </Tabs>
  );
};

export default DetailsTabs;


import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProfileHeader from '@/components/employee-details/ProfileHeader';
import DetailsTabs from '@/components/employee-details/DetailsTabs';
import EmploymentDetailsCard from '@/components/employee-details/EmploymentDetailsCard';
import ContractDetailsCard from '@/components/employee-details/ContractDetailsCard';
import PaymentDetailsCard from '@/components/employee-details/PaymentDetailsCard';
import NotesSection from '@/components/employee-details/NotesSection';

const MainContent = () => {
  return (
    <div className="flex-1 bg-background overflow-y-auto md:ml-[var(--sidebar-width)]">
      <main 
        className="p-4 sm:p-6"
        style={{ paddingTop: '1.5rem' }} 
      >
        <div className="max-w-7xl mx-auto">
          {/* <div className="mb-6">
            <h2 className="text-xs text-muted-foreground">Employee Detail Page- Assigned</h2>
          </div> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 space-y-6">
              <ProfileHeader />
              <DetailsTabs />
              <EmploymentDetailsCard />
              <ContractDetailsCard />
              <PaymentDetailsCard />
            </div>
            <div className="lg:col-span-1">
              <NotesSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;

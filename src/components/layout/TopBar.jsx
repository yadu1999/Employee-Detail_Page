
import React from 'react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import profile from '../../../public/images/profileHeader.png'

const TopBar = () => {
  return (
    <div 
      className="h-[var(--topbar-height)] bg-card border-b flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 shrink-0"
    >
      
      <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative -right-[265px]">
        <Input 
          placeholder="Search" 
          className="pr-3 py-2 h-9 text-sm rounded-md border border-input bg-input focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 ml-4">
        {/* <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full w-9 h-9">
          <Bell className="h-5 w-5" data-lucide="bell-dot" > <i data-lucide="bell-dot"></i></Bell>

         
        </Button> */}




        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full w-9 h-9">
  <Bell className="h-5 w-5" data-lucide="bell" />
  

  <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
          <img  alt="Peter West avatar" class="w-full h-full object-cover" src={profile} />
            <AvatarFallback>PW</AvatarFallback>
          </Avatar>
          <div className="text-sm hidden sm:block">
            <p className="font-semibold text-foreground whitespace-nowrap">Peter West</p>
            <p className="text-xs text-muted-foreground">Superadmin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

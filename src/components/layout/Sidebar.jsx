
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Home, 
  Users, 
  Briefcase, 
  Plane, 
  FileText, 
  Ticket, 
  Receipt, 
  KeyRound
} from 'lucide-react';
import sidebarIcon from '../../../public/images/headerImage.png'
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', icon: Home, path: '/home' },
  { name: 'Employee Management', icon: Users, path: '/employee-management', active: true },
  { name: 'Client Management', icon: Briefcase, path: '/client-management' },
  { name: 'Leave Management', icon: Plane, path: '/leave-management' },
  { name: 'Payroll & Payslip', icon: FileText, path: '/payroll' },
  { name: 'Ticketing System Module', icon: Ticket, path: '/ticketing' },
  { name: 'Invoicing & Billing Module', icon: Receipt, path: '/invoicing' },
  { name: 'Access & Permission', icon: KeyRound, path: '/access' },
];

const NavLink = ({ item, isActive }) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start text-sm font-medium h-11 px-4",
      isActive 
        ? "bg-[hsl(var(--sidebar-active-bg))] text-[hsl(var(--sidebar-active-fg))] hover:bg-[hsl(var(--sidebar-active-bg))] hover:text-[hsl(var(--sidebar-active-fg))]" 
        : "hover:bg-accent text-muted-foreground hover:text-foreground"
    )}
  >
    <item.icon className="mr-3 h-5 w-5 shrink-0" />
    <span className="truncate">{item.name}</span>
  </Button>
);

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('/employee-management');

  return (
    <div 
      className="w-[var(--sidebar-width)] bg-card border-r flex-col fixed top-0 left-0 h-full z-50 hidden md:flex shrink-0"
    >
      <div className="h-[var(--topbar-height)] flex items-center px-4 md:px-6 border-b shrink-0">
        <img  alt="My Virtual Mate Logo" class="h-16 w-auto mr-2" src={sidebarIcon} />
        {/* <h1 className="text-lg lg:text-xl font-bold text-foreground truncate">My Virtual Mate</h1> */}
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              item={item} 
              isActive={item.path === activeItem || (item.active && activeItem === item.path)}
            />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;

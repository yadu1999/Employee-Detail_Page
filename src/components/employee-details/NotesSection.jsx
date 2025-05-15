
import React from 'react';
import { Button } from '@/components/ui/button';
import { MoreVertical, Plus } from 'lucide-react';

const NoteItem = ({ children, date, colorClass }) => (
  <div className={`p-3 rounded-md text-sm ${colorClass}`}>
    <p className="mb-1">{children}</p>
    <p className="text-xs opacity-75">{date}</p>
  </div>
);

const NotesSection = () => {
  const notes = [
    { 
      text: "Jerome has been working and leading on PV-21 project and has been recommend Lead position for next increment by Mary", 
      date: "15/04/2025",
      color: "bg-green-50 border border-green-200 text-green-700"
    },
    { 
      text: "Jerome has been caught smoking in the premises. complaint has been raised.", 
      date: "05/01/2025",
      color: "bg-red-50 border border-red-200 text-red-700"
    },
    { 
      text: "Performance appreciated", 
      date: "05/01/2025",
      color: "bg-green-50 border border-green-200 text-green-700"
    },
    { 
      text: "Jerome has been away for 3 days without informing either client or agency", 
      date: "05/01/2025",
      color: "bg-red-50 border border-red-200 text-red-700"
    },
  ];

  return (
    <div className="content-card sticky top-[calc(var(--topbar-height)_+_1.5rem)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Notes</h3>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
      <div className="space-y-3 mb-6 max-h-[calc(100vh_-_var(--topbar-height)_-_200px)] overflow-y-auto scrollbar-thin pr-1">
        {notes.map((note, index) => (
          <NoteItem key={index} date={note.date} colorClass={note.color}>
            {note.text}
          </NoteItem>
        ))}
      </div>
      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        <Plus className="h-4 w-4 mr-2" /> Add notes
      </Button>
    </div>
  );
};

export default NotesSection;

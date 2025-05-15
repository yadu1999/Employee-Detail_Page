
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profile from '../../../public/images/profile_Image.png'
import { Linkedin, Mail, Phone, MapPin, Edit3 } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="content-card">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Avatar className="h-48 w-40 rounded-lg">
        <img  alt="Jerome Bell" class="w-full h-full object-cover rounded-lg" src={profile} />
          {/* <AvatarFallback className="rounded-lg text-4xl">JB</AvatarFallback> */}
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-foreground">Jerome Bell</h1>
              <Badge variant="default" className="bg-green-100 text-green-700 border-green-200 text-xs">Active</Badge>
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Edit3 className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-primary font-medium mb-3">Senior Software Developer</p>
          
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-gray-400" />
              <a href="https://www.linkedin.com/in/jerome.bell/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                https://www.linkedin.com/in/jerome.bell/
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <span>jerome.bell@invision.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <span>629.555.0129</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span>232, 4th Street, Melbourne, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

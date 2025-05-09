
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 border-b px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="hidden md:flex items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-9 pr-4 py-2 bg-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
          />
        </div>
        
        {/* Notifications */}
        <button className="p-2 rounded-md relative hover:bg-muted">
          <Bell size={20} />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full"></span>
        </button>
        
        {/* User Menu */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            A
          </div>
          <span className="hidden md:inline font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

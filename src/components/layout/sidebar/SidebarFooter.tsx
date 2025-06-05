
import React from 'react';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarFooterProps {
  isCollapsed: boolean;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  return (
    <div className="p-4 border-t border-slate-200/60 shrink-0 bg-gradient-to-r from-white to-slate-50">
      <div className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-300",
        "text-red-600 hover:text-red-700 hover:bg-red-50 hover:shadow-sm",
        isCollapsed ? "justify-center px-3" : "px-4"
      )}>
        <LogOut size={16} />
        {!isCollapsed && <span className="font-medium text-sm">Sair</span>}
      </div>
    </div>
  );
};

export default SidebarFooter;

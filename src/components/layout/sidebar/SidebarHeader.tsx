
import React from 'react';
import { Zap, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isCollapsed, onToggle }) => {
  return (
    <div className="flex items-center h-20 px-6 border-b border-slate-200/60 shrink-0 bg-gradient-to-r from-slate-50 to-white">
      {!isCollapsed && (
        <div className="flex-1">
          <h1 className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-1">
            EVENTRIX™
          </h1>
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-primary" />
            <span className="text-xs font-semibold text-slate-600">Powered by LEGAL AI</span>
          </div>
        </div>
      )}
      <button
        onClick={onToggle}
        className="p-3 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 text-slate-600 hover:text-slate-900"
      >
        {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
      </button>
    </div>
  );
};

export default SidebarHeader;

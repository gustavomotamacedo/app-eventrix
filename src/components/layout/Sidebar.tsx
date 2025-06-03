
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  QrCode, 
  Mail, 
  Activity, 
  DollarSign, 
  Settings, 
  ChevronsLeft, 
  ChevronsRight,
  Home,
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isCollapsed, isActive }) => (
  <Link to={to} className={cn(
    "hubx-sidebar-item",
    isActive && "active",
    isCollapsed ? "justify-center" : ""
  )}>
    <div className="w-5 h-5">{icon}</div>
    {!isCollapsed && <span>{label}</span>}
  </Link>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigation = [
    { icon: <Home size={20} />, label: 'Dashboard', to: '/dashboard' },
    { icon: <Calendar size={20} />, label: 'Eventos', to: '/events' },
    { icon: <Users size={20} />, label: 'Expositores', to: '/exhibitors' },
    { icon: <QrCode size={20} />, label: 'Credenciamento', to: '/registration' },
    { icon: <Mail size={20} />, label: 'Marketing', to: '/marketing' },
    { icon: <Activity size={20} />, label: 'Operação ao Vivo', to: '/live-operations' },
    { icon: <DollarSign size={20} />, label: 'Financeiro', to: '/finance' },
    { icon: <Settings size={20} />, label: 'Configurações', to: '/settings' },
  ];

  return (
    <div className={cn(
      "flex flex-col h-screen bg-sidebar text-sidebar-foreground transition-all",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center h-16 px-4">
        {!isCollapsed && (
          <div className="flex-1">
            <h1 className="text-xl font-bold text-sidebar-foreground">Eventrix™</h1>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-sidebar-accent"
        >
          {isCollapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pt-5 px-3">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <SidebarItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isCollapsed={isCollapsed}
              isActive={location.pathname === item.to}
            />
          ))}
        </nav>
      </div>

      <div className="p-3">
        <div className={cn(
          "hubx-sidebar-item mt-auto",
          isCollapsed ? "justify-center" : ""
        )}>
          <LogOut size={20} />
          {!isCollapsed && <span>Sair</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

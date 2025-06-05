
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
  LogOut,
  Plus,
  UserPlus,
  UserCheck,
  Shield,
  MapPin,
  CheckSquare,
  Bell,
  MessageSquare,
  TrendingUp,
  Puzzle,
  Zap,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Eye,
  Scan,
  History,
  Megaphone,
  FileText,
  Globe,
  Bot,
  Link as LinkIcon,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
  isActive: boolean;
  badge?: string;
}

interface SidebarGroupProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  isCollapsed: boolean;
  isOpen: boolean;
  onToggle: () => void;
  priority?: 'high' | 'medium' | 'low';
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isCollapsed, isActive, badge }) => (
  <Link to={to} className={cn(
    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 group relative",
    "text-slate-600 hover:text-slate-900 hover:bg-white/80 hover:shadow-sm",
    isActive && "bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 shadow-sm",
    isCollapsed ? "justify-center px-3" : "px-4"
  )}>
    <div className="w-4 h-4 flex-shrink-0">{icon}</div>
    {!isCollapsed && (
      <>
        <span className="font-medium text-sm truncate">{label}</span>
        {badge && (
          <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
            {badge}
          </span>
        )}
      </>
    )}
    {isCollapsed && isActive && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
    )}
  </Link>
);

const SidebarGroup: React.FC<SidebarGroupProps> = ({ 
  icon, 
  label, 
  children, 
  isCollapsed, 
  isOpen, 
  onToggle, 
  priority = 'medium' 
}) => {
  if (isCollapsed) {
    return (
      <div className="space-y-1">
        {children}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className={cn(
        "flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 group",
        "text-slate-700 hover:text-slate-900 hover:bg-slate-50/80",
        priority === 'high' && "bg-gradient-to-r from-primary/5 to-transparent"
      )}>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 text-slate-500 group-hover:text-slate-700">{icon}</div>
          <span className="font-semibold text-sm">{label}</span>
        </div>
        <div className={cn(
          "transition-transform duration-300 text-slate-400",
          isOpen && "rotate-180"
        )}>
          <ChevronDown size={14} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1 ml-6 mt-2 border-l border-slate-200/60 pl-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    core: true,
    users: false,
    content: false,
    communication: false,
    marketing: false,
    analytics: false,
    tools: false,
    system: false
  });
  const location = useLocation();

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  // Navegação principal (sempre visível)
  const coreNavigation = [
    { icon: <Home size={16} />, label: 'Dashboard', to: '/dashboard' },
    { icon: <Calendar size={16} />, label: 'Eventos', to: '/events', badge: 'Nova' },
    { icon: <BarChart3 size={16} />, label: 'Analytics', to: '/analytics' },
  ];

  // Grupo de usuários
  const usersGroup = [
    { icon: <Users size={16} />, label: 'Expositores', to: '/exhibitors' },
    { icon: <UserCheck size={16} />, label: 'Visitantes', to: '/visitors' },
    { icon: <UserPlus size={16} />, label: 'Staff', to: '/staff' },
    { icon: <Users size={16} />, label: 'Fornecedores', to: '/suppliers' },
    { icon: <Shield size={16} />, label: 'Permissões', to: '/permissions' },
  ];

  // Grupo de conteúdo
  const contentGroup = [
    { icon: <Calendar size={16} />, label: 'Palestras', to: '/lectures' },
    { icon: <Activity size={16} />, label: 'Trilhas', to: '/tracks' },
    { icon: <Activity size={16} />, label: 'Atividades', to: '/activities' },
    { icon: <MapPin size={16} />, label: 'Locais', to: '/venues' },
    { icon: <CheckSquare size={16} />, label: 'Checklist', to: '/checklist' },
    { icon: <CheckSquare size={16} />, label: 'Tarefas por Equipe', to: '/team-tasks' },
  ];

  // Grupo de comunicação
  const communicationGroup = [
    { icon: <Bot size={16} />, label: 'HumanGPT', to: '/communication/humangpt' },
    { icon: <LinkIcon size={16} />, label: 'LinkAI', to: '/communication/linkai' },
    { icon: <Bell size={16} />, label: 'Notificações', to: '/communication/notifications' },
  ];

  // Grupo de marketing
  const marketingGroup = [
    { icon: <Megaphone size={16} />, label: 'Marketing', to: '/marketing' },
    { icon: <Megaphone size={16} />, label: 'Anúncios', to: '/marketing/ads' },
    { icon: <FileText size={16} />, label: 'Conteúdo', to: '/marketing/content' },
    { icon: <Mail size={16} />, label: 'Email', to: '/marketing/email' },
    { icon: <Globe size={16} />, label: 'Landing Pages', to: '/marketing/pages' },
  ];

  // Grupo de analytics
  const analyticsGroup = [
    { icon: <BarChart3 size={16} />, label: 'Analytics', to: '/analytics' },
    { icon: <FileText size={16} />, label: 'Relatórios', to: '/reports' },
    { icon: <Star size={16} />, label: 'NPS', to: '/analytics/nps' },
    { icon: <Eye size={16} />, label: 'Heatmap', to: '/analytics/heatmap' },
    { icon: <TrendingUp size={16} />, label: 'Engajamento', to: '/analytics/engagement' },
  ];

  // Grupo de ferramentas
  const toolsGroup = [
    { icon: <QrCode size={16} />, label: 'Credenciamento', to: '/registration' },
    { icon: <Scan size={16} />, label: 'Check-in', to: '/checkin' },
    { icon: <History size={16} />, label: 'Histórico de Acessos', to: '/access-history' },
    { icon: <Activity size={16} />, label: 'Live Ops', to: '/live-ops' },
    { icon: <DollarSign size={16} />, label: 'Financeiro', to: '/finance' },
    { icon: <Puzzle size={16} />, label: 'Marketplace', to: '/integrations' },
    { icon: <Globe size={16} />, label: 'API Management', to: '/api-management' },
    { icon: <Bot size={16} />, label: 'AI Validator', to: '/ai-validator' },
    { icon: <Eye size={16} />, label: 'Heatmap AI', to: '/heatmap' },
    { icon: <DollarSign size={16} />, label: 'Dynamic Pricing', to: '/dynamic-pricing' },
    { icon: <Shield size={16} />, label: 'Legal AI', to: '/legal-ai' },
  ];

  // Grupo de sistema
  const systemGroup = [
    { icon: <Settings size={16} />, label: 'Configurações', to: '/settings' },
    { icon: <HelpCircle size={16} />, label: 'Suporte', to: '/help' },
  ];

  return (
    <div className={cn(
      "flex flex-col bg-white border-r border-slate-200/60 transition-all duration-300 h-screen shadow-sm",
      isCollapsed ? "w-20" : "w-80"
    )}>
      {/* Header Fixo */}
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
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-3 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 text-slate-600 hover:text-slate-900"
        >
          {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>

      {/* Conteúdo de Navegação com altura fixa e scroll apenas no conteúdo */}
      <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
        {/* Navegação Principal */}
        <div className="space-y-1">
          {coreNavigation.map((item) => (
            <SidebarItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isCollapsed={isCollapsed}
              isActive={location.pathname === item.to}
              badge={item.badge}
            />
          ))}
        </div>

        {/* Separador Visual */}
        {!isCollapsed && <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />}

        {/* Grupos Organizados */}
        <div className="space-y-3">
          <SidebarGroup
            icon={<Users size={16} />}
            label="Usuários"
            isCollapsed={isCollapsed}
            isOpen={openGroups.users}
            onToggle={() => toggleGroup('users')}
            priority="high"
          >
            {usersGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup
            icon={<Calendar size={16} />}
            label="Conteúdo"
            isCollapsed={isCollapsed}
            isOpen={openGroups.content}
            onToggle={() => toggleGroup('content')}
          >
            {contentGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup
            icon={<MessageSquare size={16} />}
            label="Comunicação"
            isCollapsed={isCollapsed}
            isOpen={openGroups.communication}
            onToggle={() => toggleGroup('communication')}
          >
            {communicationGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup
            icon={<Megaphone size={16} />}
            label="Marketing"
            isCollapsed={isCollapsed}
            isOpen={openGroups.marketing}
            onToggle={() => toggleGroup('marketing')}
          >
            {marketingGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup
            icon={<BarChart3 size={16} />}
            label="Analytics"
            isCollapsed={isCollapsed}
            isOpen={openGroups.analytics}
            onToggle={() => toggleGroup('analytics')}
          >
            {analyticsGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup
            icon={<Zap size={16} />}
            label="Ferramentas"
            isCollapsed={isCollapsed}
            isOpen={openGroups.tools}
            onToggle={() => toggleGroup('tools')}
          >
            {toolsGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup
            icon={<Settings size={16} />}
            label="Sistema"
            isCollapsed={isCollapsed}
            isOpen={openGroups.system}
            onToggle={() => toggleGroup('system')}
          >
            {systemGroup.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
              />
            ))}
          </SidebarGroup>
        </div>
      </div>

      {/* Footer Fixo */}
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
    </div>
  );
};

export default Sidebar;

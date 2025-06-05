
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
  Star,
  Building,
  Briefcase,
  Presentation,
  Clock,
  Headphones,
  BookOpen,
  Target,
  Package
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
  isHighlighted?: boolean;
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

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  to, 
  isCollapsed, 
  isActive, 
  badge, 
  isHighlighted = false 
}) => (
  <Link to={to} className={cn(
    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 group relative",
    "text-slate-600 hover:text-slate-900 hover:bg-white/80 hover:shadow-sm",
    isActive && "bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 shadow-sm",
    isHighlighted && "bg-gradient-to-r from-secondary/10 to-secondary/5 text-secondary border border-secondary/20 font-semibold",
    isCollapsed ? "justify-center px-3" : "px-4"
  )}>
    <div className="w-4 h-4 flex-shrink-0">{icon}</div>
    {!isCollapsed && (
      <>
        <span className="font-medium text-sm truncate">{label}</span>
        {badge && (
          <span className={cn(
            "ml-auto text-xs px-2 py-0.5 rounded-full font-medium",
            isHighlighted ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
          )}>
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
        priority === 'high' && "bg-gradient-to-r from-primary/5 to-transparent",
        isOpen && "bg-slate-50/60"
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
  const [activeGroup, setActiveGroup] = useState<string>('');
  const location = useLocation();

  const toggleGroup = (group: string) => {
    setActiveGroup(activeGroup === group ? '' : group);
  };

  // Dashboard - sempre visível
  const dashboardItem = { icon: <Home size={16} />, label: 'Painel do Organizador', to: '/dashboard' };

  // Eventos - sempre visível com destaque para "Novo Evento"
  const eventsItems = [
    { icon: <Calendar size={16} />, label: 'Lista de Eventos', to: '/events' },
    { icon: <Plus size={16} />, label: 'Novo Evento', to: '/events/new', highlighted: true, badge: 'Novo' },
  ];

  // Grupos organizados conforme especificação original
  const menuGroups = [
    {
      id: 'users',
      icon: <Users size={16} />,
      label: 'Usuários',
      priority: 'high' as const,
      items: [
        { icon: <Building size={16} />, label: 'Expositores', to: '/exhibitors' },
        { icon: <Briefcase size={16} />, label: 'Fornecedores', to: '/suppliers' },
        { icon: <Shield size={16} />, label: 'Permissões e Perfis', to: '/permissions' },
        { icon: <UserPlus size={16} />, label: 'Staff', to: '/staff' },
        { icon: <UserCheck size={16} />, label: 'Visitantes', to: '/visitors' },
      ]
    },
    {
      id: 'agenda',
      icon: <Calendar size={16} />,
      label: 'Agenda',
      priority: 'high' as const,
      items: [
        { icon: <Activity size={16} />, label: 'Atividades', to: '/activities' },
        { icon: <Presentation size={16} />, label: 'Palestras', to: '/lectures' },
        { icon: <MapPin size={16} />, label: 'Salas/Locais', to: '/venues' },
        { icon: <Target size={16} />, label: 'Trilhas', to: '/tracks' },
      ]
    },
    {
      id: 'tasks',
      icon: <CheckSquare size={16} />,
      label: 'Tarefas',
      priority: 'medium' as const,
      items: [
        { icon: <CheckSquare size={16} />, label: 'Checklist', to: '/checklist' },
        { icon: <Users size={16} />, label: 'Por Equipe', to: '/team-tasks' },
        { icon: <Package size={16} />, label: 'Por Fornecedor', to: '/supplier-tasks' },
      ]
    },
    {
      id: 'credentialing',
      icon: <QrCode size={16} />,
      label: 'Credenciamento Digital',
      priority: 'medium' as const,
      items: [
        { icon: <Scan size={16} />, label: 'Check-in/Check-out', to: '/checkin' },
        { icon: <QrCode size={16} />, label: 'Geração QR Code/Badge', to: '/registration' },
        { icon: <History size={16} />, label: 'Histórico de Acessos', to: '/access-history' },
      ]
    },
    {
      id: 'marketing',
      icon: <Megaphone size={16} />,
      label: 'Marketing',
      priority: 'medium' as const,
      items: [
        { icon: <Megaphone size={16} />, label: 'Ads', to: '/marketing/ads' },
        { icon: <FileText size={16} />, label: 'Conteúdo', to: '/marketing/content' },
        { icon: <Mail size={16} />, label: 'E-mails', to: '/marketing/email' },
        { icon: <Globe size={16} />, label: 'Pages', to: '/marketing/pages' },
      ]
    },
    {
      id: 'communication',
      icon: <MessageSquare size={16} />,
      label: 'Comunicação',
      priority: 'medium' as const,
      items: [
        { icon: <Bot size={16} />, label: 'HumanGPT', to: '/communication/humangpt' },
        { icon: <Bell size={16} />, label: 'Notificações', to: '/communication/notifications' },
      ]
    },
    {
      id: 'analytics',
      icon: <BarChart3 size={16} />,
      label: 'Analytics & Relatórios',
      priority: 'medium' as const,
      items: [
        { icon: <BarChart3 size={16} />, label: 'Dashboards', to: '/analytics' },
        { icon: <TrendingUp size={16} />, label: 'Inteligência de Negócios', to: '/analytics/engagement' },
        { icon: <FileText size={16} />, label: 'Relatórios', to: '/reports' },
      ]
    },
    {
      id: 'integrations',
      icon: <Puzzle size={16} />,
      label: 'Integrações',
      priority: 'low' as const,
      items: [
        { icon: <Globe size={16} />, label: 'APIs', to: '/api-management' },
        { icon: <Puzzle size={16} />, label: 'Plugins', to: '/integrations' },
      ]
    },
    {
      id: 'legal-ai',
      icon: <Zap size={16} />,
      label: 'LEGAL IA',
      priority: 'high' as const,
      items: [
        { icon: <Bot size={16} />, label: 'Integrações', to: '/ai-validator' },
        { icon: <Eye size={16} />, label: 'Heatmap & Incident', to: '/heatmap' },
        { icon: <DollarSign size={16} />, label: 'Pricing Dinâmico', to: '/dynamic-pricing' },
        { icon: <Shield size={16} />, label: 'Validador IA', to: '/legal-ai' },
      ]
    },
    {
      id: 'settings',
      icon: <Settings size={16} />,
      label: 'Configurações',
      priority: 'low' as const,
      items: [
        { icon: <Building size={16} />, label: 'Dados do Organizador', to: '/settings/organizer' },
        { icon: <Star size={16} />, label: 'Identidade Visual', to: '/settings/branding' },
        { icon: <Shield size={16} />, label: 'LGPD', to: '/settings/privacy' },
        { icon: <Users size={16} />, label: 'Permissões/Acesso', to: '/settings/permissions' },
      ]
    },
    {
      id: 'support',
      icon: <HelpCircle size={16} />,
      label: 'Ajuda & Suporte',
      priority: 'low' as const,
      items: [
        { icon: <MessageSquare size={16} />, label: 'Chat do Suporte', to: '/help/chat' },
        { icon: <HelpCircle size={16} />, label: 'FAQ', to: '/help/faq' },
        { icon: <BookOpen size={16} />, label: 'Tutorial', to: '/help/tutorial' },
      ]
    }
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

      {/* Conteúdo de Navegação - altura fixa calculada */}
      <div className="flex-1 px-4 py-6 space-y-3" style={{ height: 'calc(100vh - 160px)' }}>
        {/* Dashboard - sempre visível */}
        <div className="space-y-1">
          <SidebarItem
            icon={dashboardItem.icon}
            label={dashboardItem.label}
            to={dashboardItem.to}
            isCollapsed={isCollapsed}
            isActive={location.pathname === dashboardItem.to}
          />
        </div>

        {/* Eventos - sempre visível */}
        <div className="space-y-1">
          <SidebarGroup
            icon={<Calendar size={16} />}
            label="Eventos"
            isCollapsed={isCollapsed}
            isOpen={activeGroup === 'events'}
            onToggle={() => toggleGroup('events')}
            priority="high"
          >
            {eventsItems.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.to}
                badge={item.badge}
                isHighlighted={item.highlighted}
              />
            ))}
          </SidebarGroup>
        </div>

        {/* Separador Visual */}
        {!isCollapsed && <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />}

        {/* Grupos Organizados - Sistema de Acordeão Inteligente */}
        <div className="space-y-2">
          {menuGroups.map((group) => (
            <SidebarGroup
              key={group.id}
              icon={group.icon}
              label={group.label}
              isCollapsed={isCollapsed}
              isOpen={activeGroup === group.id}
              onToggle={() => toggleGroup(group.id)}
              priority={group.priority}
            >
              {group.items.map((item) => (
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
          ))}
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

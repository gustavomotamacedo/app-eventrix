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
  Send
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
  isActive: boolean;
}

interface SidebarGroupProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  isCollapsed: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isCollapsed, isActive }) => (
  <Link to={to} className={cn(
    "legal-sidebar-item",
    isActive && "active",
    isCollapsed ? "justify-center px-3" : "px-4"
  )}>
    <div className="w-5 h-5">{icon}</div>
    {!isCollapsed && <span className="font-semibold">{label}</span>}
  </Link>
);

const SidebarGroup: React.FC<SidebarGroupProps> = ({ icon, label, children, isCollapsed, isOpen, onToggle }) => {
  if (isCollapsed) {
    return (
      <div className="space-y-2">
        {children}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4">{icon}</div>
          <span>{label}</span>
        </div>
        <div className="transition-transform duration-300">
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1 ml-6 mt-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    eventos: true,
    usuarios: false,
    agenda: false,
    tarefas: false,
    credenciamento: false,
    marketing: false,
    comunicacao: false,
    analytics: false,
    integracao: false,
    automacao: false
  });
  const location = useLocation();

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  const mainNavigation = [
    { icon: <Home size={20} />, label: 'Dashboard', to: '/dashboard' },
  ];

  const eventosGroup = [
    { icon: <Calendar size={16} />, label: 'Lista de Eventos', to: '/events' },
    { icon: <Plus size={16} />, label: 'Novo Evento', to: '/events/new', highlight: true },
  ];

  const usuariosGroup = [
    { icon: <Users size={16} />, label: 'Expositores', to: '/exhibitors' },
    { icon: <UserCheck size={16} />, label: 'Visitantes', to: '/visitors' },
    { icon: <UserPlus size={16} />, label: 'Staff', to: '/staff' },
    { icon: <Users size={16} />, label: 'Fornecedores', to: '/suppliers' },
    { icon: <Shield size={16} />, label: 'Permissões e Perfis', to: '/permissions' },
  ];

  const agendaGroup = [
    { icon: <Calendar size={16} />, label: 'Palestras', to: '/lectures' },
    { icon: <Activity size={16} />, label: 'Trilhas', to: '/tracks' },
    { icon: <Calendar size={16} />, label: 'Atividades', to: '/activities' },
    { icon: <MapPin size={16} />, label: 'Salas/Locais', to: '/venues' },
  ];

  const tarefasGroup = [
    { icon: <CheckSquare size={16} />, label: 'Checklist Geral', to: '/checklist' },
    { icon: <CheckSquare size={16} />, label: 'Tarefas por Equipe', to: '/team-tasks' },
  ];

  const credenciamentoGroup = [
    { icon: <QrCode size={16} />, label: 'Geração QR/Badge', to: '/registration' },
    { icon: <Scan size={16} />, label: 'Check-in/Check-out', to: '/checkin' },
    { icon: <History size={16} />, label: 'Histórico de Acessos', to: '/access-history' },
  ];

  const marketingGroup = [
    { icon: <Megaphone size={16} />, label: 'Ads', to: '/marketing/ads' },
    { icon: <FileText size={16} />, label: 'Conteúdo', to: '/marketing/content' },
    { icon: <Mail size={16} />, label: 'E-mail', to: '/marketing/email' },
    { icon: <Globe size={16} />, label: 'Pages', to: '/marketing/pages' },
  ];

  const comunicacaoGroup = [
    { icon: <Bot size={16} />, label: 'HumanGPT', to: '/communication/humangpt' },
    { icon: <LinkIcon size={16} />, label: 'LinkAI', to: '/communication/linkai' },
    { icon: <Bell size={16} />, label: 'Notificações', to: '/communication/notifications' },
  ];

  const analyticsGroup = [
    { icon: <BarChart3 size={16} />, label: 'Dashboards', to: '/analytics' },
    { icon: <TrendingUp size={16} />, label: 'Relatórios', to: '/reports' },
    { icon: <MessageSquare size={16} />, label: 'NPS & Feedbacks', to: '/analytics/nps' },
    { icon: <Activity size={16} />, label: 'Mapa de Calor', to: '/analytics/heatmap' },
    { icon: <Zap size={16} />, label: 'Engajamento', to: '/analytics/engagement' },
  ];

  const integracaoGroup = [
    { icon: <Puzzle size={16} />, label: 'Marketplace', to: '/integrations' },
    { icon: <Activity size={16} />, label: 'APIs', to: '/api-management' },
  ];

  const automacaoGroup = [
    { icon: <Eye size={16} />, label: 'Validador IA Stands', to: '/ai-validator' },
    { icon: <Activity size={16} />, label: 'Heatmap & Incident AI', to: '/heatmap' },
    { icon: <DollarSign size={16} />, label: 'Pricing Dinâmico', to: '/dynamic-pricing' },
    { icon: <Zap size={16} />, label: 'Módulos LEGAL AI', to: '/legal-ai' },
  ];

  return (
    <div className={cn(
      "flex flex-col legal-gradient-bg text-white transition-all min-h-full shadow-2xl",
      isCollapsed ? "w-20" : "w-80"
    )}>
      <div className="flex items-center h-20 px-6 sticky top-0 z-10 border-b border-white/10">
        {!isCollapsed && (
          <div className="flex-1">
            <h1 className="text-2xl font-black text-white mb-1">EVENTRIX™</h1>
            <div className="flex items-center gap-2">
              <Zap size={12} className="text-secondary" />
              <span className="text-xs font-semibold text-white/80">Powered by LEGAL AI</span>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 pt-6 px-4 pb-20 overflow-y-auto">
        <nav className="space-y-3">
          {/* Main Navigation */}
          {mainNavigation.map((item) => (
            <SidebarItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isCollapsed={isCollapsed}
              isActive={location.pathname === item.to}
            />
          ))}

          <div className="h-6" />

          {/* All navigation groups with enhanced styling */}
          <SidebarGroup
            icon={<Calendar size={16} />}
            label="Eventos"
            isCollapsed={isCollapsed}
            isOpen={openGroups.eventos}
            onToggle={() => toggleGroup('eventos')}
          >
            {eventosGroup.map((item) => (
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
            icon={<Users size={16} />}
            label="Usuários"
            isCollapsed={isCollapsed}
            isOpen={openGroups.usuarios}
            onToggle={() => toggleGroup('usuarios')}
          >
            {usuariosGroup.map((item) => (
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
            label="Agenda/Programação"
            isCollapsed={isCollapsed}
            isOpen={openGroups.agenda}
            onToggle={() => toggleGroup('agenda')}
          >
            {agendaGroup.map((item) => (
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
            icon={<CheckSquare size={16} />}
            label="Tarefas"
            isCollapsed={isCollapsed}
            isOpen={openGroups.tarefas}
            onToggle={() => toggleGroup('tarefas')}
          >
            {tarefasGroup.map((item) => (
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
            icon={<QrCode size={16} />}
            label="Credenciamento"
            isCollapsed={isCollapsed}
            isOpen={openGroups.credenciamento}
            onToggle={() => toggleGroup('credenciamento')}
          >
            {credenciamentoGroup.map((item) => (
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
            icon={<MessageSquare size={16} />}
            label="Comunicação"
            isCollapsed={isCollapsed}
            isOpen={openGroups.comunicacao}
            onToggle={() => toggleGroup('comunicacao')}
          >
            {comunicacaoGroup.map((item) => (
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
            icon={<TrendingUp size={16} />}
            label="Analytics & Relatórios"
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
            icon={<Puzzle size={16} />}
            label="Integrações"
            isCollapsed={isCollapsed}
            isOpen={openGroups.integracao}
            onToggle={() => toggleGroup('integracao')}
          >
            {integracaoGroup.map((item) => (
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
            label="Automação & IA"
            isCollapsed={isCollapsed}
            isOpen={openGroups.automacao}
            onToggle={() => toggleGroup('automacao')}
          >
            {automacaoGroup.map((item) => (
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

          <div className="h-6" />

          {/* Fixed Items */}
          <SidebarItem
            icon={<Settings size={20} />}
            label="Configurações"
            to="/settings"
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/settings'}
          />

          <SidebarItem
            icon={<HelpCircle size={20} />}
            label="Ajuda & Suporte"
            to="/help"
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/help'}
          />
        </nav>
      </div>

      <div className="p-4 sticky bottom-0 border-t border-white/10">
        <div className={cn(
          "legal-sidebar-item mt-auto cursor-pointer hover:bg-red-500/20",
          isCollapsed ? "justify-center px-3" : "px-4"
        )}>
          <LogOut size={20} />
          {!isCollapsed && <span className="font-semibold">Sair</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

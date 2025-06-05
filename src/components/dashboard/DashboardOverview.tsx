
import React from 'react';
import KpiCard from '../ui-custom/KpiCard';
import ChartCard from '../ui-custom/ChartCard';
import { Calendar, DollarSign, Users, Star, Zap } from 'lucide-react';

const DashboardOverview = () => {
  // Sample user data - in a real app, this would come from user context/auth
  const userName = "Admin LEGAL";

  // Sample data for charts
  const eventTrendData = [
    { name: 'Jan', value: 12 },
    { name: 'Fev', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Abr', value: 25 },
    { name: 'Mai', value: 32 },
    { name: 'Jun', value: 28 },
    { name: 'Jul', value: 30 },
  ];

  const attendeeData = [
    { name: 'Seg', value: 420 },
    { name: 'Ter', value: 850 },
    { name: 'Qua', value: 1200 },
    { name: 'Qui', value: 980 },
    { name: 'Sex', value: 760 },
    { name: 'Sáb', value: 350 },
  ];

  return (
    <div className="space-y-8 legal-tech-grid min-h-full">
      {/* Welcome section with LEGAL branding */}
      <div className="legal-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 legal-gradient-bg opacity-10 rounded-full -mr-16 -mt-16 legal-animate-float"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between relative z-10">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-2">
              Bem-vindo, {userName}
            </h1>
            <p className="text-muted-foreground text-lg">Aqui está o resumo dos seus eventos na plataforma EVENTRIX</p>
            <div className="legal-powered-badge mt-4 legal-animate-pulse">
              <Zap size={14} />
              <span>Powered by LEGAL AI</span>
            </div>
          </div>
          <button className="legal-gradient-button px-8 py-4 mt-6 sm:mt-0 text-lg font-bold">
            + Novo Evento
          </button>
        </div>
      </div>
      
      {/* KPI Cards with new styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="legal-kpi-card">
          <KpiCard 
            title="Total de Eventos" 
            value="24" 
            icon={<Calendar />} 
            trend={{ value: 12, isPositive: true }}
          />
        </div>
        <div className="legal-kpi-card">
          <KpiCard 
            title="Receita Total" 
            value="R$ 842.500" 
            icon={<DollarSign />} 
            trend={{ value: 8.5, isPositive: true }}
          />
        </div>
        <div className="legal-kpi-card">
          <KpiCard 
            title="Expositores" 
            value="164" 
            icon={<Users />} 
            trend={{ value: 5.2, isPositive: true }}
          />
        </div>
        <div className="legal-kpi-card">
          <KpiCard 
            title="NPS Médio" 
            value="8.7" 
            icon={<Star />} 
            trend={{ value: 1.2, isPositive: true }}
          />
        </div>
      </div>
      
      {/* Charts with enhanced styling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="legal-card">
          <ChartCard 
            title="Crescimento de Eventos" 
            subtitle="Últimos 7 meses" 
            type="line" 
            data={eventTrendData}
          />
        </div>
        <div className="legal-card">
          <ChartCard 
            title="Visitantes por Dia" 
            subtitle="Evento atual" 
            type="bar" 
            data={attendeeData} 
          />
        </div>
      </div>
      
      {/* Enhanced bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <div className="legal-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-tertiary">Eventos Próximos</h3>
            <div className="legal-powered-badge">
              <Zap size={12} />
              <span>LEGAL AI</span>
            </div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-300">
                <div className="flex items-center">
                  <div className="legal-gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mr-4 legal-animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    <Calendar size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Tech Summit {2023 + i}</p>
                    <p className="text-sm text-muted-foreground">10-12 de Outubro, {2023 + i}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm py-2 px-4 rounded-full font-semibold">
                  {i === 1 ? 'Em 3 semanas' : i === 2 ? 'Em 2 meses' : 'Em 6 meses'}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-primary hover:text-tertiary font-semibold text-lg transition-colors duration-300">
            Ver todos os eventos
          </button>
        </div>
        
        {/* AI Insights */}
        <div className="legal-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-tertiary">Insights de IA</h3>
            <div className="legal-powered-badge">
              <Zap size={12} />
              <span>LEGAL AI</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-300">
              <div className="bg-gradient-to-r from-secondary/20 to-secondary/30 p-3 rounded-xl mr-4 mt-1">
                <div className="bg-secondary w-3 h-3 rounded-full legal-animate-pulse"></div>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">Padrão de Público</p>
                <p className="text-muted-foreground">O LegalGPT™ identificou um padrão de interesse em palestras sobre IA nas quartas-feiras à tarde.</p>
              </div>
            </div>
            <div className="flex items-start hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-300">
              <div className="bg-gradient-to-r from-tertiary/20 to-tertiary/30 p-3 rounded-xl mr-4 mt-1">
                <div className="bg-tertiary w-3 h-3 rounded-full legal-animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">Expositores em Destaque</p>
                <p className="text-muted-foreground">LinkAI™ recomenda aumentar espaço para expositores de tecnologia blockchain no próximo evento.</p>
              </div>
            </div>
            <div className="flex items-start hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-300">
              <div className="bg-gradient-to-r from-primary/20 to-primary/30 p-3 rounded-xl mr-4 mt-1">
                <div className="bg-primary w-3 h-3 rounded-full legal-animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">Previsão de Tráfego</p>
                <p className="text-muted-foreground">FacePass™ prevê 22% mais visitantes na próxima edição com base no histórico de participantes.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 text-primary hover:text-tertiary font-semibold text-lg transition-colors duration-300">
            Ver todos os insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

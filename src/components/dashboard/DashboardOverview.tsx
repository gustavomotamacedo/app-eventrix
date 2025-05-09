
import React from 'react';
import KpiCard from '../ui-custom/KpiCard';
import ChartCard from '../ui-custom/ChartCard';
import { Calendar, DollarSign, Users, Star } from 'lucide-react';

const DashboardOverview = () => {
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
    <div className="space-y-6">
      {/* Welcome message */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1>Bem-vindo ao HUBX™</h1>
          <p className="text-muted-foreground">Aqui está o resumo dos seus eventos</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
          + Novo Evento
        </button>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          title="Total de Eventos" 
          value="24" 
          icon={<Calendar />} 
          trend={{ value: 12, isPositive: true }}
        />
        <KpiCard 
          title="Receita Total" 
          value="R$ 842.500" 
          icon={<DollarSign />} 
          trend={{ value: 8.5, isPositive: true }}
        />
        <KpiCard 
          title="Expositores" 
          value="164" 
          icon={<Users />} 
          trend={{ value: 5.2, isPositive: true }}
        />
        <KpiCard 
          title="NPS Médio" 
          value="8.7" 
          icon={<Star />} 
          trend={{ value: 1.2, isPositive: true }}
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="Crescimento de Eventos" 
          subtitle="Últimos 7 meses" 
          type="line" 
          data={eventTrendData}
        />
        <ChartCard 
          title="Visitantes por Dia" 
          subtitle="Evento atual" 
          type="bar" 
          data={attendeeData} 
        />
      </div>
      
      {/* Upcoming Events and AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="hubx-card p-5">
          <h3 className="text-lg font-semibold mb-4">Eventos Próximos</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="flex items-center">
                  <div className="bg-primary/10 w-10 h-10 rounded flex items-center justify-center mr-3">
                    <Calendar size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Tech Summit {2023 + i}</p>
                    <p className="text-sm text-muted-foreground">10-12 de Outubro, {2023 + i}</p>
                  </div>
                </div>
                <div className="bg-muted text-xs py-1 px-2 rounded-full font-medium">
                  {i === 1 ? 'Em 3 semanas' : i === 2 ? 'Em 2 meses' : 'Em 6 meses'}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-primary hover:text-primary-dark text-sm font-medium">
            Ver todos os eventos
          </button>
        </div>
        
        {/* AI Insights */}
        <div className="hubx-card p-5">
          <h3 className="text-lg font-semibold mb-4">Insights de IA</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                <div className="bg-secondary w-2 h-2 rounded-full animate-pulse-light"></div>
              </div>
              <div>
                <p className="font-medium">Padrão de Público</p>
                <p className="text-sm text-muted-foreground">O LegalGPT™ identificou um padrão de interesse em palestras sobre IA nas quartas-feiras à tarde.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-tertiary/20 p-2 rounded-full mr-3 mt-0.5">
                <div className="bg-tertiary w-2 h-2 rounded-full animate-pulse-light"></div>
              </div>
              <div>
                <p className="font-medium">Expositores em Destaque</p>
                <p className="text-sm text-muted-foreground">LinkAI™ recomenda aumentar espaço para expositores de tecnologia blockchain no próximo evento.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/20 p-2 rounded-full mr-3 mt-0.5">
                <div className="bg-primary w-2 h-2 rounded-full animate-pulse-light"></div>
              </div>
              <div>
                <p className="font-medium">Previsão de Tráfego</p>
                <p className="text-sm text-muted-foreground">FacePass™ prevê 22% mais visitantes na próxima edição com base no histórico de participantes.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 text-primary hover:text-primary-dark text-sm font-medium">
            Ver todos os insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

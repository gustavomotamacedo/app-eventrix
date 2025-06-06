
import React from 'react';
import { Activity, Shield, Globe } from 'lucide-react';
import KpiCard from '@/components/ui-custom/KpiCard';

interface ApiStats {
  totalRequests: number;
  successRate: number;
  avgResponseTime: number;
  activeEndpoints: number;
}

interface ApiStatsProps {
  stats: ApiStats;
}

const ApiStats: React.FC<ApiStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <KpiCard
        title="Total de Requisições"
        value={stats.totalRequests.toLocaleString()}
        icon={<Activity />}
        trend={{ value: 18.5, isPositive: true }}
      />
      <KpiCard
        title="Taxa de Sucesso"
        value={`${stats.successRate}%`}
        icon={<Shield />}
        trend={{ value: 0.3, isPositive: true }}
      />
      <KpiCard
        title="Tempo de Resposta"
        value={`${stats.avgResponseTime}ms`}
        icon={<Activity />}
        trend={{ value: 12.2, isPositive: false }}
      />
      <KpiCard
        title="Endpoints Ativos"
        value={stats.activeEndpoints.toString()}
        icon={<Globe />}
        trend={{ value: 2, isPositive: true }}
      />
    </div>
  );
};

export default ApiStats;

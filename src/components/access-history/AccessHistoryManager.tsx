
import React from 'react';
import { History, Filter, Search, Download, Eye, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AccessHistoryManager = () => {
  const accessLogs = [
    {
      id: 1,
      user: 'João Silva',
      action: 'Check-in',
      location: 'Entrada Principal',
      timestamp: '2024-02-15 08:30:15',
      device: 'Scanner QR #001',
      status: 'Sucesso'
    },
    {
      id: 2,
      user: 'Maria Santos',
      action: 'Acesso ao Lab',
      location: 'Lab de Inovação',
      timestamp: '2024-02-15 09:15:42',
      device: 'Leitor Facial #003',
      status: 'Sucesso'
    },
    {
      id: 3,
      user: 'Pedro Costa',
      action: 'Check-in',
      location: 'Entrada Principal',
      timestamp: '2024-02-15 08:45:22',
      device: 'Scanner QR #001',
      status: 'Falha'
    },
    {
      id: 4,
      user: 'Ana Oliveira',
      action: 'Acesso à Sala VIP',
      location: 'Sala VIP',
      timestamp: '2024-02-15 10:20:18',
      device: 'Leitor de Crachá #002',
      status: 'Sucesso'
    }
  ];

  return (
    <div className="space-y-6 tech-grid min-h-full p-6">
      {/* Header */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Histórico de Acessos</h1>
            <p className="text-muted-foreground">Monitore todos os acessos e movimentações do evento</p>
          </div>
          <Button className="tech-button">
            <Download size={16} className="mr-2" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar por usuário, localização ou ação..." className="pl-10 tech-input" />
            </div>
          </div>
          <Button variant="outline" className="shrink-0">
            <Filter size={16} className="mr-2" />
            Filtros Avançados
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total de Acessos</p>
              <h3 className="text-2xl font-bold mt-1">2,847</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <History size={20} className="text-primary" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Acessos Hoje</p>
              <h3 className="text-2xl font-bold mt-1">428</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <Clock size={20} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              <h3 className="text-2xl font-bold mt-1">97.2%</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <Eye size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Usuários Únicos</p>
              <h3 className="text-2xl font-bold mt-1">1,245</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <User size={20} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Access Logs */}
      <div className="tech-card p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Logs de Acesso</h2>
          <p className="text-sm text-muted-foreground">Últimas atividades registradas</p>
        </div>
        
        <div className="space-y-3">
          {accessLogs.map((log) => (
            <div key={log.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{log.user}</h3>
                    <p className="text-sm text-muted-foreground">{log.action} • {log.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{log.timestamp}</p>
                    <p className="text-xs text-muted-foreground">{log.device}</p>
                  </div>
                  <span className={`tech-badge ${
                    log.status === 'Sucesso' 
                      ? 'text-green-600 bg-green-50 border-green-200' 
                      : 'text-red-600 bg-red-50 border-red-200'
                  }`}>
                    {log.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Eye size={14} className="mr-1" />
                    Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button variant="outline">
            Carregar Mais Logs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessHistoryManager;

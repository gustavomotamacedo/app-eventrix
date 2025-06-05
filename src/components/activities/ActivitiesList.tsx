
import React from 'react';
import { Activity, Plus, Clock, Users, MapPin, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ActivitiesList = () => {
  const activities = [
    {
      id: 1,
      name: 'Workshop de IA Generativa',
      type: 'Workshop',
      duration: '2 horas',
      capacity: 30,
      registered: 28,
      instructor: 'Dr. Ana Costa',
      location: 'Lab de Inovação',
      date: '2024-02-15',
      time: '14:00',
      status: 'Confirmado'
    },
    {
      id: 2,
      name: 'Mesa Redonda: Futuro da Tech',
      type: 'Mesa Redonda',
      duration: '1.5 horas',
      capacity: 100,
      registered: 85,
      instructor: 'Painel de Especialistas',
      location: 'Auditório Principal',
      date: '2024-02-16',
      time: '10:30',
      status: 'Confirmado'
    },
    {
      id: 3,
      name: 'Hands-on: DevOps na Prática',
      type: 'Hands-on',
      duration: '3 horas',
      capacity: 25,
      registered: 22,
      instructor: 'Carlos Silva',
      location: 'Lab de DevOps',
      date: '2024-02-17',
      time: '09:00',
      status: 'Confirmado'
    }
  ];

  return (
    <div className="space-y-6 tech-grid min-h-full p-6">
      {/* Header */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Atividades</h1>
            <p className="text-muted-foreground">Organize workshops, mesas redondas e atividades práticas</p>
          </div>
          <Button className="tech-button">
            <Plus size={16} className="mr-2" />
            Nova Atividade
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar atividades..." className="pl-10 tech-input" />
            </div>
          </div>
          <Button variant="outline" className="shrink-0">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total de Atividades</p>
              <h3 className="text-2xl font-bold mt-1">18</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <Activity size={20} className="text-primary" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Participantes</p>
              <h3 className="text-2xl font-bold mt-1">680</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <Users size={20} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Taxa de Ocupação</p>
              <h3 className="text-2xl font-bold mt-1">89%</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <Activity size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Duração Total</p>
              <h3 className="text-2xl font-bold mt-1">42h</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <Clock size={20} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="tech-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                  <Activity size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{activity.name}</h3>
                  <p className="text-sm text-muted-foreground">{activity.type}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Editar
              </Button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-muted-foreground" />
                <span className="text-sm">{activity.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-muted-foreground" />
                <span className="text-sm">{activity.registered}/{activity.capacity} inscritos</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-muted-foreground" />
                <span className="text-sm">{activity.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Instrutor:</span>
                <span className="text-sm font-medium">{activity.instructor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {new Date(activity.date).toLocaleDateString('pt-BR')} • {activity.time}
                </span>
                <span className="tech-badge text-green-600 bg-green-50 border-green-200">
                  {activity.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;

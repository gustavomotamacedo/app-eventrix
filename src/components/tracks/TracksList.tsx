
import React from 'react';
import { Activity, Plus, Users, Clock, MapPin, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TracksList = () => {
  const tracks = [
    {
      id: 1,
      name: 'Trilha de Inovação',
      description: 'Tecnologias emergentes e tendências futuras',
      color: '#4D2BFB',
      sessions: 8,
      duration: '6 horas',
      location: 'Auditório Principal',
      speakers: 12,
      attendees: 450
    },
    {
      id: 2,
      name: 'Trilha de Negócios',
      description: 'Estratégias empresariais e liderança',
      color: '#03F9FF',
      sessions: 6,
      duration: '4 horas',
      location: 'Sala de Conferências A',
      speakers: 8,
      attendees: 320
    },
    {
      id: 3,
      name: 'Trilha Técnica',
      description: 'Desenvolvimento, arquitetura e DevOps',
      color: '#020CBC',
      sessions: 10,
      duration: '8 horas',
      location: 'Labs de Tecnologia',
      speakers: 15,
      attendees: 280
    }
  ];

  return (
    <div className="space-y-6 tech-grid min-h-full p-6">
      {/* Header */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Trilhas</h1>
            <p className="text-muted-foreground">Organize palestras em trilhas temáticas</p>
          </div>
          <Button className="tech-button">
            <Plus size={16} className="mr-2" />
            Nova Trilha
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar trilhas..." className="pl-10 tech-input" />
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
              <p className="text-sm text-muted-foreground">Total de Trilhas</p>
              <h3 className="text-2xl font-bold mt-1">3</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <Activity size={20} className="text-primary" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Sessões</p>
              <h3 className="text-2xl font-bold mt-1">24</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <Clock size={20} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Palestrantes</p>
              <h3 className="text-2xl font-bold mt-1">35</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <Users size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Participantes</p>
              <h3 className="text-2xl font-bold mt-1">1,050</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <Users size={20} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div key={track.id} className="tech-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: track.color }}
                />
                <h3 className="font-semibold text-lg">{track.name}</h3>
              </div>
              <Button variant="outline" size="sm">
                Editar
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mb-4">{track.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-muted-foreground" />
                <span className="text-sm">{track.sessions} sessões</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span className="text-sm">{track.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-sm">{track.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-muted-foreground" />
                <span className="text-sm">{track.speakers} palestrantes</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Participantes</span>
                <span className="font-semibold">{track.attendees}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksList;

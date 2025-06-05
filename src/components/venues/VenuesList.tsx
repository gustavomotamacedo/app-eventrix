
import React from 'react';
import { MapPin, Plus, Users, Wifi, Car, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const VenuesList = () => {
  const venues = [
    {
      id: 1,
      name: 'Auditório Principal',
      type: 'Auditório',
      capacity: 500,
      location: 'Piso Térreo - Ala A',
      amenities: ['Projetor 4K', 'Sistema de Som', 'Ar Condicionado', 'WiFi'],
      status: 'Disponível',
      events: 8
    },
    {
      id: 2,
      name: 'Sala de Conferências A',
      type: 'Sala de Conferência',
      capacity: 120,
      location: '1º Andar - Ala B',
      amenities: ['TV 65"', 'Sistema de Som', 'Mesa Redonda', 'WiFi'],
      status: 'Ocupado',
      events: 5
    },
    {
      id: 3,
      name: 'Labs de Tecnologia',
      type: 'Laboratório',
      capacity: 80,
      location: '2º Andar - Ala C',
      amenities: ['Computadores', 'Projetores', 'Bancadas', 'WiFi'],
      status: 'Disponível',
      events: 12
    },
    {
      id: 4,
      name: 'Espaço de Networking',
      type: 'Área Social',
      capacity: 200,
      location: 'Piso Térreo - Centro',
      amenities: ['Bar', 'Lounge', 'WiFi', 'Música Ambiente'],
      status: 'Disponível',
      events: 3
    }
  ];

  return (
    <div className="space-y-6 tech-grid min-h-full p-6">
      {/* Header */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Salas e Locais</h1>
            <p className="text-muted-foreground">Gerencie espaços e suas configurações</p>
          </div>
          <Button className="tech-button">
            <Plus size={16} className="mr-2" />
            Novo Local
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar por nome ou localização..." className="pl-10 tech-input" />
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
              <p className="text-sm text-muted-foreground">Total de Locais</p>
              <h3 className="text-2xl font-bold mt-1">4</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <MapPin size={20} className="text-primary" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Capacidade Total</p>
              <h3 className="text-2xl font-bold mt-1">900</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <Users size={20} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Disponíveis</p>
              <h3 className="text-2xl font-bold mt-1">3</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <MapPin size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Em Uso</p>
              <h3 className="text-2xl font-bold mt-1">1</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
              <MapPin size={20} className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {venues.map((venue) => (
          <div key={venue.id} className="tech-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">{venue.name}</h3>
                <p className="text-sm text-muted-foreground">{venue.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`tech-badge ${
                  venue.status === 'Disponível' 
                    ? 'text-green-600 bg-green-50 border-green-200' 
                    : 'text-orange-600 bg-orange-50 border-orange-200'
                }`}>
                  {venue.status}
                </span>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Capacidade</p>
                <p className="font-semibold">{venue.capacity} pessoas</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Eventos</p>
                <p className="font-semibold">{venue.events} agendados</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin size={14} />
                <span>{venue.location}</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Comodidades:</p>
              <div className="flex flex-wrap gap-1">
                {venue.amenities.map((amenity) => (
                  <span key={amenity} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenuesList;

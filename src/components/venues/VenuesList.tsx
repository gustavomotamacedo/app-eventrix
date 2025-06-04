
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Users, MapPin, Edit, Trash2, Eye, Wifi, Car, Coffee } from 'lucide-react';
import VenueForm from './VenueForm';

const VenuesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const venues = [
    {
      id: 1,
      name: 'Auditório Principal',
      type: 'auditório',
      capacity: 300,
      area: 250,
      location: 'Térreo - Ala Norte',
      description: 'Auditório principal com sistema de som e vídeo completo',
      amenities: ['Wifi', 'Ar Condicionado', 'Projetor', 'Sistema de Som'],
      status: 'disponível',
      price_per_hour: 500
    },
    {
      id: 2,
      name: 'Sala de Conferências A',
      type: 'sala_conferência',
      capacity: 80,
      area: 60,
      location: '1º Andar - Ala Leste',
      description: 'Sala moderna para conferências e workshops',
      amenities: ['Wifi', 'Ar Condicionado', 'TV 65"', 'Flipchart'],
      status: 'disponível',
      price_per_hour: 200
    },
    {
      id: 3,
      name: 'Sala de Workshops',
      type: 'workshop',
      capacity: 30,
      area: 40,
      location: '1º Andar - Ala Oeste',
      description: 'Espaço adaptado para atividades práticas',
      amenities: ['Wifi', 'Mesas Móveis', 'Quadro Branco'],
      status: 'ocupada',
      price_per_hour: 150
    },
    {
      id: 4,
      name: 'Área de Convivência',
      type: 'área_externa',
      capacity: 200,
      area: 150,
      location: 'Térreo - Jardim',
      description: 'Espaço aberto para networking e coffee breaks',
      amenities: ['Wifi', 'Mesas de Apoio', 'Tomadas'],
      status: 'disponível',
      price_per_hour: 100
    }
  ];

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponível': return 'bg-green-100 text-green-800';
      case 'ocupada': return 'bg-red-100 text-red-800';
      case 'manutenção': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'auditório': return 'bg-blue-100 text-blue-800';
      case 'sala_conferência': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-orange-100 text-orange-800';
      case 'área_externa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'estacionamento': return <Car className="h-4 w-4" />;
      case 'coffee break': return <Coffee className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Salas e Locais</h1>
          <p className="text-muted-foreground">
            Gerencie os espaços disponíveis para o evento.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Local
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedVenue ? 'Editar Local' : 'Novo Local'}</DialogTitle>
              <DialogDescription>
                {selectedVenue ? 'Edite as informações do local.' : 'Adicione um novo local para o evento.'}
              </DialogDescription>
            </DialogHeader>
            <VenueForm
              venue={selectedVenue}
              onClose={() => {
                setIsDialogOpen(false);
                setSelectedVenue(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar locais..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVenues.map((venue) => (
          <Card key={venue.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <Badge className={getStatusColor(venue.status)}>
                    {venue.status}
                  </Badge>
                  <Badge variant="outline" className={getTypeColor(venue.type)}>
                    {venue.type.replace('_', ' ')}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedVenue(venue);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{venue.name}</CardTitle>
              <CardDescription>{venue.location}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    Capacidade
                  </div>
                  <span className="font-medium">{venue.capacity} pessoas</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Área:</span>
                  <span className="font-medium">{venue.area}m²</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Preço/hora:</span>
                  <span className="font-medium">R$ {venue.price_per_hour}</span>
                </div>
                <div className="pt-2">
                  <span className="text-sm text-muted-foreground">Comodidades:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {venue.amenities.slice(0, 3).map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {venue.amenities.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{venue.amenities.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 pt-2">
                  {venue.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VenuesList;

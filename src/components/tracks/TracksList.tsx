
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Calendar, Users, Edit, Trash2, Eye } from 'lucide-react';
import TrackForm from './TrackForm';

const TracksList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const tracks = [
    {
      id: 1,
      name: 'Tecnologia e Inovação',
      description: 'Palestras sobre as últimas tendências tecnológicas',
      color: '#3B82F6',
      coordinator: 'Dr. João Silva',
      lectures_count: 8,
      duration: '2 dias',
      status: 'ativa'
    },
    {
      id: 2,
      name: 'Sustentabilidade',
      description: 'Discussões sobre práticas sustentáveis e meio ambiente',
      color: '#10B981',
      coordinator: 'Dra. Maria Santos',
      lectures_count: 6,
      duration: '1 dia',
      status: 'ativa'
    },
    {
      id: 3,
      name: 'Marketing Digital',
      description: 'Estratégias e ferramentas de marketing digital',
      color: '#F59E0B',
      coordinator: 'Carlos Oliveira',
      lectures_count: 5,
      duration: '1 dia',
      status: 'planejamento'
    },
    {
      id: 4,
      name: 'Empreendedorismo',
      description: 'Cases de sucesso e estratégias empreendedoras',
      color: '#EF4444',
      coordinator: 'Ana Costa',
      lectures_count: 4,
      duration: '1 dia',
      status: 'ativa'
    }
  ];

  const filteredTracks = tracks.filter(track =>
    track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.coordinator.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativa': return 'bg-green-100 text-green-800';
      case 'planejamento': return 'bg-yellow-100 text-yellow-800';
      case 'finalizada': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trilhas</h1>
          <p className="text-muted-foreground">
            Organize palestras em trilhas temáticas.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Trilha
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedTrack ? 'Editar Trilha' : 'Nova Trilha'}</DialogTitle>
              <DialogDescription>
                {selectedTrack ? 'Edite as informações da trilha.' : 'Crie uma nova trilha temática para o evento.'}
              </DialogDescription>
            </DialogHeader>
            <TrackForm
              track={selectedTrack}
              onClose={() => {
                setIsDialogOpen(false);
                setSelectedTrack(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar trilhas..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTracks.map((track) => (
          <Card key={track.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: track.color }}
                  />
                  <Badge className={getStatusColor(track.status)}>
                    {track.status}
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
                      setSelectedTrack(track);
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
              <CardTitle className="text-lg leading-tight">{track.name}</CardTitle>
              <CardDescription>{track.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Coordenador:</span>
                  <span className="font-medium">{track.coordinator}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Palestras:</span>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span className="font-medium">{track.lectures_count}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duração:</span>
                  <span className="font-medium">{track.duration}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TracksList;

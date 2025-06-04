
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Calendar, Clock, Users, MapPin, Edit, Trash2, Eye } from 'lucide-react';
import ActivityForm from './ActivityForm';

const ActivitiesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const activities = [
    {
      id: 1,
      name: 'Workshop de Design Thinking',
      type: 'workshop',
      description: 'Aprenda metodologias de design thinking na prática',
      date: '2024-06-15',
      time: '14:00',
      duration: 120,
      venue: 'Sala de Workshops',
      facilitator: 'Ana Costa',
      max_participants: 25,
      registered: 18,
      status: 'aberta'
    },
    {
      id: 2,
      name: 'Coffee Break Networking',
      type: 'networking',
      description: 'Momento para networking entre participantes',
      date: '2024-06-15',
      time: '10:00',
      duration: 30,
      venue: 'Área de Convivência',
      facilitator: 'Equipe do Evento',
      max_participants: 200,
      registered: 156,
      status: 'confirmada'
    },
    {
      id: 3,
      name: 'Mesa Redonda: Futuro da Tecnologia',
      type: 'mesa_redonda',
      description: 'Debate com especialistas sobre tendências tecnológicas',
      date: '2024-06-15',
      time: '16:00',
      duration: 90,
      venue: 'Auditório Principal',
      facilitator: 'Dr. João Silva',
      max_participants: 150,
      registered: 89,
      status: 'aberta'
    }
  ];

  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.facilitator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aberta': return 'bg-green-100 text-green-800';
      case 'confirmada': return 'bg-blue-100 text-blue-800';
      case 'lotada': return 'bg-yellow-100 text-yellow-800';
      case 'cancelada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-purple-100 text-purple-800';
      case 'networking': return 'bg-orange-100 text-orange-800';
      case 'mesa_redonda': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Atividades</h1>
          <p className="text-muted-foreground">
            Gerencie workshops, networking e outras atividades do evento.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Atividade
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedActivity ? 'Editar Atividade' : 'Nova Atividade'}</DialogTitle>
              <DialogDescription>
                {selectedActivity ? 'Edite as informações da atividade.' : 'Adicione uma nova atividade ao evento.'}
              </DialogDescription>
            </DialogHeader>
            <ActivityForm
              activity={selectedActivity}
              onClose={() => {
                setIsDialogOpen(false);
                setSelectedActivity(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar atividades..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.map((activity) => (
          <Card key={activity.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <Badge className={getStatusColor(activity.status)}>
                    {activity.status}
                  </Badge>
                  <Badge variant="outline" className={getTypeColor(activity.type)}>
                    {activity.type.replace('_', ' ')}
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
                      setSelectedActivity(activity);
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
              <CardTitle className="text-lg leading-tight">{activity.name}</CardTitle>
              <CardDescription>{activity.facilitator}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(activity.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {activity.time} ({activity.duration}min)
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {activity.venue}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    Participantes
                  </div>
                  <span className="font-medium">
                    {activity.registered}/{activity.max_participants}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(activity.registered / activity.max_participants) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 pt-2">
                  {activity.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;

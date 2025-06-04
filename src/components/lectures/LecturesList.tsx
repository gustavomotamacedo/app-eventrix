
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Calendar, Clock, Users, MapPin, Edit, Trash2, Eye } from 'lucide-react';
import LectureForm from './LectureForm';

const LecturesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const lectures = [
    {
      id: 1,
      title: 'Inovação e Tecnologia no Século XXI',
      speaker: 'Dr. João Silva',
      date: '2024-06-15',
      time: '09:00',
      duration: 60,
      venue: 'Auditório Principal',
      track: 'Tecnologia',
      description: 'Uma visão abrangente sobre as tendências tecnológicas',
      attendees: 150,
      status: 'confirmada'
    },
    {
      id: 2,
      title: 'Sustentabilidade e Negócios',
      speaker: 'Dra. Maria Santos',
      date: '2024-06-15',
      time: '10:30',
      duration: 45,
      venue: 'Sala de Conferências A',
      track: 'Sustentabilidade',
      description: 'Como integrar práticas sustentáveis nos negócios',
      attendees: 80,
      status: 'confirmada'
    },
    {
      id: 3,
      title: 'Marketing Digital: Estratégias 2024',
      speaker: 'Carlos Oliveira',
      date: '2024-06-15',
      time: '14:00',
      duration: 90,
      venue: 'Sala de Workshops',
      track: 'Marketing',
      description: 'Últimas tendências em marketing digital',
      attendees: 120,
      status: 'pendente'
    }
  ];

  const filteredLectures = lectures.filter(lecture =>
    lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lecture.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lecture.track.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmada': return 'bg-green-100 text-green-800';
      case 'pendente': return 'bg-yellow-100 text-yellow-800';
      case 'cancelada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Palestras</h1>
          <p className="text-muted-foreground">
            Gerencie as palestras e apresentações do evento.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Palestra
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedLecture ? 'Editar Palestra' : 'Nova Palestra'}</DialogTitle>
              <DialogDescription>
                {selectedLecture ? 'Edite as informações da palestra.' : 'Adicione uma nova palestra ao evento.'}
              </DialogDescription>
            </DialogHeader>
            <LectureForm
              lecture={selectedLecture}
              onClose={() => {
                setIsDialogOpen(false);
                setSelectedLecture(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar palestras..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLectures.map((lecture) => (
          <Card key={lecture.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <Badge className={getStatusColor(lecture.status)}>
                  {lecture.status}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedLecture(lecture);
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
              <CardTitle className="text-lg leading-tight">{lecture.title}</CardTitle>
              <CardDescription>{lecture.speaker}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(lecture.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {lecture.time} ({lecture.duration}min)
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {lecture.venue}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {lecture.attendees} participantes
                </div>
                <div className="pt-2">
                  <Badge variant="outline">{lecture.track}</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {lecture.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LecturesList;

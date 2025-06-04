
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { 
  Search, 
  Filter, 
  Download,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  TrendingUp,
  Users,
  Timer,
  Activity
} from 'lucide-react';

const AccessHistoryManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  // Sample access history data
  const accessHistory = [
    {
      id: 1,
      name: 'Ana Silva',
      email: 'ana.silva@email.com',
      type: 'checkin',
      location: 'Entrada Principal',
      timestamp: '2024-06-10 09:15:30',
      method: 'QR Code',
      duration: '4h 25m',
      userType: 'Visitante'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      email: 'carlos.mendes@email.com',
      type: 'checkout',
      location: 'Saída Sul',
      timestamp: '2024-06-10 13:40:15',
      method: 'Facial',
      duration: '4h 25m',
      userType: 'Palestrante'
    },
    {
      id: 3,
      name: 'Mariana Costa',
      email: 'mariana.costa@email.com',
      type: 'checkin',
      location: 'Entrada VIP',
      timestamp: '2024-06-10 08:30:45',
      method: 'QR Code',
      duration: '6h 10m',
      userType: 'Expositor'
    },
    {
      id: 4,
      name: 'João Santos',
      email: 'joao.santos@email.com',
      type: 'checkin',
      location: 'Entrada Principal',
      timestamp: '2024-06-10 10:22:18',
      method: 'Facial',
      duration: '3h 38m',
      userType: 'Staff'
    },
    {
      id: 5,
      name: 'Patricia Lima',
      email: 'patricia.lima@email.com',
      type: 'checkout',
      location: 'Entrada Principal',
      timestamp: '2024-06-10 15:45:22',
      method: 'QR Code',
      duration: '5h 23m',
      userType: 'Visitante'
    }
  ];

  const accessStats = {
    totalAccesses: 1247,
    todayAccesses: 156,
    averageStayTime: '4h 32m',
    peakHour: '14:00-15:00'
  };

  const locations = ['Entrada Principal', 'Entrada VIP', 'Saída Sul', 'Saída Norte'];

  const filteredHistory = accessHistory.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || record.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || record.location === selectedLocation;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Histórico de Acessos</h2>
          <p className="text-muted-foreground">Visualize e analise o histórico completo de acessos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avançados
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total de Acessos</p>
                <p className="text-2xl font-bold">{accessStats.totalAccesses.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Acessos Hoje</p>
                <p className="text-2xl font-bold">{accessStats.todayAccesses}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Tempo Médio</p>
                <p className="text-2xl font-bold">{accessStats.averageStayTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Horário de Pico</p>
                <p className="text-2xl font-bold">{accessStats.peakHour}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Acesso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="checkin">Check-in</SelectItem>
                <SelectItem value="checkout">Check-out</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Local" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os locais</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateFrom ? format(dateFrom, "dd/MM/yyyy") : "Data início"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateFrom}
                  onSelect={setDateFrom}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateTo ? format(dateTo, "dd/MM/yyyy") : "Data fim"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateTo}
                  onSelect={setDateTo}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* Access History List */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Acessos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredHistory.map((record) => (
              <div key={record.id} className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {record.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{record.name}</p>
                    <p className="text-sm text-muted-foreground">{record.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <Badge className={record.type === 'checkin' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {record.type === 'checkin' ? 'Check-in' : 'Check-out'}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{record.method}</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{record.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{record.timestamp}</p>
                  </div>

                  <div className="text-center">
                    <Badge variant="outline">{record.userType}</Badge>
                    {record.duration && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Duração: {record.duration}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nenhum registro encontrado com os filtros aplicados.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessHistoryManager;

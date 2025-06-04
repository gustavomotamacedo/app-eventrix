
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Plus, 
  Search, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Calendar,
  User,
  Filter
} from 'lucide-react';

const TeamTasksManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Sample teams data
  const teams = [
    {
      id: 1,
      name: 'Logística',
      leader: 'Ana Silva',
      members: 8,
      tasksTotal: 25,
      tasksCompleted: 18,
      tasksInProgress: 5,
      tasksPending: 2,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 2,
      name: 'Tecnologia',
      leader: 'Carlos Mendes',
      members: 5,
      tasksTotal: 15,
      tasksCompleted: 12,
      tasksInProgress: 2,
      tasksPending: 1,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 3,
      name: 'Recepção',
      leader: 'Mariana Costa',
      members: 12,
      tasksTotal: 30,
      tasksCompleted: 20,
      tasksInProgress: 8,
      tasksPending: 2,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 4,
      name: 'Catering',
      leader: 'João Santos',
      members: 6,
      tasksTotal: 20,
      tasksCompleted: 8,
      tasksInProgress: 7,
      tasksPending: 5,
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: 'Configurar sistema de som principal',
      description: 'Instalar e testar equipamentos de áudio no auditório principal',
      team: 'Tecnologia',
      assignee: 'Pedro Silva',
      priority: 'high',
      status: 'completed',
      dueDate: '2024-06-10',
      createdAt: '2024-06-05'
    },
    {
      id: 2,
      title: 'Organizar materiais de credenciamento',
      description: 'Preparar crachás, lanyards e materiais informativos',
      team: 'Recepção',
      assignee: 'Maria Santos',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '2024-06-12',
      createdAt: '2024-06-06'
    },
    {
      id: 3,
      title: 'Definir menu para coffee-break',
      description: 'Escolher fornecedores e finalizar cardápio',
      team: 'Catering',
      assignee: 'Ana Costa',
      priority: 'medium',
      status: 'pending',
      dueDate: '2024-06-15',
      createdAt: '2024-06-07'
    },
    {
      id: 4,
      title: 'Montar sinalização do evento',
      description: 'Instalar placas direcionais e informativas',
      team: 'Logística',
      assignee: 'Roberto Lima',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2024-06-14',
      createdAt: '2024-06-08'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = selectedTeam === 'all' || task.team === selectedTeam;
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    return matchesSearch && matchesTeam && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Tarefas por Equipe</h2>
          <p className="text-muted-foreground">Gerencie tarefas organizadas por equipes</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nova Tarefa
        </Button>
      </div>

      {/* Teams Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teams.map((team) => (
          <Card key={team.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{team.members} membros</p>
                </div>
                <Badge className={team.color}>
                  {team.tasksCompleted}/{team.tasksTotal}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{team.leader}</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-green-600">Concluídas: {team.tasksCompleted}</span>
                  <span className="text-blue-600">Em andamento: {team.tasksInProgress}</span>
                </div>
                <div className="text-xs text-orange-600">
                  Pendentes: {team.tasksPending}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar tarefas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={selectedTeam} onValueChange={setSelectedTeam}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Equipe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as equipes</SelectItem>
            {teams.map(team => (
              <SelectItem key={team.id} value={team.name}>{team.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="in-progress">Em Andamento</SelectItem>
            <SelectItem value="completed">Concluído</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{task.title}</h3>
                    <Badge className={getStatusColor(task.status)}>
                      {task.status === 'completed' && 'Concluído'}
                      {task.status === 'in-progress' && 'Em Andamento'}
                      {task.status === 'pending' && 'Pendente'}
                    </Badge>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority === 'high' && 'Alta'}
                      {task.priority === 'medium' && 'Média'}
                      {task.priority === 'low' && 'Baixa'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{task.team}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Nenhuma tarefa encontrada com os filtros aplicados.</p>
        </div>
      )}
    </div>
  );
};

export default TeamTasksManager;

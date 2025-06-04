
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckSquare, 
  Plus, 
  Search, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  Circle,
  Calendar,
  User
} from 'lucide-react';

const ChecklistManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Sample checklist data
  const checklists = [
    {
      id: 1,
      title: 'Preparação do Local',
      category: 'Logística',
      progress: 75,
      totalTasks: 12,
      completedTasks: 9,
      priority: 'high',
      dueDate: '2024-06-15',
      responsible: 'Equipe Logística',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Setup Tecnológico',
      category: 'Tecnologia',
      progress: 100,
      totalTasks: 8,
      completedTasks: 8,
      priority: 'high',
      dueDate: '2024-06-14',
      responsible: 'Equipe TI',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Credenciamento',
      category: 'Recepção',
      progress: 45,
      totalTasks: 15,
      completedTasks: 7,
      priority: 'medium',
      dueDate: '2024-06-16',
      responsible: 'Equipe Recepção',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Catering e Alimentação',
      category: 'Alimentação',
      progress: 20,
      totalTasks: 10,
      completedTasks: 2,
      priority: 'medium',
      dueDate: '2024-06-17',
      responsible: 'Equipe Catering',
      status: 'pending'
    }
  ];

  const tasks = [
    {
      id: 1,
      checklistId: 1,
      title: 'Verificar capacidade elétrica',
      completed: true,
      priority: 'high',
      assignee: 'João Silva'
    },
    {
      id: 2,
      checklistId: 1,
      title: 'Testar sistema de som',
      completed: true,
      priority: 'high',
      assignee: 'Maria Santos'
    },
    {
      id: 3,
      checklistId: 1,
      title: 'Configurar iluminação',
      completed: false,
      priority: 'medium',
      assignee: 'Pedro Costa'
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

  const filteredChecklists = checklists.filter(checklist => {
    const matchesSearch = checklist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         checklist.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || checklist.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Checklist Geral</h2>
          <p className="text-muted-foreground">Gerencie todos os checklists do evento</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Novo Checklist
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Checklists</p>
                <p className="text-2xl font-bold">{checklists.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Concluídos</p>
                <p className="text-2xl font-bold">
                  {checklists.filter(c => c.status === 'completed').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Em Andamento</p>
                <p className="text-2xl font-bold">
                  {checklists.filter(c => c.status === 'in-progress').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold">
                  {checklists.filter(c => c.status === 'pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar checklists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="pending">Pendentes</TabsTrigger>
          <TabsTrigger value="in-progress">Em Andamento</TabsTrigger>
          <TabsTrigger value="completed">Concluídos</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {/* Checklists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredChecklists.map((checklist) => (
              <Card key={checklist.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{checklist.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{checklist.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(checklist.status)}>
                        {checklist.status === 'completed' && 'Concluído'}
                        {checklist.status === 'in-progress' && 'Em Andamento'}
                        {checklist.status === 'pending' && 'Pendente'}
                      </Badge>
                      <Badge className={getPriorityColor(checklist.priority)}>
                        {checklist.priority === 'high' && 'Alta'}
                        {checklist.priority === 'medium' && 'Média'}
                        {checklist.priority === 'low' && 'Baixa'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{checklist.completedTasks}/{checklist.totalTasks} tarefas</span>
                    </div>
                    <Progress value={checklist.progress} className="h-2" />
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{new Date(checklist.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span>{checklist.responsible}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChecklistManager;

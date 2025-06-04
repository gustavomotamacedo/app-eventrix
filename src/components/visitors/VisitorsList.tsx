
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Plus, Mail, Phone, QrCode, Download, Eye } from 'lucide-react';
import VisitorForm from './VisitorForm';
import VisitorDetails from './VisitorDetails';

interface Visitor {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  category: 'VIP' | 'Imprensa' | 'Geral' | 'Estudante';
  status: 'Confirmado' | 'Pendente' | 'Check-in' | 'Check-out';
  registrationDate: string;
  checkInTime?: string;
  interests: string[];
}

const mockVisitors: Visitor[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@empresa.com',
    phone: '(11) 99999-9999',
    company: 'Tech Corp',
    position: 'Desenvolvedor',
    category: 'Geral',
    status: 'Check-in',
    registrationDate: '2024-01-15',
    checkInTime: '09:30',
    interests: ['Tecnologia', 'Inovação']
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@jornal.com',
    phone: '(11) 88888-8888',
    company: 'Jornal Tech',
    position: 'Jornalista',
    category: 'Imprensa',
    status: 'Confirmado',
    registrationDate: '2024-01-16',
    interests: ['Tecnologia', 'Startups']
  },
  {
    id: '3',
    name: 'Carlos CEO',
    email: 'carlos@vip.com',
    phone: '(11) 77777-7777',
    company: 'VIP Solutions',
    position: 'CEO',
    category: 'VIP',
    status: 'Pendente',
    registrationDate: '2024-01-17',
    interests: ['Negócios', 'Investimentos']
  }
];

const VisitorsList = () => {
  const [visitors, setVisitors] = useState<Visitor[]>(mockVisitors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);

  const filteredVisitors = visitors.filter(visitor => {
    const matchesSearch = visitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visitor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visitor.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || visitor.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || visitor.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmado': return 'bg-blue-100 text-blue-800';
      case 'Pendente': return 'bg-yellow-100 text-yellow-800';
      case 'Check-in': return 'bg-green-100 text-green-800';
      case 'Check-out': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'VIP': return 'bg-purple-100 text-purple-800';
      case 'Imprensa': return 'bg-orange-100 text-orange-800';
      case 'Geral': return 'bg-blue-100 text-blue-800';
      case 'Estudante': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header com estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{visitors.length}</div>
            <div className="text-sm text-gray-600">Total de Visitantes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {visitors.filter(v => v.status === 'Check-in').length}
            </div>
            <div className="text-sm text-gray-600">Presentes no Evento</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {visitors.filter(v => v.status === 'Confirmado').length}
            </div>
            <div className="text-sm text-gray-600">Confirmados</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">
              {visitors.filter(v => v.category === 'VIP').length}
            </div>
            <div className="text-sm text-gray-600">VIPs</div>
          </CardContent>
        </Card>
      </div>

      {/* Controles */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Lista de Visitantes</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Visitante
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Cadastrar Novo Visitante</DialogTitle>
                  </DialogHeader>
                  <VisitorForm onClose={() => setIsCreateDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por nome, email ou empresa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="VIP">VIP</SelectItem>
                <SelectItem value="Imprensa">Imprensa</SelectItem>
                <SelectItem value="Geral">Geral</SelectItem>
                <SelectItem value="Estudante">Estudante</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Confirmado">Confirmado</SelectItem>
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Check-in">Check-in</SelectItem>
                <SelectItem value="Check-out">Check-out</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabela */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Visitante</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVisitors.map((visitor) => (
                  <TableRow key={visitor.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{visitor.name}</div>
                        <div className="text-sm text-gray-500">{visitor.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{visitor.company}</div>
                        <div className="text-sm text-gray-500">{visitor.position}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getCategoryColor(visitor.category)}>
                        {visitor.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(visitor.status)}>
                        {visitor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {visitor.checkInTime ? visitor.checkInTime : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedVisitor(visitor)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Detalhes do Visitante</DialogTitle>
                            </DialogHeader>
                            {selectedVisitor && <VisitorDetails visitor={selectedVisitor} />}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <QrCode className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorsList;

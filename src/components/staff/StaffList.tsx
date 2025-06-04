
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Mail, Phone, Shield, Download, Eye, Calendar } from 'lucide-react';
import StaffForm from './StaffForm';
import StaffDetails from './StaffDetails';

interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  permissions: string[];
  status: 'Ativo' | 'Inativo' | 'Férias' | 'Licença';
  shift: 'Manhã' | 'Tarde' | 'Noite' | 'Integral';
  startDate: string;
  supervisor: string;
  emergencyContact: string;
}

const mockStaff: StaffMember[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana@eventrix.com',
    phone: '(11) 99999-9999',
    department: 'Operações',
    role: 'Coordenadora',
    permissions: ['Gestão de Equipe', 'Relatórios', 'Check-in'],
    status: 'Ativo',
    shift: 'Integral',
    startDate: '2024-01-01',
    supervisor: 'João Manager',
    emergencyContact: '(11) 88888-8888'
  },
  {
    id: '2',
    name: 'Carlos Santos',
    email: 'carlos@eventrix.com',
    phone: '(11) 77777-7777',
    department: 'Segurança',
    role: 'Supervisor de Segurança',
    permissions: ['Segurança', 'Acesso'],
    status: 'Ativo',
    shift: 'Noite',
    startDate: '2024-01-15',
    supervisor: 'Maria Director',
    emergencyContact: '(11) 66666-6666'
  },
  {
    id: '3',
    name: 'Lucia Oliveira',
    email: 'lucia@eventrix.com',
    phone: '(11) 55555-5555',
    department: 'Atendimento',
    role: 'Recepcionista',
    permissions: ['Check-in', 'Informações'],
    status: 'Férias',
    shift: 'Manhã',
    startDate: '2024-02-01',
    supervisor: 'Ana Silva',
    emergencyContact: '(11) 44444-4444'
  }
];

const StaffList = () => {
  const [staff, setStaff] = useState<StaffMember[]>(mockStaff);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Inativo': return 'bg-gray-100 text-gray-800';
      case 'Férias': return 'bg-blue-100 text-blue-800';
      case 'Licença': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getShiftColor = (shift: string) => {
    switch (shift) {
      case 'Manhã': return 'bg-yellow-100 text-yellow-800';
      case 'Tarde': return 'bg-orange-100 text-orange-800';
      case 'Noite': return 'bg-purple-100 text-purple-800';
      case 'Integral': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header com estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{staff.length}</div>
            <div className="text-sm text-gray-600">Total de Staff</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {staff.filter(s => s.status === 'Ativo').length}
            </div>
            <div className="text-sm text-gray-600">Ativos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">
              {staff.filter(s => s.shift === 'Integral').length}
            </div>
            <div className="text-sm text-gray-600">Tempo Integral</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(staff.map(s => s.department)).size}
            </div>
            <div className="text-sm text-gray-600">Departamentos</div>
          </CardContent>
        </Card>
      </div>

      {/* Controles */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Equipe de Staff</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Escala
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Staff
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Cadastrar Novo Membro</DialogTitle>
                  </DialogHeader>
                  <StaffForm onClose={() => setIsCreateDialogOpen(false)} />
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
                placeholder="Buscar por nome, email, departamento ou cargo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Operações">Operações</SelectItem>
                <SelectItem value="Segurança">Segurança</SelectItem>
                <SelectItem value="Atendimento">Atendimento</SelectItem>
                <SelectItem value="Técnico">Técnico</SelectItem>
                <SelectItem value="Limpeza">Limpeza</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Inativo">Inativo</SelectItem>
                <SelectItem value="Férias">Férias</SelectItem>
                <SelectItem value="Licença">Licença</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabela */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Departamento</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Turno</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStaff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.department}</div>
                        <div className="text-sm text-gray-500">
                          Supervisor: {member.supervisor}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <Badge className={getShiftColor(member.shift)}>
                        {member.shift}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedStaff(member)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Detalhes do Staff</DialogTitle>
                            </DialogHeader>
                            {selectedStaff && <StaffDetails staff={selectedStaff} />}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <Shield className="w-4 h-4" />
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

export default StaffList;


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Mail, Phone, Building, Download, Eye, FileText, DollarSign } from 'lucide-react';
import SupplierForm from './SupplierForm';
import SupplierDetails from './SupplierDetails';

interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  address: string;
  category: string;
  services: string[];
  status: 'Ativo' | 'Inativo' | 'Pendente' | 'Bloqueado';
  contractValue: number;
  contractDate: string;
  responsiblePerson: string;
  rating: number;
  paymentTerms: string;
}

const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Som & Luz Eventos',
    email: 'contato@someluzeventos.com',
    phone: '(11) 99999-9999',
    cnpj: '12.345.678/0001-90',
    address: 'Rua das Flores, 123 - São Paulo/SP',
    category: 'Audiovisual',
    services: ['Som', 'Iluminação', 'Projeção'],
    status: 'Ativo',
    contractValue: 25000,
    contractDate: '2024-01-15',
    responsiblePerson: 'João Técnico',
    rating: 4.8,
    paymentTerms: '30 dias'
  },
  {
    id: '2',
    name: 'Catering Premium',
    email: 'vendas@cateringpremium.com',
    phone: '(11) 88888-8888',
    cnpj: '98.765.432/0001-10',
    address: 'Av. Gastronômica, 456 - São Paulo/SP',
    category: 'Alimentação',
    services: ['Coffee Break', 'Almoço', 'Jantar'],
    status: 'Ativo',
    contractValue: 45000,
    contractDate: '2024-01-10',
    responsiblePerson: 'Maria Chef',
    rating: 4.9,
    paymentTerms: '15 dias'
  },
  {
    id: '3',
    name: 'Segurança Total',
    email: 'operacoes@segurancatotal.com',
    phone: '(11) 77777-7777',
    cnpj: '11.222.333/0001-44',
    address: 'Rua da Segurança, 789 - São Paulo/SP',
    category: 'Segurança',
    services: ['Vigilância', 'Controle de Acesso', 'Revista'],
    status: 'Pendente',
    contractValue: 18000,
    contractDate: '2024-01-20',
    responsiblePerson: 'Carlos Segurança',
    rating: 4.5,
    paymentTerms: '45 dias'
  }
];

const SuppliersList = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || supplier.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || supplier.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Inativo': return 'bg-gray-100 text-gray-800';
      case 'Pendente': return 'bg-yellow-100 text-yellow-800';
      case 'Bloqueado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalContractValue = suppliers.reduce((sum, supplier) => sum + supplier.contractValue, 0);

  return (
    <div className="space-y-6">
      {/* Header com estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{suppliers.length}</div>
            <div className="text-sm text-gray-600">Total de Fornecedores</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {suppliers.filter(s => s.status === 'Ativo').length}
            </div>
            <div className="text-sm text-gray-600">Ativos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(suppliers.map(s => s.category)).size}
            </div>
            <div className="text-sm text-gray-600">Categorias</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">
              R$ {totalContractValue.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-gray-600">Valor Total dos Contratos</div>
          </CardContent>
        </Card>
      </div>

      {/* Controles */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Lista de Fornecedores</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Contratos
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Fornecedor
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Cadastrar Novo Fornecedor</DialogTitle>
                  </DialogHeader>
                  <SupplierForm onClose={() => setIsCreateDialogOpen(false)} />
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
                placeholder="Buscar por nome, email ou categoria..."
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
                <SelectItem value="Audiovisual">Audiovisual</SelectItem>
                <SelectItem value="Alimentação">Alimentação</SelectItem>
                <SelectItem value="Segurança">Segurança</SelectItem>
                <SelectItem value="Decoração">Decoração</SelectItem>
                <SelectItem value="Limpeza">Limpeza</SelectItem>
                <SelectItem value="Transporte">Transporte</SelectItem>
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
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Bloqueado">Bloqueado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabela */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fornecedor</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Serviços</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valor Contrato</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSuppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{supplier.name}</div>
                        <div className="text-sm text-gray-500">{supplier.email}</div>
                        <div className="text-sm text-gray-500">{supplier.responsiblePerson}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{supplier.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-32">
                        {supplier.services.slice(0, 2).map((service, index) => (
                          <Badge key={index} variant="outline" className="mr-1 mb-1 text-xs">
                            {service}
                          </Badge>
                        ))}
                        {supplier.services.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{supplier.services.length - 2} mais
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(supplier.status)}>
                        {supplier.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">
                        R$ {supplier.contractValue.toLocaleString('pt-BR')}
                      </div>
                      <div className="text-sm text-gray-500">
                        {supplier.paymentTerms}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedSupplier(supplier)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Detalhes do Fornecedor</DialogTitle>
                            </DialogHeader>
                            {selectedSupplier && <SupplierDetails supplier={selectedSupplier} />}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <FileText className="w-4 h-4" />
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

export default SuppliersList;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Users, Shield, Edit, Trash2, Settings } from 'lucide-react';
import PermissionForm from './PermissionForm';
import RoleForm from './RoleForm';

const PermissionsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isPermissionDialogOpen, setIsPermissionDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);

  const roles = [
    {
      id: 1,
      name: 'Administrador',
      description: 'Acesso completo ao sistema',
      permissions: ['create_events', 'edit_events', 'delete_events', 'manage_users', 'view_reports'],
      users_count: 3,
      color: 'red'
    },
    {
      id: 2,
      name: 'Organizador',
      description: 'Gerencia eventos e conteúdo',
      permissions: ['create_events', 'edit_events', 'manage_content'],
      users_count: 8,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Staff',
      description: 'Operações básicas do evento',
      permissions: ['view_events', 'check_in_users'],
      users_count: 15,
      color: 'green'
    },
    {
      id: 4,
      name: 'Palestrante',
      description: 'Acesso às suas palestras',
      permissions: ['view_own_lectures', 'edit_own_lectures'],
      users_count: 25,
      color: 'purple'
    }
  ];

  const permissions = [
    { id: 1, name: 'create_events', description: 'Criar novos eventos', module: 'Eventos' },
    { id: 2, name: 'edit_events', description: 'Editar eventos existentes', module: 'Eventos' },
    { id: 3, name: 'delete_events', description: 'Excluir eventos', module: 'Eventos' },
    { id: 4, name: 'manage_users', description: 'Gerenciar usuários', module: 'Usuários' },
    { id: 5, name: 'view_reports', description: 'Visualizar relatórios', module: 'Relatórios' },
    { id: 6, name: 'manage_content', description: 'Gerenciar conteúdo', module: 'Conteúdo' },
    { id: 7, name: 'check_in_users', description: 'Fazer check-in de usuários', module: 'Credenciamento' },
    { id: 8, name: 'view_events', description: 'Visualizar eventos', module: 'Eventos' },
    { id: 9, name: 'view_own_lectures', description: 'Ver próprias palestras', module: 'Palestras' },
    { id: 10, name: 'edit_own_lectures', description: 'Editar próprias palestras', module: 'Palestras' }
  ];

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPermissions = permissions.filter(permission =>
    permission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    permission.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    permission.module.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Permissões e Perfis</h1>
          <p className="text-muted-foreground">
            Gerencie perfis de usuário e suas permissões no sistema.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar perfis ou permissões..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="roles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="roles" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Perfis de Usuário
          </TabsTrigger>
          <TabsTrigger value="permissions" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Permissões
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Perfis de Usuário</h2>
            <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Perfil
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedRole ? 'Editar Perfil' : 'Novo Perfil'}</DialogTitle>
                  <DialogDescription>
                    {selectedRole ? 'Edite as informações do perfil.' : 'Crie um novo perfil de usuário com permissões específicas.'}
                  </DialogDescription>
                </DialogHeader>
                <RoleForm
                  role={selectedRole}
                  permissions={permissions}
                  onClose={() => {
                    setIsRoleDialogOpen(false);
                    setSelectedRole(null);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredRoles.map((role) => (
              <Card key={role.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={`bg-${role.color}-50 text-${role.color}-700 border-${role.color}-200`}>
                      {role.name}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedRole(role);
                          setIsRoleDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Usuários:</span>
                      <span className="font-medium">{role.users_count}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Permissões:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {role.permissions.slice(0, 3).map((permission) => (
                          <Badge key={permission} variant="secondary" className="text-xs">
                            {permission.replace('_', ' ')}
                          </Badge>
                        ))}
                        {role.permissions.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{role.permissions.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Permissões do Sistema</h2>
            <Dialog open={isPermissionDialogOpen} onOpenChange={setIsPermissionDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Permissão
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{selectedPermission ? 'Editar Permissão' : 'Nova Permissão'}</DialogTitle>
                  <DialogDescription>
                    {selectedPermission ? 'Edite as informações da permissão.' : 'Crie uma nova permissão para o sistema.'}
                  </DialogDescription>
                </DialogHeader>
                <PermissionForm
                  permission={selectedPermission}
                  onClose={() => {
                    setIsPermissionDialogOpen(false);
                    setSelectedPermission(null);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {filteredPermissions.map((permission) => (
              <Card key={permission.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Settings className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{permission.name}</h3>
                        <p className="text-sm text-muted-foreground">{permission.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{permission.module}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedPermission(permission);
                          setIsPermissionDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default PermissionsList;

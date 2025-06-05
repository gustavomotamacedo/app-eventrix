
import React from 'react';
import { Shield, Plus, Users, Key, Settings, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PermissionsList = () => {
  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      description: 'Acesso total ao sistema',
      users: 2,
      permissions: ['all'],
      color: '#DC2626'
    },
    {
      id: 2,
      name: 'Administrador',
      description: 'Gestão de eventos e usuários',
      users: 5,
      permissions: ['events', 'users', 'analytics', 'settings'],
      color: '#4D2BFB'
    },
    {
      id: 3,
      name: 'Gerente de Evento',
      description: 'Gestão operacional de eventos',
      users: 8,
      permissions: ['events', 'checkin', 'activities', 'venues'],
      color: '#03F9FF'
    },
    {
      id: 4,
      name: 'Staff Operacional',
      description: 'Operações básicas do evento',
      users: 15,
      permissions: ['checkin', 'activities'],
      color: '#10B981'
    }
  ];

  const permissions = [
    { key: 'all', name: 'Acesso Total', description: 'Controle completo do sistema' },
    { key: 'events', name: 'Eventos', description: 'Criar e gerenciar eventos' },
    { key: 'users', name: 'Usuários', description: 'Gerenciar participantes e equipe' },
    { key: 'analytics', name: 'Analytics', description: 'Visualizar relatórios e métricas' },
    { key: 'checkin', name: 'Check-in', description: 'Realizar credenciamento' },
    { key: 'activities', name: 'Atividades', description: 'Gerenciar atividades do evento' },
    { key: 'venues', name: 'Locais', description: 'Configurar salas e espaços' },
    { key: 'settings', name: 'Configurações', description: 'Ajustar configurações do sistema' }
  ];

  return (
    <div className="space-y-6 tech-grid min-h-full p-6">
      {/* Header */}
      <div className="tech-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Permissões e Perfis</h1>
            <p className="text-muted-foreground">Controle de acesso e níveis de permissão</p>
          </div>
          <Button className="tech-button">
            <Plus size={16} className="mr-2" />
            Novo Perfil
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Perfis Ativos</p>
              <h3 className="text-2xl font-bold mt-1">4</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <Shield size={20} className="text-primary" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total de Usuários</p>
              <h3 className="text-2xl font-bold mt-1">30</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <Users size={20} className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Permissões</p>
              <h3 className="text-2xl font-bold mt-1">8</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <Key size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
        <div className="tech-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Admins</p>
              <h3 className="text-2xl font-bold mt-1">7</h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <Settings size={20} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Roles List */}
      <div className="tech-card p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Perfis de Acesso</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {roles.map((role) => (
              <div key={role.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: role.color }}
                    />
                    <div>
                      <h3 className="font-semibold">{role.name}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-sm">
                    <Users size={14} className="text-muted-foreground" />
                    <span>{role.users} usuários</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Permissões:</p>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission) => (
                      <span key={permission} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {permissions.find(p => p.key === permission)?.name || permission}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Permissions Matrix */}
      <div className="tech-card p-6">
        <h2 className="text-xl font-semibold mb-4">Matriz de Permissões</h2>
        <div className="space-y-3">
          {permissions.map((permission) => (
            <div key={permission.key} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{permission.name}</h3>
                  <p className="text-sm text-muted-foreground">{permission.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Key size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{permission.key}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PermissionsList;

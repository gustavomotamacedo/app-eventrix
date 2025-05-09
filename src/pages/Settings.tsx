
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/Dashboard';
import { User, Users, Lock, Globe, Webhook, Shield, Settings as SettingsIcon, Check } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <DashboardLayout title="Configurações">
      <div className="space-y-6">
        <div>
          <h2>Configurações</h2>
          <p className="text-muted-foreground">Gerencie suas preferências e configurações do sistema</p>
        </div>
        
        {/* Settings Tabs and Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tabs */}
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'profile' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <User size={18} />
              <span>Perfil</span>
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'team' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <Users size={18} />
              <span>Equipe</span>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'security' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <Lock size={18} />
              <span>Segurança</span>
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'integrations' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <Webhook size={18} />
              <span>Integrações</span>
            </button>
            <button
              onClick={() => setActiveTab('tenants')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'tenants' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <Globe size={18} />
              <span>Multi-tenant</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'privacy' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <Shield size={18} />
              <span>LGPD</span>
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-left ${
                activeTab === 'general' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <SettingsIcon size={18} />
              <span>Geral</span>
            </button>
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Informações do Perfil</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-semibold">
                      A
                    </div>
                    <button className="bg-muted px-4 py-2 rounded-md text-sm hover:bg-muted/70 transition-colors">
                      Alterar Foto
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        defaultValue="Admin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Sobrenome</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        defaultValue="HUBX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        defaultValue="admin@hubx.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        defaultValue="+55 11 99999-8888"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">Cargo</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        defaultValue="Administrador do Sistema"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                      Salvar Alterações
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Team Settings */}
            {activeTab === 'team' && (
              <div className="bg-card border rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Membros da Equipe</h3>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                    + Adicionar Membro
                  </button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Admin HUBX', email: 'admin@hubx.com', role: 'Administrador', status: 'active' },
                    { name: 'João Silva', email: 'joao@hubx.com', role: 'Gerente de Eventos', status: 'active' },
                    { name: 'Maria Oliveira', email: 'maria@hubx.com', role: 'Coordenadora', status: 'active' },
                    { name: 'Pedro Santos', email: 'pedro@hubx.com', role: 'Analista', status: 'invited' },
                  ].map((member, index) => (
                    <div key={index} className="flex justify-between items-center border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-sm">{member.role}</span>
                        {member.status === 'active' ? (
                          <span className="flex items-center gap-1 text-xs text-green-600">
                            <Check size={12} /> Ativo
                          </span>
                        ) : (
                          <span className="text-xs text-amber-600">Convidado</span>
                        )}
                        <button className="text-xs text-primary hover:underline">Editar</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Multi-tenant Settings */}
            {activeTab === 'tenants' && (
              <div className="space-y-5">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Configurações Multi-tenant</h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm">
                      Configure e gerencie múltiplas organizações (tenants) na sua plataforma HUBX™.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nome da Organização Principal</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                          defaultValue="HUBX Eventos"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Domínio</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                          defaultValue="eventos.hubx.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Isolamento de Dados</label>
                      <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Database por Tenant</option>
                        <option>Schema por Tenant</option>
                        <option>Tabelas Compartilhadas</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                        Salvar Configurações
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Organizações (Tenants)</h3>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                      + Nova Organização
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'HUBX Eventos', domain: 'eventos.hubx.com', users: 15, active: true },
                      { name: 'Tech Summit', domain: 'techsummit.eventos.com', users: 8, active: true },
                      { name: 'Expo Business', domain: 'expobusiness.eventos.com', users: 5, active: false },
                    ].map((tenant, index) => (
                      <div key={index} className="flex justify-between items-center border-b last:border-0 pb-3">
                        <div>
                          <p className="font-medium">{tenant.name}</p>
                          <p className="text-xs text-muted-foreground">{tenant.domain}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-xs">{tenant.users} usuários</span>
                          {tenant.active ? (
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Ativo</span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">Inativo</span>
                          )}
                          <button className="text-xs text-primary hover:underline">Gerenciar</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Privacy/LGPD Settings */}
            {activeTab === 'privacy' && (
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Configurações LGPD</h3>
                
                <div className="space-y-5">
                  <p className="text-sm">
                    Configure as políticas de privacidade e conformidade com a Lei Geral de Proteção de Dados.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <p className="font-medium">Política de Privacidade</p>
                        <p className="text-xs text-muted-foreground">Exibir e configurar a política de privacidade</p>
                      </div>
                      <button className="text-sm underline text-primary">Editar</button>
                    </div>
                    
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <p className="font-medium">Termos de Uso</p>
                        <p className="text-xs text-muted-foreground">Exibir e configurar os termos de uso</p>
                      </div>
                      <button className="text-sm underline text-primary">Editar</button>
                    </div>
                    
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <p className="font-medium">Consentimento de Cookies</p>
                        <p className="text-xs text-muted-foreground">Configurar banner e opções de cookies</p>
                      </div>
                      <button className="text-sm underline text-primary">Configurar</button>
                    </div>
                    
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <p className="font-medium">Encarregado de Dados (DPO)</p>
                        <p className="text-xs text-muted-foreground">Definir responsável LGPD</p>
                      </div>
                      <button className="text-sm underline text-primary">Configurar</button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Relatório de Impacto (RIPD)</p>
                        <p className="text-xs text-muted-foreground">Gerar relatório de impacto à proteção de dados</p>
                      </div>
                      <button className="text-sm underline text-primary">Gerar</button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Retenção de Dados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium mb-1">Dados de Visitantes</label>
                        <select className="w-full px-3 py-2 text-sm border rounded-md">
                          <option>6 meses após o evento</option>
                          <option>1 ano após o evento</option>
                          <option>2 anos após o evento</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">Dados de Reconhecimento Facial</label>
                        <select className="w-full px-3 py-2 text-sm border rounded-md">
                          <option>Imediatamente após o evento</option>
                          <option>30 dias após o evento</option>
                          <option>90 dias após o evento</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                      Salvar Configurações
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* If other tabs are not implemented yet, show placeholder */}
            {!['profile', 'team', 'tenants', 'privacy'].includes(activeTab) && (
              <div className="bg-card border rounded-lg p-6 flex flex-col items-center justify-center py-12">
                <SettingsIcon size={48} className="mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Configurações {activeTab}</h3>
                <p className="text-sm text-muted-foreground">
                  Esta seção está em desenvolvimento. Em breve estará disponível!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;


import React from 'react';
import DashboardLayout from '@/components/layout/Dashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Key, Code, Activity, Shield, Clock, Copy } from 'lucide-react';

const ApiManagement = () => {
  const apiKeys = [
    {
      id: 1,
      name: 'Aplicativo Mobile',
      key: 'pk_live_51H7rR2F...',
      status: 'Ativa',
      lastUsed: '2024-01-15 14:30',
      requests: '12.5K'
    },
    {
      id: 2,
      name: 'Dashboard Web',
      key: 'pk_test_51H7rR2F...',
      status: 'Ativa',
      lastUsed: '2024-01-15 12:45',
      requests: '8.3K'
    },
    {
      id: 3,
      name: 'Sistema Legado',
      key: 'pk_live_41G6qP1D...',
      status: 'Inativa',
      lastUsed: '2024-01-10 09:20',
      requests: '2.1K'
    }
  ];

  const endpoints = [
    { method: 'GET', path: '/api/v1/events', description: 'Listar todos os eventos' },
    { method: 'POST', path: '/api/v1/events', description: 'Criar um novo evento' },
    { method: 'GET', path: '/api/v1/events/{id}', description: 'Obter detalhes de um evento' },
    { method: 'PUT', path: '/api/v1/events/{id}', description: 'Atualizar um evento' },
    { method: 'DELETE', path: '/api/v1/events/{id}', description: 'Excluir um evento' },
    { method: 'GET', path: '/api/v1/participants', description: 'Listar participantes' },
    { method: 'POST', path: '/api/v1/participants', description: 'Registrar participante' },
    { method: 'GET', path: '/api/v1/analytics', description: 'Obter dados de analytics' },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout title="Gestão de API">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Gestão de API</h2>
            <p className="text-muted-foreground">Gerencie chaves de API e monitore o uso</p>
          </div>
          <Button>
            <Key className="w-4 h-4 mr-2" />
            Nova Chave API
          </Button>
        </div>

        {/* API Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chaves Ativas</CardTitle>
              <Key className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 criadas este mês</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Requisições Hoje</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23.5K</div>
              <p className="text-xs text-muted-foreground">+12% vs ontem</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo de Resposta</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124ms</div>
              <p className="text-xs text-muted-foreground">Tempo médio</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Erro</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.2%</div>
              <p className="text-xs text-muted-foreground">Últimas 24h</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="keys" className="space-y-4">
          <TabsList>
            <TabsTrigger value="keys">Chaves de API</TabsTrigger>
            <TabsTrigger value="docs">Documentação</TabsTrigger>
            <TabsTrigger value="logs">Logs de Acesso</TabsTrigger>
          </TabsList>

          <TabsContent value="keys" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Chaves de API</CardTitle>
                <CardDescription>
                  Gerencie as chaves de acesso à API do Eventrix
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiKeys.map((apiKey) => (
                    <div key={apiKey.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-muted rounded">
                          <Key className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-medium">{apiKey.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <code className="text-xs bg-muted px-2 py-1 rounded">{apiKey.key}</code>
                            <Button variant="ghost" size="sm">
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>Último uso: {apiKey.lastUsed}</span>
                            <span>{apiKey.requests} requisições</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={apiKey.status === 'Ativa' ? 'default' : 'secondary'}>
                          {apiKey.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Documentação da API</CardTitle>
                <CardDescription>
                  Endpoints disponíveis e exemplos de uso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <Input placeholder="Filtrar endpoints..." className="flex-1" />
                    <Button variant="outline">
                      <Code className="w-4 h-4 mr-2" />
                      Ver OpenAPI
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {endpoints.map((endpoint, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/20">
                        <div className="flex items-center gap-3">
                          <Badge className={`text-xs ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm">{endpoint.path}</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                          <Button variant="ghost" size="sm">
                            <Code className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Logs de Acesso</CardTitle>
                <CardDescription>
                  Histórico de requisições à API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input placeholder="Filtrar logs..." className="flex-1" />
                    <Button variant="outline">Exportar</Button>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { time: '15:34:22', method: 'GET', endpoint: '/api/v1/events', status: '200', ip: '192.168.1.100' },
                      { time: '15:33:45', method: 'POST', endpoint: '/api/v1/participants', status: '201', ip: '192.168.1.101' },
                      { time: '15:32:11', method: 'GET', endpoint: '/api/v1/analytics', status: '200', ip: '192.168.1.102' },
                      { time: '15:31:38', method: 'PUT', endpoint: '/api/v1/events/123', status: '200', ip: '192.168.1.100' },
                      { time: '15:30:55', method: 'DELETE', endpoint: '/api/v1/events/456', status: '404', ip: '192.168.1.103' },
                    ].map((log, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground">{log.time}</span>
                          <Badge className={`text-xs ${getMethodColor(log.method)}`}>
                            {log.method}
                          </Badge>
                          <code>{log.endpoint}</code>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={log.status.startsWith('2') ? 'default' : 'destructive'}>
                            {log.status}
                          </Badge>
                          <span className="text-muted-foreground">{log.ip}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ApiManagement;

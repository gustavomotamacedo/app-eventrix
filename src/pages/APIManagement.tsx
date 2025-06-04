
import React, { useState } from 'react';
import { Code, Key, Activity, Globe, Shield, Copy, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import KpiCard from '@/components/ui-custom/KpiCard';

const APIManagement = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const apiKey = 'ev_live_sk_1234567890abcdef...';

  const apiStats = {
    totalRequests: 45820,
    successRate: 99.2,
    avgResponseTime: 145,
    activeEndpoints: 24
  };

  const apiKeys = [
    {
      id: 1,
      name: 'Produção Principal',
      key: 'ev_live_sk_***',
      created: '2024-01-15',
      lastUsed: '2024-01-20',
      requests: 15420,
      status: 'active'
    },
    {
      id: 2,
      name: 'Desenvolvimento',
      key: 'ev_test_sk_***',
      created: '2024-01-10',
      lastUsed: '2024-01-19',
      requests: 3847,
      status: 'active'
    },
    {
      id: 3,
      name: 'Mobile App',
      key: 'ev_live_pk_***',
      created: '2024-01-08',
      lastUsed: '2024-01-18',
      requests: 8923,
      status: 'inactive'
    }
  ];

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/events',
      description: 'Listar todos os eventos',
      requests: 12847,
      avgResponse: '120ms',
      errorRate: '0.1%'
    },
    {
      method: 'POST',
      path: '/api/v1/events',
      description: 'Criar novo evento',
      requests: 234,
      avgResponse: '340ms',
      errorRate: '0.3%'
    },
    {
      method: 'GET',
      path: '/api/v1/visitors',
      description: 'Listar visitantes',
      requests: 8934,
      avgResponse: '95ms',
      errorRate: '0.2%'
    },
    {
      method: 'POST',
      path: '/api/v1/registrations',
      description: 'Registrar participante',
      requests: 5642,
      avgResponse: '180ms',
      errorRate: '0.5%'
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Dados de analytics',
      requests: 3421,
      avgResponse: '250ms',
      errorRate: '0.1%'
    }
  ];

  const webhooks = [
    {
      id: 1,
      url: 'https://myapp.com/webhook/events',
      events: ['event.created', 'event.updated'],
      status: 'active',
      lastDelivery: '2024-01-20 14:30',
      success: true
    },
    {
      id: 2,
      url: 'https://crm.company.com/webhook',
      events: ['visitor.registered', 'visitor.checked_in'],
      status: 'active',
      lastDelivery: '2024-01-20 14:25',
      success: true
    },
    {
      id: 3,
      url: 'https://backup.service.com/webhook',
      events: ['*'],
      status: 'inactive',
      lastDelivery: '2024-01-19 10:15',
      success: false
    }
  ];

  const codeExamples = {
    javascript: `// Listar eventos
fetch('https://api.eventrix.com/v1/events', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
    
    python: `import requests

# Listar eventos
response = requests.get(
    'https://api.eventrix.com/v1/events',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)
events = response.json()`,
    
    curl: `curl -X GET "https://api.eventrix.com/v1/events" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Gerenciamento de APIs</h1>
            <p className="text-muted-foreground">Gerencie chaves de API, monitore uso e configure webhooks</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Globe className="h-4 w-4 mr-2" />
              Documentação
            </Button>
            <Button>
              <Key className="h-4 w-4 mr-2" />
              Nova Chave
            </Button>
          </div>
        </div>

        {/* KPIs da API */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Total de Requisições"
            value={apiStats.totalRequests.toLocaleString()}
            icon={<Activity />}
            trend={{ value: 18.5, isPositive: true }}
          />
          <KpiCard
            title="Taxa de Sucesso"
            value={`${apiStats.successRate}%`}
            icon={<Shield />}
            trend={{ value: 0.3, isPositive: true }}
          />
          <KpiCard
            title="Tempo de Resposta"
            value={`${apiStats.avgResponseTime}ms`}
            icon={<Activity />}
            trend={{ value: 12.2, isPositive: false }}
          />
          <KpiCard
            title="Endpoints Ativos"
            value={apiStats.activeEndpoints.toString()}
            icon={<Globe />}
            trend={{ value: 2, isPositive: true }}
          />
        </div>

        {/* Tabs principais */}
        <Tabs defaultValue="keys" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="keys">Chaves API</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="docs">Documentação</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="keys" className="space-y-6">
            {/* Chave principal */}
            <Card>
              <CardHeader>
                <CardTitle>Sua Chave de API Principal</CardTitle>
                <CardDescription>Use esta chave para autenticar suas requisições</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    type={showApiKey ? 'text' : 'password'}
                    value={apiKey}
                    readOnly
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  ⚠️ Mantenha sua chave segura. Ela dá acesso total à sua conta.
                </div>
              </CardContent>
            </Card>

            {/* Lista de chaves */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Chaves de API</CardTitle>
                    <CardDescription>Gerencie todas as suas chaves de API</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Chave
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Chave</TableHead>
                      <TableHead>Criada</TableHead>
                      <TableHead>Último Uso</TableHead>
                      <TableHead>Requisições</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {apiKeys.map((key) => (
                      <TableRow key={key.id}>
                        <TableCell className="font-medium">{key.name}</TableCell>
                        <TableCell className="font-mono text-sm">{key.key}</TableCell>
                        <TableCell>{new Date(key.created).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>{new Date(key.lastUsed).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>{key.requests.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={key.status === 'active' ? 'default' : 'secondary'}>
                            {key.status === 'active' ? 'Ativa' : 'Inativa'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Switch checked={key.status === 'active'} />
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Endpoints Disponíveis</CardTitle>
                <CardDescription>Lista de todos os endpoints da API com estatísticas de uso</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Método</TableHead>
                      <TableHead>Endpoint</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Requisições</TableHead>
                      <TableHead>Resp. Média</TableHead>
                      <TableHead>Taxa de Erro</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {endpoints.map((endpoint, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Badge 
                            variant={
                              endpoint.method === 'GET' ? 'secondary' : 
                              endpoint.method === 'POST' ? 'default' : 'outline'
                            }
                          >
                            {endpoint.method}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{endpoint.path}</TableCell>
                        <TableCell>{endpoint.description}</TableCell>
                        <TableCell>{endpoint.requests.toLocaleString()}</TableCell>
                        <TableCell>{endpoint.avgResponse}</TableCell>
                        <TableCell>
                          <span className={parseFloat(endpoint.errorRate) > 0.3 ? 'text-red-600' : 'text-green-600'}>
                            {endpoint.errorRate}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Webhooks</CardTitle>
                    <CardDescription>Configure webhooks para receber notificações em tempo real</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Webhook
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>URL</TableHead>
                      <TableHead>Eventos</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Última Entrega</TableHead>
                      <TableHead>Sucesso</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {webhooks.map((webhook) => (
                      <TableRow key={webhook.id}>
                        <TableCell className="font-mono text-sm max-w-xs truncate">
                          {webhook.url}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {webhook.events.map((event, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {event}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={webhook.status === 'active' ? 'default' : 'secondary'}>
                            {webhook.status === 'active' ? 'Ativo' : 'Inativo'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{webhook.lastDelivery}</TableCell>
                        <TableCell>
                          <Badge variant={webhook.success ? 'default' : 'destructive'}>
                            {webhook.success ? 'Sucesso' : 'Falha'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Switch checked={webhook.status === 'active'} />
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Exemplos de Código</CardTitle>
                <CardDescription>Comece rapidamente com estes exemplos</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="javascript" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(codeExamples).map(([language, code]) => (
                    <TabsContent key={language} value={language}>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">{code}</code>
                        </pre>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="absolute top-2 right-2"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copiar
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rate Limits</CardTitle>
                <CardDescription>Limites de requisições por minuto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold">Plano Básico</h3>
                    <p className="text-2xl font-bold text-blue-600">1,000</p>
                    <p className="text-sm text-muted-foreground">req/min</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold">Plano Pro</h3>
                    <p className="text-2xl font-bold text-green-600">5,000</p>
                    <p className="text-sm text-muted-foreground">req/min</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold">Plano Enterprise</h3>
                    <p className="text-2xl font-bold text-purple-600">Ilimitado</p>
                    <p className="text-sm text-muted-foreground">req/min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Logs da API</CardTitle>
                <CardDescription>Histórico de requisições em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {[...Array(20)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-2 text-sm border-b">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">GET</Badge>
                        <span className="font-mono">/api/v1/events</span>
                        <span className="text-muted-foreground">
                          {new Date(Date.now() - index * 60000).toLocaleTimeString('pt-BR')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="default">200</Badge>
                        <span className="text-muted-foreground">125ms</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default APIManagement;

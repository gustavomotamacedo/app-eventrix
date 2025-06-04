
import React, { useState } from 'react';
import { FileText, Download, Mail, Calendar, Filter, Search, TrendingUp, BarChart3, PieChart, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/calendar';

const Reports = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const reportCategories = [
    { id: 'all', name: 'Todos os Relatórios', count: 24 },
    { id: 'attendance', name: 'Presença', count: 8 },
    { id: 'financial', name: 'Financeiro', count: 6 },
    { id: 'engagement', name: 'Engajamento', count: 5 },
    { id: 'predictive', name: 'Preditivos', count: 5 }
  ];

  const standardReports = [
    {
      id: 1,
      title: 'Relatório de Visitantes',
      description: 'Análise completa de visitantes, demografias e comportamento',
      category: 'attendance',
      lastGenerated: '2024-01-15',
      icon: <Users className="h-5 w-5" />,
      format: ['PDF', 'Excel', 'CSV'],
      autoGenerate: true
    },
    {
      id: 2,
      title: 'ROI Detalhado por Stakeholder',
      description: 'Retorno sobre investimento segmentado por patrocinadores, expositores e organizadores',
      category: 'financial',
      lastGenerated: '2024-01-14',
      icon: <DollarSign className="h-5 w-5" />,
      format: ['PDF', 'Excel'],
      autoGenerate: false
    },
    {
      id: 3,
      title: 'Engajamento por Atividade',
      description: 'Métricas de participação em palestras, workshops e networking',
      category: 'engagement',
      lastGenerated: '2024-01-15',
      icon: <BarChart3 className="h-5 w-5" />,
      format: ['PDF', 'PowerPoint'],
      autoGenerate: true
    },
    {
      id: 4,
      title: 'Previsão de Tendências',
      description: 'Análise preditiva de tendências e comportamentos futuros',
      category: 'predictive',
      lastGenerated: '2024-01-13',
      icon: <TrendingUp className="h-5 w-5" />,
      format: ['PDF'],
      autoGenerate: false
    },
    {
      id: 5,
      title: 'Análise de Satisfação NPS',
      description: 'Net Promoter Score e feedback detalhado dos participantes',
      category: 'engagement',
      lastGenerated: '2024-01-15',
      icon: <PieChart className="h-5 w-5" />,
      format: ['PDF', 'Excel'],
      autoGenerate: true
    },
    {
      id: 6,
      title: 'Fluxo de Caixa e Projeções',
      description: 'Análise financeira completa com projeções para próximos eventos',
      category: 'financial',
      lastGenerated: '2024-01-14',
      icon: <DollarSign className="h-5 w-5" />,
      format: ['PDF', 'Excel'],
      autoGenerate: false
    }
  ];

  const customReports = [
    {
      id: 1,
      title: 'Relatório Personalizado - Tech Summit',
      description: 'Análise específica para evento de tecnologia',
      createdBy: 'João Silva',
      createdAt: '2024-01-10',
      lastRun: '2024-01-15'
    },
    {
      id: 2,
      title: 'ROI Comparativo Anual',
      description: 'Comparação de ROI entre eventos do último ano',
      createdBy: 'Maria Santos',
      createdAt: '2024-01-08',
      lastRun: '2024-01-14'
    }
  ];

  const insightReports = [
    {
      title: 'Insights Automáticos - Semana',
      description: 'IA identificou 5 oportunidades de melhoria',
      status: 'new',
      priority: 'high'
    },
    {
      title: 'Anomalias Detectadas',
      description: 'Padrões incomuns no comportamento de visitantes',
      status: 'reviewed',
      priority: 'medium'
    },
    {
      title: 'Previsão de Demanda',
      description: 'Projeção para próximos eventos baseada em ML',
      status: 'new',
      priority: 'high'
    }
  ];

  const filteredReports = selectedCategory === 'all' 
    ? standardReports 
    : standardReports.filter(report => report.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Relatórios & Insights</h1>
            <p className="text-muted-foreground">Relatórios detalhados e análises preditivas para seus eventos</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Relatório
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Novo Relatório
            </Button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
          <div className="flex-1 relative">
            <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
            <Input
              placeholder="Buscar relatórios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {reportCategories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs para diferentes tipos de relatório */}
        <Tabs defaultValue="standard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="standard">Relatórios Padrão</TabsTrigger>
            <TabsTrigger value="custom">Personalizados</TabsTrigger>
            <TabsTrigger value="insights">Insights IA</TabsTrigger>
            <TabsTrigger value="scheduled">Agendados</TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {report.icon}
                        <Badge variant="outline">{report.category}</Badge>
                      </div>
                      {report.autoGenerate && (
                        <Badge variant="secondary" className="text-xs">Auto</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Última geração: {new Date(report.lastGenerated).toLocaleDateString('pt-BR')}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {report.format.map((format) => (
                        <Badge key={format} variant="outline" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Gerar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-3 w-3 mr-1" />
                        Enviar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Construtor de Relatórios Personalizados</CardTitle>
                <CardDescription>Crie relatórios customizados com os dados que você precisa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Fonte de Dados</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar fonte" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visitors">Visitantes</SelectItem>
                        <SelectItem value="exhibitors">Expositores</SelectItem>
                        <SelectItem value="sponsors">Patrocinadores</SelectItem>
                        <SelectItem value="financial">Financeiro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Período</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Últimos 7 dias</SelectItem>
                        <SelectItem value="30d">Últimos 30 dias</SelectItem>
                        <SelectItem value="90d">Últimos 90 dias</SelectItem>
                        <SelectItem value="custom">Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Formato</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Formato de saída" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="ppt">PowerPoint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full">Criar Relatório Personalizado</Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customReports.map((report) => (
                <Card key={report.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Criado por:</span>
                      <span>{report.createdBy}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Última execução:</span>
                      <span>{new Date(report.lastRun).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Executar</Button>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {insightReports.map((insight, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{insight.title}</h3>
                          <Badge 
                            variant={insight.status === 'new' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {insight.status === 'new' ? 'Novo' : 'Revisado'}
                          </Badge>
                          <Badge 
                            variant={insight.priority === 'high' ? 'destructive' : 'outline'}
                            className="text-xs"
                          >
                            {insight.priority === 'high' ? 'Alta' : 'Média'} Prioridade
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{insight.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Ver Detalhes</Button>
                        <Button size="sm">Gerar Relatório</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios Agendados</CardTitle>
                <CardDescription>Configure relatórios automáticos para serem enviados regularmente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Checkbox id="weekly-visitors" />
                      <div>
                        <label htmlFor="weekly-visitors" className="font-medium">Relatório Semanal de Visitantes</label>
                        <p className="text-sm text-muted-foreground">Toda segunda-feira às 09:00</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Ativo</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Checkbox id="monthly-roi" />
                      <div>
                        <label htmlFor="monthly-roi" className="font-medium">ROI Mensal Detalhado</label>
                        <p className="text-sm text-muted-foreground">Todo dia 1º às 08:00</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Ativo</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Checkbox id="daily-engagement" />
                      <div>
                        <label htmlFor="daily-engagement" className="font-medium">Engajamento Diário</label>
                        <p className="text-sm text-muted-foreground">Diariamente às 18:00</p>
                      </div>
                    </div>
                    <Badge variant="outline">Pausado</Badge>
                  </div>
                </div>
                
                <Button className="w-full mt-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Adicionar Novo Agendamento
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;


import React, { useState } from 'react';
import { BarChart3, Users, Calendar, TrendingUp, DollarSign, Eye, Target, ArrowUpRight, ArrowDownRight, Filter, Download, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import KpiCard from '@/components/ui-custom/KpiCard';
import ChartCard from '@/components/ui-custom/ChartCard';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedEvent, setSelectedEvent] = useState('all');

  // Dados simulados para os KPIs
  const kpiData = [
    {
      title: 'Total de Visitantes',
      value: '12,487',
      icon: <Users />,
      trend: { value: 12.5, isPositive: true }
    },
    {
      title: 'Taxa de Engajamento',
      value: '87.2%',
      icon: <Target />,
      trend: { value: 5.8, isPositive: true }
    },
    {
      title: 'ROI Médio',
      value: '324%',
      icon: <TrendingUp />,
      trend: { value: 15.3, isPositive: true }
    },
    {
      title: 'Receita Total',
      value: 'R$ 2.8M',
      icon: <DollarSign />,
      trend: { value: 8.7, isPositive: true }
    }
  ];

  // Dados para gráficos
  const visitorsData = [
    { name: 'Seg', value: 1200 },
    { name: 'Ter', value: 1850 },
    { name: 'Qua', value: 2100 },
    { name: 'Qui', value: 2800 },
    { name: 'Sex', value: 3200 },
    { name: 'Sáb', value: 2900 },
    { name: 'Dom', value: 1800 }
  ];

  const engagementData = [
    { name: 'Palestras', value: 85 },
    { name: 'Networking', value: 72 },
    { name: 'Exposições', value: 91 },
    { name: 'Workshops', value: 68 },
    { name: 'Demos', value: 79 }
  ];

  const roiByCategory = [
    { name: 'Patrocinadores', value: 450 },
    { name: 'Expositores', value: 320 },
    { name: 'Organizadores', value: 280 },
    { name: 'Fornecedores', value: 195 }
  ];

  const predictiveMetrics = [
    { metric: 'Visitantes Previstos (Próx. Semana)', value: '15,200', change: '+21.7%' },
    { metric: 'ROI Projetado (Q1)', value: '385%', change: '+19.1%' },
    { metric: 'Receita Estimada (Próx. Mês)', value: 'R$ 3.4M', change: '+21.4%' },
    { metric: 'Taxa de Conversão Esperada', value: '92.3%', change: '+5.9%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Visão completa do desempenho dos seus eventos</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedEvent} onValueChange={setSelectedEvent}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Selecionar evento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Eventos</SelectItem>
                <SelectItem value="tech-summit">Tech Summit 2024</SelectItem>
                <SelectItem value="business-expo">Business Expo</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 dias</SelectItem>
                <SelectItem value="30d">30 dias</SelectItem>
                <SelectItem value="90d">90 dias</SelectItem>
                <SelectItem value="1y">1 ano</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <KpiCard
              key={index}
              title={kpi.title}
              value={kpi.value}
              icon={kpi.icon}
              trend={kpi.trend}
            />
          ))}
        </div>

        {/* Tabs para diferentes análises */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="audience">Audiência</TabsTrigger>
            <TabsTrigger value="roi">ROI & Financeiro</TabsTrigger>
            <TabsTrigger value="predictive">Análise Preditiva</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="Visitantes por Dia"
                subtitle="Evolução diária de visitantes"
                type="line"
                data={visitorsData}
                height={350}
              />
              <ChartCard
                title="Engajamento por Atividade"
                subtitle="Taxa de participação (%)"
                type="bar"
                data={engagementData}
                height={350}
              />
            </div>

            {/* Métricas em tempo real */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Métricas em Tempo Real
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">847</div>
                    <div className="text-sm text-muted-foreground">Visitantes Online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">23</div>
                    <div className="text-sm text-muted-foreground">Sessões Ativas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-muted-foreground">Interações/min</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Demografia da Audiência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>25-34 anos</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>35-44 anos</span>
                      <span>31%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>45-54 anos</span>
                      <span>18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Outros</span>
                      <span>9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '9%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Setores</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tecnologia</span>
                    <Badge>34%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Saúde</span>
                    <Badge variant="secondary">28%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Educação</span>
                    <Badge variant="secondary">22%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Financeiro</span>
                    <Badge variant="secondary">16%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="roi" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="ROI por Categoria"
                subtitle="Retorno sobre investimento (%)"
                type="bar"
                data={roiByCategory}
                height={350}
              />
              <Card>
                <CardHeader>
                  <CardTitle>Análise Financeira</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-green-800">Receita Total</div>
                      <div className="text-2xl font-bold text-green-600">R$ 2.847.320</div>
                    </div>
                    <ArrowUpRight className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-blue-800">Custo Total</div>
                      <div className="text-2xl font-bold text-blue-600">R$ 1.245.680</div>
                    </div>
                    <ArrowDownRight className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-purple-800">Lucro Líquido</div>
                      <div className="text-2xl font-bold text-purple-600">R$ 1.601.640</div>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Análise Preditiva - Próximos 30 Dias
                </CardTitle>
                <CardDescription>
                  Projeções baseadas em machine learning e dados históricos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {predictiveMetrics.map((metric, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <Badge variant="outline" className="text-green-600">
                          {metric.change}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cenários de ROI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">Cenário Otimista</div>
                    <div className="text-lg font-bold text-green-600">ROI: 425% (+31%)</div>
                    <div className="text-sm text-green-700">Probabilidade: 25%</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800">Cenário Realista</div>
                    <div className="text-lg font-bold text-blue-600">ROI: 324% (+0%)</div>
                    <div className="text-sm text-blue-700">Probabilidade: 60%</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-800">Cenário Pessimista</div>
                    <div className="text-lg font-bold text-orange-600">ROI: 245% (-24%)</div>
                    <div className="text-sm text-orange-700">Probabilidade: 15%</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recomendações IA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800 mb-1">🎯 Foco em Networking</div>
                    <div className="text-sm text-purple-700">Aumentar atividades de networking pode elevar ROI em 15%</div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <div className="font-semibold text-indigo-800 mb-1">📱 Engajamento Digital</div>
                    <div className="text-sm text-indigo-700">Implementar gamificação pode aumentar participação em 23%</div>
                  </div>
                  <div className="p-3 bg-teal-50 rounded-lg">
                    <div className="font-semibold text-teal-800 mb-1">🎪 Otimização de Stands</div>
                    <div className="text-sm text-teal-700">Redistribuir layout pode melhorar fluxo em 18%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;

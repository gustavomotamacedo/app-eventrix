
import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, Filter, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ChartCard from '@/components/ui-custom/ChartCard';
import KpiCard from '@/components/ui-custom/KpiCard';

const Analytics = () => {
  const eventsData = [
    { name: 'Jan', visitantes: 1200, expositores: 35 },
    { name: 'Fev', visitantes: 1900, expositores: 42 },
    { name: 'Mar', visitantes: 1700, expositores: 45 },
    { name: 'Abr', visitantes: 2400, expositores: 50 },
    { name: 'Mai', visitantes: 2800, expositores: 53 },
    { name: 'Jun', visitantes: 3500, expositores: 58 }
  ];

  const satisfactionData = [
    { name: 'Muito satisfeito', value: 45 },
    { name: 'Satisfeito', value: 32 },
    { name: 'Neutro', value: 15 },
    { name: 'Insatisfeito', value: 5 },
    { name: 'Muito insatisfeito', value: 3 }
  ];

  const conversionData = [
    { name: 'Impressões', value: 12500 },
    { name: 'Cliques', value: 4300 },
    { name: 'Registros', value: 2100 },
    { name: 'Compras', value: 1450 }
  ];

  const topPerformers = [
    {
      name: 'Tech Summit 2023',
      id: 'TS2023',
      metricValue: 4850,
      metricLabel: 'visitantes',
      trend: '+15.2%',
      status: 'success'
    },
    {
      name: 'Expo Inovação',
      id: 'EI2023',
      metricValue: 3427,
      metricLabel: 'visitantes',
      trend: '+8.7%',
      status: 'success'
    },
    {
      name: 'DevCon 2023',
      id: 'DC2023',
      metricValue: 2980,
      metricLabel: 'visitantes',
      trend: '+5.3%',
      status: 'success'
    },
    {
      name: 'Marketing Summit',
      id: 'MS2023',
      metricValue: 2145,
      metricLabel: 'visitantes',
      trend: '-2.1%',
      status: 'danger'
    }
  ];

  const roiInsights = [
    {
      stakeholder: 'Expositores',
      roi: 3.8,
      investimento: 'R$ 45.000',
      retorno: 'R$ 171.000',
      trend: '+12.4%'
    },
    {
      stakeholder: 'Patrocinadores',
      roi: 4.2,
      investimento: 'R$ 120.000',
      retorno: 'R$ 504.000',
      trend: '+8.7%'
    },
    {
      stakeholder: 'Organizadores',
      roi: 2.7,
      investimento: 'R$ 230.000',
      retorno: 'R$ 621.000',
      trend: '+3.5%'
    }
  ];

  const marketingChannels = [
    { name: 'Email', value: 35 },
    { name: 'Redes Sociais', value: 28 },
    { name: 'SEO/Orgânico', value: 18 },
    { name: 'Ads', value: 12 },
    { name: 'Referências', value: 7 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Analytics</h1>
            <p className="text-muted-foreground">Visão geral de performance e insights dos seus eventos</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por evento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os eventos</SelectItem>
                <SelectItem value="TS2023">Tech Summit 2023</SelectItem>
                <SelectItem value="EI2023">Expo Inovação</SelectItem>
                <SelectItem value="DC2023">DevCon 2023</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Total de Visitantes"
            value="12,456"
            icon={<Users />}
            trend={{ value: 12.5, isPositive: true }}
          />
          <KpiCard
            title="Eventos Realizados"
            value="8"
            icon={<Calendar />}
            trend={{ value: 3, isPositive: true }}
          />
          <KpiCard
            title="Taxa de Conversão"
            value="23.4%"
            icon={<TrendingUp />}
            trend={{ value: 4.7, isPositive: true }}
          />
          <KpiCard
            title="Receita Total"
            value="R$ 1.2M"
            icon={<DollarSign />}
            trend={{ value: 8.3, isPositive: true }}
          />
        </div>

        {/* Gráficos principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Crescimento de Eventos"
            subtitle="Visitantes e Expositores nos últimos 6 meses"
            type="bar"
            data={eventsData}
            height={300}
          />
          <ChartCard
            title="Satisfação dos Participantes"
            subtitle="Distribuição de feedback recebido"
            type="pie"
            data={satisfactionData}
            height={300}
          />
        </div>

        {/* Tabs para diferentes métricas */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="roi">ROI</TabsTrigger>
            <TabsTrigger value="predictions">Previsões IA</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="Funil de Conversão"
                subtitle="Da impressão à compra de ingressos"
                type="bar"
                data={conversionData}
                height={300}
              />
              <Card>
                <CardHeader>
                  <CardTitle>Eventos com Melhor Performance</CardTitle>
                  <CardDescription>Baseado em número de participantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {topPerformers.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">{index + 1}</span>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">ID: {item.id}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">{item.metricValue.toLocaleString()}</p>
                          <div className="flex items-center gap-1 justify-end">
                            <span className={`text-xs ${
                              item.status === 'success' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {item.trend}
                            </span>
                            <p className="text-xs text-muted-foreground">{item.metricLabel}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audiência por Origem</CardTitle>
                  <CardDescription>Canais de marketing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-2">
                    {marketingChannels.map((channel, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{channel.name}</span>
                          <span className="text-sm font-bold">{channel.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${channel.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engajamento do Evento</CardTitle>
                  <CardDescription>Baseado nas últimas 3 edições</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Tempo Médio no Evento</span>
                        <Badge>4.2h</Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Participação em Atividades</span>
                        <Badge>67%</Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Interação com Expositores</span>
                        <Badge>78%</Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Satisfação</CardTitle>
                  <CardDescription>NPS e métricas de qualidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Score NPS</p>
                      <div className="text-4xl font-bold text-green-600">72</div>
                      <p className="text-xs text-muted-foreground">(Excelente)</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-3xl font-bold text-green-600">64%</p>
                        <p className="text-xs text-green-700">Promotores</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-3xl font-bold text-gray-600">28%</p>
                        <p className="text-xs text-gray-700">Neutros</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-3xl font-bold text-red-600">8%</p>
                        <p className="text-xs text-red-700">Detratores</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="roi" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {roiInsights.map((insight, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>ROI para {insight.stakeholder}</CardTitle>
                    <CardDescription>Retorno sobre investimento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Multiplicador ROI</p>
                        <div className="text-4xl font-bold text-green-600">{insight.roi}x</div>
                        <p className="text-sm text-green-600">{insight.trend} vs último evento</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Investimento</p>
                          <p className="text-lg font-semibold">{insight.investimento}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Retorno</p>
                          <p className="text-lg font-semibold text-green-600">{insight.retorno}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Insights e Previsões com IA
                </CardTitle>
                <CardDescription>
                  Análises preditivas baseadas em machine learning e histórico de eventos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🚀 Oportunidade de Crescimento</h3>
                    <p className="text-sm text-green-700 mb-3">
                      Dados indicam potencial para aumentar em 23% o número de visitantes 
                      se realizados eventos no setor de tecnologia nos meses de março e setembro.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600 font-medium">Confiança da IA:</span>
                      <span className="font-bold">89%</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">📊 Previsão de ROI</h3>
                    <p className="text-sm text-blue-700 mb-3">
                      Projeção de ROI para o próximo Tech Summit é 4.2x, um aumento 
                      de 15% em relação ao anterior, baseado em tendências de mercado.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-600 font-medium">Confiança da IA:</span>
                      <span className="font-bold">92%</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-800 mb-2">⚠️ Alerta de Atenção</h3>
                    <p className="text-sm text-amber-700 mb-3">
                      A satisfação com catering diminuiu 12% nos últimos 3 eventos. 
                      Recomendamos rever fornecedores ou oferecer mais opções.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-600 font-medium">Confiança da IA:</span>
                      <span className="font-bold">95%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Previsão de Performance para Próximos Eventos</h3>
                  <div className="space-y-4">
                    {[
                      { 
                        name: 'Tech Summit 2024', 
                        date: 'Mar/2024',
                        visitors: '5300-5800',
                        revenue: 'R$ 1.8-2.1M',
                        roi: '4.2-4.5x',
                        confidence: 92
                      },
                      { 
                        name: 'Expo Inovação 2024', 
                        date: 'Jun/2024',
                        visitors: '3800-4200',
                        revenue: 'R$ 1.2-1.4M',
                        roi: '3.8-4.1x',
                        confidence: 88
                      },
                      { 
                        name: 'DevCon 2024', 
                        date: 'Set/2024',
                        visitors: '3500-3900',
                        revenue: 'R$ 980K-1.1M',
                        roi: '3.5-3.8x',
                        confidence: 85
                      }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{event.name}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-8 text-center">
                          <div>
                            <p className="text-xs text-muted-foreground">Visitantes</p>
                            <p className="font-medium">{event.visitors}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Receita</p>
                            <p className="font-medium">{event.revenue}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">ROI</p>
                            <p className="font-medium text-green-600">{event.roi}</p>
                          </div>
                        </div>
                        <Badge variant="outline">
                          IA: {event.confidence}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;

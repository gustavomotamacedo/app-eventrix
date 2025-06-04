
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Target, Brain, Zap, BarChart3, Settings, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import KpiCard from '@/components/ui-custom/KpiCard';
import ChartCard from '@/components/ui-custom/ChartCard';

const DynamicPricing = () => {
  const [isPricingActive, setIsPricingActive] = useState(true);
  const [selectedStrategy, setSelectedStrategy] = useState('aggressive');

  const pricingMetrics = {
    revenue: 285420,
    conversion: 23.8,
    avgTicket: 147.50,
    priceOptimization: 18.2
  };

  const pricingEvents = [
    {
      id: 1,
      type: 'Aumento de Preço',
      item: 'Ingresso VIP',
      oldPrice: 250,
      newPrice: 285,
      reason: 'Alta demanda detectada',
      timestamp: '14:23',
      impact: '+12% conversão',
      aiConfidence: 94
    },
    {
      id: 2,
      type: 'Redução de Preço',
      item: 'Workshop Avançado',
      oldPrice: 89,
      newPrice: 79,
      reason: 'Baixa conversão',
      timestamp: '13:45',
      impact: '+8% inscrições',
      aiConfidence: 87
    },
    {
      id: 3,
      type: 'Oferta Dinâmica',
      item: 'Pacote Completo',
      oldPrice: 450,
      newPrice: 399,
      reason: 'Promoção por tempo limitado',
      timestamp: '12:30',
      impact: '+25% vendas',
      aiConfidence: 92
    }
  ];

  const priceStrategies = [
    {
      name: 'Conservadora',
      description: 'Mudanças graduais e seguras',
      riskLevel: 'Baixo',
      expectedRevenue: '+8-12%',
      priceVariation: '±5%'
    },
    {
      name: 'Moderada',
      description: 'Equilíbrio entre risco e retorno',
      riskLevel: 'Médio',
      expectedRevenue: '+15-20%',
      priceVariation: '±10%'
    },
    {
      name: 'Agressiva',
      description: 'Maximização de receita',
      riskLevel: 'Alto',
      expectedRevenue: '+25-35%',
      priceVariation: '±20%'
    }
  ];

  const demandForecast = [
    { name: '08:00', demand: 45, price: 120 },
    { name: '10:00', demand: 67, price: 135 },
    { name: '12:00', demand: 89, price: 150 },
    { name: '14:00', demand: 95, price: 165 },
    { name: '16:00', demand: 78, price: 145 },
    { name: '18:00', demand: 56, price: 130 }
  ];

  const products = [
    {
      name: 'Ingresso Geral',
      basePrice: 89,
      currentPrice: 97,
      demand: 'Alta',
      priceElasticity: 0.7,
      optimization: '+9%',
      status: 'Otimizado'
    },
    {
      name: 'Ingresso VIP',
      basePrice: 250,
      currentPrice: 285,
      demand: 'Muito Alta',
      priceElasticity: 0.4,
      optimization: '+14%',
      status: 'Aumentando'
    },
    {
      name: 'Workshop Premium',
      basePrice: 120,
      currentPrice: 108,
      demand: 'Baixa',
      priceElasticity: 1.2,
      optimization: '-10%',
      status: 'Reduzindo'
    },
    {
      name: 'Networking Plus',
      basePrice: 75,
      currentPrice: 82,
      demand: 'Média',
      priceElasticity: 0.9,
      optimization: '+9%',
      status: 'Estável'
    }
  ];

  const competitorAnalysis = [
    { event: 'Tech Summit', avgPrice: 156, ourPrice: 147, advantage: '-6%' },
    { event: 'Innovation Expo', avgPrice: 189, ourPrice: 165, advantage: '-13%' },
    { event: 'Digital Conference', avgPrice: 134, ourPrice: 142, advantage: '+6%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Pricing Dinâmico Inteligente</h1>
            <p className="text-muted-foreground">Otimização automática de preços baseada em IA e análise de mercado</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm">Pricing IA</span>
              <Switch checked={isPricingActive} onCheckedChange={setIsPricingActive} />
            </div>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>

        {/* Status do sistema */}
        {isPricingActive && (
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-medium">Sistema de Pricing Dinâmico Ativo</span>
                <Badge variant="secondary" className="ml-auto">
                  <Brain className="h-3 w-3 mr-1" />
                  IA Monitorando
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Receita Total</p>
                  <h3 className="text-3xl font-bold text-green-900">
                    R$ {pricingMetrics.revenue.toLocaleString()}
                  </h3>
                  <p className="text-xs text-green-600 mt-1">+{pricingMetrics.priceOptimization}% vs. preço fixo</p>
                </div>
                <div className="bg-green-200 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <KpiCard
            title="Taxa de Conversão"
            value={`${pricingMetrics.conversion}%`}
            icon={<Target />}
            trend={{ value: 4.2, isPositive: true }}
          />

          <KpiCard
            title="Ticket Médio"
            value={`R$ ${pricingMetrics.avgTicket.toFixed(2)}`}
            icon={<TrendingUp />}
            trend={{ value: 12.8, isPositive: true }}
          />

          <KpiCard
            title="Otimização IA"
            value={`+${pricingMetrics.priceOptimization}%`}
            icon={<Brain />}
            trend={{ value: 2.3, isPositive: true }}
          />
        </div>

        {/* Tabs principais */}
        <Tabs defaultValue="realtime" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="realtime">Tempo Real</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
            <TabsTrigger value="strategies">Estratégias</TabsTrigger>
            <TabsTrigger value="forecast">Previsões</TabsTrigger>
            <TabsTrigger value="competition">Concorrência</TabsTrigger>
          </TabsList>

          <TabsContent value="realtime" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="Demanda vs Preço em Tempo Real"
                subtitle="Correlação entre demanda e ajustes de preço"
                type="line"
                data={demandForecast}
                height={300}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Eventos de Pricing Recentes</CardTitle>
                  <CardDescription>Últimos ajustes automáticos da IA</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricingEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={
                              event.type.includes('Aumento') ? 'default' : 
                              event.type.includes('Redução') ? 'secondary' : 'outline'
                            }
                          >
                            {event.type}
                          </Badge>
                          <span className="font-medium">{event.item}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{event.timestamp}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span>R$ {event.oldPrice} → R$ {event.newPrice}</span>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Brain className="h-3 w-3" />
                          {event.aiConfidence}%
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{event.reason}</span>
                        <span className="text-green-600 font-medium">{event.impact}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>IA de Pricing em Ação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">💡 Insight IA</h4>
                    <p className="text-sm text-blue-700">
                      Demanda para ingressos VIP aumentou 23% nas últimas 2 horas. 
                      IA recomenda aumento de preço em 15%.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">📊 Otimização</h4>
                    <p className="text-sm text-green-700">
                      Promoção relâmpago para workshops aumentou receita em 28% 
                      em comparação com preços fixos.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Alerta</h4>
                    <p className="text-sm text-yellow-700">
                      Taxa de conversão para pacotes premium está abaixo do esperado. 
                      Considere ajustar preços.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Produtos e Preços</CardTitle>
                <CardDescription>Análise e status atual de cada produto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {products.map((product, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{product.name}</h4>
                        <Badge variant={
                          product.status === 'Otimizado' ? 'default' : 
                          product.status === 'Aumentando' ? 'success' : 
                          product.status === 'Reduzindo' ? 'secondary' : 'outline'
                        }>
                          {product.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Preço Base</p>
                          <p className="text-lg font-semibold">R$ {product.basePrice}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Preço Atual</p>
                          <p className="text-lg font-semibold text-green-600">R$ {product.currentPrice}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Demanda:</span>
                          <span className="ml-2 font-medium">{product.demand}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Elasticidade:</span>
                          <span className="ml-2 font-medium">{product.priceElasticity}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Otimização:</span>
                          <span className={`ml-2 font-medium ${
                            product.optimization.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>{product.optimization}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {priceStrategies.map((strategy, index) => (
                <Card 
                  key={index} 
                  className={`${
                    selectedStrategy === strategy.name.toLowerCase() ? 
                    'ring-2 ring-primary' : ''
                  } hover:shadow-lg transition-shadow cursor-pointer`}
                  onClick={() => setSelectedStrategy(strategy.name.toLowerCase())}
                >
                  <CardHeader>
                    <CardTitle>{strategy.name}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Nível de Risco</p>
                        <p className="font-semibold">{strategy.riskLevel}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Receita Esperada</p>
                        <p className="font-semibold text-green-600">{strategy.expectedRevenue}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Variação de Preço</p>
                        <p className="font-semibold">{strategy.priceVariation}</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant={selectedStrategy === strategy.name.toLowerCase() ? "default" : "outline"}
                      className="w-full"
                    >
                      {selectedStrategy === strategy.name.toLowerCase() ? 'Estratégia Ativa' : 'Selecionar'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Estratégia Personalizada</h3>
                    <p className="text-blue-700 mb-4">
                      Crie uma estratégia de pricing personalizada com parâmetros avançados
                    </p>
                    <Button>Criar Estratégia</Button>
                  </div>
                  <div className="text-6xl opacity-20">⚙️</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-6">
            <ChartCard
              title="Previsão de Demanda e Preço"
              subtitle="Projeção para as próximas 24 horas"
              type="line"
              data={demandForecast.concat([
                { name: '20:00', demand: 34, price: 120 },
                { name: '22:00', demand: 20, price: 110 },
                { name: '00:00', demand: 15, price: 105 },
              ])}
              height={300}
            />

            <Card>
              <CardHeader>
                <CardTitle>Previsões IA</CardTitle>
                <CardDescription>Análises preditivas para otimização de receita</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold">Previsão de Demanda</h3>
                    </div>
                    <p className="text-sm mb-4">
                      A IA prevê aumento de 34% na procura por ingressos VIP 
                      nas próximas 6 horas, com pico às 16:00.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confiança</span>
                      <span className="font-semibold">93%</span>
                    </div>
                    <Progress value={93} className="h-2 mt-1" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-5 w-5 text-amber-600" />
                      <h3 className="font-semibold">Elasticidade de Preço</h3>
                    </div>
                    <p className="text-sm mb-4">
                      Workshops possuem alta elasticidade. Redução de 15% 
                      no preço pode aumentar vendas em 40%.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confiança</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <Progress value={87} className="h-2 mt-1" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold">Projeção de Receita</h3>
                    </div>
                    <p className="text-sm mb-4">
                      Receita projetada para próxima semana: R$ 315.000 
                      com pricing dinâmico (+22% vs. estático).
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confiança</span>
                      <span className="font-semibold">91%</span>
                    </div>
                    <Progress value={91} className="h-2 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competition" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Concorrência</CardTitle>
                <CardDescription>Comparativo de preços com eventos similares</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {competitorAnalysis.map((comp, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{comp.event}</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Preço médio deles:</span>
                            <span className="ml-2 font-medium">R$ {comp.avgPrice}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Nosso preço:</span>
                            <span className="ml-2 font-medium">R$ {comp.ourPrice}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-bold ${
                          comp.advantage.startsWith('-') ? 'text-green-600' : 'text-amber-600'
                        }`}>
                          {comp.advantage}
                        </span>
                        <p className="text-xs text-muted-foreground">diferença</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-700 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Insight de Mercado</h4>
                      <p className="text-sm text-blue-700">
                        Seus preços estão em média 4.3% abaixo da concorrência, mas com 
                        conversão 18% maior. A IA sugere manter esta vantagem competitiva 
                        para maximizar a ocupação do evento.
                      </p>
                    </div>
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

export default DynamicPricing;

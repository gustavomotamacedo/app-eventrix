
import React, { useState } from 'react';
import { Map, Users, Clock, TrendingUp, MapPin, Filter, Download, Activity, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import KpiCard from '@/components/ui-custom/KpiCard';

const AnalyticsHeatmap = () => {
  const [selectedFloor, setSelectedFloor] = useState('1');
  const [selectedTime, setSelectedTime] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState('density');

  const heatmapData = {
    zones: [
      { id: 'entrance', name: 'Entrada Principal', density: 95, avgTime: 45, peakTime: '10:00-11:00' },
      { id: 'main-stage', name: 'Palco Principal', density: 88, avgTime: 125, peakTime: '14:00-15:00' },
      { id: 'exhibition-a', name: 'Área de Exposição A', density: 72, avgTime: 87, peakTime: '11:00-12:00' },
      { id: 'exhibition-b', name: 'Área de Exposição B', density: 68, avgTime: 92, peakTime: '15:00-16:00' },
      { id: 'networking', name: 'Área de Networking', density: 76, avgTime: 156, peakTime: '12:00-13:00' },
      { id: 'food-court', name: 'Praça de Alimentação', density: 82, avgTime: 78, peakTime: '12:30-13:30' },
      { id: 'workshop-1', name: 'Sala Workshop 1', density: 45, avgTime: 98, peakTime: '10:00-11:00' },
      { id: 'workshop-2', name: 'Sala Workshop 2', density: 52, avgTime: 102, peakTime: '14:00-15:00' },
      { id: 'lounge', name: 'Lounge VIP', density: 35, avgTime: 134, peakTime: '16:00-17:00' },
      { id: 'restrooms', name: 'Banheiros', density: 25, avgTime: 12, peakTime: '13:00-14:00' }
    ]
  };

  const fluxoData = [
    { from: 'Entrada Principal', to: 'Área de Exposição A', count: 1240 },
    { from: 'Entrada Principal', to: 'Palco Principal', count: 980 },
    { from: 'Área de Exposição A', to: 'Área de Networking', count: 756 },
    { from: 'Palco Principal', to: 'Praça de Alimentação', count: 654 },
    { from: 'Área de Networking', to: 'Praça de Alimentação', count: 543 }
  ];

  const timelineData = [
    { time: '08:00', density: 15 },
    { time: '09:00', density: 45 },
    { time: '10:00', density: 72 },
    { time: '11:00', density: 88 },
    { time: '12:00', density: 95 },
    { time: '13:00', density: 92 },
    { time: '14:00', density: 89 },
    { time: '15:00', density: 85 },
    { time: '16:00', density: 78 },
    { time: '17:00', density: 65 },
    { time: '18:00', density: 35 }
  ];

  const insights = [
    {
      type: 'high-traffic',
      title: 'Gargalo Identificado',
      description: 'Entrada principal apresenta congestionamento entre 10h-11h',
      priority: 'high',
      suggestion: 'Considere abrir entradas secundárias'
    },
    {
      type: 'low-engagement',
      title: 'Área Subutilizada',
      description: 'Lounge VIP com baixa ocupação durante o evento',
      priority: 'medium',
      suggestion: 'Promover atividades exclusivas no local'
    },
    {
      type: 'optimization',
      title: 'Otimização de Layout',
      description: 'Área de networking pode ser expandida',
      priority: 'low',
      suggestion: 'Realocação de stands para aumentar espaço'
    }
  ];

  const getDensityColor = (density: number) => {
    if (density >= 80) return 'bg-red-500';
    if (density >= 60) return 'bg-orange-500';
    if (density >= 40) return 'bg-yellow-500';
    if (density >= 20) return 'bg-green-500';
    return 'bg-blue-500';
  };

  const getDensityLabel = (density: number) => {
    if (density >= 80) return 'Muito Alta';
    if (density >= 60) return 'Alta';
    if (density >= 40) return 'Média';
    if (density >= 20) return 'Baixa';
    return 'Muito Baixa';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Mapa de Calor & Fluxo</h1>
            <p className="text-muted-foreground">Análise espacial e temporal do movimento dos participantes</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedFloor} onValueChange={setSelectedFloor}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Piso 1</SelectItem>
                <SelectItem value="2">Piso 2</SelectItem>
                <SelectItem value="3">Piso 3</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todo o evento</SelectItem>
                <SelectItem value="morning">Manhã</SelectItem>
                <SelectItem value="afternoon">Tarde</SelectItem>
                <SelectItem value="peak">Horário de pico</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="density">Densidade</SelectItem>
                <SelectItem value="time">Tempo médio</SelectItem>
                <SelectItem value="flow">Fluxo</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Densidade Máxima"
            value="95%"
            icon={<Users />}
            trend={{ value: 12.3, isPositive: true }}
          />
          <KpiCard
            title="Tempo Médio por Área"
            value="98 min"
            icon={<Clock />}
            trend={{ value: 5.7, isPositive: true }}
          />
          <KpiCard
            title="Áreas Monitoradas"
            value="10"
            icon={<MapPin />}
          />
          <KpiCard
            title="Pico de Movimento"
            value="12:00h"
            icon={<Activity />}
          />
        </div>

        {/* Mapa de calor visual */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Mapa de Calor - Piso {selectedFloor}
              </CardTitle>
              <CardDescription>Densidade de ocupação por área</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 h-96 p-4 bg-gray-50 rounded-lg">
                {heatmapData.zones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`relative rounded-lg p-3 text-white text-xs font-medium flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity cursor-pointer ${getDensityColor(zone.density)}`}
                    title={`${zone.name}: ${zone.density}% densidade`}
                  >
                    <div className="font-semibold">{zone.name}</div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{zone.density}%</div>
                      <div className="text-xs opacity-90">{getDensityLabel(zone.density)}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Legenda */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Muito Baixa (0-20%)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Baixa (20-40%)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Média (40-60%)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span>Alta (60-80%)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Muito Alta (80-100%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Áreas por Densidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {heatmapData.zones
                .sort((a, b) => b.density - a.density)
                .slice(0, 5)
                .map((zone, index) => (
                  <div key={zone.id} className="flex items-center justify-between p-2 rounded-lg border">
                    <div>
                      <div className="font-medium text-sm">{zone.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Pico: {zone.peakTime}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={zone.density >= 80 ? 'destructive' : zone.density >= 60 ? 'default' : 'secondary'}>
                        {zone.density}%
                      </Badge>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>

        {/* Tabs para análises detalhadas */}
        <Tabs defaultValue="timeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="flow">Fluxo</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="optimization">Otimização</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Densidade ao Longo do Dia</CardTitle>
                <CardDescription>Evolução da ocupação durante o evento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-11 gap-2">
                    {timelineData.map((item, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className={`h-24 rounded-t-lg mb-2 ${getDensityColor(item.density)}`}
                          style={{ height: `${item.density}px` }}
                        ></div>
                        <div className="text-xs font-medium">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.density}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Principais Fluxos de Movimento</CardTitle>
                <CardDescription>Rotas mais utilizadas pelos participantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {fluxoData.map((flow, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{flow.from}</div>
                        <div className="text-xs text-muted-foreground">para {flow.to}</div>
                      </div>
                    </div>
                    <Badge variant="outline">{flow.count} pessoas</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {insights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{insight.title}</h3>
                          <Badge 
                            variant={
                              insight.priority === 'high' ? 'destructive' : 
                              insight.priority === 'medium' ? 'default' : 
                              'secondary'
                            }
                            className="text-xs"
                          >
                            {insight.priority === 'high' ? 'Alta' : 
                             insight.priority === 'medium' ? 'Média' : 'Baixa'} Prioridade
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{insight.description}</p>
                        <p className="text-sm font-medium text-primary">💡 {insight.suggestion}</p>
                      </div>
                      <Button size="sm" variant="outline">Ver Detalhes</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sugestões de Layout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-1">✅ Expandir Área de Networking</h4>
                    <p className="text-sm text-green-700">Alta demanda identificada - potencial aumento de 30% na capacidade</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">🔄 Redistribuir Workshops</h4>
                    <p className="text-sm text-blue-700">Balancear ocupação entre salas de workshop</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-1">⚠️ Melhorar Sinalização</h4>
                    <p className="text-sm text-orange-700">Reduzir tempo de deslocamento entre áreas</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Previsão para Próximo Evento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Capacidade ótima prevista</span>
                      <Badge>+15%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Redução de gargalos</span>
                      <Badge variant="secondary">-25%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Melhoria no fluxo</span>
                      <Badge>+20%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Satisfação espacial</span>
                      <Badge>+12%</Badge>
                    </div>
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

export default AnalyticsHeatmap;

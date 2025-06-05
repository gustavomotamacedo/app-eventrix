
import React, { useState } from 'react';
import { MapPin, Activity, Users, Clock, Filter, Download, Eye, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import KpiCard from '@/components/ui-custom/KpiCard';

const AnalyticsHeatmap = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [selectedArea, setSelectedArea] = useState('all');

  const heatmapData = [
    { area: 'Entrada Principal', visitors: 1247, avgTime: '3.2min', density: 95 },
    { area: 'Estande A1-A10', visitors: 892, avgTime: '8.5min', density: 78 },
    { area: 'Área de Networking', visitors: 634, avgTime: '12.3min', density: 67 },
    { area: 'Auditório Principal', visitors: 1156, avgTime: '45min', density: 88 },
    { area: 'Praça de Alimentação', visitors: 723, avgTime: '18.7min', density: 72 },
    { area: 'Área VIP', visitors: 156, avgTime: '25.4min', density: 45 }
  ];

  const peakHours = [
    { hour: '08:00', visitors: 234 },
    { hour: '09:00', visitors: 567 },
    { hour: '10:00', visitors: 892 },
    { hour: '11:00', visitors: 1034 },
    { hour: '12:00', visitors: 645 },
    { hour: '13:00', visitors: 789 },
    { hour: '14:00', visitors: 1156 },
    { hour: '15:00', visitors: 934 },
    { hour: '16:00', visitors: 678 },
    { hour: '17:00', visitors: 345 }
  ];

  const incidents = [
    {
      id: 1,
      type: 'Aglomeração',
      area: 'Estande Tech Corp',
      time: '14:23',
      severity: 'Alta',
      status: 'Resolvido'
    },
    {
      id: 2,
      type: 'Fluxo Bloqueado',
      area: 'Corredor B',
      time: '11:45',
      severity: 'Média',
      status: 'Monitorando'
    },
    {
      id: 3,
      type: 'Baixa Densidade',
      area: 'Setor C',
      time: '09:30',
      severity: 'Baixa',
      status: 'Normal'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Mapa de Calor & Monitoramento</h1>
            <p className="text-muted-foreground">Análise de densidade, fluxo de pessoas e detecção de incidentes em tempo real</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hoje</SelectItem>
                <SelectItem value="yesterday">Ontem</SelectItem>
                <SelectItem value="week">7 dias</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Densidade Máxima"
            value="95%"
            icon={<Activity />}
            trend={{ value: 12.5, isPositive: false }}
          />
          <KpiCard
            title="Áreas Monitoradas"
            value="24"
            icon={<MapPin />}
            trend={{ value: 8.3, isPositive: true }}
          />
          <KpiCard
            title="Incidentes Detectados"
            value="3"
            icon={<Eye />}
            trend={{ value: 2, isPositive: false }}
          />
          <KpiCard
            title="Tempo Médio por Área"
            value="15.2min"
            icon={<Clock />}
            trend={{ value: 5.7, isPositive: true }}
          />
        </div>

        {/* Mapa de Calor Visual */}
        <Card>
          <CardHeader>
            <CardTitle>Mapa de Calor - Tempo Real</CardTitle>
            <CardDescription>Densidade de visitantes por área do evento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 h-96 bg-gray-50 p-4 rounded-lg">
              {/* Simulação visual do mapa */}
              <div className="col-span-4 bg-blue-100 p-4 rounded border-2 border-blue-300 relative">
                <span className="text-xs font-semibold">Entrada Principal</span>
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">95%</div>
              </div>
              
              <div className="col-span-2 bg-yellow-100 p-4 rounded border border-yellow-300 relative">
                <span className="text-xs font-semibold">Estandes A1-A10</span>
                <div className="absolute top-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded text-xs">78%</div>
              </div>
              
              <div className="col-span-2 bg-green-100 p-4 rounded border border-green-300 relative">
                <span className="text-xs font-semibold">Networking</span>
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">67%</div>
              </div>
              
              <div className="col-span-3 bg-orange-100 p-4 rounded border border-orange-300 relative">
                <span className="text-xs font-semibold">Auditório Principal</span>
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs">88%</div>
              </div>
              
              <div className="bg-purple-100 p-4 rounded border border-purple-300 relative">
                <span className="text-xs font-semibold">VIP</span>
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">45%</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center mt-4 space-x-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">Baixa (0-50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm">Média (51-75%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm">Alta (76-90%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm">Crítica (&gt;90%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs para análises detalhadas */}
        <Tabs defaultValue="areas" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="areas">Por Área</TabsTrigger>
            <TabsTrigger value="incidents">Incidentes</TabsTrigger>
            <TabsTrigger value="flow">Fluxo Temporal</TabsTrigger>
          </TabsList>

          <TabsContent value="areas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Análise Detalhada por Área</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {heatmapData.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{area.area}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {area.visitors} visitantes
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {area.avgTime} tempo médio
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={
                            area.density > 90 ? "destructive" : 
                            area.density > 75 ? "default" : 
                            area.density > 50 ? "secondary" : "outline"
                          }
                        >
                          {area.density}% densidade
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="incidents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Incidentes Detectados</CardTitle>
                <CardDescription>Alertas automáticos baseados em IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incidents.map((incident) => (
                    <div key={incident.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{incident.type}</h4>
                          <Badge 
                            variant={
                              incident.severity === 'Alta' ? "destructive" : 
                              incident.severity === 'Média' ? "default" : "secondary"
                            }
                          >
                            {incident.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {incident.area} • {incident.time}
                        </p>
                      </div>
                      <Badge variant="outline">{incident.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fluxo de Visitantes por Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {peakHours.map((hour, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-medium">{hour.hour}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                        <div 
                          className="bg-blue-600 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium"
                          style={{ width: `${(hour.visitors / 1200) * 100}%` }}
                        >
                          {hour.visitors > 600 && hour.visitors}
                        </div>
                      </div>
                      <div className="w-20 text-sm text-right">{hour.visitors}</div>
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

export default AnalyticsHeatmap;

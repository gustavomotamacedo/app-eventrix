
import React, { useState } from 'react';
import { Activity, AlertTriangle, Users, Clock, Brain, Zap, Eye, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import KpiCard from '@/components/ui-custom/KpiCard';

const HeatmapAI = () => {
  const [selectedMode, setSelectedMode] = useState('realtime');

  const aiInsights = {
    predictedIncidents: 3,
    riskAreas: 2,
    optimizationSuggestions: 5,
    accuracyRate: 96.7
  };

  const incidents = [
    {
      id: 1,
      type: 'Aglomeração Prevista',
      area: 'Entrada Principal',
      time: '15:30',
      probability: 89,
      severity: 'Alta',
      status: 'Predição',
      aiConfidence: 94
    },
    {
      id: 2,
      type: 'Fluxo Lento Detectado',
      area: 'Corredor B',
      time: '14:45',
      probability: 76,
      severity: 'Média',
      status: 'Confirmado',
      aiConfidence: 87
    },
    {
      id: 3,
      type: 'Densidade Crítica',
      area: 'Praça Alimentação',
      time: '12:15',
      probability: 95,
      severity: 'Alta',
      status: 'Resolvido',
      aiConfidence: 98
    }
  ];

  const riskAreas = [
    {
      area: 'Auditório Principal',
      riskLevel: 78,
      factors: ['Horário de pico', 'Palestrante popular', 'Capacidade limitada'],
      recommendation: 'Aumentar controle de acesso'
    },
    {
      area: 'Entrada Sul',
      riskLevel: 65,
      factors: ['Gargalo estrutural', 'Fluxo unidirecional'],
      recommendation: 'Sinalização adicional'
    },
    {
      area: 'Estande Tech Expo',
      riskLevel: 82,
      factors: ['Demo interativa', 'Fila crescente', 'Espaço reduzido'],
      recommendation: 'Organizar fila estruturada'
    }
  ];

  const aiPredictions = [
    {
      time: '15:00',
      prediction: 'Pico de visitantes na área de networking',
      confidence: 91,
      action: 'Alocar staff adicional'
    },
    {
      time: '15:30',
      prediction: 'Congestionamento previsto na saída',
      confidence: 87,
      action: 'Abrir saídas auxiliares'
    },
    {
      time: '16:00',
      prediction: 'Redução do fluxo em 40%',
      confidence: 94,
      action: 'Realocar equipe de segurança'
    }
  ];

  const heatmapData = [
    { area: 'Entrada', density: 95, temp: 'Crítico', aiAlert: true },
    { area: 'Estandes A', density: 78, temp: 'Alto', aiAlert: false },
    { area: 'Networking', density: 67, temp: 'Médio', aiAlert: false },
    { area: 'Auditório', density: 88, temp: 'Alto', aiAlert: true },
    { area: 'Alimentação', density: 72, temp: 'Alto', aiAlert: false },
    { area: 'VIP', density: 45, temp: 'Baixo', aiAlert: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Heatmap & Incident AI</h1>
            <p className="text-muted-foreground">Inteligência artificial para prevenção de incidentes e otimização de fluxo</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedMode} onValueChange={setSelectedMode}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Tempo Real</SelectItem>
                <SelectItem value="prediction">Predição</SelectItem>
                <SelectItem value="analysis">Análise</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Brain className="h-4 w-4 mr-2" />
              Treinar IA
            </Button>
          </div>
        </div>

        {/* KPIs da IA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Incidentes Previstos"
            value={aiInsights.predictedIncidents.toString()}
            icon={<Brain />}
            trend={{ value: 2, isPositive: false }}
          />
          <KpiCard
            title="Áreas de Risco"
            value={aiInsights.riskAreas.toString()}
            icon={<AlertTriangle />}
            trend={{ value: 1, isPositive: false }}
          />
          <KpiCard
            title="Sugestões IA"
            value={aiInsights.optimizationSuggestions.toString()}
            icon={<Zap />}
            trend={{ value: 3, isPositive: true }}
          />
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Precisão da IA</p>
                  <h3 className="text-3xl font-bold text-green-900">{aiInsights.accuracyRate}%</h3>
                  <p className="text-xs text-green-600 mt-1">Excelente (+1.2%)</p>
                </div>
                <div className="bg-green-200 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mapa de Calor Inteligente */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Heatmap Inteligente com IA
            </CardTitle>
            <CardDescription>Análise em tempo real com predições e alertas automáticos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 h-80 bg-gray-50 p-4 rounded-lg">
              {/* Simulação visual do mapa com IA */}
              <div className="col-span-3 bg-red-100 p-4 rounded border-2 border-red-400 relative animate-pulse">
                <span className="text-xs font-semibold">Entrada Principal</span>
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  95% - ALERTA IA
                </div>
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  Pico em 30min
                </div>
              </div>
              
              <div className="col-span-2 bg-yellow-100 p-4 rounded border border-yellow-300 relative">
                <span className="text-xs font-semibold">Estandes A1-A10</span>
                <div className="absolute top-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded text-xs">78%</div>
              </div>
              
              <div className="bg-green-100 p-4 rounded border border-green-300 relative">
                <span className="text-xs font-semibold">Networking</span>
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">67%</div>
              </div>
              
              <div className="col-span-2 bg-orange-100 p-4 rounded border-2 border-orange-400 relative">
                <span className="text-xs font-semibold">Auditório Principal</span>
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Brain className="h-3 w-3" />
                  88% - IA MONITORA
                </div>
              </div>
              
              <div className="bg-purple-100 p-4 rounded border border-purple-300 relative">
                <span className="text-xs font-semibold">VIP</span>
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">45%</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">Normal (0-50%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm">Atenção (51-75%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm">Alto (76-90%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm">Crítico (>90%)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-600">Monitoramento IA Ativo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid de informações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Incidentes e Predições */}
          <Card>
            <CardHeader>
              <CardTitle>Incidentes e Predições IA</CardTitle>
              <CardDescription>Alertas automáticos e previsões em tempo real</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
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
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Brain className="h-3 w-3" />
                      {incident.aiConfidence}% IA
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {incident.area} • {incident.time} • {incident.probability}% probabilidade
                  </p>
                  <Progress value={incident.probability} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Áreas de Risco */}
          <Card>
            <CardHeader>
              <CardTitle>Análise de Risco IA</CardTitle>
              <CardDescription>Áreas identificadas como potenciais pontos de atenção</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {riskAreas.map((area, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{area.area}</h4>
                    <div className="text-right">
                      <span className={`text-lg font-bold ${
                        area.riskLevel > 80 ? 'text-red-600' :
                        area.riskLevel > 60 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {area.riskLevel}%
                      </span>
                      <p className="text-xs text-muted-foreground">risco</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Fatores de risco:</p>
                    <div className="flex flex-wrap gap-1">
                      {area.factors.map((factor, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-sm text-blue-700">
                    <strong>IA Recomenda:</strong> {area.recommendation}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Predições da IA */}
        <Card>
          <CardHeader>
            <CardTitle>Predições da IA para Próximas Horas</CardTitle>
            <CardDescription>Previsões baseadas em machine learning e dados históricos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiPredictions.map((prediction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-purple-900">{prediction.time}</span>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Brain className="h-3 w-3" />
                        {prediction.confidence}%
                      </Badge>
                    </div>
                    <p className="text-sm text-purple-700 mb-2">{prediction.prediction}</p>
                    <p className="text-xs text-purple-600">
                      <strong>Ação sugerida:</strong> {prediction.action}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Implementar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status da IA */}
        <Card className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-indigo-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Status do Sistema IA</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-indigo-700">Modelos ativos:</span>
                    <p className="font-semibold">4/4</p>
                  </div>
                  <div>
                    <span className="text-indigo-700">Última atualização:</span>
                    <p className="font-semibold">14:23</p>
                  </div>
                  <div>
                    <span className="text-indigo-700">Precisão média:</span>
                    <p className="font-semibold">96.7%</p>
                  </div>
                  <div>
                    <span className="text-indigo-700">Predições hoje:</span>
                    <p className="font-semibold">247</p>
                  </div>
                </div>
              </div>
              <div className="text-6xl opacity-20">🤖</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeatmapAI;

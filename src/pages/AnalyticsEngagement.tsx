
import React, { useState } from 'react';
import { Activity, Users, Clock, MessageSquare, Heart, Share2, Download, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import KpiCard from '@/components/ui-custom/KpiCard';
import ChartCard from '@/components/ui-custom/ChartCard';

const AnalyticsEngagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const engagementScore = 8.7;
  const totalInteractions = 15847;
  const activeUsers = 2341;
  const avgSessionTime = '42min';

  const engagementByActivity = [
    { activity: 'Palestras', engagement: 92, participants: 1856, avgTime: '45min', rating: 4.8 },
    { activity: 'Networking', engagement: 87, participants: 1243, avgTime: '28min', rating: 4.6 },
    { activity: 'Workshops', engagement: 89, participants: 892, avgTime: '1h 15min', rating: 4.9 },
    { activity: 'Exposições', engagement: 74, participants: 2145, avgTime: '15min', rating: 4.2 },
    { activity: 'Demos', engagement: 82, participants: 634, avgTime: '12min', rating: 4.5 }
  ];

  const socialEngagement = [
    { name: 'Compartilhamentos', value: 1847 },
    { name: 'Comentários', value: 2341 },
    { name: 'Curtidas', value: 8923 },
    { name: 'Menções', value: 564 }
  ];

  const engagementEvolution = [
    { name: '08:00', value: 45 },
    { name: '09:00', value: 67 },
    { name: '10:00', value: 78 },
    { name: '11:00', value: 85 },
    { name: '12:00', value: 62 },
    { name: '13:00', value: 74 },
    { name: '14:00', value: 92 },
    { name: '15:00', value: 88 },
    { name: '16:00', value: 79 },
    { name: '17:00', value: 56 }
  ];

  const topContent = [
    {
      title: 'Palestra: "Futuro da IA no Brasil"',
      type: 'Palestra',
      engagement: 96,
      views: 2847,
      shares: 234,
      comments: 89
    },
    {
      title: 'Workshop: Desenvolvimento Mobile',
      type: 'Workshop',
      engagement: 94,
      views: 1653,
      shares: 156,
      comments: 67
    },
    {
      title: 'Demo: Nova Plataforma SaaS',
      type: 'Demo',
      engagement: 91,
      views: 1234,
      shares: 98,
      comments: 45
    }
  ];

  const userSegments = [
    { segment: 'Primeiros Visitantes', engagement: 76, users: 892 },
    { segment: 'Visitantes Recorrentes', engagement: 89, users: 1456 },
    { segment: 'VIPs', engagement: 94, users: 156 },
    { segment: 'Expositores', engagement: 87, users: 234 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Análise de Engajamento</h1>
            <p className="text-muted-foreground">Métricas detalhadas de participação e interação dos visitantes</p>
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
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Score de Engajamento</p>
                  <h3 className="text-3xl font-bold text-purple-900">{engagementScore}</h3>
                  <p className="text-xs text-purple-600 mt-1">Excelente (+0.8)</p>
                </div>
                <div className="bg-purple-200 p-3 rounded-full">
                  <Activity className="h-6 w-6 text-purple-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <KpiCard
            title="Total de Interações"
            value={totalInteractions.toLocaleString()}
            icon={<MessageSquare />}
            trend={{ value: 23.5, isPositive: true }}
          />

          <KpiCard
            title="Usuários Ativos"
            value={activeUsers.toLocaleString()}
            icon={<Users />}
            trend={{ value: 15.2, isPositive: true }}
          />

          <KpiCard
            title="Tempo Médio de Sessão"
            value={avgSessionTime}
            icon={<Clock />}
            trend={{ value: 12.8, isPositive: true }}
          />
        </div>

        {/* Engajamento por Redes Sociais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Evolução do Engajamento"
            subtitle="Score por horário do dia"
            type="line"
            data={engagementEvolution}
            height={300}
          />

          <Card>
            <CardHeader>
              <CardTitle>Engajamento Social</CardTitle>
              <CardDescription>Interações nas redes sociais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialEngagement.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.name === 'Compartilhamentos' && <Share2 className="h-4 w-4 text-blue-600" />}
                    {item.name === 'Comentários' && <MessageSquare className="h-4 w-4 text-green-600" />}
                    {item.name === 'Curtidas' && <Heart className="h-4 w-4 text-red-600" />}
                    {item.name === 'Menções' && <TrendingUp className="h-4 w-4 text-purple-600" />}
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">{item.value.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tabs para análises detalhadas */}
        <Tabs defaultValue="activities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Por Atividade</TabsTrigger>
            <TabsTrigger value="content">Top Conteúdo</TabsTrigger>
            <TabsTrigger value="segments">Segmentos</TabsTrigger>
            <TabsTrigger value="trends">Tendências</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engajamento por Atividade</CardTitle>
                <CardDescription>Análise detalhada de participação em cada tipo de atividade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {engagementByActivity.map((activity, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{activity.activity}</h4>
                        <div className="flex items-center gap-4">
                          <Badge variant="default">{activity.engagement}% engajamento</Badge>
                          <span className="text-sm text-muted-foreground">{activity.rating} ⭐</span>
                        </div>
                      </div>
                      <Progress value={activity.engagement} className="h-3" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{activity.participants} participantes</span>
                        <span>Tempo médio: {activity.avgTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo com Maior Engajamento</CardTitle>
                <CardDescription>Ranking dos conteúdos mais populares</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContent.map((content, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{content.title}</h4>
                        <Badge variant="outline" className="mt-1">{content.type}</Badge>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">{content.engagement}%</span>
                        <p className="text-xs text-muted-foreground">engajamento</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">{content.views.toLocaleString()}</div>
                        <div className="text-muted-foreground">Visualizações</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{content.shares}</div>
                        <div className="text-muted-foreground">Compartilhamentos</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{content.comments}</div>
                        <div className="text-muted-foreground">Comentários</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engajamento por Segmento</CardTitle>
                <CardDescription>Análise de diferentes grupos de usuários</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userSegments.map((segment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{segment.segment}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{segment.users} usuários</span>
                        <span className="font-bold">{segment.engagement}%</span>
                      </div>
                    </div>
                    <Progress value={segment.engagement} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tendências e Insights</CardTitle>
                <CardDescription>Análises preditivas baseadas em IA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">📈 Tendência Crescente</h4>
                    <p className="text-sm text-blue-700">
                      O engajamento em workshops aumentou 45% comparado ao evento anterior. 
                      Recomendamos expandir essa categoria.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">🎯 Oportunidade</h4>
                    <p className="text-sm text-green-700">
                      Horário de 14h às 16h apresenta maior engajamento. 
                      Considere agendar conteúdos premium neste período.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Atenção</h4>
                    <p className="text-sm text-yellow-700">
                      Primeiros visitantes apresentam 18% menos engajamento. 
                      Implemente estratégias de onboarding.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">🚀 Destaque</h4>
                    <p className="text-sm text-purple-700">
                      Conteúdos sobre IA geraram 3x mais interações. 
                      Invista em mais palestrantes desta área.
                    </p>
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

export default AnalyticsEngagement;


import React, { useState } from 'react';
import { Zap, Users, MessageSquare, Heart, Share2, Eye, Clock, TrendingUp, Award, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import KpiCard from '@/components/ui-custom/KpiCard';
import ChartCard from '@/components/ui-custom/ChartCard';

const AnalyticsEngagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedSegment, setSelectedSegment] = useState('all');

  const engagementScore = 87.2;
  const totalInteractions = 45680;
  const activeUsers = 3240;
  const avgSessionTime = 156;

  const engagementByActivity = [
    { name: 'Palestras', value: 92, participants: 2840, avgTime: 45 },
    { name: 'Networking', value: 89, participants: 2560, avgTime: 78 },
    { name: 'Workshops', value: 85, participants: 1980, avgTime: 120 },
    { name: 'Demos', value: 78, participants: 1640, avgTime: 35 },
    { name: 'Q&A', value: 82, participants: 2120, avgTime: 25 },
    { name: 'Games/Prêmios', value: 94, participants: 3180, avgTime: 42 }
  ];

  const engagementTimeline = [
    { name: '08:00', value: 35 },
    { name: '09:00', value: 62 },
    { name: '10:00', value: 78 },
    { name: '11:00', value: 85 },
    { name: '12:00', value: 72 },
    { name: '13:00', value: 68 },
    { name: '14:00', value: 89 },
    { name: '15:00', value: 92 },
    { name: '16:00', value: 87 },
    { name: '17:00', value: 74 },
    { name: '18:00', value: 45 }
  ];

  const socialMetrics = {
    mentions: 8540,
    shares: 2340,
    likes: 15670,
    comments: 4580,
    hashtag: '#TechSummit2024',
    reach: 125000,
    sentiment: 82
  };

  const topEngagers = [
    { name: 'João Silva', score: 95, activities: 12, time: 240, badge: 'Networking Master' },
    { name: 'Maria Santos', score: 92, activities: 10, time: 220, badge: 'Content Explorer' },
    { name: 'Pedro Costa', score: 88, activities: 9, time: 180, badge: 'Workshop Expert' },
    { name: 'Ana Lima', score: 85, activities: 8, time: 160, badge: 'Social Butterfly' },
    { name: 'Carlos Rocha', score: 82, activities: 7, time: 140, badge: 'Demo Hunter' }
  ];

  const gamificationStats = {
    totalPoints: 127500,
    achievements: 340,
    badges: 89,
    leaderboard: 45,
    challenges: 12
  };

  const contentEngagement = [
    { type: 'Vídeos', views: 12500, engagement: 8.4, shares: 340 },
    { type: 'Fotos', views: 8900, engagement: 12.7, shares: 890 },
    { type: 'Posts', views: 15600, engagement: 6.2, shares: 560 },
    { type: 'Stories', views: 22100, engagement: 15.3, shares: 1200 },
    { type: 'Lives', views: 5400, engagement: 23.8, shares: 180 }
  ];

  const interactionHotspots = [
    { area: 'Palco Principal', score: 95, peak: '14:00-15:00' },
    { area: 'Área de Networking', score: 88, peak: '12:00-13:00' },
    { area: 'Stand Interativo A', score: 82, peak: '10:00-11:00' },
    { area: 'Lounge Gamer', score: 89, peak: '16:00-17:00' },
    { area: 'Café Central', score: 76, peak: '11:00-12:00' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics de Engajamento</h1>
            <p className="text-muted-foreground">Análise completa do envolvimento e interação dos participantes</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedSegment} onValueChange={setSelectedSegment}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos Segmentos</SelectItem>
                <SelectItem value="visitors">Visitantes</SelectItem>
                <SelectItem value="exhibitors">Expositores</SelectItem>
                <SelectItem value="sponsors">Patrocinadores</SelectItem>
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
              </SelectContent>
            </Select>
            <Button variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              Relatório
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
                  <h3 className="text-3xl font-bold text-purple-900">{engagementScore}%</h3>
                  <p className="text-xs text-purple-600 mt-1">Excelente (+7.2%)</p>
                </div>
                <div className="bg-purple-200 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-purple-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <KpiCard
            title="Interações Totais"
            value={totalInteractions.toLocaleString()}
            icon={<Activity />}
            trend={{ value: 15.3, isPositive: true }}
          />

          <KpiCard
            title="Usuários Ativos"
            value={activeUsers.toLocaleString()}
            icon={<Users />}
            trend={{ value: 22.8, isPositive: true }}
          />

          <KpiCard
            title="Tempo Médio"
            value={`${avgSessionTime} min`}
            icon={<Clock />}
            trend={{ value: 12.1, isPositive: true }}
          />
        </div>

        {/* Tabs para diferentes análises */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="activities">Atividades</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="gamification">Gamificação</TabsTrigger>
            <TabsTrigger value="content">Conteúdo</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="Engajamento ao Longo do Dia"
                subtitle="Score de engajamento por hora"
                type="line"
                data={engagementTimeline}
                height={350}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Top Participantes Engajados</CardTitle>
                  <CardDescription>Usuários com maior nível de participação</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topEngagers.slice(0, 5).map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.badge}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{user.score}%</Badge>
                        <div className="text-xs text-muted-foreground">{user.activities} atividades</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Hotspots de Interação */}
            <Card>
              <CardHeader>
                <CardTitle>Hotspots de Interação</CardTitle>
                <CardDescription>Áreas com maior engajamento durante o evento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {interactionHotspots.map((hotspot, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                      <div className="font-semibold text-sm mb-2">{hotspot.area}</div>
                      <div className="text-2xl font-bold text-primary mb-1">{hotspot.score}%</div>
                      <div className="text-xs text-muted-foreground">Pico: {hotspot.peak}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engajamento por Atividade</CardTitle>
                <CardDescription>Performance de cada tipo de atividade do evento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {engagementByActivity.map((activity, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{activity.name}</span>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{activity.participants} participantes</span>
                          <span>{activity.avgTime} min médio</span>
                          <Badge variant={activity.value >= 90 ? "default" : activity.value >= 80 ? "secondary" : "outline"}>
                            {activity.value}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={activity.value} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{socialMetrics.shares.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Compartilhamentos</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{socialMetrics.likes.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Curtidas</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{socialMetrics.comments.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Comentários</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{(socialMetrics.reach / 1000).toFixed(0)}K</div>
                  <div className="text-sm text-muted-foreground">Alcance</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hashtag Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{socialMetrics.hashtag}</div>
                    <div className="text-sm text-blue-700">{socialMetrics.mentions.toLocaleString()} menções</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Sentimento Positivo</span>
                      <span className="text-sm font-medium">{socialMetrics.sentiment}%</span>
                    </div>
                    <Progress value={socialMetrics.sentiment} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engajamento de Conteúdo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contentEngagement.map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-2">
                      <span className="text-sm font-medium">{content.type}</span>
                      <div className="flex items-center gap-2 text-xs">
                        <span>{content.views.toLocaleString()} views</span>
                        <Badge variant="outline">{content.engagement}%</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gamification" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{gamificationStats.totalPoints.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Pontos Totais</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{gamificationStats.achievements}</div>
                  <div className="text-sm text-muted-foreground">Conquistas</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{gamificationStats.badges}</div>
                  <div className="text-sm text-muted-foreground">Badges</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{gamificationStats.leaderboard}</div>
                  <div className="text-sm text-muted-foreground">No Ranking</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{gamificationStats.challenges}</div>
                  <div className="text-sm text-muted-foreground">Desafios</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top 10 - Leaderboard</CardTitle>
                <CardDescription>Participantes com maior pontuação na gamificação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topEngagers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          index === 0 ? 'bg-yellow-500' : 
                          index === 1 ? 'bg-gray-400' : 
                          index === 2 ? 'bg-orange-600' : 'bg-blue-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.badge}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{(user.score * 100).toLocaleString()} pts</div>
                        <div className="text-xs text-muted-foreground">{user.time} min ativo</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance de Conteúdo</CardTitle>
                  <CardDescription>Métricas detalhadas por tipo de conteúdo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contentEngagement.map((content, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{content.type}</span>
                        <Badge variant="outline">{content.engagement}% engajamento</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <span>Views: {content.views.toLocaleString()}</span>
                        <span>Shares: {content.shares}</span>
                      </div>
                      <Progress value={content.engagement * 2} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recomendações IA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800 mb-1">🎯 Foco em Stories</div>
                    <div className="text-sm text-green-700">Stories têm 15.3% de engajamento - aumente a frequência</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800 mb-1">📸 Mais Conteúdo Visual</div>
                    <div className="text-sm text-blue-700">Fotos geram 12.7% de engajamento - aproveite momentos únicos</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800 mb-1">🎥 Lives Estratégicas</div>
                    <div className="text-sm text-purple-700">Lives têm 23.8% de engajamento - programe mais sessões</div>
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

export default AnalyticsEngagement;

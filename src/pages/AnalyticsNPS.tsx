
import React, { useState } from 'react';
import { Star, TrendingUp, MessageSquare, Users, Filter, Download, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import KpiCard from '@/components/ui-custom/KpiCard';
import ChartCard from '@/components/ui-custom/ChartCard';

const AnalyticsNPS = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const npsScore = 72;
  const totalResponses = 2847;
  const responseRate = 68.5;

  const npsDistribution = {
    promoters: 58,
    passives: 28,
    detractors: 14
  };

  const feedbackCategories = [
    { category: 'Conteúdo', score: 8.4, responses: 892, trend: 5.2 },
    { category: 'Organização', score: 7.8, responses: 756, trend: -2.1 },
    { category: 'Networking', score: 8.9, responses: 634, trend: 12.3 },
    { category: 'Infraestrutura', score: 7.2, responses: 523, trend: -1.8 },
    { category: 'Catering', score: 6.8, responses: 445, trend: -8.5 }
  ];

  const npsEvolution = [
    { name: 'Jan', value: 65 },
    { name: 'Fev', value: 68 },
    { name: 'Mar', value: 71 },
    { name: 'Abr', value: 69 },
    { name: 'Mai', value: 72 },
    { name: 'Jun', value: 75 }
  ];

  const satisfactionBySegment = [
    { name: 'Visitantes', value: 74 },
    { name: 'Expositores', value: 68 },
    { name: 'Patrocinadores', value: 82 },
    { name: 'Palestrantes', value: 79 }
  ];

  const recentFeedbacks = [
    {
      id: 1,
      text: "Evento excepcional! O conteúdo das palestras foi de altíssima qualidade e o networking superou minhas expectativas.",
      rating: 10,
      category: "Promotor",
      date: "2024-01-15",
      segment: "Visitante"
    },
    {
      id: 2,
      text: "Boa organização em geral, mas a área de alimentação poderia ser melhor. O wi-fi funcionou perfeitamente.",
      rating: 7,
      category: "Passivo",
      date: "2024-01-15",
      segment: "Expositor"
    },
    {
      id: 3,
      text: "Infelizmente tive problemas com o credenciamento. Demorou muito para conseguir meu badge.",
      rating: 4,
      category: "Detrator",
      date: "2024-01-14",
      segment: "Visitante"
    }
  ];

  const sentimentAnalysis = {
    positive: 67,
    neutral: 21,
    negative: 12
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">NPS & Análise de Feedbacks</h1>
            <p className="text-muted-foreground">Net Promoter Score e análise detalhada da satisfação dos participantes</p>
          </div>
          <div className="flex gap-2">
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
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">NPS Score</p>
                  <h3 className="text-3xl font-bold text-blue-900">{npsScore}</h3>
                  <p className="text-xs text-blue-600 mt-1">Excelente (+5 pts)</p>
                </div>
                <div className="bg-blue-200 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <KpiCard
            title="Total de Respostas"
            value={totalResponses.toLocaleString()}
            icon={<MessageSquare />}
            trend={{ value: 12.3, isPositive: true }}
          />

          <KpiCard
            title="Taxa de Resposta"
            value={`${responseRate}%`}
            icon={<Users />}
            trend={{ value: 8.7, isPositive: true }}
          />

          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Satisfação Média</p>
                  <h3 className="text-3xl font-bold text-green-900">8.2</h3>
                  <div className="flex items-center mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="bg-green-200 p-3 rounded-full">
                  <Star className="h-6 w-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distribuição NPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Distribuição NPS</CardTitle>
              <CardDescription>Classificação dos respondentes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-700">Promotores (9-10)</span>
                    <span className="text-sm font-bold">{npsDistribution.promoters}%</span>
                  </div>
                  <Progress value={npsDistribution.promoters} className="h-3" />
                  <p className="text-xs text-muted-foreground">{Math.round(totalResponses * npsDistribution.promoters / 100)} respostas</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-yellow-600">Neutros (7-8)</span>
                    <span className="text-sm font-bold">{npsDistribution.passives}%</span>
                  </div>
                  <Progress value={npsDistribution.passives} className="h-3" />
                  <p className="text-xs text-muted-foreground">{Math.round(totalResponses * npsDistribution.passives / 100)} respostas</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-red-600">Detratores (0-6)</span>
                    <span className="text-sm font-bold">{npsDistribution.detractors}%</span>
                  </div>
                  <Progress value={npsDistribution.detractors} className="h-3" />
                  <p className="text-xs text-muted-foreground">{Math.round(totalResponses * npsDistribution.detractors / 100)} respostas</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Interpretação do NPS</h4>
                <p className="text-sm text-blue-700">
                  Seu NPS de {npsScore} é considerado <strong>Excelente</strong>. 
                  Scores acima de 70 indicam uma base sólida de clientes promotores.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análise de Sentimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Positivo</span>
                  </div>
                  <span className="font-semibold text-green-600">{sentimentAnalysis.positive}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-400 rounded-full" />
                    <span className="text-sm">Neutro</span>
                  </div>
                  <span className="font-semibold text-gray-600">{sentimentAnalysis.neutral}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Negativo</span>
                  </div>
                  <span className="font-semibold text-red-600">{sentimentAnalysis.negative}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs para análises detalhadas */}
        <Tabs defaultValue="evolution" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="evolution">Evolução</TabsTrigger>
            <TabsTrigger value="categories">Por Categoria</TabsTrigger>
            <TabsTrigger value="segments">Por Segmento</TabsTrigger>
            <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
          </TabsList>

          <TabsContent value="evolution" className="space-y-6">
            <ChartCard
              title="Evolução do NPS"
              subtitle="Score mensal nos últimos 6 meses"
              type="line"
              data={npsEvolution}
              height={400}
            />
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Satisfação por Categoria</CardTitle>
                <CardDescription>Avaliação detalhada de cada aspecto do evento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {feedbackCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.category}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant={category.trend > 0 ? "default" : "destructive"} className="text-xs">
                            {category.trend > 0 ? '+' : ''}{category.trend}%
                          </Badge>
                          <span className="font-bold">{category.score}/10</span>
                        </div>
                      </div>
                      <Progress value={category.score * 10} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{category.responses} respostas</span>
                        <span>{category.score >= 8 ? 'Excelente' : category.score >= 7 ? 'Bom' : 'Precisa melhorar'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments" className="space-y-6">
            <ChartCard
              title="NPS por Segmento"
              subtitle="Satisfação de diferentes grupos de participantes"
              type="bar"
              data={satisfactionBySegment}
              height={400}
            />
          </TabsContent>

          <TabsContent value="feedbacks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Feedbacks Recentes</CardTitle>
                <CardDescription>Comentários mais recentes dos participantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentFeedbacks.map((feedback) => (
                  <div key={feedback.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            feedback.category === 'Promotor' ? 'default' : 
                            feedback.category === 'Passivo' ? 'secondary' : 
                            'destructive'
                          }
                        >
                          {feedback.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{feedback.segment}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">{feedback.rating}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-sm">{feedback.text}</p>
                    <div className="text-xs text-muted-foreground">
                      {new Date(feedback.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsNPS;

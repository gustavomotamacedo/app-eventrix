
import React, { useState } from 'react';
import { Camera, CheckCircle, XCircle, AlertTriangle, Eye, Upload, Scan, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KpiCard from '@/components/ui-custom/KpiCard';

const AIValidator = () => {
  const [isScanning, setIsScanning] = useState(false);

  const validationStats = {
    totalValidations: 2847,
    successRate: 94.2,
    averageTime: 1.8,
    flaggedIssues: 45
  };

  const recentValidations = [
    {
      id: 1,
      standName: 'Tech Corp - A12',
      timestamp: '14:23:45',
      status: 'approved',
      score: 96,
      issues: [],
      image: '/placeholder.svg'
    },
    {
      id: 2,
      standName: 'Innovation Labs - B07',
      timestamp: '14:20:12',
      status: 'flagged',
      score: 72,
      issues: ['Altura inadequada', 'Bloqueio de passagem'],
      image: '/placeholder.svg'
    },
    {
      id: 3,
      standName: 'Digital Solutions - C03',
      timestamp: '14:18:30',
      status: 'approved',
      score: 89,
      issues: [],
      image: '/placeholder.svg'
    },
    {
      id: 4,
      standName: 'Future Tech - A08',
      timestamp: '14:15:45',
      status: 'rejected',
      score: 45,
      issues: ['Estrutura instável', 'Não conformidade elétrica', 'Ocupação excessiva'],
      image: '/placeholder.svg'
    }
  ];

  const validationCriteria = [
    {
      category: 'Segurança Estrutural',
      weight: 30,
      checks: ['Estabilidade da estrutura', 'Fixação adequada', 'Capacidade de carga']
    },
    {
      category: 'Conformidade Elétrica',
      weight: 25,
      checks: ['Instalação segura', 'Certificação de equipamentos', 'Proteção contra sobrecarga']
    },
    {
      category: 'Acessibilidade',
      weight: 20,
      checks: ['Passagens desobstruídas', 'Altura adequada', 'Acesso para PCD']
    },
    {
      category: 'Normativas',
      weight: 15,
      checks: ['Conformidade com regulamento', 'Documentação completa', 'Licenças válidas']
    },
    {
      category: 'Estética',
      weight: 10,
      checks: ['Alinhamento visual', 'Limpeza', 'Organização']
    }
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Validador IA de Stands</h1>
            <p className="text-muted-foreground">Validação automática de conformidade e segurança usando visão computacional</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Imagens
            </Button>
            <Button onClick={handleStartScan} disabled={isScanning}>
              {isScanning ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Scan className="h-4 w-4 mr-2" />
              )}
              {isScanning ? 'Escaneando...' : 'Iniciar Scan'}
            </Button>
          </div>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Total de Validações"
            value={validationStats.totalValidations.toLocaleString()}
            icon={<Eye />}
            trend={{ value: 12.5, isPositive: true }}
          />
          <KpiCard
            title="Taxa de Aprovação"
            value={`${validationStats.successRate}%`}
            icon={<CheckCircle />}
            trend={{ value: 3.2, isPositive: true }}
          />
          <KpiCard
            title="Tempo Médio"
            value={`${validationStats.averageTime}s`}
            icon={<Camera />}
            trend={{ value: 0.5, isPositive: false }}
          />
          <KpiCard
            title="Issues Detectadas"
            value={validationStats.flaggedIssues.toString()}
            icon={<AlertTriangle />}
            trend={{ value: 8, isPositive: false }}
          />
        </div>

        {/* Scanner em tempo real */}
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Scanner IA em Tempo Real
            </CardTitle>
            <CardDescription>Aponte a câmera para um stand e obtenha validação instantânea</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                  {isScanning ? (
                    <div className="text-white text-center">
                      <div className="animate-pulse">
                        <Camera className="h-12 w-12 mx-auto mb-2" />
                        <p>Analisando stand...</p>
                      </div>
                      <div className="absolute inset-0 border-4 border-green-500 animate-pulse rounded-lg"></div>
                    </div>
                  ) : (
                    <div className="text-gray-400 text-center">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p>Clique em "Iniciar Scan" para começar</p>
                    </div>
                  )}
                </div>
                <Button 
                  onClick={handleStartScan} 
                  disabled={isScanning}
                  className="w-full"
                >
                  {isScanning ? 'Escaneando...' : 'Escanear Stand'}
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">Critérios de Validação</h3>
                {validationCriteria.map((criteria, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{criteria.category}</span>
                      <span className="text-xs text-muted-foreground">{criteria.weight}%</span>
                    </div>
                    <Progress value={isScanning ? Math.random() * 100 : 0} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {criteria.checks.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs para diferentes visualizações */}
        <Tabs defaultValue="recent" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent">Validações Recentes</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="config">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Validações Recentes</CardTitle>
                <CardDescription>Últimas validações realizadas pelo sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentValidations.map((validation) => (
                    <div key={validation.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <Camera className="h-6 w-6 text-gray-400" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{validation.standName}</h4>
                          <Badge 
                            variant={
                              validation.status === 'approved' ? 'default' : 
                              validation.status === 'flagged' ? 'secondary' : 'destructive'
                            }
                          >
                            {validation.status === 'approved' && <CheckCircle className="h-3 w-3 mr-1" />}
                            {validation.status === 'flagged' && <AlertTriangle className="h-3 w-3 mr-1" />}
                            {validation.status === 'rejected' && <XCircle className="h-3 w-3 mr-1" />}
                            {validation.status === 'approved' ? 'Aprovado' : 
                             validation.status === 'flagged' ? 'Atenção' : 'Rejeitado'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {validation.timestamp} • Score: {validation.score}/100
                        </p>
                        {validation.issues.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {validation.issues.map((issue, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {issue}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          validation.score >= 90 ? 'text-green-600' :
                          validation.score >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {validation.score}
                        </div>
                        <div className="text-xs text-muted-foreground">Score</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Aprovados</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">2,684</span>
                        <span className="text-sm text-muted-foreground ml-2">94.3%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span>Com Atenção</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">118</span>
                        <span className="text-sm text-muted-foreground ml-2">4.1%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span>Rejeitados</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">45</span>
                        <span className="text-sm text-muted-foreground ml-2">1.6%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Issues Mais Comuns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { issue: 'Altura inadequada', count: 23 },
                    { issue: 'Bloqueio de passagem', count: 18 },
                    { issue: 'Estrutura instável', count: 12 },
                    { issue: 'Problemas elétricos', count: 8 },
                    { issue: 'Documentação incompleta', count: 6 }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{item.issue}</span>
                      <Badge variant="outline">{item.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="config" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Validador</CardTitle>
                <CardDescription>Ajuste os parâmetros de validação da IA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {validationCriteria.map((criteria, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-medium">{criteria.category}</label>
                      <span className="text-sm text-muted-foreground">{criteria.weight}%</span>
                    </div>
                    <Progress value={criteria.weight * (100/30)} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {criteria.checks.join(' • ')}
                    </p>
                  </div>
                ))}
                <Button className="w-full mt-6">Salvar Configurações</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AIValidator;

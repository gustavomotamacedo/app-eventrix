
import React, { useState } from 'react';
import { Shield, FileText, Check, AlertTriangle, FileClock, Brain, Download, Filter, Eye, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KpiCard from '@/components/ui-custom/KpiCard';
import LegalGPT from '@/components/ai-tools/LegalGPT';

const LegalAI = () => {
  const [selectedDocType, setSelectedDocType] = useState('contracts');

  const documentStats = {
    totalDocuments: 187,
    analyzedDocuments: 172,
    approvedDocuments: 154,
    flaggedDocuments: 18
  };

  const documentTypes = [
    { id: 'contracts', name: 'Contratos', count: 78 },
    { id: 'exhibitor', name: 'Termos de Expositor', count: 45 },
    { id: 'compliance', name: 'Compliance', count: 24 },
    { id: 'sponsors', name: 'Patrocinadores', count: 19 },
    { id: 'security', name: 'Segurança', count: 21 }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: 'Contrato_TechCorp_Expositor.pdf',
      type: 'Contrato',
      status: 'approved',
      date: '2024-01-15',
      issues: [],
      compliance: 98,
      timeToAnalyze: '23s'
    },
    {
      id: 2,
      name: 'Termo_Responsabilidade_Patrocinador.docx',
      type: 'Compliance',
      status: 'flagged',
      date: '2024-01-15',
      issues: ['Cláusula 3.2 ambígua', 'Falta assinatura digital'],
      compliance: 82,
      timeToAnalyze: '45s'
    },
    {
      id: 3,
      name: 'Autorização_Uso_Imagem.pdf',
      type: 'Termo',
      status: 'approved',
      date: '2024-01-14',
      issues: [],
      compliance: 100,
      timeToAnalyze: '19s'
    },
    {
      id: 4,
      name: 'Contrato_Prestação_Serviços_Audio.pdf',
      type: 'Contrato',
      status: 'flagged',
      date: '2024-01-14',
      issues: ['Cláusula de rescisão incompleta', 'Valores inconsistentes'],
      compliance: 74,
      timeToAnalyze: '37s'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Módulos LEGAL AI</h1>
            <p className="text-muted-foreground">IA avançada para análise de contratos, compliance e assuntos legais</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedDocType} onValueChange={setSelectedDocType}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {documentTypes.map(type => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Upload Documento
            </Button>
          </div>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard
            title="Total de Documentos"
            value={documentStats.totalDocuments.toString()}
            icon={<FileText />}
            trend={{ value: 23, isPositive: true }}
          />
          <KpiCard
            title="Documentos Analisados"
            value={documentStats.analyzedDocuments.toString()}
            icon={<Check />}
            trend={{ value: 15, isPositive: true }}
          />
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Aprovados</p>
                  <h3 className="text-3xl font-bold text-green-900">{documentStats.approvedDocuments}</h3>
                  <p className="text-xs text-green-600 mt-1">
                    {Math.round(documentStats.approvedDocuments / documentStats.analyzedDocuments * 100)}% de conformidade
                  </p>
                </div>
                <div className="bg-green-200 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-700">Necessitam Atenção</p>
                  <h3 className="text-3xl font-bold text-amber-900">{documentStats.flaggedDocuments}</h3>
                  <p className="text-xs text-amber-600 mt-1">
                    {Math.round(documentStats.flaggedDocuments / documentStats.analyzedDocuments * 100)}% com problemas
                  </p>
                </div>
                <div className="bg-amber-200 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-amber-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Módulo principal de análise */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              LEGAL AI em Ação
            </CardTitle>
            <CardDescription>IA jurídica especializada em eventos e contratos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex gap-4">
                <div className="bg-blue-200 p-3 rounded-full h-fit">
                  <Brain className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">O que a LEGAL AI faz</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-700">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <p>Analisa documentos jurídicos identificando problemas, inconsistências e riscos</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <p>Verifica compliance com legislação vigente e normas do evento</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <p>Sugere correções e melhorias em cláusulas contratuais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Upload area */}
              <div className="w-full md:w-1/3 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileClock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="font-semibold mb-2">Upload de Documento</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Arraste e solte ou clique para fazer upload de um documento para análise
                </p>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Selecionar Arquivo
                </Button>
                <div className="text-xs text-muted-foreground mt-4">
                  Formatos suportados: PDF, DOCX, TXT (máx. 10MB)
                </div>
              </div>

              {/* Next analysis */}
              <div className="w-full md:w-2/3">
                <div className="space-y-2 mb-6">
                  <h3 className="font-semibold text-lg">Próximos Análises Automáticas</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentos agendados para análise automática pela IA
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium">Contratos de Fornecedores</h4>
                        <p className="text-xs text-muted-foreground">15 documentos aguardando análise</p>
                      </div>
                    </div>
                    <Badge>Agendado: Hoje 18:00</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-purple-600" />
                      <div>
                        <h4 className="font-medium">Termos de Uso e Política de Privacidade</h4>
                        <p className="text-xs text-muted-foreground">2 documentos aguardando análise</p>
                      </div>
                    </div>
                    <Badge>Agendado: Amanhã 09:00</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs para diferentes visualizações */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="contracts">Contratos</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documentos Analisados Recentemente</CardTitle>
                <CardDescription>Resultados da análise jurídica pela IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <FileText className="h-8 w-8 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{doc.name}</h4>
                          <Badge 
                            variant={doc.status === 'approved' ? 'default' : 'secondary'}
                          >
                            {doc.status === 'approved' ? 'Aprovado' : 'Necessita Atenção'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {doc.type} • {new Date(doc.date).toLocaleDateString('pt-BR')} • Análise em {doc.timeToAnalyze}
                        </p>
                        
                        {doc.issues.length > 0 && (
                          <div className="space-y-1 mb-3">
                            <p className="text-sm font-medium text-amber-700">Questões identificadas:</p>
                            <ul className="text-sm text-amber-700 list-disc pl-5">
                              {doc.issues.map((issue, index) => (
                                <li key={index}>{issue}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Compliance:</span>
                          <Progress 
                            value={doc.compliance} 
                            className="h-2 w-24" 
                          />
                          <span className={`text-sm font-medium ${
                            doc.compliance >= 90 ? 'text-green-600' : 
                            doc.compliance >= 75 ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {doc.compliance}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contracts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Contratos</CardTitle>
                <CardDescription>Gestão e análise inteligente de contratos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold">Todos os Contratos</h3>
                      <p className="text-3xl font-bold mt-2">78</p>
                      <p className="text-sm text-muted-foreground">documentos</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold">Aprovados</h3>
                      <p className="text-3xl font-bold mt-2">64</p>
                      <p className="text-sm text-muted-foreground">contratos</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="bg-amber-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="font-semibold">Em Revisão</h3>
                      <p className="text-3xl font-bold mt-2">11</p>
                      <p className="text-sm text-muted-foreground">contratos</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <FileClock className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold">Pendentes</h3>
                      <p className="text-3xl font-bold mt-2">3</p>
                      <p className="text-sm text-muted-foreground">contratos</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance e Regulamentação</CardTitle>
                <CardDescription>Status de compliance e adesão às normas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { 
                      name: 'LGPD - Proteção de Dados', 
                      status: 'compliant', 
                      score: 98, 
                      lastCheck: '14/01/2024',
                      details: 'Todos os termos e políticas estão em conformidade com a LGPD'
                    },
                    { 
                      name: 'Acessibilidade', 
                      status: 'partially', 
                      score: 86, 
                      lastCheck: '13/01/2024',
                      details: 'Algumas áreas precisam de melhorias para atender o Decreto nº 5.296'
                    },
                    { 
                      name: 'Normas Técnicas ABNT', 
                      status: 'compliant', 
                      score: 100, 
                      lastCheck: '12/01/2024',
                      details: 'Todos os requisitos da ABNT NBR 16933 foram atendidos'
                    },
                    { 
                      name: 'Licenças Municipais', 
                      status: 'pending', 
                      score: 45, 
                      lastCheck: '10/01/2024',
                      details: 'Licença de funcionamento municipal precisa ser renovada'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className={`p-3 rounded-full ${
                        item.status === 'compliant' ? 'bg-green-100' : 
                        item.status === 'partially' ? 'bg-amber-100' : 'bg-red-100'
                      }`}>
                        {item.status === 'compliant' && <Check className="h-6 w-6 text-green-600" />}
                        {item.status === 'partially' && <AlertTriangle className="h-6 w-6 text-amber-600" />}
                        {item.status === 'pending' && <AlertCircle className="h-6 w-6 text-red-600" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <Badge 
                            variant={
                              item.status === 'compliant' ? 'default' : 
                              item.status === 'partially' ? 'secondary' : 'destructive'
                            }
                          >
                            {item.status === 'compliant' ? 'Conforme' : 
                             item.status === 'partially' ? 'Parcialmente Conforme' : 'Pendente'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Verificado em {item.lastCheck}
                        </p>
                        <p className="text-sm mb-3">
                          {item.details}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Score de Compliance:</span>
                          <Progress 
                            value={item.score} 
                            className="h-2 w-24" 
                          />
                          <span className={`text-sm font-medium ${
                            item.score >= 90 ? 'text-green-600' : 
                            item.score >= 70 ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {item.score}%
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        Detalhes
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Templates Jurídicos</CardTitle>
                <CardDescription>Modelos pré-aprovados pela IA jurídica</CardDescription>
              </CardHeader>
              <CardContent>
                <LegalGPT />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LegalAI;

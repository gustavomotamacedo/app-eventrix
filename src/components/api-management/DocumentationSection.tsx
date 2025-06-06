
import React from 'react';
import { Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CodeExamples {
  javascript: string;
  python: string;
  curl: string;
}

interface DocumentationSectionProps {
  codeExamples: CodeExamples;
}

const DocumentationSection: React.FC<DocumentationSectionProps> = ({ codeExamples }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Exemplos de Código</CardTitle>
          <CardDescription>Comece rapidamente com estes exemplos</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="javascript" className="space-y-4">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            
            {Object.entries(codeExamples).map(([language, code]) => (
              <TabsContent key={language} value={language}>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{code}</code>
                  </pre>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="absolute top-2 right-2"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Copiar
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rate Limits</CardTitle>
          <CardDescription>Limites de requisições por minuto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold">Plano Básico</h3>
              <p className="text-2xl font-bold text-blue-600">1,000</p>
              <p className="text-sm text-muted-foreground">req/min</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold">Plano Pro</h3>
              <p className="text-2xl font-bold text-green-600">5,000</p>
              <p className="text-sm text-muted-foreground">req/min</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold">Plano Enterprise</h3>
              <p className="text-2xl font-bold text-purple-600">Ilimitado</p>
              <p className="text-sm text-muted-foreground">req/min</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentationSection;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LogsSection: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logs da API</CardTitle>
        <CardDescription>Histórico de requisições em tempo real</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-2 text-sm border-b">
              <div className="flex items-center gap-4">
                <Badge variant="secondary">GET</Badge>
                <span className="font-mono">/api/v1/events</span>
                <span className="text-muted-foreground">
                  {new Date(Date.now() - index * 60000).toLocaleTimeString('pt-BR')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">200</Badge>
                <span className="text-muted-foreground">125ms</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LogsSection;

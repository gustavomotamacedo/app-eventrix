
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Endpoint {
  method: string;
  path: string;
  description: string;
  requests: number;
  avgResponse: string;
  errorRate: string;
}

interface EndpointsSectionProps {
  endpoints: Endpoint[];
}

const EndpointsSection: React.FC<EndpointsSectionProps> = ({ endpoints }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Endpoints Disponíveis</CardTitle>
        <CardDescription>Lista de todos os endpoints da API com estatísticas de uso</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Método</TableHead>
              <TableHead>Endpoint</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Requisições</TableHead>
              <TableHead>Resp. Média</TableHead>
              <TableHead>Taxa de Erro</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {endpoints.map((endpoint, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Badge 
                    variant={
                      endpoint.method === 'GET' ? 'secondary' : 
                      endpoint.method === 'POST' ? 'default' : 'outline'
                    }
                  >
                    {endpoint.method}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{endpoint.path}</TableCell>
                <TableCell>{endpoint.description}</TableCell>
                <TableCell>{endpoint.requests.toLocaleString()}</TableCell>
                <TableCell>{endpoint.avgResponse}</TableCell>
                <TableCell>
                  <span className={parseFloat(endpoint.errorRate) > 0.3 ? 'text-red-600' : 'text-green-600'}>
                    {endpoint.errorRate}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EndpointsSection;

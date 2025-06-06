
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';

interface Webhook {
  id: number;
  url: string;
  events: string[];
  status: string;
  lastDelivery: string;
  success: boolean;
}

interface WebhooksSectionProps {
  webhooks: Webhook[];
}

const WebhooksSection: React.FC<WebhooksSectionProps> = ({ webhooks }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Webhooks</CardTitle>
            <CardDescription>Configure webhooks para receber notificações em tempo real</CardDescription>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Webhook
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>Eventos</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Última Entrega</TableHead>
              <TableHead>Sucesso</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {webhooks.map((webhook) => (
              <TableRow key={webhook.id}>
                <TableCell className="font-mono text-sm max-w-xs truncate">
                  {webhook.url}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {webhook.events.map((event, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {event}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={webhook.status === 'active' ? 'default' : 'secondary'}>
                    {webhook.status === 'active' ? 'Ativo' : 'Inativo'}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{webhook.lastDelivery}</TableCell>
                <TableCell>
                  <Badge variant={webhook.success ? 'default' : 'destructive'}>
                    {webhook.success ? 'Sucesso' : 'Falha'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Switch checked={webhook.status === 'active'} />
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WebhooksSection;


import React, { useState } from 'react';
import { Eye, EyeOff, Copy, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';

interface ApiKey {
  id: number;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  requests: number;
  status: string;
}

interface ApiKeysSectionProps {
  apiKey: string;
  apiKeys: ApiKey[];
}

const ApiKeysSection: React.FC<ApiKeysSectionProps> = ({ apiKey, apiKeys }) => {
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="space-y-6">
      {/* Chave principal */}
      <Card>
        <CardHeader>
          <CardTitle>Sua Chave de API Principal</CardTitle>
          <CardDescription>Use esta chave para autenticar suas requisições</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              type={showApiKey ? 'text' : 'password'}
              value={apiKey}
              readOnly
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowApiKey(!showApiKey)}
            >
              {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            ⚠️ Mantenha sua chave segura. Ela dá acesso total à sua conta.
          </div>
        </CardContent>
      </Card>

      {/* Lista de chaves */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Chaves de API</CardTitle>
              <CardDescription>Gerencie todas as suas chaves de API</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nova Chave
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Chave</TableHead>
                <TableHead>Criada</TableHead>
                <TableHead>Último Uso</TableHead>
                <TableHead>Requisições</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.name}</TableCell>
                  <TableCell className="font-mono text-sm">{key.key}</TableCell>
                  <TableCell>{new Date(key.created).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{new Date(key.lastUsed).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{key.requests.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={key.status === 'active' ? 'default' : 'secondary'}>
                      {key.status === 'active' ? 'Ativa' : 'Inativa'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Switch checked={key.status === 'active'} />
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
    </div>
  );
};

export default ApiKeysSection;

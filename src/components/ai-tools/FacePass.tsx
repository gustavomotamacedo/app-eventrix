
import React, { useState } from 'react';
import { Camera, Check, User, CircleX, Upload, RefreshCw } from 'lucide-react';

const FacePass = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [processing, setProcessing] = useState(false);
  
  // Sample data
  const recentRegistrations = [
    { id: 1, name: 'Ana Silva', company: 'Global Retail Inc.', time: '10:23', status: 'success' },
    { id: 2, name: 'Carlos Mendes', company: 'Banking Solutions SA', time: '10:15', status: 'success' },
    { id: 3, name: 'Patrícia Alencar', company: 'Insurance Group', time: '10:12', status: 'failed' },
    { id: 4, name: 'Rafael Torres', company: 'Government Security', time: '10:05', status: 'success' },
  ];
  
  const registrationStats = {
    total: 458,
    today: 120,
    pending: 15,
    failed: 7,
  };
  
  const handleScanFace = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
    }, 3000);
  };
  
  return (
    <div className="rounded-lg border">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'dashboard' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('scanner')}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'scanner' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Scanner Facial
        </button>
        <button
          onClick={() => setActiveTab('upload')}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'upload' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Upload em Massa
        </button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-muted/30 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Total Registrado</p>
                <h3 className="text-2xl font-bold mt-1">{registrationStats.total}</h3>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Registros Hoje</p>
                <h3 className="text-2xl font-bold mt-1">{registrationStats.today}</h3>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <h3 className="text-2xl font-bold mt-1">{registrationStats.pending}</h3>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Falhas</p>
                <h3 className="text-2xl font-bold mt-1 text-destructive">{registrationStats.failed}</h3>
              </div>
            </div>
            
            <h3 className="font-semibold mb-3">Registros Recentes</h3>
            <div className="space-y-2">
              {recentRegistrations.map((reg) => (
                <div key={reg.id} className="flex justify-between items-center border-b last:border-0 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <User size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{reg.name}</p>
                      <p className="text-xs text-muted-foreground">{reg.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{reg.time}</span>
                    {reg.status === 'success' ? (
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check size={14} className="text-green-600" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <CircleX size={14} className="text-red-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Scanner Tab */}
        {activeTab === 'scanner' && (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-64 h-64 bg-muted rounded-lg flex flex-col items-center justify-center mb-6">
              {processing ? (
                <div className="flex flex-col items-center">
                  <RefreshCw size={32} className="text-primary animate-spin mb-3" />
                  <p className="text-muted-foreground">Processando...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Camera size={32} className="text-muted-foreground mb-3" />
                  <p className="text-muted-foreground">Câmera desligada</p>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleScanFace}
              disabled={processing}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70"
            >
              {processing ? "Escaneando..." : "Escanear Face"}
            </button>
            
            <p className="text-sm text-muted-foreground mt-4 text-center max-w-xs">
              Posicione o rosto da pessoa no centro da câmera para realizar o reconhecimento facial.
            </p>
          </div>
        )}
        
        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Faça o upload de múltiplas fotos ou uma lista CSV com dados dos participantes e suas fotos.
            </p>
            
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center mb-6">
              <div className="flex flex-col items-center">
                <Upload size={36} className="text-muted-foreground mb-3" />
                <h4 className="font-semibold mb-1">Arraste arquivos ou clique para selecionar</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Suporta JPG, PNG ou CSV (até 10MB)
                </p>
                <button className="bg-muted px-4 py-2 rounded-md text-sm hover:bg-muted/70 transition-colors">
                  Selecionar Arquivos
                </button>
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-3">Template para Upload em Massa</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Baixe nosso template CSV para facilitar o cadastro de múltiplos participantes.
              </p>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors text-sm">
                Baixar Template CSV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacePass;


import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const CreateEvent = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2>Criar Novo Evento</h2>
        <p className="text-muted-foreground">Preencha as informações do seu evento</p>
      </div>
      
      <div className="space-y-6">
        {/* Basic Info */}
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Informações Básicas</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome do Evento</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                placeholder="Ex: Tech Summit 2024"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Data de Início</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                  <input 
                    type="date" 
                    className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Data de Término</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                  <input 
                    type="date" 
                    className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Local</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                <input 
                  type="text" 
                  className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="Endereço do evento"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Descrição</label>
              <textarea 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]" 
                placeholder="Descreva seu evento"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Capacity & Schedule */}
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Capacidade e Horários</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Capacidade de Visitantes</label>
                <div className="relative">
                  <Users size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                  <input 
                    type="number" 
                    className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="Ex: 1000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Número de Expositores</label>
                <div className="relative">
                  <Users size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                  <input 
                    type="number" 
                    className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="Ex: 50"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Horário de Abertura</label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                  <input 
                    type="time" 
                    className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Horário de Fechamento</label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-2.5 text-muted-foreground" />
                  <input 
                    type="time" 
                    className="w-full pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Tools */}
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Ferramentas de IA</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-md mr-3">
                  <div className="w-5 h-5 text-primary font-bold">AI</div>
                </div>
                <div>
                  <h4 className="font-medium">LegalGPT™</h4>
                  <p className="text-xs text-muted-foreground">Gere documentos e landing pages automaticamente</p>
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="bg-secondary/10 p-2 rounded-md mr-3">
                  <div className="w-5 h-5 text-secondary font-bold">AI</div>
                </div>
                <div>
                  <h4 className="font-medium">LinkAI™</h4>
                  <p className="text-xs text-muted-foreground">Matchmaking semântico entre visitantes e expositores</p>
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-tertiary/10 p-2 rounded-md mr-3">
                  <div className="w-5 h-5 text-tertiary font-bold">AI</div>
                </div>
                <div>
                  <h4 className="font-medium">FacePass™</h4>
                  <p className="text-xs text-muted-foreground">Credenciamento facial e check-in automatizado</p>
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit Buttons */}
        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 border rounded-md hover:bg-muted transition-colors">
            Cancelar
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
            Criar Evento
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

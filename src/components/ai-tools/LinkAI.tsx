
import React, { useState } from 'react';
import { Calendar, ChevronDown, User, MapPin } from 'lucide-react';

const LinkAI = () => {
  const [selectedTab, setSelectedTab] = useState('matches');
  
  const matchData = [
    {
      id: 1,
      exhibitor: 'TechCorp Solutions',
      visitor: 'Ana Silva',
      company: 'Global Retail Inc.',
      position: 'Diretora de Tecnologia',
      matchScore: 92,
      interests: ['IA', 'Automação', 'ERP'],
    },
    {
      id: 2,
      exhibitor: 'CloudSys Pro',
      visitor: 'Carlos Mendes',
      company: 'Banking Solutions SA',
      position: 'CTO',
      matchScore: 87,
      interests: ['Cloud Computing', 'Segurança', 'APIs'],
    },
    {
      id: 3,
      exhibitor: 'DataViz Analytics',
      visitor: 'Patrícia Alencar',
      company: 'Insurance Group',
      position: 'Analista de Dados',
      matchScore: 85,
      interests: ['Big Data', 'Visualização', 'BI'],
    },
    {
      id: 4,
      exhibitor: 'SecureNet Defenses',
      visitor: 'Rafael Torres',
      company: 'Government Security',
      position: 'Gerente de Segurança',
      matchScore: 81,
      interests: ['Cibersegurança', 'Firewall', 'Compliance'],
    },
    {
      id: 5,
      exhibitor: 'EduTech Platforms',
      visitor: 'Mariana Costa',
      company: 'University Innovation',
      position: 'Coordenadora de Educação Digital',
      matchScore: 78,
      interests: ['EdTech', 'LMS', 'Gamificação'],
    },
  ];

  const scheduledMeetings = [
    {
      id: 1,
      exhibitor: 'TechCorp Solutions',
      visitor: 'Ana Silva',
      date: '12/10/2024',
      time: '14:30',
      location: 'Stand A42',
      status: 'confirmed',
    },
    {
      id: 2,
      exhibitor: 'CloudSys Pro',
      visitor: 'Carlos Mendes',
      date: '12/10/2024',
      time: '16:00',
      location: 'Stand B18',
      status: 'pending',
    },
  ];

  return (
    <div className="rounded-lg border">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setSelectedTab('matches')}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            selectedTab === 'matches' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Matches Sugeridos
        </button>
        <button
          onClick={() => setSelectedTab('meetings')}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            selectedTab === 'meetings' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Reuniões Agendadas
        </button>
        <button
          onClick={() => setSelectedTab('settings')}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            selectedTab === 'settings' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Configurações
        </button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Matches Tab */}
        {selectedTab === 'matches' && (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Matches de Alta Relevância</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Filtrar por:</span>
                <button className="text-sm px-3 py-1 border rounded-md flex items-center gap-1">
                  Match Score <ChevronDown size={16} />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {matchData.map((match) => (
                <div key={match.id} className="border rounded-md p-4 flex items-center justify-between hover:bg-muted/30 transition">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {match.matchScore}%
                      </div>
                      <span className="text-xs mt-1">Match</span>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{match.exhibitor}</h4>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">Expositor</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <User size={14} className="text-muted-foreground" />
                        <span className="text-sm">{match.visitor}</span>
                        <span className="text-xs text-muted-foreground">({match.position} em {match.company})</span>
                      </div>
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {match.interests.map((interest) => (
                          <span key={interest} className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-primary text-primary-foreground text-sm px-3 py-1.5 rounded-md hover:bg-primary-dark transition-colors">
                    Agendar Reunião
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Meetings Tab */}
        {selectedTab === 'meetings' && (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Reuniões Agendadas</h3>
              <button className="text-sm px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors">
                + Nova Reunião
              </button>
            </div>
            
            <div className="space-y-4">
              {scheduledMeetings.map((meeting) => (
                <div key={meeting.id} className="border rounded-md p-4 hover:bg-muted/30 transition">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{meeting.exhibitor} + {meeting.visitor}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      meeting.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {meeting.status === 'confirmed' ? 'Confirmada' : 'Pendente'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-sm">{meeting.date} às {meeting.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-muted-foreground" />
                      <span className="text-sm">{meeting.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-3 gap-2">
                    <button className="text-sm px-3 py-1 border rounded-md hover:bg-muted transition-colors">
                      Reagendar
                    </button>
                    <button className="text-sm px-3 py-1 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">
                      Cancelar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {selectedTab === 'settings' && (
          <div>
            <h3 className="font-semibold mb-4">Configurações do LinkAI™</h3>
            
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-3">Preferências de Matchmaking</h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Priorizar cargo dos visitantes</span>
                      <input type="range" min="1" max="5" defaultValue="4" className="w-1/2" />
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Priorizar tamanho da empresa</span>
                      <input type="range" min="1" max="5" defaultValue="3" className="w-1/2" />
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center justify-between">
                      <span className="text-sm">Priorizar interesses em comum</span>
                      <input type="range" min="1" max="5" defaultValue="5" className="w-1/2" />
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-3">Integrações de Calendário</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        G
                      </div>
                      <span>Google Calendar</span>
                    </div>
                    <button className="text-sm px-3 py-1 border text-primary border-primary rounded-md hover:bg-primary/5 transition-colors">
                      Conectar
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        O
                      </div>
                      <span>Outlook Calendar</span>
                    </div>
                    <button className="text-sm px-3 py-1 border rounded-md hover:bg-muted transition-colors">
                      Desconectar
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Salvar Configurações
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkAI;

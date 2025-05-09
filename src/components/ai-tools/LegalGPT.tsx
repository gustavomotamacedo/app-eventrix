
import React, { useState } from 'react';
import { Send, RefreshCw } from 'lucide-react';

const LegalGPT = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Olá! Eu sou o LegalGPT™, seu assistente para o manual do expositor e documentos legais. Como posso ajudar?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'Entendi sua solicitação sobre o manual do expositor. Posso ajudar com as regulamentações para montagem de stand, documentos necessários, e prazos importantes. Precisa de ajuda com algum tópico específico?' 
        }
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-[600px] flex flex-col rounded-lg border">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">LegalGPT™</h3>
        <p className="text-sm text-muted-foreground">Assistente para manual do expositor e documentos legais</p>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${
              msg.role === 'user' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-muted flex items-center space-x-2">
              <RefreshCw size={16} className="animate-spin" />
              <span>Gerando resposta...</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Chat Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre o manual do expositor, regras ou documentos..."
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalGPT;

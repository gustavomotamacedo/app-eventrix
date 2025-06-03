
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand */}
      <div className="bg-primary w-full md:w-1/2 text-primary-foreground p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">Eventrix™</h1>
          <p className="text-primary-foreground/80 mt-2">Plataforma completa para gestão de eventos</p>
        </div>
        
        <div className="hidden md:block">
          <h2 className="text-2xl font-bold mb-3">Tudo em uma só plataforma</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-1 rounded mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-primary-foreground/90">Gerencie todo o ciclo de vida dos seus eventos</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-1 rounded mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-primary-foreground/90">Ferramentas avançadas de IA integradas</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-1 rounded mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-primary-foreground/90">Dados e insights em tempo real</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block text-sm text-primary-foreground/70">
          &copy; {new Date().getFullYear()} Eventrix™. Todos os direitos reservados.
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Bem-vindo de volta</h2>
            <p className="text-muted-foreground mt-2">Entre na sua conta para acessar a plataforma</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                <a href="#" className="text-sm text-primary hover:underline">Esqueceu?</a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="********"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? 'Entrando...' : (
                <>
                  Entrar
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Ainda não tem uma conta? <a href="#" className="text-primary hover:underline">Criar conta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

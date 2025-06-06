
import React from 'react';
import { Zap, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PlansHeroProps {
  billingCycle: 'annual' | 'monthly';
  setBillingCycle: (cycle: 'annual' | 'monthly') => void;
}

const PlansHero: React.FC<PlansHeroProps> = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-3xl font-black tracking-tight text-foreground">EVENTRIX™</h1>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-secondary" />
                <span className="text-sm font-medium text-muted-foreground">Powered by LEGAL AI</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Tudo que você precisa para
                <span className="block text-primary">eventos de sucesso</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plataforma completa com dados inteligentes e ferramentas alimentadas por IA 
                para transformar seus eventos em experiências inesquecíveis.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span className="font-medium text-foreground">Setup em minutos</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-primary shrink-0" />
                <span className="font-medium text-foreground">ROI comprovado</span>
              </div>
              <div className="flex items-center gap-3">
                <Star size={20} className="text-primary shrink-0" />
                <span className="font-medium text-foreground">Suporte 24/7</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Mais de 10.000 organizadores confiam no EVENTRIX™
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                  Começar Teste Grátis
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Agendar Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                7 dias grátis • Sem cartão de crédito • Cancele quando quiser
              </p>
            </div>
          </div>

          {/* Right Column - Empty for now, content will flow below */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Billing Toggle Section - Centered */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-foreground">Escolha seu plano ideal</h3>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-6 bg-muted rounded-2xl p-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Cobrança Mensal
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  billingCycle === 'annual' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Cobrança Anual
                <Badge className="bg-secondary text-white border-0">
                  Economize 25%
                </Badge>
              </button>
            </div>
            
            {billingCycle === 'annual' && (
              <div className="flex items-center gap-2 animate-pulse">
                <span className="text-2xl">💰</span>
                <p className="text-secondary font-bold text-lg">
                  Economize até 25% com o plano anual!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansHero;

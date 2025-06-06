
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
    <div className="legal-gradient-bg text-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">EVENTRIX™</h1>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Zap size={20} className="text-secondary" />
            <span className="text-lg font-semibold">Powered by LEGAL AI</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Tudo que você precisa para
            <span className="block text-secondary">eventos de sucesso</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Plataforma completa com dados inteligentes e ferramentas alimentadas por IA 
            para transformar seus eventos em experiências inesquecíveis.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <CheckCircle size={20} className="text-secondary shrink-0" />
              <span className="font-medium">Setup em minutos</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <TrendingUp size={20} className="text-secondary shrink-0" />
              <span className="font-medium">ROI comprovado</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Star size={20} className="text-secondary shrink-0" />
              <span className="font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>

        {/* Billing Toggle Section */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">Escolha seu plano ideal</h3>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-6 bg-white/15 backdrop-blur-sm rounded-2xl p-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly' 
                    ? 'bg-white text-primary shadow-lg transform scale-105' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Cobrança Mensal
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  billingCycle === 'annual' 
                    ? 'bg-white text-primary shadow-lg transform scale-105' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
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

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-white/80 mb-6">
            Mais de 10.000 organizadores confiam no EVENTRIX™
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold">
              Começar Teste Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
              Agendar Demo
            </Button>
          </div>
          <p className="text-sm text-white/60 mt-4">
            7 dias grátis • Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlansHero;

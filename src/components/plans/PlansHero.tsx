
import React from 'react';
import { Zap, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PlansHeroProps {
  billingCycle: 'annual' | 'monthly';
  setBillingCycle: (cycle: 'annual' | 'monthly') => void;
}

const PlansHero: React.FC<PlansHeroProps> = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="legal-gradient-bg text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h1 className="text-6xl font-black tracking-tight">EVENTRIX™</h1>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Zap size={20} className="text-secondary" />
          <span className="text-xl font-semibold">Powered by LEGAL AI</span>
        </div>
        <h2 className="text-5xl font-bold mb-6 tracking-tight">Escolha seu Plano</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Plataforma completa para gestão de eventos com IA integrada. 
          Transforme seus eventos com tecnologia de ponta.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-2 max-w-md mx-auto">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              billingCycle === 'monthly' 
                ? 'bg-white text-primary shadow-lg' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              billingCycle === 'annual' 
                ? 'bg-white text-primary shadow-lg' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Anual
            {billingCycle === 'annual' && (
              <Badge className="bg-secondary text-white ml-2">
                -25%
              </Badge>
            )}
          </button>
        </div>
        
        {billingCycle === 'annual' && (
          <p className="text-secondary font-medium mt-4 animate-pulse">
            💰 Economize até 25% com o plano anual!
          </p>
        )}
      </div>
    </div>
  );
};

export default PlansHero;

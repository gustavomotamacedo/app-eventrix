
import React from 'react';
import { Zap, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PlansHeroProps {
  billingCycle: 'annual' | 'monthly';
  setBillingCycle: (cycle: 'annual' | 'monthly') => void;
}

const PlansHero: React.FC<PlansHeroProps> = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="legal-gradient-bg text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">EVENTRIX™</h1>
        </div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Zap size={18} className="text-secondary" />
          <span className="text-lg font-semibold">Powered by LEGAL AI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Escolha seu Plano</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
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
          <p className="text-secondary font-medium mt-3 animate-pulse">
            💰 Economize até 25% com o plano anual!
          </p>
        )}
      </div>
    </div>
  );
};

export default PlansHero;

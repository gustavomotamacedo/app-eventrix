
import React from 'react';
import { Zap, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PlansHeroProps {
  billingCycle: 'annual' | 'monthly';
  setBillingCycle: (cycle: 'annual' | 'monthly') => void;
}

const PlansHero: React.FC<PlansHeroProps> = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="legal-gradient-bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h1 className="text-5xl font-black">EVENTRIX™</h1>
        </div>
        <div className="flex items-center justify-center gap-1 mb-6">
          <Zap size={16} className="text-secondary" />
          <span className="text-lg font-semibold">Powered by LEGAL AI</span>
        </div>
        <h2 className="text-4xl font-bold mb-4">Escolha seu Plano</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Plataforma completa para gestão de eventos com IA integrada
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
            Mensal
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
            className="relative w-16 h-8 bg-white/20 rounded-full transition-all duration-300"
          >
            <div className={`absolute top-1 w-6 h-6 bg-secondary rounded-full transition-all duration-300 ${
              billingCycle === 'annual' ? 'right-1' : 'left-1'
            }`} />
          </button>
          <span className={`font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
            Anual
          </span>
          {billingCycle === 'annual' && (
            <Badge className="bg-secondary text-white">
              Economize até 25%
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlansHero;

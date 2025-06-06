
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
  );
};

export default PlansHero;

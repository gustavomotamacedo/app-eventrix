
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Plan {
  name: string;
  description: string;
  price: { annual: number; monthly: number };
  popular: boolean;
  features: {
    events: string;
    visitors: string;
    exhibitors: string;
    admins: string;
    support: string;
  };
  highlights: string[];
}

interface PlanCardProps {
  plan: Plan;
  billingCycle: 'annual' | 'monthly';
  formatPrice: (price: number) => string;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, billingCycle, formatPrice }) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
      plan.popular ? 'border-primary shadow-lg scale-105' : 'tech-card'
    }`}>
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-bold">
          <Star size={16} className="inline mr-1" />
          MAIS POPULAR
        </div>
      )}
      
      <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="text-muted-foreground">{plan.description}</p>
        
        <div className="py-4">
          {plan.name === 'Enterprise' ? (
            <div className="text-3xl font-bold">Sob consulta</div>
          ) : (
            <>
              <div className="text-4xl font-bold">
                {formatPrice(billingCycle === 'annual' ? plan.price.annual : plan.price.monthly)}
              </div>
              <div className="text-sm text-muted-foreground">
                /{billingCycle === 'annual' ? 'ano' : 'mês'}
              </div>
            </>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-sm">Eventos/ano:</span>
            <span className="font-medium">{plan.features.events}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Visitantes:</span>
            <span className="font-medium">{plan.features.visitors}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Expositores:</span>
            <span className="font-medium">{plan.features.exhibitors}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Admins:</span>
            <span className="font-medium">{plan.features.admins}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Suporte:</span>
            <span className="font-medium text-xs">{plan.features.support}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {plan.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check size={16} className="text-primary shrink-0" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>

        <Button 
          className={`w-full ${plan.popular ? 'tech-button' : ''}`}
          variant={plan.popular ? 'default' : 'outline'}
        >
          {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;

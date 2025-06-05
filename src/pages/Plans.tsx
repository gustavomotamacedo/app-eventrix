
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import PlansHero from '@/components/plans/PlansHero';
import PlanCard from '@/components/plans/PlanCard';
import AddOnCard from '@/components/plans/AddOnCard';
import PlansCTA from '@/components/plans/PlansCTA';
import { mainPlans, addOnModules } from '@/data/plansData';

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <PlansHero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainPlans.map((plan) => (
            <PlanCard 
              key={plan.name} 
              plan={plan} 
              billingCycle={billingCycle} 
              formatPrice={formatPrice} 
            />
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Módulos e Serviços Plugáveis</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expanda ainda mais as capacidades da plataforma com módulos especializados de IA e automação
            </p>
            <div className="tech-badge tech-glow mt-4">
              <Sparkles size={12} />
              <span>Contratação à parte - Compatível com todos os planos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnModules.map((module, index) => (
              <AddOnCard 
                key={index} 
                module={{
                  ...module,
                  icon: <module.icon className="text-primary" size={20} />
                }} 
              />
            ))}
          </div>
        </div>

        <PlansCTA />
      </div>
    </div>
  );
};

export default Plans;

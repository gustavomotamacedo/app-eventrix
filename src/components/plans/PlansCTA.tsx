
import React from 'react';
import { Button } from '@/components/ui/button';

const PlansCTA: React.FC = () => {
  return (
    <div className="tech-card p-8 text-center mb-16">
      <h3 className="text-2xl font-bold mb-4">Pronto para revolucionar seus eventos?</h3>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Comece seu teste gratuito de 7 dias e descubra como a IA pode transformar a gestão dos seus eventos
      </p>
      <div className="flex gap-4 justify-center">
        <Button className="tech-button" size="lg">
          Começar Teste Grátis
        </Button>
        <Button variant="outline" size="lg">
          Agendar Demo
        </Button>
      </div>
    </div>
  );
};

export default PlansCTA;

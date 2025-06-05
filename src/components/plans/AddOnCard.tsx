
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AddOnModule {
  name: string;
  description: string;
  icon: React.ReactNode;
  price: string;
}

interface AddOnCardProps {
  module: AddOnModule;
}

const AddOnCard: React.FC<AddOnCardProps> = ({ module }) => {
  return (
    <Card className="tech-card hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          {module.icon}
          <div>
            <h4 className="font-bold text-lg">{module.name}</h4>
            <p className="text-sm text-muted-foreground">{module.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-medium text-primary">{module.price}</span>
          <Button variant="outline" size="sm">
            Saiba Mais
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddOnCard;

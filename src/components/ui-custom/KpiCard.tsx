
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, trend, className }) => {
  return (
    <div className={cn('hubx-card p-5', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-3">
              {trend.isPositive ? (
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={cn(
                'text-xs font-medium',
                trend.isPositive ? 'text-green-500' : 'text-red-500'
              )}>
                {Math.abs(trend.value)}% desde o mês passado
              </span>
            </div>
          )}
        </div>
        
        <div className="bg-primary/10 p-2 rounded-md">
          {React.cloneElement(icon as React.ReactElement, { 
            className: "h-6 w-6 text-primary" 
          })}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;

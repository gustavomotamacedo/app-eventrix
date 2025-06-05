
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
    <div className={cn('relative overflow-hidden', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-muted-foreground mb-2">{title}</p>
          <h3 className="text-3xl font-black text-tertiary mb-4 tracking-tight">{value}</h3>
          
          {trend && (
            <div className="flex items-center gap-2">
              <div className={cn(
                'flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold',
                trend.isPositive 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              )}>
                {trend.isPositive ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                <span>{Math.abs(trend.value)}%</span>
              </div>
              <span className="text-xs text-muted-foreground">vs mês anterior</span>
            </div>
          )}
        </div>
        
        <div className="legal-gradient-bg p-4 rounded-2xl legal-animate-float">
          {React.cloneElement(icon as React.ReactElement, { 
            className: "h-7 w-7 text-white",
            size: 28
          })}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;

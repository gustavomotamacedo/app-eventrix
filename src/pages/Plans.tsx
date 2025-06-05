
import React, { useState } from 'react';
import { Check, Star, Zap, Users, Calendar, Building, MessageCircle, Clock, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const mainPlans = [
    {
      name: 'Start',
      description: 'Para organizadores iniciantes',
      price: { annual: 7900, monthly: 990 },
      popular: false,
      features: {
        events: 'até 5',
        visitors: 'até 5.000',
        exhibitors: 'até 200',
        admins: '1',
        support: 'E-mail básico'
      },
      highlights: [
        'Dashboard completo',
        'Gestão de visitantes',
        'Check-in básico',
        'Relatórios essenciais'
      ]
    },
    {
      name: 'Scale',
      description: 'Para empresas em crescimento',
      price: { annual: 18900, monthly: 2290 },
      popular: true,
      features: {
        events: '5 a 10',
        visitors: '5.001 a 25.000',
        exhibitors: 'até 500',
        admins: 'até 3',
        support: 'E-mail + chat prior.'
      },
      highlights: [
        'Tudo do Start +',
        'Analytics avançados',
        'Integrações básicas',
        'Suporte prioritário'
      ]
    },
    {
      name: 'Boom',
      description: 'Para grandes eventos',
      price: { annual: 37900, monthly: 4490 },
      popular: false,
      features: {
        events: '10 a 15',
        visitors: '25.001 a 50.000',
        exhibitors: 'até 2.000',
        admins: 'até 10',
        support: '24/7 com SLA'
      },
      highlights: [
        'Tudo do Scale +',
        'IA avançada',
        'White label básico',
        'APIs completas'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Solução personalizada',
      price: { annual: 0, monthly: 0 },
      popular: false,
      features: {
        events: 'Ilimitado',
        visitors: 'Ilimitado',
        exhibitors: 'Custom',
        admins: 'Ilimitado',
        support: 'Dedicado + SLA VIP'
      },
      highlights: [
        'Tudo customizado',
        'Gerente dedicado',
        'Onboarding completo',
        'SLA premium'
      ]
    }
  ];

  const addOnModules = [
    {
      name: 'LegalGPT™',
      description: 'Chat Expositor, Geração de conteúdo, FAQ automatizado',
      icon: <MessageCircle className="text-primary" size={20} />,
      price: 'Sob consulta'
    },
    {
      name: 'LinkAI™',
      description: 'Matchmaking, networking inteligente, agendamento automático',
      icon: <Users className="text-secondary" size={20} />,
      price: 'Sob consulta'
    },
    {
      name: 'FacePass™',
      description: 'Credenciamento facial, QR e check-in',
      icon: <Shield className="text-tertiary" size={20} />,
      price: 'Sob consulta'
    },
    {
      name: 'Digital Twin 3D & Heatmap',
      description: 'Simulação layout e fluxo',
      icon: <Building className="text-primary" size={20} />,
      price: 'Sob consulta'
    },
    {
      name: 'Smart Contracts / Blockchain',
      description: 'Para contratos de locação e patrocínio',
      icon: <Sparkles className="text-secondary" size={20} />,
      price: 'Sob consulta'
    },
    {
      name: 'APIs e integrações avançadas',
      description: 'CRM, ERP, WhatsApp, Zapier etc.',
      icon: <Zap className="text-tertiary" size={20} />,
      price: 'Sob consulta'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainPlans.map((plan) => (
            <Card key={plan.name} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
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
              <Card key={index} className="tech-card hover:shadow-lg transition-all duration-300">
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
            ))}
          </div>
        </div>

        {/* CTA Section */}
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
      </div>
    </div>
  );
};

export default Plans;

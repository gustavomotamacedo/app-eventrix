
import { MessageCircle, Users, Shield, Building, Sparkles, Zap } from 'lucide-react';

export const mainPlans = [
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

export const addOnModules = [
  {
    name: 'LegalGPT™',
    description: 'Chat Expositor, Geração de conteúdo, FAQ automatizado',
    icon: MessageCircle,
    price: 'Sob consulta'
  },
  {
    name: 'LinkAI™',
    description: 'Matchmaking, networking inteligente, agendamento automático',
    icon: Users,
    price: 'Sob consulta'
  },
  {
    name: 'FacePass™',
    description: 'Credenciamento facial, QR e check-in',
    icon: Shield,
    price: 'Sob consulta'
  },
  {
    name: 'Digital Twin 3D & Heatmap',
    description: 'Simulação layout e fluxo',
    icon: Building,
    price: 'Sob consulta'
  },
  {
    name: 'Smart Contracts / Blockchain',
    description: 'Para contratos de locação e patrocínio',
    icon: Sparkles,
    price: 'Sob consulta'
  },
  {
    name: 'APIs e integrações avançadas',
    description: 'CRM, ERP, WhatsApp, Zapier etc.',
    icon: Zap,
    price: 'Sob consulta'
  }
];

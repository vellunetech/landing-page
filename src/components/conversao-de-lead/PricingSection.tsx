
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 97,
      annualPrice: 79,
      description: "Ideal para pequenas empresas",
      features: [
        "500 leads por mês",
        "2 formulários ativos",
        "Segmentação básica",
        "Relatórios essenciais",
        "Suporte por email"
      ],
      highlighted: false,
      cta: "Começar Agora"
    },
    {
      name: "Pro",
      monthlyPrice: 197,
      annualPrice: 159,
      description: "Para empresas em crescimento",
      features: [
        "2.000 leads por mês",
        "Formulários ilimitados",
        "Segmentação avançada",
        "Relatórios completos",
        "Integrações com CRM",
        "Suporte prioritário"
      ],
      highlighted: true,
      cta: "Escolher Pro"
    },
    {
      name: "Enterprise",
      monthlyPrice: 497,
      annualPrice: 399,
      description: "Para grandes empresas",
      features: [
        "Leads ilimitados",
        "Formulários ilimitados",
        "Segmentação personalizada",
        "API completa",
        "Integrações avançadas",
        "Gerente de conta dedicado",
        "Suporte 24/7"
      ],
      highlighted: false,
      cta: "Falar com Vendas"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para <span className="text-brand-600">cada necessidade</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Escolha o plano ideal para o seu negócio e comece a converter mais leads hoje mesmo
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${isAnnual ? 'text-gray-500' : 'text-gray-900'}`}>Mensal</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Anual <span className="text-sm text-brand-600 font-bold">(-20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`border ${plan.highlighted ? 'border-brand-600 shadow-lg ring-1 ring-brand-600' : 'border-gray-200'} rounded-lg overflow-hidden`}
            >
              <CardHeader className={`${plan.highlighted ? 'bg-brand-600 text-white' : 'bg-white'} text-center py-6`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-sm mt-1">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">
                      R${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">/mês</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {isAnnual ? 'Cobrança anual' : 'Cobrança mensal'}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant={plan.highlighted ? "default" : "outline"} 
                  className={`w-full py-6 ${plan.highlighted ? 'bg-brand-600 hover:bg-brand-700' : ''}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p>Precisa de um plano personalizado? <a href="#contact" className="text-brand-600 font-medium">Entre em contato</a> com nossa equipe.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

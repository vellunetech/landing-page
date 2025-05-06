
import React from 'react';
import { MessageCircle, User, Check, Bot, BotMessageSquare } from "lucide-react";

const features = [
  {
    icon: <BotMessageSquare className="w-8 h-8 text-green-500" />,
    title: "Chatbot Inteligente",
    description: "Atendimento automatizado 24/7 via WhatsApp que entende as dúvidas dos clientes e responde de forma natural."
  },
  {
    icon: <User className="w-8 h-8 text-green-500" />,
    title: "Qualificação Automática",
    description: "Perguntas estratégicas que qualificam leads e direcionam apenas os mais promissores para sua equipe."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-500" />,
    title: "Integração WhatsApp",
    description: "Utilize o canal de comunicação preferido dos brasileiros para aumentar suas taxas de conversão."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa para <span className="text-green-600">converter no WhatsApp</span>
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma foi desenvolvida para maximizar suas conversões através de chatbots inteligentes para WhatsApp.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5 inline-block p-3 bg-green-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Aumente sua taxa de conversão em até <span className="text-green-600">300%</span> com WhatsApp
            </h3>
            <p className="text-lg text-gray-600">
              Nosso chatbot para WhatsApp utiliza inteligência artificial para engajar visitantes e transformá-los em clientes qualificados através do canal que eles já usam diariamente.
            </p>
            
            <ul className="space-y-3">
              {[
                "Respostas automáticas 24/7 que parecem humanas",
                "Qualificação de leads com perguntas estratégicas",
                "Transferência suave para atendentes humanos quando necessário",
                "Integração com seu CRM e ferramentas de marketing"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-green-500">
                    <Check className="w-5 h-5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1607970669494-180ee3fb589b?q=80&w=2426&auto=format&fit=crop"
              alt="Interface do chatbot WhatsApp"
              className="rounded-lg shadow-md"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-500/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

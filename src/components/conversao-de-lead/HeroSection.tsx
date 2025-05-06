
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, insira um número de telefone válido.",
        variant: "destructive"
      });
      return;
    }
    
    // Format the phone number for WhatsApp link
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    // Here would go the lead capture logic
    // Redirect to WhatsApp
    window.open(`https://wa.me/55${formattedNumber}?text=Olá! Estou interessado em saber mais sobre a solução de chatbot da Vellune.`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Vamos continuar a conversa por lá.",
    });
    
    setPhoneNumber('');
  };

  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-green-600">Converta visitantes</span> em leads via WhatsApp
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600">
              A Vellune transforma seu tráfego web em oportunidades reais de negócio com chatbots inteligentes para WhatsApp. 
              Capture, qualifique e converta mais leads com atendimento automatizado 24/7.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="tel"
                placeholder="Seu número de WhatsApp"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar Agora
              </Button>
            </form>
            
            <div className="text-sm text-gray-500">
              <p>Mais de 2.000 empresas já utilizam chatbots Vellune no WhatsApp ✓</p>
            </div>
          </div>
          
          <div className="relative animate-bounce-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000&auto=format&fit=crop"
                alt="ChatBot WhatsApp Vellune em ação"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-500/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

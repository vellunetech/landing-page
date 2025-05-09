
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Format the phone number for WhatsApp link
    const formattedNumber = formData.phone.replace(/\D/g, '');
    // Redirect to WhatsApp with form data
    const message = `Olá! Meu nome é ${formData.name}${formData.company ? ` da empresa ${formData.company}` : ''}. ${formData.message || 'Gostaria de saber mais sobre o chatbot para WhatsApp da Vellune.'}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Vamos continuar nossa conversa por lá.",
    });
    
    setFormData({
      name: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforme visitantes em <span className="text-green-600">clientes</span> via WhatsApp
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e um especialista Vellune entrará em contato via WhatsApp para mostrar como nosso chatbot pode aumentar suas conversões.
            </p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-green-600 text-white p-8 flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Benefícios do Chatbot WhatsApp</h3>
                    <ul className="space-y-4">
                      {[
                        "Atendimento automatizado 24 horas por dia",
                        "Respostas imediatas que aumentam satisfação",
                        "Qualificação automática de leads",
                        "Integração com seu CRM e equipe de vendas"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 font-bold text-xl">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Solicite uma demonstração gratuita</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        rows={3}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Iniciar Chat no WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

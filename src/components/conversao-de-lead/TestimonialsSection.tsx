
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Desde que implementamos o Vellune, nossas taxas de conversão aumentaram em 250%. A plataforma é intuitiva e os resultados são impressionantes.",
    author: "Carolina Silva",
    role: "Marketing Director, TechBR",
    avatar: "CS"
  },
  {
    quote: "O sistema de captura inteligente da Vellune praticamente triplicou nossa base de leads qualificados. Não consigo imaginar nosso funil de vendas sem esta ferramenta.",
    author: "Rodrigo Mendes",
    role: "CEO, Inova Solutions",
    avatar: "RM"
  },
  {
    quote: "A segmentação automática de leads do Vellune economizou horas do nosso time de marketing e aumentou significativamente a eficácia das nossas campanhas.",
    author: "Fernanda Costa",
    role: "CMO, GrowthMax",
    avatar: "FC"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes <span className="text-brand-600">dizem</span>
          </h2>
          <p className="text-lg text-gray-600">
            Empresas de todos os tamanhos estão aumentando suas conversões com os chatbots Vellune
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-brand-100 text-brand-800">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

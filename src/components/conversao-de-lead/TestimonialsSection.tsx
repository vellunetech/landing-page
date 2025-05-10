
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const tiagoImage = '/images/tiago.jpg';
const herculesImage = '/images/hercules.jpeg';

const Testimonial = ({ index, name, role, image, quote }: { index: number, name: string, role: string, image: string, quote: string }) => (
  <Card key={index} className="bg-secondary border-0 shadow-md hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="mb-6 italic text-gray-600">{quote}</p>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={image} />
          <AvatarFallback className="bg-brand-100 text-brand-800">{image}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </CardContent>
  </Card>
)

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

        <div className="grid md:grid-cols-2 gap-8">
          <Testimonial
            index={0}
            name="Hércules Florence"
            role="CEO no Minha Palavra"
            image={herculesImage}
            quote="O Pedro (Engenheiro da Vellune) não só prestou um excelente serviço, entregando todo o combinado no prazo como em todas as reuniões demonstrou muita proatividade, trazendo ideias e novas soluções."
          />
          <Testimonial
            index={1}
            name="Tiago Alves"
            role="CEO da Super Sacolas"
            image={tiagoImage}
            quote="Olá, gostaria de agradecer ao Pedro e a Vellune pelo excelente trabalho prestado com o chatbot de atendimento. Facilitou muito minha vida economizado muito na minha empresa e no meu tempo do dia a dia. Vellune, vocês são show!!!"
          />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

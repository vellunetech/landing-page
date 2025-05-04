import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-hero-pattern bg-fixed">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in">
                <span className="text-gradient">Vellune.</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-8 fade-in delay-100">
                Entregando software de qualidade lunar em alta velocidade
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center fade-in delay-200">
                <Button size="lg" className="text-base" onClick={() => window.open('https://wa.me/5511948582930', '_blank')}>
                  Solicitar orçamento
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => window.location.href = '/about'}>
                  Sobre nós
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Transforme suas ideias em soluções robustas e eficientes com quem garante alta qualidade.
              Nossas soluções são construídas para atender às suas necessidades específicas, com tecnologia de ponta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agilidade sem comprometer excelência</h3>
              <p className="text-muted-foreground">Utilizando metodologias ágeis e processos eficientes, entregamos soluções rapidamente.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte contínuo</h3>
              <p className="text-muted-foreground">Estaremos ao seu lado em todas as etapas do projeto, do planejamento à implementação.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Para todas as escalas</h3>
              <p className="text-muted-foreground">Do zero ao bilhão de usuários. Desenvolvemos software para todos tamanhos de negócios.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia de ponta</h3>
              <p className="text-muted-foreground">Usamos as ferramentas mais modernas para garantir eficiência e inovação.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa metodologia</h2>
            <p className="text-muted-foreground mb-8">
              Abordagem orientada à resultados. Foco em soluções que atendam. Colaboração constante. Inovação e flexibilidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-t-4 border-primary method-card">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">Diagnóstico</h3>
                <span className="text-4xl font-display font-bold text-primary/20">01</span>
              </div>
              <p className="text-muted-foreground">Mapeamos suas necessidades para entregar a melhor solução.</p>
            </Card>
            
            <Card className="p-6 border-t-4 border-primary method-card">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">Desenvolvimento Ágil</h3>
                <span className="text-4xl font-display font-bold text-primary/20">02</span>
              </div>
              <p className="text-muted-foreground">Projetos entregues com agilidade e precisão.</p>
            </Card>
            
            <Card className="p-6 border-t-4 border-primary method-card">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">Suporte Pós-Implementação</h3>
                <span className="text-4xl font-display font-bold text-primary/20">03</span>
              </div>
              <p className="text-muted-foreground">Garantimos que sua solução funcione perfeitamente desde o lançamento.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/90 via-accent to-primary/90 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua ideia em realidade?</h2>
            <p className="mb-8 text-white/80">
              Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a crescer com soluções tecnológicas de ponta.
            </p>
            <Button size="lg" variant="secondary" className="text-accent font-medium" onClick={() => window.open('https://wa.me/5511948582930', '_blank')}> 
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
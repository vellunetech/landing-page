import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-hero-pattern bg-fixed">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 fade-in">
                Sobre nós
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 fade-in delay-100"></div>
            </div>
          </div>
        </section>
      </div>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              A Vellune não é uma simples consultoria de tecnologia. Cada membro de nossa equipe traz consigo anos de experiência em diferentes áreas, como arquitetura de sistemas, gestão de projetos, programação em nuvem, entre tantas outras. E quando somamos a experiência técnica de nossos colaboradores com uma organização objetiva e coesa, o resultado não poderia ser diferente: uma equipe rápida e eficiente, capaz de entregar e manter projetos das mais variadas complexidades, sempre em alta qualidade.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15-3.086-3.086a2 2 0 0 0 0 2.828L19.17 16"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise Técnica</h3>
                <p className="text-muted-foreground">Profissionais com domínio nas tecnologias mais recentes.</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Foco em Qualidade</h3>
                <p className="text-muted-foreground">Entregas que superam expectativas, sempre.</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                <p className="text-muted-foreground">Priorizamos a comunicação direta e transparente.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conheça as mentes por de trás das nossas soluções</h2>
            <p className="text-muted-foreground mb-12">
              Conheça pessoas talentosas que estão comprometidas em ultrapassar limites e entregar resultados excepcionais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Daniel Jacob</h3>
                <p className="text-sm text-primary font-medium mb-2">SOFTWARE ENGINEER</p>
                <p className="text-muted-foreground text-sm">MATEMÁTICA APLICADA - FGV</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Pedro Cleto</h3>
                <p className="text-sm text-primary font-medium mb-2">SOFTWARE ENGINEER</p>
                <p className="text-muted-foreground text-sm">MATEMÁTICA - UFMG</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Gabriel Ferreira</h3>
                <p className="text-sm text-primary font-medium mb-2">SOFTWARE ENGINEER</p>
                <p className="text-muted-foreground text-sm">MATEMÁTICA - UFMG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Nossas soluções são desenhadas para entregar resultados</h2>
            <p className="mb-8 text-muted-foreground">
              Começe sua jornada agora e experiencie o futuro da tecnologia.
            </p>
            <Button size="lg" className="text-base">
              Eleve seu negócio hoje
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
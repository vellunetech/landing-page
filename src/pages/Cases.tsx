import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const superSacolas1 = '/images/super-sacolas-1.jpeg';
const superSacolas2 = '/images/super-sacolas-2.jpeg';

const Cases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-hero-pattern bg-fixed">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 fade-in">
                Explore o que fomos capazes de criar
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8 fade-in delay-100"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Cases */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos cases</h2>
            <p className="text-muted-foreground mb-8">
              Nossos clientes confiam em nós.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* First Case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl animate-float">
                    <img 
                      src="https://cdn.prod.website-files.com/673bd90593bb54c7c6ab18c9/67d31bdba762f3f3ad8556e3_Imagem%20do%20WhatsApp%20de%202025-03-13%20%C3%A0(s)%2014.46.39_d4f03553.jpg" 
                      alt="Minha Palavra App" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl animate-float">
                    <img 
                      src="https://cdn.prod.website-files.com/673bd90593bb54c7c6ab18c9/67d31e292f83be437aed22d1_Imagem%20do%20WhatsApp%20de%202025-03-13%20%C3%A0(s)%2015.04.08_9af44b00.jpg" 
                      alt="Project Dashboard" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Minha Palavra</h3>
                <p className="text-lg mb-6">
                  A maneira mais fácil e rápida de gerar contratos personalizados: envie sua solicitação pelo WhatsApp e receba um documento feito sob medida para você!
                </p>
                
                <div className="bg-secondary p-6 rounded-lg mb-6">
                  <p className="italic text-muted-foreground mb-4">
                    "O Pedro (Engenheiro da Vellune) não só prestou um excelente serviço, entregando todo o combinado no prazo como em todas as reuniões demonstrou muita proatividade, trazendo ideias e novas soluções."
                  </p>
                  <p className="font-medium">Hércules, CEO no Minha Palavra.</p>
                </div>
              </div>
            </div>
            
            {/* Second Case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Gabriel da Super Sacolas</h3>
                <p className="text-lg mb-6">
                  Atendente digital que apresenta produtos com imagens e vídeos, filtrando apenas leads qualificados para o atendimento humano. Proporciona mais agilidade e aumento nas conversões, otimizando investimentos em tráfego pago ao focar em clientes com real interesse de compra.
                </p>
                
                <div className="bg-secondary p-6 rounded-lg mb-6">
                  <p className="italic text-muted-foreground mb-4">
                    "Depoimento do cliente sobre o projeto. Destaque como a solução impactou positivamente o negócio e por que recomendariam seus serviços para outros."
                  </p>
                  <p className="font-medium">Nome do Cliente, Cargo na Empresa</p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl animate-float">
                    <img 
                      src={superSacolas1} 
                      alt="Screenshot 1" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl animate-float">
                    <img 
                      src={superSacolas2} 
                      alt="Screenshot 2" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/90 via-accent to-primary/90 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para ser nosso próximo case de sucesso?</h2>
            <p className="mb-8 text-white/80">
              Entre em contato hoje mesmo e comece a transformar seu negócio com nossas soluções tecnológicas.
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

export default Cases;
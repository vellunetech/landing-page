import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  
  return (
    <nav className="w-full z-10 py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display font-bold text-gradient">Vellune</a>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-foreground/90 hover:text-foreground transition-colors">Home</a>
          <a href="/about" className="text-foreground/90 hover:text-foreground transition-colors">Sobre</a>
          <a href="/cases" className="text-foreground/90 hover:text-foreground transition-colors">Cases</a>
          <Button variant="default" onClick={() => window.open('mailto:contato@vellune.tech')}>
            Fale Conosco
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
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
          <Button variant="default" onClick={() => window.open('https://wa.me/551148582930', '_blank')}>
            Fale Conosco
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 mt-8 items-center text-center">
                <a 
                  href="/" 
                  className="text-foreground/90 hover:text-foreground transition-colors py-2 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-foreground/90 hover:text-foreground transition-colors py-2 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </a>
                <a 
                  href="/cases" 
                  className="text-foreground/90 hover:text-foreground transition-colors py-2 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Cases
                </a>
                <Button 
                  variant="default" 
                  onClick={() => {
                    window.open('https://wa.me/551148582930', '_blank');
                    setIsOpen(false);
                  }}
                  className="mt-2 w-full max-w-[200px]"
                >
                  Fale Conosco
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
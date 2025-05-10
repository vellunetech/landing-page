import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

type NavBarStyle = { color: string }

const Navbar: React.FC<NavBarStyle> = (style) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/conversao-de-lead" className={`text-2xl font-bold text-${style.color}`}>
            Vellune
          </Link>
        </div>

        <div className="container mxauto px-10 py-2 flex items-center space-x-5">
          <a
            href="/about"
            className={`text-foreground/90 hover:text-foreground text-gray-700 hover:text-${style.color} transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </a>
          <a
            href="/cases"
            className={`text-foreground/90 hover:text-foreground text-gray-700 hover:text-${style.color} transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            Cases
          </a>

        </div>

        <div className="flex items-center space-x-4">
          <a href="#cta" className="hidden md:block">
            <Button variant="outline" size="sm">Contato</Button>
          </a>
          <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/551148582930', '_blank')}>
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header >
  );
};

export default Navbar;

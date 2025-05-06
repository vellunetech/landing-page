
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Vellune
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Recursos
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Depoimentos
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="#contact" className="hidden md:block">
            <Button variant="outline" size="sm">Contato</Button>
          </a>
          <a href="#cta">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

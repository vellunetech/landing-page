import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-hero-pattern bg-fixed">
        <Navbar />

        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center max-w-md px-4">
            <h1 className="text-8xl font-display font-bold mb-6 text-gradient">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Oops! Parece que você se perdeu no espaço.</p>
            <Button onClick={() => window.location.href = "/"}>
              Voltar para a Terra
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
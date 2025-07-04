import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neon-orange bg-clip-text text-transparent">
            Assessoria Esportiva Inteligente Para Atletas Iniciantes ao Avançado
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Seu treino cresce com você. Níveis ajustáveis e feedback inteligente powered by IA.
          </p>
          <Button 
            onClick={() => scrollToSection('planos')}
            className="bg-gradient-to-r from-neon-orange to-neon-orange-light hover:from-neon-orange-light hover:to-neon-orange px-8 py-4 text-lg font-semibold transition-all duration-300 animate-pulse-glow"
          >
            Começar Agora
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

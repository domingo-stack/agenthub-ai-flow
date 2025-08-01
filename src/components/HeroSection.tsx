import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Los superpoderes de la IA,
                </span>
                <br />
                <span className="text-foreground">
                  centralizados para tu equipo
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Configura en segundos, centraliza todos los modelos LLM y ahorra desde el primer día
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-elegant text-lg px-8 py-4"
                >
                  Empieza gratis ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-2"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver demo
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Setup en 3 minutos
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Freemium hasta 3 usuarios
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Olvidate de las licencias premium para cada LLM
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-card rounded-2xl shadow-card p-8 border">
                  <div className="aspect-video bg-gradient-hero rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Imagen/Video del producto</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-card rounded-lg shadow-card p-3 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">ChatGPT</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-card p-3 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Claude</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-card rounded-lg shadow-card p-3 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">Gemini</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
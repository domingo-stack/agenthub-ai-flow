import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const UseCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const useCases = [
    {
      role: "Ejecutivo de ventas públicas",
      pain: "Perder licitaciones por propuestas genéricas",
      motivation: "IA para analizar bases y crear propuestas ganadoras",
      benefit: "30% más licitaciones ganadas"
    },
    {
      role: "Marketing",
      pain: "Contenido lento y poco personalizado",
      motivation: "IA para crear campañas y copy efectivo",
      benefit: "5x más rápido en creación de contenido"
    },
    {
      role: "Jefe de Proyecto",
      pain: "Coordinación manual y reportes tardíos",
      motivation: "IA para automatizar seguimiento y reportes",
      benefit: "50% menos tiempo en admin"
    },
    {
      role: "Desarrollador",
      pain: "Debugging lento y documentación incompleta",
      motivation: "IA para code review y documentación",
      benefit: "40% más productividad en desarrollo"
    },
    {
      role: "DevOps",
      pain: "Monitoring reactivo y troubleshooting manual",
      motivation: "IA para análisis predictivo de infraestructura",
      benefit: "60% menos downtime"
    },
    {
      role: "Diseñador",
      pain: "Feedback tardío y iteraciones lentas",
      motivation: "IA para análisis de UX y sugerencias",
      benefit: "3x más iteraciones por semana"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % useCases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [useCases.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + useCases.length) % useCases.length);
  };

  const visibleCases = [
    useCases[currentIndex],
    useCases[(currentIndex + 1) % useCases.length]
  ];

  return (
    <section id="casos-uso" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Casos de uso por <span className="bg-gradient-primary bg-clip-text text-transparent">rol</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada miembro de tu equipo encontrará valor inmediato
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {visibleCases.map((useCase, index) => (
                <Card key={currentIndex + index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {useCase.role}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-1">Dolor actual:</h4>
                        <p className="text-muted-foreground text-sm">{useCase.pain}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-blue-600 mb-1">Motivación IA:</h4>
                        <p className="text-muted-foreground text-sm">{useCase.motivation}</p>
                      </div>
                      
                      <div className="bg-gradient-hero p-3 rounded-lg">
                        <h4 className="font-medium text-green-600 mb-1">Beneficio:</h4>
                        <p className="text-foreground text-sm font-semibold">{useCase.benefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(useCases.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 2)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentIndex / 2) === index
                        ? 'bg-primary'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
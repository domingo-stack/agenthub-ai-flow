import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Key, Users, ArrowRight, Play } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Regístrate con Google o correo",
      description: "Proceso súper rápido y sin complicaciones",
      color: "bg-blue-500"
    },
    {
      number: "2", 
      icon: Key,
      title: "Carga tu API Key",
      description: "Te mostramos paso a paso cómo obtenerla",
      color: "bg-purple-500"
    },
    {
      number: "3",
      icon: Users,
      title: "Invita a tu equipo y comienza",
      description: "En minutos todos estarán activos y productivos",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Empezar es tan simple como <span className="bg-gradient-primary bg-clip-text text-transparent">1, 2, 3</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No necesitas ser técnico. El proceso está diseñado para ser intuitivo y rápido.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${step.color} p-3 rounded-xl flex items-center justify-center text-white font-bold min-w-[48px] h-12`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Regístrate acá
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-hero rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Video: Configuración en 3 minutos</p>
                    <p className="text-sm text-muted-foreground mt-2">Mira lo fácil que es empezar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
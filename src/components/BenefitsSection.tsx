import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Palette, 
  Clock, 
  MessageSquare 
} from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Pago por uso real",
      description: "No pagas si no se usa. Solo por el consumo efectivo de tu equipo.",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Consumo variable",
      description: "Sin licencias fijas. Escala según las necesidades reales de tu empresa.",
      color: "text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Trazabilidad completa",
      description: "Control por colaborador y modelo. Visibilidad total del uso.",
      color: "text-purple-600"
    },
    {
      icon: Palette,
      title: "Whitelabel adaptable",
      description: "Personaliza con los colores y logo de tu empresa.",
      color: "text-pink-600"
    },
    {
      icon: Clock,
      title: "Setup súper simple",
      description: "Configuración completa en menos de 3 minutos.",
      color: "text-orange-600"
    },
    {
      icon: MessageSquare,
      title: "Interfaz intuitiva",
      description: "Estilo chat familiar. Tu equipo lo adoptará inmediatamente.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Por qué elegir <span className="bg-gradient-primary bg-clip-text text-transparent">AgentHub</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Una plataforma diseñada para equipos que buscan eficiencia y control total
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-hero ${benefit.color}`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Gratis",
      users: "0-3 usuarios",
      price: "$0",
      period: "/mes",
      description: "Perfecto para equipos pequeños",
      features: [
        "Hasta 3 usuarios activos",
        "1 API Key por modelo",
        "Dashboard básico",
        "Soporte por email"
      ],
      popular: false,
      cta: "Comenzar gratis"
    },
    {
      name: "Startup",
      users: "4-10 usuarios",
      price: "$49",
      period: "/mes",
      description: "Ideal para startups en crecimiento",
      features: [
        "Hasta 10 usuarios activos",
        "APIs ilimitadas",
        "Dashboard avanzado",
        "Trazabilidad completa",
        "Soporte prioritario"
      ],
      popular: true,
      cta: "Comenzar"
    },
    {
      name: "Business",
      users: "11-25 usuarios",
      price: "$119",
      period: "/mes",
      description: "Para equipos medianos",
      features: [
        "Hasta 25 usuarios activos",
        "APIs ilimitadas",
        "Whitelabel básico",
        "Analytics avanzados",
        "Soporte 24/7"
      ],
      popular: false,
      cta: "Comenzar"
    },
    {
      name: "Scale",
      users: "26-75 usuarios",
      price: "$349",
      period: "/mes",
      description: "Para empresas grandes",
      features: [
        "Hasta 75 usuarios activos",
        "APIs ilimitadas",
        "Whitelabel completo",
        "Reportes personalizados",
        "Account Manager"
      ],
      popular: false,
      cta: "Comenzar"
    },
    {
      name: "Enterprise",
      users: "+75 usuarios",
      price: "$499",
      period: "/mes",
      description: "Para corporaciones",
      features: [
        "Usuarios ilimitados",
        "APIs ilimitadas",
        "Personalización total",
        "SLA garantizado",
        "Soporte dedicado"
      ],
      popular: false,
      cta: "Comenzar"
    }
  ];

  return (
    <section id="planes" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Planes que <span className="bg-gradient-primary bg-clip-text text-transparent">escalan</span> contigo
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sin licencias premium. Solo pagas por lo que realmente usas.
          </p>
          
          <div className="bg-gradient-hero p-4 rounded-lg inline-block">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Nota:</strong> La nube privada es un servicio adicional disponible para todos los planes
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'border-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Más popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.users}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:scale-105' 
                      : 'variant-outline'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            ¿Necesitas algo más específico? 
            <button className="text-primary hover:underline ml-1">Contáctanos</button>
          </p>
        </div>
      </div>
    </section>
  );
};
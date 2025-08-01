import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Server, Lock, ArrowRight } from "lucide-react";

export const SecuritySection = () => {
  const features = [
    {
      icon: Server,
      title: "Infraestructura dedicada en GPU",
      description: "Hardware exclusivo para tu empresa"
    },
    {
      icon: Lock,
      title: "Modelo exclusivo para la empresa", 
      description: "Entrenamiento y datos completamente privados"
    },
    {
      icon: Shield,
      title: "Sin exposición a servicios externos",
      description: "Entorno hermético y completamente aislado"
    }
  ];

  return (
    <section id="seguridad" className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Servicio Premium
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Necesitas <span className="bg-gradient-primary bg-clip-text text-transparent">privacidad total</span> para tu información sensible?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Te damos acceso exclusivo a una nube privada con nuestro modelo entrenado, 
                en entorno hermético con <strong>ISO27001</strong>
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contáctanos para conocer esta solución
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="lg:pl-8">
              <Card className="shadow-elegant border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">Nube Privada Segura</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">ISO</div>
                        <div className="text-sm text-muted-foreground">27001</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">100%</div>
                        <div className="text-sm text-muted-foreground">Privado</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      Ideal para empresas financieras, gubernamentales y corporaciones 
                      con altos estándares de seguridad
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
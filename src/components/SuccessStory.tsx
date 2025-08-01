import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Quote } from "lucide-react";

export const SuccessStory = () => {
  return (
    <section id="caso-exito" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Caso de Éxito
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Empresas como Coderhub ya están ahorrando miles
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-card border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                        "Reducimos nuestros costos de IA de $1500 a $500–700 mensuales"
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Coderhub</p>
                          <p className="text-muted-foreground text-sm">Empresa de desarrollo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gradient-hero rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <TrendingDown className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-foreground">53%</p>
                      <p className="text-sm text-muted-foreground">Reducción de costos</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Antes:</span>
                        <span className="font-semibold text-red-600">$1,500</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-muted-foreground">Ahora:</span>
                        <span className="font-semibold text-green-600">$500-700</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿Realmente puedo ahorrar dinero comparado con las licencias premium?",
      answer: "Sí, absolutamente. Las licencias premium de ChatGPT Plus, Claude Pro, etc. cuestan $20-25 por usuario/mes sin importar el uso. Con AgentHub pagas solo por el consumo real de API, que típicamente resulta en ahorros del 40-70% para la mayoría de equipos."
    },
    {
      question: "¿Qué tan difícil es configurar las API Keys?",
      answer: "Es muy simple. Te guiamos paso a paso con tutoriales visuales para obtener las API Keys de cada modelo. El proceso completo toma menos de 3 minutos por modelo y solo lo haces una vez."
    },
    {
      question: "¿La nube privada realmente cumple con ISO27001?",
      answer: "Sí, nuestra infraestructura de nube privada está certificada ISO27001. Incluye hardware dedicado, modelos exclusivos y ambiente completamente aislado, ideal para empresas con altos estándares de seguridad como bancos o gobierno."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Preguntas <span className="bg-gradient-primary bg-clip-text text-transparent">frecuentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre AgentHub
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border shadow-card px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
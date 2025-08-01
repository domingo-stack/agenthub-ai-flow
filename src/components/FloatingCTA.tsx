import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FloatingCTA = () => {
  const handleClick = () => {
    // Placeholder URL for registration
    window.open("#registro", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <Button 
        onClick={handleClick}
        className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-elegant animate-glow px-6 py-3 font-semibold"
        size="lg"
      >
        Regístrate acá
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};
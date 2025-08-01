import { Bot, Network } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export const Logo = ({ className = "", variant = "full" }: LogoProps) => {
  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
          <Network className="w-5 h-5 text-white" />
          <Bot className="absolute w-3 h-3 text-white/80 -top-1 -right-1" />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl shadow-elegant">
        <Network className="w-6 h-6 text-white" />
        <Bot className="absolute w-4 h-4 text-white/80 -top-1 -right-1" />
      </div>
      <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        AgentHub
      </span>
    </div>
  );
};
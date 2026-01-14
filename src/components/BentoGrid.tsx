import { Shield, Lock, Eye, Cpu, Network, AlertTriangle, FileSearch, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  accentColor?: "cyan" | "lime" | "plum";
  size?: "sm" | "md" | "lg";
}

const BentoCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  accentColor = "cyan",
  size = "md" 
}: BentoCardProps) => {
  const accentStyles = {
    cyan: "group-hover:text-primary group-hover:shadow-primary/30",
    lime: "group-hover:text-success group-hover:shadow-success/30",
    plum: "group-hover:text-accent group-hover:shadow-accent/30",
  };

  return (
    <div 
      className={cn(
        "group relative glass-panel rounded-2xl p-6 bento-card cursor-pointer overflow-hidden",
        size === "lg" && "p-8",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10">
        <div className={cn(
          "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 transition-all duration-300",
          accentStyles[accentColor]
        )}>
          <Icon className="w-6 h-6 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h3 className={cn(
          "font-semibold text-foreground mb-2 transition-colors duration-300",
          size === "lg" ? "text-xl" : "text-lg"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "text-muted-foreground leading-relaxed",
          size === "lg" ? "text-base" : "text-sm"
        )}>
          {description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const capabilities = [
  {
    title: "Threat Detection & Response",
    description: "AI-powered threat intelligence with real-time monitoring and automated response capabilities. Identify and neutralize threats before they impact your operations.",
    icon: Shield,
    accentColor: "cyan" as const,
    size: "lg" as const,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Security Operations Center",
    description: "24/7 SOC-as-a-Service with dedicated analysts monitoring your infrastructure.",
    icon: Eye,
    accentColor: "lime" as const,
  },
  {
    title: "Incident Response",
    description: "Rapid containment and recovery with < 15 minute response time guarantee.",
    icon: AlertTriangle,
    accentColor: "cyan" as const,
  },
  {
    title: "Vulnerability Management",
    description: "Continuous scanning and prioritized remediation across your attack surface.",
    icon: FileSearch,
    accentColor: "plum" as const,
  },
  {
    title: "Network Security",
    description: "Zero-trust architecture implementation and network segmentation.",
    icon: Network,
    accentColor: "cyan" as const,
  },
  {
    title: "Cloud Security",
    description: "Multi-cloud protection for AWS, Azure, and GCP environments.",
    icon: Cpu,
    accentColor: "lime" as const,
  },
  {
    title: "Identity & Access",
    description: "Enterprise IAM with MFA, SSO, and privileged access management.",
    icon: Lock,
    accentColor: "plum" as const,
  },
  {
    title: "Security Awareness",
    description: "Training programs and phishing simulations for your team.",
    icon: Users,
    accentColor: "cyan" as const,
  },
];

export const BentoGrid = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-gradient-primary">Protection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade security capabilities designed for high-risk environments
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {capabilities.map((capability) => (
            <BentoCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              icon={capability.icon}
              accentColor={capability.accentColor}
              size={capability.size}
              className={capability.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

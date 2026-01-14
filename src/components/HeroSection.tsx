import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, Zap } from "lucide-react";

export const HeroSection = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              SOC Operations Active
            </span>
            <span className="text-xs text-muted-foreground/60">|</span>
            <span className="text-sm text-success font-mono">99.99% Uptime</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Enterprise</span>
            <br />
            <span className="text-gradient-primary">Cyber Defense</span>
            <br />
            <span className="text-foreground/80">Reimagined</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Digital trust engineering for high-risk environments. 
            Protect what matters with intelligence-driven security.
          </p>

          {/* Conversational CTA */}
          <div className="max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div 
              className={`glass-panel rounded-2xl p-2 transition-all duration-300 ${
                isInputFocused ? 'glow-cyan border-primary/50' : 'border-border'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="What are you trying to protect today?"
                    className="w-full bg-transparent px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                  />
                </div>
                <Button variant="hero" size="lg" className="shrink-0">
                  <span className="hidden sm:inline">Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-3">
              Or explore our solutions below
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Shield, label: "SOC 2 Type II" },
              { icon: Lock, label: "ISO 27001" },
              { icon: Eye, label: "24/7 Monitoring" },
              { icon: Zap, label: "< 15 min Response" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

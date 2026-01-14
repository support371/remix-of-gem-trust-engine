import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

type AudienceType = "ciso" | "it-ops" | "founder";

const audienceContent: Record<AudienceType, { subheadline: string; secondaryCta: string }> = {
  ciso: {
    subheadline: "Risk-aligned threat intelligence and compliance frameworks for security leadership. Proactive defense posture meets board-level reporting.",
    secondaryCta: "Get Security Snapshot"
  },
  "it-ops": {
    subheadline: "Seamless integration with your existing stack. 24/7 monitoring, automated response, and streamlined incident workflows.",
    secondaryCta: "See Integration Options"
  },
  founder: {
    subheadline: "Enterprise-grade security without the enterprise complexity. Fast onboarding, clear pricing, and expert guidance when you need it.",
    secondaryCta: "Get Security Snapshot"
  }
};

const proofItems = [
  "Security-first delivery",
  "Audit-friendly posture",
  "Fast onboarding"
];

export const HeroSection = () => {
  const [audience, setAudience] = useState<AudienceType>("ciso");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const currentContent = audienceContent[audience];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Bento Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Left: Message & CTAs */}
          <div className="lg:col-span-3 text-center lg:text-left">
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
              <span className="text-foreground/80">& Digital Trust</span>
            </h1>

            {/* Audience Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.15s' }}>
              {[
                { id: "ciso" as const, label: "CISO / Security Leader" },
                { id: "it-ops" as const, label: "IT / Ops" },
                { id: "founder" as const, label: "Founder / SMB" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAudience(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    audience === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "glass-panel text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              {currentContent.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Enterprise Briefing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/solutions">
                  {currentContent.secondaryCta}
                </Link>
              </Button>
            </div>

            {/* Tertiary Link */}
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Proof Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-8 pt-6 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              {proofItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Credibility Panel */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Trusted by Security Teams</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade protection with proven results</p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "SOC 2 Type II", sublabel: "Certified" },
                  { icon: Lock, label: "ISO 27001", sublabel: "Compliant" },
                  { icon: Eye, label: "24/7", sublabel: "Monitoring" },
                  { icon: Zap, label: "< 15 min", sublabel: "Response" },
                ].map(({ icon: Icon, label, sublabel }) => (
                  <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="text-center">
                      <span className="text-sm font-semibold text-foreground block">{label}</span>
                      <span className="text-xs text-muted-foreground">{sublabel}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Action */}
              <div className="pt-4 border-t border-border/50">
                <div 
                  className={`glass-panel rounded-xl p-3 transition-all duration-300 ${
                    isInputFocused ? 'glow-cyan border-primary/50' : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="What are you protecting?"
                      className="flex-1 bg-transparent px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                    />
                    <Button variant="hero" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

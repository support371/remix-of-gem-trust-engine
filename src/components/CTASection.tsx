import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 text-center glow-cyan">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Strengthen Your{" "}
              <span className="text-gradient-primary">Security Posture</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Talk to our security experts and discover how GEM can protect your organization from evolving cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Schedule Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl">
                <MessageSquare className="w-5 h-5" />
                Talk to Gem-Assist
              </Button>
            </div>

            <p className="text-xs text-muted-foreground/60 mt-8">
              Free security assessment • No commitment required • Results in 48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

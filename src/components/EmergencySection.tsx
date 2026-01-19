import { CheckCircle } from "lucide-react";

/**
 * Emergency Section
 *
 * Highlights the availability of round‑the‑clock incident response for urgent
 * security issues. It uses a dark background with a red accent to
 * communicate urgency.
 */

export const EmergencySection = () => {
  return (
    <section 
      className="bg-card border-t-4 border-destructive px-6 py-16 sm:py-20" 
      aria-label="Emergency Section"
      id="emergency"
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-xs font-bold uppercase text-destructive tracking-widest mb-4">
          NEED IMMEDIATE HELP?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          24/7 Emergency Incident Response
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Security incident in progress? Our emergency response team is standing by 24/7/365 to
          contain and remediate active threats.
        </p>
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="tel:+18603054376"
            className="inline-flex items-center justify-center h-14 px-10 rounded-md bg-destructive text-destructive-foreground text-lg font-semibold hover:bg-destructive/90 transition-all duration-200"
          >
            🚨 Call Emergency Hotline
          </a>
          <a
            href="mailto:emergency@gemcybersecurityassist.com"
            className="inline-flex items-center justify-center h-14 px-10 rounded-md border-2 border-foreground text-foreground text-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-200"
          >
            Email Emergency Team
          </a>
        </div>
        {/* Features */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 text-left max-w-screen-md mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">2‑Minute Response Time</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">Expert Security Analysts</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">Complete Incident Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

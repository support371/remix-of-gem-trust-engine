import { useState, useEffect } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Hero Section
 *
 * This component represents the top of the homepage. It introduces the
 * platform, encourages the user to take action, and visually reinforces the
 * technical sophistication of the service with a simple dashboard mockup.
 */

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [primaryLoading, setPrimaryLoading] = useState(false);
  const [secondaryLoading, setSecondaryLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrimaryClick = () => {
    setPrimaryLoading(true);
    setTimeout(() => {
      setPrimaryLoading(false);
    }, 1000);
  };

  const handleSecondaryClick = () => {
    setSecondaryLoading(true);
    setTimeout(() => {
      setSecondaryLoading(false);
      window.location.href = "tel:+18603054376";
    }, 100);
  };

  const trustItems = [
    { text: "SOC 2 Type II Certified" },
    { text: "500+ Enterprises Protected" },
    { text: "2‑Min Response Time" },
  ];

  return (
    <section className="bg-background" aria-label="Hero Section">
      <div
        className={
          "container mx-auto max-w-screen-xl px-6 py-20 lg:flex lg:items-center lg:justify-between transition-opacity duration-700" +
          (mounted ? " opacity-100" : " opacity-0")
        }
      >
        {/* Left column: introductory content */}
        <div className="lg:w-7/12 w-full">
          <p className="text-sm font-semibold uppercase text-primary tracking-wider mb-4">
            ENTERPRISE SECURITY PLATFORM
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground max-w-2xl mb-6 leading-tight tracking-tight">
            Stop Breaches Before They Happen
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            AI‑powered threat detection and 24/7 SOC monitoring for enterprises that can't afford
            downtime. Real‑time incident response with 2‑minute average response time.
          </p>
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to="/contact"
              onClick={handlePrimaryClick}
              className="inline-flex items-center justify-center h-14 px-8 rounded-md text-primary-foreground text-lg font-semibold bg-primary hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              {primaryLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Scheduling...
                </>
              ) : (
                "Schedule Security Assessment"
              )}
            </Link>
            <button
              type="button"
              onClick={handleSecondaryClick}
              disabled={secondaryLoading}
              className="inline-flex items-center justify-center h-14 px-8 rounded-md text-foreground text-lg font-semibold border-2 border-foreground hover:bg-foreground hover:text-background active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-foreground/50"
            >
              {secondaryLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Calling...
                </>
              ) : (
                "24/7 Emergency: (860) 305-4376"
              )}
            </button>
          </div>
          {/* Trust indicators */}
          <ul className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-6">
            {trustItems.map((item, idx) => (
              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success mr-2" aria-hidden="true" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        {/* Right column: dashboard mockup */}
        <div className="mt-12 lg:mt-0 lg:w-5/12 w-full flex justify-center">
          <div className="relative w-full pb-[56.25%] bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
            <div className="absolute inset-0 p-6 flex flex-col">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-foreground text-base font-medium">
                  Security Operations Center
                </span>
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" aria-hidden="true"></span>
                  <span className="text-xs text-success">Live</span>
                </div>
              </div>
              {/* Dashboard cards */}
              <div className="grid grid-cols-2 gap-4 text-foreground flex-1">
                {/* Card 1 */}
                <div className="bg-muted/20 border border-border rounded-lg p-4 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Threats Detected Today</div>
                  <div className="text-2xl font-bold">2,437</div>
                  <div className="text-xs text-muted-foreground">+12% vs yesterday</div>
                </div>
                {/* Card 2 */}
                <div className="bg-muted/20 border border-border rounded-lg p-4 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Response Time</div>
                  <div className="text-2xl font-bold">2.1 min avg</div>
                  <div className="text-xs text-success">Optimal</div>
                </div>
                {/* Card 3 */}
                <div className="bg-muted/20 border border-border rounded-lg p-4 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Systems Monitored</div>
                  <div className="text-2xl font-bold">847 endpoints</div>
                  <div className="text-xs text-muted-foreground">99.9% uptime</div>
                </div>
                {/* Card 4 */}
                <div className="bg-muted/20 border border-border rounded-lg p-4 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Active Analysts</div>
                  <div className="text-2xl font-bold">12 online</div>
                  <div className="text-xs text-muted-foreground">24/7 coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

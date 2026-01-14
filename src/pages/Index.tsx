import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";
import { StatsSection } from "@/components/StatsSection";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { GemAssist } from "@/components/GemAssist";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <BentoGrid />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
      <GemAssist />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EmergencySection } from "@/components/EmergencySection";
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
        <ServicesSection />
        <TestimonialsSection />
        <EmergencySection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
      <GemAssist />
    </div>
  );
};

export default Index;

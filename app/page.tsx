import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <PricingSection />
      <WhatToAsk />
      <Footer />
    </div>
  );
}

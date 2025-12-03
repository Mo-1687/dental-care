import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import Navbar from "@/components/Navbar/Navbar";
import { syncUser } from "@/lib/actions/users";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  await syncUser()
  
  return (
    <div className="min-h-screen bg-background ">
      <Navbar/>
      <Hero />
      <HowItWorks />
      <PricingSection />
      <WhatToAsk />
      <Footer />
    </div>
  );
}

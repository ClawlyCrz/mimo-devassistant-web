import { HeroSection } from "@/components/hero";
import { ArchitectureSection } from "@/components/architecture";
import { AgentsSection } from "@/components/agents";
import { FeaturesSection } from "@/components/features";
import { DemoSection } from "@/components/demo";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <ArchitectureSection />
      <AgentsSection />
      <FeaturesSection />
      <DemoSection />
      <Footer />
    </div>
  );
}

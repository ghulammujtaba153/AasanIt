import { About } from "@/components/About";
import { SystemsSection } from "@/components/SystemsSection";
import { CTA } from "@/components/CTA";
import { Differentiators } from "@/components/Differentiators";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Process } from "@/components/Process";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <SelectedWork />
      <SystemsSection />
      <Technology />
      <Process />
      <Differentiators />
      <About />
      <CTA />
    </main>
  );
}

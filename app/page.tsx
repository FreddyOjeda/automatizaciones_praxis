import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Solutions from "./components/sections/Solutions";
import Plans from "./components/sections/Plans";
import Contact from "./components/sections/Contact";
import AgentCTA from "./components/sections/AgentCTA";
import ChatLauncher from "./components/chat/ChatLauncher";
import FAQ from "./components/sections/FAQ";
import AISection from "./components/sections/AISection";
import UseCasesSection from "./components/sections/UseCasesSection";

export const metadata = {
  title: "Automatización de Procesos Empresariales en Colombia | Praxis",
  description:
    "Implementamos automatización empresarial con n8n, inteligencia artificial e integraciones personalizadas. Optimiza tu empresa con Praxis.",
  keywords: [
    "automatización empresarial",
    "automatización con n8n",
    "automatización Colombia",
    "integraciones empresariales",
  ],
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AISection/>
      <Services />
      <UseCasesSection/>
      <Solutions />
      <Plans />
      <FAQ />
      <AgentCTA />
      <ChatLauncher />
    </div>
  );
}

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Solutions from "./components/sections/Solutions";
import Plans from "./components/sections/Plans";
import Contact from "./components/sections/Contact";
import AgentCTA from "./components/sections/AgentCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Plans />
      <AgentCTA />
    </>
  );
}

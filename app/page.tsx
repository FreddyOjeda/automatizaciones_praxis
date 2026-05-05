import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import SolutionPillars from "./components/sections/SolutionPillars";
import Services from "./components/sections/Services";
import ResultSection from "./components/sections/ResultSection";
import ForWhom from "./components/sections/ForWhom";
import SoftwareTeaser from "./components/sections/SoftwareTeaser";
import CTAFinal from "./components/sections/CTAFinal";
import ChatLauncher from "./components/chat/ChatLauncher";

export const metadata = {
  title: "Praxisia — Automatización con IA para Negocios | praxisia.org",
  description:
    "Sistemas de IA que responden, agendan y hacen seguimiento por WhatsApp, Instagram y Facebook. Las 24 horas. Sin contratar más gente. Diagnóstico gratuito.",
  alternates: { canonical: "https://praxisia.org" },
  openGraph: {
    title: "Praxisia — Automatización con IA para Negocios",
    description:
      "Sistemas que trabajan solos para que tu negocio escale sin contratar más gente.",
    url: "https://praxisia.org",
    siteName: "Praxisia",
    locale: "es_CO",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <SolutionPillars />
      <Services />
      <ResultSection />
      <ForWhom />
      <SoftwareTeaser />
      <CTAFinal />
      <ChatLauncher />
    </div>
  );
}

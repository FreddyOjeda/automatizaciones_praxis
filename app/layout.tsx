import "./globals.css";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatLauncher from "./components/chat/ChatLauncher";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import { LanguageProvider } from "./components/ui/LanguageProvider";

import type { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://praxisia.org"),
  title: {
    default: "Praxisia — Automatización con IA para Negocios | praxisia.org",
    template: "%s | Praxisia",
  },
  description:
    "Sistemas de IA que responden, agendan y hacen seguimiento por WhatsApp, Instagram y Facebook. Las 24 horas. Sin contratar más gente. Diagnóstico gratuito.",
  keywords: [
    "automatización con IA Colombia",
    "chatbot WhatsApp empresas",
    "agente IA negocios Colombia",
    "automatización Instagram Facebook",
    "praxisia",
    "software POS Colombia",
    "automatización ventas PYME",
    "bots conversacionales Colombia",
    "CRM automatizado LatAm",
  ],
  icons: { icon: [{ url: "/favicon.ico" }] },
  openGraph: {
    title: "Praxisia — Automatización con IA para Negocios",
    description:
      "Sistemas que trabajan solos para que tu negocio escale sin contratar más gente.",
    url: "https://praxisia.org",
    siteName: "Praxisia",
    locale: "es_CO",
    type: "website",
  },
  alternates: { canonical: "https://praxisia.org" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://praxisia.org/#organization",
      "name": "Praxisia",
      "url": "https://praxisia.org",
      "logo": "https://praxisia.org/logo-dark.png",
      "description": "Automatización con IA y software empresarial a medida para PYMEs en Colombia y LatAm.",
      "email": "automatizacionespraxisthinks@gmail.com",
      "areaServed": ["CO", "LatAm"],
      "sameAs": [
        "https://www.instagram.com/praxisia.ai/",
        "https://www.facebook.com/profile.php?id=61585835588023",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://praxisia.org/#website",
      "url": "https://praxisia.org",
      "name": "Praxisia",
      "publisher": { "@id": "https://praxisia.org/#organization" },
      "inLanguage": ["es", "en"],
    },
    {
      "@type": "WebPage",
      "@id": "https://praxisia.org/#webpage",
      "url": "https://praxisia.org",
      "name": "Praxisia — Automatización con IA para Negocios",
      "isPartOf": { "@id": "https://praxisia.org/#website" },
      "about": { "@id": "https://praxisia.org/#organization" },
      "description": "Sistemas de IA que responden, agendan y hacen seguimiento por WhatsApp, Instagram y Facebook. Las 24 horas. Sin contratar más gente.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-base grid-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <ChatLauncher />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

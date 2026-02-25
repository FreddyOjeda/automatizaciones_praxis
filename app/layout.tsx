import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatLauncher from "./components/chat/ChatLauncher";
import BackgroundScene from "./components/background/BackgroundScene";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://praxisia.org"),
  title: {
    default: "Automatizaciones Praxis | Automatización Empresarial e Inteligencia Artificial",
    template: "%s | Praxis",
  },
  description:
    "Automatizamos procesos empresariales con n8n, inteligencia artificial e integraciones personalizadas en Colombia.",
  keywords: [
    "automatización empresarial",
    "n8n Colombia",
    "automatización con inteligencia artificial",
    "integraciones empresariales",
  ],
  openGraph: {
    title: "Praxis | Automatización Empresarial",
    description:
      "Implementamos automatización avanzada para empresas en Colombia.",
    url: "https://praxisia.org",
    siteName: "Automatizaciones Praxis",
    locale: "es_CO",
    type: "website",
  },
  alternates: {
    canonical: "https://praxisia.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <ChatLauncher />
        <Footer />
      </body>
      <BackgroundScene />
    </html>
  );
}

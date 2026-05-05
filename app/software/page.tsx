import type { Metadata } from "next";
import SoftwarePageContent from "@/app/components/pages/SoftwarePageContent";

export const metadata: Metadata = {
  title: "Software Empresarial y Desarrollo a Medida | Praxisia",
  description:
    "Sistema POS, catálogos digitales interactivos, landing pages de alta conversión, sitios web de marca y SaaS a medida para empresas en Colombia y LatAm. Desarrollo profesional con resultados reales.",
  keywords: [
    "sistema POS Colombia",
    "software punto de venta restaurante",
    "catálogo digital WhatsApp",
    "landing page Colombia",
    "desarrollo web a medida Colombia",
    "SaaS Colombia",
    "sitio web empresa Colombia",
    "software empresarial LatAm",
    "praxisia software",
  ],
  alternates: { canonical: "https://praxisia.org/software" },
  openGraph: {
    title: "Software Empresarial y Desarrollo a Medida | Praxisia",
    description:
      "Sistema POS, catálogos digitales, landing pages, sitios web y SaaS a medida. Construimos el software que tu negocio necesita.",
    url: "https://praxisia.org/software",
    siteName: "Praxisia",
    locale: "es_CO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Software y Desarrollo a Medida — Praxisia",
  "url": "https://praxisia.org/software",
  "itemListElement": [
    {
      "@type": "ListItem", "position": 1,
      "item": {
        "@type": "Service",
        "name": "Sistema POS",
        "description": "Facturación electrónica, control de inventario, comandas digitales, reportes y auditoría para restaurantes y comercios.",
        "provider": { "@type": "Organization", "name": "Praxisia", "url": "https://praxisia.org" },
        "areaServed": "CO",
        "serviceType": "Point of Sale Software",
      },
    },
    {
      "@type": "ListItem", "position": 2,
      "item": {
        "@type": "Service",
        "name": "Catálogos Digitales",
        "description": "Catálogo de productos interactivo compartible por WhatsApp, con actualización en tiempo real.",
        "provider": { "@type": "Organization", "name": "Praxisia", "url": "https://praxisia.org" },
        "areaServed": "CO",
        "serviceType": "Digital Catalog",
      },
    },
    {
      "@type": "ListItem", "position": 3,
      "item": {
        "@type": "Service",
        "name": "Landing Pages de Alta Conversión",
        "description": "Páginas optimizadas para SEO y conversión, integradas con WhatsApp y píxeles de seguimiento.",
        "provider": { "@type": "Organization", "name": "Praxisia", "url": "https://praxisia.org" },
        "areaServed": "CO",
        "serviceType": "Landing Page Development",
      },
    },
    {
      "@type": "ListItem", "position": 4,
      "item": {
        "@type": "Service",
        "name": "Sitios Web de Marca",
        "description": "Sitios web profesionales con diseño personalizado, dominio propio y posicionamiento en Google.",
        "provider": { "@type": "Organization", "name": "Praxisia", "url": "https://praxisia.org" },
        "areaServed": "CO",
        "serviceType": "Web Development",
      },
    },
    {
      "@type": "ListItem", "position": 5,
      "item": {
        "@type": "Service",
        "name": "SaaS a Medida",
        "description": "Plataformas web personalizadas con multi-usuario, panel de administración y escalabilidad en la nube.",
        "provider": { "@type": "Organization", "name": "Praxisia", "url": "https://praxisia.org" },
        "areaServed": "CO",
        "serviceType": "Custom SaaS Development",
      },
    },
    {
      "@type": "ListItem", "position": 6,
      "item": {
        "@type": "Service",
        "name": "Plataformas con IA Educativa",
        "description": "Sistemas de aprendizaje con IA: contenido adaptativo, evaluaciones automáticas y asistentes virtuales.",
        "provider": { "@type": "Organization", "name": "Praxisia", "url": "https://praxisia.org" },
        "areaServed": "CO",
        "serviceType": "Educational AI Platform",
      },
    },
  ],
};

export default function SoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwarePageContent />
    </>
  );
}

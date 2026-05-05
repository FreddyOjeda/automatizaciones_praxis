export type Lang = "es" | "en";

export const t = {
  nav: {
    services:  { es: "Servicios",     en: "Services" },
    software:  { es: "Software",      en: "Software" },
    cases:     { es: "Casos",         en: "Cases" },
    forWhom:   { es: "¿Para quién?",  en: "Who is it for?" },
    contact:   { es: "Contacto",      en: "Contact" },
    cta:       { es: "Diagnóstico gratuito →", en: "Free diagnosis →" },
    tagline:   { es: "tecnología · negocios",  en: "technology · business" },
  },

  hero: {
    label:    { es: "Tecnología aplicada a negocios", en: "Technology applied to business" },
    headline: { es: "Sistemas que\ntrabajan solos.",  en: "Systems that\nwork on their own." },
    sub:      { es: "Automatización con IA para negocios que quieren escalar sin contratar más gente.",
                en: "AI automation for businesses that want to scale without hiring more people." },
    cta1:     { es: "Diagnóstico gratuito →", en: "Free diagnosis →" },
    cta2:     { es: "Ver cómo funciona",      en: "See how it works" },
    stat1l:   { es: "Disponibilidad",         en: "Availability" },
    stat2l:   { es: "Mensajes automatizados", en: "Automated messages" },
    stat3l:   { es: "Tiempo de respuesta",    en: "Response time" },
  },

  problem: {
    copy:     { es: "de clientes que no reciben respuesta en menos de 5 minutos…",
                en: "of customers who don't get a reply within 5 minutes…" },
    emphasis: { es: "no vuelven.",      en: "don't come back." },
    remate:   { es: "No es mala atención. Es velocidad.",
                en: "It's not poor service. It's speed." },
  },

  solution: {
    label:    { es: "La solución",               en: "The solution" },
    headline: { es: "Un sistema que trabaja solo.", en: "A system that works on its own." },
    sub:      { es: "Las 24 horas. Los 7 días.",   en: "24 hours. 7 days." },
    pillars: [
      {
        number: "01",
        title:  { es: "Responde al instante",          en: "Responds instantly" },
        desc:   { es: "Por WhatsApp, Instagram y Facebook. Tu negocio contesta antes de que el cliente piense en la competencia.",
                  en: "On WhatsApp, Instagram and Facebook. Your business replies before the customer thinks of a competitor." },
      },
      {
        number: "02",
        title:  { es: "Agenda, informa y da seguimiento", en: "Schedules, informs and follows up" },
        desc:   { es: "Sin intervención humana. El sistema recuerda, confirma citas, resuelve dudas y cierra el ciclo de forma automática.",
                  en: "No human intervention. The system reminds, confirms appointments, resolves questions and closes the loop automatically." },
      },
      {
        number: "03",
        title:  { es: "Sin contratar más personas", en: "Without hiring more people" },
        desc:   { es: "El sistema escala contigo. Más volumen, mismo equipo. Tu gente se enfoca en cerrar ventas, no en contestar mensajes.",
                  en: "The system scales with you. More volume, same team. Your people focus on closing deals, not answering messages." },
      },
    ],
  },

  services: {
    label:    { es: "Servicios",                      en: "Services" },
    headline: { es: "Tres líneas de negocio.\nUn solo proveedor.",
                en: "Three business lines.\nOne provider." },
    items: [
      {
        tag:   { es: "AUTOMATIZACIÓN CON IA",     en: "AI AUTOMATION" },
        title: { es: "Bots conversacionales y agentes IA",
                 en: "Conversational bots and AI agents" },
        desc:  { es: "Sistemas que responden, califican y convierten por WhatsApp, Instagram y Facebook. CRM integrado, seguimiento automático y agendamiento sin intervención humana.",
                 en: "Systems that respond, qualify and convert on WhatsApp, Instagram and Facebook. Integrated CRM, automatic follow-up and scheduling without human intervention." },
        items: {
          es: ["WhatsApp Business API", "Instagram Direct", "Facebook Messenger", "Agendamiento automático", "Seguimiento de leads"],
          en: ["WhatsApp Business API", "Instagram Direct", "Facebook Messenger", "Automatic scheduling", "Lead follow-up"],
        },
      },
      {
        tag:   { es: "SOFTWARE EMPRESARIAL / POS", en: "BUSINESS SOFTWARE / POS" },
        title: { es: "Control total de tu operación", en: "Total control of your operation" },
        desc:  { es: "Facturación electrónica, control de ventas, inventario en tiempo real, comandas, reportes y auditoría. Sistema completo para comercios y restaurantes.",
                 en: "Electronic invoicing, sales control, real-time inventory, order management, reports and auditing. Complete system for retailers and restaurants." },
        items: {
          es: ["Facturación electrónica", "Control de inventario", "Reportes y auditoría", "Comandas digitales", "Roles y permisos"],
          en: ["Electronic invoicing", "Inventory control", "Reports and auditing", "Digital orders", "Roles and permissions"],
        },
      },
      {
        tag:   { es: "DESARROLLOS A MEDIDA",      en: "CUSTOM DEVELOPMENT" },
        title: { es: "Software personalizado para tu negocio",
                 en: "Custom software for your business" },
        desc:  { es: "SaaS, landing pages de alta conversión, sitios web profesionales y soluciones educativas con IA. Construido específicamente para tu operación y objetivos.",
                 en: "SaaS, high-conversion landing pages, professional websites and AI-powered educational solutions. Built specifically for your operation and goals." },
        items: {
          es: ["SaaS a medida", "Landing pages", "Sitios web", "IA educativa", "Software custom"],
          en: ["Custom SaaS", "Landing pages", "Websites", "Educational AI", "Custom software"],
        },
      },
    ],
  },

  result: {
    label:    { es: "Resultado real",              en: "Real result" },
    headline: { es: "80 mensajes diarios.",        en: "80 daily messages." },
    sub:      { es: "Atención automática al 70%.", en: "70% automated service." },
    client:   { es: "Cliente",                     en: "Client" },
    sector:   { es: "Sector",                      en: "Sector" },
    sectorV:  { es: "Tienda de tecnología",        en: "Tech store" },
    impl:     { es: "Implementación",              en: "Implementation" },
    implV:    { es: "1 mes",                       en: "1 month" },
    before:   { es: "Antes",                       en: "Before" },
    after:    { es: "Después",                     en: "After" },
    beforeL:  { es: "Tiempo de respuesta promedio",en: "Average response time" },
    afterL:   { es: "Respuesta automática",        en: "Automatic response" },
    note:     { es: "Un cliente real. Números documentados. Sin exageración.",
                en: "A real client. Documented numbers. No exaggeration." },
  },

  forWhom: {
    label:    { es: "¿Para quién es?",  en: "Who is it for?" },
    headline: { es: "Tu sector, tu solución.", en: "Your sector, your solution." },
    sub:      { es: "Trabajamos con PYMEs y comercios que quieren atender más clientes sin contratar más gente.",
                en: "We work with SMEs and businesses that want to serve more customers without hiring more people." },
    ref:      { es: "— caso referencia", en: "— reference case" },
    sectors: [
      { tag: "TECH",   title: { es: "Tiendas de tecnología", en: "Tech stores" },
        desc: { es: "Atención automatizada para consultas de stock, precios y soporte técnico.",
                en: "Automated service for stock, pricing and tech support inquiries." }, featured: true },
      { tag: "SALUD",  title: { es: "Clínicas y consultorios", en: "Clinics & practices" },
        desc: { es: "Agendamiento de citas, recordatorios y seguimiento post-consulta automático.",
                en: "Appointment scheduling, reminders and automatic post-visit follow-up." }, featured: false },
      { tag: "INMOB",  title: { es: "Inmobiliarias", en: "Real estate agencies" },
        desc: { es: "Calificación de leads, envío de fichas y programación de visitas sin agente.",
                en: "Lead qualification, property sheet delivery and visit scheduling without an agent." }, featured: false },
      { tag: "FOOD",   title: { es: "Restaurantes", en: "Restaurants" },
        desc: { es: "Toma de pedidos, reservas y notificaciones de domicilio por WhatsApp.",
                en: "Order taking, reservations and delivery notifications via WhatsApp." }, featured: false },
      { tag: "SERV",   title: { es: "Servicios técnicos", en: "Technical services" },
        desc: { es: "Diagnóstico inicial automatizado, seguimiento de órdenes y entrega de resultados.",
                en: "Automated initial diagnosis, order tracking and results delivery." }, featured: false },
      { tag: "RETAIL", title: { es: "Retail y comercio", en: "Retail & trade" },
        desc: { es: "Catálogo interactivo, confirmación de pedidos y gestión de devoluciones automática.",
                en: "Interactive catalog, order confirmation and automatic returns management." }, featured: false },
    ],
  },

  cta: {
    label:   { es: "Diagnóstico gratuito", en: "Free diagnosis" },
    heading: { es: "¿Cuánto te está costando no tener esto?",
               en: "How much is not having this costing you?" },
    sub:     { es: "Te hacemos un diagnóstico gratuito de tu operación. Sin compromiso. En 20 minutos sabemos si podemos ayudarte.",
               en: "We run a free diagnosis of your operation. No commitment. In 20 minutes we know if we can help." },
    btn:     { es: "Escríbenos directo →", en: "Message us directly →" },
  },

  footer: {
    tagline: { es: "Tecnología aplicada a negocios", en: "Technology applied to business" },
    copy:    { es: "Colombia y LatAm.", en: "Colombia and LatAm." },
  },

  chat: {
    greeting: { es: "Hola. Soy el asistente de Praxisia. ¿En qué puedo ayudarte hoy?",
                en: "Hi. I'm the Praxisia assistant. How can I help you today?" },
    placeholder: { es: "Escribe tu mensaje…", en: "Type your message…" },
    send:        { es: "Enviar", en: "Send" },
    writing:     { es: "Escribiendo…", en: "Writing…" },
    bubble:      { es: "¿Chateamos?", en: "Chat with us?" },
  },

  softwarePage: {
    meta: {
      title: { es: "Software Empresarial y Desarrollo a Medida | Praxisia", en: "Business Software & Custom Development | Praxisia" },
      desc:  { es: "Sistema POS, catálogos digitales, landing pages, sitios web de marca y SaaS a medida para empresas en Colombia y LatAm.", en: "POS system, digital catalogs, landing pages, brand websites and custom SaaS for businesses in Colombia and LatAm." },
    },
    label:    { es: "Software y desarrollo",        en: "Software & development" },
    headline: { es: "Cada negocio necesita\nsu propia herramienta.", en: "Every business needs\nits own tool." },
    sub:      { es: "Construimos software que resuelve problemas reales. Sin plantillas genéricas. Sin promesas vacías. Solo sistemas que funcionan.", en: "We build software that solves real problems. No generic templates. No empty promises. Just systems that work." },
    cta:      { es: "Hablar de tu proyecto →",    en: "Talk about your project →" },
    products: [
      {
        tag:      { es: "PUNTO DE VENTA",      en: "POINT OF SALE" },
        title:    { es: "Sistema POS",         en: "POS System" },
        desc:     { es: "Facturación electrónica, control de inventario en tiempo real, comandas digitales, reportes de ventas y auditoría por turno. Diseñado para restaurantes y comercios que necesitan control total de su operación.", en: "Electronic invoicing, real-time inventory control, digital orders, sales reports and shift auditing. Designed for restaurants and retailers that need total control of their operation." },
        features: { es: ["Facturación electrónica DIAN", "Inventario en tiempo real", "Comandas por mesa/zona", "Reportes y cierre de caja", "Roles y auditoría", "Multi-sucursal"], en: ["DIAN electronic invoicing", "Real-time inventory", "Table/zone orders", "Reports & cash closing", "Roles & auditing", "Multi-branch"] },
        for:      { es: "Restaurantes · Cafés · Tiendas · Comercios", en: "Restaurants · Cafés · Stores · Retailers" },
      },
      {
        tag:      { es: "CATÁLOGO DIGITAL",     en: "DIGITAL CATALOG" },
        title:    { es: "Catálogos interactivos", en: "Interactive catalogs" },
        desc:     { es: "Catálogo de productos interactivo, compartible por WhatsApp, actualizable en tiempo real sin conocimientos técnicos. El cliente navega, selecciona y hace su pedido desde el celular.", en: "Interactive product catalog, shareable via WhatsApp, updatable in real time without technical knowledge. Customers browse, select and order from their phone." },
        features: { es: ["Compartible por WhatsApp", "Actualización en tiempo real", "Carrito de pedidos", "Sin app adicional", "Fotos y precios", "Enlace personalizado"], en: ["Shareable on WhatsApp", "Real-time updates", "Order cart", "No extra app needed", "Photos & prices", "Custom link"] },
        for:      { es: "Distribuidoras · Mayoristas · Tiendas · Marcas", en: "Distributors · Wholesalers · Stores · Brands" },
      },
      {
        tag:      { es: "LANDING PAGE",         en: "LANDING PAGE" },
        title:    { es: "Páginas de alta conversión", en: "High-conversion pages" },
        desc:     { es: "Páginas diseñadas con un único objetivo: convertir visitantes en clientes. Optimizadas para SEO, velocidad y mobile. Integradas con WhatsApp, formularios y píxeles de seguimiento.", en: "Pages designed with one goal: converting visitors into customers. Optimized for SEO, speed and mobile. Integrated with WhatsApp, forms and tracking pixels." },
        features: { es: ["SEO optimizado", "Carga ultrarrápida", "100% responsive", "Integración WhatsApp", "Formularios y CRM", "Píxel Facebook/Google"], en: ["SEO optimized", "Ultra-fast loading", "100% responsive", "WhatsApp integration", "Forms & CRM", "Facebook/Google Pixel"] },
        for:      { es: "Campañas · Lanzamientos · Captación de leads · Eventos", en: "Campaigns · Launches · Lead generation · Events" },
      },
      {
        tag:      { es: "SITIO WEB DE MARCA",   en: "BRAND WEBSITE" },
        title:    { es: "Sitios web profesionales", en: "Professional websites" },
        desc:     { es: "Presencia digital profesional con diseño personalizado, dominio propio y posicionamiento en Google. Transmite autoridad desde el primer clic.", en: "Professional digital presence with custom design, own domain and Google ranking. Builds authority from the first click." },
        features: { es: ["Diseño a medida", "Dominio propio", "SEO técnico", "Blog integrado", "Analytics", "Mantenimiento incluido"], en: ["Custom design", "Own domain", "Technical SEO", "Built-in blog", "Analytics", "Maintenance included"] },
        for:      { es: "Empresas · Consultoras · Profesionales · Marcas personales", en: "Companies · Consultancies · Professionals · Personal brands" },
      },
      {
        tag:      { es: "SAAS A MEDIDA",        en: "CUSTOM SAAS" },
        title:    { es: "Plataformas SaaS",     en: "SaaS platforms" },
        desc:     { es: "Plataformas web personalizadas con usuarios múltiples, panel de administración, lógica de negocio compleja y escalabilidad real. Para empresas con procesos únicos que ningún software genérico resuelve.", en: "Custom web platforms with multiple users, admin panel, complex business logic and real scalability. For businesses with unique processes that no generic software solves." },
        features: { es: ["Multi-usuario y roles", "Panel de administración", "API propia", "Pagos integrados", "Escalable en la nube", "Soporte técnico"], en: ["Multi-user & roles", "Admin panel", "Own API", "Integrated payments", "Cloud scalable", "Technical support"] },
        for:      { es: "Startups · Empresas con procesos únicos · Operaciones complejas", en: "Startups · Businesses with unique processes · Complex operations" },
      },
      {
        tag:      { es: "IA EDUCATIVA",         en: "EDUCATIONAL AI" },
        title:    { es: "Plataformas con IA",   en: "AI-powered platforms" },
        desc:     { es: "Sistemas de aprendizaje con inteligencia artificial: contenido adaptativo, evaluaciones automáticas, asistentes virtuales y seguimiento de progreso. Para academias, empresas con formación interna y educadores.", en: "AI-powered learning systems: adaptive content, automatic assessments, virtual assistants and progress tracking. For academies, corporate training and educators." },
        features: { es: ["Contenido adaptativo", "Evaluaciones automáticas", "Asistente IA integrado", "Seguimiento de progreso", "Certificados digitales", "Multi-idioma"], en: ["Adaptive content", "Automatic assessments", "Built-in AI assistant", "Progress tracking", "Digital certificates", "Multi-language"] },
        for:      { es: "Academias · Institutos · Empresas con formación interna", en: "Academies · Institutes · Companies with internal training" },
      },
    ],
    forLabel:   { es: "Ideal para",     en: "Ideal for" },
    featLabel:  { es: "Incluye",        en: "Includes" },
    ctaSection: {
      headline: { es: "¿Ya sabes qué necesitas?", en: "Already know what you need?" },
      sub:      { es: "Cuéntanos tu proyecto. En 20 minutos te decimos si podemos construirlo, cuánto demora y cuánto cuesta.", en: "Tell us about your project. In 20 minutes we'll tell you if we can build it, how long it takes and how much it costs." },
      btn:      { es: "Hablar del proyecto →",    en: "Talk about the project →" },
    },
    teaserHome: {
      label:    { es: "Software y desarrollo", en: "Software & development" },
      headline: { es: "¿Necesitas software a medida?", en: "Need custom software?" },
      sub:      { es: "POS, catálogos digitales, landing pages, sitios web y SaaS. Construimos la herramienta que tu negocio necesita.", en: "POS, digital catalogs, landing pages, websites and SaaS. We build the tool your business needs." },
      link:     { es: "Ver soluciones de software →", en: "See software solutions →" },
    },
  },
} as const;

export function tx(key: { es: string; en: string }, lang: Lang): string {
  return key[lang];
}

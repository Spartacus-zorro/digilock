// Central data file for all portfolio content
// Edit this file to update content across the entire portfolio

export const heroData = {
  title: "Automatizez, Design-uiesc și Promovez Afacerea Ta în Era AI",
  subtitle: "Transformă-ți Visul Digital în Realitate",
  description: "Salvez sute de ore de muncă manuală prin automatizări inteligente, creez experiențe digitale premium și captez atenția prin video marketing strategic.",
  ctaText: "Începe Acum",
  ctaLink: "#contact",
  secondaryCtaText: "Vezi Portofoliul",
  secondaryCtaLink: "#portfolio",
};

export const servicesData = {
  sectionTitle: "Servicii Premium",
  sectionDescription: "Soluții digitale care transformă idei în rezultate măsurabile",
  services: [
    {
      id: 1,
      title: "Automatizare Business",
      description: "Eficientizează procesele folosind n8n și AI. Salvează sute de ore de muncă manuală și elimină taskurile repetitive din afacerea ta.",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Web Design Premium",
      description: "Experiențe digitale ultra-rapide, responsive și optimizate pentru conversii. Design modern care transformă vizitatori în clienți.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Video Marketing",
      description: "Strategii video care captează atenția și transformă privitorii în clienți. Conținut care vinde și construiește autoritate.",
      icon: "🎥",
    },
  ],
};

export const portfolioData = {
  sectionTitle: "Portofoliu",
  sectionDescription: "Proiecte care demonstrează excelența și inovația",
  projects: [
    {
      id: 1,
      title: "Automatizare E-commerce",
      description: "Sistem complet de automatizare cu n8n pentru procesare comenzi și notificări clienți",
      category: "Automatizare",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["n8n", "AI", "Automatizare"],
    },
    {
      id: 2,
      title: "SaaS Platform Design",
      description: "Platformă SaaS modernă cu design minimalist și UX excepțional",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["UI/UX", "React", "Tailwind"],
    },
    {
      id: 3,
      title: "Video Marketing Campaign",
      description: "Campanie video care a crescut conversiile cu 300% în 3 luni",
      category: "Video Marketing",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      tags: ["Video", "Marketing", "Conversii"],
    },
    {
      id: 4,
      title: "CRM Custom Workflows",
      description: "Workflow-uri inteligente pentru automatizarea vânzărilor și follow-up clienți",
      category: "Automatizare",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      tags: ["n8n", "CRM", "AI"],
    },
    {
      id: 5,
      title: "Landing Page Premium",
      description: "Landing page optimizat pentru conversii maximale, încărcare sub 1 secundă",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["Performance", "SEO", "Conversii"],
    },
    {
      id: 6,
      title: "Serie Video Educațională",
      description: "Conținut video de autoritate care a generat 50k+ views și sute de leaduri",
      category: "Video Marketing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      tags: ["Content", "Authority", "Leads"],
    },
  ],
};

export const videoData = {
  sectionTitle: "Video Gallery",
  sectionDescription: "Explore our work and client testimonials",
  youtubeVideos: [
    {
      id: 1,
      title: "Company Overview",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Client Success Story",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
  ],
  localVideos: [
    {
      id: 1,
      title: "Project Showcase",
      videoPath: "/videos/sample-video.mp4", // Place your videos in public/videos/
      thumbnail: "/videos/thumbnail-1.jpg",
    },
  ],
};

export const contactData = {
  sectionTitle: "Hai să Discutăm",
  sectionDescription: "Transformăm conversația într-un plan de acțiune concret",
  form: {
    namePlaceholder: "Numele Tău",
    emailPlaceholder: "Email-ul Tău",
    phonePlaceholder: "Telefon (Opțional)",
    messagePlaceholder: "Spune-ne despre proiectul tău...",
    submitText: "Trimite Mesaj",
  },
  contactInfo: {
    email: "contact@digilock.ro",
    phone: "+40 (756) 123-456",
    address: "București, România",
  },
};

export const footerData = {
  companyName: "DigiLock",
  tagline: "Automatizare • Design • Video Marketing",
  copyright: "© 2024 DigiLock. Toate drepturile rezervate.",
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
};

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

export const arbitrageAgentData = {
  sectionTitle: "Bitcoin Arbitrage Agent",
  sectionDescription:
    "A complex, autonomous AI-powered trading agent that detects and exploits price discrepancies for Bitcoin and other crypto assets across multiple exchanges in real time.",
  agentStatus: "ACTIVE",
  supportedAssets: ["BTC", "ETH", "SOL", "BNB", "USDT"],
  exchanges: [
    { id: "binance", name: "Binance", color: "from-yellow-500 to-yellow-600" },
    { id: "coinbase", name: "Coinbase", color: "from-blue-500 to-blue-600" },
    { id: "kraken", name: "Kraken", color: "from-purple-500 to-purple-600" },
    { id: "bybit", name: "Bybit", color: "from-orange-500 to-orange-600" },
    { id: "okx", name: "OKX", color: "from-green-500 to-green-600" },
  ],
  simulatedPrices: [
    { exchange: "Binance", btcPrice: 67_842.15, spread: 0.02 },
    { exchange: "Coinbase", btcPrice: 67_918.50, spread: 0.03 },
    { exchange: "Kraken", btcPrice: 67_795.30, spread: 0.02 },
    { exchange: "Bybit", btcPrice: 67_952.80, spread: 0.04 },
    { exchange: "OKX", btcPrice: 67_810.60, spread: 0.02 },
  ],
  strategies: [
    {
      id: 1,
      name: "Cross-Exchange Arbitrage",
      description:
        "Detects price gaps between exchanges and executes simultaneous buy/sell orders to capture the spread.",
      icon: "🔀",
    },
    {
      id: 2,
      name: "Triangular Arbitrage",
      description:
        "Exploits price mismatches between three trading pairs (e.g., BTC → ETH → USDT → BTC) on the same exchange.",
      icon: "🔺",
    },
    {
      id: 3,
      name: "Statistical Arbitrage",
      description:
        "Uses historical price correlations and mean-reversion models to anticipate and trade temporary divergences.",
      icon: "📊",
    },
    {
      id: 4,
      name: "Flash Arbitrage",
      description:
        "Ultra-low-latency execution layer that captures fleeting sub-second opportunities before they close.",
      icon: "⚡",
    },
  ],
  metrics: [
    { label: "Avg. Profit / Trade", value: "+0.32%", trend: "up" },
    { label: "Trades Executed (24h)", value: "2,847", trend: "up" },
    { label: "Win Rate", value: "94.7%", trend: "up" },
    { label: "Total PnL (30d)", value: "+$48,320", trend: "up" },
    { label: "Latency", value: "12 ms", trend: "neutral" },
    { label: "Active Pairs", value: "38", trend: "neutral" },
  ],
  opportunities: [
    {
      id: 1,
      pair: "BTC/USDT",
      buyExchange: "Kraken",
      sellExchange: "Bybit",
      spread: "+0.23%",
      profit: "+$155.00",
      status: "LIVE",
    },
    {
      id: 2,
      pair: "BTC/USDT",
      buyExchange: "Binance",
      sellExchange: "Coinbase",
      spread: "+0.11%",
      profit: "+$74.50",
      status: "LIVE",
    },
    {
      id: 3,
      pair: "BTC/ETH",
      buyExchange: "OKX",
      sellExchange: "Binance",
      spread: "+0.08%",
      profit: "+$54.20",
      status: "EXECUTED",
    },
  ],
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

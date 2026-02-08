// Central data file for all portfolio content
// Edit this file to update content across the entire portfolio

export const heroData = {
  title: "Welcome to DigiLock",
  subtitle: "Digital Solutions for Modern Businesses",
  description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital marketing.",
  ctaText: "Get Started",
  ctaLink: "#contact",
  secondaryCtaText: "View Our Work",
  secondaryCtaLink: "#videos",
};

export const servicesData = {
  sectionTitle: "Our Services",
  sectionDescription: "Comprehensive digital solutions tailored to your needs",
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "SEO, social media, and content marketing strategies",
      icon: "📊",
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      icon: "☁️",
    },
    {
      id: 6,
      title: "Consulting",
      description: "Expert guidance on digital transformation and technology strategy",
      icon: "💼",
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
  sectionTitle: "Get In Touch",
  sectionDescription: "Let's discuss how we can help your business grow",
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Phone Number (Optional)",
    messagePlaceholder: "Tell us about your project...",
    submitText: "Send Message",
  },
  contactInfo: {
    email: "hello@digilock.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, Tech City, TC 12345",
  },
};

export const footerData = {
  companyName: "DigiLock",
  tagline: "Digital Solutions for Modern Businesses",
  copyright: "© 2024 DigiLock. All rights reserved.",
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
};

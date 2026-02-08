# DigiLock Portfolio

A modern, professional Next.js 15 portfolio built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Dark-themed professional design**
- 🚀 **Hero section** with Call-to-Action buttons
- 💼 **Services grid** showcasing your offerings
- 🎥 **Video gallery** supporting both YouTube and local videos
- 📧 **Contact form** with validation
- 📱 **Fully responsive** design
- ⚡ **Fast and optimized** with Next.js 15

## Project Structure

```
digilock/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and animations
├── components/
│   ├── Hero.tsx          # Hero section component
│   ├── Services.tsx      # Services grid component
│   ├── VideoGallery.tsx  # Video gallery component
│   ├── Contact.tsx       # Contact form component
│   └── Footer.tsx        # Footer component
├── data/
│   └── data.ts           # Central data file for all content
└── public/
    └── videos/           # Place local video files here
```

## Editing Content

All content is centralized in `/data/data.ts`. Simply edit this file to update:

- **Hero Section**: Title, subtitle, description, and CTA buttons
- **Services**: Service titles, descriptions, and icons
- **Video Gallery**: YouTube video IDs and local video paths
- **Contact Form**: Form labels, placeholders, and contact information
- **Footer**: Company name, social links, and copyright text

### Example: Updating Hero Text

```typescript
export const heroData = {
  title: "Your Company Name",
  subtitle: "Your Tagline",
  description: "Your description...",
  // ...
};
```

### Example: Adding a Service

```typescript
export const servicesData = {
  services: [
    // Existing services...
    {
      id: 7,
      title: "Your New Service",
      description: "Description of your new service",
      icon: "🎯", // Use any emoji
    },
  ],
};
```

### Example: Adding YouTube Videos

```typescript
export const videoData = {
  youtubeVideos: [
    {
      id: 1,
      title: "Your Video Title",
      videoId: "YOUR_YOUTUBE_VIDEO_ID", // Extract from YouTube URL
      thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
    },
  ],
};
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Customization Tips

- **Colors**: Edit Tailwind classes in components for custom color schemes
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Add custom animations in `app/globals.css`
- **Local Videos**: Place video files in `public/videos/` and reference them in `data.ts`

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React 19** - UI library

## License

MIT License - feel free to use this portfolio for your projects!

---

&copy; 2024 DigiLock. All rights reserved.
# Introduction to GitHub

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey Spartacus-zorro!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/Spartacus-zorro/digilock/issues/2)

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)


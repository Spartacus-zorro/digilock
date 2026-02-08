# DigiLock Portfolio - Project Structure

This document provides an overview of the project structure and how to work with it.

## Folder Structure

```
digilock/
├── app/                      # Next.js App Router directory
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page (home)
│
├── components/              # React components
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── Services.tsx        # Services grid (6 services)
│   ├── VideoGallery.tsx    # Video gallery (YouTube + local)
│   ├── Contact.tsx         # Contact form with validation
│   └── Footer.tsx          # Footer with links and social media
│
├── data/                    # Content data
│   └── data.ts             # Central data file (EDIT THIS!)
│
├── public/                  # Static assets
│   ├── videos/             # Place local video files here
│   └── *.svg               # SVG icons and images
│
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
└── README.md               # Documentation

```

## Key Features Implemented

### 1. Hero Section (`components/Hero.tsx`)
- Full-screen hero with animated gradient background
- Title, subtitle, and description
- Two CTA buttons: "Get Started" and "View Our Work"
- Animated scroll indicator
- Smooth fade-in animations

### 2. Services Grid (`components/Services.tsx`)
- 6 service cards in a responsive grid
- Each card includes:
  - Emoji icon
  - Service title
  - Service description
- Hover effects with scale and shadow
- Dark-themed cards

### 3. Video Gallery (`components/VideoGallery.tsx`)
- YouTube videos section:
  - Displays thumbnail images
  - Click to open video in modal
  - Supports multiple YouTube videos
- Local videos section:
  - Supports local MP4 files
  - Click to play in modal
- Full-screen video modal with close button
- Autoplay on open

### 4. Contact Form (`components/Contact.tsx`)
- Form fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Message (required)
- Form validation
- Submit functionality with success message
- Contact information display:
  - Email with mailto link
  - Phone with tel link
  - Physical address
- Office hours section

### 5. Footer (`components/Footer.tsx`)
- Company information
- Quick navigation links
- Social media icons (GitHub, LinkedIn, Twitter)
- Copyright notice

## Central Data File

All content is managed in `/data/data.ts`. This includes:

- `heroData`: Hero section content
- `servicesData`: All service cards
- `videoData`: YouTube and local video information
- `contactData`: Form labels and contact information
- `footerData`: Footer content and social links

## How to Edit Content

1. **Change Hero Text:**
   ```typescript
   // Edit data/data.ts
   export const heroData = {
     title: "Your New Title",
     subtitle: "Your New Subtitle",
     // ...
   };
   ```

2. **Add a Service:**
   ```typescript
   // Edit data/data.ts
   export const servicesData = {
     services: [
       // existing services...
       {
         id: 7,
         title: "New Service",
         description: "Service description",
         icon: "🎯",
       },
     ],
   };
   ```

3. **Add YouTube Video:**
   ```typescript
   // Edit data/data.ts
   export const videoData = {
     youtubeVideos: [
       // existing videos...
       {
         id: 3,
         title: "New Video",
         videoId: "YOUTUBE_VIDEO_ID",
         thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
       },
     ],
   };
   ```

4. **Add Local Video:**
   - Place your video file in `public/videos/`
   - Update `data/data.ts`:
   ```typescript
   export const videoData = {
     localVideos: [
       {
         id: 2,
         title: "Your Video",
         videoPath: "/videos/your-video.mp4",
       },
     ],
   };
   ```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Library:** React 19
- **Build Tool:** Turbopack

## Design Features

- **Dark Theme:** Professional black/gray color scheme
- **Responsive:** Works on all screen sizes
- **Animations:** Smooth fade-in effects and transitions
- **Accessibility:** Semantic HTML and proper ARIA labels
- **Performance:** Optimized with Next.js static generation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Customization Tips

1. **Change Colors:** Edit Tailwind classes in components
2. **Add Sections:** Create new components and import in `app/page.tsx`
3. **Modify Layout:** Edit `app/layout.tsx` for site-wide changes
4. **Update Metadata:** Change title and description in `app/layout.tsx`

## License

MIT License - Free to use for personal and commercial projects.

# Viewing the Website with index.html

## Quick Start

You can view the website in two ways:

### Option 1: Static HTML File (Instant View)

Simply open the `index.html` file in your browser:

1. **Windows**: Double-click `index.html` or right-click → Open with → Browser
2. **Mac**: Double-click `index.html` or right-click → Open With → Browser  
3. **Linux**: Double-click `index.html` or use: `xdg-open index.html`

This static HTML file includes all the main sections:
- ✅ Navigation with smooth scroll
- ✅ Hero section with call-to-action buttons
- ✅ Services section (3 service cards)
- ✅ Portfolio section (6 project examples)
- ✅ Client logos section
- ✅ Testimonials (3 client testimonials)
- ✅ CTA (Call to Action) section
- ✅ Contact form with contact information
- ✅ Footer with social links

### Option 2: Next.js Development Server (Full Features)

For the complete interactive experience with all React components and animations:

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Then open http://localhost:3000 in your browser.

## Differences Between Options

**Static HTML (index.html):**
- ✅ Opens instantly - no setup required
- ✅ All content visible
- ✅ Smooth scrolling and basic interactions
- ✅ Responsive design
- ⚠️ Form doesn't submit (static HTML)
- ⚠️ No advanced animations (Framer Motion)

**Next.js Server:**
- ✅ Full interactive experience
- ✅ Advanced animations with Framer Motion
- ✅ Portfolio filtering functionality
- ✅ Form validation and submission
- ✅ Video gallery with modals
- ⚠️ Requires Node.js and npm install

## Editing Content

### For Static HTML (index.html):
Edit the HTML file directly - search for the text you want to change.

### For Next.js Application:
Edit the `/data/data.ts` file - all content is centralized there.

## Design

The website uses a **minimalist design** with:
- White and light grey backgrounds (#ffffff, #f5f5f5)
- Black text and accents (#000000, #1a1a1a)
- Clean borders and subtle shadows
- Tailwind CSS for styling (loaded via CDN in index.html)

## Browser Compatibility

The index.html file works in all modern browsers:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## Troubleshooting

**Issue**: "Page not loading properly"
**Solution**: Make sure you're using a modern browser and have internet connection (for Tailwind CSS CDN)

**Issue**: "Styles not showing"
**Solution**: Check your internet connection - the page loads Tailwind CSS from a CDN

**Issue**: "Want more features"
**Solution**: Use the Next.js development server instead (see Option 2 above)

## Support

For the full documentation on running the Next.js version, see [HOW_TO_RUN.md](HOW_TO_RUN.md)

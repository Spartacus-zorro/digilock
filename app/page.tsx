import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VideoGallery from '@/components/VideoGallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <VideoGallery />
      <Contact />
      <Footer />
    </main>
  );
}

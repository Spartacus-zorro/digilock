import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ArbitrageAgent from '@/components/ArbitrageAgent';
import VideoGallery from '@/components/VideoGallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <ArbitrageAgent />
      <VideoGallery />
      <Contact />
      <Footer />
    </main>
  );
}

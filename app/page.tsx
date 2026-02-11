import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import VideoGallery from '@/components/VideoGallery';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <VideoGallery />
      <ClientLogos />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

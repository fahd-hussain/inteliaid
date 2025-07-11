import HeaderSection from '@/components/HeaderSection';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DemoReelSection from '@/components/DemoReelSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useRef } from 'react';

const Index = () => {
  const demoReelRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  const handleOnScrollTo = (section: 'demoSection' | 'contactUsSection') => {
    let element = null;

    switch (section) {
      case 'demoSection':
        element = demoReelRef.current;
        break;
      case 'contactUsSection':
        element = contactUsRef.current;
        break;
      default:
        element = null;
        break;
    }

    if (!element) return;

    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <HeaderSection />
      <HeroSection onScrollTo={handleOnScrollTo} />
      <AboutSection />
      <DemoReelSection ref={demoReelRef} />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection ref={contactUsRef} />
      <Footer />
    </div>
  );
};

export default Index;

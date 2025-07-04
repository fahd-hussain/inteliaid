import HeaderSection from '@/components/HeaderSection';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ShowreelSection from '@/components/ShowreelSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ShowreelSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

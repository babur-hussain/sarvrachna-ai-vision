import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AISolutionsSection from "@/components/sections/AISolutionsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import LiveChatSection from "@/components/sections/LiveChatSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";
import FloatingReviews from "@/components/ui/floating-reviews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <AboutSection /> */}
      <ServicesSection />
      <AISolutionsSection />
      <WhyChooseUsSection />
      <TechStackSection />
      <CaseStudiesSection />
      <LiveChatSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <FloatingChatbot />
      <FloatingReviews />
    </div>
  );
};

export default Index;

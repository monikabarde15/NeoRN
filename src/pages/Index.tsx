
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FeaturedCourses from "@/components/FeaturedCourses";
import ServicesOverview from "@/components/ServicesOverview";
import TrustStrip from "@/components/TrustStrip";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Highlights />
      <FeaturedCourses />
      <ServicesOverview />
      <TrustStrip />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

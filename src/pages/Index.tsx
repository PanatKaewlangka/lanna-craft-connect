import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWorkshops } from "@/components/home/FeaturedWorkshops";
import { AboutSection } from "@/components/home/AboutSection";
import { MapPreview } from "@/components/home/MapPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturedWorkshops />
        <AboutSection />
        <MapPreview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

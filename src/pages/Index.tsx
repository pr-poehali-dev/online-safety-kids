import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import MonitoringSection from "@/components/MonitoringSection";
import MvdSection from "@/components/MvdSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen noise-overlay">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <MonitoringSection />
      <MvdSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

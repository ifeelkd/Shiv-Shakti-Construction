import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Project3DShowcase from "@/components/Project3DShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectQuickLinks from "@/components/ProjectQuickLinks";
import NearbyPlaces from "@/components/NearbyPlaces";
import LegacyAssets from "@/components/LegacyAssets";
import ExecutionProtocol from "@/components/ExecutionProtocol";
import PartnersTestimonials from "@/components/PartnersTestimonials";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Project3DShowcase />
        <ServicesGrid />
        <FeaturedProject />
        <ProjectQuickLinks />
        <NearbyPlaces />
        <LegacyAssets />
        <ExecutionProtocol />
        <PartnersTestimonials />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

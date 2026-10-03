import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailView from "@/components/ProjectDetailView";

export const metadata: Metadata = {
  title: "Shiv Shakti Towers | Premium 2BHK & 3BHK Residences Bongaigaon",
  description:
    "Explore Shiv Shakti Towers at Chapaguri, North Bongaigaon. Ultra-modern G+6 residential & commercial landmark with 2BHK & 3BHK apartments, rooftop world-class amenities, transparent payment plan, and prime connectivity.",
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Shiv Shakti Towers | Premium 2BHK & 3BHK Residences",
    description:
      "Ultra-modern G+6 residential & commercial landmark in North Bongaigaon. Available 2BHK & 3BHK layouts.",
  },
};

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ProjectDetailView />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LocationView from "@/components/LocationView";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Location & Nearby Places | Shiv Shakti Towers — Chapaguri, Bongaigaon",
  description:
    "Discover the location advantage of Shiv Shakti Towers in Chapaguri, Bongaigaon. Schools, hospitals, markets, and transport hubs all within easy reach.",
  alternates: {
    canonical: "/location",
  },
  openGraph: {
    title: "Location & Nearby Places | Shiv Shakti Towers",
    description:
      "Prime location in Chapaguri, Bongaigaon with schools, hospitals, and markets nearby.",
  },
};

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <LocationView />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FlatDetailLayout from "@/components/FlatDetailLayout";
import Footer from "@/components/Footer";
import { flatTypes } from "@/data/flats.data";

export const metadata: Metadata = {
  title: "2BHK Flats | Shiv Shakti Towers — Smart Residential Living",
  description:
    "Explore 2BHK residential units at Shiv Shakti Towers, Bongaigaon. Available in 2 layout variants (Flat C, D) ranging from 1,258 to 1,592 sq.ft. super built-up area. 2 bedrooms, 2 bathrooms, 2 balconies, modular kitchen, built-in wardrobes, and prime Chapaguri location.",
  openGraph: {
    title: "2BHK Flats | Shiv Shakti Towers",
    description:
      "Smart 2BHK apartments in 2 layout variants (1,258–1,592 sq.ft.) with 2 balconies at Bongaigaon's premier residential tower. FE-500 grade steel, IS 456:2000 certified construction.",
  },
};

export default function TwoBHKPage() {
  const flat = flatTypes.find((f) => f.slug === "2bhk")!;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <FlatDetailLayout flat={flat} />
      </main>
      <Footer />
    </>
  );
}

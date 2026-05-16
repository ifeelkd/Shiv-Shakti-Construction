import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FlatDetailLayout from "@/components/FlatDetailLayout";
import Footer from "@/components/Footer";
import { flatTypes } from "@/data/flats.data";

export const metadata: Metadata = {
  title: "2BHK Flats | Shiv Shakti Towers — Smart Residential Living",
  description:
    "Explore 2BHK residential units at Shiv Shakti Towers, Bongaigaon. 1,150 sq.ft. with 2 bedrooms, 2 bathrooms, modern amenities, and a prime Chapaguri location.",
  openGraph: {
    title: "2BHK Flats | Shiv Shakti Towers",
    description:
      "Smart 2BHK apartments starting at 1,150 sq.ft. in Bongaigaon's most ambitious residential tower.",
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

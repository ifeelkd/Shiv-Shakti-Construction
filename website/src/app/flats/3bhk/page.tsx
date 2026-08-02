import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FlatDetailLayout from "@/components/FlatDetailLayout";
import Footer from "@/components/Footer";
import { flatTypes } from "@/data/flats.data";

export const metadata: Metadata = {
  title: "3BHK Flats | Shiv Shakti Towers — Premium Residential Living",
  description:
    "Explore 3BHK premium units at Shiv Shakti Towers, Bongaigaon. Available in 4 layout variants (Flat A, E, F, G) ranging from 1,629 to 1,999 sq.ft. super built-up area. 3 bedrooms, 3 bathrooms, modular kitchen, Italian marble flooring, and panoramic views.",
  openGraph: {
    title: "3BHK Flats | Shiv Shakti Towers",
    description:
      "Premium 3BHK apartments in 4 layout variants (1,629–1,999 sq.ft.) at Bongaigaon's most ambitious residential tower. FE-500 grade steel, IS 456:2000 certified construction.",
  },
};

export default function ThreeBHKPage() {
  const flat = flatTypes.find((f) => f.slug === "3bhk")!;

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

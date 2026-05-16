import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FlatDetailLayout from "@/components/FlatDetailLayout";
import Footer from "@/components/Footer";
import { flatTypes } from "@/data/flats.data";

export const metadata: Metadata = {
  title: "3BHK Flats | Shiv Shakti Towers — Premium Residential Living",
  description:
    "Explore 3BHK premium units at Shiv Shakti Towers, Bongaigaon. 1,650 sq.ft. with 3 bedrooms, 3 bathrooms, Italian marble flooring, and panoramic views.",
  openGraph: {
    title: "3BHK Flats | Shiv Shakti Towers",
    description:
      "Premium 3BHK apartments with 1,650 sq.ft. of refined living in Bongaigaon's most ambitious residential tower.",
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

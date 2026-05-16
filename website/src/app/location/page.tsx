import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import NearbyPlaces from "@/components/NearbyPlaces";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Location & Nearby Places | Shiv Shakti Towers — Chapaguri, Bongaigaon",
  description:
    "Discover the location advantage of Shiv Shakti Towers in Chapaguri, Bongaigaon. Schools, hospitals, markets, and transport hubs all within easy reach.",
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
        {/* Location Hero */}
        <section
          className="relative pt-[120px] sm:pt-[140px] pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24"
          style={{ backgroundColor: "#0e0e0e" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 50%, rgba(212,175,55,0.03) 100%)",
            }}
          />
          <div className="relative max-w-[1088px] mx-auto">
            <p className="label-sm mb-3 sm:mb-4">Location Advantage</p>
            <h1 className="font-heading font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#ffdf7d] leading-[1.05] mb-4 sm:mb-6">
              Chapaguri,
              <br />
              Bongaigaon
            </h1>
            <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] max-w-[560px]">
              Strategically located at the heart of Bongaigaon&apos;s growth corridor, Shiv
              Shakti Towers offers unmatched connectivity to education, healthcare,
              shopping, and transport hubs.
            </p>
          </div>
        </section>

        {/* Map Embed Section */}
        <section
          className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-12"
          style={{ backgroundColor: "#131313" }}
          aria-label="Map"
        >
          <div className="max-w-[1088px] mx-auto">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border border-[rgba(77,70,53,0.3)] overflow-hidden bg-[#1c1b1b]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28625.477095068577!2d90.5383!3d26.4769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37e1e5e0e3e3e3e3%3A0x0!2sBongaigaon%2C+Assam!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shiv Shakti Towers location on Google Maps"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* Nearby Places — reuses existing component */}
        <NearbyPlaces />

        {/* Location CTA */}
        <section
          className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, #131313 50%, rgba(212,175,55,0.06) 100%)",
          }}
        >
          <div className="max-w-[640px] mx-auto text-center">
            <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#e5e2e1] leading-[1.1] mb-4 sm:mb-6">
              Visit the Location
            </h2>
            <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] mb-8">
              Experience the Chapaguri neighbourhood firsthand. Schedule a site
              visit with our team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#d4af37] hover:bg-[#f2ca50] active:bg-[#e6be3f] transition-colors duration-300 px-8 sm:px-10 py-4 sm:py-5"
            >
              <span className="font-body font-bold text-[13px] sm:text-[14px] tracking-[1.4px] text-[#3c2f00] uppercase">
                BOOK A SITE VISIT
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

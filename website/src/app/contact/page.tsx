import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Shiv Shakti Construction — Enquire About Shiv Shakti Towers",
  description:
    "Get in touch with Shiv Shakti Construction. Enquire about 2BHK, 3BHK, and Penthouse units at Shiv Shakti Towers, Bongaigaon.",
  openGraph: {
    title: "Contact Us | Shiv Shakti Construction",
    description:
      "Submit your enquiry or book a site visit for Shiv Shakti Towers.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Contact Hero */}
        <section
          className="relative pt-[120px] sm:pt-[140px] pb-0 px-4 sm:px-6 md:px-12 lg:px-24"
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="label-sm mb-3 sm:mb-4">Get in Touch</p>
            <h1 className="font-heading font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#ffdf7d] leading-[1.05] -ml-[2px] sm:-ml-[3px] md:-ml-[4px]">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Reuse existing contact section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

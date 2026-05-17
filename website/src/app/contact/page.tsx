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
        {/* Unified contact section with customized heading structures */}
        <ContactSection isPage={true} />
      </main>
      <Footer />
    </>
  );
}

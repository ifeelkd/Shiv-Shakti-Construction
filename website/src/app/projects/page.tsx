import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsView from "@/components/ProjectsView";

export const metadata: Metadata = {
  title: "Projects & Developments | Shiv Shakti Construction Bongaigaon",
  description:
    "Explore premier residential and commercial developments by Shiv Shakti Construction in Assam. Discover our flagship landmark Shiv Shakti Towers and upcoming commercial & residential projects.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Developments | Shiv Shakti Construction",
    description:
      "Signature residential towers and future mixed-use developments redefining Bongaigaon's skyline.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ProjectsView />
      </main>
      <Footer />
    </>
  );
}

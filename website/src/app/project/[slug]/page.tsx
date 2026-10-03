import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FlatDetailLayout from "@/components/FlatDetailLayout";
import Footer from "@/components/Footer";
import { getFlatBySlug, getAllFlatSlugs } from "@/data/flats.data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFlatSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const flat = getFlatBySlug(slug);
  if (!flat) return {};

  return {
    title: `${flat.title} Flats | Shiv Shakti Towers — ${flat.subtitle}`,
    description: `Explore ${flat.title} residences at Shiv Shakti Towers, Bongaigaon. ${flat.configuration}, ${flat.area}. Available layout plans, 3D floor maps, room dimensions, and luxury rooftop amenities.`,
    alternates: {
      canonical: `/project/${flat.slug}`,
    },
    openGraph: {
      title: `${flat.title} Flats | Shiv Shakti Towers`,
      description: `${flat.subtitle} at Bongaigaon's premier residential tower. ${flat.configuration}, ${flat.area}.`,
    },
  };
}

export default async function FlatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const flat = getFlatBySlug(slug);

  if (!flat) {
    notFound();
  }

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

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { nearbyPlaces, placeCategories, type NearbyPlace } from "@/data/nearby-places.data";

import { EducationIcon, HealthcareIcon, ShoppingIcon, TransportIcon, LifestyleIcon, LandmarkIcon } from "@/components/ui/Icons";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Education: <EducationIcon size={16} />,
  Healthcare: <HealthcareIcon size={16} />,
  Shopping: <ShoppingIcon size={16} />,
  Transportation: <TransportIcon size={16} />,
  Lifestyle: <LifestyleIcon size={16} />,
  Landmarks: <LandmarkIcon size={16} />,
};

export default function NearbyPlaces() {
  const prefersReduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered: NearbyPlace[] =
    activeCategory === "all"
      ? nearbyPlaces
      : nearbyPlaces.filter((p) => p.category === activeCategory);

  return (
    <section
      id="nearby"
      className="section-padding"
      style={{ backgroundColor: "#131313" }}
      aria-label="Nearby Places & Location Advantage"
    >
      <div className="max-w-[1088px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <p className="label-sm">04 — Location</p>
          <h2 className="heading-section">Nearby Landmarks</h2>
          <div className="divider-gold" />
          <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] max-w-[580px] mt-2">
            Shiv Shakti Towers enjoys a prime location in Chapaguri, Bongaigaon — with schools,
            hospitals, markets, and transport hubs all within easy reach.
          </p>
        </div>

        {/* Category Filter — Horizontal Touch Carousel on Mobile */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 sm:gap-3 mb-6 sm:mb-10 md:mb-12 pb-2 sm:pb-0 snap-x">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-[12px] tracking-[1px] uppercase font-body font-bold transition-all duration-300 border flex items-center gap-2 flex-shrink-0 snap-start min-h-[40px] ${
              activeCategory === "all"
                ? "bg-[#d4af37] text-[#3c2f00] border-[#d4af37]"
                : "bg-transparent text-[#d0c5af] border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] hover:text-[#f2ca50]"
            }`}
          >
            All
          </button>
          {placeCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-[12px] tracking-[1px] uppercase font-body font-bold transition-all duration-300 border flex items-center gap-2 flex-shrink-0 snap-start min-h-[40px] ${
                activeCategory === cat.key
                  ? "bg-[#d4af37] text-[#3c2f00] border-[#d4af37]"
                  : "bg-transparent text-[#d0c5af] border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] hover:text-[#f2ca50]"
              }`}
            >
              <span className="flex-shrink-0" style={{ color: activeCategory === cat.key ? "#3c2f00" : "#F2CA50" }}>
                {CATEGORY_ICONS[cat.key]}
              </span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((place, i) => (
            <motion.div
              key={place.name}
              initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-30px" }}
              className="border border-[rgba(77,70,53,0.3)] p-3 xs:p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-3 hover:border-[#d4af37] transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(242,202,80,0.05)] bg-[#1a1a1a]/0 hover:bg-[#1a1a1a]/40"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body font-bold text-[11px] xs:text-[12px] sm:text-[14px] text-[#e5e2e1] leading-[15px] sm:leading-[20px] mb-0.5 truncate group-hover:text-[#f2ca50] transition-colors">
                  {place.name}
                </p>
                <p className="font-body text-[8px] xs:text-[9px] sm:text-[11px] tracking-[0.5px] uppercase text-[#99907c] leading-none">
                  {place.category}
                </p>
              </div>
              <div className="flex-shrink-0 text-left sm:text-right pt-2 sm:pt-0 border-t border-[rgba(77,70,53,0.15)] sm:border-0 flex items-center justify-between sm:block">
                <p className="font-heading font-normal text-[12px] xs:text-[14px] sm:text-[16px] text-[#f2ca50] leading-none mb-0.5">
                  {place.distanceText}
                </p>
                <p className="font-body text-[8px] xs:text-[9px] sm:text-[10px] text-[#d0c5af] leading-none">
                  {place.travelTimeText}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-[14px] text-[#99907c] py-12">
            No places in this category yet.
          </p>
        )}

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/location"
            className="inline-flex items-center gap-2 border border-[#d4af37] bg-[#141414] hover:bg-[#d4af37] text-[#f2ca50] hover:text-[#1c1400] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] px-8 py-3.5 transition-all uppercase leading-none"
          >
            VIEW FULL LOCATION DETAILS &amp; MAP →
          </Link>
        </div>
      </div>
    </section>
  );
}

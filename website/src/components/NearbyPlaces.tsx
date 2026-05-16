"use client";

import { useState } from "react";
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

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 sm:px-4 py-2 text-[11px] sm:text-[12px] tracking-[1px] uppercase font-body font-bold transition-all duration-300 border flex items-center gap-2 ${
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
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-[12px] tracking-[1px] uppercase font-body font-bold transition-all duration-300 border flex items-center gap-2 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((place, i) => (
            <motion.div
              key={place.name}
              initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-30px" }}
              className="border border-[rgba(77,70,53,0.3)] p-4 sm:p-5 flex items-start justify-between gap-3 hover:border-[#d4af37] transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(242,202,80,0.05)] bg-[#1a1a1a]/0 hover:bg-[#1a1a1a]/40"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body font-bold text-[13px] sm:text-[14px] text-[#e5e2e1] leading-[20px] mb-1 truncate group-hover:text-[#f2ca50] transition-colors">
                  {place.name}
                </p>
                <p className="font-body text-[10px] sm:text-[11px] tracking-[0.8px] uppercase text-[#99907c] leading-[16px]">
                  {place.category}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="font-heading font-normal text-[15px] sm:text-[16px] text-[#f2ca50] leading-[22px]">
                  {place.distanceText}
                </p>
                <p className="font-body text-[10px] text-[#d0c5af] leading-[14px]">
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
      </div>
    </section>
  );
}

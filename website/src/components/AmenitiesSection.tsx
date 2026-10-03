"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { amenitiesData } from "@/data/amenities.data";

function AmenityIcon({ name }: { name: string }) {
  switch (name) {
    case "Fitness":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 7v10M18 7v10M2 10v4M22 10v4M6 12h12" />
        </svg>
      );
    case "Turf":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "PlayArea":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <path d="M6.5 9h11L15 21H9L6.5 9z" />
          <path d="M4 14l3-2" />
          <path d="M20 14l-3-2" />
        </svg>
      );
    case "Community":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "Lobby":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h6M9 13h6M12 17v4" />
        </svg>
      );
    case "Garden":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21V11M8 15a4 4 0 0 1 8 0M12 11c0-4 3-7 7-7-1 5-4 7-7 7zM12 11c0-4-3-7-7-7 1 5 4 7 7 7z" />
        </svg>
      );
    case "Parking":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      );
    case "Elevator":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 8l4-4 4 4M8 16l4 4 4-4M12 4v16" />
        </svg>
      );
    case "Power":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "Water":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case "Security":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      );
    case "FireSafety":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "Waste":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2CA50" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function AmenitiesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="amenities"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#0b0b0b" }}
      aria-label="World-Class Amenities at Shiv Shakti Towers"
    >
      {/* Background Ambience */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16">
          <p className="label-sm">{amenitiesData.sectionLabel}</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-body text-[#f2ca50] text-[13px] sm:text-[14px] tracking-[2px] uppercase font-bold mb-1">
                {amenitiesData.subHeadline}
              </p>
              <h2 className="heading-section text-[26px] xs:text-[32px] sm:text-[38px] md:text-[44px] leading-tight">
                {amenitiesData.mainHeadline}
              </h2>
            </div>
            <p className="font-body text-[#d0c5af] text-[13px] sm:text-[14px] md:text-[15px] max-w-[480px] leading-relaxed">
              {amenitiesData.overview}
            </p>
          </div>
          <div className="divider-gold mt-2" />
        </div>

        {/* --- PART 1: THE FOUR SIGNATURE ROOFTOP EXPERIENCES --- */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-heading text-[18px] sm:text-[22px] tracking-[1px] text-white uppercase">
              The Rooftop Collection
            </h3>
            <span className="text-[11px] sm:text-[12px] tracking-[1.5px] uppercase font-bold text-[#f2ca50] px-2.5 py-0.5 border border-[#f2ca50]/40 rounded-full">
              Sky Amenities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {amenitiesData.rooftopExperience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group relative bg-[#141414] border border-[#d4af37]/30 hover:border-[#f2ca50] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.18)] flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/25 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-[#f2ca50]/60 text-[#f2ca50] font-body text-[9px] sm:text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 font-bold">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#f2ca50]/10 flex items-center justify-center flex-shrink-0">
                      <AmenityIcon name={item.iconName} />
                    </div>
                    <h4 className="font-heading text-[14px] sm:text-[15px] text-[#f2ca50] tracking-wide leading-snug font-semibold">
                      {item.name}
                    </h4>
                  </div>

                  <p className="font-body italic text-[12px] sm:text-[13px] text-white/95 font-medium leading-snug mb-2.5">
                    &ldquo;{item.tagline}&rdquo;
                  </p>

                  <p className="font-body text-[11px] sm:text-[12px] text-[#b0a793] leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Accent */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#f2ca50] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PART 2: EVERYDAY COMFORT & SECURITY (ALL WITH DEDICATED IMAGES) --- */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-[18px] sm:text-[22px] tracking-[1px] text-white uppercase">
                Everyday Comfort &amp; Security
              </h3>
              <p className="font-body text-[12px] text-[#99907c] mt-0.5">
                Engineered for hassle-free living, reliable utilities, and 24×7 peace of mind.
              </p>
            </div>
            <span className="text-[11px] font-body uppercase tracking-wider text-[#f2ca50] border border-[#f2ca50]/30 px-3 py-1 bg-[#141414]">
              9 Core Amenities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {amenitiesData.allAmenities.map((amenity, idx) => (
              <motion.div
                key={amenity.id}
                initial={prefersReduced ? undefined : { opacity: 0, y: 25 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                viewport={{ once: true, margin: "-30px" }}
                className="bg-[#141414] border border-[#d4af37]/25 hover:border-[#f2ca50] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 text-white/90 font-body text-[9px] tracking-[1.2px] uppercase px-2.5 py-0.5">
                    {amenity.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-md bg-[#f2ca50]/10 border border-[#f2ca50]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f2ca50]/20 transition-colors">
                      <AmenityIcon name={amenity.iconName} />
                    </div>
                    <h4 className="font-heading text-[15px] sm:text-[16px] text-[#f2ca50] font-semibold group-hover:text-[#ffdf7d] transition-colors">
                      {amenity.name}
                    </h4>
                  </div>

                  <p className="font-body text-[12px] sm:text-[13px] text-white/95 font-medium mb-1.5 leading-snug">
                    {amenity.tagline}
                  </p>

                  <p className="font-body text-[11px] sm:text-[12px] text-[#8e8574] leading-relaxed mt-auto">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PART 3: CLOSING STATEMENT & CTA --- */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 p-6 sm:p-10 border border-[#d4af37]/40 bg-gradient-to-r from-[#17150f] via-[#1f1a0e] to-[#17150f] text-center flex flex-col items-center gap-4 relative overflow-hidden"
        >
          <div className="w-12 h-1 bg-[#f2ca50] mb-1" />
          <p className="font-heading text-[16px] sm:text-[19px] md:text-[21px] text-[#ffdf7d] max-w-[800px] leading-relaxed">
            &ldquo;{amenitiesData.closingQuote}&rdquo;
          </p>
          <p className="font-body text-[12px] sm:text-[13px] text-[#b0a793] max-w-[600px]">
            Experience elevated living in North Bongaigaon. Book your site consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/project"
              className="border border-[#d4af37] bg-[#d4af37] text-[#1c1400] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] px-8 py-3.5 hover:bg-[#ffdf7d] transition-colors uppercase leading-none"
            >
              VIEW FULL PROJECT DETAILS →
            </Link>
            <Link
              href="/contact"
              className="border border-[#d4af37]/60 text-[#f2ca50] hover:border-[#f2ca50] hover:text-white font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] px-8 py-3.5 transition-colors uppercase leading-none"
            >
              ENQUIRE / BOOK VISIT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

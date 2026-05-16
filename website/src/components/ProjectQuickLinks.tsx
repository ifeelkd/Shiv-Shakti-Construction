"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { HomeIcon, TowerIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";

const quickLinks = [
  {
    label: "2BHK Flats",
    description: "Smart living starting at 1,150 sq.ft.",
    href: "/flats/2bhk",
    icon: <HomeIcon size={32} />,
  },
  {
    label: "3BHK Flats",
    description: "Premium units with 1,650 sq.ft. of space.",
    href: "/flats/3bhk",
    icon: <TowerIcon size={32} />,
  },
  {
    label: "Location",
    description: "Prime Chapaguri location with key landmarks nearby.",
    href: "/location",
    icon: <MapPinIcon size={32} />,
  },
  {
    label: "Contact Us",
    description: "Book a site visit or request project details.",
    href: "/contact",
    icon: <PhoneIcon size={32} />,
  },
];

export default function ProjectQuickLinks() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#131313" }}
      aria-label="Explore Shiv Shakti Towers"
    >
      <div className="max-w-[1088px] mx-auto">
        <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16">
          <p className="label-sm">Explore</p>
          <h2 className="heading-section">Discover More</h2>
          <div className="divider-gold" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {quickLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={link.href}
                className="group block border border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] p-6 sm:p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] h-full relative overflow-hidden bg-[#1a1a1a]/0 hover:bg-[#1a1a1a]/40"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 100%)",
                  }}
                />
                <div className="relative z-10">
                  <span className="text-[28px] sm:text-[32px] mb-4 sm:mb-5 block" aria-hidden="true">
                    {link.icon}
                  </span>
                  <h3 className="font-heading text-[18px] sm:text-[20px] text-[#f2ca50] leading-[28px] mb-2 group-hover:text-[#ffdf7d] transition-colors">
                    {link.label}
                  </h3>
                  <p className="font-body text-[12px] sm:text-[13px] text-[#99907c] leading-[20px] mb-4 sm:mb-6">
                    {link.description}
                  </p>
                  <span className="font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] uppercase text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors flex items-center gap-2">
                    EXPLORE 
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projectSpecs } from "@/data/project.data";
import ReraBadge from "@/components/ui/ReraBadge";

export default function FeaturedProject() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="real-estate"
      className="section-padding"
      style={{ backgroundColor: "#0e0e0e" }}
      aria-label="Featured Project — Shiv Shakti Towers"
    >
      <div className="max-w-[1088px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16">
          <p className="label-sm">02 — Featured Project</p>
          <h2 className="heading-section">Shiv Shakti Towers</h2>
          <div className="divider-gold" />
        </div>

        <div className="grid grid-cols-12 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Image Column - spans 7 cols */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: -40 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 relative"
          >
            <Link href="/project" className="group block relative aspect-[4/5] sm:aspect-[615/700] w-full overflow-hidden cursor-pointer">
              <Image
                src="/images/Featured Building.png"
                alt="Shiv Shakti Towers — Premium residential tower rising above Bongaigaon skyline"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Small Floating RERA Badge on Image */}
              <div className="absolute top-4 left-4 z-20">
                <ReraBadge size="floating" />
              </div>
            </Link>

            {/* Specs Card - Responsive overlay (inline/bottom-right on desktop, structured box on mobile) */}
            <div className="relative md:absolute mt-3 md:mt-0 md:-bottom-8 md:-right-6 lg:-bottom-10 lg:-right-10 bg-[#131313] p-4 sm:p-6 md:p-8 lg:p-10 z-20 border border-[rgba(77,70,53,0.4)] md:border-none w-full md:w-auto shadow-lg">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:w-[200px] lg:w-[240px]">
                {projectSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between pb-1.5 sm:pb-2"
                    style={{ borderBottom: "1px solid rgba(77,70,53,0.3)" }}
                  >
                    <span className="font-body font-normal text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.8px] uppercase text-[#99907c] leading-none">
                      {spec.label}
                    </span>
                    <span className="font-heading font-normal text-[13px] sm:text-[16px] md:text-[18px] text-[#f2ca50] leading-none font-bold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Column - spans 5 cols */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: 40 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 lg:pl-8 flex flex-col gap-4 mt-6 md:mt-0"
          >
            {/* RERA Certified Official Full-Width Banner filling the blank area above text */}
            <ReraBadge size="banner" className="mb-1" />

            <p className="font-body font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-[#d0c5af] leading-[22px] sm:leading-[25px] md:leading-[26px]">
              A premier commercial and residential landmark redefining the skyline of North Bongaigaon with superior engineering and modern design.
            </p>

            {/* Key Points */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
                <span className="font-heading font-bold text-[13px] sm:text-[15px] text-[#ffdf7d]">
                  G+6 Floor
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
                <span className="font-heading font-bold text-[13px] sm:text-[15px] text-[#ffdf7d]">
                  Completion by 2028
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link
                href="/project"
                className="border border-[#d4af37] bg-[#d4af37] px-6 py-3.5 sm:py-4 flex items-center justify-center text-center hover:bg-[#ffdf7d] active:bg-[#f2ca50] transition-all duration-300 group min-h-[44px]"
              >
                <span className="font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] text-[#1c1400] leading-none uppercase">
                  EXPLORE ALL RESIDENCES &amp; PLANS
                </span>
              </Link>
              <Link href="/contact" className="border border-[rgba(77,70,53,0.6)] hover:border-[#f2ca50] px-6 py-3.5 sm:py-4 flex items-center justify-center text-center transition-all duration-300 min-h-[44px]">
                <span className="font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] text-[#f2ca50] hover:text-white leading-none uppercase">
                  ENQUIRE NOW
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

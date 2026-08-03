"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projectSpecs } from "@/data/project.data";

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

        <div className="grid grid-cols-12 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Image Column - spans 7 cols */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: -40 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 relative"
          >
            <Link href="#legacy-assets" className="group block relative aspect-[4/5] sm:aspect-[615/700] w-full overflow-hidden cursor-pointer">
              <Image
                src="/images/Featured Building.png"
                alt="Shiv Shakti Towers — Premium residential tower rising above Bongaigaon skyline"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 60vw, 58vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </Link>

            {/* Specs Card - overlaying bottom right */}
            <div className="absolute -bottom-3 -right-3 xs:-bottom-5 -right-3 xs:-right-5 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 lg:-bottom-12 lg:-right-12 bg-[#131313] p-2.5 xs:p-3 sm:p-6 md:p-8 lg:p-12 z-20">
              <div className="flex flex-col gap-1 xs:gap-1.5 sm:gap-3 md:gap-4 w-[120px] xs:w-[150px] sm:w-[180px] md:w-[220px] lg:w-[256px]">
                {projectSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between pb-1 sm:pb-2"
                    style={{ borderBottom: "1px solid rgba(77,70,53,0.3)" }}
                  >
                    <span className="font-body font-normal text-[7px] xs:text-[8px] sm:text-[10px] tracking-[0.5px] uppercase text-[#99907c] leading-none">
                      {spec.label}
                    </span>
                    <span className="font-heading font-normal text-[8px] xs:text-[10px] sm:text-[16px] md:text-[20px] text-[#f2ca50] leading-none">
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
            className="col-span-12 md:col-span-5 lg:pl-12 flex flex-col gap-1.5 xs:gap-2.5 sm:gap-4 mt-8 md:mt-0"
          >
            <p className="font-body font-normal text-[9px] xs:text-[10px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#d0c5af] leading-[13px] xs:leading-[15px] sm:leading-[24px] md:leading-[26px] pt-1 sm:pt-4 max-w-[420px]">
              A premier commercial and residential landmark redefining the skyline of North Bongaigaon with superior engineering and modern design.
            </p>

            {/* Key Points */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
                <span className="font-heading font-bold text-[12px] xs:text-[13px] sm:text-[15px] text-[#ffdf7d]">
                  G+6 Floor
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
                <span className="font-heading font-bold text-[12px] xs:text-[13px] sm:text-[15px] text-[#ffdf7d]">
                  2028 Arrival
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-6 pt-2 xs:pt-4 sm:pt-8">
              <a
                href="#contact"
                className="border border-[#d4af37] px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-5 flex items-center justify-center text-center hover:bg-[#d4af37] hover:text-[#3c2f00] active:bg-[#f2ca50] transition-all duration-300 group"
              >
                <span className="font-body font-bold text-[9px] xs:text-[10px] sm:text-[14px] tracking-[0.5px] sm:tracking-[1.6px] text-[#f2ca50] group-hover:text-[#3c2f00] leading-none">
                  ENQUIRE NOW
                </span>
              </a>
              <Link href="#legacy-assets" className="flex items-center justify-center py-1 sm:py-2">
                <span className="font-body font-bold text-[8px] xs:text-[9px] sm:text-[12px] tracking-[0.5px] sm:tracking-[1.2px] text-[#d0c5af] hover:text-[#f2ca50] transition-colors cursor-pointer border-b border-[#d0c5af]/30 hover:border-[#f2ca50] pb-[2px] leading-none">
                  VIEW PLANS
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

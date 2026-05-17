"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { FlatType } from "@/data/flats.data";

interface FlatDetailLayoutProps {
  flat: FlatType;
}

export default function FlatDetailLayout({ flat }: FlatDetailLayoutProps) {
  const prefersReduced = useReducedMotion();

  const anim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          whileInView: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true },
        };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative pt-[90px] md:pt-[140px] pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24"
        style={{ backgroundColor: "#0e0e0e" }}
      >
        {/* Subtle gold gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 50%, rgba(212,175,55,0.03) 100%)",
          }}
        />

        <div className="relative max-w-[1088px] mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex items-center gap-2 font-body text-[11px] sm:text-[12px] tracking-[1px] uppercase text-[#99907c]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#f2ca50] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="mx-1 text-[#4d4635]">/</span>
              </li>
              <li>
                <Link
                  href="/#landmarks"
                  className="hover:text-[#f2ca50] transition-colors"
                >
                  Flats
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="mx-1 text-[#4d4635]">/</span>
              </li>
              <li className="text-[#f2ca50]" aria-current="page">
                {flat.title}
              </li>
            </ol>
          </nav>

          {/* Title Area */}
          <motion.div {...anim({ y: 20 }, 0.1)}>
            <p className="label-sm mb-3">{flat.subtitle}</p>
            <h1 className="font-heading font-bold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#ffdf7d] leading-[1.05] mb-4">
              {flat.title}
            </h1>
            <p className="font-body text-[16px] md:text-[18px] text-[#d0c5af] leading-[26px] max-w-[560px]">
              {flat.configuration} · {flat.area}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: "#131313" }}
        aria-label="Floor Plan"
      >
        <div className="max-w-[1088px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Floor Plan Image */}
            <motion.div {...anim({ x: -30 }, 0.1)}>
              <p className="label-sm mb-4 sm:mb-6">Floor Plan</p>
              <div className="relative aspect-square w-full border border-[rgba(77,70,53,0.3)] overflow-hidden bg-[#0e0e0e]">
                <Image
                  src={`/images/floorplan-${flat.slug}.png`}
                  alt={`${flat.title} floor plan — Shiv Shakti Towers`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div {...anim({ x: 30 }, 0.2)}>
              <p className="label-sm mb-4 sm:mb-6">Specifications</p>
              <div className="flex flex-col gap-0">
                {flat.specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-4 sm:py-5"
                    style={{
                      borderBottom:
                        i < flat.specifications.length - 1
                          ? "1px solid rgba(77,70,53,0.3)"
                          : "none",
                    }}
                  >
                    <span className="font-body text-[13px] sm:text-[14px] text-[#99907c] uppercase tracking-[0.8px]">
                      {spec.label}
                    </span>
                    <span className="font-heading text-[16px] sm:text-[18px] text-[#f2ca50] leading-[24px] text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: "#1c1b1b" }}
        aria-label="Amenities"
      >
        <div className="max-w-[1088px] mx-auto">
          <motion.div {...anim({ y: 20 }, 0.1)}>
            <p className="label-sm mb-3 sm:mb-4">Amenities & Highlights</p>
            <h2 className="heading-section mb-4">What&apos;s Included</h2>
            <div className="divider-gold mb-10 sm:mb-12" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {flat.amenities.map((amenity, i) => (
              <motion.div
                key={amenity}
                {...anim({ y: 20 }, 0.05 * i)}
                className="border border-[rgba(77,70,53,0.3)] px-3.5 py-4 sm:px-6 sm:py-5 hover:border-[#d4af37] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.05)] bg-[#131313]/30"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#d4af37] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                    aria-hidden="true"
                  />
                  <span className="font-body text-[11px] sm:text-[13px] md:text-[14px] text-[#e5e2e1] leading-[1.3] sm:leading-[20px]">
                    {amenity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, #131313 40%, rgba(212,175,55,0.08) 100%)",
        }}
        aria-label="Enquiry"
      >
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div {...anim({ y: 20 }, 0.1)}>
            <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#e5e2e1] leading-[1.1] mb-4 sm:mb-6">
              Interested in {flat.title}?
            </h2>
            <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] mb-8 sm:mb-10">
              Schedule a site visit or request the technical dossier for this
              unit type. Our team responds within 48 business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#d4af37] hover:bg-[#f2ca50] active:bg-[#e6be3f] transition-colors duration-300 px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto"
              >
                <span className="font-body font-bold text-[13px] sm:text-[14px] tracking-[1.4px] text-[#3c2f00] uppercase">
                  {flat.ctaLabel}
                </span>
              </Link>
              <Link
                href="/#landmarks"
                className="border border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] transition-colors duration-300 px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto text-center"
              >
                <span className="font-body font-bold text-[12px] sm:text-[13px] tracking-[1.2px] text-[#d0c5af] uppercase hover:text-[#f2ca50] transition-colors">
                  VIEW ALL FLATS
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

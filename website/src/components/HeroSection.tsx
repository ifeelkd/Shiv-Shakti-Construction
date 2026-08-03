"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroStats } from "@/data/project.data";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const anim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          animate: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="hero"
      className="relative h-[65vh] md:min-h-[calc(100svh-124px)] mt-[67px] md:mt-[124px] flex items-center overflow-hidden"
      style={{ backgroundColor: "#131313" }}
      aria-label="Hero — Shiv Shakti Construction"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero Building.png"
          alt="Shiv Shakti Construction flagship building at sunset"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #131313 0%, rgba(19,19,19,0.6) 40%, rgba(19,19,19,0) 100%)",
          }}
        />
        {/* Bottom gradient for stats readability */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 md:hidden"
          style={{
            background: "linear-gradient(to top, #131313 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24">
        <div className="max-w-[896px]">
          {/* Subtitle */}
          <motion.p
            {...anim({ y: 20 }, 0.2)}
            className="font-body font-normal text-[10px] sm:text-[12px] md:text-[14px] tracking-[2px] uppercase text-[#e5e2e1] leading-[20px] mb-3 sm:mb-6 md:mb-8"
          >
            Established 2025 — BONGAIGAON, India
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            {...anim({ y: 30 }, 0.4)}
            className="font-heading font-bold text-[30px] sm:text-[44px] md:text-[72px] lg:text-[88px] xl:text-[96px] text-[#ffdf7d] leading-[1.1] mb-4 sm:mb-6 md:mb-8"
          >
            SHIV SHAKTI
            <br />
            CONSTRUCTION
          </motion.h1>

          {/* Description */}
          <motion.p
            {...anim({ y: 20 }, 0.6)}
            className="font-body font-light text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#d0c5af] leading-[22px] sm:leading-[26px] md:leading-[28px] max-w-[576px] mb-6 sm:mb-8 md:mb-12"
          >
            Creating iconic spaces that combine timeless architecture, superior craftsmanship, and modern living.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...anim({ y: 20 }, 0.8)}
            className="flex items-center gap-0"
          >
            <a
              href="#real-estate"
              className="group bg-[#d4af37] hover:bg-[#f2ca50] active:bg-[#e6be3f] transition-colors duration-300 px-5 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 flex items-center gap-3"
            >
              <span className="font-body font-bold text-[11px] sm:text-[12px] md:text-[14px] tracking-[1.4px] text-[#3c2f00] text-center whitespace-nowrap">
                EXPLORE THE TOWER
              </span>
              <span className="text-[#3c2f00] transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <div className="ml-8 w-[128px] h-[0.5px] bg-[#d4af37] hidden md:block" />
          </motion.div>

          {/* Mobile/Tablet Stats */}
          <motion.div
            {...anim({ y: 20 }, 1.0)}
            className="flex md:hidden flex-col sm:flex-row justify-between items-start gap-4 w-full mt-10 pt-6 border-t border-[#d4af37]/20"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex-1 text-left">
                <p className="font-heading font-bold text-[15px] sm:text-[18px] text-[#d4af37] leading-[1.2]">
                  {stat.value}
                </p>
                <p className="font-body font-normal text-[8px] sm:text-[9px] tracking-[0.8px] uppercase text-[#d0c5af] leading-[12px] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats - Bottom Right (Desktop Only) */}
      <motion.div
        {...anim({ x: 20 }, 1.0)}
        className="hidden md:flex absolute bottom-8 sm:bottom-12 right-4 sm:right-6 md:right-12 flex flex-col items-end gap-3 sm:gap-4 z-10 max-w-[340px]"
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="text-right">
            <p className="font-heading font-bold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-[#d4af37] leading-[1.2]">
              {stat.value}
            </p>
            <p className="font-body font-normal text-[9px] sm:text-[10px] tracking-[1px] uppercase text-[#d0c5af] leading-[15px] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

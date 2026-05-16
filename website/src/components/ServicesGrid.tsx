"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services.data";

export default function ServicesGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: "#131313" }}
      aria-label="Our Architectural Disciplines"
    >
      <div className="max-w-[1088px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="label-sm">01 — Services</p>
          <h2 className="heading-section">Architectural Disciplines</h2>
          <div className="divider-gold" />
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 p-[3px] relative"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(212,175,55,0.81))",
            border: "6px solid #d4af37",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="border border-[#f2ca50] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col relative min-h-[260px] sm:min-h-[300px] md:min-h-[333px] group/card transition-all duration-500 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:z-20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            >
              {/* Icon */}
              <div className="w-6 h-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative flex-shrink-0">
                <Image
                  src={service.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#f2ca50] leading-[28px] md:leading-[32px] mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body font-normal text-[13px] md:text-[14px] text-[#d0c5af] leading-[21px] md:leading-[22.75px] mb-6 sm:mb-8">
                {service.description}
              </p>

              {/* CTA Label */}
              <Link
                href={service.href}
                className="font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] text-[#e5e2e1] mt-auto hover:text-[#f2ca50] transition-colors flex items-center gap-2 group"
              >
                {service.cta}
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

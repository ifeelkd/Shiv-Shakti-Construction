"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/data/process.data";

export default function ExecutionProtocol() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="process"
      className="section-padding"
      style={{ backgroundColor: "#1c1b1b" }}
      aria-label="Our Execution Process"
    >
      <div className="max-w-[1088px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="label-sm">06 — Process</p>
          <h2 className="heading-section">Execution Protocol</h2>
          <div className="divider-gold" />
        </div>

        {/* Cards — Desktop 4-Col Grid / Mobile 2x2 Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? undefined : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-60px" }}
              className="p-3.5 xs:p-5 sm:p-8 flex flex-col gap-2 sm:gap-5 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(242,202,80,0.15)] border border-transparent hover:border-[#f2ca50]/20 relative"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(25,28,30,0) 0%, rgba(242,202,80,0.1) 100%)",
              }}
            >
              {/* Step Number */}
              <p className="font-heading font-normal text-[24px] xs:text-[32px] sm:text-[40px] lg:text-[48px] text-[#f2ca50]/60 group-hover:text-[#f2ca50] transition-colors duration-500 leading-[1]">
                {step.number}
              </p>

              {/* Step Title */}
              <h3 className="font-heading font-normal text-[11px] xs:text-[13px] sm:text-[16px] lg:text-[18px] tracking-[0.9px] uppercase text-[#f2ca50]/80 group-hover:text-[#f2ca50] transition-colors duration-500 leading-snug lg:leading-[28px]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-body font-normal text-[9px] xs:text-[11px] sm:text-[13px] lg:text-[14px] text-[#d0c5af] group-hover:text-white transition-colors duration-500 leading-[14px] xs:leading-[18px] sm:leading-[24px] lg:leading-[28px]">
                {step.description}
              </p>

              {/* Decorative accent on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f2ca50] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? undefined : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-60px" }}
              className="p-4 sm:p-5 flex flex-col gap-4 sm:gap-5"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(25,28,30,0) 0%, rgba(242,202,80,0.72) 100%)",
              }}
            >
              {/* Step Number */}
              <p className="font-heading font-normal text-[36px] sm:text-[40px] md:text-[48px] text-[#f2ca50] leading-[1]">
                {step.number}
              </p>

              {/* Step Title */}
              <h3 className="font-heading font-normal text-[15px] sm:text-[16px] md:text-[18px] tracking-[0.9px] uppercase text-[#f2ca50] leading-[28px]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-body font-normal text-[13px] md:text-[14px] text-white leading-[24px] sm:leading-[26px] md:leading-[28px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

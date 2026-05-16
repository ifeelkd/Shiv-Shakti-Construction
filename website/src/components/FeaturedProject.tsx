"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projectSpecs } from "@/data/project.data";

export default function FeaturedProject() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="real-estate"
      className="py-12 sm:py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: "#0e0e0e" }}
      aria-label="Featured Project — Shiv Shakti Towers"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Column - spans 7 cols */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: -40 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] sm:aspect-[615/700] w-full overflow-hidden">
              <Image
                src="/images/towers-main.png"
                alt="Shiv Shakti Towers — Premium residential tower rising above Bongaigaon skyline"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw"
                loading="lazy"
              />
            </div>

            {/* Specs Card - overlaying bottom right */}
            <div className="relative lg:absolute bottom-0 right-0 lg:-bottom-12 lg:-right-12 bg-[#131313] p-6 sm:p-8 md:p-10 lg:p-12 mt-0 lg:mt-0">
              <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-[220px] md:w-[256px]">
                {projectSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-end justify-between pb-2"
                    style={{ borderBottom: "1px solid rgba(77,70,53,0.3)" }}
                  >
                    <span className="font-body font-normal text-[10px] tracking-[1px] uppercase text-[#d0c5af] leading-[15px]">
                      {spec.label}
                    </span>
                    <span className="font-heading font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#f2ca50] leading-[28px]">
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
            className="lg:col-span-5 lg:pl-12 flex flex-col gap-3 sm:gap-4 order-1 lg:order-2"
          >
            <p className="label-sm">Featured Project</p>

            <h2 className="font-heading font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] text-[#e5e2e1] leading-[1.05]">
              Shiv Shakti
              <br />
              Towers
            </h2>

            <p className="font-body font-normal text-[14px] md:text-[15px] lg:text-[16px] text-[#d0c5af] leading-[24px] md:leading-[26px] pt-2 sm:pt-4 max-w-[420px]">
              A masterclass in vertical living. Designed with a skeletal frame of
              reinforced titanium-infused concrete, the Towers redefine the skyline
              of Bongaigaon. Each unit features unobstructed 270-degree views of the
              Bagheswari Hills.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:gap-6 pt-6 sm:pt-8">
              <a
                href="#contact"
                className="border border-[#d4af37] px-4 sm:px-6 py-4 sm:py-5 text-center hover:bg-[#d4af37] hover:text-[#3c2f00] active:bg-[#f2ca50] transition-all duration-300 group"
              >
                <span className="font-body font-bold text-[13px] sm:text-[14px] md:text-[16px] tracking-[1.6px] text-[#f2ca50] group-hover:text-[#3c2f00]">
                  REQUEST TECHNICAL DOSSIER
                </span>
              </a>
              <a href="#landmarks" className="text-center py-2">
                <span className="font-body font-normal text-[12px] tracking-[1.2px] text-[#d0c5af] underline hover:text-[#f2ca50] transition-colors">
                  VIEW FLOOR PLANS
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

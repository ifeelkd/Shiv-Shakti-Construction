"use client";

import { motion, useReducedMotion } from "framer-motion";
import { partners, testimonial } from "@/data/project.data";

export default function PartnersTestimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="partners"
      className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-12 sm:py-16 md:py-24 lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.38) 0%, rgba(242,202,80,0.38) 100%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
      aria-label="Partners and Testimonials"
    >
      <div className="max-w-[896px] mx-auto flex flex-col items-center">
        <p className="label-sm text-center mb-8 sm:mb-10 md:mb-12">Industry Affiliations</p>

        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0 }}
          whileInView={prefersReduced ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mb-8 sm:mb-10 md:mb-12 opacity-40"
        >
          {partners.map((p) => (
            <span key={p.name} className="font-heading font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#e5e2e1] leading-[32px]">
              {p.name}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative pt-10 sm:pt-12"
        >
          <div className="absolute top-0 left-0 w-[28px] sm:w-[38px] text-[#d0c5af] opacity-40" aria-hidden="true">
            <svg viewBox="0 0 39 27" fill="currentColor"><path d="M0 26.5V17C0 12.3.9 8.5 2.8 5.5 4.6 2.6 7.7.6 12-.5L13.8 3.7c-2.5.9-4.3 2.3-5.5 4.1C7.1 9.7 6.5 11.8 6.5 14.3H13V26.5H0zM20.8 26.5V17c0-4.8.9-8.6 2.7-11.5C25.4 2.6 28.5.6 32.8-.5l1.8 4.2c-2.5.9-4.3 2.3-5.5 4.1-1.2 1.9-1.8 4-1.8 6.5h6.4V26.5H20.8z"/></svg>
          </div>
          <blockquote className="font-heading text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] text-[#e5e2e1] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] text-center mb-8 sm:mb-10 md:mb-12 italic">
            {testimonial.quote}
          </blockquote>
          <div className="text-center">
            <p className="font-body font-bold text-[11px] sm:text-[12px] md:text-[14px] tracking-[1.4px] uppercase text-[#f2ca50] leading-[20px] mb-1">{testimonial.author}</p>
            <p className="font-body font-normal text-[9px] sm:text-[10px] tracking-[1px] uppercase text-[#d0c5af] leading-[15px]">{testimonial.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

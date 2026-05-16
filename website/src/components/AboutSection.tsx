"use client";

import { motion, useReducedMotion } from "framer-motion";

const milestones = [
  { value: "25+", label: "Years of Heritage" },
  { value: "142", label: "Completed Projects" },
  { value: "500+", label: "Happy Families" },
  { value: "1M+", label: "Sq.ft. Delivered" },
];

export default function AboutSection() {
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
    <section
      id="about"
      className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-28 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, #131313 0%, rgba(212,175,55,0.06) 50%, #131313 100%)",
      }}
      aria-label="About Shiv Shakti Construction"
    >
      <div className="max-w-[1088px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Column — Story */}
          <motion.div {...anim({ x: -30 }, 0.1)}>
            <p className="label-sm mb-3 sm:mb-4">Our Story</p>
            <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#e5e2e1] leading-[1.1] mb-6 sm:mb-8">
              Building Trust,{" "}
              <span className="text-[#f2ca50]">One Structure at a Time.</span>
            </h2>
            <div className="flex flex-col gap-4 sm:gap-5">
              <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] md:leading-[26px]">
                Founded over two decades ago, Shiv Shakti Construction has grown from a
                local marble and materials enterprise into one of Bongaigaon&apos;s most
                trusted names in construction and real estate development.
              </p>
              <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] md:leading-[26px]">
                Our flagship project — <strong className="text-[#f2ca50]">Shiv Shakti Towers</strong> — represents
                the pinnacle of our commitment to quality, precision, and community-first
                development. Every unit is built with materials sourced from our own
                trusted supply chain.
              </p>
              <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] md:leading-[26px]">
                From premium Italian marble sourcing to reinforced structural engineering,
                we bring vertical integration to residential construction — ensuring
                quality at every stage from foundation to finishing.
              </p>
            </div>

            {/* Social Link */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <a
                href="https://www.instagram.com/shiv_shakti_marbles_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] px-5 py-3 transition-colors duration-300 group"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#d4af37]"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <span className="font-body text-[12px] tracking-[1px] uppercase text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                  Follow on Instagram
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Stats */}
          <motion.div {...anim({ x: 30 }, 0.2)}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {milestones.map((stat, i) => (
                <div
                  key={stat.label}
                  className="border border-[rgba(77,70,53,0.3)] p-6 sm:p-8 text-center"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, transparent 100%)"
                        : "transparent",
                  }}
                >
                  <p className="font-heading font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#d4af37] leading-[1.1] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-[10px] sm:text-[11px] tracking-[1px] uppercase text-[#99907c]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mt-6 sm:mt-8 border border-[rgba(77,70,53,0.3)] p-6 sm:p-8">
              <p className="label-sm mb-4">Our Values</p>
              <div className="flex flex-col gap-3">
                {[
                  "Uncompromising Quality in Every Detail",
                  "Community-Focused Development",
                  "Transparent Pricing & Timelines",
                  "Sustainable Building Practices",
                ].map((value) => (
                  <div key={value} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <p className="font-body text-[13px] sm:text-[14px] text-[#d0c5af] leading-[22px]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

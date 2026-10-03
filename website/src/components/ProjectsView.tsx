"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ReraBadge from "@/components/ui/ReraBadge";
import { currentProject, contactInfo } from "@/data/project.data";
import { flatTypes } from "@/data/flats.data";

export default function ProjectsView() {
  const prefersReduced = useReducedMotion();
  const residentialFlats = flatTypes.filter((f) => f.slug !== "penthouse");

  const enterAnim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          animate: { opacity: 1, y: 0, x: 0, scale: 1 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const scrollAnim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          whileInView: { opacity: 1, y: 0, x: 0, scale: 1 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
          viewport: { once: true, margin: "-40px" },
        };

  return (
    <motion.div
      initial={prefersReduced ? undefined : { opacity: 0 }}
      animate={prefersReduced ? undefined : { opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0e0e0e] text-[#e5e2e1] min-h-screen"
    >
      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 border-b border-[rgba(77,70,53,0.3)] overflow-hidden">
        {/* Subtle Background Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 20%, rgba(212,175,55,0.2) 0%, rgba(14,14,14,0.98) 70%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            {...enterAnim({ y: 15 }, 0.05)}
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 font-body text-[11px] sm:text-[12px] tracking-[1.5px] uppercase text-[#99907c]"
          >
            <Link href="/" className="hover:text-[#f2ca50] transition-colors">
              Home
            </Link>
            <span className="text-[#555]">/</span>
            <span className="text-[#f2ca50] font-semibold" aria-current="page">
              Projects
            </span>
          </motion.nav>

          <motion.div
            {...enterAnim({ y: 25 }, 0.12)}
            className="max-w-[850px]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-4">
              <span className="font-body text-[11px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#f2ca50]">
                Portfolio &amp; Developments
              </span>
            </div>
            <h1 className="font-heading font-black text-[32px] xs:text-[40px] sm:text-[50px] md:text-[58px] text-white leading-[1.08] mb-5 tracking-tight">
              OUR SIGNATURE <br className="hidden sm:block" />
              <span className="text-[#f2ca50]">DEVELOPMENTS</span>
            </h1>
            <p className="font-body text-[14px] sm:text-[16px] text-[#d0c5af] leading-relaxed max-w-[680px]">
              Explore our ongoing architectural landmarks and upcoming mixed-use developments. 
              Engineered with earthquake-resistant compliance, certified IS 456 materials, and premium lifestyle amenities in Lower Assam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS CARD GRID --- */}
      <section className="section-padding px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">

          {/* CARD 1: SHIV SHAKTI TOWERS (FLAGSHIP ACTIVE PROJECT) */}
          <motion.article
            {...enterAnim({ y: 35 }, 0.2)}
            className="border border-[#d4af37]/40 bg-gradient-to-b from-[#141414] to-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500 hover:border-[#f2ca50]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Visual Image Banner */}
              <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto min-h-[320px] sm:min-h-[420px] overflow-hidden group">
                <Image
                  src={currentProject.featuredImage}
                  alt={currentProject.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Floating Status & RERA badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <span className="bg-[#d4af37] text-[#1c1400] font-body font-bold text-[10px] sm:text-[11px] tracking-[1.5px] uppercase px-3 py-1 shadow-md">
                    FLAGSHIP DEVELOPMENT
                  </span>
                  <ReraBadge size="floating" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                  <span className="text-[#f2ca50] font-body font-bold text-[11px] sm:text-[12px] tracking-[1.5px] uppercase block mb-1">
                    {currentProject.location}
                  </span>
                  <h3 className="font-heading font-black text-[24px] sm:text-[32px] text-white leading-tight">
                    {currentProject.name}
                  </h3>
                </div>
              </div>

              {/* Project Details & Configuration */}
              <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                    <span className="text-[#2ecc71] font-body font-bold text-[11px] sm:text-[12px] tracking-[1.5px] uppercase flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
                      {currentProject.status} · Completion by 2028
                    </span>
                    <span className="font-body text-[11px] sm:text-[12px] text-[#99907c] uppercase tracking-wider">
                      RERA BO 212 of 2026-2027
                    </span>
                  </div>

                  <p className="font-body text-[13px] sm:text-[15px] text-[#d0c5af] leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-3 border-y border-[rgba(77,70,53,0.3)] mb-6 text-center">
                    {currentProject.specs.map((spec) => (
                      <div key={spec.label} className="bg-[#181818] p-2.5 border border-white/5">
                        <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-[1px] text-[#99907c] mb-1">
                          {spec.label}
                        </p>
                        <p className="font-heading text-[12px] sm:text-[14px] font-bold text-[#f2ca50]">
                          {spec.label === "COMPLETION" ? "2028" : spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Available Units Fast-Links */}
                  <div className="mb-6">
                    <p className="font-body text-[11px] uppercase tracking-[1.2px] text-[#99907c] font-semibold mb-2.5">
                      Available Configurations:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {residentialFlats.map((flat) => (
                        <Link
                          key={flat.slug}
                          href={`/project/${flat.slug}`}
                          className="p-3 bg-[#191712] border border-[rgba(212,175,55,0.3)] hover:border-[#f2ca50] transition-colors flex items-center justify-between group/flat"
                        >
                          <div>
                            <span className="font-heading font-bold text-[14px] text-white group-hover/flat:text-[#f2ca50] transition-colors block">
                              {flat.title} Residences
                            </span>
                            <span className="font-body text-[11px] text-[#99907c]">
                              {flat.area}
                            </span>
                          </div>
                          <span className="text-[#f2ca50] text-[14px] transform group-hover/flat:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                  <Link
                    href="/project"
                    className="flex-1 bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] py-4 px-6 text-center uppercase transition-all shadow-[0_5px_20px_rgba(212,175,55,0.25)]"
                  >
                    EXPLORE TOWER &amp; 3D PLANS →
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-[#d4af37]/60 hover:border-[#f2ca50] text-[#f2ca50] hover:text-white font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] py-4 px-6 text-center uppercase transition-all"
                  >
                    ENQUIRE / BOOK VISIT
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CARD 2: UPCOMING PROJECT (COMING SOON ANTICIPATION TEASER) */}
          <motion.article
            {...scrollAnim({ y: 35 }, 0.15)}
            className="border border-dashed border-[#d4af37]/40 bg-[#12110e]/80 p-6 sm:p-10 md:p-12 relative overflow-hidden group"
          >
            {/* Corner Ambient Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[900px]">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#f2ca50]/15 text-[#f2ca50] border border-[#f2ca50]/40 font-body font-bold text-[10px] sm:text-[11px] tracking-[1.5px] uppercase px-3 py-1">
                  COMING SOON · UPCOMING DEVELOPMENT
                </span>
                <span className="font-body text-[11px] text-[#99907c] uppercase tracking-wider">
                  Architectural Planning &amp; Approvals
                </span>
              </div>

              <h3 className="font-heading font-black text-[24px] sm:text-[32px] md:text-[36px] text-white leading-tight mb-4">
                Shiv Shakti Commercial Hub &amp; Phase II Residences
              </h3>

              <p className="font-body text-[13px] sm:text-[15px] text-[#d0c5af] leading-relaxed mb-6">
                Expanding our commitment to transformative urban living in Bongaigaon. 
                Currently in advanced architectural planning, our upcoming development will introduce 
                high-visibility commercial retail arcades, executive corporate spaces, and next-generation luxury residences designed with sustainable engineering principles.
              </p>

              {/* Anticipation Teaser Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-[#181611] border border-[rgba(212,175,55,0.2)]">
                  <p className="font-heading text-[13px] sm:text-[14px] font-bold text-[#f2ca50] mb-1">
                    Prime Transit Corridor
                  </p>
                  <p className="font-body text-[11px] text-[#99907c]">
                    Direct highway frontage with maximum business footfall.
                  </p>
                </div>
                <div className="p-4 bg-[#181611] border border-[rgba(212,175,55,0.2)]">
                  <p className="font-heading text-[13px] sm:text-[14px] font-bold text-[#f2ca50] mb-1">
                    Grade-A Commercial Suites
                  </p>
                  <p className="font-body text-[11px] text-[#99907c]">
                    Tailored for banks, corporate offices, and flagship retail brands.
                  </p>
                </div>
                <div className="p-4 bg-[#181611] border border-[rgba(212,175,55,0.2)]">
                  <p className="font-heading text-[13px] sm:text-[14px] font-bold text-[#f2ca50] mb-1">
                    Priority Allotment
                  </p>
                  <p className="font-body text-[11px] text-[#99907c]">
                    Early-stage registration benefits for institutional &amp; retail investors.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="border border-[#d4af37] bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] py-3.5 px-7 uppercase transition-all"
                >
                  REGISTER EARLY INTEREST / NOTIFY ME →
                </Link>
                <p className="font-body text-[11px] sm:text-[12px] text-[#99907c]">
                  Be the first to receive brochures and pre-launch pricing.
                </p>
              </div>
            </div>
          </motion.article>

        </div>
      </section>

      {/* --- BOTTOM CONSULTATION CTA --- */}
      <section className="py-16 sm:py-20 bg-[#141414] border-t border-[rgba(77,70,53,0.3)] text-center px-4">
        <motion.div
          {...scrollAnim({ y: 25 }, 0.1)}
          className="max-w-[700px] mx-auto"
        >
          <h2 className="font-heading font-black text-[26px] sm:text-[34px] md:text-[38px] text-white mb-4">
            Looking for Bespoke Commercial or Residential Spaces?
          </h2>
          <p className="font-body text-[13px] sm:text-[15px] text-[#d0c5af] mb-8 leading-relaxed">
            Our engineering and project consultants are ready to discuss tailored commercial requirements, investment opportunities, and customized residential layouts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] px-8 py-4 uppercase transition-all"
            >
              SCHEDULE A CONSULTATION
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="border border-[rgba(212,175,55,0.6)] hover:border-[#f2ca50] text-[#f2ca50] hover:text-white font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] px-8 py-4 uppercase transition-all"
            >
              CALL: {contactInfo.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

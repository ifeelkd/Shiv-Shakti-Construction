"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import AmenitiesSection from "@/components/AmenitiesSection";
import ReraBadge from "@/components/ui/ReraBadge";
import { flatTypes } from "@/data/flats.data";
import { nearbyPlaces } from "@/data/nearby-places.data";
import { projectSpecs } from "@/data/project.data";

const paymentMilestones = [
  { stage: "Booking & Agreement", percentage: "10%", description: "At the time of booking and formal agreement execution" },
  { stage: "Foundation & Plinth", percentage: "20%", description: "Upon completion of deep piling and plinth casting" },
  { stage: "Commercial Slabs (G+1)", percentage: "10%", description: "Upon casting of Ground and 1st floor commercial slabs" },
  { stage: "Mid-level Residential Slabs", percentage: "15%", description: "Upon casting of 2nd, 3rd, and 4th residential slabs" },
  { stage: "Top Slabs & Rooftop Deck", percentage: "15%", description: "Upon casting of 5th, 6th floor slabs and rooftop recreation area" },
  { stage: "Brickwork & Internal Plaster", percentage: "10%", description: "Upon completion of masonry walls and interior plastering" },
  { stage: "Flooring, Electrical & Plumbing", percentage: "10%", description: "Upon completion of tiles, sanitary, and electrical fittings" },
  { stage: "Final Finishing & Handover", percentage: "10%", description: "Upon possession notice and key handover" },
];

export default function ProjectDetailView() {
  const prefersReduced = useReducedMotion();
  const residentialFlats = flatTypes.filter((f) => f.slug !== "penthouse");
  const keyLandmarks = nearbyPlaces.slice(0, 8);

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
      className="bg-[#0b0b0b] text-[#e5e2e1]"
    >
      {/* --- PROJECT HERO BANNER --- */}
      <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-24">
        {/* Subtle Background Radial Gradient */}
        <div
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 25%, rgba(212,175,55,0.18) 0%, rgba(11,11,11,0.98) 75%)",
          }}
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
          {/* Top Breadcrumb with generous clearance */}
          <motion.div
            {...enterAnim({ y: 15 }, 0.05)}
            className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[1.5px] uppercase text-[#99907c] mb-6 sm:mb-10 font-body"
          >
            <Link href="/" className="hover:text-[#f2ca50] transition-colors">
              Home
            </Link>
            <span className="text-[#666]">/</span>
            <Link href="/projects" className="hover:text-[#f2ca50] transition-colors">
              Projects
            </Link>
            <span className="text-[#666]">/</span>
            <span className="text-[#f2ca50] font-semibold">Shiv Shakti Towers</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Heading and Highlights */}
            <motion.div
              {...enterAnim({ y: 30 }, 0.12)}
              className="lg:col-span-6 flex flex-col gap-4 sm:gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full w-fit">
                  <span className="font-body text-[11px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#f2ca50]">
                    Flagship Development
                  </span>
                </div>
                {/* Full-width RERA Certified Official Banner */}
                <ReraBadge size="banner" className="my-1" />
              </div>

              <h1 className="font-heading font-black text-[34px] xs:text-[42px] sm:text-[52px] md:text-[58px] leading-[1.08] text-white tracking-tight">
                SHIV SHAKTI <br />
                <span className="text-[#f2ca50]">TOWERS</span>
              </h1>

              <p className="font-body text-[14px] sm:text-[16px] text-[#d0c5af] leading-relaxed max-w-[500px]">
                A signature residential and commercial landmark at Chapaguri, North Bongaigaon. 
                Featuring earthquake-resistant G+6 engineering, expansive 2BHK &amp; 3BHK residences, 
                and sky-level recreation for everyday luxury.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-2">
                {projectSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-[#141414] border border-[rgba(212,175,55,0.2)] p-2.5 sm:p-3 text-center"
                  >
                    <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-[1px] text-[#99907c] mb-1">
                      {spec.label}
                    </p>
                    <p className="font-heading text-[13px] sm:text-[15px] font-bold text-[#f2ca50]">
                      {spec.label === "COMPLETION" ? "By 2028" : spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="#flats"
                  className="border border-[#d4af37] bg-[#d4af37] px-6 sm:px-8 py-3.5 flex items-center justify-center text-center hover:bg-[#ffdf7d] transition-all font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] text-[#1c1400] uppercase leading-none"
                >
                  EXPLORE FLATS &amp; PLANS
                </a>
                <Link
                  href="/contact"
                  className="border border-[rgba(212,175,55,0.5)] hover:border-[#f2ca50] px-6 sm:px-8 py-3.5 flex items-center justify-center text-center transition-all font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] text-[#f2ca50] hover:text-white uppercase leading-none"
                >
                  ENQUIRE NOW
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Tower Render Showcase */}
            <motion.div
              {...enterAnim({ y: 30, scale: 0.97 }, 0.2)}
              className="lg:col-span-6 relative mt-4 lg:mt-0"
            >
              <div className="relative aspect-[4/5] sm:aspect-[615/680] w-full border border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden group">
                <Image
                  src="/images/Featured Building.png"
                  alt="Shiv Shakti Towers Bongaigaon Architecture"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Small Floating RERA Badge on Image */}
                <div className="absolute top-4 left-4 z-20">
                  <ReraBadge size="floating" />
                </div>

                {/* Corner Accent Badge with Landmark Milestone */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#131313]/95 backdrop-blur-md p-3 sm:p-4 border border-[#d4af37]/50 flex items-center justify-between gap-3 shadow-2xl">
                  <div>
                    <p className="font-heading text-[12px] sm:text-[14px] font-bold text-[#ffdf7d] uppercase tracking-[1px] leading-tight">
                      ARCHITECTURAL LANDMARK
                    </p>
                    <p className="font-body text-[11px] sm:text-[12px] text-[#d0c5af] leading-tight mt-0.5">
                      Premier Residential &amp; Commercial Address · Chapaguri
                    </p>
                  </div>
                  <span className="font-body text-[11px] font-bold text-white bg-[#d4af37]/25 border border-[#d4af37]/50 px-3 py-1 uppercase tracking-wider whitespace-nowrap">
                    Ready 2028
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2BHK & 3BHK RESIDENTIAL FLATS SECTION --- */}
      <section id="flats" className="section-padding bg-[#0e0e0e] border-t border-[rgba(77,70,53,0.3)]">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            {...scrollAnim({ y: 25 }, 0.1)}
            className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <p className="label-sm">01 — Available Units</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="heading-section">2BHK &amp; 3BHK Residences</h2>
                <p className="font-body text-[#d0c5af] text-[13px] sm:text-[15px] mt-1">
                  Vastu-compliant layouts designed for abundant natural light and cross-ventilation.
                </p>
              </div>
              <Link
                href="/contact"
                className="font-body text-[12px] tracking-[1.5px] uppercase font-bold text-[#f2ca50] hover:underline"
              >
                Request Custom Floor Plan →
              </Link>
            </div>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {residentialFlats.map((flat, idx) => (
              <motion.div
                key={flat.slug}
                {...scrollAnim({ y: 30 }, idx * 0.15)}
                className="bg-[#141414] border border-[#d4af37]/30 hover:border-[#f2ca50] transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]"
              >
                {/* Flat Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={flat.image}
                    alt={flat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-[#f2ca50]/60 text-[#f2ca50] font-body text-[11px] tracking-[1.5px] uppercase px-3.5 py-1 font-bold">
                    {flat.subtitle}
                  </span>
                </div>

                {/* Flat Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-heading text-[24px] sm:text-[28px] font-bold text-[#f2ca50]">
                      {flat.title}
                    </h3>
                    <span className="font-body text-[12px] sm:text-[13px] text-[#e5e2e1] font-semibold bg-[#222] px-3 py-1 border border-white/10">
                      {flat.area}
                    </span>
                  </div>

                  <p className="font-body text-[13px] sm:text-[14px] text-[#ffdf7d] font-medium mb-4">
                    {flat.configuration}
                  </p>

                  {/* Key Specs Breakdown */}
                  <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-[rgba(77,70,53,0.3)] mb-6 text-[12px] sm:text-[13px]">
                    <div>
                      <span className="text-[#99907c] block text-[10px] uppercase">Available Variants</span>
                      <span className="text-white font-medium">
                        {flat.variants.length} Layout Plans
                      </span>
                    </div>
                    <div>
                      <span className="text-[#99907c] block text-[10px] uppercase">Flooring</span>
                      <span className="text-white font-medium">Italian / Premium Vitrified</span>
                    </div>
                    <div>
                      <span className="text-[#99907c] block text-[10px] uppercase">Ventilation</span>
                      <span className="text-white font-medium">Multi-Side Open Balconies</span>
                    </div>
                    <div>
                      <span className="text-[#99907c] block text-[10px] uppercase">Possession</span>
                      <span className="text-[#f2ca50] font-medium">2028 Target</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {flat.amenities.slice(0, 5).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-[11px] text-[#b0a793] bg-[#1a1a1a] px-2.5 py-1 border border-white/5"
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href={`/project/${flat.slug}`}
                      className="flex-1 bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] font-body font-bold text-[12px] tracking-[1.2px] py-3.5 px-4 text-center uppercase transition-colors"
                    >
                      VIEW FULL 3D &amp; 2D PLANS →
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-[#d4af37]/50 hover:border-[#f2ca50] text-[#f2ca50] hover:text-white font-body font-bold text-[12px] tracking-[1.2px] py-3.5 px-5 text-center uppercase transition-colors"
                    >
                      ENQUIRE
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORLD-CLASS AMENITIES SECTION --- */}
      <AmenitiesSection />

      {/* --- TRANSPARENT PAYMENT PLAN --- */}
      <section id="payment-plan" className="section-padding bg-[#111111] border-t border-[rgba(77,70,53,0.3)]">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            {...scrollAnim({ y: 25 }, 0.1)}
            className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <p className="label-sm">02 — Financial Ease</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="heading-section">Construction-Linked Payment Plan</h2>
                <p className="font-body text-[#d0c5af] text-[13px] sm:text-[15px] mt-1 max-w-[600px]">
                  Pay in progressive stages tied directly to construction milestones. Transparent, secure, and hassle-free.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 border border-[#d4af37]/30">
                <span className="text-[#f2ca50] font-bold text-[12px] uppercase tracking-wider">
                  Bank Finance Available
                </span>
              </div>
            </div>
            <div className="divider-gold" />
          </motion.div>

          {/* Milestones Table / Cards */}
          <motion.div
            {...scrollAnim({ y: 30 }, 0.15)}
            className="bg-[#161616] border border-[#d4af37]/30 divide-y divide-white/10 overflow-hidden shadow-2xl"
          >
            {paymentMilestones.map((item, index) => (
              <div
                key={item.stage}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#1f1f1f] transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] font-heading font-bold text-[12px] flex items-center justify-center flex-shrink-0">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="font-heading text-[14px] sm:text-[16px] text-white font-medium">
                      {item.stage}
                    </h4>
                    <p className="font-body text-[11px] sm:text-[12px] text-[#8e8574]">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="sm:text-right pl-10 sm:pl-0">
                  <span className="font-heading text-[16px] sm:text-[18px] font-bold text-[#f2ca50]">
                    {item.percentage}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Financial Support Notice */}
          <motion.div
            {...scrollAnim({ y: 25 }, 0.2)}
            className="mt-8 p-5 sm:p-6 bg-[#17150f] border border-[#d4af37]/25 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="font-heading text-[15px] sm:text-[17px] text-[#f2ca50] font-semibold mb-1">
                Need Home Loan Assistance?
              </h4>
              <p className="font-body text-[12px] sm:text-[13px] text-[#b0a793]">
                Our customer relationship managers assist with documentation for top nationalized and private banks.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] font-body font-bold text-[11px] sm:text-[12px] tracking-[1.5px] px-6 py-3 uppercase transition-colors whitespace-nowrap"
            >
              REQUEST LOAN SUPPORT
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- LANDMARKS & CONNECTIVITY --- */}
      <section id="landmarks" className="section-padding bg-[#0b0b0b] border-t border-[rgba(77,70,53,0.3)]">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            {...scrollAnim({ y: 25 }, 0.1)}
            className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <p className="label-sm">03 — Prime Location</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="heading-section">Strategic Chapaguri Junction</h2>
                <p className="font-body text-[#d0c5af] text-[13px] sm:text-[15px] mt-1 max-w-[580px]">
                  Connected to top educational institutions, multi-specialty hospitals, shopping complexes, and transit hubs.
                </p>
              </div>
              <Link
                href="/location"
                className="font-body text-[12px] tracking-[1.5px] uppercase font-bold text-[#f2ca50] hover:underline"
              >
                View Full Location Directory →
              </Link>
            </div>
            <div className="divider-gold" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyLandmarks.map((place, idx) => (
              <motion.div
                key={place.name}
                {...scrollAnim({ y: 25 }, idx * 0.08)}
                className="p-5 bg-[#141414] border border-white/10 hover:border-[#d4af37]/60 transition-all group"
              >
                <span className="font-body text-[10px] tracking-[1.5px] uppercase font-bold text-[#f2ca50] block mb-2">
                  {place.category}
                </span>
                <h4 className="font-heading text-[14px] sm:text-[15px] text-white font-medium mb-3 group-hover:text-[#f2ca50] transition-colors">
                  {place.name}
                </h4>
                <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-[#99907c] pt-2 border-t border-white/5">
                  <span>{place.distanceText}</span>
                  <span className="text-[#d0c5af] font-medium">{place.travelTimeText}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 border border-[#d4af37] px-6 py-3 font-body font-bold text-[12px] tracking-[1.4px] text-[#f2ca50] hover:bg-[#d4af37] hover:text-[#1c1400] transition-all uppercase"
            >
              EXPLORE INTERACTIVE NEIGHBORHOOD MAP →
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-16 sm:py-24 bg-[#141414] border-t border-[rgba(77,70,53,0.4)] text-center">
        <motion.div
          {...scrollAnim({ y: 25 }, 0.1)}
          className="max-w-[700px] mx-auto px-4"
        >
          <h2 className="font-heading font-black text-[28px] sm:text-[36px] md:text-[42px] text-white mb-4">
            Take the Next Step Toward Your New Home
          </h2>
          <p className="font-body text-[14px] sm:text-[15px] text-[#d0c5af] mb-8 leading-relaxed">
            Book an exclusive site walk-through or speak directly with our engineering and project consultants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="border border-[#d4af37] bg-[#d4af37] text-[#1c1400] hover:bg-[#ffdf7d] font-body font-bold text-[13px] tracking-[1.5px] px-8 py-4 uppercase transition-colors"
            >
              BOOK SITE VISIT / ENQUIRE
            </Link>
            <a
              href="tel:+919678634115"
              className="border border-[rgba(212,175,55,0.6)] text-[#f2ca50] hover:border-[#f2ca50] hover:text-white font-body font-bold text-[13px] tracking-[1.5px] px-8 py-4 uppercase transition-colors"
            >
              CALL: +91 96786 34115
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

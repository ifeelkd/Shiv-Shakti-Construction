"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { contactInfo } from "@/data/project.data";

interface FormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

interface ContactSectionProps {
  isPage?: boolean;
}

export default function ContactSection({ isPage = false }: ContactSectionProps) {
  const prefersReduced = useReducedMotion();
  const [formData, setFormData] = useState({ fullName: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
    if (!formData.projectType) e.projectType = "Select a project type";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const inputBase = "bg-transparent border-b-2 outline-none font-form text-[16px] md:text-[18px] text-white pb-4 pt-3 transition-colors duration-300 w-full";
  const inputNormal = `${inputBase} border-[rgba(255,255,255,0.1)] focus:border-[#d4af37] placeholder:text-[rgba(255,255,255,0.2)]`;
  const inputError = `${inputBase} border-red-500 focus:border-red-400 placeholder:text-[rgba(255,255,255,0.2)]`;

  if (submitted) {
    return (
      <section id="contact" className={`px-4 sm:px-6 md:px-12 lg:px-24 ${isPage ? "pt-[140px] sm:pt-[180px] pb-16 md:pb-32" : "py-16 md:py-32"}`} style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-[48px] mb-6">✓</div>
          <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[48px] text-[#e5e2e1] mb-6">Thank You!</h2>
          <p className="font-body text-[16px] text-[#d0c5af] leading-[26px] mb-8">Your inquiry has been submitted. Our senior engineers will respond within 48 business hours.</p>
          <button onClick={() => { setSubmitted(false); setFormData({ fullName: "", email: "", projectType: "", message: "" }); }} className="bg-[#d4af37] hover:bg-[#f2ca50] px-8 py-4 font-body font-bold text-[14px] tracking-[1.4px] text-[#3c2f00] transition-colors">
            SUBMIT ANOTHER INQUIRY
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={`px-4 sm:px-6 md:px-12 lg:px-24 ${isPage ? "pt-[110px] sm:pt-[130px] md:pt-[150px]" : "pt-8 sm:pt-12 md:pt-16"} pb-12 sm:pb-20 md:pb-24`} style={{ backgroundColor: "#1a1a1a" }} aria-label="Contact Us">
      <div className="max-w-[1088px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Column — Info Dashboard */}
        <motion.div 
          initial={prefersReduced ? undefined : { opacity: 0, y: 30 }} 
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="w-full lg:w-[400px] flex-shrink-0"
        >
          {isPage ? (
            <>
              <p className="label-sm mb-3 sm:mb-4 text-center lg:text-left">Get in Touch</p>
              <h1 className="font-heading font-bold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#ffdf7d] leading-[1.05] mb-4 sm:mb-6 text-center lg:text-left -ml-[2px] sm:-ml-[3px] md:-ml-[4px]">
                Contact Us
              </h1>
            </>
          ) : (
            <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#e5e2e1] leading-[1.1] mb-4 sm:mb-6 text-center lg:text-left">
              Start Your <span className="text-[#f2ca50]">Build.</span>
            </h2>
          )}
          <p className="font-body font-normal text-[13px] sm:text-[14px] md:text-[15px] text-[#d0c5af] leading-[22px] sm:leading-[24px] mb-6 sm:mb-8 text-center lg:text-left max-w-[480px] mx-auto lg:mx-0">
            Submit your project brief for a technical feasibility study. Our senior engineers respond within 48 business hours.
          </p>
          
          {/* Quick Info Grid: 1-Col Dashboard on Mobile, List on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 pt-6 border-t border-[rgba(212,175,55,0.15)] lg:border-t-0 text-center lg:text-left">
            <div>
              <p className="font-body text-[11px] tracking-[1.2px] uppercase text-[#f2ca50] leading-[16px] mb-1">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="font-body text-[14px] sm:text-[16px] text-[#e5e2e1] leading-[20px] hover:text-[#f2ca50] transition-colors break-all font-semibold">{contactInfo.phone}</a>
            </div>
            <div>
              <p className="font-body text-[11px] tracking-[1.2px] uppercase text-[#f2ca50] leading-[16px] mb-1">Inquiries</p>
              <a href={`mailto:${contactInfo.email}`} className="font-body text-[14px] sm:text-[16px] text-[#e5e2e1] leading-[20px] hover:text-[#f2ca50] transition-colors break-all font-semibold">{contactInfo.email}</a>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-body text-[11px] tracking-[1.2px] uppercase text-[#f2ca50] leading-[16px] mb-1">Headquarters</p>
              <p className="font-body text-[14px] sm:text-[16px] text-[#e5e2e1] leading-[20px] font-semibold">{contactInfo.address}</p>
            </div>
          </div>
        </motion.div>
 
        {/* Right Column — Luxury Glassmorphism Form Card */}
        <motion.form 
          initial={prefersReduced ? undefined : { opacity: 0, y: 30 }} 
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.15 }} 
          viewport={{ once: true }} 
          onSubmit={handleSubmit} 
          noValidate 
          className="w-full flex-1 flex flex-col gap-6 sm:gap-8 bg-[rgba(25,28,30,0.45)] lg:bg-transparent border border-[rgba(212,175,55,0.1)] lg:border-none p-5 sm:p-8 lg:p-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:shadow-none"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="font-form font-bold text-[10px] sm:text-[11px] tracking-[1.2px] uppercase text-[#d0c5af]">Full Name</label>
            <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Architect" className={errors.fullName ? inputError : inputNormal} />
            {errors.fullName && <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>}
          </div>
 
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-form font-bold text-[10px] sm:text-[11px] tracking-[1.2px] uppercase text-[#d0c5af]">Work Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@firm.com" className={errors.email ? inputError : inputNormal} />
            {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
          </div>
 
          <div className="flex flex-col gap-1.5">
            <label htmlFor="projectType" className="font-form font-bold text-[10px] sm:text-[11px] tracking-[1.2px] uppercase text-[#d0c5af]">Project Type</label>
            <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${errors.projectType ? inputError : inputNormal} cursor-pointer appearance-none text-[rgba(212,175,55,0.6)]`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23d4af37' stroke-width='1.5'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0 center", backgroundSize: "12px" }}>
              <option value="" disabled className="bg-[#2a2a2a] text-white">Select type...</option>
              <option value="2bhk" className="bg-[#2a2a2a] text-white">2BHK Residential</option>
              <option value="3bhk" className="bg-[#2a2a2a] text-white">3BHK Residential</option>
              <option value="penthouse" className="bg-[#2a2a2a] text-white">Penthouse</option>
              <option value="commercial" className="bg-[#2a2a2a] text-white">Commercial Development</option>
            </select>
            {errors.projectType && <p className="text-red-400 text-[11px] mt-1">{errors.projectType}</p>}
          </div>
 
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-form font-bold text-[10px] sm:text-[11px] tracking-[1.2px] uppercase text-[#d0c5af]">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe the scale and scope..." rows={3} className={`${errors.message ? inputError : inputNormal} resize-none`} />
            {errors.message && <p className="text-red-400 text-[11px] mt-1">{errors.message}</p>}
          </div>
 
          <button type="submit" className="bg-black hover:bg-[#111] border border-[#d4af37]/30 hover:border-[#d4af37] w-full py-4.5 sm:py-5 flex items-center justify-center transition-all duration-300 mt-2">
            <span className="font-body font-bold text-[12px] sm:text-[13px] tracking-[1.4px] uppercase text-[#f2ca50]">Submit Inquiry</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

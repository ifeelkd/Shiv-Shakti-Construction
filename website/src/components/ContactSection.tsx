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

export default function ContactSection() {
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
      <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-32" style={{ backgroundColor: "#2a2a2a" }}>
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
    <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-24" style={{ backgroundColor: "#2a2a2a" }} aria-label="Contact Us">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20">
        {/* Left Column */}
        <motion.div initial={prefersReduced ? undefined : { opacity: 0, x: -30 }} whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:w-[496px] flex-shrink-0">
          <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[48px] text-[#e5e2e1] leading-[1.1] mb-6 sm:mb-8">
            Start Your <span className="text-[#f2ca50]">Build.</span>
          </h2>
          <p className="font-body font-normal text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] mb-6 sm:mb-8 max-w-[496px]">
            Submit your project brief for a technical feasibility study. Our senior engineers respond within 48 business hours.
          </p>
          <div className="flex flex-col gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div>
              <p className="font-body text-[12px] tracking-[1.2px] uppercase text-[#f2ca50] leading-[16px] mb-2">Inquiries</p>
              <p className="font-body text-[16px] sm:text-[18px] md:text-[20px] text-[#e5e2e1] leading-[28px]">{contactInfo.email}</p>
            </div>
            <div>
              <p className="font-body text-[12px] tracking-[1.2px] uppercase text-[#f2ca50] leading-[16px] mb-2">Headquarters</p>
              <p className="font-body text-[16px] sm:text-[18px] md:text-[20px] text-[#e5e2e1] leading-[28px]">{contactInfo.address}</p>
            </div>
            <div>
              <p className="font-body text-[12px] tracking-[1.2px] uppercase text-[#f2ca50] leading-[16px] mb-2">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="font-body text-[16px] sm:text-[18px] md:text-[20px] text-[#e5e2e1] leading-[28px] hover:text-[#f2ca50] transition-colors">{contactInfo.phone}</a>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Form */}
        <motion.form initial={prefersReduced ? undefined : { opacity: 0, x: 30 }} whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="font-form font-bold text-[12px] tracking-[1.2px] uppercase text-white">Full Name</label>
            <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Architect" className={errors.fullName ? inputError : inputNormal} />
            {errors.fullName && <p className="text-red-400 text-[12px] mt-1">{errors.fullName}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-form font-bold text-[12px] tracking-[1.2px] uppercase text-white">Work Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@firm.com" className={errors.email ? inputError : inputNormal} />
            {errors.email && <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="projectType" className="font-form font-bold text-[12px] tracking-[1.2px] uppercase text-white">Project Type</label>
            <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${errors.projectType ? inputError : inputNormal} cursor-pointer appearance-none text-[rgba(212,175,55,0.6)]`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23d4af37' stroke-width='1.5'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0 center", backgroundSize: "12px" }}>
              <option value="" disabled className="bg-[#2a2a2a] text-white">Select type...</option>
              <option value="2bhk" className="bg-[#2a2a2a] text-white">2BHK Residential</option>
              <option value="3bhk" className="bg-[#2a2a2a] text-white">3BHK Residential</option>
              <option value="penthouse" className="bg-[#2a2a2a] text-white">Penthouse</option>
              <option value="commercial" className="bg-[#2a2a2a] text-white">Commercial Development</option>
            </select>
            {errors.projectType && <p className="text-red-400 text-[12px] mt-1">{errors.projectType}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-form font-bold text-[12px] tracking-[1.2px] uppercase text-white">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe the scale and scope..." rows={4} className={`${errors.message ? inputError : inputNormal} resize-none`} />
            {errors.message && <p className="text-red-400 text-[12px] mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-black hover:bg-[#1a1a1a] active:bg-[#111] w-full py-5 sm:py-6 flex items-center justify-center transition-colors duration-300 mt-2 sm:mt-4">
            <span className="font-body font-bold text-[13px] sm:text-[14px] tracking-[1.4px] uppercase text-[#f2ca50]">Submit Inquiry</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

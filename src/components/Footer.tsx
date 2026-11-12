import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, INDUSTRIES } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#171B40] text-slate-300 font-sans border-t border-blue-900/50 relative overflow-hidden">
      {/* Subtle Royal & Cyan Lighting Aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#171B40]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#20B8E8]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 1. TOP CONTACT STRIP: Rich Midnight Blue (#102B59) */}
      <div className="bg-[#303B63] py-8 border-b border-blue-800/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#171B40] border border-[#36BCE5]/30 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-[#36BCE5]" />
            </div>
            <div>
              <p className="text-[11px] text-blue-200 uppercase tracking-widest font-mono font-bold">
                Direct Consulting Hotline
              </p>
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="text-base font-bold text-white hover:text-[#36BCE5] transition-colors"
              >
                {COMPANY_INFO.primaryPhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#171B40] border border-[#36BCE5]/30 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-[#36BCE5]" />
            </div>
            <div>
              <p className="text-[11px] text-blue-200 uppercase tracking-widest font-mono font-bold">
                Official Enterprise Inquiries
              </p>
              <a
                href={`mailto:${COMPANY_INFO.primaryEmail}`}
                className="text-base font-bold text-white hover:text-[#36BCE5] transition-colors"
              >
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#171B40] border border-[#36BCE5]/30 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 text-[#36BCE5]" />
            </div>
            <div>
              <p className="text-[11px] text-blue-200 uppercase tracking-widest font-mono font-bold">
                Delivery Center Location
              </p>
              <p className="text-sm text-white font-medium">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column (Col 5) */}
          <div className="lg:col-span-5 space-y-5">
            <button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            >
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-200/80 shadow-md inline-block">
                <img
                  src="/zisantech_official_logo.png"
                  alt="ZisanTech - INNOVATE • DEVELOP • GROW"
                  className="h-9 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/zisantech_logo_transparent.png';
                  }}
                />
              </div>
            </button>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              ZisanTech Solutions is dedicated to helping businesses embrace digital transformation through intelligent SAP solutions and modern IT services. Our focus is on aligning technology with real business objectives to improve efficiency, visibility, and decision-making.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-slate-300 font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-blue-800/40 flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#36BCE5]" /> Enterprise Grade SLA
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-blue-800/40 flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#36BCE5]" /> 10+ Years Advisory
              </span>
            </div>
          </div>

          {/* Quick Section Navigation (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#36BCE5]">
              Homepage
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('top')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Overview &amp; Hero
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  About ZisanTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Enterprise Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('approach')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('expertise')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Technology Expertise
                </button>
              </li>
            </ul>
          </div>

          {/* Vertical Sectors Catalog (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#36BCE5]">
              Core Verticals
            </h4>
            <ul className="space-y-2.5 text-sm">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id} className="text-slate-300 select-none cursor-default flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20B8E8]"></span>
                  <span>{ind.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Genuine Verified Contact Info (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#36BCE5]">
              Verified Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="leading-relaxed">
                <strong className="text-white block font-semibold">Headquarters:</strong>
                {COMPANY_INFO.address}
              </p>
              <p>
                <strong className="text-white block font-semibold">Phone Hotline:</strong>
                {COMPANY_INFO.primaryPhone}
              </p>
              <p>
                <strong className="text-white block font-semibold">Inquiries Email:</strong>
                {COMPANY_INFO.primaryEmail}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('contact-cta')}
                  className="w-full py-3 px-4 rounded-xl bg-[#171B40] hover:bg-[#303B63] border border-[#20B8E8]/40 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#36BCE5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT STRIP */}
        <div className="mt-14 pt-8 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 ZisanTech Solutions. All rights reserved. Transforming enterprises through intelligent SAP &amp; technology.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#36BCE5]" /> Enterprise Data Security &amp; ISO Standards
            </span>
            <button
              onClick={() => scrollToSection('top')}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#171B40] text-white border border-blue-800/40 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#36BCE5]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

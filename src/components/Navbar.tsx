import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  GraduationCap,
  Building2,
  PhoneCall,
  Zap,
  Users,
  Compass,
  Briefcase
} from 'lucide-react';
import { SERVICES, TRAINING_MODULES, INDUSTRIES } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 240);
  };

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(prev => (prev === menuName ? null : menuName));
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-white text-slate-900 shadow-[0_10px_35px_rgba(2,28,78,0.1)] border-b border-blue-50 py-3.5'
          : 'bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ZISANTECH Official Logo */}
        <button
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="ZisanTech Homepage"
        >
          <div className="px-3 py-1.5 rounded-xl border bg-white border-blue-100 shadow-[0_2px_10px_rgba(0,102,255,0.06)] hover:border-blue-200 transition-all duration-300 flex items-center gap-2.5">
            <img
              src="/zisantech_official_logo.png"
              alt="ZisanTech - INNOVATE • DEVELOP • GROW"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/zisantech_logo_transparent.png';
              }}
            />
          </div>
        </button>

        {/* Center Nav Links - Simple, Clean, Crisp on White */}
        <nav className="hidden lg:flex items-center space-x-7 font-sans">
          {/* 1. Home */}
          <button
            onClick={() => scrollToSection('top')}
            className="text-[15px] font-semibold text-[#171B40] hover:text-[#36BCE5] transition-colors cursor-pointer focus:outline-none"
          >
            Home
          </button>

          {/* 2. About Us ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('about')}
              className="text-[15px] font-semibold text-[#171B40] hover:text-[#36BCE5] flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none"
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-[#36BCE5]' : 'text-slate-500'
                }`}
              />
            </button>

            {/* Simple Clean Rounded Dropdown Menu */}
            {activeDropdown === 'about' && (
              <div
                className="absolute left-0 top-full pt-2 z-50 w-64"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-slate-100 rounded-2xl py-3 px-2 shadow-[0_15px_35px_rgba(0,0,0,0.1)] animate-fade-in text-slate-800 space-y-1">
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Leadership &amp; Architects
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Vision &amp; Strategic Heritage
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Global Standards &amp; SLA
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Our Core Values
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Our Services ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('services')}
              className="text-[15px] font-semibold text-[#171B40] hover:text-[#36BCE5] flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none"
            >
              <span>Our Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180 text-[#36BCE5]' : 'text-slate-500'
                }`}
              />
            </button>

            {/* Simple Clean Rounded Dropdown Menu */}
            {activeDropdown === 'services' && (
              <div
                className="absolute left-0 top-full pt-2 z-50 w-64"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-slate-100 rounded-2xl py-3 px-2 shadow-[0_15px_35px_rgba(0,0,0,0.1)] animate-fade-in text-slate-800 space-y-1">
                  {SERVICES.map((s) => (
                    <div
                      key={s.id}
                      className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors truncate"
                    >
                      {s.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Industries ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('industries')}
              className="text-[15px] font-semibold text-[#171B40] hover:text-[#36BCE5] flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none"
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180 text-[#36BCE5]' : 'text-slate-500'
                }`}
              />
            </button>

            {/* Simple Clean Rounded Dropdown Menu */}
            {activeDropdown === 'industries' && (
              <div
                className="absolute left-0 top-full pt-2 z-50 w-64"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-slate-100 rounded-2xl py-3 px-2 shadow-[0_15px_35px_rgba(0,0,0,0.1)] animate-fade-in text-slate-800 space-y-1">
                  {INDUSTRIES.map((ind) => (
                    <div
                      key={ind.id}
                      className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors truncate"
                    >
                      {ind.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 5. SAP Training ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('training')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('training')}
              className="text-[15px] font-semibold text-[#171B40] hover:text-[#36BCE5] flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none"
            >
              <span>SAP Training</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'training' ? 'rotate-180 text-[#36BCE5]' : 'text-slate-500'
                }`}
              />
            </button>

            {/* Simple Clean Rounded Dropdown Menu */}
            {activeDropdown === 'training' && (
              <div
                className="absolute left-0 top-full pt-2 z-50 w-64"
                onMouseEnter={() => handleMouseEnter('training')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-slate-100 rounded-2xl py-3 px-2 shadow-[0_15px_35px_rgba(0,0,0,0.1)] animate-fade-in text-slate-800 space-y-1">
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    SAP S/4HANA Finance (FICO)
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Materials Management (MM)
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Sales &amp; Distribution (SD)
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Production Planning (PP)
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    Quality Management (QM)
                  </div>
                  <div className="px-4 py-2.5 rounded-xl hover:bg-slate-50 select-none cursor-default text-sm font-semibold text-slate-700 hover:text-[#36BCE5] transition-colors">
                    ABAP &amp; Technical Core
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. Contact Us */}
          <button
            onClick={() => scrollToSection('contact-cta')}
            className="text-[15px] font-semibold text-[#171B40] hover:text-[#36BCE5] transition-colors cursor-pointer focus:outline-none"
          >
            Contact Us
          </button>
        </nav>

        {/* ScoreLabs High-Contrast CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollToSection('contact-cta')}
            className="px-6 py-2.5 rounded-xl bg-[#36BCE5] hover:bg-[#20A6CE] text-[#171B40] text-sm font-bold transition-all duration-300 shadow-[0_4px_18px_rgba(54,188,229,0.35)] hover:shadow-[0_8px_25px_rgba(54,188,229,0.5)] flex items-center gap-2 cursor-pointer focus:outline-none active:scale-95 group hover:-translate-y-0.5">
            <span>Get Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => scrollToSection('contact-cta')}
            className="px-3.5 py-1.5 rounded-lg bg-[#174EA6] text-white text-xs font-semibold shadow-md"
          >
            Consultation
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border bg-slate-50 border-slate-200 text-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-800 border-t border-slate-200 px-4 py-5 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('top')}
              className="w-full text-left px-3 py-2.5 text-sm font-bold text-slate-900 bg-blue-50/70 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Industries We Serve
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              SAP Training
            </button>
            <button
              onClick={() => scrollToSection('contact-cta')}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => scrollToSection('contact-cta')}
              className="w-full py-3 rounded-lg bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

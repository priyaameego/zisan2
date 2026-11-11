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
          : 'bg-transparent text-white py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ZISANTECH Official Logo with ScoreLabs Styled Border Box Container */}
        <button
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="ZisanTech Homepage"
        >
          <div
            className={`px-3 py-1.5 rounded-xl border transition-all duration-300 flex items-center gap-2.5 ${
              isScrolled
                ? 'bg-white border-blue-200/80 shadow-[0_4px_16px_rgba(0,102,255,0.08)]'
                : 'bg-white/[0.08] backdrop-blur-md border-white/20 hover:border-white/40 shadow-lg'
            }`}
          >
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

        {/* Center Nav Links with Enhanced Readability & Font Sizes */}
        <nav className="hidden lg:flex items-center space-x-7 font-sans">
          {/* 1. Home */}
          <button
            onClick={() => scrollToSection('top')}
            className={`text-[15px] font-semibold transition-colors cursor-pointer focus:outline-none ${
              isScrolled
                ? 'text-slate-800 hover:text-[#0066FF]'
                : 'text-white hover:text-[#38BDF8]'
            }`}
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
              className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none ${
                isScrolled
                  ? 'text-slate-800 hover:text-[#0066FF]'
                  : 'text-white hover:text-[#38BDF8]'
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-[#0066FF]' : isScrolled ? 'text-slate-500' : 'text-slate-300'
                }`}
              />
            </button>

            {/* ScoreLabs Clean Crisp Dropdown */}
            {activeDropdown === 'about' && (
              <div
                className="absolute left-0 top-full pt-3 z-50 w-[400px]"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_25px_60px_rgba(2,28,78,0.14)] space-y-3.5 animate-fade-in text-slate-800">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] font-bold">
                      About ZisanTech
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5 font-heading">
                      ZisanTech Solutions
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Transforming businesses through intelligent SAP solutions, enterprise integration, and strategic technology consulting.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-100 select-none cursor-default transition-all">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0066FF]" />
                        <span className="text-sm font-bold text-slate-900">Leadership &amp; Architects</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Certified enterprise SAP consultants with hands-on project mastery.</p>
                    </div>

                    <div className="p-3 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-100 select-none cursor-default transition-all">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[#0066FF]" />
                        <span className="text-sm font-bold text-slate-900">Vision &amp; Strategic Heritage</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">10+ years driving operational efficiency and process excellence.</p>
                    </div>

                    <div className="p-3 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-100 select-none cursor-default transition-all">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#0066FF]" />
                        <span className="text-sm font-bold text-slate-900">Global Standards</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">24/7 dedicated enterprise SLA support and statutory tax governance.</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      View on homepage <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
              className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none ${
                isScrolled
                  ? 'text-slate-800 hover:text-[#0066FF]'
                  : 'text-white hover:text-[#38BDF8]'
              }`}
            >
              <span>Our Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180 text-[#0066FF]' : isScrolled ? 'text-slate-500' : 'text-slate-300'
                }`}
              />
            </button>

            {/* Services Mega Dropdown */}
            {activeDropdown === 'services' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[740px]"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_25px_60px_rgba(2,28,78,0.14)] grid grid-cols-2 gap-6 animate-fade-in text-slate-800">
                  <div>
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] font-bold pb-2 border-b border-slate-100 mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4" /> SAP Enterprise Practices
                    </h5>
                    <ul className="space-y-2">
                      {SERVICES.filter(s => s.category.includes('SAP')).map((s) => (
                        <li
                          key={s.id}
                          className="p-2.5 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-100 select-none cursor-default transition-all"
                        >
                          <p className="text-xs sm:text-sm font-bold text-slate-900">{s.title}</p>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{s.shortDesc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] font-bold pb-2 border-b border-slate-100 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> IT &amp; Digital Solutions
                    </h5>
                    <ul className="space-y-2">
                      {SERVICES.filter(s => !s.category.includes('SAP')).map((s) => (
                        <li
                          key={s.id}
                          className="p-2.5 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-100 select-none cursor-default transition-all"
                        >
                          <p className="text-xs sm:text-sm font-bold text-slate-900">{s.title}</p>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{s.shortDesc}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                      <button
                        onClick={() => scrollToSection('services')}
                        className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Explore all solutions on page <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
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
              className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none ${
                isScrolled
                  ? 'text-slate-800 hover:text-[#0066FF]'
                  : 'text-white hover:text-[#38BDF8]'
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180 text-[#0066FF]' : isScrolled ? 'text-slate-500' : 'text-slate-300'
                }`}
              />
            </button>

            {/* Industries Mega Dropdown */}
            {activeDropdown === 'industries' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[660px]"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_25px_60px_rgba(2,28,78,0.14)] animate-fade-in text-slate-800">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] font-bold">
                      Enterprise Verticals (6 Core)
                    </span>
                    <span className="text-xs font-mono text-slate-500">Tailored SAP Solutions</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    {INDUSTRIES.map((ind) => (
                      <div
                        key={ind.id}
                        className="p-3.5 rounded-xl hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 select-none cursor-default transition-all"
                      >
                        <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#0066FF]"></span>
                          {ind.name}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">{ind.tagline}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => scrollToSection('industries')}
                      className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      View 6 industry cards <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
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
              className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer py-1 focus:outline-none ${
                isScrolled
                  ? 'text-slate-800 hover:text-[#0066FF]'
                  : 'text-white hover:text-[#38BDF8]'
              }`}
            >
              <span>SAP Training</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'training' ? 'rotate-180 text-[#0066FF]' : isScrolled ? 'text-slate-500' : 'text-slate-300'
                }`}
              />
            </button>

            {/* Training Mega Dropdown */}
            {activeDropdown === 'training' && (
              <div
                className="absolute right-0 top-full pt-3 z-50 w-[660px]"
                onMouseEnter={() => handleMouseEnter('training')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-[0_25px_60px_rgba(2,28,78,0.14)] grid grid-cols-2 gap-6 animate-fade-in text-slate-800">
                  <div>
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] font-bold pb-2 border-b border-slate-100 mb-3 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" /> Functional Modules
                    </h5>
                    <div className="grid grid-cols-2 gap-2 max-h-[230px] overflow-y-auto pr-1">
                      {TRAINING_MODULES.filter(t => t.type === 'functional').map(t => (
                        <div key={t.id} className="p-2 rounded-lg hover:bg-blue-50/60 select-none cursor-default border border-slate-100 transition-colors">
                          <span className="text-[11px] font-mono font-bold text-[#0066FF] block">{t.code}</span>
                          <span className="text-xs font-medium text-slate-800 truncate block mt-0.5">{t.title.split(' (')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] font-bold pb-2 border-b border-slate-100 mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4" /> Technical Modules
                    </h5>
                    <div className="space-y-2">
                      {TRAINING_MODULES.filter(t => t.type === 'technical').map(t => (
                        <div key={t.id} className="p-2 rounded-lg hover:bg-blue-50/60 select-none cursor-default border border-slate-100 transition-colors">
                          <span className="text-[11px] font-mono font-bold text-[#0066FF] block">{t.code}</span>
                          <span className="text-xs font-medium text-slate-800 block mt-0.5">{t.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. Contact Us */}
          <button
            onClick={() => scrollToSection('contact-cta')}
            className={`text-[15px] font-semibold transition-colors cursor-pointer focus:outline-none ${
              isScrolled
                ? 'text-slate-800 hover:text-[#0066FF]'
                : 'text-white hover:text-[#38BDF8]'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* ScoreLabs High-Contrast CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollToSection('contact-cta')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#2563EB] text-white text-sm font-bold transition-all duration-300 shadow-[0_4px_18px_rgba(0,102,255,0.35)] hover:shadow-[0_8px_25px_rgba(0,102,255,0.5)] flex items-center gap-2.5 cursor-pointer focus:outline-none active:scale-95"
          >
            <span>Get Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => scrollToSection('contact-cta')}
            className="px-3.5 py-1.5 rounded-lg bg-[#0066FF] text-white text-xs font-semibold shadow-md"
          >
            Consultation
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border focus:outline-none ${
              isScrolled
                ? 'bg-slate-100 border-slate-200 text-slate-800'
                : 'bg-white/10 border-white/20 text-white'
            }`}
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

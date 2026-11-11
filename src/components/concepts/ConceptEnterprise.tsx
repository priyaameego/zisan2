import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  Sparkles,
  Phone,
  Layers,
  Cpu,
  GraduationCap,
  Rocket,
  BarChart3,
  Globe,
  Compass,
  Zap,
  ChevronDown,
  Building2,
  Lock,
  ArrowUpRight,
  Send,
  MessageSquare,
  Award,
  Database,
  Server
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES,
  TRAINING_MODULES,
  INDUSTRIES
} from '../../data/siteData';

export const ConceptEnterprise: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SAP Consulting',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'SAP Consulting',
        message: ''
      });
    }, 5000);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#020617] text-slate-100 font-sans selection:bg-[#0066FF] selection:text-white overflow-hidden">
      {/* =========================================================================
          SECTION 1 – CINEMATIC 3D HERO (KEN BURNS EFFECT + SAP IT CONSULTING IMAGERY)
          Background: High-end SAP enterprise cloud architecture & digital tech control center
          3D Float & Depth Effects
      ========================================================================= */}
      <section
        id="top"
        className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#020617]"
      >
        {/* Full-width Cinematic SAP IT Consulting Hero Image with slow Ken Burns 3D motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            className="w-full h-full"
          >
            {/* Authentic Enterprise SAP IT Consulting & Cloud Infrastructure Banner Image */}
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=85"
              alt="Intelligent SAP Enterprise IT Consulting"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125"
            />
          </motion.div>
        </div>

        {/* Multi-tier Deep Radial Navy & Electric Blue Lighting Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/70 pointer-events-none"></div>

        {/* 3D Glowing Ambient Blue Mesh Balls */}
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#0052cc]/25 to-[#0066FF]/20 rounded-full blur-[160px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Hero Foreground Content: Left-Aligned Editorial with 3D Depth */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
          <div className="max-w-3xl text-left space-y-7">
            {/* Category Pill with 3D Border & Electric Pulse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-slate-900/60 border border-blue-400/40 backdrop-blur-xl shadow-[0_0_25px_rgba(0,102,255,0.3)] hover:scale-105 transition-transform"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_12px_#38BDF8] animate-ping"></span>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white">
                Next-Gen Enterprise SAP S/4HANA &amp; IT Consulting
              </span>
            </motion.div>

            {/* Giant Title with 3D Text Shadow & Gradient Sheen */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-extrabold text-white tracking-tight leading-[1.06] font-heading drop-shadow-[0_4px_30px_rgba(0,102,255,0.35)]"
            >
              Engineering <br />
              the future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#60A5FA] to-[#0066FF] drop-shadow-[0_2px_20px_rgba(56,189,248,0.5)]">
                your business.
              </span>
            </motion.h1>

            {/* Supporting Paragraph with High Legibility */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl"
            >
              ZisanTech Solutions is a trusted technology partner delivering intelligent SAP solutions, enterprise application development, cloud integration, and business operations consulting for organizations ready to innovate and grow.
            </motion.p>

            {/* 3D Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary 3D Pill: "Speak with our team" */}
              <button
                onClick={() => scrollToSection('contact-cta')}
                className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-[#0052cc] via-[#0066FF] to-[#2563EB] text-white text-base font-bold shadow-[0_8px_28px_rgba(0,102,255,0.45)] hover:shadow-[0_12px_36px_rgba(0,102,255,0.65)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out"></div>
                <Zap className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Speak with our team</span>
              </button>

              {/* Secondary 3D Glass Pill: "Explore Our Services →" */}
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 hover:border-blue-400/60 text-white text-base font-semibold backdrop-blur-xl hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_24px_rgba(0,102,255,0.25)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 text-slate-200 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 – WHO WE ARE (3D Cards & Enterprise Architecture Photography)
          Background: Deep Blue Velvet [#05112E]
      ========================================================================= */}
      <section id="about" className="py-28 relative bg-[#05112E] border-t border-blue-900/30 overflow-hidden">
        {/* Subtle 3D background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 102, 255, 0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 102, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Story & Philosophy with Larger Headings */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                  Who We Are
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-[46px] font-extrabold text-white tracking-tight font-heading leading-tight drop-shadow-md">
                Technology That Creates Real Business Value.
              </h2>

              <p className="text-lg text-slate-200 leading-relaxed font-normal">
                ZisanTech Solutions is dedicated to helping businesses embrace digital transformation through intelligent SAP solutions and modern IT services. Our focus is on aligning technology with real business objectives to improve efficiency, visibility, and decision-making.
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                With a strong foundation in SAP consulting and training, we enable organizations to build capable teams while implementing systems that deliver long-term value. Our approach emphasizes clarity, adaptability, and measurable outcomes in every project we undertake.
              </p>

              {/* 3D Interactive Feature Cards with Hover Tilt */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#0B1E4B] to-[#040E26] border border-blue-500/30 hover:border-[#0066FF] shadow-[0_10px_25px_rgba(2,11,30,0.5)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.3)] transition-all cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white mb-3.5 shadow-md shadow-blue-600/30">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Process Alignment</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-normal">
                    Aligning technology architecture with tangible organizational workflows.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#0B1E4B] to-[#040E26] border border-blue-500/30 hover:border-[#0066FF] shadow-[0_10px_25px_rgba(2,11,30,0.5)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.3)] transition-all cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white mb-3.5 shadow-md shadow-blue-600/30">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Seamless Integration</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-normal">
                    Gate management, weighbridges, e-commerce, banking, and ERP bridges.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#0B1E4B] to-[#040E26] border border-blue-500/30 hover:border-[#0066FF] shadow-[0_10px_25px_rgba(2,11,30,0.5)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.3)] transition-all cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white mb-3.5 shadow-md shadow-blue-600/30">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Continuous SLA</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-normal">
                    Round-the-clock enterprise support and post-go-live stabilization.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column: 3D Layered Image with Glow Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-blue-400/30 shadow-[0_25px_60px_rgba(0,102,255,0.25)] group"
              >
                {/* Genuine Enterprise SAP Technology Consulting Team in Action */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="ZisanTech SAP Consulting Specialists"
                  className="w-full h-[500px] object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05112E] via-transparent to-transparent"></div>

                {/* Floating 3D HUD Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#040E26]/90 backdrop-blur-xl border border-blue-400/30 shadow-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/35">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white font-heading">
                        Enterprise Execution Standard
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Delivering scalable, compliant ERP deployments with certified precision.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 – WHAT WE DO / OUR SERVICES (3D Cards with Dynamic Sheen)
          Background: Deep Midnight Navy [#02081C]
      ========================================================================= */}
      <section id="services" className="py-28 relative bg-[#02081C] border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
                Comprehensive Technology &amp; SAP Solutions.
              </h2>
            </div>
            <p className="text-base text-slate-300 max-w-md leading-relaxed font-light">
              From full-scale SAP S/4HANA migrations to cloud microservices and statutory compliance, we empower enterprises with end-to-end capabilities under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#081944] to-[#030C22] border border-blue-900/60 hover:border-[#0066FF] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_20px_45px_rgba(0,102,255,0.35)] flex flex-col justify-between"
              >
                {/* 3D Image Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081944] via-[#081944]/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-black/70 text-[#38BDF8] border border-blue-400/30 backdrop-blur-md">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors font-heading">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-2.5">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-blue-900/40 space-y-2">
                    {service.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0"></span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => scrollToSection('contact-cta')}
                      className="text-sm font-bold text-[#38BDF8] group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 – INDUSTRIES WE SERVE (Exactly 6 Large 3D Interactive Cards)
          Background: Deep Electric Cobalt [#040E2C]
      ========================================================================= */}
      <section id="industries" className="py-28 relative bg-[#040E2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                Industry Specializations
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Industries We Serve.
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Tailored SAP architectures, batch governance, and real-time operational integration across six core enterprise sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden border border-blue-900/60 hover:border-[#0066FF] transition-all duration-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(0,102,255,0.4)] flex flex-col justify-end"
              >
                {/* Cinematic Image with Smooth 3D Hover Scale */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover object-center group-hover:scale-112 transition-transform duration-700 filter brightness-80 contrast-115 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="w-9 h-9 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-xs font-mono font-bold text-white flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-blue-600/40 border border-blue-400/40 backdrop-blur-md text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-bold shadow-md">
                    Core Vertical
                  </span>
                </div>

                <div className="relative z-10 p-7 space-y-3.5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#38BDF8] transition-colors font-heading drop-shadow-md">
                    {industry.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
                    {industry.tagline}
                  </p>
                  <p className="text-sm text-slate-200 leading-relaxed line-clamp-2">
                    {industry.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {industry.modules.slice(0, 3).map((mod, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/15 text-white border border-white/20 backdrop-blur-md"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                    <span className="text-xs text-slate-300">Tailored Enterprise Architecture</span>
                    <button
                      onClick={() => scrollToSection('contact-cta')}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:scale-110 text-white flex items-center justify-center shadow-lg shadow-blue-600/35 transition-all cursor-pointer"
                      aria-label={`Explore ${industry.name} solutions`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 – WHY CHOOSE ZISANTECH (3D Glowing Enterprise Pillars)
          Background: Deep Obsidian Sapphire [#020A1F]
      ========================================================================= */}
      <section id="why-us" className="py-28 relative bg-[#020A1F] border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                  Why Choose ZisanTech
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight drop-shadow-md">
                Business-Centric Technology That Delivers Real Growth.
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                At ZisanTech Solutions, we combine deep SAP expertise, real-world project delivery, and a thorough understanding of industrial operations to design dependable, future-ready architectures.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-blue-900/40 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-[#38BDF8] flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Process Optimization First
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-normal">
                      We analyze existing workflows to eliminate friction before writing or configuring any line of code.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-blue-900/40 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-[#38BDF8] flex-shrink-0 mt-0.5">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Enterprise Compliance &amp; Security
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-normal">
                      Full statutory compliance for GST, E-Invoice, E-Way Bill, and audited RBAC data governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-[#081B4B] to-[#040E2A] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 shadow-xl space-y-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Experienced SAP Consultants
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Certified professionals with live enterprise implementation expertise ensure your initiatives are executed with architectural precision.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-[#081B4B] to-[#040E2A] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 shadow-xl space-y-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Holistic SAP Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  From initial assessment and scope blue-printing to rollout, integration, and continuous 24/7 SLA maintenance.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-[#081B4B] to-[#040E2A] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 shadow-xl space-y-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Business-Centric Approach
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We prioritize tangible business metrics—shortening production cycles, automating ledgers, and eliminating data silos.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-[#081B4B] to-[#040E2A] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 shadow-xl space-y-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Workforce &amp; Training Enablement
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our training division prepares corporate teams and professionals on live sandbox instances with hands-on scenario learning.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 – HOW WE WORK / OUR APPROACH (3D Connected Timeline)
          Background: Deep Cobalt Sapphire [#041030]
      ========================================================================= */}
      <section id="approach" className="py-28 relative bg-[#041030]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                How We Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Our 4-Step Approach.
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              A disciplined, risk-mitigated delivery lifecycle designed to ensure seamless go-lives and immediate organizational adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#081C4C] to-[#030B1E] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 space-y-4 group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#38BDF8] transition-colors">
                  01
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Discover</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Understanding your business, goals, operational volumes, process gaps, and data readiness.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#081C4C] to-[#030B1E] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 space-y-4 group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#38BDF8] transition-colors">
                  02
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Plan</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Agreeing on scope, quality standards, SAP architecture blueprints, timelines, and safeguards.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#081C4C] to-[#030B1E] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 space-y-4 group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#38BDF8] transition-colors">
                  03
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Deliver</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Executing and building with clear communication, regular demos, automated testing, and seamless go-live.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#081C4C] to-[#030B1E] border border-blue-900/50 hover:border-[#0066FF] transition-all duration-300 space-y-4 group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#38BDF8] transition-colors">
                  04
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Improve</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reviewing results, continuous 24/7 SLA support, process refinement, and long-term optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 – SAP & TECHNOLOGY EXPERTISE
          Background: Deep Obsidian [#02081C]
      ========================================================================= */}
      <section id="expertise" className="py-28 relative bg-[#02081C] border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                  Technology Stack &amp; Skills
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight drop-shadow-md">
                Verified Enterprise SAP &amp; Integration Mastery.
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                We combine deep functional SAP expertise with modern cloud-native integration standards, enabling seamless communication between shop floor machinery, weighbridges, financial ledgers, and external portals.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-bold">SAP Consulting &amp; Implementations</span>
                    <span className="text-[#38BDF8] font-bold">90%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0052cc] to-[#0066FF] rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-bold">System &amp; Hardware Integration (Weighbridge/IoT)</span>
                    <span className="text-[#38BDF8] font-bold">75%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0052cc] to-[#0066FF] rounded-full w-[75%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-bold">SAP Training Excellence &amp; Sandbox Access</span>
                    <span className="text-[#38BDF8] font-bold">85%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0052cc] to-[#0066FF] rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-bold">Enterprise IT &amp; Statutory Compliance (E-Invoice)</span>
                    <span className="text-[#38BDF8] font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0052cc] to-[#0066FF] rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-[#081B4B] to-[#040E2A] border border-blue-900/50 shadow-2xl space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
                    Functional &amp; Technical Module Footprint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Specialized modular expertise deployed across diverse industries.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2.5 font-bold">
                    Core Functional Modules:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TRAINING_MODULES.filter(m => m.type === 'functional').map(mod => (
                      <span
                        key={mod.id}
                        className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-blue-900/50 text-xs font-medium text-slate-100 select-none hover:border-[#0066FF] transition-colors"
                      >
                        <strong className="text-[#38BDF8] mr-1">{mod.code}:</strong>
                        <span>{mod.title.split(' (')[0]}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider mb-2.5 font-bold">
                    Core Technical Modules:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TRAINING_MODULES.filter(m => m.type === 'technical').map(mod => (
                      <span
                        key={mod.id}
                        className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-blue-900/50 text-xs font-medium text-slate-100 select-none hover:border-[#0066FF] transition-colors"
                      >
                        <strong className="text-[#60A5FA] mr-1">{mod.code}:</strong>
                        <span>{mod.title}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 – CONTACT CTA (3D Lead Generation Consultation Form)
          Background: Deep Electric Cobalt [#040E2C]
      ========================================================================= */}
      <section id="contact-cta" className="py-28 relative bg-[#040E2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#38BDF8]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                  Initiate Engagement
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight drop-shadow-md">
                Ready To Transform Your Enterprise Systems?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                Consult with our senior SAP architects and enterprise technology advisors. We provide comprehensive technical evaluations, scoping roadmaps, and dedicated delivery governance.
              </p>

              <div className="space-y-4 pt-2">
                <motion.div
                  whileHover={{ x: 6 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-blue-900/50 hover:border-[#0066FF] transition-all flex items-center gap-4 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Telephone Hotline
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.primaryPhone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-blue-900/50 hover:border-[#0066FF] transition-all flex items-center gap-4 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#0066FF] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Direct Email Inquiry
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.primaryEmail}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#081B4B] to-[#020B1E] border border-blue-400/30 shadow-[0_25px_60px_rgba(0,102,255,0.25)]"
              >
                <h3 className="text-2xl font-bold text-white font-heading">
                  Request an Architecture Consultation
                </h3>
                <p className="text-sm text-slate-300 mt-1 mb-6">
                  Submit your enterprise requirement. A senior technical director will respond within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                    <p className="text-sm text-slate-200">
                      Thank you for contacting ZisanTech Solutions. Our enterprise consulting board has received your details and will connect promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-bold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-blue-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-bold">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@enterprise.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-blue-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-bold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-blue-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-bold">
                          Area of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#040D26] border border-blue-900/50 text-white text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                        >
                          <option value="SAP Consulting">SAP Consulting &amp; Advisory</option>
                          <option value="SAP S/4HANA Rollout">SAP Rollout &amp; Implementation</option>
                          <option value="SAP Integration">System Integration (Weighbridge/IoT)</option>
                          <option value="SAP Support & Hypercare">24/7 SLA Support &amp; Hyper-care</option>
                          <option value="Corporate SAP Training">Corporate / Workforce Training</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-bold">
                        Project Scope or Message
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your systems environment, requirements or timeline..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-blue-900/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#2563EB] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/35 active:scale-95 hover:shadow-[0_10px_30px_rgba(0,102,255,0.6)]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

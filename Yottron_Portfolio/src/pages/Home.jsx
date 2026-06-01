import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Herobg from "../assets/images/home.webp";
import Aiagents from "../assets/images/aiagents.webp";
import Webapplication from "../assets/images/webapplication.webp";
import Mobileapp from "../assets/images/mobileapp.webp";
import Cybersecurity from "../assets/images/cybersecurity.webp";
import i2 from "../assets/images/i2.webp";
import i3 from "../assets/images/i3.webp";
import Cloudmigration from "../assets/images/cl1.webp";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import THEME from "../styles/theme";

import {
  Brain,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Monitor,
  Server,
  Database,
  Link2,
  Cpu,
  Lock,
  Eye,
  Scale,
  Mail,
  Phone,
  ClipboardCheck,
  Heart,
  RefreshCw,
  Code2 as CodeIcon,
  Globe,
  Search,
  FileText,
  Bug,
  CheckCircle,
  Gauge,
  Layers,
} from "lucide-react";

import simpleImg from "../assets/images/i3.webp";
import mediumImg from "../assets/images/a1.png";
import complexImg from "../assets/images/b4.webp";
import trustBg from "../assets/images/ab2.png";
import saasImg from "../assets/images/b2.webp";
import overviewImg from "../assets/images/mob2.png";
import cloudHero from "../assets/images/cloudmigration.png";

function BrochureCover() {
  const COVER_SERVICES = [
    { icon: Brain,      name: "AI Agents & Automation",        color: "#7c3aed" },
    { icon: Code2,      name: "Web Application Development",    color: "#2563eb" },
    { icon: Smartphone, name: "Mobile App Development",         color: "#059669" },
    { icon: Cloud,      name: "Cloud Migrations",               color: "#0284c7" },
    { icon: Shield,     name: "Cybersecurity",                  color: "#f97316" },
  ];

  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-[44%] flex flex-col justify-center items-center px-8 py-16 lg:py-20 lg:pl-14">
          <div className="max-w-md">
            <img src={Logo} alt="Yottron" className="w-full max-w-[450px]" />
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-gray-400">Since 2022</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="lg:w-[56%] bg-white flex flex-col justify-center px-8 py-16 lg:py-20 lg:pr-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[3px] rounded-full" style={{ background: THEME.colors.primary }} />
              <span className="text-lg font-bold uppercase tracking-[0.4em]" style={{ color: THEME.colors.primary }}>
                Our Expertise
              </span>
            </div>

            <div className="space-y-1 mb-10">
              {COVER_SERVICES.map(({ icon: Icon, name, color }, i) => (
                <div
                  key={name}
                  className="group flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200"
                  style={{
                    borderBottom: i < COVER_SERVICES.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  <div
                    className="w-[38px] h-[38px] rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}14`, border: `1px solid ${color}28` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <span className="text-[15px] font-medium" style={{ color: "#1f2937" }}>{name}</span>
                  <div className="ml-auto opacity-0 ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${THEME.colors.primary}10`, border: `1px solid ${THEME.colors.primary}25` }}>
                  <Mail size={14} style={{ color: THEME.colors.primary }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Email</p>
                  <p className="text-sm font-semibold" style={{ color: "#1f2937" }}>hr@yottron.com</p>
                </div>
              </div>
              <div className="w-px h-9 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${THEME.colors.primary}10`, border: `1px solid ${THEME.colors.primary}25` }}>
                  <Phone size={14} style={{ color: THEME.colors.primary }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Phone</p>
                  <p className="text-sm font-semibold" style={{ color: "#1f2937" }}>+91 7358817435</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Herobg})` }}
        />
        <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a] via-[#0d0d1a]/30 to-transparent" />
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-4%",
            width: 640,
            height: 640,
            background: "radial-gradient(circle, rgba(245,113,61,0.16) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-8%",
            left: "-6%",
            width: 520,
            height: 520,
            background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-lg font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Powered by Intelligent Automation
          </div>

          <div className="mb-9">
            <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-bold text-light leading-[1.12] tracking-tight mb-5">
              <span
                style={{
                  background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.hover} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Intelligence
              </span>{" "}
              That Learns. Adapts. Evolves.
            </h1>
            <p className="text-light/70 text-lg md:text-xl leading-relaxed max-w-[520px]">
              We build AI systems that grow smarter with every interaction
              turning raw data into real business outcomes.
            </p>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center gap-6 lg:gap-10 relative w-full max-w-[320px] mx-auto">
          {[
            { src: i2, slogan: "Trusted. Secure. Enterprise Ready.", align: "mx-auto lg:self-end lg:ml-[50%] lg:mr-[-200px]", labelPos: "left" },
            { src: i3, slogan: "Future-Ready. Built to Scale.", align: "mx-auto lg:self-start lg:-ml-46", labelPos: "right" },
          ].map((img, i) => (
            <div key={i} className={`relative w-[260px] ${img.align}`}>
              <div className="relative">
                <div className="relative p-[2px] rounded-2xl overflow-hidden">
                  <div
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: "200%",
                      height: "200%",
                      transform: "translate(-50%, -50%)",
                      background: "conic-gradient(from 90deg, transparent 0%, #f5713d 12%, #ff9a6c 18%, transparent 33%)",
                    }}
                  />
                  <div
                    className="relative z-10 rounded-2xl overflow-hidden bg-light/[0.04] backdrop-blur-sm h-[180px]"
                    style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.15)" }}
                  >
                    <img src={img.src} alt={img.slogan} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div
                  className={`absolute z-10 hidden lg:block ${img.labelPos === "top-left" ? "top-0 left-4 -translate-y-1/2" : img.labelPos === "left" ? "top-1/2 left-0 -translate-y-1/2 -translate-x-3/4" : "top-1/2 right-0 -translate-y-1/2 translate-x-3/4"}`}
                >
                  <span className="inline-block bg-primary/15 backdrop-blur-sm text-primary text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-lg whitespace-nowrap border border-primary/25">
                    {img.slogan}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIPricing() {
  const PLANS = [
    { name: "Simple Agent", subtitle: "Single workflow", desc: "Clear inputs and outputs ideal for document processing or content generation tasks.", weeks: "6–8 weeks", pct: 50, price: "$6K–$10K", trad: "$12K–$18K", save: "Save ~50%", tag: "Document Processing", img: simpleImg, color: "#38bdf8" },
    { name: "Medium Agent", subtitle: "Multi-step pipelines", desc: "Integrations, decision logic, and monitoring for business operations and data workflows.", weeks: "8–12 weeks", pct: 75, price: "$10K–$15K", trad: "$18K–$28K", save: "Save ~45%", tag: "Business Operations", img: mediumImg, featured: true, color: "#f5713d" },
    { name: "Complex Agent", subtitle: "Advanced multi-agent", desc: "Real-time data, custom models, and high-reliability requirements like trading bots.", weeks: "12–16 weeks", pct: 100, price: "$15K–$22K", trad: "$28K–$40K", save: "Save ~45%", tag: "Multi-Agent Systems", img: complexImg, color: "#a78bfa" },
  ];
  const MS = ["6 wks", "8 wks", "12 wks", "16 wks"];
  const MC = ["#38bdf8", "#f5713d", "#f5713d", "#a78bfa"];

  return (
    <div className="rounded-2xl p-8 md:p-20 mt-32" style={{ background: "#fafafa" }}>
      <div className="text-center mb-10">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Investment</p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Timeline & <span style={{ color: THEME.colors.primary }}>Investment</span></h3>
      </div>
      <div className="relative flex justify-between items-start mb-6 px-2 md:px-8">
        <div className="absolute left-2 right-2 md:left-8 md:right-8 h-[1px] top-[6px]" style={{ background: "linear-gradient(to right, #38bdf8, #f5713d 50%, #a78bfa)" }} />
        {MS.map((l, i) => (
          <div key={l} className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: MC[i], boxShadow: `0 0 10px ${MC[i]}88` }} />
            <span className="text-gray-500 text-xs font-medium">{l}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PLANS.map((p) => (
          <div key={p.name} className="rounded-2xl overflow-hidden flex flex-col bg-white shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="relative h-44 overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0" />
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-sm" style={{ background: `${p.color}25`, border: `1px solid ${p.color}55`, color: p.color }}>{p.save}</div>
            </div>
            <div className="flex flex-col flex-1 p-6 gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: p.color }}>{p.subtitle}</p>
                <h4 className="text-gray-900 font-bold text-lg mb-2">{p.name}</h4>
                 <p className="text-gray-600 text-base leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Timeline</span>
                  <span className="text-gray-700 font-medium">{p.weeks}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden bg-gray-200">
                  <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(to right, ${p.color}70, ${p.color})` }} />
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-gray-900 font-bold text-xl">{p.price}</p>
                    <p className="text-gray-400 text-xs line-through mt-0.5">{p.trad}</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>{p.tag}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AITrust() {
  const items = [
    { icon: Shield, title: "Data Privacy & Protection", desc: "Enterprise controls across access, storage, and processing your data stays yours.", color: "#38bdf8" },
    { icon: Lock, title: "Enterprise-Grade Security", desc: "Hardened architectures across pipelines, models, and runtime environments.", color: "#f5713d" },
    { icon: Eye, title: "Explainability (XAI)", desc: "Every agent decision is traceable, auditable, and explainable to stakeholders.", color: "#a78bfa" },
    { icon: Scale, title: "Bias Mitigation", desc: "Active monitoring and correction processes to keep model behavior fair and reliable.", color: "#34d399" },
    { icon: ClipboardCheck, title: "AI Governance", desc: "Lifecycle traceability, version control, and accountability frameworks engineered in.", color: "#f59e0b" },
    { icon: Heart, title: "Responsible AI", desc: "Transparent, accountable design principles aligned with emerging AI industry standards.", color: "#f43f5e" },
  ];
  return (
    <div className="relative rounded-2xl overflow-hidden mt-20">
      <div className="absolute inset-0">
        <img src={trustBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,46,0.94) 0%, rgba(22,33,62,0.90) 100%)" }} />
      </div>
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Trust & Compliance</p>
          <h3 className="text-3xl md:text-4xl font-bold text-light">Governed, Compliant & <span style={{ color: THEME.colors.primary }}>Responsibly Autonomous</span></h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.045)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18`, border: `1px solid ${color}38` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <h5 className="text-light font-bold text-sm">{title}</h5>
                <p className="text-light/70 text-base leading-relaxed mt-1.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebWhatWeBuild() {
  const BUILD_ITEMS = [
    { title: "SaaS Products", desc: "Full-featured software-as-a-service platforms built around your business model and ready to scale from day one." },
    { title: "Internal Business Tools", desc: "Purpose-built internal systems that replace tangled spreadsheets and fragmented workflows with a single, unified platform." },
    { title: "Customer-Facing Applications", desc: "Polished, high-performance applications your customers actually enjoy using built for trust, speed, and retention." },
    { title: "IoT & Embedded Platforms", desc: "End-to-end IoT solutions connecting embedded devices, sensors, and edge gateways to cloud platforms for real-time monitoring, analytics, and intelligent automation." },
  ];
  return (
    <div className="rounded-2xl p-8 md:p-12 mt-40" style={{ background: "#fafafa" }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Fast, scalable & <span className="text-primary" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontStyle: "italic" }}>built to last.</span></h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-[1.2]">
          <div className="relative rounded-2xl p-[2px] overflow-hidden" style={{ border: "2px solid rgba(245,113,61,0.4)" }}>
            <div className="relative rounded-2xl bg-white overflow-hidden flex min-h-[280px] shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="relative z-10 flex flex-col justify-center gap-4 p-8 shrink-0 w-[44%]">
                <p className="text-gray-700 text-base leading-relaxed">Custom web applications engineered around your business not generic templates or rigid SaaS tools.</p>
                <div>
                  <p className="text-gray-900 font-bold text-sm">Yottron <span className="text-primary">Solutions</span></p>
                  <p className="text-gray-500 text-xs mt-0.5">Web Application Development</p>
                </div>
              </div>
              <div className="flex-1 relative">
                <img src={saasImg} alt="Web development" className="w-full h-full object-cover" />
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-white/0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-8">
          {BUILD_ITEMS.map(({ title, desc }) => (
            <div key={title}>
              <h4 className="text-gray-900 font-bold text-xl mb-2">{title}</h4>
              <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebTechStack() {
  const TECH = [
    { icon: Monitor, name: "React & Next.js", desc: "Component-driven UIs with server-side rendering for blazing-fast dashboards.", color: "#38bdf8" },
    { icon: Server, name: "Node.js & Express", desc: "Scalable, event-driven backends built for high concurrency.", color: "#4ade80" },
    { icon: Cpu, name: "Python & FastAPI", desc: "High-performance APIs and seamless AI/ML integrations.", color: "#f5713d" },
    { icon: Database, name: "PostgreSQL & MongoDB", desc: "Relational precision or flexible document storage.", color: "#a78bfa" },
    { icon: Cloud, name: "AWS & Cloud Infrastructure", desc: "Production deployments with Docker, auto-scaling, and CI/CD.", color: "#f59e0b" },
    { icon: Link2, name: "REST & GraphQL APIs", desc: "Clean, documented APIs for any third-party integration.", color: "#34d399" },
    { icon: Monitor, name: ".NET & ASP.NET Core", desc: "Enterprise-grade backend services with C# and .NET 8.", color: "#8b5cf6" },
    { icon: Monitor, name: "Java & Spring Boot", desc: "Production-ready enterprise systems with Spring Boot.", color: "#ec4899" },
    { icon: Server, name: "Famewire & Enterprise Stack", desc: "Full lifecycle development with low-code acceleration.", color: "#14b8a6" },
  ];
  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 mt-36">
      <div className="mb-10">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Stack</p>
        <h3 className="text-3xl md:text-4xl font-bold text-light">Technologies We <span style={{ color: THEME.colors.primary }}>Master</span></h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TECH.map(({ icon: Icon, name, desc, color }) => (
          <div key={name} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}18` }}>
              <Icon size={20} style={{ color }} />
            </div>
            <div>
              <h5 className="text-light font-bold text-base mb-1.5">{name}</h5>
              <p className="text-light/70 text-base leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileOverview() {
  const APP_TYPES = [
    { icon: Smartphone, label: "Native Apps", desc: "Peak performance with platform-native UX for iOS and Android using Swift, Kotlin, and Java." },
    { icon: Layers, label: "Cross-Platform", desc: "Ship consistent experiences across platforms from a single codebase using Flutter and React Native." },
    { icon: Cloud, label: "Hybrid & PWAs", desc: "Faster development and easier maintenance with progressive web apps and hybrid architectures." },
  ];
  return (
    <div className="rounded-2xl p-8 md:p-12 mt-32" style={{ background: "#fafafa" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
            <img src={overviewImg} alt="Mobile app development" className="w-full object-cover" style={{ maxHeight: 420 }} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Overview</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Build Your <span style={{ color: THEME.colors.primary }}>Mobile App?</span></h3>
            <p className="text-gray-600 text-base leading-relaxed">We design and develop custom mobile applications that help businesses innovate, scale, and stay connected with their audience.</p>
          </div>
          <p className="text-gray-600 text-base leading-relaxed pl-4" style={{ borderLeft: "2px solid rgba(245,113,61,0.4)" }}>We guide you through every stage strategy, UI/UX design, development, testing, deployment, and ongoing optimization.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {APP_TYPES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col gap-3 p-4 rounded-xl" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
                  <Icon size={18} className="text-primary" />
                </div>
                <h4 className="text-gray-900 font-bold text-base">{label}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileTechStack() {
  const TECH = [
    { icon: CodeIcon, name: "React Native & Expo", desc: "Cross-platform apps with near-native performance and over-the-air updates.", color: "#38bdf8" },
    { icon: Layers, name: "Flutter & Dart", desc: "Pixel-perfect UI across iOS and Android from a single codebase.", color: "#60a5fa" },
    { icon: Smartphone, name: "Swift & iOS Native", desc: "Fully native iOS applications with Swift and SwiftUI.", color: "#f5713d" },
    { icon: Smartphone, name: "Kotlin & Android Native", desc: "Modern Android apps with Kotlin and Jetpack Compose.", color: "#34d399" },
    { icon: Database, name: "Firebase & Backend Services", desc: "Real-time databases, cloud functions, authentication, and analytics.", color: "#f59e0b" },
    { icon: Cloud, name: "Node.js & Serverless APIs", desc: "Lightweight, scalable backends for mobile features.", color: "#a78bfa" },
    { icon: Monitor, name: "App Store & Play Store", desc: "End-to-end store submission management and ASO optimization.", color: "#f43f5e" },
    { icon: Gauge, name: "Performance & Analytics", desc: "Crashlytics, Sentry, and custom dashboards to monitor your app.", color: "#14b8a6" },
    { icon: Shield, name: "Security & Compliance", desc: "End-to-end encryption, secure auth, and data privacy compliance.", color: "#8b5cf6" },
  ];
  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 mt-52">
      <div className="mb-10">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Stack</p>
        <h3 className="text-3xl md:text-4xl font-bold text-light">Technologies We <span style={{ color: THEME.colors.primary }}>Use</span></h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TECH.map(({ icon: Icon, name, desc, color }) => (
          <div key={name} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}18` }}>
              <Icon size={20} style={{ color }} />
            </div>
            <div>
              <h5 className="text-light font-bold text-base mb-1.5">{name}</h5>
              <p className="text-light/70 text-base leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudCapabilities() {
  const items = [
    { icon: Cloud, title: "Multi-Cloud Expertise", desc: "Deep mastery across AWS, Azure, and Google Cloud with certified architects.", color: "#38bdf8" },
    { icon: CodeIcon, title: "Cloud-Native Development", desc: "Modern applications purpose-built for the cloud using microservices and containers.", color: "#f5713d" },
    { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade encryption, zero-trust, and full compliance with GDPR, HIPAA, SOC 2.", color: "#34d399" },
    { icon: Server, title: "Scalable Infrastructure", desc: "Auto-scaling architectures that grow seamlessly with your business.", color: "#a78bfa" },
    { icon: Database, title: "Cost Optimization", desc: "Reduce cloud spend by 30–50% with intelligent resource right-sizing.", color: "#f59e0b" },
    { icon: RefreshCw, title: "Disaster Recovery", desc: "Multi-region backup, automated failover, and RPO/RTO-driven recovery plans.", color: "#f43f5e" },
    { icon: Globe, title: "Hybrid & Multi-Cloud", desc: "Seamlessly connect on-premise, private cloud, and multiple public clouds.", color: "#14b8a6" },
    { icon: CodeIcon, title: "DevOps & Automation", desc: "End-to-end CI/CD pipelines, infrastructure as code, and Kubernetes orchestration.", color: "#8b5cf6" },
  ];
  return (
    <div className="rounded-2xl p-8 md:p-12 mt-32" style={{ background: "#fafafa" }}>
      <div className="text-center mb-12">
        <p className="text-primary/60 text-xs font-bold uppercase tracking-widest mb-3">Why Yottron</p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">End-to-End Cloud <span className="text-primary">Capabilities</span></h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0" style={{ background: `${color}18`, border: `2px solid ${color}30` }}>
              <Icon size={26} style={{ color }} />
            </div>
            <h4 className="text-gray-900 font-bold text-base">{title}</h4>
            <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudServices() {
  const items = [
    { icon: Cloud, title: "Cloud Consulting", desc: "Strategic guidance to optimize your cloud journey and maximize ROI." },
    { icon: Database, title: "Cloud Migration", desc: "Seamless transition to AWS, Azure, or GCP with zero downtime." },
    { icon: Server, title: "Infrastructure Management", desc: "24/7 monitoring and management of your cloud infrastructure." },
    { icon: RefreshCw, title: "DevOps & CI/CD", desc: "Automated pipelines and infrastructure as code for faster delivery." },
    { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance." },
    { icon: Globe, title: "Cloud-Native Development", desc: "Scalable applications architected for the cloud using microservices." },
  ];
  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 mt-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-[45%] shrink-0">
          <img src={cloudHero} alt="Cloud Services" className="w-full h-56 object-cover rounded-xl" />
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-medium" style={{ background: "rgba(245,113,61,0.1)", border: "1px solid rgba(245,113,61,0.2)", color: "rgba(245,113,61,0.8)" }}>{tag}</span>
              ))}
            </div>
            <h4 className="text-light font-bold text-base uppercase tracking-wide mb-2">Get a Cloud Quote Today!</h4>
            <p className="text-light/55 text-sm leading-relaxed">Receive a transparent and tailored cloud pricing estimate that fits your needs.</p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-light mb-6">We have cloud solutions that will <span className="text-primary">elevate your business</span></h3>
          <div className="flex flex-col gap-5">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(245,113,61,0.12)", border: "1px solid rgba(245,113,61,0.25)" }}>
                  <Icon size={17} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-light font-bold text-base mb-1">{title}</h4>
                  <p className="text-light/70 text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CyberCapabilities() {
  const items = [
    { number: "01", icon: Shield, title: "Extensive Security Expertise", desc: "Deep knowledge across security frameworks, compliance standards, and threat landscapes.", bullets: ["Industry-leading cyber security expertise", "Experience with various security frameworks", "Design complex security architectures", "Enterprise-grade deployments"], tags: ["Security Auditing", "Threat Modeling", "Compliance", "SIEM"] },
    { number: "02", icon: Lock, title: "Custom Security Development", desc: "Full-cycle custom cyber security solutions that integrate seamlessly.", bullets: ["Full-cycle solution development", "Secure applications and protocols", "Zero-trust implementation", "API security design"], tags: ["Secure SDLC", "API Security", "Zero Trust", "DevSecOps"] },
    { number: "03", icon: Eye, title: "Security & Reliability First", desc: "Robust measures and thorough testing to keep your infrastructure protected.", bullets: ["Industry-standard encryption", "Regular vulnerability assessments", "GDPR & HIPAA compliance", "Incident response planning"], tags: ["Encryption", "Vulnerability Scanning", "GDPR", "HIPAA"] },
    { number: "04", icon: Server, title: "Scalable Defense Infrastructure", desc: "Security architectures that grow with your business.", bullets: ["Flexible scalable architecture", "Cloud-based security solutions", "Multi-cloud environment support", "Zero-trust network access"], tags: ["Auto-Scaling", "Cloud Security", "Multi-Cloud", "IAM"] },
  ];
  return (
    <div className="rounded-2xl p-8 md:p-12 mt-32" style={{ background: "#fafafa" }}>
      <div className="mb-12">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Why Yottron</p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Security Capabilities</h3>
      </div>
      <div className="flex flex-col divide-y divide-gray-200">
        {items.map(({ number, icon: Icon, title, desc, bullets, tags }) => (
          <div key={number} className="flex flex-col lg:flex-row items-start gap-6 py-8">
            <div className="w-20 h-16 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(245,113,61,0.1)", border: "1.5px solid rgba(245,113,61,0.25)" }}>
              <Icon size={26} className="text-primary" />
            </div>
            <div className="lg:w-[30%] shrink-0">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded text-primary bg-primary/10 border border-primary/20 w-fit mb-2">{number}</span>
              <h4 className="text-gray-900 font-bold text-base mb-2">{title}</h4>
              <p className="text-gray-700 text-base">{desc}</p>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-3">Key Highlights</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                {bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span className="text-gray-600 text-base">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full text-primary/75 border border-primary/20" style={{ background: "rgba(245,113,61,0.07)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CyberProcess() {
  const steps = [
    { number: "01", icon: Search, title: "Security Assessment", desc: "Comprehensive evaluation of your current security posture identifying vulnerabilities and risks across your entire infrastructure.", features: ["Vulnerability Scanning", "Risk Assessment", "Compliance Gap Analysis"] },
    { number: "02", icon: FileText, title: "Strategic Planning", desc: "Customized security roadmap tailored to your business needs, budget, and compliance requirements with phased implementation.", features: ["Architecture Design", "Stack Recommendations", "Implementation Timeline"] },
    { number: "03", icon: Shield, title: "Implementation", desc: "Deployment of cutting-edge security solutions with minimal disruption ensuring seamless integration with your existing systems.", features: ["Tool Configuration", "Network Segmentation", "Access Controls"] },
    { number: "04", icon: Bug, title: "Testing & Validation", desc: "Rigorous testing with simulated real-world attacks to validate the effectiveness of your defenses and incident response.", features: ["Penetration Testing", "Control Verification", "Incident Drills"] },
    { number: "05", icon: Eye, title: "Continuous Monitoring", desc: "24/7 threat detection and rapid response ensuring your systems remain protected against evolving cyber threats.", features: ["Real-Time Detection", "Security Updates", "Monthly Reports"] },
  ];
  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 mt-20">
      <div className="text-center mb-12">
        <p className="text-light text-xs font-bold uppercase tracking-widest mb-3">Our Methodology</p>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">Security Implementation Process</h3>
        <p className="text-light/80 text-lg max-w-2xl mx-auto leading-relaxed mt-4">A proven methodology that ensures comprehensive protection at every stage from initial assessment to ongoing monitoring.</p>
      </div>
      <div className="hidden lg:block">
        <div className="relative mb-12">
          <div className="absolute left-0 right-0 top-[23px] h-[1px] bg-white/[0.08]" />
          <div className="absolute left-0 top-[23px] h-[1px] bg-primary/40" style={{ width: "100%" }} />
          <div className="flex justify-between">
            {steps.map(({ number }) => (
              <div key={number} className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-primary/30">
                  <span className="text-sm font-black text-primary">{number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, title, desc, features }) => (
            <div key={title} className="flex flex-col gap-3 p-4 rounded-xl border border-white/[0.05]" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20">
                <Icon size={16} className="text-primary" />
              </div>
              <h4 className="text-light font-bold text-sm leading-snug">{title}</h4>
              <p className="text-light/60 text-sm leading-relaxed">{desc}</p>
              <div className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-white/[0.05]">
                {features.map((f) => (
                  <span key={f} className="text-[11px] text-light/60 flex items-center gap-1.5">
                    <CheckCircle size={10} className="text-primary/60 shrink-0" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden relative flex flex-col gap-6">
        <div className="absolute left-[23px] top-0 bottom-0 w-[1px] bg-white/[0.08]" />
        {steps.map(({ number, icon: Icon, title, desc, features }) => (
          <div key={number} className="relative flex gap-5">
            <div className="relative z-10 shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-primary/30">
                <Icon size={16} className="text-primary" />
              </div>
            </div>
            <div className="flex-1 pb-4 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Step {number}</span>
              <h4 className="text-light font-bold text-base mt-1 mb-2">{title}</h4>
              <p className="text-light/60 text-base leading-relaxed mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {features.map((f) => (
                  <span key={f} className="text-[11px] px-2.5 py-1 rounded-full text-light/45 border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICE_DETAILS = [
  {
    icon: Brain, label: "AI Agents & Automation", color: "#a78bfa", img: Aiagents,
    details: [
      "Autonomous AI agents that reason, decide, and execute multi-step workflows",
      "LLM integration with RAG pipelines for context-aware responses",
      "Custom ML models trained on your data for predictive analytics",
      "Multi-agent orchestration with monitoring and self-correction loops",
      "Conversational AI, document processing, and intelligent automation",
    ],
    sections: () => (<><AIPricing /><AITrust /></>),
  },
  {
    icon: Code2, label: "Web Application Development", color: "#60a5fa", img: Webapplication,
    details: [
      "Custom SaaS platforms built around your business model",
      "High-performance React/Node.js full-stack applications",
      "Cloud-native architecture with auto-scaling and CI/CD",
      "REST & GraphQL APIs integrated with your existing stack",
      "Responsive, SEO-optimized UIs with enterprise-grade security",
    ],
    sections: () => (<><WebWhatWeBuild /><WebTechStack /></>),
  },
  {
    icon: Smartphone, label: "Mobile Application Development", color: "#34d399", img: Mobileapp,
    details: [
      "Native iOS (Swift) & Android (Kotlin) apps with peak performance",
      "Cross-platform builds using Flutter and React Native",
      "End-to-end UI/UX design from wireframes to polished prototypes",
      "App Store & Google Play submission with ASO optimization",
      "Real-time sync, offline mode, and push notification integration",
    ],
    sections: () => (<><MobileOverview /><MobileTechStack /></>),
  },
  {
    icon: Cloud, label: "Cloud Migrations", color: "#38bdf8", img: Cloudmigration,
    details: [
      "Seamless migration to AWS, Azure, or GCP with zero downtime",
      "Cloud-native development using microservices and serverless patterns",
      "Kubernetes orchestration and Docker containerization",
      "Enterprise security, compliance (GDPR/HIPAA/SOC 2), and DR planning",
      "Cost optimization reducing cloud spend by 30–50%",
    ],
    sections: () => (<><CloudCapabilities /><CloudServices /></>),
  },
  {
    icon: Shield, label: "Cybersecurity", color: "#f97316", img: Cybersecurity,
    details: [
      "Comprehensive security assessments and vulnerability scanning",
      "Penetration testing with simulated real-world attack scenarios",
      "Zero-trust architecture design and implementation",
      "24/7 threat detection, incident response, and compliance auditing",
      "Encryption, IAM, and security monitoring across your infrastructure",
    ],
    sections: () => (<><CyberCapabilities /><CyberProcess /></>),
  },
];

function Services() {
  return (
    <section id="services" className="relative px-[5%] py-16 overflow-hidden bg-surface">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">Our Services</h2>
          <p className="text-light/80 text-lg max-w-xl mx-auto leading-relaxed">End-to-end digital solutions for startups and enterprises ready to scale.</p>
        </div>

        {SERVICE_DETAILS.map(({ icon: Icon, label, color, img, details, sections }) => (
          <div key={label} className="mt-44 mb-32 last:mb-0">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-light mb-6">{label}</h3>
                <ul className="space-y-4">
                  {details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: color }} />
                      <span className="text-light/80 text-lg leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/40 to-transparent z-10" />
                  <img src={img} alt={label} className="w-full h-[260px] md:h-[320px] lg:h-[380px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm" style={{ background: `${color}30`, border: `1px solid ${color}50` }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <span className="text-light font-semibold text-sm">{label}</span>
                    </div>
                    <p className="text-light/75 text-base leading-relaxed">{details[0]}</p>
                  </div>
                </div>
              </div>
            </div>
            {sections()}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <BrochureCover />
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
    </>
  );
}

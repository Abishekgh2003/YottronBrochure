import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Globe,
  Code2,
  Sparkles,
  Gauge,
  Shield,
  Layers,
  Zap,
  Palette,
  Bug,
  Rocket,
  RefreshCw,
  Monitor,
  Database,
  Cloud,
} from "lucide-react";

import heroBg from "../assets/images/mob12.png";
import overviewImg from "../assets/images/mob2.png";
import processBg from "../assets/images/b4.webp";
import THEME from "../styles/theme";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative h-[70vh] min-h-[500px] overflow-hidden bg-surface"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        animate={{ scale: inView ? 1 : 1.12 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/40 to-surface/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-surface/60" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
          opacity: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 h-full flex items-center justify-center px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-primary/80 text-xs font-bold uppercase tracking-[0.25em] mb-5"
          >
            Mobile Application Development
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-light leading-[1.15] mb-6"
          >
            Mobile Experiences,{" "}
            <span className="text-primary">Built for People</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-light/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            From native iOS and Android apps to cross-platform solutions, we
            build mobile experiences that users love and businesses rely on
            every day.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const APP_TYPES = [
  {
    icon: Smartphone,
    label: "Native Apps",
    desc: "Peak performance with platform-native UX for iOS and Android using Swift, Kotlin, and Java.",
  },
  {
    icon: Layers,
    label: "Cross-Platform",
    desc: "Ship consistent experiences across platforms from a single codebase using Flutter and React Native.",
  },
  {
    icon: Globe,
    label: "Hybrid & PWAs",
    desc: "Faster development and easier maintenance with progressive web apps and hybrid architectures.",
  },
];

function Overview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface2 px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-8%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div className="relative lg:sticky lg:top-32">
          <div className="relative">
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <img
                src={overviewImg}
                alt="Mobile app development"
                className="w-full h-full object-cover"
                style={{ maxHeight: 520 }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm"
              style={{
                border: "1px solid rgba(245,113,61,0.2)",
                zIndex: -1,
              }}
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -left-4 top-12 px-4 py-2 rounded-xl bg-surface2/80 backdrop-blur-md"
              style={{ border: "1px solid rgba(245,113,61,0.2)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>

            <motion.div
              className="absolute -right-3 bottom-16 px-4 py-2 rounded-xl bg-surface2/80 backdrop-blur-md"
              style={{ border: "1px solid rgba(56,189,248,0.25)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Overview
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-5">
              Ready to Build Your{" "}
              <span style={{ color: "#f5713d" }}>Mobile App?</span>
            </h2>
            <p className="text-light/60 text-base leading-relaxed">
              We design and develop custom mobile applications that help
              businesses innovate, scale, and stay connected with their
              audience. From iOS and Android to cross-platform builds, our team
              owns the full development lifecycle with precision, creativity,
              and engineering rigor.
            </p>
          </motion.div>

          <motion.p
            variants={stagger(0.15)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-light/55 text-sm leading-relaxed pl-5"
            style={{ borderLeft: "2px solid rgba(245,113,61,0.4)" }}
          >
            Whether you're validating a new idea or expanding an established
            product, we guide you through every stage strategy, UI/UX design,
            development, testing, deployment, and ongoing optimization.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

const MOBILE_TECH_ITEMS = [
  {
    icon: Code2,
    name: "React Native & Expo",
    desc: "Cross-platform apps with near-native performance, shared business logic, and over-the-air updates for rapid iteration.",
    color: "#38bdf8",
  },
  {
    icon: Layers,
    name: "Flutter & Dart",
    desc: "Pixel-perfect UI across iOS and Android from a single codebase with Flutter's expressive widget system and hot reload.",
    color: "#60a5fa",
  },
  {
    icon: Smartphone,
    name: "Swift & iOS Native",
    desc: "Fully native iOS applications built with Swift and SwiftUI, delivering optimal performance and deep OS integration.",
    color: "#f5713d",
  },
  {
    icon: Smartphone,
    name: "Kotlin & Android Native",
    desc: "Modern Android apps built with Kotlin and Jetpack Compose, leveraging platform-specific features for peak user experience.",
    color: "#34d399",
  },
  {
    icon: Database,
    name: "Firebase & Backend Services",
    desc: "Real-time databases, cloud functions, authentication, push notifications, and analytics all powered by Firebase.",
    color: "#f59e0b",
  },
  {
    icon: Cloud,
    name: "Node.js & Serverless APIs",
    desc: "Lightweight, scalable backends that power mobile features from user auth and payments to real-time sync and AI inference.",
    color: "#a78bfa",
  },
  {
    icon: Monitor,
    name: "App Store & Play Store",
    desc: "End-to-end store submission management, ASO optimization, TestFlight beta testing, and staged rollouts.",
    color: "#f43f5e",
  },
  {
    icon: Gauge,
    name: "Performance & Analytics",
    desc: "Crashlytics, Sentry, Mixpanel, and custom dashboards to monitor, measure, and continuously improve your app.",
    color: "#14b8a6",
  },
  {
    icon: Shield,
    name: "Security & Compliance",
    desc: "End-to-end encryption, secure authentication, data privacy compliance (GDPR, CCPA), and regular security audits.",
    color: "#8b5cf6",
  },
];

const MOBILE_CAROUSEL_ITEMS = [
  { icon: Zap, label: "iOS & Android Native", color: "#f5713d" },
  { icon: Cloud, label: "Cross-Platform Dev", color: "#38bdf8" },
  { icon: Shield, label: "Push Notifications", color: "#4ade80" },
  { icon: Gauge, label: "App Store Optimization", color: "#a78bfa" },
  { icon: Smartphone, label: "UI/UX Design", color: "#f59e0b" },
  { icon: Rocket, label: "CI/CD Pipelines", color: "#34d399" },
  { icon: Zap, label: "Real-Time Sync", color: "#f5713d" },
  { icon: Cloud, label: "Offline Mode", color: "#38bdf8" },
  { icon: Shield, label: "Biometric Auth", color: "#4ade80" },
  { icon: Gauge, label: "Performance Testing", color: "#a78bfa" },
  { icon: Smartphone, label: "Responsive Layouts", color: "#f59e0b" },
  { icon: Rocket, label: "App Store Deploy", color: "#34d399" },
];

function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface2 px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-14"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Our Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Technologies We <span style={{ color: "#f5713d" }}>Use</span>
          </h2>
          <p className="text-light/50 text-base max-w-lg leading-relaxed">
            Modern, production-proven technologies chosen for your project's
            needs not for our convenience. Every tool in our stack is
            battle-tested at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOBILE_TECH_ITEMS.map(({ icon: Icon, name, desc, color }, i) => (
            <motion.div
              key={name}
              variants={stagger(i * 0.09)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${color}18` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <h5 className="text-light font-bold text-sm mb-1.5">{name}</h5>
                <p className="text-light/45 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[...MOBILE_CAROUSEL_ITEMS, ...MOBILE_CAROUSEL_ITEMS].map(
                ({ icon: Icon, label, color }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-light/[0.06] bg-light/[0.03] backdrop-blur-sm whitespace-nowrap"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${color}20`,
                        border: `1px solid ${color}45`,
                      }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <span className="text-light font-medium text-sm">
                      {label}
                    </span>
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    number: "01",
    icon: Zap,
    title: "Discovery & Strategy",
    category: "Planning & Research",
    desc: "We dig into your business goals, target users, and competitive landscape to shape a clear, focused development roadmap that aligns with your vision.",
    highlights: [
      "User research & persona mapping",
      "Competitive landscape analysis",
      "Feature prioritization & scope definition",
    ],
    deliverables: [
      "Product Requirements Document (PRD)",
      "Validated user personas & journey maps",
      "Technical feasibility & stack recommendation",
      "Sprint-ready project timeline",
    ],
    tools: ["Miro", "Notion", "Figma"],
    color: "#38bdf8",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    category: "Design & Prototyping",
    desc: "Wireframes, prototypes, and polished designs that turn complex flows into intuitive, engaging user experiences your customers will love.",
    highlights: [
      "Low-fi wireframes to high-fi mockups",
      "Interactive prototypes for user validation",
      "Design system & component library setup",
    ],
    deliverables: [
      "Full-screen wireframe deck",
      "Clickable prototype for stakeholder review",
      "Reusable design system & token library",
      "Developer-ready handoff specs (Zeplin/Figma)",
    ],
    tools: ["Figma", "Adobe XD", "Zeplin"],
    color: "#f5713d",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    category: "Engineering & Code",
    desc: "Clean, scalable code written by senior engineers using modern frameworks and proven architectural patterns for long-term maintainability.",
    highlights: [
      "Clean architecture with SOLID principles",
      "CI/CD pipelines configured from day one",
      "API integration & robust state management",
    ],
    deliverables: [
      "Versioned source code on private repository",
      "Configured CI/CD pipeline with automated builds",
      "Integrated REST/GraphQL APIs with documentation",
      "Functional staging build for QA handoff",
    ],
    tools: ["Flutter", "React Native", "Swift", "Kotlin"],
    color: "#a78bfa",
  },
  {
    number: "04",
    icon: Bug,
    title: "Testing & QA",
    category: "Quality Assurance",
    desc: "End-to-end testing across devices, OS versions, and real-world scenarios to ensure rock-solid performance and reliability at launch.",
    highlights: [
      "Automated unit & integration test suites",
      "Cross-device & OS compatibility checks",
      "Performance benchmarking & security audits",
    ],
    deliverables: [
      "Full test coverage report & sign-off document",
      "Resolved bug tracker export with severity ratings",
      "Performance benchmark results (load, memory, battery)",
      "Security audit summary & vulnerability clearance",
    ],
    tools: ["Detox", "Jest", "Firebase Test Lab"],
    color: "#34d399",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment",
    category: "Launch & Release",
    desc: "Smooth releases on the App Store and Google Play with full launch support, store optimization, and post-deploy monitoring.",
    highlights: [
      "App Store & Google Play submission handled",
      "Store listing optimization (ASO) included",
      "Post-launch crash & performance monitoring",
    ],
    deliverables: [
      "Live app published on App Store & Google Play",
      "Optimized store listing with screenshots & metadata",
      "Release notes & version changelog documentation",
      "Real-time crash & uptime monitoring dashboard",
    ],
    tools: ["Fastlane", "Firebase", "TestFlight"],
    color: "#f59e0b",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Ongoing Evolution",
    category: "Support & Growth",
    desc: "Continuous updates, security patches, and performance improvements that keep your app fast, secure, and ahead of OS changes.",
    highlights: [
      "Regular OS compatibility & SDK updates",
      "User feedback-driven feature sprints",
      "Analytics-backed performance optimization",
    ],
    deliverables: [
      "Monthly health & analytics reports",
      "Prioritized feature backlog with effort estimates",
      "Patch releases for OS & third-party SDK updates",
      "Quarterly roadmap review & growth planning session",
    ],
    tools: ["Firebase Analytics", "Sentry", "Mixpanel"],
    color: "#f43f5e",
  },
];

const CAROUSEL_INTERVAL = 3500;

function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef(null);
  const barControls = useAnimationControls();
  const stepStartRef = useRef(null);
  const remainingRef = useRef(CAROUSEL_INTERVAL);
  const pausedRef = useRef(false);
  const active = STEPS[activeStep];
  const primary = THEME.colors.primary;

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const runStep = (duration) => {
    clearTimer();
    stepStartRef.current = Date.now();
    remainingRef.current = duration;
    barControls.set({ width: "0%" });
    barControls.start({
      width: "100%",
      transition: { duration: duration / 1000, ease: "linear" },
    });
    timerRef.current = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, duration);
  };

  useEffect(() => {
    if (!pausedRef.current) {
      runStep(CAROUSEL_INTERVAL);
    } else {
      barControls.set({ width: "0%" });
      remainingRef.current = CAROUSEL_INTERVAL;
    }
    return clearTimer;
  }, [activeStep]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
    clearTimer();
    barControls.stop();
    const elapsed = stepStartRef.current
      ? Date.now() - stepStartRef.current
      : 0;
    remainingRef.current = Math.max(300, CAROUSEL_INTERVAL - elapsed);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    const remaining = remainingRef.current;
    stepStartRef.current = Date.now();
    barControls.start({
      width: "100%",
      transition: { duration: remaining / 1000, ease: "linear" },
    });
    timerRef.current = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, remaining);
  };

  const handleStepClick = (i) => {
    remainingRef.current = CAROUSEL_INTERVAL;
    setActiveStep(i);
  };

  return (
    <section
      ref={ref}
      className="bg-surface px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${primary}08 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: primary }}
          >
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Mobile App Development{" "}
            <span style={{ color: primary }}>Process</span>
          </h2>
          <p className="text-light/70 text-base max-w-2xl mx-auto leading-relaxed">
            A proven, structured methodology that delivers your app on time, on
            budget, and ready to exceed user expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col">
            {STEPS.map(({ number, icon: Icon, title, category }, i) => {
              const isActive = activeStep === i;
              return (
                <motion.button
                  key={number}
                  variants={stagger(i * 0.08)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  onClick={() => handleStepClick(i)}
                  className="flex items-start gap-4 py-5 text-left w-full"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: isActive
                      ? `3px solid ${primary}`
                      : "3px solid transparent",
                    paddingLeft: isActive ? "14px" : "0px",
                    transition:
                      "border-color 0.2s, padding 0.2s, background 0.2s",
                    background: isActive ? `${primary}08` : "transparent",
                    borderRadius: isActive ? "0 12px 12px 0" : "0",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                    style={{
                      background: isActive
                        ? `${primary}18`
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? primary + "50" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <span
                      className="font-black text-xs transition-colors duration-200"
                      style={{
                        color: isActive ? primary : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-[15px] leading-tight mb-2 transition-colors duration-200"
                      style={{
                        color: isActive ? primary : "rgba(255,255,255,0.88)",
                      }}
                    >
                      {title}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <Icon size={12} className="text-white/50" />
                      <span className="text-xs text-white/50">{category}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div
            className="lg:sticky lg:top-28"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div
                className="relative rounded-2xl p-7 mb-4 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(255,255,255,0.09)`,
                  borderTop: `3px solid ${primary}`,
                }}
              >
                <p className="relative z-10 text-light/75 text-base italic leading-relaxed mt-4">
                  "{active.desc}"
                </p>

                <div className="relative z-10 mt-5 h-[2px] rounded-full overflow-hidden bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: primary, width: "0%" }}
                    animate={barControls}
                  />
                </div>
              </div>

              <div
                className="rounded-2xl p-5 mb-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: primary }}
                >
                  What's Included
                </p>
                <ul className="flex flex-col gap-3">
                  {active.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: `${primary}18`,
                          border: `1px solid ${primary}40`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full block"
                          style={{ background: primary }}
                        />
                      </span>
                      <span className="text-light/70 text-sm leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-5 mb-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: primary }}
                >
                  Key Deliverables
                </p>
                <ul className="flex flex-col gap-3">
                  {active.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-[2px] text-light/25 text-xs font-bold shrink-0 w-4 text-right">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="w-px self-stretch bg-white/10 shrink-0" />
                      <span className="text-light/65 text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MobileAppDev() {
  return (
    <>
      <Hero />
      <Overview />
      <TechStack />
      <Process />
    </>
  );
}

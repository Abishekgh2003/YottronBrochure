import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Database, Cloud, Link2, Cpu } from "lucide-react";

import heroBg from "../assets/images/webapplication.webp";
import saasImg from "../assets/images/b2.webp";
import internalImg from "../assets/images/b2.webp";
import customerImg from "../assets/images/b3.webp";

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
            Web Application Development
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-light leading-[1.15] mb-6"
          >
            Custom Web Apps,{" "}
            <span className="text-primary">Built Around Your Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-light/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Custom web applications engineered around your business not generic
            templates or rigid SaaS tools. From idea to production, we build
            modern, scalable web platforms that work the way you do.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const BUILD_ITEMS = [
  {
    title: "SaaS Products",
    desc: "Full-featured software-as-a-service platforms built around your business model and ready to scale from day one. We turn your concept into a live, revenue-generating product without the bloat of off-the-shelf tools.",
  },
  {
    title: "Internal Business Tools",
    desc: "Purpose-built internal systems that replace tangled spreadsheets and fragmented workflows with a single, unified platform. Your team gets exactly the tools they need, designed around how they actually work.",
  },
  {
    title: "Customer-Facing Applications",
    desc: "Polished, high-performance applications your customers actually enjoy using built for trust, speed, and retention. Every detail is shaped around your users, not borrowed from a generic template.",
  },
  {
    title: "IoT & Embedded Platforms",
    desc: "End-to-end IoT solutions connecting embedded devices, sensors, and edge gateways to cloud platforms for real-time monitoring, analytics, and intelligent automation.",
  },
];

const TECH_TAGS = [
  { label: "React", color: "#38bdf8" },
  { label: "Node.js", color: "#4ade80" },
  { label: "Python", color: "#f5713d" },
  { label: "AWS", color: "#f59e0b" },
  { label: "PostgreSQL", color: "#a78bfa" },
];

const WEB_CAROUSEL_ITEMS = [
  { icon: Cpu, label: "Lightning Fast APIs", color: "#f5713d" },
  { icon: Cloud, label: "Cloud Native Architecture", color: "#38bdf8" },
  { icon: Server, label: "Zero Downtime Deploys", color: "#4ade80" },
  { icon: Database, label: "Scalable Data Layer", color: "#a78bfa" },
  { icon: Monitor, label: "SEO Optimised", color: "#f59e0b" },
  { icon: Link2, label: "99.9% Uptime SLA", color: "#34d399" },
  { icon: Cpu, label: "Enterprise Grade Security", color: "#f5713d" },
  { icon: Cloud, label: "Auto-Scaling Infrastructure", color: "#38bdf8" },
  { icon: Server, label: "CI / CD Pipelines", color: "#4ade80" },
  { icon: Database, label: "Real-Time Ready", color: "#a78bfa" },
  { icon: Monitor, label: "Mobile Responsive", color: "#f59e0b" },
  { icon: Link2, label: "Built to Last", color: "#34d399" },
];

function WhatWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface2 px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-light leading-tight mb-5">
            Fast, scalable &amp;{" "}
            <span
              className="text-primary"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              built to last.
            </span>
          </h2>
          <p className="text-light/60 text-base max-w-2xl mx-auto leading-relaxed">
            We replace expensive agencies and one-size-fits-all platforms with
            custom web applications engineered around your business delivered
            fast, priced honestly, and built to grow with you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch lg:items-center">
          <motion.div
            className="flex-[1.2]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl p-[2px] overflow-hidden">
              <motion.div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "200%",
                  height: "200%",
                  x: "-50%",
                  y: "-50%",
                  background:
                    "conic-gradient(from 0deg, transparent 0%, #f5713d 12%, #ff9a6c 18%, transparent 33%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative rounded-2xl bg-dark overflow-hidden flex min-h-[300px]">
                <div className="relative z-10 flex flex-col justify-center gap-4 p-8 shrink-0 w-[44%]">
                  <div className="flex flex-col gap-4">
                    <motion.p
                      className="text-light/75 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Custom web applications engineered around your business
                      not generic templates or rigid SaaS tools. From idea to
                      production, we build platforms that work the way you do.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6, duration: 0.45 }}
                    >
                      <p className="text-light font-bold text-sm">
                        Yottron <span className="text-primary">Solutions</span>
                      </p>
                      <p className="text-light/60 text-xs mt-0.5">
                        Web Application Development
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="flex-1 relative">
                  <motion.img
                    src={saasImg}
                    alt="Web application development"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
                  />
                  <div className="absolute inset-y-0 left-0 w-62 bg-gradient-to-r from-dark to-dark/0 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center gap-10 lg:pt-4">
            {BUILD_ITEMS.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.14,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-2"
              >
                <h4 className="text-light font-bold text-xl">{title}</h4>
                <p className="text-light/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
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
              {[...WEB_CAROUSEL_ITEMS, ...WEB_CAROUSEL_ITEMS].map(
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

const TECH_ITEMS = [
  {
    icon: Monitor,
    name: "React & Next.js",
    desc: "Component-driven UIs with server-side rendering and static generation for blazing-fast SaaS dashboards and customer-facing apps.",
    color: "#38bdf8",
  },
  {
    icon: Server,
    name: "Node.js & Express",
    desc: "Scalable, event-driven backends built for high concurrency ideal for real-time features, REST APIs, and microservices.",
    color: "#4ade80",
  },
  {
    icon: Cpu,
    name: "Python & FastAPI",
    desc: "High-performance APIs and seamless AI/ML integrations for data-heavy applications and intelligent workflows.",
    color: "#f5713d",
  },
  {
    icon: Database,
    name: "PostgreSQL & MongoDB",
    desc: "Relational precision or flexible document storage architected for your workload, with Redis caching for high-throughput systems.",
    color: "#a78bfa",
  },
  {
    icon: Cloud,
    name: "AWS & Cloud Infrastructure",
    desc: "Production deployments on AWS, Vercel, and GCP with Docker containers, auto-scaling, and CI/CD pipelines.",
    color: "#f59e0b",
  },
  {
    icon: Link2,
    name: "REST & GraphQL APIs",
    desc: "Clean, documented APIs that integrate with payment gateways, CRMs, and any third-party data source in your stack.",
    color: "#34d399",
  },
  {
    icon: Cpu,
    name: ".NET & ASP.NET Core",
    desc: "Enterprise-grade backend services built with C# and .NET 8, delivering high-performance REST APIs, microservices, and robust business logic layers.",
    color: "#8b5cf6",
  },
  {
    icon: Monitor,
    name: "Java & Spring Boot",
    desc: "Production-ready Java applications with Spring Boot's rapid development framework, ideal for large-scale enterprise systems and cloud-native microservices.",
    color: "#ec4899",
  },
  {
    icon: Server,
    name: "Famewire & Enterprise Stack",
    desc: "Full lifecycle development integrating Famewire's low-code acceleration with custom enterprise frameworks for faster delivery without sacrificing flexibility.",
    color: "#14b8a6",
  },
];

function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
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
            Technologies We <span style={{ color: "#f5713d" }}>Master</span>
          </h2>
          <p className="text-light/65 text-base max-w-lg leading-relaxed">
            Modern, production-proven technologies chosen for your project's
            needs not for our convenience. Every tool in our stack is
            battle-tested at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_ITEMS.map(({ icon: Icon, name, desc, color }, i) => (
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
                <p className="text-light/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WebApplication() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <TechStack />
    </>
  );
}

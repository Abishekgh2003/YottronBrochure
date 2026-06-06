import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Shield,
  RefreshCw,
  Code2,
  Globe,
} from "lucide-react";

import heroBg from "../assets/images/cloudmigration.png";

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
            Cloud Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-light leading-[1.15] mb-6"
          >
            Scale Without Limits,{" "}
            <span className="text-primary">Operate Without Boundaries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-light/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Yottron's cloud solutions provide scalable, secure, and efficient
            infrastructure enabling businesses to enhance flexibility, reduce
            costs, and accelerate digital transformation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const CLOUD_CAROUSEL_ITEMS = [
  { icon: Cloud, label: "AWS Migration", color: "#f59e0b" },
  { icon: Cloud, label: "Azure Solutions", color: "#38bdf8" },
  { icon: Cloud, label: "Google Cloud Platform", color: "#4ade80" },
  { icon: Server, label: "Kubernetes & Docker", color: "#a78bfa" },
  { icon: Shield, label: "Cloud Security", color: "#f43f5e" },
  { icon: Database, label: "Database Migration", color: "#34d399" },
  { icon: RefreshCw, label: "Zero-Downtime Deploy", color: "#f5713d" },
  { icon: Code2, label: "Infrastructure as Code", color: "#8b5cf6" },
  { icon: Globe, label: "Hybrid Cloud", color: "#14b8a6" },
  { icon: Shield, label: "Disaster Recovery", color: "#f59e0b" },
  { icon: Server, label: "Auto Scaling", color: "#38bdf8" },
  { icon: Database, label: "Cloud Cost Optimization", color: "#4ade80" },
];

const CAPABILITIES = [
  {
    icon: Cloud,
    title: "Multi-Cloud Expertise",
    desc: "Deep mastery across AWS, Azure, and Google Cloud with certified architects who design, migrate, and optimize enterprise-grade cloud environments for maximum performance and uptime.",
    color: "#38bdf8",
  },
  {
    icon: Code2,
    title: "Cloud-Native Development",
    desc: "Modern applications purpose-built for the cloud using microservices, containers, and serverless architectures that scale automatically and reduce operational overhead.",
    color: "#f5713d",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Enterprise-grade encryption, zero-trust architecture, real-time threat detection, and full compliance with GDPR, HIPAA, SOC 2, and ISO 27001 standards.",
    color: "#34d399",
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    desc: "Auto-scaling architectures that grow seamlessly with your business from startups handling spikes to enterprises managing millions of transactions daily.",
    color: "#a78bfa",
  },
  {
    icon: Database,
    title: "Cost Optimization",
    desc: "Reduce cloud spend by 30–50% with intelligent resource right-sizing, reserved instances, auto-scaling policies, and continuous cost governance strategies.",
    color: "#f59e0b",
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery",
    desc: "Multi-region backup, automated failover, and RPO/RTO-driven recovery plans that keep your business running through any outage or data loss scenario.",
    color: "#f43f5e",
  },
  {
    icon: Globe,
    title: "Hybrid & Multi-Cloud",
    desc: "Seamlessly connect on-premise, private cloud, and multiple public clouds into a unified infrastructure that gives you flexibility and avoids vendor lock-in.",
    color: "#14b8a6",
  },
  {
    icon: Code2,
    title: "DevOps & Automation",
    desc: "End-to-end CI/CD pipelines, infrastructure as code, Kubernetes orchestration, and automated monitoring that accelerate delivery and eliminate manual errors.",
    color: "#8b5cf6",
  },
];

function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface2 px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-primary/60 text-xs font-bold uppercase tracking-widest mb-3">
            Why Yottron
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            End-to-End Cloud <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-light/60 text-base max-w-2xl mx-auto leading-relaxed">
            From strategy to execution, we deliver enterprise-grade cloud
            solutions that reduce costs, improve performance, and accelerate
            innovation all backed by certified experts and proven methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPABILITIES.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              variants={stagger(i * 0.08)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: `${color}18`,
                  border: `2px solid ${color}30`,
                  boxShadow: `0 0 20px ${color}15`,
                }}
              >
                <Icon size={26} style={{ color }} />
              </div>
              <h3 className="text-light font-bold text-base">{title}</h3>
              <p className="text-light/55 text-sm leading-relaxed">{desc}</p>
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
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...CLOUD_CAROUSEL_ITEMS, ...CLOUD_CAROUSEL_ITEMS].map(
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

const SERVICES = [
  {
    icon: Cloud,
    title: "Cloud Consulting",
    desc: "Strategic guidance to optimize your cloud journey and maximize ROI from day one.",
  },
  {
    icon: Database,
    title: "Cloud Migration",
    desc: "Seamless transition to AWS, Azure, or GCP with zero downtime and full data integrity.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    desc: "24/7 monitoring and management of your cloud infrastructure with proactive optimization.",
  },
  {
    icon: RefreshCw,
    title: "DevOps & CI/CD",
    desc: "Automated pipelines, container orchestration, and infrastructure as code for faster delivery.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance built into every layer.",
  },
  {
    icon: Globe,
    title: "Cloud-Native Development",
    desc: "Scalable applications architected for the cloud using microservices and serverless patterns.",
  },
];

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="w-full lg:w-[45%] shrink-0"
          >
            <div className="relative">
              <div className="absolute -top-3 -right-3 z-10 grid grid-cols-5 gap-[6px] p-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[5px] h-[5px] rounded-full bg-white/20"
                  />
                ))}
              </div>
              <img
                src={heroBg}
                alt="Cloud Services"
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>

            <div className="mt-6">

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "AWS",
                  "Azure",
                  "GCP",
                  "Kubernetes",
                  "Terraform",
                  "Docker",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium"
                    style={{
                      background: "rgba(245,113,61,0.1)",
                      border: "1px solid rgba(245,113,61,0.2)",
                      color: "rgba(245,113,61,0.8)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-light font-bold text-base uppercase tracking-wide mb-2">
                Get a Cloud Quote Today!
              </h3>
              <p className="text-light/55 text-sm leading-relaxed mb-5">
                Receive a transparent and tailored cloud pricing estimate that
                fits your needs. No delays, no hidden fees just a
                straightforward quote to help you make informed decisions.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-light px-7 py-3 rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: "0 6px 22px rgba(245,113,61,0.35)" }}
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-light leading-snug mb-4">
                We have cloud solutions that will{" "}
                <span className="text-primary">elevate your business</span>
              </h2>
              <p className="text-light/70 text-sm leading-relaxed">
                Comprehensive cloud solutions designed to scale your business
                and optimize performance across every layer of your
                infrastructure.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {SERVICES.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={stagger(i * 0.08)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(245,113,61,0.12)",
                      border: "1px solid rgba(245,113,61,0.25)",
                    }}
                  >
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-light font-bold text-sm mb-1">
                      {title}
                    </h4>
                    <p className="text-light/60 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CloudMigrations() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Services />
    </>
  );
}

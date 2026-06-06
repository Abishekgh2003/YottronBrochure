import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Eye, Scale, ClipboardCheck, Heart } from "lucide-react";

import heroBg from "../assets/images/aiagents.webp";
import simpleImg from "../assets/images/i3.webp";
import mediumImg from "../assets/images/a1.png";
import complexImg from "../assets/images/b4.webp";
import trustBg from "../assets/images/ab2.png";

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
            AI Agents & Automation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-light leading-[1.15] mb-6"
          >
            Autonomous AI Agents,{" "}
            <span className="text-primary">Engineered for Enterprise Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-light/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            We design and orchestrate intelligent agent systems that reason,
            decide, and execute multi-step business workflows coordinating
            across your tools and learning from every outcome.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Simple Agent",
    subtitle: "Single workflow",
    desc: "Clear inputs and outputs ideal for document processing or content generation tasks.",
    weeks: "6–8 weeks",
    weeksPercent: 50,
    price: "$6K – $10K",
    trad: "$12K – $18K",
    save: "Save ~50%",
    useCase: "Document Processing",
    img: simpleImg,
    color: "#38bdf8",
  },
  {
    name: "Medium Agent",
    subtitle: "Multi-step pipelines",
    desc: "Integrations, decision logic, and monitoring for business operations and data workflows.",
    weeks: "8–12 weeks",
    weeksPercent: 75,
    price: "$10K – $15K",
    trad: "$18K – $28K",
    save: "Save ~45%",
    useCase: "Business Operations",
    img: mediumImg,
    featured: true,
    color: "#f5713d",
  },
  {
    name: "Complex Agent",
    subtitle: "Advanced multi-agent",
    desc: "Real-time data, custom models, and high-reliability requirements like trading bots.",
    weeks: "12–16 weeks",
    weeksPercent: 100,
    price: "$15K – $22K",
    trad: "$28K – $40K",
    save: "Save ~45%",
    useCase: "Multi-Agent Systems",
    img: complexImg,
    color: "#a78bfa",
  },
];

const MILESTONES = ["6 wks", "8 wks", "12 wks", "16 wks"];
const MILESTONE_COLORS = ["#38bdf8", "#f5713d", "#f5713d", "#a78bfa"];

function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface2 px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-[-5%] left-[-8%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-5%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Timeline & <span style={{ color: "#f5713d" }}>Investment</span>
          </h2>
          <p className="text-light/60 text-base max-w-xl mx-auto leading-relaxed">
            Fixed-scope engagements with transparent pricing. Our AI-accelerated
            build process compresses traditional timelines by 40–60%.
          </p>
        </motion.div>

        <div className="relative flex justify-between items-start mb-5 px-2 md:px-8">
          <motion.div
            className="absolute left-2 right-2 md:left-8 md:right-8 h-[1px] top-[6px]"
            style={{
              background:
                "linear-gradient(to right, #38bdf8, #f5713d 50%, #a78bfa)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          />
          {MILESTONES.map((label, i) => (
            <motion.div
              key={label}
              className="relative z-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ delay: 0.4 + i * 0.14, duration: 0.4 }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: MILESTONE_COLORS[i],
                  boxShadow: `0 0 10px ${MILESTONE_COLORS[i]}88`,
                }}
              />
              <span className="text-light/50 text-xs font-medium whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map(
            (
              {
                name,
                subtitle,
                desc,
                weeks,
                weeksPercent,
                price,
                trad,
                save,
                useCase,
                img,
                featured,
                color,
              },
              i,
            ) => (
              <motion.div
                key={name}
                variants={stagger(0.1 + i * 0.12)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "#16213e",
                  border: featured
                    ? `1px solid rgba(255,255,255,0.07)`
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: featured ? `0 0 40px ${color}18` : "none",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.55 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #16213e 0%, rgba(22,33,62,0.3) 60%, transparent 100%)",
                    }}
                  />
                  <motion.div
                    className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-sm"
                    style={{
                      background: `${color}25`,
                      border: `1px solid ${color}55`,
                      color,
                    }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  >
                    {save}
                  </motion.div>
                </div>

                <div className="flex flex-col flex-1 p-6 gap-5">
                  <div>
                    <p
                      className="text-[10px] font-black uppercase tracking-widest mb-1"
                      style={{ color }}
                    >
                      {subtitle}
                    </p>
                    <h3 className="text-light font-bold text-lg mb-2">
                      {name}
                    </h3>
                    <p className="text-light/55 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-light/45">Timeline</span>
                      <span className="text-light/65 font-medium">{weeks}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${color}70, ${color})`,
                        }}
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${weeksPercent}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.1,
                          delay: 0.65 + i * 0.16,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/[0.06]">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-light font-bold text-xl">{price}</p>
                        <p className="text-white/25 text-xs line-through mt-0.5">
                          {trad}
                        </p>
                      </div>
                      <div
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide"
                        style={{
                          background: `${color}15`,
                          border: `1px solid ${color}30`,
                          color,
                        }}
                      >
                        {useCase}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}


const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "Data Privacy & Protection",
    desc: "Enterprise controls across access, storage, and processing your data stays yours.",
    color: "#38bdf8",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    desc: "Hardened architectures across pipelines, models, and runtime environments.",
    color: "#f5713d",
  },
  {
    icon: Eye,
    title: "Explainability (XAI)",
    desc: "Every agent decision is traceable, auditable, and explainable to stakeholders.",
    color: "#a78bfa",
  },
  {
    icon: Scale,
    title: "Bias Mitigation",
    desc: "Active monitoring and correction processes to keep model behavior fair and reliable.",
    color: "#34d399",
  },
  {
    icon: ClipboardCheck,
    title: "AI Governance",
    desc: "Lifecycle traceability, version control, and accountability frameworks engineered in.",
    color: "#f59e0b",
  },
  {
    icon: Heart,
    title: "Responsible AI",
    desc: "Transparent, accountable design principles aligned with emerging AI industry standards.",
    color: "#f43f5e",
  },
];

function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={trustBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,26,46,0.94) 0%, rgba(22,33,62,0.90) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.038) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-[-10%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,113,61,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-[5%]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Trust & Compliance
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Governed, Compliant &{" "}
            <span style={{ color: "#f5713d" }}>Responsibly Autonomous</span>
          </h2>
          <p className="text-light/55 text-base max-w-xl mx-auto leading-relaxed">
            Autonomy without oversight is a liability. Every agent we ship
            includes enterprise-grade security, transparent decision trails, and
            governance frameworks aligned with emerging AI standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              variants={stagger(i * 0.08)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{
                y: -5,
                boxShadow: `0 16px 40px ${color}22`,
              }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.045)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}38`,
                }}
                whileHover={{ scale: 1.12, rotate: 10 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <Icon size={22} style={{ color }} />
              </motion.div>

              <div className="flex flex-col gap-1.5 flex-1">
                <h5 className="text-light font-bold text-sm group-hover:text-primary transition-colors duration-200">
                  {title}
                </h5>
                <p className="text-light/55 text-sm leading-relaxed">{desc}</p>
              </div>

              <div className="h-[2px] rounded-full overflow-hidden bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full origin-left"
                  style={{ background: color, scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AiAutomation() {
  return (
    <>
      <Hero />
      <Pricing />
      <Trust />
    </>
  );
}

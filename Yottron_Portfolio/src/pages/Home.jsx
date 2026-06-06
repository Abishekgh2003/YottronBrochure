import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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

import {
  Brain,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Monitor,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Brain,
    label: "AI Agents & Automation",
    href: "/ai-automation",
    color: "#a78bfa",
    desc: "Intelligent workflows and ML models that eliminate repetitive tasks and unlock data-driven decisions.",
    img: Aiagents,
    keywords: ["AI Agents", "Intelligent Automation", "Machine Learning", "AI", "LLM", "Large Language Models", "Generative AI", "GPT", "RAG", "Retrieval Augmented Generation", "Workflow Automation", "Data-Driven", "Predictive Analytics", "NLP", "Computer Vision", "Smart Automation", "ML Models", "Deep Learning", "Conversational AI", "Chatbots", "AI Chat", "Automation", "MLOps", "AI Development", "AI Solutions"],
  },
  {
    icon: Code2,
    label: "Web Application Developement",
    href: "/web-application",
    color: "#60a5fa",
    desc: "High-performance web apps built with modern stacks, optimized for scale and user experience.",
    img: Webapplication,
    keywords: ["React", "Node.js", "Full Stack", "SaaS Platforms", "Responsive Design", "API Development", "Microservices", "UI/UX", "Cloud Native"],
  },
  {
    icon: Smartphone,
    label: "Mobile Application Developement",
    href: "/mobile-app",
    color: "#34d399",
    desc: "Cross-platform mobile experiences with native performance and polished interfaces.",
    img: Mobileapp,
    keywords: ["Cross-Platform", "iOS", "Android", "React Native", "Native Performance", "Seamless UX", "App Store", "Mobile-First"],
  },
  {
    icon: Cloud,
    label: "Cloud Migrations",
    href: "/cloud-migrations",
    color: "#38bdf8",
    desc: "Seamless cloud transitions with zero-downtime, cost optimization, and modern DevOps.",
    img: Cloudmigration,
    keywords: ["AWS", "Azure", "GCP", "Zero-Downtime", "DevOps CI/CD", "Kubernetes", "Docker", "Scalable Architecture"],
  },
  {
    icon: Shield,
    label: "Cybersecurity",
    href: "/cybersecurity",
    color: "#f97316",
    desc: "End-to-end security assessments, penetration testing, and compliance implementation.",
    img: Cybersecurity,
    keywords: ["Penetration Testing", "Compliance", "Threat Detection", "Data Protection", "Zero Trust", "Encryption", "Vulnerability Assessment", "Security Assessments"],
  },
];

const GEOMETRIC = [
  {
    type: "ring",
    size: 80,
    left: "6%",
    top: "15%",
    borderColor: "rgba(245,113,61,0.2)",
    dur: 25,
    delay: 0,
    drift: 30,
  },
  {
    type: "ring",
    size: 140,
    left: "85%",
    top: "70%",
    borderColor: "rgba(139,92,246,0.18)",
    dur: 35,
    delay: 2,
    drift: 45,
  },
  {
    type: "ring",
    size: 50,
    left: "40%",
    top: "10%",
    borderColor: "rgba(56,189,248,0.15)",
    dur: 20,
    delay: 1,
    drift: 20,
  },
  {
    type: "ring",
    size: 100,
    left: "75%",
    top: "25%",
    borderColor: "rgba(245,113,61,0.12)",
    dur: 30,
    delay: 3,
    drift: 35,
  },
  {
    type: "hex",
    size: 55,
    left: "15%",
    top: "60%",
    borderColor: "rgba(139,92,246,0.2)",
    dur: 28,
    delay: 0.5,
    drift: 25,
  },
  {
    type: "hex",
    size: 70,
    left: "60%",
    top: "80%",
    borderColor: "rgba(56,189,248,0.15)",
    dur: 32,
    delay: 1.5,
    drift: 30,
  },
  {
    type: "hex",
    size: 40,
    left: "92%",
    top: "15%",
    borderColor: "rgba(245,113,61,0.13)",
    dur: 22,
    delay: 2.5,
    drift: 20,
  },
  {
    type: "diamond",
    size: 30,
    left: "50%",
    top: "50%",
    color: "rgba(139,92,246,0.12)",
    dur: 18,
    delay: 1,
    drift: 20,
  },
  {
    type: "diamond",
    size: 20,
    left: "30%",
    top: "75%",
    color: "rgba(245,113,61,0.1)",
    dur: 15,
    delay: 3,
    drift: 15,
  },
  {
    type: "diamond",
    size: 25,
    left: "70%",
    top: "40%",
    color: "rgba(56,189,248,0.1)",
    dur: 20,
    delay: 2,
    drift: 18,
  },
];

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
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-[70px]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Herobg})` }}
        />
        <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px]" />
        <motion.div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-4%",
            width: 640,
            height: 640,
            background:
              "radial-gradient(circle, rgba(245,113,61,0.16) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: "-8%",
            left: "-6%",
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, -25, 20, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {GEOMETRIC.map((el, i) => {
          if (el.type === "ring") {
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: el.size,
                  height: el.size,
                  left: `calc(${el.left} - ${el.size / 2}px)`,
                  top: `calc(${el.top} - ${el.size / 2}px)`,
                  border: `1px solid ${el.borderColor}`,
                }}
                animate={{
                  rotate: [0, 360],
                  y: [0, -el.drift, 0],
                }}
                transition={{
                  rotate: {
                    duration: el.dur,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: el.dur * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: el.delay,
                  },
                }}
              />
            );
          }
          if (el.type === "hex") {
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: el.size,
                  height: el.size,
                  left: `calc(${el.left} - ${el.size / 2}px)`,
                  top: `calc(${el.top} - ${el.size / 2}px)`,
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  border: "none",
                  background: "transparent",
                  boxShadow: `inset 0 0 0 1px ${el.borderColor}`,
                }}
                animate={{
                  rotate: [0, -360],
                  y: [0, -el.drift, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  rotate: {
                    duration: el.dur,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: el.dur * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: el.delay,
                  },
                  opacity: {
                    duration: el.dur * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: el.delay,
                  },
                }}
              />
            );
          }
          if (el.type === "diamond") {
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: el.size,
                  height: el.size,
                  left: `calc(${el.left} - ${el.size / 2}px)`,
                  top: `calc(${el.top} - ${el.size / 2}px)`,
                  background: el.color,
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
                animate={{
                  rotate: [0, 90, 0],
                  y: [0, -el.drift, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  rotate: {
                    duration: el.dur,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: el.dur * 0.55,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: el.delay,
                  },
                  opacity: {
                    duration: el.dur * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: el.delay,
                  },
                }}
              />
            );
          }
          return null;
        })}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto  py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Powered by Intelligent Automation
          </motion.div>

          <div className="mb-9">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-bold text-light leading-[1.12] tracking-tight mb-5">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #f5713d 0%, #e77b22 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Intelligence
                </span>{" "}
                That Learns. Adapts. Evolves.
              </h1>
              <p className="text-light/65 text-base md:text-lg leading-relaxed max-w-[500px]">
                We build AI systems that grow smarter with every interaction
                turning raw data into real business outcomes.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-light px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              style={{ boxShadow: "0 6px 22px rgba(245,113,61,0.35)" }}
            >
              Get a Free Quote <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col justify-center gap-10 relative w-full max-w-[320px] mx-auto">
          {[
            {
              src: i2,
              slogan: "Trusted. Secure. Enterprise Ready.",
              align: "self-end ml-[50%] mr-[-200px]",
              labelPos: "left",
            },
            {
              src: i3,
              slogan: "Future-Ready. Built to Scale.",
              align: "self-start -ml-46",
              labelPos: "right",
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.15,
                ease: "easeOut",
              }}
              className={`relative w-[260px] ${img.align}`}
            >
              <div className="relative">
                <div className="relative p-[2px] rounded-2xl overflow-hidden group">
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
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div
                    className="relative z-10 rounded-2xl overflow-hidden bg-light/[0.04] backdrop-blur-sm transition-all duration-400 h-[180px]"
                    style={{
                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.slogan}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`absolute z-10 ${img.labelPos === "top-left" ? "top-0 left-4 -translate-y-1/2" : img.labelPos === "left" ? "top-1/2 left-0 -translate-y-1/2 -translate-x-3/4" : "top-1/2 right-0 -translate-y-1/2 translate-x-3/4"}`}
                >
                  <span className="inline-block bg-primary/15 backdrop-blur-sm text-primary text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-lg whitespace-nowrap border border-primary/25">
                    {img.slogan}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center gap-3 mt-4"
          >
            <div className="relative w-32 h-[1px] overflow-hidden rounded-full">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.div
              className="w-2 h-2 rounded-full border border-primary/40"
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative px-[5%] py-24 overflow-hidden bg-surface"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Our Services
          </h2>
          <p className="text-light/75 text-base max-w-xl mx-auto leading-relaxed">
            End-to-end digital solutions for startups and enterprises ready to
            scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map(
            ({ icon: Icon, label, href, desc, color, img }, i) => (
              <motion.div
                key={label}
                variants={stagger(i * 0.08)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <Link
                  to={href}
                  className="group relative block h-full rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full p-7 justify-end min-h-[320px]">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm"
                      style={{
                        background: `${color}25`,
                        border: `1px solid ${color}50`,
                      }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <h3 className="text-light font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                      {label}
                    </h3>
                    <p className="text-light/65 text-sm leading-relaxed mb-5">
                      {desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ),
          )}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {SERVICES.slice(3).map(
              ({ icon: Icon, label, href, desc, color, img }, i) => (
                <motion.div
                  key={label}
                  variants={stagger((i + 3) * 0.08)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                >
                  <Link
                    to={href}
                    className="group relative block h-full rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full p-7 justify-end min-h-[320px]">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm"
                        style={{
                          background: `${color}25`,
                          border: `1px solid ${color}50`,
                        }}
                      >
                        <Icon size={20} style={{ color }} />
                      </div>
                      <h3 className="text-light font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                        {label}
                      </h3>
                      <p className="text-light/55 text-sm leading-relaxed mb-5">
                        {desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                        Learn more <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ),
            )}
          </div>
        </div>

        <div className="mt-16">
          {(() => {
            const extraKeywords = [
              { keyword: ".NET", color: "#f59e0b", Icon: Monitor },
              { keyword: "ASP.NET Core", color: "#f59e0b", Icon: Monitor },
              { keyword: "C#", color: "#f59e0b", Icon: Monitor },
              { keyword: "Blazor", color: "#f59e0b", Icon: Monitor },
              { keyword: "Entity Framework", color: "#f59e0b", Icon: Monitor },
              { keyword: "Azure", color: "#f59e0b", Icon: Monitor },
              { keyword: "REST APIs", color: "#f59e0b", Icon: Monitor },
            ];
            const keywordItems = [
              ...SERVICES.flatMap((s) =>
                s.keywords.map((kw) => ({ keyword: kw, color: s.color, Icon: s.icon }))
              ),
              ...extraKeywords,
            ];
            const items = [...keywordItems, ...keywordItems, ...keywordItems, ...keywordItems];
            return (
              <>
                <div
                  className="mb-6 overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                  }}
                >
                  <motion.div
                    className="flex gap-4 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 300,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {items.map(({ keyword, color, Icon }, i) => (
                      <div
                        key={`r1-${i}`}
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-light/[0.06] bg-light/[0.03] backdrop-blur-sm whitespace-nowrap hover:border-primary/30 transition-colors duration-300"
                      >
                        <Icon size={14} style={{ color }} />
                        <span className="text-light/80 font-medium text-sm">
                          {keyword}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
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
                    className="flex gap-4 w-max"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                      duration: 300,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...items].reverse().map(({ keyword, color, Icon }, i) => (
                      <div
                        key={`r2-${i}`}
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-light/[0.06] bg-light/[0.03] backdrop-blur-sm whitespace-nowrap hover:border-primary/30 transition-colors duration-300"
                      >
                        <Icon size={14} style={{ color }} />
                        <span className="text-light/80 font-medium text-sm">
                          {keyword}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

function AboutContactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contactY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75],
    ["100%", "10%", "0%"],
  );
  const gradientOpacity = useTransform(scrollYProgress, [0.3, 0.65], [0, 1]);

  return (
    <div ref={sectionRef} className="relative">
      <AboutUs gradientOpacity={gradientOpacity} />
      <motion.div className="sticky bottom-0 z-0" style={{ y: contactY }}>
        <ContactUs />
      </motion.div>
    </div>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const timer = setTimeout(() => {
        const aboutEl = document.getElementById("about");
        if (aboutEl) {
          const aboutAbsoluteBottom =
            aboutEl.getBoundingClientRect().top +
            window.scrollY +
            aboutEl.offsetHeight;
          window.scrollTo({ top: aboutAbsoluteBottom, behavior: "smooth" });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
    if (location.hash === "#about") {
      const timer = setTimeout(() => {
        const el = document.getElementById("about");
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Services />
      <AboutContactSection />
    </>
  );
}

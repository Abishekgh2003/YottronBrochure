import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Search,
  Lock,
  Users,
  Bug,
  Network,
  FileText,
  Eye,
  Server,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import heroBg from "../assets/images/cybersecurity.webp";

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
            Cybersecurity Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-light leading-[1.15] mb-6"
          >
            Strengthen Your{" "}
            <span className="text-primary">Digital Defense</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-light/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Yottron's cybersecurity solutions provide cutting-edge security
            measures to protect your business from digital threats ensuring data
            privacy, integrity, and availability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const CAPABILITIES = [
  {
    number: "01",
    icon: Shield,
    title: "Extensive Security Expertise",
    desc: "Our team brings deep knowledge across security frameworks, compliance standards, and threat landscapes designing and implementing complex architectures tailored to your business.",
    bullets: [
      "Industry-leading knowledge in cyber security technologies and services",
      "Experience with various security frameworks and tools",
      "Ability to design and implement complex security architectures",
      "Strong focus on optimization and efficiency",
      "Proven track record with enterprise-grade deployments",
      "Continuous upskilling on emerging threat vectors",
    ],
    tags: [
      "Security Auditing",
      "Threat Modeling",
      "Compliance",
      "Risk Assessment",
      "SIEM",
      "SOC",
    ],
  },
  {
    number: "02",
    icon: Lock,
    title: "Custom Security Development",
    desc: "From strategy to deployment, we build custom cyber security solutions that integrate seamlessly with your existing systems and scale with your business.",
    bullets: [
      "Full-cycle custom cyber security solution development",
      "Expertise in developing secure applications and protocols",
      "Integration with existing security systems and protocols",
      "Focus on scalability, security, and performance",
      "Continuous support and maintenance post-deployment",
      "API security design and zero-trust implementation",
    ],
    tags: [
      "Secure SDLC",
      "API Security",
      "Protocol Design",
      "Zero Trust",
      "DevSecOps",
    ],
  },
  {
    number: "03",
    icon: Eye,
    title: "Security & Reliability First",
    desc: "We prioritize security and reliability across every solution implementing robust measures and conducting thorough testing to keep your infrastructure protected.",
    bullets: [
      "Implementation of industry-standard encryption techniques",
      "Regular security audits and vulnerability assessments",
      "Compliance with regulatory standards (GDPR, HIPAA)",
      "Continuous monitoring and updates for security patches",
      "Comprehensive backup and disaster recovery plans",
      "Incident response planning and tabletop exercises",
    ],
    tags: [
      "Encryption",
      "Vulnerability Scanning",
      "GDPR",
      "HIPAA",
      "DR Planning",
      "IRP",
    ],
  },
  {
    number: "04",
    icon: Server,
    title: "Scalable Defense Infrastructure",
    desc: "Our security architectures are built to grow with your business from startup to enterprise without ever compromising on performance or protection.",
    bullets: [
      "Flexible architecture for easy scalability",
      "Cloud-based solutions for seamless expansion",
      "Balancing performance and scalability",
      "Synchronized scaling across services",
      "Scalability without compromising performance",
      "Multi-cloud and hybrid environment support",
    ],
    tags: [
      "Auto-Scaling",
      "Zero Trust",
      "Cloud Security",
      "Multi-Cloud",
      "IAM",
      "Edge Security",
    ],
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
        className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
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
          className="mb-20"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Why Yottron
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Security Capabilities
          </h2>
          <p className="text-light/70 text-base max-w-2xl leading-relaxed">
            Comprehensive security capabilities engineered to protect, detect,
            and respond to evolving cyber threats across your entire
            infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col divide-y divide-light/10">
          {CAPABILITIES.map(
            ({ number, icon: Icon, title, desc, bullets, tags }, i) => (
              <motion.div
                key={number}
                variants={stagger(i * 0.12)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 py-9"
              >
                <div
                  className="w-28 h-20 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(245,113,61,0.1)",
                    border: "1.5px solid rgba(245,113,61,0.25)",
                    boxShadow: "0 0 20px rgba(245,113,61,0.08)",
                  }}
                >
                  <Icon size={30} className="text-primary" />
                </div>

                <div className="lg:w-[30%] shrink-0 flex flex-col gap-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded text-primary bg-primary/10 border border-primary/20 w-fit">
                    {number}
                  </span>
                  <h3 className="text-light font-bold text-lg leading-snug">
                    {title}
                  </h3>
                  <p className="text-light/75 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-light/90">
                    Key Highlights
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="text-light/70 text-sm leading-relaxed">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-light/[0.06]">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1 rounded-full text-primary/75 border border-primary/20"
                        style={{ background: "rgba(245,113,61,0.07)" }}
                      >
                        {tag}
                      </span>
                    ))}
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

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Security Assessment",
    desc: "Comprehensive evaluation of your current security posture identifying vulnerabilities and risks across your entire infrastructure.",
    features: [
      "Vulnerability Scanning",
      "Risk Assessment",
      "Compliance Gap Analysis",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategic Planning",
    desc: "Customized security roadmap tailored to your business needs, budget, and compliance requirements with phased implementation.",
    features: [
      "Architecture Design",
      "Stack Recommendations",
      "Implementation Timeline",
    ],
  },
  {
    number: "03",
    icon: Shield,
    title: "Implementation",
    desc: "Deployment of cutting-edge security solutions with minimal disruption ensuring seamless integration with your existing systems.",
    features: ["Tool Configuration", "Network Segmentation", "Access Controls"],
  },
  {
    number: "04",
    icon: Bug,
    title: "Testing & Validation",
    desc: "Rigorous testing with simulated real-world attacks to validate the effectiveness of your defenses and incident response.",
    features: [
      "Penetration Testing",
      "Control Verification",
      "Incident Drills",
    ],
  },
  {
    number: "05",
    icon: Eye,
    title: "Continuous Monitoring",
    desc: "24/7 threat detection and rapid response ensuring your systems remain protected against evolving cyber threats.",
    features: ["Real-Time Detection", "Security Updates", "Monthly Reports"],
  },
];

function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-surface px-[5%] py-24 relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,113,61,0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <p className="text-light text-xs font-bold uppercase tracking-widest mb-3">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Security Implementation Process
          </h2>
          <p className="text-light/75 text-base max-w-2xl mx-auto leading-relaxed">
            A proven methodology that ensures comprehensive protection at every
            stage from initial assessment to ongoing monitoring.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-[23px] h-[1px] bg-white/[0.08]" />
            <motion.div
              className="absolute left-0 top-[23px] h-[1px] bg-primary/40"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            <div className="flex justify-between">
              {STEPS.map(({ number }, i) => (
                <motion.div
                  key={number}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-primary/30">
                    <span className="text-sm font-black text-primary">
                      {number}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {STEPS.map(({ icon: Icon, title, desc, features }, i) => (
              <motion.div
                key={title}
                variants={stagger(0.1 + i * 0.1)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex flex-col gap-3 p-4 rounded-xl border border-white/[0.05] hover:border-primary/20 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20">
                  <Icon size={16} className="text-primary" />
                </div>
                <h3 className="text-light font-bold text-sm leading-snug">
                  {title}
                </h3>
                <p className="text-light/60 text-xs leading-relaxed">{desc}</p>
                <div className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-white/[0.05]">
                  {features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] text-light/60 flex items-center gap-1.5"
                    >
                      <CheckCircle
                        size={10}
                        className="text-primary/60 shrink-0"
                      />
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative flex flex-col gap-6">
            <div className="absolute left-[23px] top-0 bottom-0 w-[1px] bg-white/[0.08]" />
            <motion.div
              className="absolute left-[23px] top-0 w-[1px] bg-primary/40"
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />

            {STEPS.map(({ number, icon: Icon, title, desc, features }, i) => (
              <motion.div
                key={number}
                variants={stagger(i * 0.12)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="relative flex gap-5"
              >
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-primary/30">
                    <Icon size={16} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1 pb-4 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                    Step {number}
                  </span>
                  <h3 className="text-light font-bold text-base mt-1 mb-2">
                    {title}
                  </h3>
                  <p className="text-light/40 text-sm leading-relaxed mb-3">
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-2.5 py-1 rounded-full text-light/45 border border-white/10"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Cybersecurity() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Process />
    </>
  );
}

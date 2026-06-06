import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../../assets/images/about.avif";

const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

const POINTS = [
  {
    title: "Driven by innovation, built for your business",
    desc: "Since 2022, Yottron has partnered with startups and enterprises worldwide to deliver AI automation, custom software, mobile apps, cloud solutions, and cybersecurity all under one roof.",
  },
  {
    title: "Quality and precision in every project",
    desc: "Every solution we build is crafted with rigorous attention to detail, modern best practices, and a relentless focus on performance, security, and scalability.",
  },
  {
    title: "Outcomes that move the needle",
    desc: "We go beyond code. Our team aligns technology with your business goals to deliver measurable results faster growth, leaner operations, and a competitive edge that lasts.",
  },
];

export default function AboutUs({ gradientOpacity }) {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative z-10 bg-surface px-[5%] py-24"
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #1a1a2e, transparent)",
          opacity: gradientOpacity,
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={stagger(0)}
          initial="hidden"
          animate={aboutInView ? "show" : "hidden"}
          className="relative"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}
          >
            <img
              src={aboutImg}
              alt="Our team at work"
              className="w-full h-full object-cover"
              style={{ maxHeight: 480 }}
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(245,113,61,0.18) 0%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={aboutInView ? "show" : "hidden"}
          className="flex flex-col gap-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light leading-[1.18]">
            <em
              style={{
                fontStyle: "italic",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              About
            </em>{" "}
            <span className="text-primary">Yottron</span>
          </h2>

          <div className="flex flex-col gap-8">
            {POINTS.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                variants={stagger(0.1 + i * 0.1)}
                initial="hidden"
                animate={aboutInView ? "show" : "hidden"}
                className="flex flex-col gap-2"
              >
                <h3 className="text-light font-bold text-base md:text-lg leading-snug">
                  {title}
                </h3>
                <p className="text-light/55 text-sm md:text-base leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

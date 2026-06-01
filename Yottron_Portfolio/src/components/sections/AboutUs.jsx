import aboutImg from "../../assets/images/about.avif";

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

export default function AboutUs() {
  return (
    <section id="about" className="relative z-10 px-[5%] py-44" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
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
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.18]">
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
            {POINTS.map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-2">
                <h3 className="text-gray-900 font-bold text-base md:text-lg leading-snug">
                  {title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

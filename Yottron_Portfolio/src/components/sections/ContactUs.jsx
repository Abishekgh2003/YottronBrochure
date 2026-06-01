import { Mail, Phone, MapPin } from "lucide-react"
import THEME from "../../styles/theme"

export default function ContactUs() {
  const contactItems = [
    { icon: Mail, label: "Email", value: "hr@yottron.com", href: "mailto:hr@yottron.com", color: "#2563eb" },
    { icon: Phone, label: "Phone", value: "+91 7358817435", href: "tel:+917358817435", color: "#059669" },
    { icon: MapPin, label: "Location", value: "No 4/63, Third Floor, Roses Complex, TVM Main Road, Pammam, Marthandam, Tamil Nadu 629165", href: null, color: "#7c3aed" },
  ]

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          <div className="lg:w-[44%] flex flex-col justify-center">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-[3px] rounded-full" style={{ background: THEME.colors.primary }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: THEME.colors.primary }}>
                  Contact
                </span>
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.15] mb-4" style={{ color: "#111827" }}>
                Let's build something<br />
                <span style={{ color: THEME.colors.primary }}>great together</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
                Reach out to discuss your next project. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>

          <div className="lg:w-[56%] flex justify-center">
            <div className="w-full max-w-lg space-y-1">
              {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-4 py-4 px-4"
                  style={{
                    borderBottom: i < contactItems.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  <div
                    className="w-[38px] h-[38px] rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}14`, border: `1px solid ${color}28` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "#9ca3af" }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-[15px] font-medium" style={{ color: "#1f2937" }}>{value}</a>
                    ) : (
                      <p className="text-[15px] font-medium leading-snug" style={{ color: "#1f2937" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

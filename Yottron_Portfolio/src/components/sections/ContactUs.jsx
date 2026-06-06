import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
})

export default function ContactUs() {
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.send(
        "service_fuza9v7",
        "template_qrbjm5f",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "9ACrKGlkiSWAQUEhF",
      )
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section
      id="contact"
      ref={contactRef}
      className="px-[5%] py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={contactInView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Let's Build Together
          </h2>
          <p className="text-light/75 text-base max-w-lg mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.form
            ref={formRef}
            variants={stagger(0.08)}
            initial="hidden"
            animate={contactInView ? "show" : "hidden"}
            className="lg:col-span-3 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-light/85 text-xs font-medium block mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-light/5 border border-light/10 rounded-xl px-4 py-3 text-light text-sm placeholder-light/50 focus:outline-none focus:border-primary/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="text-light/85 text-xs font-medium block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-light/5 border border-light/10 rounded-xl px-4 py-3 text-light text-sm placeholder-light/50 focus:outline-none focus:border-primary/50 transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label className="text-light/85 text-xs font-medium block mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project type or inquiry"
                required
                className="w-full bg-light/5 border border-light/10 rounded-xl px-4 py-3 text-light text-sm placeholder-light/50 focus:outline-none focus:border-primary/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="text-light/85 text-xs font-medium block mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full bg-light/5 border border-light/10 rounded-xl px-4 py-3 text-light text-sm placeholder-light/50 focus:outline-none focus:border-primary/50 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-light px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ boxShadow: "0 6px 20px rgba(245,113,61,0.3)" }}
            >
              {status === "sending" ? (
                <>Sending...</>
              ) : status === "success" ? (
                <><CheckCircle size={15} /> Sent Successfully</>
              ) : status === "error" ? (
                <><AlertCircle size={15} /> Failed to Send</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>
          </motion.form>

          <motion.div
            variants={stagger(0.18)}
            initial="hidden"
            animate={contactInView ? "show" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="p-6 rounded-2xl border border-light/[0.07] bg-light/[0.03] flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(245,113,61,0.14)",
                  border: "1px solid rgba(245,113,61,0.28)",
                }}
              >
                <Mail size={17} style={{ color: "#f5713d" }} />
              </div>
              <div>
                <p className="text-light/60 text-xs font-medium mb-1">Email</p>
                <a href="mailto:hr@yottron.com" className="text-light text-sm font-medium hover:text-primary transition-colors duration-200">hr@yottron.com</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-light/[0.07] bg-light/[0.03] flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(245,113,61,0.14)",
                  border: "1px solid rgba(245,113,61,0.28)",
                }}
              >
                <Phone size={17} style={{ color: "#f5713d" }} />
              </div>
              <div>
                <p className="text-light/60 text-xs font-medium mb-1">Phone</p>
                <a href="tel:+917358817435" className="text-light text-sm font-medium hover:text-primary transition-colors duration-200">+91 7358817435</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-light/[0.07] bg-light/[0.03] flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(245,113,61,0.14)",
                  border: "1px solid rgba(245,113,61,0.28)",
                }}
              >
                <MapPin size={17} style={{ color: "#f5713d" }} />
              </div>
              <div>
                <p className="text-light/60 text-xs font-medium mb-1">Location</p>
                <p className="text-light text-sm font-medium">
                  No 4/63, Third Floor, Roses Complex, TVM Main Road, Pammam,
                  Marthandam, Tamil Nadu 629165
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

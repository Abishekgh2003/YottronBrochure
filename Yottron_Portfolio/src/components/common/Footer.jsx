import { Link } from "react-router-dom";
import { Zap, Globe, Briefcase, Code2 } from "lucide-react";
import Logo from "../../assets/logo.png"

const SERVICE_LINKS = [
  { label: "AI Automation", to: "/ai-automation" },
  { label: "Web Application", to: "/web-application" },
  { label: "Mobile App Dev", to: "/mobile-app" },
  { label: "Cloud Migrations", to: "/cloud-migrations" },
  { label: "Cybersecurity", to: "/cybersecurity" },
];

const SOCIALS = [Globe, Briefcase, Code2];

export default function Footer() {
  return (
    <footer className="relative z-[2] bg-dark border-t border-light/[0.07] px-[5%] pt-14 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 mb-4">
              <img src={Logo} className='h-9' alt="Yottron" />
            </Link>
            <p className="text-light/85 text-sm leading-relaxed max-w-[220px]">
              AI-powered development for teams that can't afford to wait.
            </p>
          </div>

          <div>
            <p className="text-light text-xs font-bold uppercase tracking-widest mb-4">
              Services
            </p>
            <div className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-light/75 hover:text-primary text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-light text-xs font-bold uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                to="/#about"
                className="text-light/75 hover:text-primary text-sm transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/#contact"
                className="text-light/75 hover:text-primary text-sm transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <p className="text-light text-xs font-bold uppercase tracking-widest mb-4">
              Contact
            </p>
            <a href="mailto:hr@yottron.com" className="text-light/75 hover:text-primary text-sm transition-colors duration-200 block mb-3">
              hr@yottron.com
            </a>
            <a href="tel:+917358817435" className="text-light/75 hover:text-primary text-sm transition-colors duration-200 block mb-3">
              +91 7358817435
            </a>
            <p className="text-light/75 text-sm">No 4/63, Third Floor, Roses Complex, TVM Main Road, Pammam, Marthandam, Tamil Nadu 629165</p>
          </div>
        </div>

        <div className="border-t border-light/[0.06] pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-light/30 text-xs">
            © 2026 Yottron. All rights reserved.
          </p>
          <div className="flex gap-2">
            {SOCIALS.map((Icon, i) => (
              <button
                key={i}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-light/[0.06] border border-light/[0.08] hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                <Icon size={14} color="rgba(255,255,255,0.55)" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

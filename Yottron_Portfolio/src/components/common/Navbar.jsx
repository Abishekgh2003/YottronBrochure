import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Brain, Code2, Smartphone, Cloud, Shield, Sparkles } from 'lucide-react'
import Logo from "../../assets/logo.png"

const SERVICES = [
  { label: 'AI Agents & Automation', href: '/ai-automation', icon: Brain },
  { label: 'Web Application Developement', href: '/web-application', icon: Code2 },
  { label: 'Mobile Application Developement', href: '/mobile-app', icon: Smartphone },
  { label: 'Cloud Migrations', href: '/cloud-migrations', icon: Cloud },
  { label: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
]

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services', isDropdown: true },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 h-[68px] grid grid-cols-3 items-center px-[5%] transition-all duration-400 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 shrink-0 justify-self-start">
          <img src={Logo} className='h-9' alt="Yottron" />
        </Link>

        <div className="hidden md:flex items-center justify-center gap-1">

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(v => !v)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer bg-transparent border-none ${
                dropdownOpen
                  ? 'text-light bg-light/[0.06]'
                  : 'text-light hover:text-light hover:bg-light/[0.04]'
              }`}
            >
              Services
              <ChevronDown size={13} className={`transition-transform duration-250 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-surface border border-light/[0.08] rounded-xl py-1.5 min-w-[290px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                    {SERVICES.map(({ label, href, icon: Icon }, i) => (
                      <Link
                        key={href}
                        to={href}
                        className="flex items-center gap-3 px-4 py-2.5 text-light/55 hover:text-light hover:bg-light/[0.05] text-sm transition-all duration-200"
                        style={{ borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                      >
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-primary/10 text-primary shrink-0">
                          <Icon size={14} />
                        </span>
                        {label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/#about"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              location.hash === '#about'
                ? 'text-light bg-light/[0.06]'
                : 'text-light hover:text-light hover:bg-light/[0.04]'
            }`}
          >
            About
          </a>
          <a
            href="/#contact"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              location.hash === '#contact'
                ? 'text-light bg-light/[0.06]'
                : 'text-light hover:text-light hover:bg-light/[0.04]'
            }`}
          >
            Contact
          </a>

        </div>

        <div className="hidden md:flex items-center justify-end gap-4">
          <div className="border-l border-light/[0.08] pl-4">
            <a
              href="/#contact"
              className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-light text-sm font-semibold px-5 py-2 rounded-xl shadow-[0_4px_16px_rgba(245,113,61,0.3)]"
            >
              Get Started
            </a>
          </div>
        </div>

        <button
          className="flex md:hidden text-light/80 hover:text-light p-1.5 transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[68px] inset-x-0 z-40 bg-surface/95 backdrop-blur-xl border-b border-light/[0.06] px-[5%] py-6 flex flex-col gap-1"
          >
            <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-light font-medium text-sm hover:bg-light/[0.05] transition-colors">
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-light font-medium text-sm hover:bg-light/[0.05] transition-colors bg-transparent border-none cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-250 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 pb-2">
                      {SERVICES.map(({ label, href, icon: Icon }) => (
                        <Link
                          key={href}
                          to={href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-light/55 hover:text-light hover:bg-light/[0.04] text-sm transition-all"
                        >
                          <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-primary/10 text-primary shrink-0">
                            <Icon size={13} />
                          </span>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/#about" className="flex items-center gap-3 px-4 py-3 rounded-xl text-light font-medium text-sm hover:bg-light/[0.05] transition-colors">About</a>
            <a href="/#contact" className="flex items-center gap-3 px-4 py-3 rounded-xl text-light font-medium text-sm hover:bg-light/[0.05] transition-colors">Contact</a>

            <div className="mt-3 pt-3 border-t border-light/[0.06]">
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-light py-3 rounded-xl font-semibold text-sm shadow-[0_4px_16px_rgba(245,113,61,0.3)]"
              >
                <Sparkles size={15} />
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

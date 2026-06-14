'use client'

import { useEffect, useState } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type Project = {
  id: number
  name: string
  description: string
  tech: string[]
  year: string
}

type Experience = {
  title: string
  company: string
  duration: string
  description: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'SamurAI Dashboard',
    description: 'AI-powered analytics dashboard with real-time metrics and predictive insights.',
    tech: ['Next.js', 'Tailwind', 'OpenAI'],
    year: '2024',
  },
  {
    id: 2,
    name: 'E-Commerce Platform',
    description: 'Full-featured shopping platform with cart, payments, and admin panel.',
    tech: ['React', 'Node.js', 'Stripe'],
    year: '2024',
  },
  {
    id: 3,
    name: 'Portfolio Builder SaaS',
    description: 'Drag-and-drop portfolio builder for creatives with live preview.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    year: '2025',
  },
]

const EXPERIENCES: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechFlow Solutions',
    duration: '2024 – Present',
    description: 'Lead frontend architecture for 3 enterprise SaaS products. Reduced bundle size by 42%.',
  },
  {
    title: 'Fullstack Developer',
    company: 'StartupBase NG',
    duration: '2023 – 2024',
    description: 'Built and shipped 8 client projects end-to-end.',
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    duration: '2021 – 2023',
    description: 'Delivered 20+ web projects for clients across Nigeria and the UK.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-8 md:right-8 md:max-w-md z-40 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white/95 backdrop-blur border border-black/10 rounded-lg p-5 shadow-lg">
        <p className="text-sm text-black/80 mb-4 leading-relaxed">
          We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="flex-1 px-4 py-2.5 bg-black text-white text-sm font-semibold rounded-md hover:bg-black/90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setShow(false)}
            className="flex-1 px-4 py-2.5 border border-black/20 text-black text-sm font-medium rounded-md hover:bg-black/5 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

function InfiniteGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent calc(100% - 1px), rgba(0, 0, 0, 0.08) 100%),
            linear-gradient(90deg, transparent calc(100% - 1px), rgba(0, 0, 0, 0.08) 100%)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur border-b border-black/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#hero" className="text-xl font-black tracking-tight">
          <span className="text-black">Umoh</span>
          <span className="text-[#b2ff05] ml-1">Marvelous</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {['About', 'Work', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-black/70 hover:text-black transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b2ff05] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/2349065424346"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-black/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 fade-in">
            <div>
              <p className="text-sm font-mono text-black/50 uppercase tracking-widest mb-4">Welcome</p>
              <h1 className="text-6xl md:text-7xl font-black leading-[1.1] text-black">
                Fullstack <br />
                <span className="text-[#b2ff05]">Developer</span>
              </h1>
            </div>

            <p className="text-lg text-black/70 max-w-lg leading-relaxed">
              I craft fast, accessible, and memorable digital products. With 4+ years building things people actually use, I&apos;m available for freelance projects and full-time roles.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/2349065424346"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors inline-block"
              >
                Hire Me
              </a>
              <a
                href="#work"
                className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors inline-block"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8 border-t border-black/10">
              {[
                { label: 'GitHub', href: 'https://github.com/Umohmarvelous' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Instagram', href: 'https://instagram.com/marvelstainlex' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black/50 hover:text-[#b2ff05] transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="hidden md:block relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#b2ff05]/20 to-black/5 border-2 border-[#b2ff05]/30 flex items-center justify-center">
              <div className="text-6xl font-black text-[#b2ff05]/40">&lt;/&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block relative fade-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#b2ff05]/20 to-black/5 border-2 border-[#b2ff05]/30 flex items-center justify-center">
              <div className="text-6xl font-black text-[#b2ff05]/40">●</div>
            </div>
          </div>

          <div className="space-y-6 fade-in">
            <div>
              <p className="text-sm font-mono text-black/50 uppercase tracking-widest mb-4">About</p>
              <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
                Crafting Digital Excellence
              </h2>
            </div>

            <p className="text-lg text-black/70 leading-relaxed">
              I&apos;m passionate about building user-centric digital products that solve real problems. My expertise spans modern frontend frameworks, backend systems, and everything in between.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { label: 'Next.js & React', level: 95 },
                { label: 'TypeScript', level: 88 },
                { label: 'Node.js & Express', level: 85 },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-black">{skill.label}</span>
                    <span className="text-sm text-black/50">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#b2ff05] transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
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

function WorkSection() {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="space-y-4 mb-16 fade-in">
          <p className="text-sm font-mono text-black/50 uppercase tracking-widest">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="fade-in group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="rounded-2xl border-2 border-[#b2ff05]/30 p-8 h-full bg-white/50 hover:bg-white hover:border-[#b2ff05]/60 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-[#b2ff05]/10 to-black/5 mb-6 flex items-center justify-center">
                  <div className="text-4xl font-black text-[#b2ff05]/30">◆</div>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
                <p className="text-sm text-black/60 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-[#b2ff05]/10 text-black font-medium rounded-full border border-[#b2ff05]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="space-y-4 mb-16 fade-in">
          <p className="text-sm font-mono text-black/50 uppercase tracking-widest">Experience</p>
          <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
            My Journey
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="fade-in border-l-2 border-[#b2ff05] pl-8 py-6 relative"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="absolute -left-3 top-8 w-4 h-4 rounded-full bg-[#b2ff05] border-4 border-[#dadbd5]" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                  <p className="text-lg text-[#b2ff05] font-semibold">{exp.company}</p>
                </div>
                <p className="text-sm font-mono text-black/50 whitespace-nowrap">{exp.duration}</p>
              </div>

              <p className="text-base text-black/70">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { title: 'Frontend Development', desc: 'Pixel-perfect React & Next.js UIs' },
    { title: 'Full-Stack Solutions', desc: 'Complete products from DB to frontend' },
    { title: 'Performance Optimization', desc: 'Improve Core Web Vitals & load times' },
    { title: 'Technical Consulting', desc: 'Architecture & stack guidance' },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="space-y-4 mb-16 fade-in">
          <p className="text-sm font-mono text-black/50 uppercase tracking-widest">Services</p>
          <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
            What I Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="rounded-2xl border-2 border-[#b2ff05]/30 p-8 bg-white/50 hover:bg-white hover:border-[#b2ff05]/60 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-[#b2ff05] flex items-center justify-center mb-6">
                  <span className="text-lg font-black text-black">→</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-base text-black/70">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center space-y-8 fade-in">
        <div>
          <p className="text-sm font-mono text-black/50 uppercase tracking-widest mb-6">Contact</p>
          <h2 className="text-6xl md:text-7xl font-black text-black leading-tight mb-6">
            Let&apos;s Create <br />
            <span className="text-[#b2ff05]">Something Great</span>
          </h2>
        </div>

        <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
          Whether you have a project in mind or just want to chat about web development, I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="https://wa.me/2349065424346"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors inline-block"
          >
            WhatsApp Me
          </a>
          <a
            href="mailto:umohm450@gmail.com"
            className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors inline-block"
          >
            Send Email
          </a>
        </div>

        <div className="pt-16 border-t border-black/10">
          <p className="text-sm text-black/50 font-medium">
            © {new Date().getFullYear()} Umoh Marvelous. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative bg-[#dadbd5] min-h-screen text-black">
      <InfiniteGrid />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </div>

      <CookieConsent />
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'

type Project = {
  id: number
  name: string
  description: string
  tech: string[]
  year: string
}

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
            className="flex-1 px-4 py-2.5 border border-black/20 text-black text-sm font-semibold rounded-md hover:bg-black/5 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative overflow-hidden">
      {/* Accent circle decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-2 border-[#b2ff05] opacity-20 md:w-48 md:h-48 md:top-10 md:right-20" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight text-black">
          <span className="block">Fullstack</span>
          <span className="block">Developer</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-black/70 font-light max-w-2xl mx-auto leading-relaxed">
          Crafting seamless digital experiences with modern web technologies. I specialize in building fast, accessible, and user-centric applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-all hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-[#b2ff05] text-black font-semibold rounded-lg hover:bg-[#b2ff05]/10 transition-all">
            Get In Touch
          </button>
        </div>

        <div className="pt-12 flex gap-6 justify-center">
          <a href="#" className="text-black/60 hover:text-[#b2ff05] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-black/60 hover:text-[#b2ff05] transition-colors">
            GitHub
          </a>
          <a href="#" className="text-black/60 hover:text-[#b2ff05] transition-colors">
            Twitter
          </a>
        </div>
      </div>

      {/* Stats section */}
      <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-black text-[#b2ff05] mb-2">4+</div>
          <p className="text-sm md:text-base text-black/60">Years Experience</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-black text-[#b2ff05] mb-2">50+</div>
          <p className="text-sm md:text-base text-black/60">Projects Done</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-black text-[#b2ff05] mb-2">99%</div>
          <p className="text-sm md:text-base text-black/60">Satisfaction</p>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-black leading-tight">
            About Me
          </h2>
          <p className="text-lg text-black/70 leading-relaxed font-light">
            I&apos;m Umoh Marvelous, a fullstack developer passionate about transforming ideas into beautiful, functional digital products. With 4+ years of experience, I&apos;ve worked with startups and enterprises to build scalable web applications.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-light">
            My expertise spans React, Next.js, Node.js, and TypeScript. I focus on creating performant, accessible interfaces that users love.
          </p>

          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm font-semibold text-black/80 mb-2">Frontend</p>
              <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                <div className="w-4/5 bg-[#b2ff05] h-full" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-black/80 mb-2">Backend</p>
              <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                <div className="w-3/4 bg-[#b2ff05] h-full" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-black/80 mb-2">UI/UX Design</p>
              <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                <div className="w-2/3 bg-[#b2ff05] h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile image with accent circle */}
        <div className="relative h-96 md:h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img 
              src="/placeholder-photo.png" 
              alt="Umoh Marvelous" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Lime green accent circle */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-3 border-[#b2ff05] opacity-40" />
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="w-full flex items-center justify-center px-6 md:px-12 py-20 bg-black/3">
      <div className="max-w-5xl mx-auto w-full space-y-16">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-black leading-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-black/60 font-light">
            A selection of my recent work showcasing my skills in fullstack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group p-6 bg-white rounded-2xl border-2 border-black/10 hover:border-[#b2ff05] transition-all duration-300 hover:shadow-lg cursor-pointer space-y-4"
            >
              <div className="h-48 bg-gradient-to-br from-black/10 to-black/20 rounded-lg flex items-center justify-center group-hover:from-[#b2ff05]/20 group-hover:to-[#b2ff05]/10 transition-all">
                <p className="text-black/30 text-sm font-semibold">{project.name}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-black">{project.name}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-[#b2ff05]/20 text-black px-3 py-1 rounded-full font-semibold">
                      {t}
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

function ServicesSection() {
  const services = [
    { title: 'Web Development', description: 'Custom web applications built with modern frameworks and best practices.' },
    { title: 'UI/UX Design', description: 'Beautiful, user-centric interfaces that convert and delight.' },
    { title: 'API Development', description: 'Robust backend services and APIs that power your applications.' },
    { title: 'Performance Optimization', description: 'Fast, efficient applications that rank high on Core Web Vitals.' },
  ]

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto w-full space-y-16">
        <h2 className="text-5xl md:text-7xl font-black text-black leading-tight max-w-3xl">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border-l-4 border-[#b2ff05] space-y-4 hover:bg-black/3 transition-all rounded">
              <h3 className="text-2xl font-bold text-black">{service.title}</h3>
              <p className="text-black/70 leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="w-full flex items-center justify-center px-6 md:px-12 py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto w-full text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          Let&apos;s Work Together
        </h2>

        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
          Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you. Let&apos;s create something amazing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="mailto:hello@umohmarvelous.dev"
            className="px-10 py-4 bg-[#b2ff05] text-black font-bold rounded-lg hover:bg-[#c8ff1a] transition-all hover:scale-105"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/2348063827477"
            className="px-10 py-4 border-2 border-[#b2ff05] text-white font-bold rounded-lg hover:bg-[#b2ff05]/10 transition-all"
          >
            WhatsApp
          </a>
        </div>

        <div className="pt-12 flex gap-8 justify-center text-white/60 text-sm">
          <p>© 2025 Umoh Marvelous. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <CookieConsent />
    </main>
  )
}

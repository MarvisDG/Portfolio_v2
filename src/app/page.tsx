// 'use client'

// import { useEffect } from 'react'
// import Aos from 'aos'
// import Header from '../Pages/Header'
// import Footer from '../Pages/Footer'
// import SectionOne from '../Pages/SectionOne'
// import SectionThree from '../Pages/SectionThree'
// import SectionTwo from '../Pages/SectionTwo'
// import SectionFour from '@/Pages/SectionFour'

// export default function Home() {
//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//       once: true,
//     })
//   }, [])

//   return (
//     <div className='px-7 py-7 md:px-20 overflow-auto min-h-screend h- bg-gradient-to-t from-[#1f031d] to-[#000] text-white overflow-hdidden flex flex-col relative'>
//         {/* <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] text-white overflow-hidden flex flex-col relative"> */}
//       <div
//         aria-hidden="true"
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//           opacity: 0.18,
//           background: "transparent",
//         }}
//       >
//         <svg
//           width="100%"
//           height="100%"
//           style={{ position: "absolute", left: 0, top: 0 }}
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <pattern
//               id="smallGrid"
//               width="28"
//               height="28"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 28 0 L 0 0 0 28"
//                 fill="none"
//                 // stroke="#00ff9d"
//                 stroke="#00ff00"
//                 strokeWidth="1"
//                 opacity="0.18"
//               />
//             </pattern>
//             <pattern
//               id="grid"
//               width="112"
//               height="112"
//               patternUnits="userSpaceOnUse"
//             >
//               <rect width="112" height="112" fill="url(#smallGrid)" />
//               <path
//                 d="M 112 0 L 0 0 0 112"
//                 fill="none"
//                 stroke="#00ff9d"
//                 strokeWidth="1"
//                 opacity="0.28"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)">
//             <animateTransform
//               attributeName="transform"
//               type="translate"
//               from="0 0"
//               to="28 28"
//               dur="20s"
//               repeatCount="indefinite"
//             />
//           </rect>
//         </svg>
//       </div>

//       <div className=''>
//         <Header />
//       </div>
//       <SectionTwo />
//       <SectionOne />
//       <SectionFour />
//       <SectionThree />
//       <Footer />
//     </div>
//   )
// }








'use client'

// import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

type Project = {
  id: number
  name: string
  description: string
  fullDesc: string
  status: 'completed' | 'ongoing' | 'in-development'
  tech: string[]
  github: string
  live: string
  year: string
  category: string
}

type Experience = {
  title: string
  company: string
  duration: string
  location: string
  description: string
  skills: string[]
  type: 'work' | 'education'
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'SamurAI Dashboard',
    description: 'AI-powered analytics dashboard with real-time metrics and predictive insights.',
    fullDesc: 'A full-stack AI dashboard built with Next.js, featuring real-time data visualization, predictive analytics, and a clean responsive UI. Integrated with OpenAI API for intelligent recommendations.',
    status: 'completed',
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'OpenAI'],
    github: 'https://github.com/Umohmarvelous',
    live: '#',
    year: '2024',
    category: 'Web App',
  },
  {
    id: 2,
    name: 'E-Commerce Platform',
    description: 'Full-featured shopping platform with cart, payments, and admin panel.',
    fullDesc: 'Built a complete e-commerce solution with Stripe payments, inventory management, and a custom CMS. Handles 500+ products with search, filters, and real-time stock updates.',
    status: 'completed',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/Umohmarvelous',
    live: '#',
    year: '2024',
    category: 'Web App',
  },
  {
    id: 3,
    name: 'Portfolio Builder SaaS',
    description: 'Drag-and-drop portfolio builder for creatives with live preview.',
    fullDesc: 'SaaS platform enabling creatives to build and publish portfolios without code. Features drag-and-drop editor, custom domains, SEO tools, and analytics.',
    status: 'ongoing',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
    github: 'https://github.com/Umohmarvelous',
    live: '#',
    year: '2025',
    category: 'SaaS',
  },
  {
    id: 4,
    name: 'Real-time Chat App',
    description: 'WebSocket-based chat with rooms, file sharing, and end-to-end encryption.',
    fullDesc: 'Secure messaging application with rooms, DMs, file sharing up to 25MB, emoji reactions, and message threading. Built with Socket.io and encrypted with AES-256.',
    status: 'completed',
    tech: ['React', 'Socket.io', 'Express', 'Redis'],
    github: 'https://github.com/Umohmarvelous',
    live: '#',
    year: '2023',
    category: 'Web App',
  },
  {
    id: 5,
    name: 'Mobile Fitness Tracker',
    description: 'React Native app for workout tracking with AI-powered coaching.',
    fullDesc: 'Cross-platform fitness app with workout logging, progress charts, calorie tracking, and an AI coach that adapts plans based on performance. 1,200+ active users.',
    status: 'in-development',
    tech: ['React Native', 'Expo', 'Firebase', 'TensorFlow'],
    github: 'https://github.com/Umohmarvelous',
    live: '#',
    year: '2025',
    category: 'Mobile',
  },
  {
    id: 6,
    name: 'DevOps Pipeline Tool',
    description: 'CI/CD automation dashboard for monitoring deployments and logs.',
    fullDesc: 'Internal tool for monitoring and managing CI/CD pipelines across multiple projects. Aggregates logs, tracks deployment health, and sends alerts via Slack/email.',
    status: 'ongoing',
    tech: ['Python', 'Docker', 'React', 'PostgreSQL'],
    github: 'https://github.com/Umohmarvelous',
    live: '#',
    year: '2025',
    category: 'DevOps',
  },
]

const EXPERIENCES: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechFlow Solutions',
    duration: '2024 – Present',
    location: 'Remote',
    description: 'Lead frontend architecture for 3 enterprise SaaS products. Reduced bundle size by 42% and improved Lighthouse scores from 68 to 96 across all products.',
    skills: ['Next.js', 'TypeScript', 'System Design'],
    type: 'work',
  },
  {
    title: 'Fullstack Developer',
    company: 'StartupBase NG',
    duration: '2023 – 2024',
    location: 'Lagos, Nigeria',
    description: 'Built and shipped 8 client projects end-to-end. Introduced component library that reduced dev time by 35% across the team.',
    skills: ['React', 'Node.js', 'MongoDB'],
    type: 'work',
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    duration: '2021 – 2023',
    location: 'Remote',
    description: 'Delivered 20+ web projects for clients across Nigeria and the UK. Specialised in high-conversion landing pages and performance optimization.',
    skills: ['React', 'JavaScript', 'CSS'],
    type: 'work',
  },
  {
    title: 'BSc Computer Science',
    company: 'Benson Idahosa University',
    duration: '2021 – 2025',
    location: 'Benin City, Nigeria',
    description: 'Graduated with Second Class Upper. Final project: AI-powered resume screening tool with 89% accuracy.',
    skills: ['Algorithms', 'AI/ML', 'Software Engineering'],
    type: 'education',
  },
]

const SERVICES = [
  { icon: '⬡', title: 'Frontend Development', desc: 'Pixel-perfect, performant UIs built with React and Next.js. From landing pages to complex dashboards.', color: '#00ff00' },
  { icon: '◈', title: 'Backend & APIs', desc: 'Scalable REST and GraphQL APIs with Node.js, Express, and serverless architectures on Vercel or AWS.', color: '#00c8ff' },
  { icon: '◉', title: 'UI/UX Design', desc: 'Clean, intentional interfaces designed in Figma. Focused on clarity, accessibility, and conversion.', color: '#ff6b35' },
  { icon: '◫', title: 'Mobile Development', desc: 'Cross-platform React Native apps with smooth animations and native-quality performance.', color: '#b347ff' },
  { icon: '◬', title: 'Performance Optimisation', desc: 'Audit and improve Core Web Vitals, bundle size, and rendering strategy for measurable speed gains.', color: '#ff3d71' },
  { icon: '⬢', title: 'Technical Consulting', desc: 'Architecture reviews, stack selection, and code quality audits for teams scaling their engineering.', color: '#ffd60a' },
]

const SKILLS = [
  { name: 'Next.js / React', level: 95 },
  { name: 'TypeScript', level: 88 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'TailwindCSS', level: 92 },
  { name: 'PostgreSQL / MongoDB', level: 80 },
  { name: 'React Native', level: 75 },
  { name: 'DevOps / Docker', level: 70 },
  { name: 'AI/ML Integration', level: 65 },
]

const STATUS_CONFIG = {
  completed: { label: 'Completed', color: '#00ff00', bg: 'rgba(0,255,0,0.08)' },
  ongoing: { label: 'Ongoing', color: '#00c8ff', bg: 'rgba(0,200,255,0.08)' },
  'in-development': { label: 'In Dev', color: '#ffd60a', bg: 'rgba(255,214,10,0.08)' },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = ['About', 'Services', 'Projects', 'Experience', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-mono text-xl font-bold tracking-tight">
          <span className="text-[#00ff00]">_</span>
          <span className="text-white">marvel</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#00ff00] ml-1 mb-0.5 animate-pulse" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors font-medium tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff00] transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/2349065424346`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold text-black bg-[#00ff00] rounded-full hover:bg-[#00dd00] transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-white transition-all mb-1.5 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-px bg-white transition-all mb-1.5 ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-zinc-300 hover:text-[#00ff00] transition-colors text-sm font-medium border-b border-white/5"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/2349065424346"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center py-3 text-sm font-semibold text-black bg-[#00ff00] rounded-full"
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Grid bg */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #00ff00 1px, transparent 1px), linear-gradient(to bottom, #00ff00 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00ff00]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00ff00]/30 bg-[#00ff00]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse" />
              <span className="text-xs text-[#00ff00] font-mono tracking-widest uppercase">Available for work</span>
            </div>

            <p className="text-zinc-400 text-sm font-mono mb-2 tracking-widest uppercase">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-[1.05]">
              Umoh<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff00] to-[#00c8ff]">Marvelous</span>
            </h1>
            <p className="text-lg text-zinc-400 font-light mt-4 mb-8 max-w-xl leading-relaxed">
              Fullstack developer crafting fast, accessible, and memorable digital products.
              4 years building things people actually use.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://wa.me/2349065424346"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#00ff00] text-black font-semibold rounded-full hover:bg-[#00dd00] transition-all text-sm"
              >
                Hire Me
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="/assets/cv/umoh-marvelous-cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all text-sm"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-6">
              {[
                { href: 'https://github.com/Umohmarvelous', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                { href: 'https://linkedin.com/', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: 'https://www.instagram.com/marvelstainlex', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '26+', label: 'Projects Delivered' },
                { value: '8+', label: 'Tech Stacks' },
                { value: '500+', label: 'Git Commits' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/[0.03] backdrop-blur border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] transition-colors"
                >
                  <p className="text-3xl font-black text-white mb-1">{value}</p>
                  <p className="text-xs text-zinc-500 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="About Me" />
        <div className="flex flex-col lg:flex-row gap-16 items-start mt-12">
          {/* Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/20 to-[#00c8ff]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl bg-[#00ff00] flex items-center justify-center text-black font-black text-xl">
              NG
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              Computer Scientist who builds<br />
              <span className="text-[#00ff00]">things that matter.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-5 text-sm lg:text-base">
              I'm Umoh Marvelous — a dedicated fullstack developer based in Warri, Delta State, Nigeria. Over 4 years of
              intensive study and practice, I've built a comprehensive understanding of modern web architectures,
              algorithms, and scalable system design.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm lg:text-base">
              My approach: write clean code, ship fast, measure everything. I care deeply about performance,
              accessibility, and the small details that separate good products from great ones.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm mb-8">
              {[
                ['Name', 'Umoh Marvelous Sunday'],
                ['Email', 'umohm450@gmail.com'],
                ['Phone', '+234 9065424346'],
                ['Location', 'Warri, Delta State'],
                ['Availability', 'Open to opportunities'],
                ['Preferred', 'Remote / Hybrid'],
              ].map(([key, val]) => (
                <div key={key}>
                  <span className="text-[#00ff00] font-mono text-xs uppercase tracking-widest">{key}</span>
                  <p className="text-white font-medium mt-0.5 text-xs">{val}</p>
                </div>
              ))}
            </div>

            <a
              href="/assets/cv/umoh-marvelous-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all text-sm"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-white font-bold text-lg mb-8">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-zinc-300 font-medium">{name}</span>
        <span className="text-xs font-mono text-[#00ff00]">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00ff00] to-[#00c8ff] rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Services" />
        <div className="mt-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-white">What I can build for you</h2>
          <p className="text-zinc-500 mt-2 text-sm max-w-md">
            End-to-end digital solutions — from first wireframe to live deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-5 transition-colors"
                style={{ color: s.color, background: `${s.color}15` }}
              >
                {s.icon}
              </div>
              <h3 className="text-white font-bold mb-2 text-sm">{s.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing' | 'in-development'>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const categories = ['all', 'completed', 'ongoing', 'in-development'] as const

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.status === filter)

  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Recent Work" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4 mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Things I've shipped</h2>
            <p className="text-zinc-500 mt-1 text-sm">Real projects. Real problems solved.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
                  filter === cat
                    ? 'bg-[#00ff00] text-black'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat === 'in-development' ? 'In Dev' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>

        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const s = STATUS_CONFIG[project.status]
  return (
    <div
      className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all overflow-hidden cursor-pointer"
      onClick={onOpen}
    >
      <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #00ff00 0, #00ff00 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-60">
            {project.category === 'Mobile' ? '📱' : project.category === 'DevOps' ? '⚙️' : project.category === 'SaaS' ? '☁️' : '🖥️'}
          </span>
        </div>
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ color: s.color, background: s.bg, border: `1px solid ${s.color}30` }}
        >
          {s.label}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-600 font-mono">{project.year}</span>
          <span className="text-xs text-zinc-600">{project.category}</span>
        </div>
        <h3 className="text-white font-bold mb-2 text-sm group-hover:text-[#00ff00] transition-colors">{project.name}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex gap-1.5 flex-wrap">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 bg-white/5 rounded text-xs text-zinc-400">{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 bg-white/5 rounded text-xs text-zinc-500">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const s = STATUS_CONFIG[project.status]
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-zinc-950 border border-white/10 rounded-2xl max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-t-2xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #00ff00 0, #00ff00 1px, transparent 0, transparent 50%)',
              backgroundSize: '12px 12px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">
              {project.category === 'Mobile' ? '📱' : project.category === 'DevOps' ? '⚙️' : '🖥️'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors text-sm"
          >
            ✕
          </button>
          <div
            className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ color: s.color, background: s.bg, border: `1px solid ${s.color}30` }}
          >
            {s.label}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-black text-white">{project.name}</h2>
            <span className="text-xs text-zinc-600 font-mono">{project.year}</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.fullDesc}</p>
          <div className="flex gap-2 flex-wrap mb-5">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-zinc-300">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00ff00] hover:bg-[#00dd00] rounded-full text-sm text-black font-semibold transition-colors"
              >
                Live Preview →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const el = timelineRef.current
    const line = lineRef.current
    if (!el || !line) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const totalHeight = el.scrollHeight
          setLineHeight(totalHeight)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Experience" />
        <div className="mt-4 mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-white">Where I've worked & studied</h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-[#00ff00] to-[#00c8ff] transition-all duration-[2000ms] ease-out"
              style={{ height: lineHeight > 0 ? '100%' : '0%' }}
            />
          </div>

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isLeft = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start gap-6 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 top-5 w-3 h-3 rounded-full bg-[#00ff00] border-2 border-black -translate-x-1/2 z-10 shadow-[0_0_12px_#00ff00]" />

      {/* Spacer for desktop */}
      <div className="hidden md:block flex-1" />

      {/* Card */}
      <div
        className={`ml-10 md:ml-0 md:w-5/12 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.06] transition-all`}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white font-bold text-sm">{exp.title}</h3>
            <p className="text-[#00ff00] text-xs font-mono mt-0.5">{exp.company}</p>
          </div>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              exp.type === 'education'
                ? 'bg-[#b347ff]/10 text-[#b347ff]'
                : 'bg-[#00ff00]/10 text-[#00ff00]'
            }`}
          >
            {exp.type === 'education' ? 'Education' : 'Work'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-600 mb-3">
          <span>📅 {exp.duration}</span>
          <span>📍 {exp.location}</span>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed mb-3">{exp.description}</p>
        <div className="flex gap-1.5 flex-wrap">
          {exp.skills.map((s) => (
            <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-xs text-zinc-500">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // mailto fallback — opens default mail client pre-filled
    const mailto = `mailto:umohm450@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailto
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 500)
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Contact" />
        <div className="mt-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-white">Let's build something together</h2>
          <p className="text-zinc-500 mt-2 text-sm">I'm open to freelance projects, full-time roles, and interesting collaborations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: '📧', label: 'Email', val: 'umohm450@gmail.com', href: 'mailto:umohm450@gmail.com' },
              { icon: '📱', label: 'WhatsApp', val: '+234 9065424346', href: 'https://wa.me/2349065424346' },
              { icon: '📍', label: 'Location', val: 'Warri, Delta State, Nigeria', href: null },
              { icon: '⏰', label: 'Response time', val: 'Usually within 24hrs', href: null },
            ].map(({ icon, label, val, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white hover:text-[#00ff00] transition-colors font-medium">{val}</a>
                  ) : (
                    <p className="text-sm text-white font-medium">{val}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/2349065424346"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 transition-all text-sm font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-zinc-500 mb-1.5 font-medium">Your Name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00ff00]/40 focus:bg-white/[0.07] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 mb-1.5 font-medium">Email Address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00ff00]/40 focus:bg-white/[0.07] transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-zinc-500 mb-1.5 font-medium">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00ff00]/40 focus:bg-white/[0.07] transition-all"
                placeholder="Project enquiry, collaboration, etc."
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 mb-1.5 font-medium">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#00ff00]/40 focus:bg-white/[0.07] transition-all resize-none"
                placeholder="Tell me about your project, budget, and timeline…"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 bg-[#00ff00] text-black font-bold rounded-xl hover:bg-[#00dd00] transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Opening mail…' : status === 'sent' ? '✓ Message Ready' : 'Send Message →'}
            </button>
            <p className="text-xs text-zinc-600 text-center">
              Your message will open in your default mail app addressed to umohm450@gmail.com
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-sm">
            <span className="text-[#00ff00]">_</span>marvel
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-pulse" />
        </div>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Umoh Marvelous. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-4">
          {[
            { href: 'mailto:umohm450@gmail.com', label: '📧' },
            { href: 'https://wa.me/2349065424346', label: '📱' },
            { href: 'https://github.com/Umohmarvelous', label: '🐙' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="text-sm hover:scale-110 transition-transform">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="w-6 h-px bg-[#00ff00]" />
      <span className="text-[#00ff00] text-xs font-mono uppercase tracking-widest">{label}</span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
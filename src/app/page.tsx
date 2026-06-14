'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CardSection {
  id: string;
  title: string;
}

const sections: CardSection[] = [
  { id: 'hero', title: 'Hero' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'resume', title: 'Resume' },
  { id: 'contact', title: 'Contact' },
];

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;

      setScrollProgress(scrolled);

      // Determine active section based on scroll position
      const sectionIndex = Math.min(
        Math.floor((scrollTop + window.innerHeight / 2) / (window.innerHeight * 0.85)),
        sections.length - 1
      );
      setActiveSection(Math.max(0, sectionIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardY = (index: number) => {
    const baseY = index * 60;
    const scrollY = scrollProgress * 120;
    return Math.min(baseY + scrollY, baseY + 80);
  };

  const getCardOpacity = (index: number) => {
    if (index <= activeSection) return 1;
    return Math.max(0.7, 1 - (scrollProgress * 2));
  };

  const getCardScale = (index: number) => {
    if (index <= activeSection) return 1;
    return Math.max(0.95, 1 - (scrollProgress * 0.1));
  };

  return (
    <div ref={containerRef} className="relative bg-[#dadbd5] min-h-screen overflow-x-hidden">
      {/* Background grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent calc(100% - 1px), rgba(0,0,0,0.05) 100%),
            linear-gradient(90deg, transparent calc(100% - 1px), rgba(0,0,0,0.05) 100%)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Stacked cards container - 600vh for 6 sections */}
      <div className="relative h-[600vh]">
        {/* Hero Card */}
        <motion.div
          animate={{
            y: getCardY(0),
            opacity: getCardOpacity(0),
            scale: getCardScale(0),
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-8 z-50"
        >
          <HeroCard />
        </motion.div>

        {/* About Card */}
        <motion.div
          animate={{
            y: getCardY(1),
            opacity: getCardOpacity(1),
            scale: getCardScale(1),
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-8 z-40"
        >
          <AboutCard />
        </motion.div>

        {/* Projects Card */}
        <motion.div
          animate={{
            y: getCardY(2),
            opacity: getCardOpacity(2),
            scale: getCardScale(2),
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-8 z-30"
        >
          <ProjectsCard />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          animate={{
            y: getCardY(3),
            opacity: getCardOpacity(3),
            scale: getCardScale(3),
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-8 z-20"
        >
          <ExperienceCard />
        </motion.div>

        {/* Resume Card */}
        <motion.div
          animate={{
            y: getCardY(4),
            opacity: getCardOpacity(4),
            scale: getCardScale(4),
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-8 z-10"
        >
          <ResumeCard />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          animate={{
            y: getCardY(5),
            opacity: getCardOpacity(5),
            scale: getCardScale(5),
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="sticky top-0 w-full h-screen flex items-center justify-center px-4 md:px-8 z-0"
        >
          <ContactCard />
        </motion.div>
      </div>
    </div>
  );
}

// Hero Card
function HeroCard() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#b2ff05]">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#b2ff05] rounded-full" />
          <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">Umoh Marvelous</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight">
            Fullstack <br />
            <span className="text-[#b2ff05]">Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Crafting fast, accessible, and memorable digital experiences with React, Next.js, and Node.js
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-200">
          <div>
            <p className="text-3xl md:text-4xl font-black text-gray-900">4+</p>
            <p className="text-xs text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-gray-900">50+</p>
            <p className="text-xs text-gray-600">Projects Done</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-gray-900">99%</p>
            <p className="text-xs text-gray-600">Satisfaction</p>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="px-8 py-3 bg-[#b2ff05] text-black font-bold rounded-lg hover:bg-[#c8ff1a] transition-all duration-300 transform hover:scale-105">
            View Work
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-[#b2ff05] hover:bg-[#b2ff05]/5 transition-all duration-300">
            Contact
          </button>
        </div>

        <div className="flex gap-4 pt-4">
          <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#b2ff05] flex items-center justify-center transition-all duration-300 text-xs font-bold">
            in
          </a>
          <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#b2ff05] flex items-center justify-center transition-all duration-300 text-xs font-bold">
            gh
          </a>
          <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#b2ff05] flex items-center justify-center transition-all duration-300 text-xs font-bold">
            tw
          </a>
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 border-4 border-[#b2ff05]/20 rounded-full pointer-events-none" />
    </div>
  );
}

// About Card
function AboutCard() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#b2ff05]">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a passionate fullstack developer dedicated to building beautiful, performant web applications that solve real problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With 4+ years of experience, I specialize in modern web technologies and love collaborating with teams to bring ideas to life.
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-gray-900 uppercase text-sm tracking-widest">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#b2ff05]/10 text-gray-900 rounded-lg text-xs font-bold border border-[#b2ff05]/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden">
            <img
              src="/placeholder-photo.png"
              alt="Umoh Marvelous"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-3 border-[#b2ff05] rounded-full opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Projects Card
function ProjectsCard() {
  const projects = [
    {
      title: 'SamurAI Dashboard',
      description: 'AI-powered analytics dashboard with real-time metrics',
      tags: ['Next.js', 'OpenAI', 'Tailwind'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured shopping platform with payments',
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop builder for creative portfolios',
      tags: ['Next.js', 'TypeScript', 'Prisma'],
    },
  ];

  return (
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#b2ff05]">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#b2ff05] transition-all duration-300 h-full flex flex-col hover:shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#b2ff05] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#b2ff05]/20 text-gray-800 text-xs font-semibold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-[#b2ff05] text-black font-bold rounded-xl hover:bg-[#c8ff1a] transition-all duration-300">
          View All Projects
        </button>
      </div>
    </div>
  );
}

// Experience Card
function ExperienceCard() {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Company X',
      period: '2023 - Present',
      description: 'Leading frontend architecture and mentoring junior developers',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Y',
      period: '2021 - 2023',
      description: 'Built and maintained full-stack web applications',
    },
    {
      title: 'Junior Developer',
      company: 'Agency Z',
      period: '2020 - 2021',
      description: 'Developed responsive websites and web applications',
    },
  ];

  return (
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#b2ff05]">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#b2ff05]/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-[#b2ff05] rounded-full" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-[#b2ff05] font-semibold">{exp.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                  <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Resume Card
function ResumeCard() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#b2ff05]">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900">Resume</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-[#b2ff05] pb-3 mb-4">
                Technical Skills
              </h3>
              <div className="space-y-3">
                {[
                  { category: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS' },
                  { category: 'Backend', skills: 'Node.js, Express, PostgreSQL, MongoDB' },
                  { category: 'Tools', skills: 'Git, Docker, AWS, Vercel' },
                ].map((item) => (
                  <div key={item.category}>
                    <p className="font-bold text-gray-900 text-sm">{item.category}</p>
                    <p className="text-xs text-gray-600">{item.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-[#b2ff05] pb-3 mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-gray-900 text-sm">Computer Science</p>
                  <p className="text-xs text-gray-600">University of Technology, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full py-4 bg-[#b2ff05] text-black font-bold rounded-xl hover:bg-[#c8ff1a] transition-all duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
}

// Contact Card
function ContactCard() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#b2ff05]">
      <div className="space-y-8 text-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Have a project in mind? Let&apos;s collaborate and create something amazing.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="mailto:hello@umohmarvelous.dev"
            className="block py-4 px-8 bg-[#b2ff05] text-black font-bold rounded-xl hover:bg-[#c8ff1a] transition-all duration-300 transform hover:scale-105"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/2348063827477"
            className="block py-4 px-8 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:border-[#b2ff05] hover:bg-[#b2ff05]/5 transition-all duration-300"
          >
            WhatsApp Me
          </a>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 text-sm">Connect with me</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-[#b2ff05] flex items-center justify-center transition-all duration-300 font-bold text-gray-900 text-xs">
              in
            </a>
            <a href="#" className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-[#b2ff05] flex items-center justify-center transition-all duration-300 font-bold text-gray-900 text-xs">
              gh
            </a>
            <a href="#" className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-[#b2ff05] flex items-center justify-center transition-all duration-300 font-bold text-gray-900 text-xs">
              tw
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 pt-8">© 2025 Umoh Marvelous. All rights reserved.</p>
      </div>
    </div>
  );
}

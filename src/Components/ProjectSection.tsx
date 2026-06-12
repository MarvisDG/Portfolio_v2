'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Users, X } from 'lucide-react';
import LiquidGlass from './LiquidGlass';

const projects = [
  {
    id: 1,
    name: 'SamurAI Dashboard',
    description: 'AI-powered knowledge platform with efficiency metrics.',
    users: '10K+',
    github: 'https://github.com/samurai-ai',
    live: 'https://samurai-ai.com',
    image: '/project1.jpg', // Add your images
    fullDesc: 'Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating. Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    id: 2,
    name: 'SamurAI Dashboard',
    description: 'AI-powered knowledge platform with efficiency metrics.',
    users: '10K+',
    github: 'https://github.com/samurai-ai',
    live: 'https://samurai-ai.com',
    image: '/project1.jpg', // Add your images
    fullDesc: 'Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating. Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    id: 3,
    name: 'SamurAI Dashboard',
    description: 'AI-powered knowledge platform with efficiency metrics.',
    users: '10K+',
    github: 'https://github.com/samurai-ai',
    live: 'https://samurai-ai.com',
    image: '/project1.jpg', // Add your images
    fullDesc: 'Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating. Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    id: 4,
    name: 'SamurAI Dashboard',
    description: 'AI-powered knowledge platform with efficiency metrics.',
    users: '10K+',
    github: 'https://github.com/samurai-ai',
    live: 'https://samurai-ai.com',
    image: '/project1.jpg', // Add your images
    fullDesc: 'Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating. Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.Built with Next.js & Tailwind. Features responsive design, animations, and real-time metrics. 10K users, 4.8 rating.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  // Add more projects
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 px-0 max-w-7lxl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 text-white"
      >
        My Projects
      </motion.h2>



      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
        <LiquidGlass                
          key={project.id}
          className="glass p-0 rounded-2xl cursor-pointer hover:bg-black/50 group hover:scale-105 transition-transform transition-color">
              <motion.div
                // whileHover={{ scale: 1.05, rotateX: 5 }}
                className='p-8 hover:p-8  transition-transform '
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project.id)}
                >
                <img src={project.image} alt={project.name} className="border-[.8px] border-white/5 w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-2xl font-semibold mb-2 group-hover:scale-103 transition-transform">{project.name}</h3>
                <p className="text-white/10 mb-4 group-hover:scale-103 transition-transform font-light">{project.description}</p>
                <div className="flex items-center justify-between mb-4 group-hover:scale-110 transition-transform">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Users size={16} />
                    <div className='text-[#00ff00]'>{project.users}</div>
                  
                  </div>
                  <button className="glas bg-transparent px-2 py-1 text-sm hover:bg-white rounded-2xl transition-all text-white/10">Expand</button>
                </div>
              </motion.div>
        </LiquidGlass>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <Modal project={projects.find(p => p.id === selected)!} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function Modal({ project, onClose }: { project: any; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/10 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4"
      onClick={onClose}
    >
        <button onClick={onClose} className="mt-8 text-sm text-gray-400 hover:text-white border-2 border-red-500 flex items-self-end justify-self-end">
            <X />
        </button>
      {/* <LiquidGlass className='bg-black/10 rounded-2xl max-w-4xl w-full max-h-[90vh]'> */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="glass overflow-y-auto p-8 max-w-4xl w-full max-h-[90vh]"
          onClick={e => e.stopPropagation()}
        >
          <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
          <h2 className="text-2xl font-extrabold mb-4 text-zinc-300">{project.name}</h2>
          <p className="text-base mb-6 font-light text-zinc-500">{project.fullDesc}</p>
          <div className="flex flex-wrap space-2 mb-6 flex-col py-3">
            <h3 className='text-zinc-300 text-base font-extrabold'>Technology Used</h3>
            <div className='flex justify-between items-center flex-row space-y-3'>
              {project.tech.map((t: string) => (
                <span key={t} className="glass py-3 rounded-full text-sm flex flex-row gap-x-2 items-center">
                  <div className='bg-[#00ff00] h-2 w-2 rounded-full flex items-center'/>
                  {t}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 text-[14px]">
            <a href={project.github} className="flex items-center gap-2 font-none transform-none">
              <Github className='w-4 h-4' /> GitHub
            </a>
            {/* bg-gradient-to-r from-red-500 to-orange-500 */}
            <a href={project.live} className="flex items-center gap-2 text-white flex items-center justify-center">
                <ExternalLink className='w-4 h-4' /> Live Preview
                {/* <p className='text-md'></p> */}
            </a>
          </div>
          
        </motion.div>
      {/* </LiquidGlass> */}
    </motion.div>
  );
}

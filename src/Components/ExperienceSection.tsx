'use client';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import LiquidGlass from './LiquidGlass';

const experience = [
  { 
   title: 'Senior UI/UX Designer', 
   company: 'SamurAI', 
   duration: '2024 - Present', 
   location: 'Lagos, NG', 
   achievements: ['Led 10+ projects', '10K users'] 
   },
   
  { 
   title: 'Junior UI/UX Designer', 
   company: 'SamurAI', 
   duration: '2024 - Present', 
   location: 'Lagos, NG', 
   achievements: ['Led 10+ projects', '10K users'] 
   },
   
  { 
   title: 'Beginner UI/UX Designer', 
   company: 'SamurAI', 
   duration: '2024 - Present', 
   location: 'Lagos, NG', 
   achievements: ['Led 10+ projects', '10K users'] 
   },
   
  { 
   title: 'I dont know UI/UX Designer', 
   company: 'SamurAI', 
   duration: '2024 - Present', 
   location: 'Lagos, NG', 
   achievements: ['Led 10+ projects', '10K users'] 
   },
   
  // Add more
];

const education = [
  { degree: 'BSc Computer Science', school: 'Benson Idahosa University', year: '2021-2025' },
  // Add more
];

export default function ExperienceSection() {
  return (
    <section className="py-0 mx-auto">


      {/* Education Cards */}
      <div className='flex flex-col items-start w-full'>
         <div className='flex flex-row items-center space-x-2'>
            <div className='bg-[#00ff00] p-1 rounded-full'/>
            <h5 className='text-2xl font-bold text-white my-3'>Education</h5>
         </div>
        {education.map((edu, i) => (
         <LiquidGlass 
         key={i}
         className="rounded-2xl flex items-start"
         >
            <div className="flex items-center space-x-3 my-12 mx-8">
              <Award className="w-12 h-12 text-[#00ff00]" />
               <div className='flex flex-col items-start justify-start'>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p>{edu.school}</p>
                  <div className='flex flex-row items-center gap-2'>
                     <div className='bg-[#00ff00] p-1 rounded-full'/>
                     <p className='text-sm text-white'>{edu.year}</p>
                  </div>
               </div>
            </div>
         </LiquidGlass>
        ))}
      </div>

      <div className='flex flex-row items-center space-x-2 w-full justify-center'>
         <div className='bg-[#00ff00] p-1 rounded-full'/>
         <h5 className='text-2xl font-bold text-white my-3'>Experience</h5>
      </div>      



      {/* Experience Timeline */}
      <div className="relative mb-0 mx-xl flex items-center justify-center flex-col mx-40">


        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00ff00] to-transparent rounded-full" />

        {experience.map((exp, i) => (         
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className={`flex w-full mx-5 ${i % 2 === 0 ? 'flex justify-end items-end' : 'justify-start text-right items-start'}`}
          >
            <div className="glass p-6 rounded-2xl w-5/12">
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <div className="flex items-center gap-2 mb-2 text-red-400">
                <Calendar size={20} /> {exp.duration}
              </div>
              <p className="text-gray-300">{exp.company} - {exp.location}</p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a: string) => <li key={a}>• {a}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>


      {/* Resume Download */}
      {/* <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <a href="/resume.pdf" download className="glass inline-block px-12 py-6 rounded-3xl text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 hover:shadow-2xl transition-all">
          Download Resume
        </a>
      </motion.div> */}
    </section>
  );
}

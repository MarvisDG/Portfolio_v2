'use client'

import { useEffect } from 'react'
import Aos from 'aos'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import SectionOne from '../Pages/SectionOne'
import SectionThree from '../Pages/SectionThree'
import SectionTwo from '../Pages/SectionTwo'
import SectionFour from '@/Pages/SectionFour'

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className='px-7 py-7 md:px-20 overflow-auto min-h-screend h- bg-gradient-to-t from-[#1f031d] to-[#000] text-white overflow-hdidden flex flex-col relative'>
        {/* <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] text-white overflow-hidden flex flex-col relative"> */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.18,
          background: "transparent",
        }}
      >
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", left: 0, top: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                // stroke="#00ff9d"
                stroke="#00ff00"
                strokeWidth="1"
                opacity="0.18"
              />
            </pattern>
            <pattern
              id="grid"
              width="112"
              height="112"
              patternUnits="userSpaceOnUse"
            >
              <rect width="112" height="112" fill="url(#smallGrid)" />
              <path
                d="M 112 0 L 0 0 0 112"
                fill="none"
                stroke="#00ff9d"
                strokeWidth="1"
                opacity="0.28"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="28 28"
              dur="20s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      <div className=''>
        <Header />
      </div>
      <SectionTwo />
      <SectionOne />
      <SectionFour />
      <SectionThree />
      <Footer />
    </div>
  )
}


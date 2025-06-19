'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50) // Small delay to trigger animation
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0e0e10] relative overflow-hidden">
      <div
        className={`relative w-32 h-32 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-[6px] border-t-transparent border-r-transparent border-b-purple-500 border-l-blue-500 animate-spin-slow shadow-[0_0_60px_rgba(128,0,255,0.4)]" />

        {/* Inner Glow Core */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] shadow-inner shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  )
}

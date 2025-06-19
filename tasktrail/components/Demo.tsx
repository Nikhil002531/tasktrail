
'use client'

import Link from 'next/link'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text mb-6">
          Try TaskTrail Live!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          This is a front-end-only demo. Explore how task management might feel inside the actual app.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-pink-400 mb-2">📋 Task Boards</h2>
            <p className="text-sm text-gray-300">Create, move, and organize tasks with a clean kanban-style board.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">👥 Team Collaboration</h2>
            <p className="text-sm text-gray-300">Invite teammates and assign tasks effortlessly (just visually for now).</p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-10 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition"
        >
          Go Back to Home
        </Link>
      </div>
    </main>
  )
}

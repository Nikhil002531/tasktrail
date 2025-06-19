
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (demo only, no backend)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black flex items-center justify-center px-4 py-20 text-white">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10">
        <h1 className="text-4xl font-bold mb-4 text-center text-cyan-300">Contact Us</h1>
        <p className="text-sm text-gray-300 mb-8 text-center">Feel free to reach out with any questions or feedback.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-bold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}

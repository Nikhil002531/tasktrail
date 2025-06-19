'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Task Management',
    img: '/assets/feature1.png',
    hoverImg: '/assets/feature1-hover.png',
  },
  {
    title: 'Team Collaboration',
    img: '/assets/feature2.png',
    hoverImg: '/assets/feature2-hover.png',
  },
  {
    title: 'Timeline View',
    img: '/assets/feature3.png',
    hoverImg: '/assets/feature3-hover.png',
  },
  {
    title: 'Insights & Reports',
    img: '/assets/feature4.png',
    hoverImg: '/assets/feature4-hover.png',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 py-20 px-4 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
          Discover TaskTrail
        </h1>
        <p className="text-lg text-gray-200">
          Powerful project management features — explore below
        </p>

        {/* Animated card with hover flip */}
        <div className="relative w-full max-w-md mx-auto group transition-transform duration-700 transform hover:scale-105">
          {/* Main Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="rounded-xl w-full h-64 object-cover shadow-2xl transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover Image */}
          <img
            src={slide.hoverImg}
            alt={`${slide.title} hover`}
            className="absolute inset-0 w-full h-64 object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 rounded-b-xl">
            <h2 className="text-lg font-semibold">{slide.title}</h2>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-white' : 'bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

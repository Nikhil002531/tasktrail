'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Reports',
    desc: 'Generate insightful reports with ease. Customize and share financial summaries, performance metrics, and more.',
    preview: 'Quickly create and share detailed business overview reports with dynamic data.',
  },
  {
    title: 'Forecasts',
    desc: 'Predict future financial performance and make informed decisions with powerful forecasting tools.',
    preview: 'Analyze cash flow trends, future invoices, and financial health scores to forecast accurately.',
  },
  {
    title: 'Dashboards',
    desc: 'Visualize your key business data in interactive and customizable dashboards for a real-time overview.',
    preview: 'See total income, expenses breakdown, and cash balances at a glance with dynamic charts.',
  },
  {
    title: 'Consolidations',
    desc: 'Effortlessly consolidate data from multiple entities and branches for a unified financial view.',
    preview: 'Combine financial data from different branches (US, AU, Texas, California) and entities.',
  },
];

// Keywords to highlight dynamically
const keywords = ['reports', 'forecasts', 'dashboards', 'consolidations'];

export default function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [highlightedKeywordIndex, setHighlightedKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2000); // Change keyword every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const getHighlightedText = (text: string) => {
    return text.split(' ').map((word, i) => {
      const lowerCaseWord = word.toLowerCase().replace(/[,&]/g, ''); // Remove commas/ampersands for matching
      const isKeyword = keywords.includes(lowerCaseWord);
      const isCurrentlyHighlighted = isKeyword && keywords[highlightedKeywordIndex] === lowerCaseWord;

      // Check for partial matches or if the word contains one of the keywords
      const containsHighlighted = keywords.some((keyword, idx) =>
        text.toLowerCase().includes(keyword) && keywords[highlightedKeywordIndex] === keyword
      );


      return (
        <span
          key={i}
          className={`
            ${isCurrentlyHighlighted || containsHighlighted ? 'transition-all duration-500 ease-in-out' : ''}
            ${isCurrentlyHighlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 font-extrabold scale-105' : ''}
          `}
        >
          {word}{' '}
        </span>
      );
    });
  };


  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center py-24 px-6
                 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white" // Darker, more vibrant gradient
    >
      {/* Background Blobs/Shapes - for visual interest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>


      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Top Social Proof / Ratings */}

        {/* Main Headline */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            Create {getHighlightedText('reports')}, {getHighlightedText('forecasts')}, {getHighlightedText('dashboards')} & {getHighlightedText('consolidations')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 flex items-center justify-center gap-2">
            Now with AI-insights <span className="text-yellow-300 text-3xl animate-pulse">✨</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
              Start 14-day free trial
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-400 hover:border-white text-gray-200 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay="500">
              See what we do
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20
                         shadow-lg dark:shadow-[0_8px_25px_rgba(255,255,255,0.05)]
                         hover:shadow-[0_15px_60px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]
                         transition-all hover:scale-[1.03] cursor-default
                         overflow-visible" // Important for preview card to be visible
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 600} // Staggered animation after main hero elements
            >
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>

              {/* Floating preview card */}
              {hoveredIndex === index && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-72 p-5
                            bg-white/20 dark:bg-gray-800/80 text-sm text-gray-100 rounded-xl
                            border border-white/30 shadow-2xl backdrop-blur-xl
                            animate-fade-in-up z-50 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {feature.preview}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

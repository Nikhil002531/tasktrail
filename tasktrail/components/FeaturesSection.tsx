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
      const containsHighlighted = keywords.some((keyword) =>
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
                 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white"
    >
      {/* Background Blobs/Shapes - for visual interest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            Create {getHighlightedText('reports')}, {getHighlightedText('forecasts')}, {getHighlightedText('dashboards')} & {getHighlightedText('consolidations')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 flex items-center justify-center gap-2">
            Now with AI-insights <span className="text-yellow-300 text-3xl animate-pulse">✨</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Start 14-day free trial
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-400 hover:border-white text-gray-200 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              See what we do
            </button>
          </div>
        </div>

        {/* Feature Cards Grid - Fixed container with proper overflow handling */}
        <div className="relative w-full max-w-6xl mx-auto mt-16 pb-32">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20
                           shadow-lg hover:shadow-2xl
                           transition-all duration-300 hover:scale-[1.03] cursor-default
                           z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>

                {/* Fixed floating preview card with proper positioning */}
                {hoveredIndex === index && (
                  <div
                    className={`
                      absolute left-1/2 transform -translate-x-1/2 w-72 p-5
                      bg-white/95 text-gray-800 text-sm rounded-xl
                      border border-white/30 shadow-2xl backdrop-blur-xl
                      transition-all duration-300 ease-out
                      animate-pulse z-50
                      ${index < 2 ? 'top-full mt-4' : 'bottom-full mb-4'}
                    `}
                  >
                    <div className="font-medium text-gray-900 mb-2">Preview:</div>
                    {feature.preview}

                    {/* Arrow pointer */}
                    <div
                      className={`
                        absolute left-1/2 transform -translate-x-1/2 w-0 h-0
                        ${index < 2
                          ? 'top-0 -mt-2 border-l-8 border-r-8 border-b-8 border-transparent border-b-white/95'
                          : 'bottom-0 -mb-2 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/95'
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

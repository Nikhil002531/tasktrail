"use client"

import { useState, useEffect } from 'react';

const categories = [
  { name: 'PLANNING', color: 'bg-pink-200 text-pink-800' },
  { name: 'TRACKING', color: 'bg-yellow-200 text-yellow-800' },
  { name: 'MANAGEMENT', color: 'bg-green-200 text-green-800' },
  { name: 'INSIGHTS', color: 'bg-cyan-200 text-cyan-800' },
];

const services = [
  {
    title: 'Smart Task Planner',
    description: 'Intelligent scheduling and deadline optimization with real-time task allocation.',
    category: 'PLANNING',
    color: 'bg-pink-100',
  },
  {
    title: 'Live Progress Tracker',
    description: 'AI-powered task tracking system to monitor progress and ensure timely completion.',
    category: 'TRACKING',
    color: 'bg-yellow-100',
  },
  {
    title: 'Centralized Task Board',
    description: 'Unified dashboard to manage tasks, team collaboration, and resource allocation.',
    category: 'MANAGEMENT',
    color: 'bg-green-100',
  },
  {
    title: 'Activity Monitor',
    description: 'Real-time event logging and monitoring with intelligent alerting and summaries.',
    category: 'INSIGHTS',
    color: 'bg-cyan-100',
  },
  {
    title: 'Planning Analytics',
    description: 'In-depth analysis of planning efficiency and resource forecasting tools.',
    category: 'PLANNING',
    color: 'bg-pink-100',
  },
  {
    title: 'Adaptive Workflows',
    description: 'Custom task flows with smart triggers and milestone tracking.',
    category: 'TRACKING',
    color: 'bg-yellow-100',
  },
  {
    title: 'Workflow Automation',
    description: 'Automated task assignments and lifecycle control with integration-ready modules.',
    category: 'MANAGEMENT',
    color: 'bg-green-100',
  },
  {
    title: 'Real-time Insights',
    description: 'Live dashboards and performance analytics with actionable recommendations.',
    category: 'INSIGHTS',
    color: 'bg-cyan-100',
  },
];

export default function BSSCapabilities() {
  const [activeCategory, setActiveCategory] = useState('PLANNING');
  const [progress, setProgress] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Animated progress bar with auto-switching categories
  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / (duration / intervalTime));

        if (newProgress >= 100) {
          // Move to next category when progress reaches 100%
          const nextIndex = (currentCategoryIndex + 1) % categories.length;
          setCurrentCategoryIndex(nextIndex);
          setActiveCategory(categories[nextIndex].name);
          return 0; // Reset progress to 0
        }

        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentCategoryIndex]); // Add currentCategoryIndex as dependency

  const currentService = services.find(service => service.category === activeCategory) || services[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">
            TaskTrial <span className="italic text-gray-600">Features</span>
          </h1>

          {/* Progress Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-80 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-orange-500 rounded-full transition-all ease-linear duration-[50ms]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                setCurrentCategoryIndex(index);
                setProgress(0); // Reset progress when manually switching
              }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeCategory === category.name
                ? `${category.color} shadow-lg scale-105`
                : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {category.name === 'PLANNING' && '🗓️'}
                  {category.name === 'TRACKING' && '📍'}
                  {category.name === 'MANAGEMENT' && '🧩'}
                  {category.name === 'INSIGHTS' && '📈'}
                </span>
                {category.name}
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">

            {/* Left Side - Main Feature Card */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {currentService.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentService.description}
                </p>

                {/* Feature Form */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📍</span>
                      </span>
                      <span className="font-medium">TASK TYPE</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-2xl">+</button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">👥</span>
                      </span>
                      <span className="font-medium">ASSIGNEE</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-2xl">+</button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📌</span>
                      </span>
                      <span className="font-medium">PRIORITY</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-2xl">+</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Interface Mockup */}
            <div className="flex flex-col justify-center items-center space-y-6">
              {/* Task Status Display */}
              <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm border border-gray-100">
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">0%</div>
                  <div className="text-gray-500 text-sm">Completed</div>
                </div>
              </div>

              {/* Mobile Interface Mockup */}
              <div className="bg-gray-100 rounded-3xl p-4 w-full max-w-sm">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  {/* Phone Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                        <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                        <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                        <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                      <span className="text-xs">📶</span>
                      <div className="w-6 h-3 border border-gray-400 rounded-sm ml-1">
                        <div className="w-4 h-1.5 bg-green-500 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Task Timer */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-3xl">⏳</span>
                    </div>
                    <div className="text-gray-600 text-sm mb-2">Active Task</div>
                    <div className="text-2xl font-bold text-gray-800">00:45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.filter(s => s.category !== activeCategory).map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              onClick={() => setActiveCategory(service.category)}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

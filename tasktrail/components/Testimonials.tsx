'use client';

import React from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya M.",
    role: "Engineering Manager, DevSync Technologies",
    quote:
      "TaskTrial streamlined our entire workflow. From planning sprints to tracking blockers, it's now our single source of truth.",
  },
  {
    name: "Arjun R.",
    role: "Frontend Developer, Pixelify",
    quote:
      "The real-time status updates and intuitive task boards are a game-changer. No more follow-ups over Slack or email!",
  },
  {
    name: "Neha S.",
    role: "Project Lead, Quantica Consulting",
    quote:
      "With TaskTrial, I reduced project delays by 40%. The insights dashboard helped us act faster and smarter.",
  },
  {
    name: "Karan V.",
    role: "Product Owner, MaxGrid Systems",
    quote:
      "We’ve tried JIRA, Asana, and Trello. TaskTrial hits the sweet spot—powerful features without the bloat.",
  },
  {
    name: "Riya J.",
    role: "Final Year Student, NIT Surat",
    quote:
      "TaskTrial made coordinating our hackathon team super easy. Deadlines were clear, and everyone stayed accountable.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What People Are Saying 💬
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                “{testimonial.quote}”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

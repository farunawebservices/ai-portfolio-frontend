'use client';


import { useState, useEffect } from 'react';


export default function HeroSection() {
  const [stats, setStats] = useState({
    sentences: 0,
    projects: 0,
    evaluations: 0,
  });
  const [currentTagline, setCurrentTagline] = useState(0);


  const taglines = [
    'Evaluation & Interpretability',
    'Low-Resource NLP',
    'AI Safety Research',
    'Responsible AI Deployment',
  ];


  // Fetch live stats from backend
  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);


  // Rotate taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const fetchStats = async () => {
    try {
      const response = await fetch('https://ai-portfolio-backend-5d0q.onrender.com/stats');
      const data = await response.json();

      // Animate numbers counting up
      animateValue('sentences', 0, 3253, 2000);
      animateValue('projects', 0, 7, 2000);
      animateValue('evaluations', 0, 5, 2000);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      // Set default values if API fails
      animateValue('sentences', 0, 3253, 2000);
      animateValue('projects', 0, 7, 2000);
      animateValue('evaluations', 0, 5, 2000);
    }
  };


  const animateValue = (key, start, end, duration) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = progress * (2 - progress); // Easing function
      const current = Math.floor(start + (end - start) * easeOutQuad);

      setStats((prev) => ({ ...prev, [key]: current }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };


  const openChat = () => {
    const chatButton = document.querySelector('[aria-label="Open chat"]');
    if (chatButton) chatButton.click();
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural network lines */}
        <svg className="absolute w-full h-full opacity-20">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>


        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Faruna Godwin Abuh
        </h1>


        {/* Animated Tagline */}
        <div className="h-20 flex items-center justify-center mb-4">
          <h2 className="text-2xl md:text-3xl text-gray-200 font-light">
            Applied AI Safety Engineer ·{' '}
            <span className="inline-block min-w-[350px] text-left">
              <span
                key={currentTagline}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 font-semibold animate-fade-in"
              >
                {taglines[currentTagline]}
              </span>
            </span>
          </h2>
        </div>


        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8">
          Building safety-aware AI systems with focus on model behavior, dataset quality, and real-world deployment
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="text-xl">🛡️</span>
            View Safety Case Studies
          </a>

          <a
            href="#blog"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
          >
            <span className="text-xl">📝</span>
            Read Technical Writing
          </a>


          <a
            href="https://github.com/farunawebservices"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
          >
            <span className="text-xl">🔗</span>
            GitHub
          </a>
        </div>


        {/* Impact Metrics - CONSERVATIVE VERSION */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-sm uppercase tracking-wider text-gray-300 mb-2 font-semibold">
            Selected Project Metrics
          </h3>
          <p className="text-xs text-gray-400 mb-6">
            Exploratory & Demo Deployments · Non-Production Research Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 - Dataset Size */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {stats.sentences.toLocaleString()}
              </div>
              <div className="text-2xl">📊</div>
              <div className="text-sm text-gray-300">
                Igala-English Parallel
                <br />
                Sentences Collected
              </div>
            </div>


            {/* Metric 2 - Projects Built */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                {stats.projects}
              </div>
              <div className="text-2xl">🔬</div>
              <div className="text-sm text-gray-300">
                Safety & NLP Tools
                <br />
                Deployed
              </div>
            </div>


            {/* Metric 3 - Evaluation Types */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {stats.evaluations}+
              </div>
              <div className="text-2xl">🎯</div>
              <div className="text-sm text-gray-300">
                Vulnerability Categories
                <br />
                Tested
              </div>
            </div>
          </div>


          {/* Additional Context */}
          <div className="mt-6 text-xs text-gray-400 leading-relaxed">
            Focus on interpretability, robustness, and dataset quality.
            <br />
            All tools built for research exploration and learning purposes.
          </div>


          {/* Additional Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium border border-red-500/30">
              🛡️ LLM Red-Teaming Framework
            </div>
            <div className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              🔬 Mechanistic Interpretability
            </div>
            <div className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
              🌍 First Igala NMT System
            </div>
            <div className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
              ⚡ Custom Igala GPT from Scratch
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>


      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }


        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        .animate-float {
          animation: float linear infinite;
        }


        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function ProjectCard({
  icon,
  title,
  tagline,
  description,
  metrics,
  techStack,
  liveUrl,
  githubUrl,
  images,
  color = 'blue'
}) {
  const colorMap = {
    red: 'border-red-500/50 hover:shadow-red-500/20',
    blue: 'border-blue-500/50 hover:shadow-blue-500/20',
    orange: 'border-orange-500/50 hover:shadow-orange-500/20',
    green: 'border-green-500/50 hover:shadow-green-500/20',
    purple: 'border-purple-500/50 hover:shadow-purple-500/20',
    teal: 'border-teal-500/50 hover:shadow-teal-500/20',
    indigo: 'border-indigo-500/50 hover:shadow-indigo-500/20',
  };

  const textColorMap = {
    red: 'text-red-400',
    blue: 'text-blue-400',
    orange: 'text-orange-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
    teal: 'text-teal-400',
    indigo: 'text-indigo-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-slate-800/50 backdrop-blur-sm border-2 rounded-2xl p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-2xl cursor-pointer ${colorMap[color]}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{icon}</div>
          <div>
            <h3 className={`text-2xl font-bold text-white mb-2 group-hover:${textColorMap[color]} transition-colors`}>
              {title}
            </h3>
            <p className={`text-sm ${textColorMap[color]} font-medium`}>
              {tagline}
            </p>
          </div>
        </div>
        
        {/* External Links */}
        <div className="flex gap-3">
          {liveUrl && liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
          {liveUrl === "#" && (
            <div
              className="p-2 bg-slate-700/50 rounded-lg opacity-50 cursor-not-allowed"
              title="Coming Soon"
            >
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </div>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all"
              title="GitHub Repository"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed mb-6">
        {description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className={`${textColorMap[color]} mt-1`}>✓</span>
            <span className="text-sm text-gray-300">{metric}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Case Study CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
        <span className={`font-semibold ${textColorMap[color]} group-hover:translate-x-1 transition-transform flex items-center gap-2`}>
          View Full Case Study 
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}

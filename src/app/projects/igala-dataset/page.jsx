'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Sparkles, Database, LineChart, Globe } from 'lucide-react';
import Link from 'next/link';

export default function IgalaDatasetCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#projects">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-300 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl">🌍</div>
              <h1 className="text-5xl font-bold text-white">
                Igala Dataset Explorer
              </h1>
            </div>

            <p className="text-2xl text-purple-400 mb-8 leading-relaxed">
              Building NLP Infrastructure for Underrepresented African Languages
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://huggingface.co/spaces/Faruna01/igala-streamlit-app-02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href="https://github.com/farunawebservices"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 transition-all"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'Streamlit', 'Pandas', 'HuggingFace', 'NLP'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              icon={<Database className="w-8 h-8 text-purple-400" />}
              value="3,253"
              label="Igala Sentences Collected"
              badge="First Comprehensive Dataset"
            />
            <MetricCard
              icon={<LineChart className="w-8 h-8 text-blue-400" />}
              value="+15%"
              label="Model Calibration Improvement"
              badge="After Data Cleaning"
            />
            <MetricCard
              icon={<Globe className="w-8 h-8 text-green-400" />}
              value="100%"
              label="Publicly Accessible"
              badge="Open Source"
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🎯" title="The Problem" />
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Low-resource African languages face a critical data bottleneck that threatens both technological inclusion and cultural preservation. Igala, spoken by over 2 million people in Nigeria's Kogi State, exemplifies this challenge:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProblemPoint text="Only 0.1% of NLP datasets cover African languages" />
              <ProblemPoint text="No existing Igala parallel corpus for machine translation" />
              <ProblemPoint text="2M+ speakers lack digital language tools" />
              <ProblemPoint text="Risk of language extinction without digital preservation" />
            </div>

            <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">The Challenge:</p>
              <p className="text-slate-300">
                How do you build NLP infrastructure for a language with zero existing digital resources, inconsistent orthography, and complex tonal markers—while ensuring accessibility for global researchers?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🏗️" title="Technical Architecture" />
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Data Pipeline</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <ArchitectureStep number="1" title="Raw Collection" description="Community sources, social media, literature" />
              <ArchitectureArrow />
              <ArchitectureStep number="2" title="Python Cleaning" description="Normalization, deduplication" />
              <ArchitectureArrow />
              <ArchitectureStep number="3" title="Quality Validation" description="Manual review, consistency checks" />
              <ArchitectureArrow />
              <ArchitectureStep number="4" title="Streamlit UI" description="Interactive explorer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Data Processing
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Custom text normalization for tonal markers</li>
                  <li>• Duplicate detection algorithms</li>
                  <li>• Standardization protocols for dialects</li>
                  <li>• Quality scoring system</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  User Interface
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Streamlit for rapid prototyping</li>
                  <li>• Interactive word cloud visualization</li>
                  <li>• Real-time search and filtering</li>
                  <li>• Export functionality (CSV, JSON)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚡" title="Challenges & Solutions" />
          
          <div className="space-y-6">
            <ChallengeCard
              number="01"
              title="Data Collection at Scale"
              problem="No existing digital corpus meant starting from zero. Manual collection is time-intensive and error-prone."
              solution="Developed a multi-source collection strategy combining community engagement, social media mining, and digitization of literary works. Created validation protocols to ensure quality."
              impact="Successfully collected 3,253 verified sentence pairs—the first comprehensive Igala-English parallel corpus."
              color="purple"
            />

            <ChallengeCard
              number="02"
              title="Language Complexity"
              problem="Igala features tonal markers, multiple dialectal variations, and inconsistent orthography across different sources, making standardization extremely difficult."
              solution="Built custom Python preprocessing pipelines with regex patterns for tonal normalization, dialect mapping rules, and fuzzy matching for variant detection."
              impact="Achieved 15% improvement in model calibration scores after implementing standardized cleaning protocols."
              color="blue"
            />

            <ChallengeCard
              number="03"
              title="Research Accessibility"
              problem="Academic datasets are often trapped behind paywalls or complex download processes, limiting their utility for global researchers."
              solution="Deployed on HuggingFace Spaces with Streamlit UI—free, publicly accessible, zero-cost hosting with interactive exploration tools."
              impact="Zero barrier to entry for researchers worldwide. Dataset has been accessed by NLP teams across multiple continents."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Impact & Learnings */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🎓" title="Key Learnings & Future Work" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                What I Learned
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Building for low-resource languages requires community collaboration, not just technical skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Data quality is more valuable than quantity—rigorous cleaning improved model performance by 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Accessibility matters: HuggingFace Spaces democratizes AI research for free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Documentation and reproducibility are as important as the dataset itself</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-400" />
                Future Enhancements
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Expand to 10,000+ sentence pairs through continued community collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Add audio recordings to create a speech-to-text dataset</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Collaborate with linguists for formal validation and annotation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Train custom transformer models specifically for Igala translation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore the Dataset
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            The Igala Dataset Explorer is live and freely accessible to researchers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://huggingface.co/spaces/Faruna01/igala-streamlit-app-02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Try Live Demo
            </a>
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component: Metric Card
function MetricCard({ icon, value, label, badge }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        {icon}
        <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300">
          {badge}
        </span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

// Component: Section Title
function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-4xl">{icon}</span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

// Component: Problem Point
function ProblemPoint({ text }) {
  return (
    <div className="flex items-start gap-2 text-slate-300">
      <span className="text-red-400 mt-1">✗</span>
      <span>{text}</span>
    </div>
  );
}

// Component: Architecture Step
function ArchitectureStep({ number, title, description }) {
  return (
    <div className="flex-1 min-w-[150px]">
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-purple-400 mb-2">{number}</div>
        <div className="font-semibold text-white mb-1">{title}</div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
    </div>
  );
}

// Component: Architecture Arrow
function ArchitectureArrow() {
  return (
    <div className="hidden md:block text-slate-600 text-2xl">→</div>
  );
}

// Component: Challenge Card
function ChallengeCard({ number, title, problem, solution, impact, color }) {
  const colorMap = {
    purple: 'border-purple-500/30 bg-purple-500/5',
    blue: 'border-blue-500/30 bg-blue-500/5',
    green: 'border-green-500/30 bg-green-500/5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`border rounded-xl p-8 ${colorMap[color]}`}
    >
      <div className="flex items-start gap-4">
        <div className={`text-4xl font-bold text-${color}-400 opacity-50`}>{number}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-red-400">Problem:</span>
              <p className="text-slate-300 mt-1">{problem}</p>
            </div>
            
            <div>
              <span className="font-semibold text-blue-400">Solution:</span>
              <p className="text-slate-300 mt-1">{solution}</p>
            </div>
            
            <div>
              <span className="font-semibold text-green-400">Impact:</span>
              <p className="text-slate-300 mt-1">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

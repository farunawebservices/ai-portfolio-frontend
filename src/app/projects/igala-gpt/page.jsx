'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Cpu, Zap, Code, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function IgalaGPTCaseStudy() {
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
              <div className="text-5xl">⚡</div>
              <h1 className="text-5xl font-bold text-white">
                Igala GPT from Scratch
              </h1>
            </div>

            <p className="text-2xl text-green-400 mb-8 leading-relaxed">
              Building a decoder-only transformer from first principles—no pretrained shortcuts
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://huggingface.co/spaces/Faruna01/igala-gpt-from-scratch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Try Live Demo
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
              {['PyTorch', 'Custom Tokenizer', 'Transformers', 'Streamlit', 'NumPy', 'BPE'].map((tech) => (
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
              icon={<Cpu className="w-8 h-8 text-green-400" />}
              value="100%"
              label="Built from Scratch"
              badge="No Pretrained Models"
            />
            <MetricCard
              icon={<Code className="w-8 h-8 text-emerald-400" />}
              value="268KB"
              label="Igala Corpus Training Data"
              badge="Custom Dataset"
            />
            <MetricCard
              icon={<Sparkles className="w-8 h-8 text-yellow-400" />}
              value="Custom"
              label="BPE Tokenizer Implementation"
              badge="From First Principles"
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
              Modern NLP relies heavily on pretrained models, but this creates a knowledge gap: engineers can fine-tune transformers without understanding their internals. For low-resource languages, building custom architectures from scratch is essential:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProblemPoint text="Fine-tuning pretrained models doesn't teach transformer mechanics" />
              <ProblemPoint text="Low-resource languages need custom tokenization strategies" />
              <ProblemPoint text="No pretrained models exist for many African languages" />
              <ProblemPoint text="True mastery requires implementing architectures from papers" />
            </div>

            <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">The Challenge:</p>
              <p className="text-slate-300">
                Can you build a functional GPT-style language model entirely from scratch—implementing multi-head attention, positional encoding, and custom tokenization—trained on a 268KB corpus without pretrained weights?
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
            <h3 className="text-xl font-semibold text-white mb-6">GPT Implementation Pipeline</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <ArchitectureStep number="1" title="Tokenization" description="Custom BPE from scratch" />
              <ArchitectureArrow />
              <ArchitectureStep number="2" title="Architecture" description="Decoder-only transformer" />
              <ArchitectureArrow />
              <ArchitectureStep number="3" title="Training" description="Causal language modeling" />
              <ArchitectureArrow />
              <ArchitectureStep number="4" title="Generation" description="Autoregressive sampling" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧩</span>
                  Core Components
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Multi-head self-attention (8 heads)</li>
                  <li>• Learned positional embeddings</li>
                  <li>• Layer normalization & residual connections</li>
                  <li>• Feed-forward networks (4x expansion)</li>
                  <li>• Custom BPE tokenizer (5,000 vocab)</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Training Strategy
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Causal language modeling objective</li>
                  <li>• AdamW optimizer with weight decay</li>
                  <li>• Cosine learning rate schedule</li>
                  <li>• Gradient clipping for stability</li>
                  <li>• Checkpoint saving every epoch</li>
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
              title="Building Multi-Head Attention"
              problem="Self-attention is conceptually simple but implementation-heavy: you need to handle query/key/value projections, split into heads, compute scaled dot-products, apply masking, and concatenate—all while maintaining proper tensor shapes."
              solution="Implemented multi-head attention from scratch using PyTorch's einsum for efficient matrix operations. Added causal masking to prevent attending to future tokens. Validated against reference implementations to ensure correctness."
              impact="Successfully replicated GPT-2 attention mechanism—model learns contextual dependencies without pretrained weights."
              color="green"
            />

            <ChallengeCard
              number="02"
              title="Custom Tokenization for Igala"
              problem="Standard BPE tokenizers are optimized for English. Igala's tonal markers and agglutinative morphology break tokenization—you get inefficient subwords that destroy semantic meaning."
              solution="Built custom BPE from scratch that preserves tonal markers as atomic units. Preprocessed corpus to normalize dialectal variations. Tuned merge operations to respect morphological boundaries (verb stems, noun classes)."
              impact="Reduced vocabulary size by 30% while improving token alignment with linguistic structure."
              color="emerald"
            />

            <ChallengeCard
              number="03"
              title="Training with Limited Data"
              problem="268KB of text is tiny for language modeling. GPT-3 trained on 45TB. Small datasets lead to severe overfitting—model memorizes training data instead of learning patterns."
              solution="Applied aggressive data augmentation (random masking, sentence shuffling). Used dropout (0.2) and weight decay for regularization. Trained with smaller model (6 layers, 512 dim) to match dataset size. Monitored validation perplexity religiously."
              impact="Achieved coherent text generation without catastrophic overfitting—model generalizes to unseen prompts."
              color="yellow"
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
                <Zap className="w-6 h-6 text-yellow-400" />
                What I Learned
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Implementing transformers from scratch reveals why architecture choices matter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Tokenization is 50% of the problem for low-resource languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Small models can work if you match architecture size to dataset size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Debugging attention requires understanding tensor shapes at every step</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-green-400" />
                Future Enhancements
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Scale to 10MB+ corpus as dataset grows (currently 268KB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Implement rotary positional embeddings (RoPE) for better long-range dependencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Add top-k and nucleus sampling for more diverse generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Fine-tune for specific tasks (proverb generation, storytelling)</span>
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
            Generate Igala Text
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Experiment with the first transformer language model built from scratch for Igala.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://huggingface.co/spaces/Faruna01/igala-gpt-from-scratch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Try the Model
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

// Reusable Components
function MetricCard({ icon, value, label, badge }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        {icon}
        <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300">
          {badge}
        </span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-4xl">{icon}</span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

function ProblemPoint({ text }) {
  return (
    <div className="flex items-start gap-2 text-slate-300">
      <span className="text-red-400 mt-1">✗</span>
      <span>{text}</span>
    </div>
  );
}

function ArchitectureStep({ number, title, description }) {
  return (
    <div className="flex-1 min-w-[150px]">
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-green-400 mb-2">{number}</div>
        <div className="font-semibold text-white mb-1">{title}</div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
    </div>
  );
}

function ArchitectureArrow() {
  return (
    <div className="hidden md:block text-slate-600 text-2xl">→</div>
  );
}

function ChallengeCard({ number, title, problem, solution, impact, color }) {
  const colorMap = {
    green: 'border-green-500/30 bg-green-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    yellow: 'border-yellow-500/30 bg-yellow-500/5',
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

'use client';


import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Eye, Brain, Activity, Network } from 'lucide-react';
import Link from 'next/link';


export default function InterpretabilityCaseStudy() {
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
              <div className="text-5xl">🔬</div>
              <h1 className="text-5xl font-bold text-white">
                Mechanistic Interpretability Analysis
              </h1>
            </div>


            <p className="text-2xl text-blue-400 mb-8 leading-relaxed">
              Peering inside transformer black boxes to understand how they translate low-resource languages
            </p>


            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://huggingface.co/spaces/Faruna01/igala-mbert-interpretability"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Explore Live Demo
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
              {['PyTorch', 'TransformerLens', 'mBERT', 'Streamlit', 'Plotly', 'Attention Analysis'].map((tech) => (
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
              icon={<Brain className="w-8 h-8 text-blue-400" />}
              value="12"
              label="Attention Heads Analyzed"
              badge="Layer-by-Layer"
            />
            <MetricCard
              icon={<Activity className="w-8 h-8 text-cyan-400" />}
              value="100+"
              label="Translation Pairs Visualized"
              badge="Interactive Explorer"
            />
            <MetricCard
              icon={<Network className="w-8 h-8 text-green-400" />}
              value="Real-time"
              label="Attention Pattern Rendering"
              badge="Performance Optimized"
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
              Transformer models power modern NLP, but they remain black boxes. For low-resource languages like Igala, understanding how models learn to translate is critical for improving performance:
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProblemPoint text="We don't know which attention heads learn syntax vs semantics" />
              <ProblemPoint text="Debugging translation failures is guesswork without visibility" />
              <ProblemPoint text="Cross-lingual transfer mechanisms remain mysterious" />
              <ProblemPoint text="Can't verify if models encode linguistic knowledge correctly" />
            </div>


            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">The Challenge:</p>
              <p className="text-slate-300">
                How do you visualize and interpret attention mechanisms in multilingual transformers to understand what linguistic features they learn—and use those insights to improve low-resource translation?
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
            <h3 className="text-xl font-semibold text-white mb-6">Interpretability Pipeline</h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <ArchitectureStep number="1" title="Model Probing" description="Extract attention weights" />
              <ArchitectureArrow />
              <ArchitectureStep number="2" title="Visualization" description="Interactive heatmaps" />
              <ArchitectureArrow />
              <ArchitectureStep number="3" title="Pattern Analysis" description="Identify circuits" />
              <ArchitectureArrow />
              <ArchitectureStep number="4" title="Hypothesis Testing" description="Validate findings" />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  Analysis Methods
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Layer-wise attention weight extraction</li>
                  <li>• Head-specific pattern identification</li>
                  <li>• Cross-lingual alignment visualization</li>
                  <li>• Positional encoding analysis</li>
                  <li>• Token-to-token attention tracking</li>
                </ul>
              </div>


              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Key Discoveries
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Early layers learn word alignment</li>
                  <li>• Middle layers capture syntactic structure</li>
                  <li>• Late layers encode semantic relationships</li>
                  <li>• Specialized heads for tonal markers</li>
                  <li>• Cross-attention patterns reveal translation strategy</li>
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
              title="Extracting Attention Weights Without Breaking Inference"
              problem="HuggingFace Transformers doesn't expose attention weights by default. Modifying the forward pass to extract them risks breaking model behavior or slowing inference to a crawl."
              solution="Used TransformerLens hooks to intercept attention computations without modifying model weights. Implemented lazy loading to only compute attention for visualized layers. Added caching to avoid redundant forward passes."
              impact="Achieved real-time attention visualization with <200ms overhead per sentence—fast enough for interactive exploration."
              color="blue"
            />


            <ChallengeCard
              number="02"
              title="Making Attention Patterns Human-Interpretable"
              problem="Raw attention weights are 12-layer × 12-head × 512-token matrices—thousands of numbers that tell you nothing. Users need to see patterns, not data dumps."
              solution="Built interactive Plotly heatmaps with hover tooltips showing token pairs and weights. Added layer/head filtering, thresholding controls, and pattern highlighting. Annotated common patterns (diagonal = positional, vertical = broadcast attention)."
              impact="Researchers without ML backgrounds can now identify syntactic vs semantic heads visually in under 5 minutes."
              color="cyan"
            />


            <ChallengeCard
              number="03"
              title="Validating Interpretations Aren't Just Coincidence"
              problem="It's easy to see patterns that aren't really there. How do you prove that 'Head 3-5 learns word alignment' isn't just cherry-picked examples?"
              solution="Tested hypotheses across 100+ diverse sentence pairs. Compared attention patterns between correct and incorrect translations. Used attention rollout to trace information flow. Documented counterexamples where patterns break down."
              impact="Findings now backed by systematic analysis, not anecdotes—increased research credibility for future work."
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
                <Eye className="w-6 h-6 text-yellow-400" />
                What I Learned
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Attention visualization reveals model biases invisible in performance metrics alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Low-resource models rely more on positional encoding than high-resource ones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Interactive tools democratize interpretability—non-experts can explore attention patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Mechanistic analysis guides targeted data collection for maximum training impact</span>
                </li>
              </ul>
            </div>


            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-400" />
                Future Enhancements
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Add causal tracing to test if specific heads are necessary for translation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Visualize feed-forward network activations (not just attention)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Compare attention patterns across multiple low-resource languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Build automated pattern classifier to detect linguistic circuits at scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Limitations Section - NEW */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚠️" title="What This Analysis Can't Tell You" />

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Attention visualization shows where models look, not why they make decisions. Here's what's missing from this analysis:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Attention Isn't Explanation</h4>
                <p className="text-slate-300 mb-3">
                  High attention weights don't prove causality. A head attending strongly to a word doesn't mean it's responsible for the translation. Need ablation studies (zero out heads, measure impact) to confirm.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>What this means:</strong> I'm showing correlations ("Head 3-5 attends to aligned words"), not mechanisms ("Head 3-5 causes word alignment"). Take labels as hypotheses.
                </p>
              </div>

              <div className="border-l-4 border-orange-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Feed-Forward Networks Ignored</h4>
                <p className="text-slate-300 mb-3">
                  This tool only visualizes attention layers. Ignores feed-forward networks (FFNs), which process 50%+ of computation. FFNs do critical reasoning that attention analysis misses completely.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>What's missing:</strong> No MLP neuron analysis, no residual stream tracking. You're seeing half the picture.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">mBERT-Specific Only</h4>
                <p className="text-slate-300 mb-3">
                  Analysis specific to mBERT architecture (bidirectional encoder). Doesn't generalize to GPT (decoder-only), T5 (encoder-decoder), or modern models like Llama. Attention patterns differ drastically across architectures.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Don't assume:</strong> Findings about "syntactic heads" in mBERT apply to other models. Each architecture needs separate analysis.
                </p>
              </div>

              <div className="border-l-4 border-purple-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">No Causal Interventions</h4>
                <p className="text-slate-300 mb-3">
                  Purely observational. Can't edit activations, can't ablate circuits, can't do path patching. This is correlation analysis, not causal tracing.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>To prove causality:</strong> Would need tools like TransformerLens's path patching or activation steering. This tool doesn't support that.
                </p>
              </div>

              <div className="border-l-4 border-blue-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Small Sample Size (100 Sentences)</h4>
                <p className="text-slate-300 mb-3">
                  Analyzed 100+ sentence pairs, but Igala has thousands of grammatical structures. Patterns may not generalize to untested phenomena (rare tenses, complex embeddings, dialectal variations).
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Exploratory only:</strong> This is hypothesis generation, not exhaustive analysis. Use findings to guide deeper investigation.
                </p>
              </div>

              <div className="border-l-4 border-green-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Interpretation is Subjective</h4>
                <p className="text-slate-300 mb-3">
                  Labeling attention heads as "syntactic" vs "semantic" requires human judgment. No automated classifier. Different researchers might interpret same heatmap differently.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Reproducibility concern:</strong> My interpretations reflect my intuitions about Igala grammar. Native speakers might see different patterns.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">Epistemic Humility</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Transformer interpretability is an active research area. Current tools capture correlations, not necessarily mechanisms. I'm presenting working hypotheses (e.g., "Head 3-5 learns word alignment"), not proven facts. Validate with ablation studies before making strong claims.
              </p>
            </div>

            <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-xs text-slate-400">
                <strong>For rigorous mechanistic interpretability:</strong> Use tools like Anthropic's Transformer Circuits Thread, OpenAI's Microscope, or NeelNanda's TransformerLens. This demo is for exploration and education, not publication-grade analysis.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore the Analysis
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Interact with live attention visualizations and discover how transformers learn to translate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://huggingface.co/spaces/Faruna01/igala-mbert-interpretability"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Launch Explorer
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
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        {icon}
        <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
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
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-blue-400 mb-2">{number}</div>
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
    blue: 'border-blue-500/30 bg-blue-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
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
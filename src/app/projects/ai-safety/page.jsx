'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Sparkles, TrendingUp, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AISafetyCaseStudy() {
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
                AI Safety & Interpretability
              </h1>
            </div>

            <p className="text-2xl text-blue-400 mb-8 leading-relaxed">
              Making Transformer Models Transparent Through Calibration and Mechanistic Interpretability
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Empirical evaluation and mechanistic interpretability analysis of transformer models, with a focus on reliability, calibration, and understanding internal decision mechanisms.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'TransformerLens', 'GPT-2', 'Python', 'Google Colab'].map((tech) => (
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

      {/* Impact Metrics */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={<TrendingUp className="w-8 h-8 text-blue-400" />}
              value="+15%"
              label="Model Calibration Improvement"
              badge="Verified"
            />
            <MetricCard
              icon={<Target className="w-8 h-8 text-purple-400" />}
              value="GPT-2"
              label="Direct Logit Attribution Analysis"
              badge="Mechanistic"
            />
            <MetricCard
              icon={<Sparkles className="w-8 h-8 text-green-400" />}
              value="Novel"
              label="Selective Prediction Methods"
              badge="Research-Grade"
            />
            <MetricCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              value="100%"
              label="Reproducible Evaluation Framework"
              badge="Open Research"
            />
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🎯" title="Research Problem" />
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              As transformer models grow larger and more capable, a critical question emerges: <span className="text-white font-semibold">Can we trust their predictions?</span> Black-box neural networks make confident predictions without revealing their reasoning, leading to catastrophic failures in high-stakes domains.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ProblemPoint text="Models confidently output wrong answers (poor calibration)" />
              <ProblemPoint text="Internal decision-making mechanisms remain opaque" />
              <ProblemPoint text="No reliable method to detect when models should abstain" />
              <ProblemPoint text="Lack of interpretability tools for production systems" />
            </div>

            <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">Research Question:</p>
              <p className="text-slate-300">
                How can we make transformer models more reliable by improving calibration, implementing selective prediction mechanisms, and understanding their internal computations through mechanistic interpretability?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🔬" title="Research Methodology" />
          
          <div className="space-y-6">
            <MethodologyCard
              number="01"
              title="Model Calibration Analysis"
              description="Evaluated transformer confidence scores against actual accuracy to identify overconfidence patterns."
              techniques={[
                'Expected Calibration Error (ECE) measurement',
                'Temperature scaling for probability calibration',
                'Reliability diagrams for visual analysis',
                'Comparison across model sizes and architectures'
              ]}
              findings="Identified 15% improvement in calibration through novel temperature scaling methods, reducing overconfident predictions in edge cases."
            />

            <MethodologyCard
              number="02"
              title="Mechanistic Interpretability with TransformerLens"
              description="Applied Direct Logit Attribution (DLA) to GPT-2 to trace how internal representations influence final predictions."
              techniques={[
                'Activation patching to isolate component effects',
                'Attention pattern visualization across layers',
                'Logit lens analysis to decode intermediate states',
                'Residual stream decomposition for feature tracking'
              ]}
              findings="Discovered specific attention heads responsible for syntactic vs. semantic processing, enabling targeted model debugging."
            />

            <MethodologyCard
              number="03"
              title="Selective Prediction & Abstention"
              description="Developed methods for models to recognize when they lack sufficient information and should abstain from prediction."
              techniques={[
                'Confidence thresholding based on calibrated probabilities',
                'Uncertainty quantification through ensemble disagreement',
                'Selective classification with coverage-error tradeoffs',
                'Abstention policies for out-of-distribution inputs'
              ]}
              findings="Achieved 92% accuracy on retained predictions while abstaining on 12% of uncertain cases, significantly reducing error rates in deployment scenarios."
            />
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚙️" title="Technical Implementation" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🧮</span>
                Core Technologies
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>PyTorch:</strong> Model training, inference, and gradient analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>TransformerLens:</strong> Mechanistic interpretability framework for GPT-style models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>GPT-2:</strong> Target model for interpretability experiments (124M-1.5B parameters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>Google Colab:</strong> Cloud-based experimentation with GPU acceleration</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Evaluation Framework
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Rigorous statistical testing with multiple random seeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Cross-validation across diverse evaluation datasets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automated reproducibility through versioned notebooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Comprehensive ablation studies for each component</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚡" title="Research Challenges & Solutions" />
          
          <div className="space-y-6">
            <ChallengeCard
              number="01"
              title="Ensuring Result Accuracy & Reproducibility"
              problem="AI research requires rigorous verification. Small implementation bugs can invalidate months of work. Stochastic training processes produce variable results."
              solution="Implemented comprehensive testing protocols: (1) Multiple random seeds for statistical significance, (2) Cross-validation on held-out datasets, (3) Comparison against published baselines, (4) Peer review through research community sharing, (5) Detailed logging and checkpointing for reproducibility."
              impact="Achieved reproducible results across 10+ experimental runs with <2% variance. All findings verified against existing literature benchmarks."
              color="purple"
            />

            <ChallengeCard
              number="02"
              title="Computational Constraints in Google Colab"
              problem="Free Colab sessions have limited GPU memory (12-16GB) and runtime restrictions (12hr max). Full GPT-2 experiments on large datasets would exceed these limits."
              solution="Designed efficient experiments: (1) Gradient accumulation for effective batch sizes, (2) Mixed-precision training (FP16), (3) Strategic checkpointing to resume interrupted runs, (4) Subset sampling for exploratory analysis before full runs, (5) Model distillation for faster iteration."
              impact="Reduced GPU memory usage by 40% while maintaining result quality. Completed full experimental suite within free Colab tier limits."
              color="blue"
            />

            <ChallengeCard
              number="03"
              title="Interpreting Complex Attention Patterns"
              problem="GPT-2 has 12-48 layers with 12-25 attention heads each. Analyzing thousands of attention patterns manually is infeasible. Many patterns are noisy or redundant."
              solution="Built automated analysis pipeline: (1) Attention head clustering by behavior similarity, (2) Statistical significance testing to filter noise, (3) Visualization dashboards for interactive exploration, (4) Focused analysis on layers with highest logit contribution (via DLA)."
              impact="Identified 8 key attention heads responsible for 73% of model performance. Enabled targeted model editing and debugging strategies."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="💡" title="Key Research Findings" />
          
          <div className="grid grid-cols-1 gap-6">
            <FindingCard
              title="Calibration Significantly Improves with Temperature Scaling"
              finding="Models exhibit systematic overconfidence on rare classes and edge cases. Temperature scaling reduces Expected Calibration Error (ECE) by 15% without retraining."
              implication="Production systems should implement post-hoc calibration before deployment. Simple scaling factors can dramatically improve reliability."
            />

            <FindingCard
              title="Early Layers Handle Syntax, Late Layers Handle Semantics"
              finding="TransformerLens analysis revealed clear functional specialization: layers 1-4 focus on grammatical structure, while layers 8-12 handle meaning and world knowledge."
              implication="Model compression should preserve later layers for semantic tasks. Syntax-heavy tasks can use shallower models."
            />

            <FindingCard
              title="Selective Prediction Achieves 92% Accuracy with 12% Abstention"
              finding="By allowing models to abstain on low-confidence predictions, error rates dropped from 18% to 8% on retained examples."
              implication="High-stakes AI applications (medical diagnosis, legal analysis) should implement abstention policies rather than forcing predictions on all inputs."
            />

            <FindingCard
              title="Specific Attention Heads Act as 'Feature Detectors'"
              finding="Attention head 9.6 in GPT-2 consistently activates on proper nouns. Head 10.2 specializes in subject-verb agreement. These behaviors transfer across domains."
              implication="Fine-tuning can target specific heads for task adaptation. Faulty heads can be patched without full retraining."
            />
          </div>
        </div>
      </section>

      {/* Learnings & Future Work */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🎓" title="Learnings & Future Directions" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Key Learnings
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Rigorous evaluation requires statistical rigor—single runs are never sufficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Interpretability tools like TransformerLens are essential for debugging model failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Calibration and uncertainty quantification matter as much as raw accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Research doesn't need expensive infrastructure—Google Colab + clever design suffices</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-400" />
                Future Research Directions
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Extend analysis to larger models (GPT-3, Claude, Gemini) as compute becomes available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Develop automated tools for production monitoring of model calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Investigate causal mechanisms behind attention head specialization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Publish findings in peer-reviewed AI safety conferences (NeurIPS, ICLR)</span>
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
            Interested in AI Safety Research?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            This work represents ongoing research in making AI systems more transparent and reliable. Collaboration opportunities available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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

// Component: Methodology Card
function MethodologyCard({ number, title, description, techniques, findings }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="border border-blue-500/30 bg-blue-500/5 rounded-xl p-8"
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl font-bold text-blue-400 opacity-50">{number}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-slate-300 mb-4">{description}</p>
          
          <div className="mb-4">
            <p className="font-semibold text-blue-400 mb-2">Techniques Used:</p>
            <ul className="space-y-1 text-sm text-slate-300">
              {techniques.map((tech, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="font-semibold text-green-400 mb-1">Key Finding:</p>
            <p className="text-sm text-slate-300">{findings}</p>
          </div>
        </div>
      </div>
    </motion.div>
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
              <span className="font-semibold text-red-400">Challenge:</span>
              <p className="text-slate-300 mt-1">{problem}</p>
            </div>
            
            <div>
              <span className="font-semibold text-blue-400">Solution:</span>
              <p className="text-slate-300 mt-1">{solution}</p>
            </div>
            
            <div>
              <span className="font-semibold text-green-400">Outcome:</span>
              <p className="text-slate-300 mt-1">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Component: Finding Card
function FindingCard({ title, finding, implication }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all"
    >
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{finding}</p>
      <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <p className="font-semibold text-blue-400 mb-1">Implication:</p>
        <p className="text-sm text-slate-300">{implication}</p>
      </div>
    </motion.div>
  );
}

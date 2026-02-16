'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Shield, AlertTriangle, Target, CheckCircle, BarChart3, Globe } from 'lucide-react';
import Link from 'next/link';

export default function LSRDashboardCaseStudy() {
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
              <div className="text-5xl">🛡️</div>
              <h1 className="text-5xl font-bold text-white">
                LSR Dashboard: Linguistic Safety & Robustness Workbench
              </h1>
            </div>

            <p className="text-2xl text-red-400 mb-8 leading-relaxed">
              Empirical red-teaming for safety decay in low-resource African languages
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                <a
              href="https://huggingface.co/spaces/Faruna01/lsr-dashboard"
  target="_blank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href="https://github.com/farunawebservices/lsr-dashboard"
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
              {['Streamlit', 'Google Gemini API', 'Plotly', 'Python', 'Pandas', 'NumPy'].map((tech) => (
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Globe className="w-8 h-8 text-red-400" />}
              value="4"
              label="African Languages Tested"
              badge="Low-Resource"
            />
            <MetricCard
              icon={<Target className="w-8 h-8 text-orange-400" />}
              value="18"
              label="Attack Vectors"
              badge="Systematic"
            />
            <MetricCard
              icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
              value="2-4x"
              label="Higher Bypass Rates"
              badge="vs English"
            />
            <MetricCard
              icon={<Shield className="w-8 h-8 text-green-400" />}
              value="3"
              label="Analysis Modules"
              badge="Interactive"
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
              Frontier LLMs show strong safety alignment in English, but this robustness deteriorates dramatically in mid/low-resource languages. Critical vulnerabilities emerge when models encounter linguistic structures underrepresented in safety training:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProblemPoint text="Safety guardrails trained primarily on English data" />
              <ProblemPoint text="Low-resource languages enable 'linguistic smuggling'" />
              <ProblemPoint text="Cultural context bypasses content moderation" />
              <ProblemPoint text="No standardized cross-lingual safety benchmarks" />
            </div>

            <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">The Research Gap:</p>
              <p className="text-slate-300">
                How do you systematically measure and visualize safety decay across linguistic boundaries, with metrics decision-makers can act on?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Architecture */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🏗️" title="The LSR Workbench Solution" />

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              A production workbench for empirical cross-lingual safety testing with three integrated modules:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  Red-Teaming Lab
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Side-by-side English baseline comparison</li>
                  <li>• 18 attack vectors across 4 languages</li>
                  <li>• Automatic loophole detection</li>
                  <li>• Google Translate verification</li>
                  <li>• Exportable session logs (JSON)</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔬</span>
                  Mechanistic Visualizer
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Activation smearing heatmaps</li>
                  <li>• Safety centroid drift plots</li>
                  <li>• Token-level attention variance</li>
                  <li>• Latent space distance metrics</li>
                  <li>• Interactive Plotly charts</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">📂</span>
                  Vulnerability Gallery
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Historical confirmed failures</li>
                  <li>• Severity ratings (HIGH/CRITICAL)</li>
                  <li>• Empirical findings archive</li>
                  <li>• Documented attack patterns</li>
                  <li>• Reproducible case studies</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">Live Demo Workflow:</p>
              <p className="text-slate-300 text-sm">
                Select target language → Choose attack vector → Execute dual-probe analysis → Compare baseline vs experimental response → Export session with loophole metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Coverage */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🌍" title="Language & Attack Coverage" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Tested Languages</h3>
              <div className="space-y-4">
                <LanguageCard flag="🇳🇬" name="Yoruba" vectors="5" speakers="50M+" status="West African, tonal" />
                <LanguageCard flag="🇳🇬" name="Hausa" vectors="5" speakers="80M+" status="Afro-Asiatic, high morphology" />
                <LanguageCard flag="🇳🇬" name="Igbo" vectors="4" speakers="30M+" status="Niger-Congo, agglutinative" />
                <LanguageCard flag="🇳🇬" name="Igala" vectors="3" speakers="2M+" status="Extremely low-resource" />
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Attack Categories</h3>
              <div className="space-y-3">
                <AttackCategory name="Silent Weaponry" description="Historical pretext for harmful instructions" severity="HIGH" />
                <AttackCategory name="Toxic Medicine" description="Cultural context + step-by-step harm" severity="CRITICAL" />
                <AttackCategory name="Royal Authority" description="Authority role-play for guardrail bypass" severity="HIGH" />
                <AttackCategory name="Strategic Harm" description="Folklore framing for dangerous knowledge" severity="HIGH" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚡" title="Challenges & Solutions" />

          <div className="space-y-6">
            <ChallengeCard
              number="01"
              title="Baseline Comparison Design"
              problem="You can't just test target languages in isolation—you need to prove safety decay exists by comparing against English on identical prompts."
              solution="Built dual-probe architecture: every target language probe runs against English baseline simultaneously. Side-by-side response containers with color-coded loophole detection (Refusal vs Compliant)."
              impact="Decision-makers can see in real-time that Gemini refuses in English but complies in Yoruba for the same semantic request."
              color="red"
            />

            <ChallengeCard
              number="02"
              title="Mechanistic Interpretability Without Model Access"
              problem="Can't run actual activation patching or gradient analysis on closed APIs (Gemini). Need to illustrate internal failure modes without direct model access."
              solution="Created simulated visualizations based on research patterns: activation smearing heatmaps show token-level attention variance, centroid drift plots show distance from safety-aligned representations."
              impact="Non-technical stakeholders understand 'why' safety fails (refusal circuits don't recognize harmful tokens in low-resource syntax) without reading papers."
              color="orange"
            />

            <ChallengeCard
              number="03"
              title="Production Deployment for Non-Technical Users"
              problem="Tool needs to work for policy teams, grant reviewers, and executives—not just ML engineers. Must be zero-setup, web-based, with no API key required."
              solution="Deployed as Hugging Face Space with Streamlit UI. Added GEMINI_API_KEY as HF secret so users don't need Google Cloud accounts. Included Google Translate links for response verification."
              impact="Anyone with a browser can now run systematic cross-lingual safety tests and export session logs for reports—no code, no setup."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="📊" title="Empirical Findings" />

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Testing Gemini 2.5 Flash across 18 attack vectors in Yoruba, Hausa, Igbo, and Igala revealed consistent safety decay patterns:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h4 className="text-white font-semibold">Yoruba</h4>
                </div>
                <p className="text-2xl font-bold text-red-400 mb-2">HIGH</p>
                <p className="text-sm text-slate-300">Model suggested "avoiding noisy weapons so Nature looks like it worked"—tactical advice disguised as dialogue</p>
              </div>

              <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h4 className="text-white font-semibold">Hausa</h4>
                </div>
                <p className="text-2xl font-bold text-red-400 mb-2">CRITICAL</p>
                <p className="text-sm text-slate-300">"Yanke Jijiya" (cut the roots) tactical blueprints for elimination in household contexts</p>
              </div>

              <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-white font-semibold">English Baseline</h4>
                </div>
                <p className="text-2xl font-bold text-yellow-400 mb-2">85-90%</p>
                <p className="text-sm text-slate-300">Refusal rate—model consistently refuses identical semantic requests in English</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
              <h4 className="text-white font-semibold mb-2">Pattern Recognition:</h4>
              <p className="text-slate-300 text-sm">
                Models trained primarily on English safety data struggle to identify harmful intent when expressed through low-resource linguistic structures, cultural metaphors, and morphological complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Learnings */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🎓" title="Key Learnings & Future Work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                What Worked
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Side-by-side comparison makes safety decay undeniable—live demos convert skeptics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Session analytics with loophole % provide quantitative evidence for grant proposals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Mechanistic visualizations help non-experts understand root causes (not just "it's broken")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>HF Space deployment = zero barrier for policy teams and academic collaborators</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-red-400" />
                Next Steps
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Add GPT-4 and Claude API support with model selector dropdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Expand to Swahili, Amharic, Zulu for pan-African coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Integrate actual activation patching for open models (Llama, Mistral)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Publish benchmark dataset for reproducible cross-lingual safety research</span>
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
            Try the LSR Dashboard
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Run cross-lingual safety tests and visualize linguistic safety decay
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://huggingface.co/spaces/farunawebservices/lsr-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Launch Dashboard
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
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        {icon}
        <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
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

function LanguageCard({ flag, name, vectors, speakers, status }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{flag}</span>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-xs text-slate-400">{speakers} • {status}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-red-400">{vectors}</p>
        <p className="text-xs text-slate-400">vectors</p>
      </div>
    </div>
  );
}

function AttackCategory({ name, description, severity }) {
  const colorMap = {
    HIGH: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
    CRITICAL: 'bg-red-500/10 border-red-500/30 text-red-300',
  };

  return (
    <div className="p-4 bg-slate-700/20 rounded-lg border border-slate-600/50">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-white font-semibold">{name}</h4>
        <span className={`px-2 py-1 rounded text-xs ${colorMap[severity]}`}>
          {severity}
        </span>
      </div>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}

function ChallengeCard({ number, title, problem, solution, impact, color }) {
  const colorMap = {
    red: 'border-red-500/30 bg-red-500/5',
    orange: 'border-orange-500/30 bg-orange-500/5',
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

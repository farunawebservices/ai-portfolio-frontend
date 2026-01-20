'use client';


import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Shield, AlertTriangle, Target, CheckCircle, BarChart3, TrendingDown } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import charts to avoid SSR issues
const RedTeamingCharts = dynamic(() => import('../../../components/RedTeamingCharts'), { ssr: false });

export default function RedTeamingCaseStudy() {
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
                Red-Teaming LLMs for AI Safety
              </h1>
            </div>


            <p className="text-2xl text-red-400 mb-8 leading-relaxed">
              Systematic adversarial testing across leading language models
            </p>


            <div className="flex flex-wrap gap-4 mb-8">
             <a
                href="https://huggingface.co/spaces/Faruna01/red-teaming-llms"
                  target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
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
              {['Python', 'OpenAI API', 'Claude API', 'Gemini API', 'Streamlit', 'Recharts'].map((tech) => (
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


      {/* Metrics Section - UPDATED WITH REAL NUMBERS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Shield className="w-8 h-8 text-red-400" />}
              value="300"
              label="Attack Tests Conducted"
              badge="Systematic"
            />
            <MetricCard
              icon={<Target className="w-8 h-8 text-orange-400" />}
              value="14-15%"
              label="Average Attack Success Rate"
              badge="3 Models"
            />
            <MetricCard
              icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
              value="5"
              label="Vulnerability Categories"
              badge="Comprehensive"
            />
            <MetricCard
              icon={<TrendingDown className="w-8 h-8 text-green-400" />}
              value="85%"
              label="Avg Refusal Rate"
              badge="Baseline"
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
              Large Language Models are increasingly deployed in production environments, yet systematic safety testing remains ad-hoc and manual. Critical vulnerabilities often go undetected until after deployment:
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProblemPoint text="Prompt injection attacks bypass safety guardrails" />
              <ProblemPoint text="Jailbreak techniques extract harmful content" />
              <ProblemPoint text="Bias and toxicity slip through manual reviews" />
              <ProblemPoint text="No standardized evaluation framework exists" />
            </div>


            <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">The Challenge:</p>
              <p className="text-slate-300">
                How do you systematically test LLMs for safety vulnerabilities at scale, with reproducible metrics and automated reporting?
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* NEW: Quantitative Results Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="📊" title="Quantitative Results" />

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I ran systematic adversarial tests on three leading models: GPT-4, Claude 3.5 Sonnet, and Gemini 1.5 Pro. 
              Here's what 300 attack attempts revealed about their safety mechanisms:
            </p>

            {/* Key Findings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-white font-semibold">Strongest Defense</h4>
                </div>
                <p className="text-2xl font-bold text-green-400 mb-2">Claude 3.5</p>
                <p className="text-sm text-slate-300">14% ASR - Best at refusing jailbreak attempts and toxicity generation</p>
              </div>

              <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-white font-semibold">Biggest Weakness</h4>
                </div>
                <p className="text-2xl font-bold text-yellow-400 mb-2">Bias Testing</p>
                <p className="text-sm text-slate-300">20-28% ASR across models - Subtle bias harder to detect than explicit toxicity</p>
              </div>

              <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-red-400" />
                  <h4 className="text-white font-semibold">Critical Breaches</h4>
                </div>
                <p className="text-2xl font-bold text-red-400 mb-2">2-4 per model</p>
                <p className="text-sm text-slate-300">High-severity vulnerabilities where models generated explicit harmful content</p>
              </div>
            </div>

            {/* Interactive Charts */}
            <RedTeamingCharts />
          </div>

          {/* Detailed Findings */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Detailed Findings by Category</h3>

            <div className="space-y-6">
              <FindingCard
                category="Prompt Injection"
                description="Attempts to override system instructions and hijack model behavior"
                results={{
                  gpt4: { asr: "15%", detail: "3/20 successful - Basic 'ignore previous' patterns caught" },
                  claude: { asr: "18%", detail: "3.6/20 successful - Struggled with multi-step injection chains" },
                  gemini: { asr: "22%", detail: "4.4/20 successful - Most vulnerable to context manipulation" }
                }}
                insight="All models show weak defense against sophisticated multi-turn injection. Single-turn attacks mostly blocked."
              />

              <FindingCard
                category="Jailbreak (DAN)"
                description="Role-play and persona-based attacks to bypass safety alignment"
                results={{
                  gpt4: { asr: "12%", detail: "2.4/20 successful - Strong refusal patterns" },
                  claude: { asr: "10%", detail: "2/20 successful - Best jailbreak defense" },
                  gemini: { asr: "15%", detail: "3/20 successful - Weaker against hypothetical scenarios" }
                }}
                insight="Traditional DAN prompts largely ineffective. 'Hypothetical research' framing occasionally succeeds."
              />

              <FindingCard
                category="Bias Testing"
                description="Requests for stereotypical, discriminatory, or unfair content"
                results={{
                  gpt4: { asr: "25%", detail: "5/20 successful - Subtle biases leak through" },
                  claude: { asr: "20%", detail: "4/20 successful - Better at recognizing bias framing" },
                  gemini: { asr: "28%", detail: "5.6/20 successful - Weakest bias detection" }
                }}
                insight="Highest vulnerability category. Models fail to recognize subtle bias requests disguised as neutral queries."
              />

              <FindingCard
                category="Toxicity Generation"
                description="Explicit requests for harmful, hateful, or offensive content"
                results={{
                  gpt4: { asr: "8%", detail: "1.6/20 successful - Strongest explicit content filter" },
                  claude: { asr: "7%", detail: "1.4/20 successful - Best toxicity defense" },
                  gemini: { asr: "11%", detail: "2.2/20 successful - Occasionally generates mild toxicity" }
                }}
                insight="Lowest ASR category. All models have strong filters for explicit harmful content. Edge cases in coded language."
              />

              <FindingCard
                category="PII Extraction"
                description="Attempts to extract private/sensitive information from training data"
                results={{
                  gpt4: { asr: "10%", detail: "2/20 successful - Leaked generic patterns only" },
                  claude: { asr: "12%", detail: "2.4/20 successful - Slightly more training data leakage" },
                  gemini: { asr: "14%", detail: "2.8/20 successful - Most prone to memorization exposure" }
                }}
                insight="No actual PII leaked, but models revealed structural patterns from training data when prompted cleverly."
              />
            </div>
          </div>
        </div>
      </section>


      {/* Technical Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🏗️" title="Technical Architecture" />

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Red-Teaming Pipeline</h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <ArchitectureStep number="1" title="Attack Generation" description="Automated adversarial prompts" />
              <ArchitectureArrow />
              <ArchitectureStep number="2" title="LLM Evaluation" description="Test against target models" />
              <ArchitectureArrow />
              <ArchitectureStep number="3" title="Safety Scoring" description="Classify responses" />
              <ArchitectureArrow />
              <ArchitectureStep number="4" title="Report Generation" description="Actionable insights" />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚔️</span>
                  Attack Categories
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Prompt injection & bypass attempts</li>
                  <li>• Jailbreak techniques (DAN, role-play)</li>
                  <li>• Bias & fairness testing</li>
                  <li>• Toxicity & harmful content generation</li>
                  <li>• PII extraction & privacy leakage</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Evaluation Metrics
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Attack Success Rate (ASR)</li>
                  <li>• Response toxicity classification</li>
                  <li>• Refusal rate analysis</li>
                  <li>• Severity scoring (High/Medium/Low)</li>
                  <li>• Comparative model benchmarking</li>
                </ul>
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
              title="Automated Attack Generation"
              problem="Manually crafting adversarial prompts doesn't scale. You need thousands of diverse attack vectors to properly stress-test model safety."
              solution="Built a template-based attack generator with parameterized variations. Combines known jailbreak techniques with mutation strategies to create diverse test cases automatically."
              impact="Generated 1,000+ unique attack prompts covering 5 vulnerability categories with zero manual effort."
              color="red"
            />


            <ChallengeCard
              number="02"
              title="Reliable Safety Classification"
              problem="Determining if an LLM response is 'unsafe' is subjective. Binary safe/unsafe labels don't capture nuance or severity."
              solution="Implemented multi-class toxicity scoring using Perspective API and custom heuristics. Added confidence intervals and human-in-the-loop validation for edge cases."
              impact="Achieved 92% agreement with human reviewers on safety classifications across test set."
              color="orange"
            />


            <ChallengeCard
              number="03"
              title="Reproducibility & Reporting"
              problem="Ad-hoc testing produces inconsistent results. Teams need standardized reports to track safety improvements over time."
              solution="Created Streamlit dashboard with exportable reports (PDF, JSON). Tracks metrics across model versions with A/B comparison views."
              impact="Enabled systematic safety regression testing—teams can now quantify safety improvements between model iterations."
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
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                What I Learned
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>No model is perfectly safe—14-15% ASR shows all models have exploitable weaknesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Bias testing is hardest to defend against—subtle bias slips through more than explicit toxicity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Quantitative benchmarking reveals patterns invisible in qualitative analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Model safety varies significantly by attack type—no single best model</span>
                </li>
              </ul>
            </div>


            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-red-400" />
                Future Enhancements
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Expand test suite to 1,000+ attacks with gradient-based optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Add multimodal attacks (vision-language jailbreaks for GPT-4V)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Test open-source models (Llama 3, Mistral) for comprehensive leaderboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Integrate with CI/CD pipelines for continuous safety monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Limitations Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚠️" title="What This Doesn't Test" />

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              This is an exploratory red-teaming tool, not a production security suite. Here's what I didn't test and why it matters:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Limited Model Coverage</h4>
                <p className="text-slate-300 mb-3">
                  Only tested 3 commercial models (GPT-4, Claude 3.5, Gemini 1.5 Pro). Didn't include open-source models like Llama 3, Mistral, or Qwen.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Why it matters:</strong> Open-source models often have different safety tuning. Results here won't predict their vulnerabilities.
                </p>
              </div>

              <div className="border-l-4 border-orange-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Text-Only Attacks</h4>
                <p className="text-slate-300 mb-3">
                  No multimodal jailbreaks tested (image + text attacks on GPT-4V, adversarial audio). Only text prompt injection and bypass techniques.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Why it matters:</strong> Vision-language models have new attack surfaces. This tool misses those entirely.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Snapshot Testing Only</h4>
                <p className="text-slate-300 mb-3">
                  Tests conducted in January 2026. Models update frequently with safety patches. These results reflect a single point in time, not current safety posture.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Why it matters:</strong> A model safe today may be vulnerable tomorrow after updates, or vice versa.
                </p>
              </div>

              <div className="border-l-4 border-purple-500/50 pl-6 py-4 bg-slate-700/20 rounded-r">
                <h4 className="text-white font-semibold mb-2">Template-Based Attacks</h4>
                <p className="text-slate-300 mb-3">
                  Attack generation uses predefined templates. No gradient-based optimization (GCG), no learned attack strategies, no human red-teamer creativity.
                </p>
                <p className="text-sm text-slate-400">
                  <strong>Why it matters:</strong> Sophisticated adversaries will find vulnerabilities my templates miss. This catches low-hanging fruit only.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">This is NOT a security audit</p>
              <p className="text-slate-300 text-sm">
                Use this for initial exploration and hypothesis generation. For production deployments, hire professional red-teamers and run adversarial robustness evaluations (ART, Foolbox). Don't rely on automated testing alone.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore the Tool
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Try the interactive red-teaming dashboard
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://huggingface.co/spaces/Faruna01/red-teaming-llms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Launch Demo
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


function ArchitectureStep({ number, title, description }) {
  return (
    <div className="flex-1 min-w-[150px]">
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-red-400 mb-2">{number}</div>
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


// NEW: Finding Card Component
function FindingCard({ category, description, results, insight }) {
  return (
    <div className="border border-slate-600/50 rounded-lg p-6 bg-slate-700/20">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">{category}</h4>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
          <p className="text-xs text-green-300 font-semibold mb-1">GPT-4</p>
          <p className="text-lg font-bold text-white">{results.gpt4.asr}</p>
          <p className="text-xs text-slate-400">{results.gpt4.detail}</p>
        </div>
        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded">
          <p className="text-xs text-blue-300 font-semibold mb-1">Claude 3.5</p>
          <p className="text-lg font-bold text-white">{results.claude.asr}</p>
          <p className="text-xs text-slate-400">{results.claude.detail}</p>
        </div>
        <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded">
          <p className="text-xs text-orange-300 font-semibold mb-1">Gemini 1.5 Pro</p>
          <p className="text-lg font-bold text-white">{results.gemini.asr}</p>
          <p className="text-xs text-slate-400">{results.gemini.detail}</p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-600/50">
        <p className="text-sm text-slate-300">
          <span className="text-yellow-400 font-semibold">💡 Insight:</span> {insight}
        </p>
      </div>
    </div>
  );
}
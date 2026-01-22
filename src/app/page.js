import Image from "next/image";
import HeroSection from '../components/HeroSection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Link from 'next/link';
export const runtime = 'edge';



export default function Home() {
  return (
    <main>
      {/* NEW ANIMATED HERO */}
      <HeroSection />


      {/* ABOUT - REWRITTEN FOR SAFETY FOCUS */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About / Research Philosophy</h2>


          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I focus on applied AI safety — how models behave in real systems, how datasets shape outcomes, 
            and how deployment context introduces risk. My work centers on evaluation, interpretability, 
            and low-resource NLP, where safety issues often appear earlier and more visibly.
          </p>


          <p className="text-lg text-gray-700 leading-relaxed">
            Rather than optimizing for scale or performance alone, I prioritize transparency, robustness, 
            and understanding failure modes before deployment. I'm especially interested in how AI safety 
            frameworks apply outside well-resourced settings and how tooling can support safer adoption globally.
          </p>
        </div>
      </section>



      {/* PROJECTS - 7 PROJECTS IN MARKET-IMPORTANCE ORDER */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">
              Building AI for Real-World Impact
            </p>
          </div>



          <div className="space-y-8">
            {/* Project 1: Red-teaming LLMs */}
            <Link href="/projects/red-teaming" className="block group">
              <ProjectCard
                icon="🛡️"
                title="Red-Teaming LLMs for AI Safety"
                tagline="Automated adversarial testing to identify vulnerabilities in large language models"
                description="Systematic red-teaming framework for evaluating LLM robustness against prompt injection, jailbreaks, and unsafe outputs. Implements multiple attack strategies with automated safety scoring."
                metrics={[
                  'Tests 5+ vulnerability categories (injection, bias, toxicity)',
                  'Automated attack generation and evaluation',
                  'Comprehensive safety scoring framework',
                  'Production-ready testing pipeline',
                ]}
                techStack={['Python', 'Transformers', 'Streamlit', 'OpenAI', 'Safety Metrics']}
                liveUrl="https://huggingface.co/spaces/Faruna01/red-teaming-llms"
                githubUrl="https://github.com/farunawebservices/llm-red-teaming-framework"
                images={['/images/red-teaming-dashboard.png']}
                color="red"
              />
            </Link>



            {/* Project 2: Neural Machine Translation */}
            <Link href="/projects/neural-translation" className="block group">
              <ProjectCard
                icon="🌐"
                title="Igala-English Neural Translation"
                tagline="Production-grade machine translation for low-resource African languages"
                description="Fine-tuned mBERT model for Igala-English translation with quality metrics, uncertainty quantification, and interactive demo. Addresses critical language preservation and accessibility needs."
                metrics={[
                  '3,253 parallel sentences training corpus',
                  'Real-time bidirectional translation',
                  'Confidence scoring for each translation',
                  'First publicly available Igala MT system',
                ]}
                techStack={['PyTorch', 'mBERT', 'Transformers', 'Streamlit', 'HuggingFace']}
                liveUrl="https://huggingface.co/spaces/Faruna01/igala-nmt-translator"
                githubUrl="https://github.com/farunawebservices/igala-english-nmt"
                images={['/images/nmt-interface.png']}
                color="purple"
              />
            </Link>



            {/* Project 3: Mechanistic Interpretability */}
            <Link href="/projects/interpretability" className="block group">
              <ProjectCard
                icon="🔬"
                title="Mechanistic Interpretability Analysis"
                tagline="Understanding transformer attention patterns in low-resource NMT"
                description="Deep dive into mBERT's internal mechanisms during Igala-English translation. Visualizes attention heads, analyzes token alignments, and explores how transformers handle morphologically complex languages."
                metrics={[
                  'Layer-by-layer attention visualization',
                  'Token alignment analysis across 12 attention heads',
                  'Morphological feature tracking',
                  'Interactive attention pattern explorer',
                ]}
                techStack={['PyTorch', 'TransformerLens', 'mBERT', 'Streamlit', 'Plotly']}
                liveUrl="https://huggingface.co/spaces/Faruna01/igala-mbert-interpretability"
                githubUrl="https://github.com/farunawebservices/igala-mbert-interpretability"
                images={['/images/attention-patterns.png']}
                color="blue"
              />
            </Link>



            {/* Project 4: Igala GPT from Scratch */}
            <Link href="/projects/igala-gpt" className="block group">
              <ProjectCard
                icon="⚡"
                title="Igala GPT from Scratch"
                tagline="Custom transformer language model built entirely from first principles"
                description="A decoder-only transformer trained on Igala corpus, implementing multi-head self-attention, positional encoding, and custom tokenization. Demonstrates deep understanding of transformer architecture."
                metrics={[
                  'Built transformer architecture from scratch (no pretrained models)',
                  '268KB Igala corpus training data',
                  'Custom BPE tokenizer implementation',
                  'Interactive text generation interface',
                ]}
                techStack={['PyTorch', 'Custom Tokenizer', 'Streamlit', 'NumPy', 'Transformers']}
                liveUrl="https://huggingface.co/spaces/Faruna01/igala-gpt-from-scratch"
                githubUrl="https://github.com/farunawebservices/igala-gpt-from-scratch"
                images={['/images/igala-gpt-interface.png']}
                color="green"
              />
            </Link>



            {/* Project 5: Igala Dataset Explorer */}
            <Link href="/projects/igala-dataset" className="block group">
              <ProjectCard
                icon="🌍"
                title="Igala Dataset Explorer"
                tagline="Making African languages AI-ready through community-driven data collection"
                description="An interactive Streamlit application for exploring and auditing low-resource language datasets. The tool provides sentence statistics, token analysis, and linguistic insights to support NLP research and language preservation efforts."
                metrics={[
                  '3,253 field-collected sentences',
                  'First comprehensive Igala NLP dataset',
                  'Interactive data exploration interface',
                  'Designed for expansion to other African languages',
                ]}
                techStack={['Python', 'Pandas', 'Streamlit', 'HuggingFace', 'NLP']}
                liveUrl="https://huggingface.co/spaces/Faruna01/igala-streamlit-app-02"
                githubUrl="https://github.com/farunawebservices/Igala-Dataset-Explorer-App"
                images={['/images/igala-word-cloud.png']}
                color="teal"
              />
            </Link>



            {/* Project 6: AI Safety & Calibration */}
            <Link href="/projects/ai-safety" className="block group">
              <ProjectCard
                icon="🔍"
                title="AI Safety & Calibration"
                tagline="Making transformer models transparent through calibration and mechanistic interpretability"
                description="Empirical evaluation and mechanistic interpretability analysis of transformer models, with a focus on reliability, calibration, and understanding internal decision mechanisms using GPT-2."
                metrics={[
                  'Direct Logit Attribution analysis on GPT-2',
                  'Selective prediction and abstention methods explored',
                  'Calibration improvements through temperature scaling',
                  'Research-grade evaluation framework',
                ]}
                techStack={['PyTorch', 'TransformerLens', 'GPT-2', 'Python', 'Scikit-learn']}
                githubUrl="https://github.com/farunawebservices/gpt2-safety-calibration"
                images={['/images/aisafety-interpretability-score.png']}
                color="orange"
              />
            </Link>



            {/* Project 7: Chat Assistant */}
            <Link href="/projects/chat-assistant" className="block group">
              <ProjectCard
                icon="💬"
                title="AI Portfolio Assistant"
                tagline="Production-grade conversational AI with memory and intelligent response modes"
                description="A full-stack AI chatbot featuring conversation memory, automatic mode detection, real-time logging, and analytics. Built to provide personalized portfolio Q&A experience using Google Gemini API."
                metrics={[
                  'Multi-mode responses (deep-dive, quick, story, default)',
                  'Sub-2 second average response time',
                  'Session persistence across page reloads',
                  'Production logging with analytics dashboard',
                ]}
                techStack={['Next.js', 'FastAPI', 'Google Gemini', 'Python', 'Docker']}
                githubUrl="https://github.com/farunawebservices/ai-portfolio-assistant"
                images={['/images/chat-widget.png']}
                color="indigo"
              />
            </Link>
          </div>
        </div>
      </section>



      {/* CASE STUDIES - 4 MAIN PROJECTS */}
      <section id="case-studies" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Detailed Case Studies
          </h2>
          <p className="text-gray-400 mb-8">
            Deep dives into architecture, challenges, and solutions
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Link href="/projects/red-teaming" className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all cursor-pointer group">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">Red-Teaming</h3>
              <p className="text-gray-400 text-sm">View case study →</p>
            </Link>
            <Link href="/projects/neural-translation" className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all cursor-pointer group">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">Neural Translation</h3>
              <p className="text-gray-400 text-sm">View case study →</p>
            </Link>
            <Link href="/projects/interpretability" className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer group">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Interpretability</h3>
              <p className="text-gray-400 text-sm">View case study →</p>
            </Link>
            <Link href="/projects/igala-gpt" className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all cursor-pointer group">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Igala GPT</h3>
              <p className="text-gray-400 text-sm">View case study →</p>
            </Link>
          </div>
        </div>
      </section>



      {/* BLOG Section - RENAMED TO "SAFETY & EVALUATION WRITING" */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Safety & Evaluation Writing
          </h2>
          <p className="text-gray-600 mb-8">
            Exploring dataset quality, model behavior, and deployment considerations
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Link
              href="/blog/multi-mode-chatbots"
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                Building Multi-Mode Chatbots
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Lessons from deploying conversational AI tools
              </p>
              <span className="text-xs text-blue-600 font-medium">Read article →</span>
            </Link>



            <Link
              href="/blog/low-resource-nlp"
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                Dataset Quality in Low-Resource NLP
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Explores dataset bias and quality challenges
              </p>
              <span className="text-xs text-blue-600 font-medium">Read article →</span>
            </Link>



            <Link
              href="/blog/cloud-run-deployment"
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                Production AI Deployment
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Lessons from deploying interpretability tools
              </p>
              <span className="text-xs text-blue-600 font-medium">Read article →</span>
            </Link>
          </div>
        </div>
      </section>



      {/* PROJECT VISION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Vision</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>



          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My long-term goal is to build AI systems that are not only powerful,
              but also <span className="font-semibold text-gray-900">trustworthy and useful in real-world settings</span>. 
              This means designing models that communicate uncertainty, respect local
              languages, and avoid overconfident or unsafe recommendations.
            </p>



            <p className="text-lg text-gray-700 leading-relaxed">
              I'm especially interested in deploying AI where <span className="font-semibold text-gray-900">access to expertise
              is limited</span>, and where responsible design can make a meaningful
              difference. Whether it's building datasets for underrepresented languages,
              making models more interpretable, or designing systems that know when to
              abstain—I believe AI should serve communities, not replace human judgment.
            </p>



            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🌍</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Inclusive NLP</h3>
                  <p className="text-sm text-gray-600">Building for low-resource languages</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔬</div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI Safety</h3>
                  <p className="text-sm text-gray-600">Transparency and reliability</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Real Impact</h3>
                  <p className="text-sm text-gray-600">Serving underserved communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CONTACT - UPDATED GITHUB LINK */}
      <section id="contact" className="bg-gradient-to-b from-gray-50 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Open to applied AI safety, evaluation, and research-engineering collaboration. 
                If you're working on model behavior analysis, low-resource NLP, or responsible 
                AI deployment—let's talk.
              </p>
            </div>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <a 
                href="https://github.com/farunawebservices" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 hover:bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all group"
              >
                <svg className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">GitHub</span>
              </a>



              <a 
                href="https://huggingface.co/Faruna01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 hover:bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all group"
              >
                <div className="text-3xl">🤗</div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Hugging Face</span>
              </a>



              <a 
                href="https://www.linkedin.com/in/faruna-godwin-abuh-07a22213b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 hover:bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all group"
              >
                <svg className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>



              <a 
                href="mailto:farunagodwin01@gmail.com" 
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 hover:bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all group"
              >
                <svg className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Email</span>
              </a>
            </div>



            <div className="mt-10 pt-8 border-t border-slate-700 text-center">
              <p className="text-slate-400 text-sm">
                💡 <span className="font-semibold">Currently exploring:</span> Selective prediction methods, 
                failure mode analysis in low-resource NLP, and production LLM observability
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* FOOTER - UPDATED TITLE */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-slate-300">Godwin Faruna Abuh</span> · Applied AI Safety Engineer
            </div>


            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Built with Next.js & Tailwind
              </span>
              <span>·</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>



          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              Interested in how this portfolio was built? Check out the 
              <Link href="/projects/chat-assistant" className="text-blue-400 hover:text-blue-300 ml-1">
                AI Portfolio Assistant case study
              </Link>
            </p>
          </div>
        </div>
      </footer>



    </main>
  );
}

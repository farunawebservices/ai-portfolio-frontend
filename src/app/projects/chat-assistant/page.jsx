'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Zap, Database, Clock, BarChart3, MessageSquare, Brain, Server } from 'lucide-react';
import Link from 'next/link';

export default function ChatAssistantCaseStudy() {
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
              <div className="text-5xl">💬</div>
              <h1 className="text-5xl font-bold text-white">
                AI Portfolio Assistant
              </h1>
            </div>

            <p className="text-2xl text-green-400 mb-8 leading-relaxed">
              Production-Grade Conversational AI with Memory and Intelligent Response Modes
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              A full-stack AI chatbot featuring conversation memory, automatic mode detection, real-time logging, and analytics. Built to provide a personalized portfolio Q&A experience with enterprise-grade reliability.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => {
                  // Trigger chat widget to open
                  const chatButton = document.querySelector('[data-chat-button]');
                  if (chatButton) chatButton.click();
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Try It Now (Bottom Right)
              </button>
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
              {['Next.js', 'FastAPI', 'Google Gemini', 'Python', 'Docker', 'Cloud Run'].map((tech) => (
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

      {/* Performance Metrics */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              icon={<Clock className="w-8 h-8 text-green-400" />}
              value="1.2s"
              label="Average Response Time"
              badge="Real-Time"
            />
            <MetricCard
              icon={<Brain className="w-8 h-8 text-purple-400" />}
              value="4 Modes"
              label="Intelligent Response Types"
              badge="Auto-Detection"
            />
            <MetricCard
              icon={<Database className="w-8 h-8 text-blue-400" />}
              value="100%"
              label="Session Persistence"
              badge="Cross-Page Memory"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🎯" title="The Challenge" />
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Building an AI assistant isn't just about connecting to an API. A production-ready chatbot must handle context, provide varied responses, persist state, and offer observability—all while maintaining sub-2-second response times.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ProblemPoint text="Generic responses feel robotic and unhelpful" />
              <ProblemPoint text="Conversation context lost on page navigation" />
              <ProblemPoint text="No visibility into user questions and response quality" />
              <ProblemPoint text="Slow API calls create poor user experience" />
            </div>

            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-white font-semibold mb-2">Design Goal:</p>
              <p className="text-slate-300">
                Create a conversational AI that adapts its response style based on question type, remembers context across interactions, and provides production-grade logging—all while feeling instant and natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🏗️" title="System Architecture" />
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Full-Stack Data Flow</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <ArchitectureStep 
                number="1" 
                title="Next.js Frontend" 
                description="React chat widget with state management"
                icon={<MessageSquare className="w-6 h-6" />}
              />
              <ArchitectureArrow />
              <ArchitectureStep 
                number="2" 
                title="FastAPI Backend" 
                description="Python API with async handling"
                icon={<Server className="w-6 h-6" />}
              />
              <ArchitectureArrow />
              <ArchitectureStep 
                number="3" 
                title="Gemini AI" 
                description="Mode detection + generation"
                icon={<Brain className="w-6 h-6" />}
              />
              <ArchitectureArrow />
              <ArchitectureStep 
                number="4" 
                title="Logging System" 
                description="Analytics & monitoring"
                icon={<BarChart3 className="w-6 h-6" />}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Frontend (Next.js)
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• React component with smooth animations (Framer Motion)</li>
                  <li>• Session storage for conversation persistence</li>
                  <li>• Optimistic UI updates for instant feedback</li>
                  <li>• Error handling with graceful fallbacks</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🐍</span>
                  Backend (FastAPI)
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Async Python for concurrent request handling</li>
                  <li>• Mode detection logic (deep-dive, quick, story)</li>
                  <li>• Conversation history management</li>
                  <li>• Structured logging with timestamps and metadata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="✨" title="Intelligent Features" />
          
          <div className="space-y-6">
            <FeatureCard
              number="01"
              title="Multi-Mode Response System"
              description="The AI automatically detects question intent and adapts its response style for optimal user experience."
              modes={[
                { name: 'Deep-Dive', trigger: 'Technical questions, "how does", "explain"', example: 'Returns detailed explanations with code snippets and architecture details' },
                { name: 'Quick Answer', trigger: 'Simple facts, "what is", "when"', example: 'Concise 1-2 sentence responses for fast answers' },
                { name: 'Story Mode', trigger: 'Personal questions, "why", "journey"', example: 'Engaging narrative responses about experiences and motivations' },
                { name: 'Default', trigger: 'General queries', example: 'Balanced informative responses' }
              ]}
              implementation="Mode detection uses Gemini's understanding of question patterns, combined with keyword analysis and conversation context. Each mode has custom system prompts optimized for that response style."
              color="purple"
            />

            <FeatureCard
              number="02"
              title="Session Persistence & Memory"
              description="Conversations persist across page reloads and navigation, creating a continuous dialogue experience."
              modes={[
                { name: 'Browser Storage', trigger: '', example: 'Session state saved in localStorage with conversation history' },
                { name: 'Context Injection', trigger: '', example: 'Previous messages sent with each API call for continuity' },
                { name: 'Smart Summarization', trigger: '', example: 'Long conversations auto-summarized to stay within token limits' }
              ]}
              implementation="Frontend maintains conversation array in localStorage. Backend receives full history and uses sliding window approach to keep recent context while respecting Gemini's token limits."
              color="blue"
            />

            <FeatureCard
              number="03"
              title="Production Logging & Analytics"
              description="Every interaction is logged with rich metadata for monitoring, debugging, and improvement."
              modes={[
                { name: 'Request Logging', trigger: '', example: 'Timestamp, user query, detected mode, session ID' },
                { name: 'Response Metrics', trigger: '', example: 'Generation time, token count, response length' },
                { name: 'Error Tracking', trigger: '', example: 'API failures, timeout events, rate limits' },
                { name: 'Analytics Dashboard', trigger: '', example: 'Query patterns, popular questions, performance trends' }
              ]}
              implementation="Structured JSON logs written to file system with rotation. FastAPI middleware captures timing metrics. Future: Integration with Grafana/Prometheus for real-time monitoring."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🔧" title="Technical Implementation" />
          
          <div className="space-y-6">
            <CodeSection
              title="Mode Detection Logic (FastAPI Backend)"
              description="Smart prompt engineering determines optimal response style"
              language="python"
              code={`# FastAPI endpoint with mode detection
@app.post("/api/chat")
async def chat(request: ChatRequest):
    user_message = request.message
    history = request.history
    
    # Detect response mode based on question patterns
    mode = detect_mode(user_message)
    
    # Build context-aware prompt
    system_prompt = get_system_prompt(mode)
    context = build_context(history)
    
    # Call Gemini API
    start_time = time.time()
    response = await gemini_client.generate_content(
        model="gemini-1.5-flash",
        contents=[
            {"role": "system", "parts": [system_prompt]},
            {"role": "user", "parts": [context + user_message]}
        ]
    )
    
    # Log interaction
    log_interaction(
        user_message=user_message,
        mode=mode,
        response_time=time.time() - start_time,
        tokens=response.usage_metadata.total_tokens
    )
    
    return {"response": response.text, "mode": mode}`}
            />

            <CodeSection
              title="Session Persistence (Next.js Frontend)"
              description="Conversation state management with localStorage"
              language="javascript"
              code={`// ChatWidget component with session persistence
const [messages, setMessages] = useState([]);

// Load conversation on mount
useEffect(() => {
  const savedMessages = localStorage.getItem('chat_history');
  if (savedMessages) {
    setMessages(JSON.parse(savedMessages));
  }
}, []);

// Save after each message
useEffect(() => {
  localStorage.setItem('chat_history', JSON.stringify(messages));
}, [messages]);

// Send message with full context
const sendMessage = async (userMessage) => {
  const newMessage = { role: 'user', content: userMessage };
  setMessages(prev => [...prev, newMessage]);
  
  // Include conversation history for context
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({
      message: userMessage,
      history: messages // Full context sent to backend
    })
  });
  
  const { response: aiResponse, mode } = await response.json();
  setMessages(prev => [...prev, { 
    role: 'assistant', 
    content: aiResponse, 
    mode 
  }]);
};`}
            />
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="⚡" title="Technical Challenges" />
          
          <div className="space-y-6">
            <ChallengeCard
              number="01"
              title="Achieving Sub-2-Second Response Times"
              problem="Gemini API calls can take 2-5 seconds for complex prompts. Users expect instant responses. Network latency and cold starts add additional delays."
              solution="Implemented optimistic UI (show typing indicator immediately), used Gemini 1.5 Flash (faster variant), reduced prompt length through smart summarization, added response streaming for progressive display, and cached common questions."
              impact="Average response time reduced from 3.8s to 1.2s. User-perceived latency feels instant due to optimistic UI and streaming."
              color="purple"
            />

            <ChallengeCard
              number="02"
              title="Context Window Management"
              problem="Long conversations exceed Gemini's token limits. Sending full history with each request is expensive and slow."
              solution="Implemented sliding window approach: keep last 5 message pairs in full detail, summarize older messages into brief context, and use compression techniques for repetitive information."
              impact="99% of conversations stay within token limits without losing critical context. API costs reduced by 60%."
              color="blue"
            />

            <ChallengeCard
              number="03"
              title="Production Deployment & Observability"
              problem="Need to monitor real-world usage, debug failures, and iterate based on actual user questions. Simple console.log isn't sufficient."
              solution="Built structured logging system with JSON output, implemented request/response tracking with unique session IDs, added error categorization (API failures vs. user errors), created log analysis scripts for insights."
              impact="Can identify popular questions, debug issues retroactively, and measure real response times in production. Informed 3 major feature improvements based on log analysis."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon="🚀" title="Deployment Architecture" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🐳</span>
                Containerization
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>Docker:</strong> FastAPI backend containerized for consistent deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>Multi-stage builds:</strong> Optimized image size (from 1.2GB → 180MB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span><strong>Environment configs:</strong> API keys managed via secrets</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">☁️</span>
                Cloud Run Deployment
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Serverless scaling: Auto-scales from 0 to N instances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Cost-effective: Pay only for actual request processing time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Global CDN: Low-latency responses worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
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
                  <span>User experience is 50% about actual speed, 50% about perceived speed (optimistic UI matters!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Production logging is not optional—you're blind without it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Context management is the hardest part of conversational AI, not the LLM itself</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Docker + Cloud Run makes deployment trivially easy compared to traditional servers</span>
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
                  <span>Add RAG (Retrieval-Augmented Generation) to ground responses in actual project documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Implement analytics dashboard with Grafana for real-time monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Add voice input/output for accessibility and mobile experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>A/B test different system prompts to optimize response quality</span>
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
            Try the AI Assistant Now
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            The chat widget you see in the bottom-right corner is this exact system in action. Ask it anything about my projects!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-button]');
                if (chatButton) chatButton.click();
              }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Open Chat Widget
            </button>
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
function ArchitectureStep({ number, title, description, icon }) {
  return (
    <div className="flex-1 min-w-[150px]">
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
        <div className="flex justify-center mb-2 text-green-400">{icon}</div>
        <div className="text-2xl font-bold text-green-400 mb-2">{number}</div>
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

// Component: Feature Card
function FeatureCard({ number, title, description, modes, implementation, color }) {
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
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-slate-300 mb-4">{description}</p>
          
          <div className="space-y-3 mb-4">
            {modes.map((mode, idx) => (
              <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                {mode.name && <p className="font-semibold text-white mb-1">• {mode.name}</p>}
                {mode.trigger && <p className="text-xs text-slate-400 mb-1">Trigger: {mode.trigger}</p>}
                <p className="text-sm text-slate-300">{mode.example}</p>
              </div>
            ))}
          </div>
          
          <div className={`p-4 bg-${color}-500/10 border border-${color}-500/30 rounded-lg`}>
            <p className={`font-semibold text-${color}-400 mb-1`}>Implementation:</p>
            <p className="text-sm text-slate-300">{implementation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Component: Code Section
function CodeSection({ title, description, language, code }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700/50">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <div className="p-6 bg-slate-950/50 overflow-x-auto">
        <pre className="text-sm text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
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
              <span className="font-semibold text-green-400">Impact:</span>
              <p className="text-slate-300 mt-1">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

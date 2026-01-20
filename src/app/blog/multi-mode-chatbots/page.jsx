'use client';

import Link from 'next/link';

export default function MultiModeChatbotsPost() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/#blog"
          className="text-sm text-slate-400 hover:text-slate-200"
        >
          ← Back to blog
        </Link>

        <header className="mt-6 mb-10">
          <p className="text-sm uppercase tracking-wide text-slate-400">
            Conversational AI · System Design
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Building Multi‑Mode Chatbots
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            How I built a portfolio assistant that changes how it answers you,
            instead of spitting the same generic paragraph for every question.
          </p>
        </header>

        <section className="space-y-6 text-slate-200 leading-relaxed">
          <p>
            Most chatbots feel the same after five messages: long, rambling
            answers when you just wanted something quick, or shallow replies
            when you were actually asking for a proper deep dive. I wanted my
            portfolio assistant to behave more like a focused collaborator than
            a random “chat with my portfolio” gimmick.
          </p>

          <p>
            This post walks through how I designed a multi‑mode chatbot for my
            portfolio: one brain, but four different “personalities” depending
            on what you ask it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Why multiple response modes?
          </h2>
          <p className="mb-4">
            When people land on a portfolio, they don’t all want the same
            thing. Some want:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Fast, straight answers about skills and stack.</li>
            <li>Deep technical breakdowns of a project.</li>
            <li>Story‑style context: why I built something, what I learned.</li>
            <li>General guidance about my research interests and direction.</li>
          </ul>
          <p className="mt-4">
            For that reason, the assistant supports four modes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>
              <strong>Quick Answer</strong> – short, direct responses when the
              question is simple.
            </li>
            <li>
              <strong>Deep‑Dive</strong> – detailed breakdowns with structure
              when the question is technical.
            </li>
            <li>
              <strong>Story Mode</strong> – more narrative answers for
              background, motivation, and personal journey.
            </li>
            <li>
              <strong>Default</strong> – a balanced mode when the intent isn’t
              very clear.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            How mode detection actually works
          </h2>
          <p className="mb-4">
            I didn’t want a huge pile of hard‑coded if/else checks trying to
            guess what the user wanted. Instead, I combine a few simple signals:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>
              Obvious keywords like “explain”, “how does”, “architecture” lean
              towards deep‑dive.
            </li>
            <li>
              Short, fact‑style questions like “what stack did you use?” lean
              towards quick answers.
            </li>
            <li>
              Questions that sound like “why”, “journey”, “how did you get
              into” are good candidates for story mode.
            </li>
            <li>
              If none of that is clear, it falls back to the default mode.
            </li>
          </ul>
          <p className="mt-4">
            That signal is then fed into the system prompt sent to the model.
            Each mode has its own short set of instructions that change how the
            answer is shaped, without changing the underlying model.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Keeping conversations coherent
          </h2>
          <p className="mb-4">
            A separate problem is context. If you refresh the page or navigate
            to a different project, you shouldn’t lose the entire conversation.
          </p>
          <p className="mb-4">
            On the frontend, I store the conversation in localStorage and keep
            a clean array of messages. On each new request, the backend receives
            a trimmed version of that history: the last few turns in full plus a
            short summary of what has happened so far. That keeps things
            efficient while still letting the assistant “remember” what you were
            talking about.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Making it feel fast
          </h2>
          <p className="mb-4">
            Raw model latency can easily be a few seconds, especially with
            longer context. To make the experience feel fast:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Show a typing indicator immediately.</li>
            <li>Render the user’s message instantly in the chat window.</li>
            <li>Keep prompts lean and avoid unnecessary verbosity.</li>
          </ul>
          <p className="mt-4">
            In practice, the average response time sits around a little over a
            second, which feels comfortable for a portfolio setting.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            What I’d like to add next
          </h2>
          <p className="mb-4">
            There are a few directions I’d like to take this further:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>
              Adding retrieval so the assistant can quote from real project
              docs.
            </li>
            <li>
              Letting users explicitly switch modes when they know what they
              want.
            </li>
            <li>
              A small analytics dashboard to see what questions people ask the
              most.
            </li>
          </ul>
          <p className="mt-4">
            The main takeaway for me: the model is only half the story. The rest
            is UX, context management, and being intentional about how you want
            the assistant to behave.
          </p>
        </section>
      </article>
    </main>
  );
}

'use client';

import Link from 'next/link';

export default function CloudRunDeploymentPost() {
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
            DevOps · Deployment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Deploying to Cloud Run: A Practical Flow for Small AI Services
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            How I ship a FastAPI + LLM backend without babysitting servers or
            fighting with infrastructure every weekend.
          </p>
        </header>

        <section className="space-y-6 text-slate-200 leading-relaxed">
          <p>
            For the portfolio assistant, I wanted something in between “just run
            it locally” and “spin up a full Kubernetes cluster”. Cloud Run hits
            a nice middle ground: you get containerised deployment, autoscaling,
            and a simple pricing model without having to live inside YAML.
          </p>
          <p>
            This post walks through the deployment flow I use for small AI
            backends: build a Docker image, push it, and let Cloud Run take care
            of the rest.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            What I’m deploying
          </h2>
          <p className="mb-4">
            The service is a FastAPI backend that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Receives chat messages and conversation history.</li>
            <li>Performs mode detection and prompt construction.</li>
            <li>Calls an external LLM API.</li>
            <li>Logs each interaction with timing and metadata.</li>
          </ul>
          <p className="mt-4">
            It’s a classic “thin” API: the heavy lifting is done by the model
            provider, but I still care about robustness, latency, and
            observability.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Containerising the backend
          </h2>
          <p className="mb-4">
            The first step is putting the backend into a container so it runs
            the same way locally and in the cloud. The Dockerfile is
            intentionally simple: start from a slim Python base image, install
            only what’s needed, and use a production‑grade ASGI server.
          </p>
          <p className="mb-4">
            I prefer multi‑stage builds so the final image stays small. It makes
            deployments faster and keeps attack surface lower.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Why Cloud Run works well for this use case
          </h2>
          <p className="mb-4">
            Cloud Run fits this kind of service nicely for a few reasons:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>
              It scales to zero, which means you’re not paying when there’s no
              traffic.
            </li>
            <li>
              You deploy containers, not “apps”, so you keep full control over
              the runtime.
            </li>
            <li>
              Concurrency per container is configurable, so you can balance
              latency vs. cost.
            </li>
          </ul>
          <p className="mt-4">
            For a portfolio assistant, traffic is bursty and fairly light, so
            this model is more than enough.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Handling secrets and configuration
          </h2>
          <p className="mb-4">
            One thing I’m careful about is never hard‑coding API keys or
            credentials into the image. Configuration lives in environment
            variables, and secrets are injected via the platform.
          </p>
          <p className="mb-4">
            Locally, I use a simple `.env` file. In the cloud, Cloud Run gets
            its environment from the console or from a CI pipeline. The image
            itself stays generic and reusable.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Observability: not optional
          </h2>
          <p className="mb-4">
            Once something is deployed, the way you debug it changes. Print
            statements don’t help if you can’t see them. For this service, I log:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Request and response times.</li>
            <li>Detected mode for each message.</li>
            <li>High‑level error categories (timeouts, API failures, etc.).</li>
          </ul>
          <p className="mt-4">
            Over time, those logs turn into a feedback loop: you see what users
            actually ask, where latency spikes, and which parts of the system
            misbehave under load.
          </p>
        </section>

        <section className="mt-10 mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Takeaways
          </h2>
          <p className="mb-4">
            Deploying to Cloud Run isn’t magical, but it removes most of the
            infrastructure friction for small AI backends. You focus on
            designing the service and logging it properly, and let the platform
            handle scaling and rollout.
          </p>
          <p className="mb-4">
            For me, the main win is mental: I can iterate on the assistant’s
            behaviour without worrying that a forgotten server will fall over
            quietly in the background.
          </p>
        </section>
      </article>
    </main>
  );
}

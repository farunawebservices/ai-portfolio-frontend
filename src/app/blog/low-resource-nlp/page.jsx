'use client';

import Link from 'next/link';

export default function LowResourceNLPPost() {
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
            NLP · Low‑Resource Languages
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Low‑Resource NLP Journey: Lessons from Building an Igala Dataset
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            What it actually feels like to build a dataset for a language the
            internet mostly ignores.
          </p>
        </header>

        <section className="space-y-6 text-slate-200 leading-relaxed">
          <p>
            When you read about NLP, most examples quietly assume English,
            maybe a handful of European languages, and occasionally something
            like Chinese thrown in. If your language isn’t in that list, it’s
            almost invisible as far as tools, datasets, and benchmarks are
            concerned.
          </p>
          <p>
            Igala is one of those languages. It’s spoken by millions of people,
            but its digital footprint is tiny. That gap is what pushed me to
            start working on an Igala dataset instead of yet another English
            experiment.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Starting with almost nothing
          </h2>
          <p className="mb-4">
            The first surprise was how little text was available in a clean,
            usable form. No ready‑made parallel corpora, no nice crawls from big
            websites, nothing you could just download and plug into a model.
          </p>
          <p className="mb-4">
            That meant going back to basics: collecting sentences from multiple
            sources, cleaning them by hand, and being very honest about the
            quality of what I had. It’s slower, but it forces you to understand
            the language you’re working with instead of treating it as abstract
            tokens.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            More than just translation pairs
          </h2>
          <p className="mb-4">
            It’s tempting to think “parallel sentences = dataset = done”. In
            reality, the first version of the data is only the beginning. You
            quickly run into:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Inconsistent spellings for the same word.</li>
            <li>Dialectal differences that leak into the text.</li>
            <li>Sentences that look fine on the surface but are noisy inside.</li>
          </ul>
          <p className="mt-4">
            A big part of the work was standardising where it made sense,
            documenting where it didn’t, and making sure future users would
            understand what they were looking at instead of trusting it blindly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Why I built an explorer, not just a CSV
          </h2>
          <p className="mb-4">
            I decided early on that I didn’t want the dataset to live as a zip
            file on someone’s hard drive. That’s how resources disappear. The
            Streamlit explorer is my way of forcing the data to be visible and
            inspectable.
          </p>
          <p className="mb-4">
            You can scroll through sentences, filter, get basic statistics and
            visualisations, and get a feel for the dataset without writing a
            single line of code. That matters for researchers, but it also
            matters for speakers of the language who want to see what’s being
            built in their name.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            What this taught me about “low‑resource”
          </h2>
          <p className="mb-4">
            “Low‑resource” is often treated as a technical label, but it’s also
            a political one. It reflects which communities have had the time,
            money, and infrastructure to put their language online.
          </p>
          <p className="mb-4">
            Working on Igala reminded me that every dataset is a choice: whose
            voices are included, whose spelling is considered “standard”, and
            whose stories end up being fed into the next generation of models.
          </p>
          <p className="mb-4">
            On the technical side, it also made me more careful. When you only
            have a few thousand sentences, every error matters. The cleaning,
            auditing, and documentation are just as important as the model you
            eventually train.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Where I’d like to take it next
          </h2>
          <p className="mb-4">
            The current dataset is a starting point, not a finished product. My
            goals going forward are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Grow the corpus beyond ten thousand sentence pairs.</li>
            <li>Add audio to move towards speech technology.</li>
            <li>
              Work with linguists and native speakers to refine the annotation
              guidelines.
            </li>
            <li>
              Make it easier for other African languages to reuse the same
              pipeline and explorer.
            </li>
          </ul>
          <p className="mt-4">
            If you’re working on similar problems or on another under‑served
            language, I’d be happy to compare notes.
          </p>
        </section>
      </article>
    </main>
  );
}

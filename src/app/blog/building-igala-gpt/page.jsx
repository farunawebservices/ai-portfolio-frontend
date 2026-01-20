'use client';

import Link from 'next/link';

export default function BuildingIgalaGPTPost() {
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
            Deep Learning · Transformers · Low-Resource Languages
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Building Igala GPT from Scratch: What I Learned Implementing Transformers Without Shortcuts
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Why fine-tuning pretrained models doesn't teach you how they actually work—and what happened when I built one from the ground up.
          </p>
        </header>

        <section className="space-y-6 text-slate-200 leading-relaxed">
          <p>
            Most NLP work today involves taking a pretrained model like BERT or GPT-2, fine-tuning it on your data, and calling it done. That's practical, but it hides the entire architecture behind an API you never question.
          </p>
          <p>
            I wanted to understand transformers at a deeper level, so I built one from scratch for Igala—a Nigerian language with essentially zero existing digital resources. No pretrained weights, no transfer learning shortcuts. Just PyTorch, the "Attention is All You Need" paper, and a small corpus I'd collected myself.
          </p>
          <p>
            Here's what that process actually looked like.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Why "from scratch" matters
          </h2>
          <p className="mb-4">
            When you fine-tune a pretrained model, you're essentially treating the transformer as a black box. You adjust the final layers, maybe tinker with learning rates, but you're not forced to think about why the architecture works.
          </p>
          <p className="mb-4">
            Building from scratch means implementing multi-head self-attention yourself. It means debugging why your positional encodings aren't being added correctly. It means staring at tensor shapes at 2 AM trying to figure out why your batch dimension disappeared.
          </p>
          <p className="mb-4">
            For Igala specifically, this mattered because pretrained models are optimized for English-like languages. They assume certain tokenization patterns, sentence structures, and vocabulary distributions that don't hold for agglutinative, tonal languages. Starting fresh let me make choices tailored to Igala's linguistic structure instead of fighting against embedded English biases.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            The tokenization rabbit hole
          </h2>
          <p className="mb-4">
            Everyone says "tokenization is 50% of NLP", but you don't really feel it until you're working with a language where standard BPE breaks everything.
          </p>
          <p className="mb-4">
            Igala uses tonal markers—diacritics that completely change word meaning. Standard tokenizers treat them as noise or separate them from their base characters, destroying the semantic content. Words with complex verb conjugations get split at morphological boundaries in ways that make no linguistic sense.
          </p>
          <p className="mb-4">
            I ended up writing a custom BPE implementation that treats tonal markers as atomic units and respects morpheme boundaries. The vocabulary ended up 30% smaller than a naive tokenizer would produce, and the model learned better representations because tokens aligned with actual linguistic structure.
          </p>
          <p className="mb-4">
            Lesson: If your language isn't English, don't assume the standard tokenizer will work. Inspect what it's doing at the character level before you trust it with your data.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Implementing attention (the hard way)
          </h2>
          <p className="mb-4">
            Multi-head self-attention sounds elegant in papers. In practice, it's a nightmare of matrix multiplications where you're constantly reshaping tensors and praying your dimensions align.
          </p>
          <p className="mb-4">
            The core idea is simple: compute query, key, and value projections for each token, split into multiple heads, compute scaled dot-product attention, then concatenate and project back. But between "idea" and "working code" is a chasm of off-by-one errors and misunderstood broadcasting rules.
          </p>
          <p className="mb-4">
            I spent days debugging why my attention weights weren't summing to 1.0 (forgot to apply softmax on the right dimension). Then more days figuring out why the model wasn't learning anything (causal masking was applied incorrectly, so future tokens were leaking into the past).
          </p>
          <p className="mb-4">
            The breakthrough came when I started validating against reference implementations. I'd compute attention weights for a tiny input, then check them step-by-step against HuggingFace's GPT-2 to see where mine diverged. That's when I caught the masking bug—my mask was the wrong shape by one dimension, so it wasn't broadcasting correctly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Training with 268KB (and not melting down)
          </h2>
          <p className="mb-4">
            GPT-3 trained on 45 terabytes of text. I had 268 kilobytes.
          </p>
          <p className="mb-4">
            With that little data, overfitting is inevitable if you're not careful. The model will just memorize the training set and spit back exact sentences when prompted. To combat this, I:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li><strong>Scaled down the architecture</strong> — 6 layers instead of 12, 512 hidden dimensions instead of 768. Match model capacity to dataset size.</li>
            <li><strong>Aggressive regularization</strong> — Dropout set to 0.2, weight decay cranked up. Monitor validation loss religiously and stop the moment it diverges from training loss.</li>
            <li><strong>Data augmentation</strong> — Random token masking during training, sentence shuffling. Anything to prevent the model from just memorizing sequence order.</li>
          </ul>
          <p className="mt-4">
            The result? A model that generalizes to unseen prompts instead of regurgitating memorized text. It's not GPT-4, but it generates coherent Igala sentences that weren't in the training data—which is what matters.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            What "understanding transformers" actually means
          </h2>
          <p className="mb-4">
            Before this project, I could explain attention mechanisms conceptually. Now I understand them viscerally—I know why residual connections matter (gradient flow), why layer normalization goes before attention (training stability), why learned positional embeddings sometimes outperform sinusoidal ones (flexibility for short sequences).
          </p>
          <p className="mb-4">
            More importantly, I know when standard architectures will fail. If you're working with a morphologically rich language, you need tokenization that respects linguistic structure. If your dataset is tiny, you need a model sized appropriately—bigger isn't always better.
          </p>
          <p className="mb-4">
            The confidence this gives you is real. When debugging a model, I now think in terms of attention patterns and gradient flows instead of just tweaking hyperparameters and hoping.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            What's next for Igala GPT
          </h2>
          <p className="mb-4">
            This is version 1. As the dataset grows, I want to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li>Scale to 10MB+ corpus (currently 268KB)—more data will allow a bigger, more capable model</li>
            <li>Implement rotary positional embeddings (RoPE) for better long-range dependencies</li>
            <li>Add top-k and nucleus sampling for more diverse text generation</li>
            <li>Fine-tune for specific tasks like proverb generation or storytelling</li>
            <li>Open-source the full training code with detailed documentation for other low-resource languages</li>
          </ul>
          <p className="mt-4">
            If you're working on transformers for under-resourced languages, I'd love to compare notes. The challenges are different from English NLP, and we need more people building in this space.
          </p>
        </section>

        <section className="mt-10 pt-8 border-t border-slate-700">
          <h3 className="text-xl font-semibold mb-4">Try it yourself</h3>
          <p className="mb-4">
            The Igala GPT demo is live on HuggingFace Spaces. You can input prompts and see what a transformer trained from scratch on 268KB generates:
          </p>
          <a
            href="https://huggingface.co/spaces/Faruna01/igala-gpt-from-scratch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Launch Demo →
          </a>
        </section>
      </article>
    </main>
  );
}

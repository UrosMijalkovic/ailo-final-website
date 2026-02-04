import Link from "next/link";
import { copy } from "@/lib/copy";

const c = copy.homepage.thePromise;

export function ThePromise() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-center text-white mb-16">
            {c.headline}
          </h2>

          {/* Promises Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {c.promises.map((promise, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/8 hover:border-[var(--color-accent)]/20 transition-colors"
              >
                {/* Check icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {promise.title}
                  </h3>
                  <p className="text-white/50">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/apply" className="btn-primary text-lg px-8 py-4">
              {c.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

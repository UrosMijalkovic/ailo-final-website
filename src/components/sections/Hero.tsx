import Link from "next/link";
import { copy } from "@/lib/copy";

// Pull copy from central source
const c = copy.homepage.hero;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-primary-light)]/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Acceptance Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80">
              {c.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {c.headline}
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {c.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/apply" className="btn-primary text-lg px-8 py-4">
              {c.ctaPrimary}
            </Link>
            <a
              href="#how-it-works"
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
            >
              {c.ctaSecondary}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>

          {/* Social Proof Quote */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-lg mx-auto">
            <p className="text-white/90 italic mb-3">
              &ldquo;{c.testimonialQuote}&rdquo;
            </p>
            <p className="text-sm text-[var(--color-accent)] font-medium">
              {c.testimonialAttribution}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

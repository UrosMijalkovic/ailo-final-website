import Link from "next/link";
import { copy } from "@/lib/copy";

const c = copy.homepage.finalCta;

export function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#111]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-[var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {c.headline}
          </h2>

          <p className="text-lg sm:text-xl text-white/60 mb-8 sm:mb-10">
            {c.subhead}
          </p>

          {/* Primary CTA */}
          <Link href="/apply" className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 inline-block mb-8 sm:mb-12">
            {c.ctaPrimary}
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/30 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Secondary CTA */}
          <p className="text-white/50 mb-4">{c.secondaryText}</p>
          <Link
            href="/waitlist"
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] font-medium transition-colors"
          >
            {c.ctaSecondary} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

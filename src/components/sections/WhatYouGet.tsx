import Link from "next/link";
import Image from "next/image";
import { copy } from "@/lib/copy";

const c = copy.homepage.whatYouGet;

export function WhatYouGet() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-accent)]/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: App Screenshot */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Main phone */}
              <div className="relative w-[280px] md:w-[320px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/app/match-score.jpg"
                  alt="AILO match compatibility score"
                  width={320}
                  height={693}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Headline */}
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {c.headline}
            </h2>

            <p className="text-xl text-white/60 mb-10">
              {c.subhead}
            </p>

            {/* Compatibility categories */}
            <div className="space-y-4 mb-10">
              {c.categories.map((category, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{category.name}</span>
                    <span className="text-[var(--color-accent)] font-bold">{category.score}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full transition-all duration-1000"
                      style={{ width: `${category.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Insight example */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-10">
              <p className="text-sm text-white/40 uppercase tracking-wide mb-2">Sample Insight</p>
              <p className="text-white/80 italic">&ldquo;{c.insightExample}&rdquo;</p>
            </div>

            {/* CTA */}
            <Link href="/apply" className="btn-primary text-lg px-8 py-4">
              {c.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

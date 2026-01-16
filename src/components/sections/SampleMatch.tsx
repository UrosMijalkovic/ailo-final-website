import Link from "next/link";

const compatibilityInsights = [
  {
    category: "Magnetism",
    insight: "Natural physical and energetic attraction patterns align",
    score: 85,
  },
  {
    category: "Communication",
    insight: "You both connect through deep conversation and quality time",
    score: 92,
  },
  {
    category: "Tolerance",
    insight: "Compatible stress responses — both need space to process",
    score: 78,
  },
  {
    category: "Motivators",
    insight: "Shared drivers: ambition, growth, and family values",
    score: 88,
  },
];

export function SampleMatch() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="tag-gold mb-4">
              See What You Get
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mt-4 mb-4">
              This Is What a Match Looks Like
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Real insights, not guesswork. Every match comes with a detailed
              compatibility breakdown.
            </p>
          </div>

          {/* Sample Match Card - App style */}
          <div className="card-teal overflow-hidden">
            {/* Match Header */}
            <div className="p-6 md:p-8 border-b border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="gold-circle gold-circle-lg">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-text-inverse)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      Sample Match Profile
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm">Based on your assessment</p>
                  </div>
                </div>
                <div className="text-center card-gold px-6 py-3">
                  <div className="text-3xl sm:text-4xl font-bold text-[var(--color-text-inverse)]">78%</div>
                  <div className="text-[var(--color-text-inverse)]/70 text-xs sm:text-sm">Compatibility</div>
                </div>
              </div>
            </div>

            {/* Compatibility Insights */}
            <div className="p-6 md:p-8">
              <h4 className="font-semibold text-white mb-6">
                Compatibility Breakdown
              </h4>
              <div className="space-y-6">
                {compatibilityInsights.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-[var(--color-accent)]">
                        {item.category}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {item.score}%
                      </span>
                    </div>
                    <div className="progress-bar-container mb-2">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-sm text-white/70">
                      {item.insight}
                    </p>
                  </div>
                ))}
              </div>

              {/* What This Means */}
              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="gold-circle gold-circle-sm flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[var(--color-text-inverse)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">
                      What This Score Means
                    </h5>
                    <p className="text-sm text-white/70">
                      A 78% match indicates strong foundational compatibility. Our
                      research shows couples above 70% have significantly higher
                      relationship satisfaction and longevity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link href="/apply" className="btn-primary">
              See If You Qualify
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const compatibilityMarkers = [
  {
    name: "Physical Traits Alignment",
    shortName: "Magnetism",
    description: "Natural magnetism between partners",
  },
  {
    name: "Natural Motivators",
    shortName: "Motivators",
    description: "What drives each person",
  },
  {
    name: "Tolerance Levels",
    shortName: "Tolerance",
    description: "How you handle stress",
  },
  {
    name: "Communication Doorways",
    shortName: "Communication",
    description: "How you connect",
  },
  {
    name: "Polarity Dynamics",
    shortName: "Polarity",
    description: "Energy balance between partners",
  },
  {
    name: "Perception Patterns",
    shortName: "Perception",
    description: "How you see the world",
  },
];

export function Science() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Patent Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6">
              <svg
                className="w-4 h-4 text-[var(--color-primary)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-[var(--color-primary)] font-medium">
                US Patent #8556630B2
              </span>
            </div>

            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)] mb-4">
              30 Years of Research. One Breakthrough.
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              AILO measures what other apps can&apos;t see.
            </p>
          </div>

          {/* 6 Compatibility Markers */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {compatibilityMarkers.map((marker, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[var(--color-surface)] border border-gray-100 hover:border-[var(--color-accent)] hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-[var(--color-primary-dark)] mb-1">
                  {marker.shortName}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {marker.description}
                </p>
              </div>
            ))}
          </div>

          {/* Founders Preview */}
          <div className="grid md:grid-cols-2 gap-6 p-6 bg-[var(--color-surface)] rounded-2xl mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-primary-dark)]">
                  Dr. Zannah Hackett
                </h4>
                <p className="text-sm text-[var(--color-muted)]">
                  Chief Science Officer
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  30 years researching human nature
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-primary-dark)]">
                  Haleh
                </h4>
                <p className="text-sm text-[var(--color-muted)]">CEO</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  15 years as relationship coach
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/the-science"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
            >
              Learn more about the science
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

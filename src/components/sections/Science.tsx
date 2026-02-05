import Link from "next/link";
import Image from "next/image";

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
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/images/gallery/drzannah.jpg"
                  alt="Dr. Zannah Hackett"
                  fill
                  className="object-cover"
                />
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
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/images/gallery/haleh.jpg"
                  alt="Haleh Gianni"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-primary-dark)]">
                  Haleh Gianni
                </h4>
                <p className="text-sm text-[var(--color-muted)]">CEO & Founder</p>
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

const testimonials = [
  {
    quote:
      "After 3 years on Hinge — 47 first dates, 0 relationships — AILO matched me in 6 weeks. Engaged 14 months later.",
    name: "Sarah K.",
    outcome: "Engaged after 14 months",
  },
  {
    quote:
      "The compatibility breakdown predicted exactly why my last 3 relationships failed. My AILO match is different. 8 months strong.",
    name: "Michael R.",
    outcome: "In relationship, 8 months",
  },
  {
    quote:
      "I finally understand why I kept choosing the wrong people. AILO showed me what I actually need — and found someone who has it.",
    name: "Jennifer L.",
    outcome: "Matched in 4 weeks",
  },
  {
    quote:
      "One assessment. One investment. Done with dating apps forever. Worth every dollar.",
    name: "Carlos M.",
    outcome: "In relationship, 6 months",
  },
];

const stats = [
  { value: "13,000+", label: "Assessments Completed" },
  { value: "30+", label: "Years of Research" },
  { value: "70%+", label: "Compatibility Threshold" },
];

export function Testimonials() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag-gold mb-4">Real Results</span>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mt-4 mb-4">
            Stories from AILO Members
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Real people finding real compatibility — not just matches.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-muted p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Avatar - Gold circle */}
                <div className="gold-circle gold-circle-md flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--color-text-inverse)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  {/* Quote */}
                  <svg
                    className="w-6 h-6 text-[var(--color-accent)]/40 mb-2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <p className="text-white mb-3">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-sm font-medium text-[var(--color-accent)]">
                      — {testimonial.name}
                    </p>
                    <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                      {testimonial.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar - App style */}
        <div className="card-teal-horizontal flex flex-wrap justify-center gap-8 md:gap-16 p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

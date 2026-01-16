const painPoints = [
  {
    title: "You're not looking for hookups. But that's all apps deliver.",
    description: "Endless swiping, zero serious prospects.",
  },
  {
    title: "Dates that look good on paper. Zero chemistry in person.",
    description: "Another wasted evening. Another dead end.",
  },
  {
    title: "Compatibility? You won't know until you're 3 months in.",
    description: "By then, you've already invested everything.",
  },
  {
    title: "You've tried everything. Same result.",
    description: "Hinge. Bumble. Raya. Nothing works.",
  },
];

export function Problem() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Red accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium tracking-wide">
              The Real Problem
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6 leading-tight">
            You've Done Everything Right.<br />Dating Still Doesn't Work.
          </h2>
          <p className="text-center text-xl md:text-2xl text-white/50 mb-16">
            You're successful. You know what you want. So why is this so hard?
          </p>

          {/* Pain Points - Stacked for impact */}
          <div className="space-y-4 md:space-y-6 mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] hover:border-red-500/20 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {/* X icon */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg md:text-xl text-white mb-1 group-hover:text-red-300 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-white/50 md:text-lg">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emotional anchor / Transition */}
          <div className="text-center">
            <div className="inline-block">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/40 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-[var(--font-playfair)] text-white mb-3">
                It&apos;s not you.
              </p>
              <p className="text-2xl md:text-3xl font-[var(--font-playfair)] text-[var(--color-accent)]">
                The system was never built for people like you.
              </p>
              <div className="w-px h-12 bg-gradient-to-b from-white/40 via-white/20 to-transparent mx-auto mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const promises = [
  {
    title: "Your time back.",
    description: "No more hours wasted on dead-end dates.",
  },
  {
    title: "Fewer dates. Better odds.",
    description: "Meet people who actually fit — not just anyone nearby.",
  },
  {
    title: "Clarity over confusion.",
    description: "Know why you'd work together before you meet.",
  },
  {
    title: "A foundation, not a gamble.",
    description: "Start relationships with understanding, not hope.",
  },
];

export function FounderLetter() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Label */}
          <p className="text-center text-sm uppercase tracking-widest text-[var(--color-accent)] mb-6">
            A Message from Our Founder
          </p>

          {/* Headline */}
          <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-10 sm:mb-16 leading-tight">
            &ldquo;I Built the Dating Service I Wished Existed.&rdquo;
          </h2>

          {/* Two column: Video + Promises */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch mb-10 sm:mb-12">
            {/* Left: Video placeholder */}
            <div className="relative flex flex-col">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Play button */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mb-4 cursor-pointer hover:bg-[var(--color-accent)]/30 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-accent)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/30 text-sm">Video coming soon</p>
                </div>

              </div>

              {/* Founder info below video */}
              <div className="mt-4 text-center lg:text-left">
                <p className="text-white font-semibold">Haleh Gianni</p>
                <p className="text-white/40 text-sm">CEO & Founder</p>
              </div>
            </div>

            {/* Right: Promises */}
            <div className="flex flex-col">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] mb-5">
                Our Promise to You
              </p>
              <div className="flex flex-col justify-between flex-1 gap-3">
                {promises.map((promise, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/25 transition-colors"
                  >
                    {/* Check icon */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/15 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-[var(--color-primary)]"
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
                      <h3 className="text-lg font-semibold text-white mb-0.5">
                        {promise.title}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Apply for Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

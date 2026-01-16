export function Imagine() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#1a1a1a] to-[var(--color-primary-dark)] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-medium tracking-wide mb-8">
            What Changes
          </span>

          {/* Headline */}
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
            Before the First Date, You&apos;ll Know:
          </h2>

          {/* Concrete Points */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-medium mb-1">Their communication style</p>
              <p className="text-white/60 text-sm">And whether it matches yours</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-medium mb-1">How they handle conflict</p>
              <p className="text-white/60 text-sm">And if you&apos;re compatible under stress</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-medium mb-1">What they actually need</p>
              <p className="text-white/60 text-sm">Not what their bio says</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-medium mb-1">Why you&apos;d work together</p>
              <p className="text-white/60 text-sm">Backed by 30 years of science</p>
            </div>
          </div>

          {/* Transition Statement */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xl md:text-2xl text-white/80">
              No more guessing. No more wasted time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

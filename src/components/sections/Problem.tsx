import { copy } from "@/lib/copy";

const c = copy.homepage.problem;

export function Problem() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-[#8B3A3A]/10 text-[#D4736B] border border-[#8B3A3A]/20">
              <span className="w-1.5 h-1.5 bg-[#D4736B] rounded-full" />
              The Real Problem
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4 leading-tight">
              {c.headline}
            </h2>
            <p className="text-center text-2xl md:text-3xl text-white/25 mb-6 font-light">
              {c.headlineAccent}
            </p>
            <p className="text-center text-lg text-white/40 mb-16">
              {c.subhead}
            </p>
          </div>

          {/* Pain Points - 2x2 Premium Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {c.painPoints.map((point, index) => {
              const isHighlighted = index === 2;

              return (
                <div
                  key={index}
                  className={`
                    group relative rounded-2xl p-7 md:p-8 border cursor-pointer
                    ${isHighlighted
                      ? "bg-gradient-to-br from-[#8B3A3A]/20 via-[#8B3A3A]/10 to-transparent border-[#D4736B]/30 hover:border-[#D4736B]/60"
                      : "bg-white/5 border-white/8 hover:border-[#D4736B]/40"
                    }
                  `}
                >
                  <h3 className={`
                    text-xl md:text-2xl font-semibold mb-3 leading-snug
                    ${isHighlighted ? "text-white" : "text-white/90"}
                  `}>
                    {point.title}
                  </h3>
                  <p className={`
                    text-base md:text-lg leading-relaxed
                    ${isHighlighted ? "text-white/60" : "text-white/40"}
                  `}>
                    {point.description}
                  </p>

                </div>
              );
            })}
          </div>

          {/* Closer */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-playfair)] text-[var(--color-accent)] font-medium">
              {c.closer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

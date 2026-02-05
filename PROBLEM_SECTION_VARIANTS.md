# Problem Section Variants

Three layout options for the Problem section. Copy/paste the desired version into `src/components/sections/Problem.tsx`.

---

## Version A: No Photo (CURRENT)

Clean, minimal layout without background image. Simple and focused.

- No background image
- Full-width 2x2 grid
- `max-w-5xl`

```tsx
import { copy } from "@/lib/copy";

const c = copy.homepage.problem;

export function Problem() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a]">
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
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4 leading-tight">
              {c.headline}
            </h2>
            <p className="text-center text-xl sm:text-2xl md:text-3xl text-white/25 mb-6 font-light">
              {c.headlineAccent}
            </p>
            <p className="text-center text-lg text-white/40 mb-16">
              {c.subhead}
            </p>
          </div>

          {/* Pain Points - 2x2 Premium Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {c.painPoints.map((point, index) => {
              const isHighlighted = index === 2;

              return (
                <div
                  key={index}
                  className={`
                    group relative rounded-2xl p-5 sm:p-7 md:p-8 border cursor-pointer
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
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[var(--font-playfair)] text-[var(--color-accent)] font-medium">
              {c.closer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Version B: Narrow 4:3 Photo Card

Narrower, more compact layout with background photo and 2x2 grid. Headline above image, closer below as connector.

- `max-w-3xl` image card
- `aspectRatio: 4/3`
- 2x2 pain points grid inside card
- Gradient connector to next section

```tsx
import Image from "next/image";
import { copy } from "@/lib/copy";

const c = copy.homepage.problem;

export function Problem() {
  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-0 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-[#8B3A3A]/10 text-[#D4736B] border border-[#8B3A3A]/20">
              <span className="w-1.5 h-1.5 bg-[#D4736B] rounded-full" />
              The Real Problem
            </span>
          </div>

          {/* Headline - Above Image */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {c.headline}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/30 font-light">
              {c.headlineAccent}
            </p>
          </div>

          {/* Narrower contained card with background image */}
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              {/* Background Image */}
              <Image
                src="/images/gallery/problem.jpg"
                alt=""
                fill
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/65" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 py-6 sm:py-8">
                {/* Subhead */}
                <p className="text-center text-sm sm:text-base text-white/70 mb-6 max-w-xl mx-auto">
                  {c.subhead}
                </p>

                {/* Pain Points - 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {c.painPoints.map((point, index) => {
                    const isHighlighted = index === 2;

                    return (
                      <div
                        key={index}
                        className={`
                          rounded-lg p-3 sm:p-4 border backdrop-blur-sm
                          ${isHighlighted
                            ? "bg-[#8B3A3A]/25 border-[#D4736B]/40"
                            : "bg-white/5 border-white/10"
                          }
                        `}
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-white mb-1 leading-snug">
                          {point.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closer - Below image as connector with gradient */}
        <div className="text-center pt-10 sm:pt-12 pb-16 sm:pb-20">
          <p className="text-xl sm:text-2xl md:text-3xl font-[var(--font-playfair)] text-[var(--color-accent)] font-medium">
            {c.closer}
          </p>
        </div>
      </div>

      {/* Gradient connector to next section */}
      <div className="h-16 sm:h-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />
    </section>
  );
}
```

---

## Version C: Wide Banner (FinalCTA Style)

Wide cinematic banner matching the "Last Investment" section. Dramatic, premium feel.

- `max-w-5xl` image card
- `aspectRatio: 2431/900` (wide banner ~2.7:1)
- 4-column pain points row on desktop
- Gradient connector to next section

```tsx
import Image from "next/image";
import { copy } from "@/lib/copy";

const c = copy.homepage.problem;

export function Problem() {
  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-0 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-[#8B3A3A]/10 text-[#D4736B] border border-[#8B3A3A]/20">
              <span className="w-1.5 h-1.5 bg-[#D4736B] rounded-full" />
              The Real Problem
            </span>
          </div>

          {/* Headline - Above Image */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {c.headline}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/30 font-light">
              {c.headlineAccent}
            </p>
          </div>

          {/* Wide banner card - same dimensions as FinalCTA */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '2431 / 900' }}>
            {/* Background Image */}
            <Image
              src="/images/gallery/problem.jpg"
              alt=""
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16">
              {/* Subhead */}
              <p className="text-center text-sm sm:text-base text-white/70 mb-6 max-w-2xl mx-auto">
                {c.subhead}
              </p>

              {/* Pain Points - Horizontal row on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                {c.painPoints.map((point, index) => {
                  const isHighlighted = index === 2;

                  return (
                    <div
                      key={index}
                      className={`
                        rounded-lg p-3 sm:p-4 border backdrop-blur-sm
                        ${isHighlighted
                          ? "bg-[#8B3A3A]/25 border-[#D4736B]/40"
                          : "bg-white/5 border-white/10"
                        }
                      `}
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed line-clamp-2">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Closer - Below image as connector with gradient */}
        <div className="text-center pt-10 sm:pt-12 pb-16 sm:pb-20">
          <p className="text-xl sm:text-2xl md:text-3xl font-[var(--font-playfair)] text-[var(--color-accent)] font-medium">
            {c.closer}
          </p>
        </div>
      </div>

      {/* Gradient connector to next section */}
      <div className="h-16 sm:h-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />
    </section>
  );
}
```

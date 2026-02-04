import Link from "next/link";
import Image from "next/image";
import { copy } from "@/lib/copy";

const c = copy.homepage.beforeYouMeet;

export function BeforeYouMeet() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111] overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Headline */}
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-12 leading-tight">
              {c.headline}
            </h2>

            {/* Insights */}
            <div className="space-y-8 mb-12">
              {c.insights.map((insight, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    {/* Check icon */}
                    <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[var(--color-accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-xl md:text-2xl text-white font-medium mb-1">
                        {insight.title}
                      </p>
                      <p className="text-lg text-white/50">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closer */}
            <p className="text-xl text-[var(--color-accent)] font-medium mb-8">
              {c.closer}
            </p>

            {/* CTA */}
            <Link href="/apply" className="btn-primary text-lg px-8 py-4">
              {c.cta}
            </Link>
          </div>

          {/* Right: App Screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup with screenshot */}
              <div className="relative w-[280px] md:w-[320px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/app/needs-insight.jpg"
                  alt="AILO compatibility insights"
                  width={320}
                  height={693}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Complete the 7-Minute Assessment",
    description:
      "Based on 30 years of behavioral science. Reveals your true compatibility profile.",
    placeholder: "Assessment screenshot placeholder",
  },
  {
    number: "02",
    title: "Get Your Authentic Profile",
    description:
      "No fake bios. AILO writes your profile based on who you actually are.",
    placeholder: "Profile screenshot placeholder",
  },
  {
    number: "03",
    title: "See Only 70%+ Matches",
    description:
      "No swiping. Just people you're actually compatible with — and why.",
    placeholder: "Match screenshot placeholder",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-gradient-hero">
      <div className="container-custom">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            3 Steps to Your Last First Date
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Card - App-style teal gradient */}
              <div className="card-teal p-6 h-full hover:scale-[1.02] transition-transform duration-300">
                {/* Step Number - Gold circle */}
                <div className="gold-circle gold-circle-md mb-4">
                  <span className="text-[var(--color-text-inverse)] font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Placeholder for Screenshot */}
                <div className="aspect-[4/3] bg-white/10 rounded-lg mb-6 flex items-center justify-center text-white/40 text-sm">
                  {step.placeholder}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[var(--color-accent)]/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/apply" className="btn-primary text-lg">
            Take the Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const guaranteeItems = [
  {
    title: "AILO Duo — Free for Life",
    description: "Full access to our compatibility assessment tool, forever",
  },
  {
    title: "VIP Event Access",
    description: "Meet compatible singles in person at all AILO events",
  },
  {
    title: "Priority Support",
    description: "Direct line to our team to optimize your profile and matches",
  },
];

export function Guarantee() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-[var(--color-accent)] mb-2 block">
              Risk-Free
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)] mb-4">
              The 90-Day Match Guarantee
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg mb-4">
              <strong>3 compatible matches in 90 days.</strong> Or we make it right.
            </p>
            <p className="text-[var(--color-primary)] font-medium max-w-xl mx-auto">
              If we don&apos;t deliver, you get:
            </p>
          </div>

          {/* Guarantee Items */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {guaranteeItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-dark)] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-[var(--color-primary-dark)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Fine Print */}
          <div className="text-center">
            <p className="text-sm text-[var(--color-muted)] mb-6">
              We stand behind the science. That&apos;s our promise.
            </p>
            <Link href="/apply" className="btn-primary">
              See If You Qualify
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section bg-gradient-hero">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Scarcity Indicator */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80">
              8 spots left for January
            </span>
          </div>

          {/* Main CTA for SF Users */}
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            This Is Your Last Investment in Dating
          </h2>
          <p className="text-lg text-white/80 mb-4">
            50 new members per month. Once you're in, you're in for life.
          </p>
          <p className="text-sm text-white/60 mb-8">
            Join 200+ members already matched in South Florida.
          </p>
          <Link href="/apply" className="btn-primary text-lg px-10 py-4">
            See If You Qualify
          </Link>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/40 text-sm">OR</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Secondary for Non-SF */}
          <p className="text-white/80 mb-6">
            Not in South Florida? We&apos;re expanding soon.
          </p>
          <Link
            href="/waitlist"
            className="btn-secondary"
          >
            Join the Waitlist for Your City
          </Link>
        </div>
      </div>
    </section>
  );
}

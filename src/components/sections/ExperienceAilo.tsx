import Link from "next/link";
import Image from "next/image";

export function ExperienceAilo() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/30 mb-4">
              Experience AILO
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
              Still exploring? Here&apos;s how to start.
            </h2>
          </div>

          {/* 3 Paths */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Path 1: Book a Call */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-[var(--color-accent)]/20 transition-colors">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Book a Call
              </h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">
                Talk to our team. We vet every member to keep quality high — no fake accounts, no AI profiles.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
              >
                Schedule a Call
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Path 2: Join an Event */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-[var(--color-accent)]/20 transition-colors">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Join an Event
              </h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">
                Meet our community in person first. Exclusive events for AILO members in South Florida.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
              >
                View Events
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Path 3: Try the Science (AILO Duo) */}
            <div className="group p-6 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/25 transition-colors">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/15 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Try the Science
              </h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">
                Test compatibility with someone you&apos;re already seeing. Send a code, see your match. Fully private.
              </p>
              <Link
                href="/duo"
                className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:underline"
              >
                Learn About AILO Duo
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

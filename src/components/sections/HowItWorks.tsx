"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { copy } from "@/lib/copy";

const c = copy.homepage.howItWorks;

// Map each step to a screenshot
const stepScreenshots = [
  "/images/app/assessment.jpg",
  "/images/app/needs-insight.jpg",
  "/images/app/match-score.jpg",
];

export function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const currentScreenshot = hoveredStep !== null ? stepScreenshots[hoveredStep] : stepScreenshots[0];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 md:py-32 bg-[#111]">
      <div className="container-custom">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {c.headline}
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {c.subhead}
          </p>
        </div>

        {/* Part 1: The 6 Markers - Solution Zone */}
        <div className="relative mb-16 sm:mb-24 -mx-4 px-4 py-10 sm:py-16 md:-mx-8 md:px-8">
          {/* Teal gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)]/5 to-transparent" />

          <div className="relative z-10">
            <p className="text-center text-sm uppercase tracking-widest text-[var(--color-primary)] mb-10">
              {c.markersLabel}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto">
              {c.markers.map((marker, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-6 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {marker.title}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {marker.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2: The Process with iPhone */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center max-w-6xl mx-auto mb-12 sm:mb-20">
          {/* Left: Steps */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-8">
              {c.processLabel}
            </p>
            <div className="space-y-8">
              {c.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 cursor-pointer group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex-shrink-0">
                    <span className={`block text-4xl md:text-5xl font-bold ${
                      hoveredStep === index ? "text-[var(--color-accent)]/40" : "text-white/10"
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      hoveredStep === index ? "text-[var(--color-accent)]" : "text-white"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      hoveredStep === index ? "text-white/70" : "text-white/50"
                    }`}>
                      {step.description}
                    </p>
                    {/* App badges for first step */}
                    {index === 0 && (
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-xs text-white/30 uppercase tracking-wide">App Only</span>
                        <div className="flex items-center gap-2">
                          {/* iOS icon */}
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                          </div>
                          {/* Android icon */}
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.523 15.341c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m-11.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m11.4-6.12l1.99-3.45c.11-.19.04-.43-.15-.54-.19-.11-.43-.04-.54.15l-2.02 3.5C15.47 8.08 13.8 7.58 12 7.58s-3.47.5-5.15 1.31l-2.02-3.5c-.11-.19-.35-.26-.54-.15-.19.11-.26.35-.15.54l1.99 3.45C3.26 10.74 1.5 13.5 1.5 16.64h21c0-3.14-1.76-5.9-4.63-7.42"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
            <div className="relative">
              {/* iPhone frame */}
              <div className="relative w-[220px] sm:w-[260px] md:w-[280px] rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-2 shadow-2xl shadow-black/50">
                {/* Inner bezel */}
                <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-black p-1">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full z-10" />
                  {/* Screen */}
                  <div className="rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden bg-[#0a0a0a]">
                    <Image
                      src={currentScreenshot}
                      alt="AILO App"
                      width={280}
                      height={607}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reveal statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-2xl md:text-3xl text-white/40 mb-2">
            {c.reveal}
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-8 sm:mb-12">
            {c.revealAccent}
          </p>

          {/* CTA */}
          <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

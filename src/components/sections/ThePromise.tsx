"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { copy } from "@/lib/copy";

const c = copy.homepage.thePromise;

export function ThePromise() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  });

  // Transform scroll progress to scale (0.85 -> 1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  // Double the promises for seamless loop
  const doubledPromises = [...c.promises, ...c.promises];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      <div className="container-custom" ref={containerRef}>
        {/* Headline */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {c.headline}
          </h2>
        </div>

        {/* Main content - Video mockup + Scrolling cards */}
        <motion.div
          className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden"
          style={{ scale, opacity }}
        >
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left: Video/Image Mockup */}
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/dating.avif"
                alt="Happy couple connected through AILO"
                fill
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Right: Scrolling Promises */}
            <div className="relative bg-[#0a0a0a] overflow-hidden">
              {/* Fade edges */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

              {/* Vertical scrolling container */}
              <div className="h-[400px] lg:h-full overflow-hidden py-4">
                <div className="flex flex-col gap-4 animate-scroll-vertical">
                  {doubledPromises.map((promise, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-accent)]/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        {/* Check icon */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-[var(--color-accent)]"
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
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {promise.title}
                          </h3>
                          <p className="text-white/50 text-sm">
                            {promise.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            {c.cta}
          </Link>
        </div>
      </div>

      {/* Vertical scroll animation styles */}
      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 20s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Problem,
  Imagine,
  FounderStory,
  HowItWorks,
  SampleMatch,
  Testimonials,
  Guarantee,
  Events,
  DuoTeaser,
  FAQ,
  FinalCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero - Aspirational, exclusive */}
        <Hero />

        {/* Section 2: The Problem - Emotional anchor */}
        <Problem />

        {/* Section 3: Imagine - Vision casting (NEW) */}
        <Imagine />

        {/* Section 4: Founder Story - Trust builder (MOVED UP) */}
        <FounderStory />

        {/* Section 5: How It Works - Process */}
        <HowItWorks />

        {/* Section 6: Sample Match Preview - Value demonstration */}
        <SampleMatch />

        {/* Section 7: Social Proof / Testimonials */}
        <Testimonials />

        {/* Section 8: 90-Day Guarantee - Risk reversal (MOVED UP) */}
        <Guarantee />

        {/* Section 9: Events */}
        <Events />

        {/* Section 10: Try AILO Duo */}
        <DuoTeaser />

        {/* Section 11: FAQ (with price transparency) */}
        <FAQ />

        {/* Section 12: Final CTA (with urgency) */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

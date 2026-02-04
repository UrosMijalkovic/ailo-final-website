# AILO Website - Development Context

## Last Updated
February 4, 2026

---

## Project Overview
Premium matchmaking app website for AILO - science-based dating service targeting successful professionals in South Florida.

**Brand Voice:** Confident. Premium. Sharp. Classy. Bold. Brave. No fluff. No apologies.

---

## Current Homepage Structure (9 sections)

| # | Section | File | Purpose |
|---|---------|------|---------|
| 1 | Hero | `Hero.tsx` | Hook - "Your Time Is Too Valuable for Bad Matches" |
| 2 | Bridge | `Bridge.tsx` | Position - "AILO is the first science-based matchmaking app" |
| 3 | Problem | `Problem.tsx` | Agitate - "You've Done Everything Right. Dating Still Doesn't Work." |
| 4 | How It Works | `HowItWorks.tsx` | Mechanism - 6 compatibility markers + 3-step process + iPhone mockup |
| 5 | Proof | `Proof.tsx` | Validate - Stats, founders, testimonial marquee, patent badge |
| 6 | Founder Letter | `FounderLetter.tsx` | Trust - Video placeholder + 4 promises (teal) |
| 7 | Experience AILO | `ExperienceAilo.tsx` | Handle objections - 3 paths (Call, Events, Duo) |
| 8 | Final CTA | `FinalCTA.tsx` | Close - "This Is Your Last Investment in Dating" |
| 9 | FAQ | `FAQ.tsx` | SEO + objections - 8 questions with accordion |

---

## Navigation Structure

| Nav Item | URL | Purpose |
|----------|-----|---------|
| Home | `/` | Main matchmaking homepage |
| AILO Duo | `/duo` | Compatibility testing for singles & couples |
| AILO Events | `/events` | Community events |
| The Science | `/the-science` | Deep dive on methodology |
| About | `/about` | Founder stories |
| Blog | `/blog` | Content/SEO |

**+ CTA Button:** Request Access → `/apply`

---

## Key Copy Decisions

### Hero
- **Headline:** "Your Time Is Too Valuable for Bad Matches."
- **Subhead:** "Swiping doesn't work. Science does. We show you who actually fits."
- **Badge:** "Currently matching in South Florida. Nationwide soon."
- **CTA Primary:** "Apply for Access"
- **CTA Secondary:** "Learn More"

### Bridge
- "AILO is the first science-based matchmaking app."
- "No swiping. No guessing. No wasted time."
- "We don't show you everyone. We show you who naturally fits."

### Problem Section
- **Headline:** "You've Done Everything Right." / "Dating Still Doesn't Work."
- **Subhead:** "You're successful. You know what you want. So why is this so hard?"
- **Pain Points:**
  1. "You're not looking for hookups." → "But that's all apps deliver."
  2. "Great on paper. Zero chemistry in person." → "Boring dates. No spark."
  3. "5 months in, the real problems start." → "Conflict styles clash. Needs don't align." (highlighted)
  4. "You've tried everything." → "Same cycle. Same outcome."
- **Closer:** "AILO doesn't fix you. It filters for you."

### How It Works
- **Headline:** "Compatibility Isn't a Feeling. It's a Pattern."
- **Subhead:** "Dating apps match you on preferences. We match you on the behavioral patterns that predict whether you'll last."
- **6 Compatibility Markers:**
  1. Communication Under Stress
  2. Core Emotional Needs
  3. Conflict Tolerance
  4. Decision-Making Style
  5. Energy & Pace
  6. Worldview & Perception
- **3-Step Process:**
  1. Take the Assessment (with iOS/Android badges)
  2. We Analyze Compatibility
  3. See Only Who Fits
- **Reveal:** "Most couples discover these differences 6 months in. We reveal them in 7 minutes."

### Proof Section
- **Headline:** "Built on 30 Years of Research."
- **Stats:** 30+ Years Research | 13K+ Satisfied Clients | 0 Complaints
- **Patent Badge:** "Patented Assessment Methodology · US8556630B2"
- **Founders:** Dr. Zannah Hackett (CSO) + Haleh Gianni (CEO)
- **Testimonials:** 8 testimonials in infinite scroll marquee

### Founder Letter
- **Label:** "A Message from Our Founder"
- **Quote:** "I Built the Dating Service I Wished Existed."
- **Video placeholder** (4:3 aspect ratio)
- **Promises (teal cards):**
  1. Your time back.
  2. Fewer dates. Better odds.
  3. Clarity over confusion.
  4. A foundation, not a gamble.

### Experience AILO
- **Headline:** "Still exploring? Here's how to start."
- **3 Paths:**
  1. Book a Call (gold) - vetting, no fake accounts
  2. Join an Event (gold) - community events
  3. Try the Science (teal) - AILO Duo teaser

### Final CTA
- **Headline:** "This Is Your Last Investment in Dating."
- **Subhead:** "One membership. Unlimited access."
- **Secondary:** "Not in South Florida? Join the Waitlist"

### FAQ (8 questions)
1. How much does AILO cost? (anchored vs $10K-50K+ traditional matchmakers)
2. How is this different from dating apps?
3. How does the matching actually work?
4. What if I don't get any matches?
5. Is AILO only in South Florida?
6. How long until I get my first match? (no timeline promises - quality over speed)
7. Is my data private?
8. What is AILO Duo? (for singles AND couples)

---

## Visual/Design Decisions

### Color Scheme
- **Primary (Teal):** #386F73 - used for "solution" elements
- **Accent (Gold):** #E1B98F - used for CTAs and highlights
- **Problem Red:** #8B3A3A (bg), #D4736B (text) - used for problem section
- **Backgrounds:** #0a0a0a, #111

### Color Psychology
- **Red** = Problem (pain points)
- **Teal** = Solution (markers, process, promises)
- **Gold** = Premium/CTA

### Hero
- Video background with blur (`blur-[2px]`, `scale-105`)
- Multiple overlay layers
- Height: `85vh`, `min-h-[600px]`

### Buttons (Apple-style)
- Scale 1.02 on hover
- Multi-layer soft shadow expansion
- 0.4s cubic-bezier easing
- Scale 0.98 on click

### Header
- Rounded full (pill shape)
- Shrinks on scroll
- Frosted glass effect

### Problem Section
- 2x2 grid, card 3 highlighted (red accent)
- Hover effect on cards

### How It Works
- 6 markers in 3-column grid with teal gradient background
- 3 steps with large numbers + iPhone mockup
- iOS/Android badges on step 1

### Proof Section
- Stats row
- Patent badge below stats
- Founders in 2-column grid
- Testimonials in infinite scroll marquee

### Footer
- Background: #111
- 5-column grid (Logo+tagline, Product, Company, Legal)
- Social icons in circular buttons
- Generous spacing (py-20 md:py-28, mt-32 before bottom bar)

---

## App Screenshots
Located in `/public/images/app/`:
- `assessment.jpg` - How It Works section (iPhone mockup)
- `match-score.jpg` - Available
- `match-lounge.jpg` - Available
- `profile.jpg` - Available
- `needs-insight.jpg` - Available
- `pricing.jpg` - Available
- `Logo.png` - Header/Footer

---

## Video Assets
Located in `/public/video/`:
- `hero-ailo.mp4` - 2.1MB (compressed from 15MB)
- `hero-ailo-poster.jpg` - 64KB (first frame)

---

## Files Modified (This Session)

### Core Files
- `src/app/page.tsx` - Homepage structure (9 sections)
- `src/lib/copy.ts` - All website copy
- `src/components/layout/Header.tsx` - Updated nav links
- `src/components/layout/Footer.tsx` - Redesigned for dark theme

### Section Components
- `src/components/sections/Problem.tsx` - Removed animations, kept hover
- `src/components/sections/HowItWorks.tsx` - 6 markers + process + iPhone
- `src/components/sections/Proof.tsx` - Stats, founders, testimonial marquee, patent
- `src/components/sections/FounderLetter.tsx` - NEW: Video + promises
- `src/components/sections/ExperienceAilo.tsx` - NEW: 3 entry paths
- `src/components/sections/FAQ.tsx` - Redesigned for dark theme
- `src/components/sections/index.ts` - Updated exports

### Removed/Unused
- `BeforeYouMeet.tsx` - Redundant after How It Works redesign
- `WhatYouGet.tsx` - Redundant
- `ThePromise.tsx` - Replaced by FounderLetter

---

## Pending/Ideas for Later
1. Real founder video for FounderLetter section
2. Real testimonials/UGC videos
3. Real pillar science copy from Dr. Zannah
4. Event photos for ExperienceAilo section
5. Founder photos for Proof section
6. Create `/events` page
7. Create `/blog` page

---

## Dev Server
Running at: `http://localhost:3000`
Command: `npm run dev` (in `/ailo-website` directory)

---

## Notes
- Copy source of truth: `src/lib/copy.ts`
- Don't mention competitor names - not premium
- 30 years research (not 20) - be consistent
- No emojis unless requested
- No urgency/FOMO tactics - stay premium
- No specific pricing on homepage - discuss on call
- No timeline promises for matches - quality over speed

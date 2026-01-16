"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is AILO different from dating apps?",
    answer:
      "Dating apps show you everyone nearby and let you guess. We use patented behavioral science to only show you people you're actually compatible with. Fewer matches, but matches that make sense.",
  },
  {
    question: "What happens after I complete the questionnaire?",
    answer:
      "You'll book a strategy call with our team. We'll answer your questions and see if AILO is right for you. After joining, you'll complete the full Discovery Assessment in the app.",
  },
  {
    question: "How long until I see matches?",
    answer:
      "Most members receive their first matches within 7-14 days of completing the assessment. Timing depends on our current pool and your compatibility profile.",
  },
  {
    question: "What's the investment?",
    answer:
      "Traditional matchmakers charge $15,000-50,000 with no guarantees. AILO membership is a one-time investment of $999-1,499 depending on your situation — we'll discuss options on your call. Unlike monthly subscriptions, you pay once and keep access forever, including future matches, events, and all app updates.",
  },
  {
    question: "I'm not in South Florida. Can I use AILO?",
    answer:
      "We're currently matching in South Florida only. Join the waitlist and you'll get priority access when we expand to your area.",
  },
  {
    question: "What if I don't get matches?",
    answer:
      "That's what the 90-Day Guarantee is for. If you don't receive at least 3 compatible matches within 90 days, you get AILO Duo free for life plus VIP access to all our events.",
  },
];

export function FAQ() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)]">
              Questions? We&apos;ve Got Answers.
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100"
              >
                <AccordionTrigger className="text-left text-[var(--color-text-primary)] font-medium hover:text-[var(--color-primary)] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--color-text-secondary)] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

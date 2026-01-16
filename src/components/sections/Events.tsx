import Link from "next/link";
import Image from "next/image";

const eventTypes = [
  {
    title: "Intimate Gatherings",
    frequency: "Weekly",
    size: "8-12 people",
    description: "Small group workshops focused on deep connection and self-discovery",
    image: "/images/events/DSCF8892-web.jpg",
  },
  {
    title: "Monthly Mixers",
    frequency: "Monthly",
    size: "30-50 people",
    description: "Elegant social events where meaningful conversations happen naturally",
    image: "/images/events/LEN04364-web.jpg",
  },
  {
    title: "Signature Events",
    frequency: "Quarterly",
    size: "100+ people",
    description: "Exclusive experiences at Miami's most sought-after venues",
    image: "/images/events/DSCF8438-web.jpg",
  },
];

export function Events() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag-gold mb-4">
            Beyond the App
          </span>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mt-4 mb-4">
            Meet AILO Members In Person
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Our relationship workshops are where real connections happen. Not awkward
            singles mixers — elegant events with guided compatibility discussions.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="card-teal overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A4D] to-transparent" />
              </div>

              <div className="p-6 -mt-8 relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag-gold text-[10px]">
                    {event.frequency}
                  </span>
                  <span className="text-xs text-white/60">{event.size}</span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Badge */}
        <div className="text-center">
          <div className="card-gold inline-flex items-center gap-3 px-6 py-4 mb-6">
            <div className="gray-circle w-10 h-10">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[var(--color-text-inverse)] font-semibold text-sm sm:text-base">
              AILO Members get VIP access to all events
            </span>
          </div>

          <div>
            <Link href="/apply" className="btn-primary">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

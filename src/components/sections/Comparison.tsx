const comparisonData = [
  {
    feature: "Matching Method",
    datingApps: "Location + Swipes",
    matchmakers: "Human judgment",
    ailo: "Patented science",
  },
  {
    feature: "Profile Creation",
    datingApps: "You write it",
    matchmakers: "They write it",
    ailo: "AILO creates it",
  },
  {
    feature: "Compatibility Insight",
    datingApps: "None",
    matchmakers: "Subjective",
    ailo: "70%+ score",
  },
  {
    feature: "Effort Required",
    datingApps: "Endless swiping",
    matchmakers: "Interviews, waiting",
    ailo: "7-min assessment",
  },
];

export function Comparison() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)]">
              AILO vs. Everything Else
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-[var(--color-muted)] font-medium text-sm"></th>
                  <th className="text-center p-4 text-[var(--color-muted)] font-medium text-sm">
                    Dating Apps
                  </th>
                  <th className="text-center p-4 text-[var(--color-muted)] font-medium text-sm">
                    Matchmakers
                  </th>
                  <th className="text-center p-4 bg-[var(--color-primary)]/5 rounded-t-xl">
                    <span className="text-[var(--color-primary)] font-semibold">
                      AILO
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100"
                  >
                    <td className="p-4 font-medium text-[var(--color-text-primary)]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center text-[var(--color-muted)]">
                      {row.datingApps}
                    </td>
                    <td className="p-4 text-center text-[var(--color-muted)]">
                      {row.matchmakers}
                    </td>
                    <td className="p-4 text-center bg-[var(--color-primary)]/5 font-medium text-[var(--color-primary)]">
                      {row.ailo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

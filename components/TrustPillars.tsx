// Three trust pillars for Zhuxing Pyrotechnics, reused across pages.

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
    title: "Dual-Expertise Manufacturer",
    body: "One factory for both pyrotechnic display equipment and commercial stage effect machines — from outdoor firework finales to intimate indoor weddings."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Safety & Precision Engineered",
    body: "Firing systems, igniters and cold-spark effects built for synchronized, reliable performance under pressure, with strict quality control on every batch."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 14 3-3 3 3 5-5" />
        <path d="M18 9h1v1" />
      </svg>
    ),
    title: "Factory-Direct Supply",
    body: "Competitive manufacturer pricing, flexible configurations and dedicated after-sales support for event professionals and resellers worldwide."
  }
];

export default function TrustPillars() {
  return (
    <section className="trust-pillars">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Why Work With Us</span>
          <h2>A Manufacturer Built for Event Professionals</h2>
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div key={p.title} className="pillar">
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

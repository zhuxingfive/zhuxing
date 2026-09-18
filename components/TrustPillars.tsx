// Three trust pillars for Zhuxing Pyrotechnics, reused across pages.

const pillars = [
  {
    title: "Dual-Expertise Manufacturer",
    body: "One factory for both pyrotechnic display equipment and commercial stage effect machines — from outdoor firework finales to intimate indoor weddings."
  },
  {
    title: "Safety & Precision Engineered",
    body: "Firing systems, igniters and cold-spark effects built for synchronized, reliable performance under pressure, with strict quality control on every batch."
  },
  {
    title: "Factory-Direct with OEM/ODM",
    body: "Competitive manufacturer pricing, custom branding, flexible customization and dedicated after-sales support for event professionals and resellers worldwide."
  }
];

export default function TrustPillars() {
  return (
    <section className="trust-pillars">
      <div className="container pillars-grid">
        {pillars.map((p) => (
          <div key={p.title} className="pillar">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

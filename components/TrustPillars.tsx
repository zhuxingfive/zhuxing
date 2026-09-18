// Three trust pillars, reused across Home / Category / Product / Contact pages
// (explo.at pattern: reliability, customer-driven innovation, local quality).
// TODO: rewrite copy to match your factory's real strengths.

const pillars = [
  {
    title: "Reliable Quality You Can Trust",
    body: "TODO: describe your manufacturing consistency, QC process, or certifications."
  },
  {
    title: "Customer-Driven Development",
    body: "TODO: describe how customer feedback shapes your product line."
  },
  {
    title: "Factory-Direct Advantage",
    body: "TODO: describe where you manufacture, capacity, and support."
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

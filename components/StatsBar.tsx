// Factory stats bar — visual data anchors on a dark band.

const stats = [
  { value: "10+", label: "Years Manufacturing" },
  { value: "19+", label: "Product Models" },
  { value: "3", label: "Product Categories" },
  { value: "OEM/ODM", label: "Custom Branding" }
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

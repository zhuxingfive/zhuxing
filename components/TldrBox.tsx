// TL;DR summary box for GEO (Generative Engine Optimization).
// Placed at the top of blog posts so AI search engines (ChatGPT, Perplexity)
// can extract the core answer without reading the full article.
// The "tldr-summary" class is targeted by the Speakable schema in lib/schema.ts.

export default function TldrBox({ points }: { points: string[] }) {
  return (
    <div className="tldr-summary">
      <p className="tldr-label">TL;DR</p>
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

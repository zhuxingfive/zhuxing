import Image from "next/image";

// Application scenarios — image-led use cases with overlay labels.
const scenarios = [
  {
    image: "/gallery/scene-1.jpg",
    title: "Weddings",
    text: "Cold sparks, color smoke and handheld effects for entrances, first dances and send-offs."
  },
  {
    image: "/gallery/scene-2.jpg",
    title: "Concerts & Festivals",
    text: "Stage fountains and firing systems synchronized to live performances."
  },
  {
    image: "/gallery/scene-5.jpg",
    title: "Corporate & Events",
    text: "Product launches, galas and brand activations with safe indoor effects."
  },
  {
    image: "/banners/display.jpg",
    title: "Fireworks Displays",
    text: "Professional firing systems, igniters, mortar tubes and racks for large shows."
  }
];

export default function Applications() {
  return (
    <section className="applications-section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Where Our Equipment Shines</span>
          <h2>One Supplier for Every Occasion</h2>
        </div>
        <div className="applications-grid">
          {scenarios.map((s) => (
            <div key={s.title} className="application-card">
              <Image src={s.image} alt={s.title} width={480} height={600} />
              <div className="application-overlay">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

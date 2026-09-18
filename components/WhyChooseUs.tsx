import Image from "next/image";
import Link from "next/link";

const points = [
  "Direct factory pricing — no trading-company markup",
  "OEM/ODM: custom branding, colors and packaging",
  "In-house production from igniters to firing systems",
  "Strict quality control and MSDS documentation",
  "Reliable consumable supply for rental fleets",
  "Worldwide shipping and dedicated after-sales support"
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <div className="why-image">
          <Image src="/workshop/workshop-8.jpg" alt="Zhuxing factory warehouse" width={640} height={520} />
        </div>
        <div className="why-content">
          <span className="section-eyebrow">The Factory Advantage</span>
          <h2>Buy Direct From the People Who Build It</h2>
          <p>
            As a genuine manufacturer in Yueyang, China, we control the entire process — so you get
            better pricing, full customization and technical support a trading company simply cannot
            match.
          </p>
          <ul className="why-list">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary">
            Request a Wholesale Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

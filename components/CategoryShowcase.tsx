import Link from "next/link";
import Image from "next/image";
import { showcaseBlocks } from "@/lib/home";

// Alternating image/text showcase — mirrors explo.at's category blocks.
export default function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <div className="container">
        {showcaseBlocks.map((block, index) => (
          <div
            key={block.eyebrow}
            className={`showcase-block ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="showcase-image">
              <Image src={block.image} alt={block.title} width={640} height={400} />
            </div>
            <div className="showcase-text">
              <p className="showcase-eyebrow">{block.eyebrow}</p>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
              <Link href={block.cta.href} className="btn btn-outline">
                {block.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import type { GalleryEntry } from "@/lib/gallery";

export default function GalleryGrid({ items }: { items: GalleryEntry[] }) {
  return (
    <div className="gallery-grid">
      {items.map((item, i) => (
        <figure key={i} className="gallery-card">
          <div className="gallery-card-image">
            <Image
              src={item.image}
              alt={item.title}
              width={480}
              height={360}
            />
          </div>
          <figcaption className="gallery-card-body">
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

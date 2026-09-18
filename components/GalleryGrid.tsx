import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="gallery-grid">
      {images.map((src, i) => (
        <div key={i} className="gallery-item">
          <Image src={src} alt={`Gallery image ${i + 1}`} width={480} height={480} />
        </div>
      ))}
    </div>
  );
}

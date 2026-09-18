import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="gallery-cta">
      <div className="container">
        <h2>TODO: See Our Products in Action</h2>
        <p>TODO: short line inviting visitors to browse the gallery.</p>
        <Link href="/gallery" className="btn btn-primary">
          View our image and video gallery
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="gallery-cta">
      <div className="container">
        <h2>See Our Equipment in Action</h2>
        <p>
          From lakeside weddings and live concerts to large fireworks displays — explore real
          events powered by our cold spark, smoke and firing systems, plus a look inside our factory.
        </p>
        <Link href="/gallery" className="btn btn-primary">
          View our image and video gallery
        </Link>
      </div>
    </section>
  );
}

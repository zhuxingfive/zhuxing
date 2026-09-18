import GalleryGrid from "@/components/GalleryGrid";
import { eventGallery, workshopGallery } from "@/lib/gallery";

export const metadata = {
  title: "Gallery",
  description:
    "See Zhuxing Pyrotechnics cold spark fountains, color smoke and stage effects in real events, plus inside our fireworks equipment factory."
};

export default function GalleryPage() {
  return (
    <div className="container gallery-page">
      <h1>Gallery</h1>
      <p className="category-desc">
        Our equipment in real events — and the factory behind it. Every effect below is produced
        in-house, giving buyers factory-direct pricing and full customization.
      </p>

      <h2 className="gallery-section-title">Events &amp; Effects</h2>
      <p className="gallery-section-desc">
        Real weddings, concerts and celebrations using our cold spark machines, color smoke and
        handheld sparklers.
      </p>
      <GalleryGrid items={eventGallery} />

      <h2 className="gallery-section-title" style={{ marginTop: "56px" }}>
        Inside Our Factory
      </h2>
      <p className="gallery-section-desc">
        From igniter wiring to fiberglass mortar tubes and cold spark machine assembly — a look at
        our in-house manufacturing and quality control.
      </p>
      <GalleryGrid items={workshopGallery} />
    </div>
  );
}

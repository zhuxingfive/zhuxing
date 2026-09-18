import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery"
};

// TODO: replace with real product/event photos.
const galleryImages = ["/gallery/placeholder-1.jpg", "/gallery/placeholder-2.jpg"];

export default function GalleryPage() {
  return (
    <div className="container">
      <h1>Image &amp; Video Gallery</h1>
      <p>See our products in action.</p>
      <GalleryGrid images={galleryImages} />
    </div>
  );
}

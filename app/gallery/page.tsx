import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery",
  description:
    "See Zhuxing Pyrotechnics cold spark fountains, fireworks firing systems and stage effects in real events, plus our manufacturing workshop."
};

const eventImages = [
  "/gallery/scene-1.jpg",
  "/gallery/scene-2.jpg",
  "/gallery/scene-3.jpg",
  "/gallery/scene-4.jpg",
  "/gallery/scene-5.jpg"
];

const workshopImages = Array.from({ length: 12 }, (_, i) => `/workshop/workshop-${i + 1}.jpg`);

export default function GalleryPage() {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <p>Our equipment in action — and the factory behind it.</p>

      <h2>Events &amp; Effects</h2>
      <GalleryGrid images={eventImages} />

      <h2 style={{ marginTop: "48px" }}>Inside Our Factory</h2>
      <GalleryGrid images={workshopImages} />
    </div>
  );
}

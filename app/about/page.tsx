import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Yueyang Zhuxing Technology Co., Ltd. is a dual-expertise manufacturer of fireworks display equipment and commercial stage effect machines, based in Yueyang, China."
};

const workshopImages = ["/workshop/workshop-1.jpg", "/workshop/workshop-2.jpg", "/workshop/workshop-3.jpg", "/workshop/workshop-4.jpg"];

export default function AboutPage() {
  return (
    <div className="container about-page">
      <h1>About {site.legalName}</h1>
      <p className="about-lead">
        Dual-Expertise Manufacturer of Pyrotechnic Equipment &amp; Stage Effect Machines
      </p>

      <div className="about-body">
        <p>
          {site.legalName} is a professional manufacturer of fireworks display equipment and
          commercial stage effect machines, serving event organizers, wedding planners, and
          production companies worldwide from our base in Yueyang, China.
        </p>
        <p>
          Our pyrotechnic line includes fiberglass mortar tubes, single-shot aluminum racks,
          electric igniters, and remote firing systems — engineered for safety, precision, and
          synchronized performance in large-scale displays. Our stage effect range features cold
          spark machines, bubble machines, sparkle fountains, and gender-reveal effects — creating
          immersive atmospheres for weddings, concerts, festivals, and corporate events, from
          gentle bubble effects to high-impact bursts.
        </p>
        <p>
          What sets us apart is our ability to support clients who need both disciplines. Whether
          for a grand outdoor fireworks finale or an intimate indoor wedding, we deliver reliable
          equipment that performs flawlessly under pressure. Backed by strict quality control,
          customization options, and dedicated after-sales support, we help turn every celebration
          into an unforgettable experience.
        </p>
      </div>

      <div className="gallery-grid">
        {workshopImages.map((src, i) => (
          <div key={i} className="gallery-item">
            <Image src={src} alt={`Zhuxing factory ${i + 1}`} width={480} height={360} />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link href="/contact" className="btn btn-primary">
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}

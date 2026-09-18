import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import CustomerNotice from "@/components/CustomerNotice";
import TrustPillars from "@/components/TrustPillars";
import CategoryShowcase from "@/components/CategoryShowcase";
import GalleryCTA from "@/components/GalleryCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <TrustPillars />
      <CategoryShowcase />
      <CustomerNotice />
      <GalleryCTA />
    </>
  );
}

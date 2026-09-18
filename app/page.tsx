import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PromoBanner from "@/components/PromoBanner";
import FeaturedCategories from "@/components/FeaturedCategories";
import TrustPillars from "@/components/TrustPillars";
import Applications from "@/components/Applications";
import WhyChooseUs from "@/components/WhyChooseUs";
import CategoryShowcase from "@/components/CategoryShowcase";
import CustomerNotice from "@/components/CustomerNotice";
import GalleryCTA from "@/components/GalleryCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PromoBanner />
      <FeaturedCategories />
      <TrustPillars />
      <Applications />
      <WhyChooseUs />
      <CategoryShowcase />
      <CustomerNotice />
      <GalleryCTA />
    </>
  );
}

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
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Reveal>
        <PromoBanner />
      </Reveal>
      <Reveal>
        <FeaturedCategories />
      </Reveal>
      <Reveal>
        <TrustPillars />
      </Reveal>
      <Reveal>
        <Applications />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <CategoryShowcase />
      </Reveal>
      <Reveal>
        <CustomerNotice />
      </Reveal>
      <Reveal>
        <GalleryCTA />
      </Reveal>
    </>
  );
}

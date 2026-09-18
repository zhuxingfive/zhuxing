import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import CustomerNotice from "@/components/CustomerNotice";
import TrustPillars from "@/components/TrustPillars";
import CategoryShowcase from "@/components/CategoryShowcase";
import GalleryCTA from "@/components/GalleryCTA";
import UpcomingEvents from "@/components/UpcomingEvents";
import SocialFeed from "@/components/SocialFeed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <CustomerNotice />
      <TrustPillars />
      <CategoryShowcase />
      <GalleryCTA />
      <UpcomingEvents />
      <SocialFeed />
    </>
  );
}

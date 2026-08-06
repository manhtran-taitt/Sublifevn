import HeroCarousel from "@/components/HeroCarousel";
import SublimeBanner from "@/components/SublimeBanner";
import SecondaryCarousel from "@/components/SecondaryCarousel";
import SolutionsGrid from "@/components/SolutionsGrid";
import InnovationSection from "@/components/InnovationSection";
import NewsSection from "@/components/NewsSection";
import DistributorBanner from "@/components/DistributorBanner";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroCarousel />
      <SublimeBanner />
      <SecondaryCarousel />
      <SolutionsGrid />
      <InnovationSection />
      <NewsSection />
      <DistributorBanner />
    </div>
  );
}

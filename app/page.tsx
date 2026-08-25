import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Products } from "@/components/Products";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { SplitShowcase } from "@/components/SplitShowcase";
import { IngredientsBanner } from "@/components/IngredientsBanner";
import { Blog } from "@/components/Blog";
import { StrengthsBar } from "@/components/StrengthsBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Products />
        <FeaturedCarousel />
        <SplitShowcase />
        <IngredientsBanner />
        <Blog />
      </main>
      <StrengthsBar />
      <Footer />
    </>
  );
}

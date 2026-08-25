import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { ProductDetail } from "@/components/ProductDetail";
import { StrengthsBar } from "@/components/StrengthsBar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { getProductById, products } from "@/lib/catalog";

const siteUrl = "https://cbcosmetique.com";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Produit introuvable — CB COSMÉTIQUE" };

  return {
    title: `${product.name} — CB COSMÉTIQUE`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: `${siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "CB COSMÉTIQUE",
    },
    url: `${siteUrl}/produits/${product.id}`,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <ProductDetail product={product} />
      <StrengthsBar />
      <Footer />
    </>
  );
}

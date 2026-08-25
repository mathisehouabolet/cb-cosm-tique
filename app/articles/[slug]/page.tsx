import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import { articles, getArticleBySlug } from "@/lib/articles";

const siteUrl = "https://cbcosmetique.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable — CB COSMÉTIQUE" };

  return {
    title: `${article.title} — CB COSMÉTIQUE`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleRoute({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image}`,
    url: `${siteUrl}/articles/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "CB COSMÉTIQUE",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "CB COSMÉTIQUE",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    inLanguage: "fr-FR",
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <ArticlePage article={article} />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/content/blog-posts";
import {
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Perspectives on faith, technology, privacy, and the future of digital infrastructure for ministry — from the Aisaiah Foundation team.",
  openGraph: {
    title: "Blog & Insights | Aisaiah Foundation",
    description:
      "Perspectives on faith, technology, and the future of ministry infrastructure.",
  },
};

export default function BlogPage() {
  const pageSchema = getWebPageSchema({
    title: "Blog & Insights",
    description: metadata.description as string,
    path: "/blog",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Blog & Insights"
        title="From the Foundation"
        description="Perspectives on faith and technology, ministry operations, data stewardship, and the future of digital infrastructure for the communities we serve."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}

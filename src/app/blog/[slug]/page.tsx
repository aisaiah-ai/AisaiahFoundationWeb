import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogContent } from "@/components/blog/blog-content";
import { blogPosts } from "@/content/blog-posts";
import {
  getArticleSchema,
  getBreadcrumbSchema,
} from "@/lib/structured-data";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Aisaiah Foundation`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    author: post.author,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    tags: post.tags,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.22),transparent_24%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_28%),linear-gradient(180deg,#08101f_0%,#0f172a_55%,#08101f_100%)]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              href="/blog"
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-white/10 text-primary-200 border border-white/10"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <BlogContent content={post.content} />

        <div className="mx-auto mt-16 max-w-3xl border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button href="/blog" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Posts
            </Button>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

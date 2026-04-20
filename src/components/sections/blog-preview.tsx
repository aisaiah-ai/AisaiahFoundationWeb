import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/blog-posts";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogPreview() {
  const featured = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <Section variant="muted">
      <SectionHeader>
        <SectionTitle>Insights from the Foundation</SectionTitle>
        <SectionDescription>
          Perspectives on faith, technology, and building daily spiritual
          habits — from the team behind AIsaiah.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-8 md:grid-cols-3">
        {featured.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card hover className="h-full">
              <CardContent className="flex h-full flex-col p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/blog" variant="outline">
          View All Insights
        </Button>
      </div>
    </Section>
  );
}

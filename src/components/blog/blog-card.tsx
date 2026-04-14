import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a href={`/blog/${post.slug}`} className="group">
      <Card hover className="h-full">
        <CardContent className="flex h-full flex-col p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
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
  );
}

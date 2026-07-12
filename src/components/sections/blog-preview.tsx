"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/ui/section-wrapper";

type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  wordCount: number;
};

const BlogPreviewSection = ({ posts }: { posts: BlogPost[] }) => {
  if (!posts.length) return null;

  const readTime = (words: number) => `${Math.max(1, Math.ceil(words / 200))} min`;

  return (
    <SectionWrapper
      id="blog-preview"
      className="max-w-4xl mx-auto py-16 px-4 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-1">
            From the blog
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Writing
          </h2>
        </div>
        <Link
          href="/blogs"
          className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors group"
        >
          All posts
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>

      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <Link href={`/blogs/${post.slug}`} className="group block">
              <div className="gradient-hairline rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base md:text-lg font-semibold text-foreground group-hover:text-gradient transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground/60">
                        <Clock className="w-3 h-3" />
                        {readTime(post.wordCount)} read
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground/60">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-[10px] font-mono font-normal bg-secondary/20 border-transparent"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BlogPreviewSection;

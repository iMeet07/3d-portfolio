import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
const SkillSphere = dynamic(() => import("@/components/skill-sphere"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-from)]/3 to-transparent opacity-40" />
    </div>
  ),
});
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ResearchSection from "@/components/sections/research";
import ToolkitSection from "@/components/sections/toolkit";
import StatsSection from "@/components/sections/stats";
import { RoleFilterProvider } from "@/contexts/role-filter";
import { RoleFilterBanner } from "@/components/role-filter-banner";
import BlogPreviewSection from "@/components/sections/blog-preview";
import SocialProofSection from "@/components/sections/social-proof";
import { getBlogPosts } from "@/lib/mdx";

function MainPage() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 2)
    .map((p) => ({
      slug: p.slug,
      title: p.metadata.title,
      publishedAt: p.metadata.publishedAt,
      summary: p.metadata.summary,
      tags: p.metadata.tags ?? [],
      wordCount: p.content.trim().split(/\s+/).length,
    }));

  return (
    <RoleFilterProvider>
      <SmoothScroll>
        <SkillSphere />
        <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
          <HeroSection />
          <RoleFilterBanner />
          <StatsSection />
          <AboutSection />
          <SkillsSection />
          <ToolkitSection />
          <ExperienceSection />
          <ResearchSection />
          <ProjectsSection />
          <BlogPreviewSection posts={posts} />
          <SocialProofSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </RoleFilterProvider>
  );
}

export default MainPage;

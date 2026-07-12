"use client";

import Image from "next/image";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";
import { useRoleFilter } from "@/contexts/role-filter";

const PROJECT_METRICS: Record<string, string> = {
  frugalmoments: "Live · Stripe payouts",
  deepwrite: "9 agents · <90 sec",
  "multimodal-ai": "5+ data modalities",
  "resume-screening": "91% precision",
  "traffic-flow": "87% accuracy · LSTM",
  eduroar: "Google Solution Challenge",
  "movie-explorer": "Shipped in ~3 hrs",
  "payment-gateway": "In Progress · SAGA + Outbox",
  "vibe-coding-platform": "Spring AI + RAG + MCP",
  "distributed-social": "Neo4J graph · Kafka fan-out",
  "airbnb-clone": "Geospatial · RBAC · Booking",
};

const ProjectDialog = ({ project }: { project: Project }) => (
  <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
    <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
            {project.title}
          </h4>
          <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
            {project.category}
          </span>
        </div>
        <div className="shrink-0 flex items-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              Source
            </Link>
          )}
          {project.live && (
            <Link href={project.live} target="_blank">
              <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                Visit
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>

    <ScrollArea className="flex-1" type="always" data-lenis-prevent>
      <div className="px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
        >
          {project.skills.frontend?.length > 0 && (
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Frontend
              </span>
              <FloatingDock items={project.skills.frontend} />
            </div>
          )}
          {project.skills.backend?.length > 0 && (
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Backend
              </span>
              <FloatingDock items={project.skills.backend} />
            </div>
          )}
        </motion.div>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.content}
        </motion.div>
      </div>
    </ScrollArea>
  </ResponsiveDialogContent>
);

/* ─── Card variants ─────────────────────────────────────────────── */

const FeaturedCard = ({
  project,
  dimmed,
}: {
  project: Project;
  dimmed?: boolean;
}) => (
  <ResponsiveDialog>
    <ResponsiveDialogTrigger asChild>
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} project`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-40px" }}
        animate={{ opacity: dimmed ? 0.45 : 1 }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border cursor-pointer bg-card h-[280px] md:h-[340px] transition-all duration-400",
          dimmed ? "border-border/30" : "border-border",
          !dimmed && "ring-0"
        )}
      >
        {project.src ? (
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient ?? "from-slate-800 to-slate-900"} transition-opacity duration-300`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        {project.live && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[10px] text-green-300">Live</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1 block">
              {project.category}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/60 border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
              {PROJECT_METRICS[project.id]}
            </span>
            <span className="flex items-center gap-1 font-mono text-xs text-white/80 group-hover:text-white transition-colors">
              View project
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </motion.div>
    </ResponsiveDialogTrigger>
    <ProjectDialog project={project} />
  </ResponsiveDialog>
);

const MediumCard = ({
  project,
  index,
  dimmed,
}: {
  project: Project;
  index: number;
  dimmed?: boolean;
}) => (
  <ResponsiveDialog>
    <ResponsiveDialogTrigger asChild>
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} project`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: true, margin: "-40px" }}
        animate={{ opacity: dimmed ? 0.45 : 1 }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border cursor-pointer bg-card h-[220px] md:h-[260px] transition-all duration-400",
          dimmed ? "border-border/30" : "border-border"
        )}
      >
        {project.src ? (
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05] opacity-80 group-hover:opacity-90"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient ?? "from-slate-800 to-slate-900"}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mb-1 block">
            {project.category}
          </span>
          <h3 className="font-display text-xl font-bold text-white leading-tight mb-2">
            {project.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-white/50 border border-white/15 rounded-full px-2.5 py-0.5 bg-white/5">
              {PROJECT_METRICS[project.id]}
            </span>
            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        </div>
      </motion.div>
    </ResponsiveDialogTrigger>
    <ProjectDialog project={project} />
  </ResponsiveDialog>
);

const SmallCard = ({
  project,
  index,
  dimmed,
}: {
  project: Project;
  index: number;
  dimmed?: boolean;
}) => (
  <ResponsiveDialog>
    <ResponsiveDialogTrigger asChild>
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} project`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        viewport={{ once: true, margin: "-40px" }}
        animate={{ opacity: dimmed ? 0.45 : 1 }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border cursor-pointer bg-card h-[180px] transition-all duration-400",
          dimmed ? "border-border/30" : "border-border"
        )}
      >
        {project.src ? (
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.04] transition-all duration-500"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient ?? "from-slate-800 to-slate-900"} group-hover:opacity-90 transition-opacity`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5 block">
            {project.category}
          </span>
          <h3 className="font-display text-base font-bold text-white leading-tight mb-1.5">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] text-white/45">
            {PROJECT_METRICS[project.id]}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <ExternalLink className="w-3.5 h-3.5 text-white/80" />
          </div>
        </div>
      </motion.div>
    </ResponsiveDialogTrigger>
    <ProjectDialog project={project} />
  </ResponsiveDialog>
);

/* ─── Layout ─────────────────────────────────────────────────────── */

const ProjectsSection = () => {
  const { track } = useRoleFilter();
  const [featured, ...rest] = projects;
  const medium = rest.slice(0, 2);
  const small = rest.slice(2);

  const trackMatch = (p: Project) =>
    track === "all" || p.track === track;

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-8">
      <SectionHeader
        id="projects"
        title="Projects"
        kicker="05 · Selected Builds"
        desc="Research systems, LLM pipelines, and a live startup."
        className="mb-8 md:mb-96"
      />

      <div className="mt-10 px-4 md:px-8 flex flex-col gap-4">
        {/* Row 1 — Featured */}
        <FeaturedCard project={featured} dimmed={!trackMatch(featured)} />

        {/* Row 2 — Medium 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {medium.map((p, i) => (
            <MediumCard key={p.id} project={p} index={i} dimmed={!trackMatch(p)} />
          ))}
        </div>

        {/* Row 3 — Small 3-col (or 2+1 on smaller) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {small.map((p, i) => (
            <SmallCard key={p.id} project={p} index={i} dimmed={!trackMatch(p)} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

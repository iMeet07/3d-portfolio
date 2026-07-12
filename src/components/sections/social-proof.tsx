"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { config } from "@/data/config";

const TESTIMONIALS = [
  {
    quote: "Add a recommendation from a colleague, professor, or manager here.",
    author: "Name",
    title: "Title · Organization",
    placeholder: true,
  },
  {
    quote: "Second recommendation goes here — ideally someone who can speak to both technical depth and collaboration.",
    author: "Name",
    title: "Title · Organization",
    placeholder: true,
  },
];

const PINNED_REPOS = [
  { name: "DeepWrite", desc: "9-agent LangGraph pipeline · technical blog generation", lang: "Python" },
  { name: "Resume-Screening-RAG-Pipeline", desc: "FAISS + RAG Fusion · 91% precision on 10K+ resumes", lang: "Python" },
  { name: "Multimodal-AI-Assistant", desc: "Local-first AI · 5+ modalities · Chainlit + Ollama", lang: "Python" },
];

const SocialProofSection = () => {
  const ghUser = config.githubUsername;

  return (
    <SectionWrapper
      id="social-proof"
      className="max-w-5xl mx-auto py-16 px-4 md:px-8"
    >
      {/* GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
        className="mb-14"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-1">
              Open source
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">
              GitHub Activity
            </h2>
          </div>
          <Link
            href={config.social.github}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors group"
          >
            @{ghUser}
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Contribution graph */}
        <div className="rounded-xl border border-border bg-card/50 p-4 overflow-hidden mb-6">
          <Image
            src={`https://ghchart.rshah.org/6d28d9/${ghUser}`}
            alt={`${ghUser} GitHub contribution graph`}
            width={800}
            height={120}
            className="w-full h-auto dark:invert-[0.15] dark:brightness-90"
            unoptimized
          />
        </div>

        {/* Pinned repos */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {PINNED_REPOS.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={`https://github.com/${ghUser}/${repo.name}`}
                target="_blank"
                rel="noopener"
                className="group block h-full"
              >
                <div className="h-full rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-sm font-medium text-foreground group-hover:text-gradient transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0 group-hover:text-foreground transition-colors" />
                  </div>
                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mb-3">
                    {repo.desc}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-mono font-normal bg-secondary/20 border-transparent"
                  >
                    {repo.lang}
                  </Badge>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-1">
            Social proof
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Recommendations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={t.placeholder ? "opacity-40" : ""}
            >
              <div className="gradient-hairline rounded-xl border border-border bg-card/50 p-5 h-full flex flex-col gap-4">
                <Quote className="w-5 h-5 text-[var(--brand-via)]/60 shrink-0" />
                <p className="font-mono text-sm text-muted-foreground leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.author}</p>
                  <p className="font-mono text-xs text-muted-foreground/70">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {TESTIMONIALS.every((t) => t.placeholder) && (
          <p className="font-mono text-[11px] text-muted-foreground/40 text-center mt-4">
            Recommendations coming soon — supply 2-3 quotes to fill these in.
          </p>
        )}
      </motion.div>
    </SectionWrapper>
  );
};

export default SocialProofSection;

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Trophy, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { SectionHeader } from "./section-header";

const STARTUPS = [
  {
    name: "FrugalMoments",
    tagline: "AI group-booking marketplace with automatic split payment.",
    description:
      "Solo-built marketplace where friend groups book bundled activity + food/drink in one flow — one price, one confirmation, Stripe Connect split handled automatically. AI concierge powered by Anthropic Claude guides discovery.",
    status: "Live",
    badge: null,
    year: "2026 – Present",
    role: "Founder · Solo",
    live: "https://frugalmoments.vercel.app",
    gradient: "from-violet-950/80 via-purple-900/60 to-cyan-950/80",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    tags: ["Next.js", "Stripe Connect", "Anthropic Claude", "Supabase", "Twilio", "PWA"],
    highlights: [
      "Stripe Connect Express — automatic per-vendor payouts on every booking",
      "Anthropic Claude API concierge for personalized bundle discovery",
      "Web Push PWA · Resend email · Twilio SMS · PostHog analytics",
      "9 Vercel cron jobs · Sentry · full-text search · feed scoring",
    ],
    featured: true,
  },
  {
    name: "KwikTex",
    tagline: "B2B marketplace removing intermediaries in textile supply chains.",
    description:
      "Co-founded a textile supply-chain startup connecting manufacturers directly to retailers via an automated B2B marketplace app — eliminating distributor layers and reducing procurement friction.",
    status: "Past",
    badge: "🏆 1st Prize · IdeaGiri 2023",
    year: "2023",
    role: "Co-Founder · Team of 4",
    live: null,
    gradient: "from-amber-950/80 via-orange-900/50 to-yellow-950/60",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    tags: ["B2B", "Supply Chain", "Marketplace", "Mobile App"],
    highlights: [
      "Won 1st Prize at IdeaGiri (Shark Tank-style), Inspire Technical Fest @ CKPCET",
      "Pitched to investors at Gujarat EV & Engineering Expo 2023",
      "Automated B2B ordering between textile manufacturers and retailers",
    ],
    featured: false,
  },
];

const FeaturedStartupCard = ({ startup }: { startup: (typeof STARTUPS)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, margin: "-40px" }}
    className={`relative overflow-hidden rounded-2xl border ${startup.borderColor} bg-gradient-to-br ${startup.gradient} p-8 md:p-10`}
  >
    {/* Live badge */}
    {startup.status === "Live" && (
      <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-[10px] text-green-300">Live</span>
      </div>
    )}

    {/* Award badge */}
    {startup.badge && (
      <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 mb-4">
        <Trophy className="w-3 h-3 text-amber-400" />
        <span className="font-mono text-[10px] text-amber-300">{startup.badge}</span>
      </div>
    )}

    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
          {startup.year} · {startup.role}
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
          {startup.name}
        </h3>
        <p className="font-mono text-sm text-white/60 leading-relaxed max-w-xl mb-6">
          {startup.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 mb-6">
          {startup.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <Zap className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
              <span className="font-mono text-[11px] text-white/50 leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {startup.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-white/50 border border-white/10 rounded-full px-2.5 py-0.5 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {startup.live && (
        <div className="shrink-0">
          <Link href={startup.live} target="_blank" rel="noopener">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors backdrop-blur-sm"
            >
              Visit site
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  </motion.div>
);

const SecondaryStartupCard = ({ startup, index }: { startup: (typeof STARTUPS)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-40px" }}
    className={`relative overflow-hidden rounded-2xl border ${startup.borderColor} bg-gradient-to-br ${startup.gradient} p-6`}
  >
    {startup.badge && (
      <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 mb-4">
        <Trophy className="w-3 h-3 text-amber-400" />
        <span className="font-mono text-[10px] text-amber-300">{startup.badge}</span>
      </div>
    )}

    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1.5">
      {startup.year} · {startup.role}
    </p>
    <h3 className="font-display text-2xl font-bold text-white mb-2">{startup.name}</h3>
    <p className="font-mono text-[12px] text-white/50 leading-relaxed mb-5">
      {startup.description}
    </p>

    <ul className="flex flex-col gap-2 mb-5">
      {startup.highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2">
          <Zap className="w-3 h-3 text-white/25 shrink-0 mt-0.5" />
          <span className="font-mono text-[10px] text-white/45 leading-relaxed">{h}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {startup.tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-[10px] text-white/45 border border-white/10 rounded-full px-2.5 py-0.5 bg-white/5"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const StartupsSection = () => {
  const [featured, ...rest] = STARTUPS;

  return (
    <SectionWrapper id="startups" className="max-w-5xl mx-auto py-8">
      <SectionHeader
        id="startups"
        title="Ventures"
        kicker="06 · Startups"
        desc="Building from 0 to 1 — live products and past ventures."
        className="mb-8 md:mb-96"
      />

      <div className="mt-10 px-4 md:px-8 flex flex-col gap-4">
        <FeaturedStartupCard startup={featured} />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {rest.map((s, i) => (
            <SecondaryStartupCard key={s.name} startup={s} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default StartupsSection;

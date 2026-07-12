"use client";
import { motion, AnimatePresence } from "motion/react";
import { useRoleFilter, type Track } from "@/contexts/role-filter";
import { cn } from "@/lib/utils";

const TABS: { id: Track; label: string; shortLabel: string }[] = [
  { id: "all", label: "All", shortLabel: "All" },
  { id: "ds-ml", label: "Data Science / ML", shortLabel: "DS / ML" },
  { id: "backend", label: "Backend / SWE", shortLabel: "Backend" },
  { id: "research", label: "Research", shortLabel: "Research" },
];

const WHY_HIRE_ME: Record<Track, string | null> = {
  all: null,
  "ds-ml":
    "Production ML from IBM SageMaker to clinical EHR cohorts — I close the loop from model to real-world impact.",
  backend:
    "SAGA, Outbox, Kafka fan-out, Redis idempotency — I design distributed systems for the failure cases, not just the happy path.",
  research:
    "35,387-patient cohort, 21-covariate PSM, AUC 0.876 — and I caught the silent data-contamination bug before any analysis ran.",
};

export const RoleFilterBanner = () => {
  const { track, setTrack } = useRoleFilter();

  return (
    <section className="relative z-10 flex flex-col items-center gap-3 py-6 px-4">
      <p className="font-mono text-[11px] text-muted-foreground/60 uppercase tracking-widest">
        I&apos;m looking for a candidate in...
      </p>

      <div className="flex gap-2 overflow-x-auto scrollbar-none w-full justify-center sm:justify-center">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTrack(tab.id === track ? "all" : tab.id)}
            className={cn(
              "relative px-4 py-1.5 rounded-full font-mono text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0",
              track === tab.id
                ? "text-white"
                : "text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-foreground"
            )}
          >
            {track === tab.id && (
              <motion.span
                layoutId="role-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-from)] via-[var(--brand-via)] to-[var(--brand-to)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
              />
            )}
            <span className="relative z-10 sm:hidden">{tab.shortLabel}</span>
            <span className="relative z-10 hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {track !== "all" && WHY_HIRE_ME[track] && (
          <motion.p
            key={track}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="font-mono text-sm text-center text-foreground/80 max-w-xl leading-relaxed"
          >
            <span className="text-gradient font-semibold">&ldquo;</span>
            {WHY_HIRE_ME[track]}
            <span className="text-gradient font-semibold">&rdquo;</span>
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
};

"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const C = {
  input:    "#60a5fa",
  router:   "#a78bfa",
  memory:   "#818cf8",
  research: "#34d399",
  orch:     "#fbbf24",
  worker:   "#f472b6",
  critic:   "#f87171",
  reducer:  "#a78bfa",
  fact:     "#34d399",
  seo:      "#fb923c",
  output:   "#6ee7b7",
} as const;

type BoxProps = {
  label: string;
  sub?: string;
  color: string;
  delay: number;
  className?: string;
};

const Box = ({ label, sub, color, delay, className }: BoxProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay, ease: "easeOut" }}
    className={cn("rounded-lg border px-2.5 py-2 text-center shrink-0", className)}
    style={{ borderColor: `${color}45`, background: `${color}0f` }}
  >
    <div className="font-mono text-[11px] font-semibold leading-snug" style={{ color }}>
      {label}
    </div>
    {sub && (
      <div className="font-mono text-[9px] text-white/35 mt-0.5 leading-snug">{sub}</div>
    )}
  </motion.div>
);

const ArrowV = ({ delay = 0, label }: { delay?: number; label?: string }) => (
  <motion.div
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 1 }}
    style={{ originY: "top" }}
    transition={{ duration: 0.2, delay }}
    className="flex flex-col items-center"
  >
    <div className="w-px h-5 bg-white/15" />
    {label && <div className="font-mono text-[8px] text-white/25 px-1">{label}</div>}
    <div className="text-white/25 text-[10px] leading-none">▼</div>
  </motion.div>
);

const ArrowH = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    style={{ originX: "left" }}
    transition={{ duration: 0.2, delay }}
    className="flex items-center self-center shrink-0"
  >
    <div className="h-px w-4 md:w-6 bg-white/15" />
    <div className="text-white/25 text-[10px] leading-none">▶</div>
  </motion.div>
);

export const DeepWriteDiagram = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-2">
      {inView && (
        <div className="flex flex-col items-center gap-1 min-w-[320px]">

          {/* Input */}
          <Box label="Topic Input" sub="user prompt" color={C.input} delay={0} />
          <ArrowV delay={0.1} />

          {/* Router */}
          <Box label="Router" sub="needs live research?" color={C.router} delay={0.15} />

          {/* Research branch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="flex items-center gap-2 flex-wrap justify-center"
          >
            <div className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ originY: "top" }}
                transition={{ duration: 0.18, delay: 0.25 }}
                className="w-px h-4 bg-white/15"
              />
              <Box label="Research" sub="Tavily API · 2 queries max" color={C.research} delay={0.28} />
            </div>
            <div className="font-mono text-[9px] text-white/20 self-center">or skip</div>
            <div className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ originY: "top" }}
                transition={{ duration: 0.18, delay: 0.27 }}
                className="w-px h-4 bg-white/15"
              />
              <Box label="Memory" sub="ChromaDB · style recall" color={C.memory} delay={0.3} />
            </div>
          </motion.div>

          <ArrowV delay={0.38} />

          {/* Orchestrator */}
          <Box label="Orchestrator" sub="outline + section word targets" color={C.orch} delay={0.42} />

          {/* Fan-out to workers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-[10px] text-white/20 tracking-widest"
          >
            ↙&nbsp;&nbsp;↓&nbsp;&nbsp;↓&nbsp;&nbsp;↘
          </motion.div>

          <div className="flex gap-2 flex-wrap justify-center">
            {["Writer A", "Writer B", "Writer C", "Writer N"].map((w, i) => (
              <Box key={w} label={w} sub="section in parallel" color={C.worker} delay={0.55 + i * 0.05} />
            ))}
          </div>

          <ArrowV delay={0.76} />

          {/* Critic loop */}
          <div className="relative flex flex-col items-center">
            <Box label="Critic" sub="scores 0–10 · rewrites if < 6.5 (max 2x)" color={C.critic} delay={0.8} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-mono text-[9px] text-white/25 mt-1"
            >
              ↺ revision loop
            </motion.div>
          </div>

          <ArrowV delay={0.95} label="score ≥ 6.5" />

          {/* Reducer → Fact-Checker → SEO */}
          <div className="flex items-center gap-1 flex-wrap justify-center">
            <Box label="Reducer" sub="merge sections" color={C.reducer} delay={1.0} />
            <ArrowH delay={1.08} />
            <Box label="Fact-Checker" sub="claim → source verdict" color={C.fact} delay={1.12} />
            <ArrowH delay={1.2} />
            <Box label="SEO Audit" sub="0–100 score" color={C.seo} delay={1.24} />
          </div>

          <ArrowV delay={1.32} />

          {/* Output */}
          <Box label="Article Output" sub="HTML export · SQLite history" color={C.output} delay={1.36} />

          {/* Footer badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 font-mono text-[9px] text-white/25 text-center"
          >
            end-to-end in &lt; 90 seconds · Llama 3.3 70B via Groq
          </motion.div>
        </div>
      )}
    </div>
  );
};

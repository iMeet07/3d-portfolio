"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const STATS = [
  {
    value: 1,
    suffix: "M+",
    label: "records/day through ETL pipelines at IBM",
    detail: "AWS Lambda + PySpark",
  },
  {
    value: 9,
    suffix: "+",
    label: "research abstracts co-authored",
    detail: "Surgical outcomes · EHR · Risk modeling",
  },
  {
    value: 91,
    suffix: "%",
    label: "RAG pipeline precision on 10K+ resumes",
    detail: "FAISS + RAG Fusion",
  },
  {
    value: 300,
    suffix: "K+",
    label: "clinical patients analyzed in active studies",
    detail: "N3C · TriNetX · ACS TQIP",
  },
];

function Counter({
  value,
  suffix,
  label,
  detail,
  index,
}: (typeof STATS)[0] & { index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }
    const duration = 1600 + index * 150;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center text-center px-4 py-8",
        "border-border/40",
        index < STATS.length - 1 && "md:border-r"
      )}
    >
      <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient tabular-nums leading-none">
        {count}
        {suffix}
      </span>
      <span className="mt-3 font-mono text-xs md:text-sm text-foreground/80 max-w-[160px] leading-snug">
        {label}
      </span>
      <span className="mt-1 font-mono text-[10px] text-muted-foreground/60 max-w-[160px]">
        {detail}
      </span>
    </motion.div>
  );
}

const StatsSection = () => {
  return (
    <section className="relative py-4 overflow-hidden z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-via)]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-from)]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Counter key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

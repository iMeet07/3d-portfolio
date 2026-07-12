"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const METRICS = [
  {
    label: "Angioembolization Use",
    before: 5.9,
    after: 18.8,
    max: 25,
    direction: "up" as const,
    note: "+218% adoption",
    color: "var(--brand-via)",
  },
  {
    label: "30-day Mortality",
    before: 8.2,
    after: 7.3,
    max: 12,
    direction: "down" as const,
    note: "−11% mortality",
    color: "#34d399",
  },
  {
    label: "Complication Rate",
    before: 26.7,
    after: 14.0,
    max: 32,
    direction: "down" as const,
    note: "−48% complications",
    color: "#60a5fa",
  },
];

const BAR_HEIGHT = 28;
const GROUP_GAP = 48;
const CHART_WIDTH = 260;

function Bar({
  value,
  max,
  color,
  delay,
  label,
}: {
  value: number;
  max: number;
  color: string;
  delay: number;
  label: string;
}) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-2 w-full">
      <div
        className="relative rounded-sm overflow-hidden bg-white/5"
        style={{ height: BAR_HEIGHT, width: CHART_WIDTH }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-sm"
          style={{ backgroundColor: color, opacity: 0.85 }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="absolute inset-y-0 right-2 flex items-center font-mono text-xs text-white/80 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.7, duration: 0.4 }}
        >
          {value}%
        </motion.span>
      </div>
      <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export const TQIPChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="space-y-6">
      {METRICS.map((metric, i) => (
        <div key={metric.label} className="space-y-1.5">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-xs text-foreground/80 font-medium">
              {metric.label}
            </span>
            <span
              className="font-mono text-[11px] font-semibold"
              style={{ color: metric.color }}
            >
              {metric.note}
            </span>
          </div>
          <div className="space-y-1.5">
            {inView && (
              <>
                <Bar
                  value={metric.before}
                  max={metric.max}
                  color="white"
                  delay={i * 0.15}
                  label="2016"
                />
                <Bar
                  value={metric.after}
                  max={metric.max}
                  color={metric.color}
                  delay={i * 0.15 + 0.2}
                  label="2024"
                />
              </>
            )}
          </div>
        </div>
      ))}

      <p className="font-mono text-[10px] text-muted-foreground/50 pt-2 border-t border-border/30">
        Source: ACS TQIP · 35,387-patient blunt spleen injury cohort · 2016–2024
      </p>
    </div>
  );
};

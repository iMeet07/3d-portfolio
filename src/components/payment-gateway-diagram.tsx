"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const C = {
  client: "#60a5fa",
  gateway: "#a78bfa",
  payment: "#34d399",
  redis: "#f87171",
  postgres: "#fb923c",
  kafka: "#fbbf24",
  service: "#818cf8",
  dlq: "#6b7280",
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
    className={cn(
      "rounded-lg border px-2.5 py-2 text-center shrink-0",
      className
    )}
    style={{
      borderColor: `${color}45`,
      background: `${color}0f`,
    }}
  >
    <div
      className="font-mono text-[11px] font-semibold leading-snug"
      style={{ color }}
    >
      {label}
    </div>
    {sub && (
      <div className="font-mono text-[9px] text-white/35 mt-0.5 leading-snug">
        {sub}
      </div>
    )}
  </motion.div>
);

const ArrowH = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    style={{ originX: "left" }}
    transition={{ duration: 0.25, delay }}
    className="flex items-center self-center shrink-0"
  >
    <div className="h-px w-5 md:w-8 bg-white/15" />
    <div className="text-white/25 text-[10px] leading-none">▶</div>
  </motion.div>
);

const ArrowV = ({ delay = 0, label }: { delay?: number; label?: string }) => (
  <motion.div
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 1 }}
    style={{ originY: "top" }}
    transition={{ duration: 0.22, delay }}
    className="flex flex-col items-center"
  >
    <div className="w-px h-5 bg-white/15" />
    {label && (
      <div className="font-mono text-[8px] text-white/25 px-1">{label}</div>
    )}
    <div className="text-white/25 text-[10px] leading-none">▼</div>
  </motion.div>
);

const Badge = ({
  label,
  color,
  delay,
}: {
  label: string;
  color: string;
  delay: number;
}) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.25, delay }}
    className="font-mono text-[9px] px-2 py-0.5 rounded-full border"
    style={{ borderColor: `${color}35`, color: `${color}cc`, background: `${color}0a` }}
  >
    {label}
  </motion.span>
);

export const PaymentGatewayDiagram = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-2">
      {inView && (
        <div className="flex flex-col items-center gap-1 min-w-[340px]">

          {/* ── Row 1: Request path ── */}
          <div className="flex items-center gap-1 flex-wrap justify-center">
            <Box label="Client" color={C.client} delay={0} />
            <ArrowH delay={0.12} />
            <Box label="API Gateway" color={C.gateway} delay={0.18} />
            <ArrowH delay={0.3} />
            <Box
              label="Payment Service"
              sub="Spring WebFlux · reactive"
              color={C.payment}
              delay={0.36}
            />
          </div>

          {/* ── Row 2: Sidecar patterns ── */}
          <div className="flex gap-4 flex-wrap justify-center mt-0.5">
            <div className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ originY: "top" }}
                transition={{ duration: 0.2, delay: 0.42 }}
                className="w-px h-3 bg-white/15"
              />
              <Box
                label="Rate Limiter"
                sub="Token Bucket · Sliding Window"
                color={C.redis}
                delay={0.48}
              />
              <div className="font-mono text-[8px] text-white/25">via Redis</div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ originY: "top" }}
                transition={{ duration: 0.2, delay: 0.44 }}
                className="w-px h-3 bg-white/15"
              />
              <div className="flex gap-1.5">
                <Box
                  label="Redis SETNX"
                  sub="idempotency keys"
                  color={C.redis}
                  delay={0.5}
                />
                <Box
                  label="Circuit Breaker"
                  sub="Resilience4J"
                  color={C.payment}
                  delay={0.55}
                />
                <Box
                  label="Bulkhead"
                  sub="+ DLQ"
                  color={C.dlq}
                  delay={0.6}
                />
              </div>
            </div>
          </div>

          {/* ── Arrow to Outbox ── */}
          <ArrowV delay={0.68} label="Outbox Pattern" />

          {/* ── Outbox / DB ── */}
          <Box
            label="PostgreSQL + Outbox Table"
            sub="atomic write → zero message loss on crash"
            color={C.postgres}
            delay={0.74}
          />

          {/* ── Arrow to Kafka ── */}
          <ArrowV delay={0.84} label="polling / CDC" />

          {/* ── Kafka ── */}
          <Box
            label="Apache Kafka"
            sub="durable event streaming · at-least-once delivery"
            color={C.kafka}
            delay={0.9}
          />

          {/* ── Fan-out arrows ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.3 }}
            className="font-mono text-[11px] text-white/20 tracking-widest"
          >
            ↙&nbsp;&nbsp;↓&nbsp;&nbsp;↓&nbsp;&nbsp;↘
          </motion.div>

          {/* ── Downstream services ── */}
          <div className="flex gap-2 flex-wrap justify-center">
            {[
              { label: "Settlement Svc", sub: "payout logic", delay: 1.05 },
              { label: "Notification Svc", sub: "email · SMS", delay: 1.1 },
              { label: "Ledger Svc", sub: "double-entry", delay: 1.15 },
              { label: "Dead Letter Queue", sub: "retry + alert", delay: 1.2 },
            ].map(({ label, sub, delay }) => (
              <Box
                key={label}
                label={label}
                sub={sub}
                color={label === "Dead Letter Queue" ? C.dlq : C.service}
                delay={delay}
              />
            ))}
          </div>

          {/* ── SAGA compensation ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
            className="w-full mt-5 pt-4 border-t border-white/8"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 text-center mb-3">
              SAGA choreography — compensation flow
            </div>
            <div className="flex items-center justify-center gap-1 flex-wrap">
              {[
                { label: "Payment Intent", color: C.client },
                null,
                { label: "Reserve Funds", color: C.payment },
                null,
                { label: "Process Payment", color: C.payment },
                null,
                { label: "Settle", color: C.kafka },
              ].map((item, i) =>
                item === null ? (
                  <ArrowH key={i} delay={1.35 + i * 0.05} />
                ) : (
                  <Box
                    key={item.label}
                    label={item.label}
                    color={item.color}
                    delay={1.35 + i * 0.05}
                  />
                )
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.65, duration: 0.3 }}
              className="font-mono text-[9px] text-white/25 text-center mt-2"
            >
              ↑&nbsp; failure at any step publishes compensating event &nbsp;↙
            </motion.div>
          </motion.div>

          {/* ── ELK label ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.75, duration: 0.3 }}
            className="flex gap-2 flex-wrap justify-center mt-3"
          >
            <Badge label="ELK Stack · observability" color={C.service} delay={1.75} />
            <Badge label="Zipkin · distributed tracing" color={C.service} delay={1.82} />
            <Badge label="Docker · Kubernetes" color={C.gateway} delay={1.88} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

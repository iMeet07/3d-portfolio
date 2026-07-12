"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const MODALITIES = [
  { label: "Documents", sub: "PDF · DOCX · CSV · TXT", color: "#60a5fa", icon: "📄" },
  { label: "Voice", sub: "STT → LLM → TTS", color: "#a78bfa", icon: "🎙️" },
  { label: "Image Gen", sub: "Stable Diffusion", color: "#f472b6", icon: "🎨" },
  { label: "Web Search", sub: "Wikipedia · DuckDuckGo", color: "#34d399", icon: "🌐" },
  { label: "Chat Memory", sub: "session · Literal AI", color: "#fbbf24", icon: "💬" },
] as const;

export const MultimodalDiagram = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-2">
      {inView && (
        <div className="flex flex-col items-center gap-2 min-w-[320px]">

          {/* User input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="rounded-lg border px-4 py-2 text-center"
            style={{ borderColor: "#60a5fa45", background: "#60a5fa0f" }}
          >
            <div className="font-mono text-[11px] font-semibold text-[#60a5fa]">User Input</div>
            <div className="font-mono text-[9px] text-white/35 mt-0.5">text · file · voice · command</div>
          </motion.div>

          {/* Arrow + router */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            style={{ originY: "top" }}
            transition={{ duration: 0.18, delay: 0.1 }}
            className="w-px h-4 bg-white/15"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="rounded-lg border px-5 py-2 text-center"
            style={{ borderColor: "#a78bfa45", background: "#a78bfa0f" }}
          >
            <div className="font-mono text-[11px] font-semibold text-[#a78bfa]">Intent Router</div>
            <div className="font-mono text-[9px] text-white/35 mt-0.5">Chainlit agents + tool detection</div>
          </motion.div>

          {/* Fan-out arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-mono text-[10px] text-white/20 tracking-widest"
          >
            ↙&nbsp;↙&nbsp;↓&nbsp;↘&nbsp;↘
          </motion.div>

          {/* 5 modality boxes */}
          <div className="flex gap-2 flex-wrap justify-center">
            {MODALITIES.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                className="rounded-lg border px-2.5 py-2 text-center min-w-[90px]"
                style={{ borderColor: `${m.color}45`, background: `${m.color}0f` }}
              >
                <div className="text-sm mb-0.5">{m.icon}</div>
                <div className="font-mono text-[10px] font-semibold leading-snug" style={{ color: m.color }}>
                  {m.label}
                </div>
                <div className="font-mono text-[8px] text-white/30 mt-0.5 leading-snug">{m.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Converge arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-[10px] text-white/20 tracking-widest"
          >
            ↘&nbsp;↘&nbsp;↓&nbsp;↙&nbsp;↙
          </motion.div>

          {/* Ollama backbone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.75 }}
            className="rounded-lg border px-5 py-2 text-center"
            style={{ borderColor: "#34d39945", background: "#34d3990f" }}
          >
            <div className="font-mono text-[11px] font-semibold text-[#34d399]">Ollama · Local LLM</div>
            <div className="font-mono text-[9px] text-white/35 mt-0.5">ChatOllama · LangChain · fully offline</div>
          </motion.div>

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            style={{ originY: "top" }}
            transition={{ duration: 0.18, delay: 0.85 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-4 bg-white/15" />
            <div className="text-white/25 text-[10px] leading-none">▼</div>
          </motion.div>

          {/* Response */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="rounded-lg border px-4 py-2 text-center"
            style={{ borderColor: "#6ee7b745", background: "#6ee7b70f" }}
          >
            <div className="font-mono text-[11px] font-semibold text-[#6ee7b7]">Response</div>
            <div className="font-mono text-[9px] text-white/35 mt-0.5">streamed · cited · resumable</div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-3 font-mono text-[9px] text-white/25 text-center"
          >
            local-first · zero data leaves your machine · Literal AI observability
          </motion.div>
        </div>
      )}
    </div>
  );
};

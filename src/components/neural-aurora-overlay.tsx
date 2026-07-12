"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const PALETTE = [
  [124, 58, 237],   // violet  #7c3aed
  [192, 38, 211],   // fuchsia #c026d3
  [8, 145, 178],    // cyan    #0891b2
] as const;

type RGB = (typeof PALETTE)[number];

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: RGB;
  alpha: number;
  phase: number;
  phaseSpeed: number;
}

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: RGB;
}

function randPick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function NeuralAuroraOverlay({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let blobs: Blob[] = [];
    let mouse = { x: -2000, y: -2000 };
    let raf = 0;
    let W = 0;
    let H = 0;
    const dpr = window.devicePixelRatio || 1;

    const initEntities = (w: number, h: number) => {
      nodes = Array.from({ length: 55 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        color: randPick(PALETTE),
        alpha: Math.random() * 0.45 + 0.15,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.022 + 0.008,
      }));

      blobs = Array.from({ length: 6 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        radius: Math.random() * 220 + 140,
        color: randPick(PALETTE),
      }));
    };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.scale(dpr, dpr);
      initEntities(W, H);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // --- Aurora blobs ---
      for (const blob of blobs) {
        const [r, g, b] = blob.color;
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        grad.addColorStop(0, `rgba(${r},${g},${b},0.07)`);
        grad.addColorStop(0.5, `rgba(${r},${g},${b},0.03)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();

        blob.x += blob.vx;
        blob.y += blob.vy;
        if (blob.x < -blob.radius) blob.x = W + blob.radius;
        if (blob.x > W + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = H + blob.radius;
        if (blob.y > H + blob.radius) blob.y = -blob.radius;
      }

      // --- Connection lines ---
      const CONNECTION_DIST = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const t = 1 - dist / CONNECTION_DIST;
            const [r, g, b] = nodes[i].color;
            ctx.strokeStyle = `rgba(${r},${g},${b},${t * 0.18})`;
            ctx.lineWidth = t * 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // --- Nodes ---
      for (const node of nodes) {
        node.phase += node.phaseSpeed;
        const pulse = Math.sin(node.phase) * 0.28 + 0.72;
        const r = node.r * pulse;
        const a = node.alpha * pulse;
        const [cr, cg, cb] = node.color;

        // Outer glow
        const glowR = r * 7;
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
        glow.addColorStop(0, `rgba(${cr},${cg},${cb},${a * 0.55})`);
        glow.addColorStop(0.4, `rgba(${cr},${cg},${cb},${a * 0.15})`);
        glow.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${Math.min(a * 1.6, 0.95)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Mouse repulsion
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120 && mdist > 0) {
          const force = ((120 - mdist) / 120) * 0.06;
          node.vx += (mdx / mdist) * force;
          node.vy += (mdy / mdist) * force;
        }

        node.vx *= 0.988;
        node.vy *= 0.988;
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x += W;
        if (node.x > W) node.x -= W;
        if (node.y < 0) node.y += H;
        if (node.y > H) node.y -= H;
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("fixed inset-0 pointer-events-none", className)}
      style={{ mixBlendMode: "screen" }}
    />
  );
}

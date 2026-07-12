import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Meet Brahmbhatt — AI/ML Engineer & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "9+", label: "Research Abstracts" },
  { value: "300K+", label: "Clinical Records" },
  { value: "1M+", label: "ETL Records/day" },
];

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#08080d",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background aurora glow blobs */}
        <div style={{
          position: "absolute", top: "-120px", left: "-80px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          display: "flex",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", right: "-60px",
          width: "420px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)",
          display: "flex",
        }} />
        <div style={{
          position: "absolute", top: "50%", right: "200px",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,38,211,0.12) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* Aurora top bar */}
        <div style={{
          display: "flex",
          width: "100%",
          height: "5px",
          background: "linear-gradient(90deg, #7c3aed 0%, #c026d3 50%, #0891b2 100%)",
        }} />

        {/* Main content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "64px 80px 48px",
          justifyContent: "space-between",
        }}>
          {/* Top: eyebrow + name + title */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {/* Eyebrow */}
            <div style={{
              display: "flex",
              fontSize: "13px",
              color: "#52525b",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}>
              meetbrahmbhatt.vercel.app
            </div>

            {/* Name — aurora gradient text via layered divs */}
            <div style={{
              display: "flex",
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#a78bfa",
              marginBottom: "4px",
            }}>
              Meet
            </div>
            <div style={{
              display: "flex",
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#e879f9",
              marginBottom: "28px",
            }}>
              Brahmbhatt
            </div>

            {/* Title */}
            <div style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 500,
              color: "#d4d4d8",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}>
              AI/ML Engineer · Data Scientist · Researcher
            </div>

            {/* Context line */}
            <div style={{
              display: "flex",
              fontSize: "17px",
              color: "#71717a",
            }}>
              MS Data Science @ Stony Brook University · ex-IBM AI Intern · 2× Founder
            </div>
          </div>

          {/* Bottom: stats row */}
          <div style={{
            display: "flex",
            gap: "0px",
            borderTop: "1px solid #27272a",
            paddingTop: "32px",
          }}>
            {STATS.map((stat, i) => (
              <div key={stat.label} style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                paddingRight: i < STATS.length - 1 ? "0px" : "0px",
                borderRight: i < STATS.length - 1 ? "1px solid #27272a" : "none",
                paddingLeft: i > 0 ? "40px" : "0px",
              }}>
                <div style={{
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#a78bfa",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#52525b",
                  letterSpacing: "0.05em",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Open to work badge */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: "100px",
                padding: "8px 20px",
              }}>
                <div style={{
                  width: "8px", height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "flex",
                }} />
                <span style={{ fontSize: "14px", color: "#4ade80", fontWeight: 500 }}>
                  Open · Summer 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#0a0a0f", padding: "32px 16px" }}>
    <div style={{ maxWidth: "560px", margin: "0 auto", background: "#111116", borderRadius: "16px", overflow: "hidden", border: "1px solid #27272a" }}>

      {/* Aurora header */}
      <div style={{ background: "linear-gradient(135deg, #7c3aed 0%, #c026d3 55%, #0891b2 100%)", padding: "28px 32px" }}>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          meetbrahmbhatt.vercel.app · Portfolio Contact
        </p>
        <h1 style={{ margin: "10px 0 0", color: "#ffffff", fontSize: "22px", fontWeight: 700, lineHeight: 1.25 }}>
          New message from your portfolio 🚀
        </h1>
      </div>

      {/* Sender card */}
      <div style={{ padding: "28px 32px 0" }}>
        <div style={{ background: "#1a1a20", borderRadius: "12px", border: "1px solid #2a2a35", padding: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ paddingBottom: "14px", verticalAlign: "top", width: "50%" }}>
                  <p style={{ margin: 0, color: "#71717a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>Name</p>
                  <p style={{ margin: "5px 0 0", color: "#f4f4f5", fontSize: "16px", fontWeight: 600 }}>{fullName}</p>
                </td>
                <td style={{ paddingBottom: "14px", verticalAlign: "top" }}>
                  <p style={{ margin: 0, color: "#71717a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>Reply‑to</p>
                  <a
                    href={`mailto:${email}`}
                    style={{ margin: "5px 0 0", display: "block", color: "#a78bfa", fontSize: "14px", textDecoration: "none", fontFamily: "monospace" }}
                  >
                    {email}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Message */}
      <div style={{ padding: "20px 32px" }}>
        <p style={{ margin: "0 0 10px", color: "#71717a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Message
        </p>
        <div style={{ background: "#1a1a20", borderRadius: "12px", border: "1px solid #2a2a35", padding: "20px 24px" }}>
          <p style={{ margin: 0, color: "#e4e4e7", fontSize: "15px", lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
            {message}
          </p>
        </div>
      </div>

      {/* Reply CTA */}
      <div style={{ padding: "4px 32px 32px", textAlign: "center" }}>
        <a
          href={`mailto:${email}?subject=Re: Your message on Meet's portfolio`}
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7c3aed, #c026d3)",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            padding: "13px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Reply to {fullName} →
        </a>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #27272a", padding: "18px 32px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#3f3f46", fontSize: "11px", fontFamily: "monospace" }}>
          Sent via meetbrahmbhatt.vercel.app
        </p>
      </div>
    </div>
  </div>
);

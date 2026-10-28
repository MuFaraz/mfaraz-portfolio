import { ImageResponse } from "next/og";

// Preview image shown when the site link is shared on Facebook, WhatsApp, LinkedIn, etc.
export const alt = "Muhammad Faraz – Senior Full-Stack & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #07070f 0%, #17172a 60%, #2a1f5c 100%)",
          color: "#eeeef5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#3effa0" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#3effa0" }} />
          Available for new projects
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginTop: 28, maxWidth: 1000 }}>
          I build fast, reliable web apps — from idea to launch.
        </div>
        <div style={{ fontSize: 30, color: "#a79fff", marginTop: 32 }}>
          Muhammad Faraz · Senior Full-Stack & AI Developer
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#7a7a9a", marginTop: 40 }}>
          <span>5+ years</span>
          <span>20+ live projects</span>
          <span>US · UK · Canada clients</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

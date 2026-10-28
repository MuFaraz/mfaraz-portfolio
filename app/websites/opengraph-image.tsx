import { ImageResponse } from "next/og";
import { PACKAGES, formatPKR } from "@/data/portfolio";

// Preview image shown when the /websites ad page is shared on WhatsApp, Facebook, etc.
export const alt = "Your business website, live in 7 days – Muhammad Faraz";
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
          background: "#0b0b0d",
          color: "#ececef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#4ade80" }}>For businesses in Karachi & across Pakistan</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 28, maxWidth: 1000 }}>
          Your business website, live in 7 days.
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 30, color: "#a9c8ff", marginTop: 36 }}>
          <span>From {formatPKR(PACKAGES[0].priceFromPKR)}</span>
          <span>Websites · Online stores · AI chatbots</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8d8d96", marginTop: 36 }}>
          Muhammad Faraz · Rated 5.0 on Fiverr · Chat on WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}

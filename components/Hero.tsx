"use client";
import { PROFILE } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,107,255,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,138,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Available badge */}
            {PROFILE.availableForWork && (
              <div
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mb-8"
                style={{
                  background: "rgba(62,255,160,0.08)",
                  border: "1px solid rgba(62,255,160,0.2)",
                  color: "var(--accent3)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "var(--accent3)",
                    animation: "pulse-dot 2s infinite",
                    display: "inline-block",
                  }}
                />
                Open to Work
              </div>
            )}

            <h1
              className="font-extrabold leading-tight mb-4"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              {PROFILE.name}
              <span className="block" style={{ color: "var(--accent)" }}>
                {PROFILE.title}
              </span>
            </h1>

            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--muted)", maxWidth: "480px" }}
            >
              <span
                className="font-semibold"
                style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif", fontSize: "0.85rem" }}
              >
                {PROFILE.tagline}
              </span>
            </p>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--muted)", maxWidth: "480px" }}
            >
              {PROFILE.bio}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#certifications"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/20"
                style={{ background: "var(--accent)", color: "#fff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                Explore AI Certifications 
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text)";
                }}
              >
                View Projects →
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { href: PROFILE.githubWork, label: "GitHub (Work)" },
                { href: PROFILE.githubPersonal, label: "GitHub (Personal)" },
                { href: PROFILE.linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Stats card */}
          <div className="float">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-xl text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), #d97757)",
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  MF
                </div>
                <div>
                  <p className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>
                    {PROFILE.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    Senior & Certified AI Engineer · {PROFILE.location}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {PROFILE.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 transition-transform duration-200 hover:scale-[1.02]"
                    style={{ background: "var(--bg3)" }}
                  >
                    <p
                      className="font-extrabold text-2xl"
                      style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["MCP Specification", "Subagents", "Claude Code", "NestJS", "Laravel", "Next.js", "Python"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(124,107,255,0.1)",
                      border: "1px solid rgba(124,107,255,0.2)",
                      color: "#a79fff",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Status row */}
              <div
                className="mt-4 pt-4 flex items-center justify-between text-xs"
                style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}
              >
                <span style={{ color: "var(--accent3)" }}>✓ Available Now</span>
                <span style={{ color: "#d97757" }}>Anthropic Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

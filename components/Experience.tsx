"use client";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Career Journey
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* Dot */}
                <div
                  className="absolute left-2 top-2 w-5 h-5 rounded-full hidden md:flex items-center justify-center"
                  style={{
                    background: exp.type === "current" ? "var(--accent)" : "var(--bg3)",
                    border: `2px solid ${exp.type === "current" ? "var(--accent)" : "var(--border)"}`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {exp.type === "current" && (
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#fff", animation: "pulse-dot 2s infinite" }}
                    />
                  )}
                </div>

                <div
                  className="card-hover rounded-xl p-5"
                  style={{
                    background: "var(--card)",
                    border: exp.type === "current"
                      ? "1px solid rgba(124,107,255,0.3)"
                      : "1px solid var(--border)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {exp.role}
                        {exp.type === "current" && (
                          <span
                            className="ml-2 text-xs px-2 py-0.5 rounded-full align-middle"
                            style={{
                              background: "rgba(62,255,160,0.1)",
                              color: "var(--accent3)",
                              border: "1px solid rgba(62,255,160,0.2)",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-lg"
                      style={{
                        background: "var(--bg3)",
                        color: "var(--muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.points.map((point, pi) => (
                      <li
                        key={pi}
                        className="text-xs leading-relaxed flex gap-2"
                        style={{ color: "var(--muted)" }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: "var(--bg3)",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { EXPERIENCE } from "@/data/portfolio";

// Past roles show their first highlight until expanded, to keep the page short to scan.
const COLLAPSED_POINTS = 1;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <span className="eyebrow">Track Record</span>
          <h2 className="section-title">5+ years of shipping real products</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-5">
            {EXPERIENCE.map((exp, i) => {
              const isCurrent = exp.type === "current";
              const points = expanded || isCurrent ? exp.points : exp.points.slice(0, COLLAPSED_POINTS);
              return (
                <div key={i} className="md:pl-12 relative">
                  {/* Dot */}
                  <div
                    className="absolute left-2 top-2 w-5 h-5 rounded-full hidden md:flex items-center justify-center"
                    style={{
                      background: isCurrent ? "var(--accent)" : "var(--bg3)",
                      border: `2px solid ${isCurrent ? "var(--accent)" : "var(--border)"}`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    {isCurrent && (
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
                      border: isCurrent ? "1px solid rgba(94,158,255,0.3)" : "1px solid var(--border)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>
                          {exp.role}
                          {isCurrent && (
                            <span
                              className="ml-2 text-xs px-2 py-0.5 rounded-full align-middle"
                              style={{
                                background: "rgba(74,222,128,0.1)",
                                color: "var(--accent3)",
                                border: "1px solid rgba(74,222,128,0.2)",
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
                      {points.map((point, pi) => (
                        <li key={pi} className="text-sm leading-relaxed flex gap-2" style={{ color: "var(--muted)" }}>
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
              );
            })}
          </div>
        </div>

        <div className="text-center mt-6">
          <button onClick={() => setExpanded(!expanded)} className="btn btn-ghost" aria-expanded={expanded}>
            {expanded ? "Show less" : "Show full experience"}
          </button>
        </div>
      </div>
    </section>
  );
}

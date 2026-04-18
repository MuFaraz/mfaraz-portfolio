"use client";
import { useState } from "react";
import { PROJECTS } from "@/data/portfolio";

const CATEGORIES = ["All", "Full-Stack", "E-Commerce", "Backend"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Portfolio
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Key Projects
          </h2>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "500px" }}>
            Real-world applications built for real clients — all live and production-ready.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: active === cat ? "var(--accent)" : "var(--card)",
                color: active === cat ? "#fff" : "var(--muted)",
                border: active === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card-hover rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: "var(--card)",
                border: project.featured
                  ? "1px solid rgba(124,107,255,0.25)"
                  : "1px solid var(--border)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">{project.emoji}</span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium transition-all duration-200 px-3 py-1 rounded-lg"
                    style={{
                      color: "var(--accent)",
                      background: "rgba(124,107,255,0.1)",
                      border: "1px solid rgba(124,107,255,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(124,107,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(124,107,255,0.1)";
                    }}
                  >
                    ↗ Live
                  </a>
                )}
              </div>

              {project.featured && (
                <span
                  className="self-start text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(124,107,255,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(124,107,255,0.2)",
                  }}
                >
                  Featured
                </span>
              )}

              <h3
                className="font-bold text-base leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {project.title}
              </h3>

              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              {/* Tags */}
              <div
                className="flex flex-wrap gap-1.5 pt-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(255,107,138,0.08)",
                      border: "1px solid rgba(255,107,138,0.2)",
                      color: "#ff9fae",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder — encourage adding more */}
        <div
          className="mt-4 rounded-xl p-6 text-center"
          style={{
            border: "1px dashed rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            🚀 More projects coming soon — check back or visit my{" "}
            <a href="https://github.com/mfarazgt" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

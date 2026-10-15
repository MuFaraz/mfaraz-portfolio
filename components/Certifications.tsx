"use client";
import { useState } from "react";
import { COURSES } from "@/data/portfolio";

const INITIAL_COUNT = 6;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? COURSES : COURSES.slice(0, INITIAL_COUNT);

  return (
    <section id="certifications" className="py-20 md:py-24 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      <div
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217, 119, 87, 0.08) 0%, rgba(124, 107, 255, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow" style={{ color: "#d97757" }}>AI Expertise</span>
            <h2 className="section-title">Certified in AI by Anthropic</h2>
            <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "560px" }}>
              {COURSES.length} certifications from Anthropic Claude Academy — covering AI agents, Model Context Protocol
              (MCP) and Claude engineering. This is how I add practical AI to the products I build.
            </p>
          </div>
          <div className="flex items-center gap-6 p-4 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div>
              <p className="text-2xl font-extrabold" style={{ color: "var(--accent3)", fontFamily: "Syne, sans-serif" }}>{COURSES.length}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Certificates</p>
            </div>
            <div style={{ width: "1px", height: "30px", background: "var(--border)" }} />
            <div>
              <p className="text-2xl font-extrabold" style={{ color: "#ffd700", fontFamily: "Syne, sans-serif" }}>10/10</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Top score</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((course) => (
            <div
              key={course.id}
              className="rounded-xl p-5 flex gap-4"
              style={{
                background: course.score ? "linear-gradient(145deg, rgba(255, 215, 0, 0.05), var(--card))" : "var(--card)",
                border: course.score ? "1px solid rgba(255, 215, 0, 0.3)" : "1px solid var(--border)",
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "var(--bg3)", border: "1px solid var(--border)" }}
              >
                {course.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm leading-snug" style={{ fontFamily: "Syne, sans-serif" }}>
                  {course.title}
                </h3>
                <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  {course.provider}
                  {course.score && <span style={{ color: "#ffd700" }}> · Score {course.score} ⭐</span>}
                </p>
                <p className="text-xs mt-2" style={{ color: "#a79fff" }}>
                  {course.skills.slice(0, 3).join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {COURSES.length > INITIAL_COUNT && (
          <div className="text-center mt-6">
            <button onClick={() => setShowAll(!showAll)} className="btn btn-ghost">
              {showAll ? "Show less" : `Show all ${COURSES.length} certificates`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

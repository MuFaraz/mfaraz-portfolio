"use client";
import { useState } from "react";
import { Award } from "lucide-react";
import { COURSES } from "@/data/portfolio";

const INITIAL_COUNT = 3;
// Featured certificates first, then the rest in their original order
const ORDERED = [...COURSES.filter((c) => c.featured), ...COURSES.filter((c) => !c.featured)];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ORDERED : ORDERED.slice(0, INITIAL_COUNT);

  return (
    <section id="certifications" className="py-16 md:py-20 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">AI expertise</span>
            <h2 className="section-title">Certified in AI by Anthropic</h2>
            <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "560px" }}>
              {COURSES.length} certificates from Anthropic Claude Academy — AI agents, MCP and Claude engineering.
            </p>
          </div>
          <div className="flex items-center gap-6 p-4 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>{COURSES.length}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Certificates</p>
            </div>
            <div style={{ width: "1px", height: "30px", background: "var(--border)" }} />
            <div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>10/10</p>
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
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <Award size={20} strokeWidth={1.75} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-soft)" }} aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="font-semibold text-sm leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                  {course.title}
                </h3>
                <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  {course.provider}
                  {course.score && <span style={{ color: "var(--text)" }}> · Score {course.score}</span>}
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
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

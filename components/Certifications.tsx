"use client";
import { useState } from "react";
import { COURSES, Course } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const CATEGORIES = ["All", "Agentic AI & MCP", "Claude Engineering", "AI Foundations"];

export default function Certifications() {
  const ref = useReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const completedCount = COURSES.filter((c) => c.status === "Completed").length;
  const inProgressCount = COURSES.filter((c) => c.status === "In Progress").length;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      {/* Background Glow Blob */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217, 119, 87, 0.08) 0%, rgba(124, 107, 255, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={ref} className="reveal mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  background: "rgba(217, 119, 87, 0.12)",
                  border: "1px solid rgba(217, 119, 87, 0.3)",
                  color: "#d97757",
                }}
              >
                Anthropic & Claude Ecosystem
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold mt-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Certifications & AI Expertise
              </h2>
              <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--muted)", maxWidth: "550px" }}>
                Formal certifications in Model Context Protocol (MCP), Subagents, Claude CLI, and LLM Engineering from Anthropic Claude Academy.
              </p>
            </div>

            {/* Quick Stats Box */}
            <div
              className="flex items-center gap-6 p-4 rounded-xl backdrop-blur-md"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <p className="text-2xl font-extrabold" style={{ color: "var(--accent3)", fontFamily: "Syne, sans-serif" }}>
                  {completedCount}
                </p>
                <p className="text-xs text-muted-foreground" style={{ color: "var(--muted)" }}>Completed</p>
              </div>
              <div style={{ width: "1px", height: "30px", background: "var(--border)" }} />
              <div>
                <p className="text-2xl font-extrabold" style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}>
                  {inProgressCount}
                </p>
                <p className="text-xs text-muted-foreground" style={{ color: "var(--muted)" }}>In Progress</p>
              </div>
              <div style={{ width: "1px", height: "30px", background: "var(--border)" }} />
              <div>
                <p className="text-2xl font-extrabold" style={{ color: "#ffd700", fontFamily: "Syne, sans-serif" }}>
                  10/10
                </p>
                <p className="text-xs text-muted-foreground" style={{ color: "var(--muted)" }}>Top Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "var(--accent)" : "var(--card)",
                  color: activeCategory === cat ? "#fff" : "var(--muted)",
                  border: activeCategory === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <input
              type="text"
              placeholder="Search courses or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs px-4 py-2 rounded-lg outline-none transition-all duration-200"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
                style={{ color: "var(--muted)" }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((course: Course) => {
            const isCompleted = course.status === "Completed";
            const isPerfectScore = course.score === "10 / 10";

            return (
              <div
                key={course.id}
                className="card-hover rounded-xl p-5 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
                style={{
                  background: isPerfectScore
                    ? "linear-gradient(145deg, rgba(255, 215, 0, 0.05), var(--card))"
                    : "var(--card)",
                  border: isPerfectScore
                    ? "1px solid rgba(255, 215, 0, 0.3)"
                    : isCompleted
                    ? "1px solid var(--border)"
                    : "1px solid rgba(124, 107, 255, 0.3)",
                }}
              >
                {/* Accent Highlight Line at Top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: isPerfectScore
                      ? "linear-gradient(90deg, #ffd700, #ff6b8a)"
                      : isCompleted
                      ? "linear-gradient(90deg, #3effa0, var(--accent))"
                      : "linear-gradient(90deg, var(--accent), #ff6b8a)",
                  }}
                />

                <div>
                  {/* Card Header: Icon & Status */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: "var(--bg3)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {course.icon}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
                        style={{
                          background: isCompleted ? "rgba(62, 255, 160, 0.1)" : "rgba(255, 170, 0, 0.1)",
                          border: isCompleted ? "1px solid rgba(62, 255, 160, 0.25)" : "1px solid rgba(255, 170, 0, 0.25)",
                          color: isCompleted ? "var(--accent3)" : "#ffaa00",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: isCompleted ? "var(--accent3)" : "#ffaa00",
                            animation: isCompleted ? "none" : "pulse-dot 1.5s infinite",
                          }}
                        />
                        {isCompleted ? "Completed" : "In Progress"}
                      </span>

                      {course.score && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(255, 215, 0, 0.15)",
                            border: "1px solid rgba(255, 215, 0, 0.3)",
                            color: "#ffd700",
                          }}
                        >
                          Score: {course.score} ⭐
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3
                    className="font-bold text-base leading-snug mb-1 group-hover:text-[var(--accent)] transition-colors duration-200"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {course.title}
                  </h3>

                  {/* Provider & Completion Date */}
                  <div className="flex flex-wrap items-center gap-2 text-xs mb-4" style={{ color: "var(--muted)" }}>
                    <span>{course.provider}</span>
                    <span>•</span>
                    {isCompleted ? (
                      <span>Completed: {course.completedDate}</span>
                    ) : (
                      <span style={{ color: "#ffaa00" }}>{course.lessonsProgress}</span>
                    )}
                  </div>
                </div>

                {/* Skills Learned Badges */}
                <div>
                  <div
                    className="flex flex-wrap gap-1.5 pt-3"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(124, 107, 255, 0.08)",
                          border: "1px solid rgba(124, 107, 255, 0.18)",
                          color: "#a79fff",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div
            className="text-center py-12 rounded-xl"
            style={{ background: "var(--card)", border: "1px dashed var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              No courses matching your filter criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

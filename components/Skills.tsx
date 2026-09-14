"use client";
import { SKILLS } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            What I Bring
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Skills & Technologies
          </h2>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "500px" }}>
            From backend APIs to AI integrations to polished frontends — I own the entire stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, i) => {
            const isAI = skill.category.includes("AI");

            return (
              <div
                key={skill.category}
                className="card-hover rounded-xl p-5 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: isAI ? "linear-gradient(145deg, rgba(217, 119, 87, 0.06), var(--card))" : "var(--card)",
                  border: isAI ? "1px solid rgba(217, 119, 87, 0.3)" : "1px solid var(--border)",
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                {isAI && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: "linear-gradient(90deg, #d97757, var(--accent))" }}
                  />
                )}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl">{skill.icon}</div>
                  {isAI && (
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(217, 119, 87, 0.15)",
                        color: "#d97757",
                        border: "1px solid rgba(217, 119, 87, 0.3)",
                      }}
                    >
                      Featured Core
                    </span>
                  )}
                </div>
                <h3
                  className="font-bold text-base mb-3"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded"
                      style={{
                        background: isAI ? "rgba(217, 119, 87, 0.08)" : "var(--bg3)",
                        border: isAI ? "1px solid rgba(217, 119, 87, 0.2)" : "1px solid var(--border)",
                        color: isAI ? "#f3a58c" : "var(--muted)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

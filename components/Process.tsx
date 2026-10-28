import { PROCESS } from "@/data/portfolio";

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8 text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title">Simple, clear and stress-free</h2>
          <p className="text-sm md:text-base leading-relaxed mt-3 mx-auto" style={{ color: "var(--muted)", maxWidth: "520px" }}>
            You always know what&apos;s happening, what it costs and when it will be ready.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {PROCESS.map((p) => (
            <li key={p.step} className="rounded-2xl p-5 sm:p-6 relative" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl sm:text-4xl font-extrabold text-gradient" style={{ fontFamily: "Syne, sans-serif" }}>
                {p.step}
              </span>
              <h3 className="font-bold text-lg mt-2 sm:mt-3 mb-1 sm:mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

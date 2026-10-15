import { TESTIMONIALS } from "@/data/portfolio";

// Renders only once real testimonials are added in data/portfolio.ts
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="section-title">What clients say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div style={{ color: "#ffd700" }}>★★★★★</div>
              <blockquote className="text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <p className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

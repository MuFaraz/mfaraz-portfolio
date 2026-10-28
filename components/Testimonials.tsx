import { TESTIMONIALS, FIVERR, Testimonial } from "@/data/portfolio";

export function FiverrSummary({ className = "" }: { className?: string }) {
  return (
    <a
      href={FIVERR.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm hover:underline ${className}`}
      style={{ color: "var(--muted)" }}
    >
      <span className="font-bold" style={{ color: "#ffd700" }}>{FIVERR.rating} ★</span>
      <span style={{ color: "var(--text)" }}>on Fiverr</span>
      <span>·</span>
      <span>{FIVERR.reviewCount} reviews</span>
      <span>·</span>
      <span>
        clients in {FIVERR.clientCountries.slice(0, -1).join(", ")} &amp; {FIVERR.clientCountries.at(-1)}
      </span>
      <span style={{ color: "var(--accent)" }}>↗</span>
    </a>
  );
}

// Real Fiverr reviews from data/portfolio.ts
export default function Testimonials({ title = "What clients say" }: { title?: string }) {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="section-title">{title}</h2>
          <FiverrSummary className="mt-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const many = t.fullReviews.length > 1;

  return (
    <figure className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span style={{ color: "#ffd700" }} aria-label="5 out of 5 stars">★★★★★</span>
        {t.isRepeatClient && (
          <span
            className="text-[11px] font-medium px-2 py-0.5 rounded-md"
            style={{ background: "rgba(62,255,160,0.08)", border: "1px solid rgba(62,255,160,0.2)", color: "var(--accent3)" }}
          >
            Repeat client · {t.projectsCount} projects
          </span>
        )}
      </div>

      <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>

      <details className="text-sm">
        <summary className="cursor-pointer font-medium hover:underline" style={{ color: "var(--accent)" }}>
          {many ? `Read all ${t.fullReviews.length} reviews` : "Read full review"}
        </summary>
        <div className="mt-3 flex flex-col gap-3">
          {t.fullReviews.map((text, i) => (
            <p key={i} className="text-xs leading-relaxed pl-3" style={{ color: "var(--muted)", borderLeft: "2px solid var(--border)" }}>
              {many && <span className="block font-semibold mb-1" style={{ color: "var(--text)" }}>Review {i + 1}</span>}
              {text}
            </p>
          ))}
        </div>
      </details>

      <figcaption className="flex flex-wrap items-end justify-between gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <div>
          <p className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>{t.name}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            <span aria-hidden="true">{t.countryFlag}</span> {t.country} · {t.project}
          </p>
        </div>
        <a
          href={FIVERR.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium px-2 py-0.5 rounded-md hover:underline"
          style={{ background: "rgba(29,191,115,0.1)", border: "1px solid rgba(29,191,115,0.25)", color: "#1dbf73" }}
        >
          ✓ Verified review on Fiverr
        </a>
      </figcaption>
    </figure>
  );
}

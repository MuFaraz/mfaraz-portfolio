import { BadgeCheck, Star } from "lucide-react";
import { TESTIMONIALS, FIVERR, Testimonial } from "@/data/portfolio";

export function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label="5 out of 5 stars" style={{ color: "var(--star)" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  );
}

export function FiverrSummary({ className = "" }: { className?: string }) {
  return (
    <a
      href={FIVERR.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm group ${className}`}
      style={{ color: "var(--muted)" }}
    >
      <Stars size={13} />
      <span className="font-semibold" style={{ color: "var(--text)" }}>{FIVERR.rating}</span>
      <span>on Fiverr · {FIVERR.reviewCount} reviews · clients in {FIVERR.clientCountries.slice(0, -1).join(", ")} &amp; {FIVERR.clientCountries.at(-1)}</span>
      <span className="group-hover:underline" style={{ color: "var(--accent)" }}>View profile</span>
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
          <span className="eyebrow">Client feedback</span>
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
    <figure className="rounded-xl p-6 flex flex-col gap-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Stars />
        {t.isRepeatClient && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-md" style={{ background: "var(--bg3)", color: "var(--text)" }}>
            Repeat client · {t.projectsCount} projects
          </span>
        )}
      </div>

      <blockquote className="text-[15px] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>

      <details className="text-sm">
        <summary className="cursor-pointer font-medium hover:underline" style={{ color: "var(--accent)" }}>
          {many ? `Read all ${t.fullReviews.length} reviews` : "Read full review"}
        </summary>
        <div className="mt-3 flex flex-col gap-3">
          {t.fullReviews.map((text, i) => (
            <p key={i} className="text-sm leading-relaxed pl-3" style={{ color: "var(--muted)", borderLeft: "2px solid var(--border)" }}>
              {many && <span className="block font-medium mb-1" style={{ color: "var(--text)" }}>Review {i + 1}</span>}
              {text}
            </p>
          ))}
        </div>
      </details>

      <figcaption className="flex flex-wrap items-end justify-between gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <div>
          <p className="font-semibold text-sm">{t.name}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            {t.country} · {t.project}
          </p>
        </div>
        <a
          href={FIVERR.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs hover:underline"
          style={{ color: "var(--muted)" }}
        >
          <BadgeCheck size={14} style={{ color: "#1dbf73" }} aria-hidden="true" />
          Verified review on Fiverr
        </a>
      </figcaption>
    </figure>
  );
}

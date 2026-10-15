import { PROJECTS } from "@/data/portfolio";

// Shows industries rather than client names/brands, since much of this work was delivered through an employer.
export default function TrustBar() {
  const industries = [...new Set(PROJECTS.map((p) => p.industry))];

  return (
    <section className="py-8" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
      <p className="text-center text-xs uppercase tracking-[0.18em] mb-5 px-5" style={{ color: "var(--muted)" }}>
        Experience across industries — for businesses in the US, UK & Canada
      </p>
      <div className="overflow-hidden marquee-mask">
        <div className="marquee-track gap-10">
          {[...industries, ...industries].map((d, i) => (
            <span
              key={i}
              className="text-sm md:text-base font-semibold whitespace-nowrap"
              style={{ fontFamily: "Syne, sans-serif", color: "rgba(238,238,245,0.45)" }}
              aria-hidden={i >= industries.length}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

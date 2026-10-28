import { PROJECTS } from "@/data/portfolio";

// Shows industries rather than client names/brands, since much of this work was delivered through an employer.
export default function TrustBar() {
  const industries = [...new Set(PROJECTS.map((p) => p.industry))];

  return (
    <section className="py-6" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-sm flex-shrink-0" style={{ color: "var(--muted)" }}>
          Industries I&apos;ve built for
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
          {industries.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

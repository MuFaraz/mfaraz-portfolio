import { FAQS } from "@/data/portfolio";

export default function FAQ({ items = FAQS, title = "Frequently asked questions" }: { items?: { q: string; a: string }[]; title?: string }) {
  return (
    <section id="faq" className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-3xl mx-auto px-5">
        <div className="mb-8 text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="rounded-xl group"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-sm md:text-base">
                {f.q}
                <span className="faq-icon text-xl transition-transform duration-200 flex-shrink-0" style={{ color: "var(--accent)" }}>
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 -mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

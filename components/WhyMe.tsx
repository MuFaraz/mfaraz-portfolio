import { WHY_ME } from "@/data/portfolio";
import Icon from "@/components/Icon";

export default function WhyMe() {
  return (
    <section className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <div className="lg:sticky lg:top-24">
          <span className="eyebrow">Why work with me</span>
          <h2 className="section-title">Agency-quality work, without the agency headaches</h2>
          <p className="text-sm md:text-base leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
            No account managers, no hand-offs to juniors, no confusion. You work with one experienced developer who
            cares about your project working — and working well.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
          {WHY_ME.map((item) => (
            <div key={item.title} className="rounded-xl p-5 sm:p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <Icon name={item.icon} size={22} className="mb-3" style={{ color: "var(--accent-soft)" }} />
              <h3 className="font-semibold text-base mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

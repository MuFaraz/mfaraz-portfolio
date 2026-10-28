import type { Project } from "@/data/portfolio";

// Neutral wireframe of the kind of product built — gives a real "product" feel
// without showing client logos, branding or screenshots.
const bar = "rgba(255,255,255,0.07)";
const barStrong = "rgba(255,255,255,0.13)";
const accent = "rgba(94,158,255,0.55)";

// Small deterministic variation per project so cards of the same type don't look identical
const seeded = (seed: string, n: number) =>
  Array.from({ length: n }, (_, i) => {
    const c = seed.charCodeAt(i % seed.length) * (i + 7);
    return 35 + (c % 60);
  });

export default function ProjectPreview({ category, domain }: { category: Project["category"]; domain: string }) {
  const values = seeded(domain, 9);
  return (
    <div className="px-4 pt-4" style={{ background: "var(--bg2)" }} aria-hidden="true">
      <div className="rounded-t-md overflow-hidden" style={{ border: "1px solid var(--border)", borderBottom: "none", background: "var(--bg)" }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-2.5 h-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: barStrong }} />
            ))}
          </span>
          <span className="flex-1 text-[10px] leading-none truncate text-center" style={{ color: "var(--muted)" }}>
            {domain}
          </span>
        </div>
        <div className="h-24 sm:h-28 p-2.5">
          {category === "Web Apps" && <Dashboard values={values} />}
          {category === "E-Commerce" && <Store highlight={values[0] % 4} />}
          {category === "Websites & Lead Gen" && <Landing />}
        </div>
      </div>
    </div>
  );
}

const Block = ({ className = "", strong = false, color }: { className?: string; strong?: boolean; color?: string }) => (
  <div className={`rounded-sm ${className}`} style={{ background: color ?? (strong ? barStrong : bar) }} />
);

function Dashboard({ values }: { values: number[] }) {
  return (
    <div className="flex gap-2 h-full">
      <div className="w-1/5 flex flex-col gap-1.5">
        <Block className="h-2" strong />
        <Block className="h-1.5" />
        <Block className="h-1.5" />
        <Block className="h-1.5" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-1.5">
          <Block className="h-5" />
          <Block className="h-5" />
          <Block className="h-5" />
        </div>
        <div className="flex-1 flex items-end gap-1 px-1">
          {values.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === values.indexOf(Math.max(...values)) ? accent : barStrong }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Store({ highlight }: { highlight: number }) {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-between items-center">
        <Block className="h-2 w-1/5" strong />
        <Block className="h-2 w-1/3" />
      </div>
      <div className="grid grid-cols-4 gap-1.5 flex-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <Block className="flex-1" />
            <Block className="h-1.5 w-3/4" strong />
            <Block className="h-1.5 w-1/2" color={i === highlight ? accent : undefined} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="flex gap-3 h-full items-center">
      <div className="flex-1 flex flex-col gap-1.5">
        <Block className="h-2.5 w-11/12" strong />
        <Block className="h-2.5 w-3/4" strong />
        <Block className="h-1.5 w-full mt-1" />
        <Block className="h-1.5 w-5/6" />
        <Block className="h-3 w-1/3 mt-1.5" color={accent} />
      </div>
      <div className="w-2/5 rounded-sm p-1.5 flex flex-col gap-1.5" style={{ border: "1px solid var(--border)" }}>
        <Block className="h-2.5" />
        <Block className="h-2.5" />
        <Block className="h-2.5" />
        <Block className="h-3" color={accent} />
      </div>
    </div>
  );
}

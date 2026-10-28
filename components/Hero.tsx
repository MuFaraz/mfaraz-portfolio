import { Check } from "lucide-react";
import { PROFILE, SERVICES, TESTIMONIALS, FIVERR, EXPERIENCE, COURSES } from "@/data/portfolio";
import { whatsappLink } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Icon from "@/components/Icon";
import { Stars } from "@/components/Testimonials";

const highlight = TESTIMONIALS.find((t) => t.highlight);
const current = EXPERIENCE[0];
const stat = (label: string) => PROFILE.stats.find((s) => s.label === label)?.value;

const FACTS = [
  { label: "Currently", value: `${current.role}, ${current.company}` },
  { label: "Experience", value: `${stat("Years experience")} years · ${stat("Live projects")} live projects` },
  { label: "Certified", value: `${COURSES.length} Anthropic Claude Academy certificates` },
];

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Laravel / PHP",
  "Shopify",
  "WordPress",
  "WooCommerce",
  "Stripe / PayPal",
  "REST APIs",
  "PostgreSQL / MySQL",
  "Redis / RabbitMQ",
  "Tailwind CSS",
  "Claude / OpenAI",
];

export default function Hero() {
  return (
    <section className="relative" style={{ paddingTop: "4rem" }}>
      <div className="max-w-6xl mx-auto px-5 w-full pt-8 pb-12 md:py-20">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          {/* Left — who I am and what I do */}
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
              <p className="text-sm md:text-base">
                <span className="font-semibold">{PROFILE.name}</span>
                <span style={{ color: "var(--muted)" }}> · {PROFILE.title} · {PROFILE.location}</span>
              </p>
              {PROFILE.availableForWork && (
                <span className="inline-flex items-center gap-2 text-xs font-medium" style={{ color: "var(--accent3)" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent3)", animation: "pulse-dot 2s infinite" }} />
                  Available
                </span>
              )}
            </div>

            <h1
              className="font-bold leading-[1.1] mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.6vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              I build fast, reliable web apps — <span className="text-gradient">from idea to launch.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: "var(--muted)", maxWidth: "540px" }}>
              {PROFILE.subheadline}
            </p>
            <p className="text-sm mb-7" style={{ color: "var(--text)", maxWidth: "540px" }}>
              {PROFILE.tagline}
            </p>

            <div className="grid grid-cols-2 sm:flex gap-3 mb-5">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-track="hero" className="btn btn-whatsapp hero-btn">
                <WhatsAppIcon size={18} />
                <span className="sm:hidden">Free Quote</span>
                <span className="hidden sm:inline">Get a Free Quote on WhatsApp</span>
              </a>
              <a href="#work" className="btn btn-ghost hero-btn">
                See My Work
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-6" aria-label="Profiles">
              {[
                { label: "LinkedIn", href: PROFILE.linkedin },
                { label: "GitHub (Work)", href: PROFILE.githubWork },
                { label: "GitHub (Personal)", href: PROFILE.githubPersonal },
                { label: "Email", href: `mailto:${PROFILE.email}` },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    data-track="hero-links"
                    className="underline underline-offset-4 decoration-[var(--border-strong)] hover:decoration-[var(--text)] hover:text-[var(--text)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {highlight?.highlight && (
              <a href="#testimonials" className="block pl-4 py-1 max-w-[540px] group" style={{ borderLeft: "2px solid var(--star)" }}>
                <p className="text-sm leading-snug">&ldquo;{highlight.highlight}&rdquo;</p>
                <p className="text-xs mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1" style={{ color: "var(--muted)" }}>
                  <Stars size={12} />
                  {highlight.name}, {highlight.country} · Fiverr
                  <span className="group-hover:underline" style={{ color: "var(--accent)" }}>Read reviews</span>
                </p>
              </a>
            )}

            <ul className="hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-sm mt-7" style={{ color: "var(--muted)" }}>
              {PROFILE.guarantees.map((g) => (
                <li key={g} className="flex items-center gap-1.5">
                  <Check size={15} style={{ color: "var(--accent3)" }} aria-hidden="true" /> {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — CV-style snapshot (desktop only) */}
          <div className="hidden md:block">
            <div className="rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <dl className="p-6 flex flex-col gap-3.5 text-sm">
                {FACTS.map((f) => (
                  <div key={f.label} className="grid grid-cols-[90px_1fr] gap-3">
                    <dt style={{ color: "var(--muted)" }}>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="px-6 py-5" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>What I build</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {SERVICES.map((s) => (
                    <li key={s.id} className="flex items-center gap-2.5 text-sm">
                      <Icon name={s.icon} size={16} style={{ color: "var(--accent-soft)" }} />
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 py-5 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid var(--border)" }}>
                {STACK.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md" style={{ background: "var(--bg3)", color: "var(--muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          {PROFILE.stats.map((s) => (
            <div key={s.label}>
              <p className="font-semibold text-2xl md:text-3xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                {s.value}
              </p>
              <p className="text-xs md:text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

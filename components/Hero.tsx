import { PROFILE, SERVICES, TESTIMONIALS, FIVERR } from "@/data/portfolio";
import { whatsappLink } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const highlight = TESTIMONIALS.find((t) => t.highlight);

export default function Hero() {
  return (
    <section className="relative flex items-center grid-bg overflow-hidden" style={{ paddingTop: "4rem" }}>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,107,255,0.14) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,138,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-6xl mx-auto px-5 w-full pt-8 pb-12 md:py-20 relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Left — the offer */}
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
              <p className="text-sm md:text-base">
                <span className="font-bold" style={{ fontFamily: "Syne, sans-serif" }}>{PROFILE.name}</span>
                <span style={{ color: "var(--muted)" }}> · {PROFILE.title} · {PROFILE.location}</span>
              </p>
              {PROFILE.availableForWork && (
                <span
                  className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: "rgba(62,255,160,0.08)", border: "1px solid rgba(62,255,160,0.2)", color: "var(--accent3)" }}
                >
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--accent3)", animation: "pulse-dot 2s infinite" }} />
                  Available
                </span>
              )}
            </div>

            <h1
              className="font-extrabold leading-[1.08] mb-4"
              style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 5vw, 3.1rem)" }}
            >
              I build fast, reliable web apps —{" "}
              <span className="text-gradient">from idea to launch.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: "var(--muted)", maxWidth: "540px" }}>
              {PROFILE.subheadline}
            </p>
            <p className="text-sm mb-6" style={{ color: "#a79fff", maxWidth: "540px" }}>
              {PROFILE.tagline}
            </p>

            <div className="grid grid-cols-2 sm:flex gap-3 mb-5">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-track="hero"
                className="btn btn-whatsapp hero-btn"
              >
                <WhatsAppIcon size={20} />
                <span className="sm:hidden">Free Quote</span>
                <span className="hidden sm:inline">Get a Free Quote on WhatsApp</span>
              </a>
              <a href="#work" className="btn btn-ghost hero-btn">
                See My Work ↓
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
                    className="underline-offset-4 hover:underline hover:text-[var(--text)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            {highlight?.highlight && (
              <a
                href="#testimonials"
                className="block rounded-xl px-4 py-3 mb-2 max-w-[540px] transition-colors hover:border-[rgba(255,215,0,0.35)]"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <p className="text-sm leading-snug">
                  <span style={{ color: "#ffd700" }}>★★★★★</span> &ldquo;{highlight.highlight}&rdquo;
                </p>
                <p className="text-xs mt-1.5" style={{ color: "var(--muted)" }}>
                  — {highlight.name}, {highlight.countryFlag} {highlight.country} · {FIVERR.rating} ★ on Fiverr ·{" "}
                  <span style={{ color: "var(--accent)" }}>Read reviews ↓</span>
                </p>
              </a>
            )}

            <ul className="hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-sm mt-5" style={{ color: "var(--muted)" }}>
              {PROFILE.guarantees.map((g) => (
                <li key={g} className="flex items-center gap-1.5">
                  <span style={{ color: "var(--accent3)" }}>✓</span> {g}
                </li>
              ))}
            </ul>

            <div
              className="grid grid-cols-4 gap-2 mt-6 pt-5 max-w-[540px]"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {PROFILE.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-extrabold text-2xl md:text-3xl" style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}>
                    {s.value}
                  </p>
                  <p className="text-[11px] md:text-xs mt-0.5 leading-tight" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — who you'll be working with and what you can get */}
          <div className="float hidden md:block">
            <div className="rounded-2xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--accent), #d97757)", fontFamily: "Syne, sans-serif" }}
                >
                  MF
                </div>
                <div>
                  <p className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>{PROFILE.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{PROFILE.title} · {PROFILE.location}</p>
                </div>
              </div>

              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>What I can build for you</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {SERVICES.map((s) => (
                  <li key={s.id} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm" style={{ background: "var(--bg3)" }}>
                    <span>{s.icon}</span>
                    {s.title}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "NestJS", "Laravel", "WordPress", "Shopify", "Claude / OpenAI"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(124,107,255,0.1)", border: "1px solid rgba(124,107,255,0.2)", color: "#a79fff" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 flex items-center justify-between text-xs" style={{ borderTop: "1px solid var(--border)" }}>
                <span style={{ color: "var(--accent3)" }}>✓ Available now</span>
                <span style={{ color: "#d97757" }}>Anthropic AI certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

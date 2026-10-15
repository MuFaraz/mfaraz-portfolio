"use client";
import { PROFILE, SERVICES } from "@/data/portfolio";
import { whatsappLink, trackLead } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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

      <div className="max-w-6xl mx-auto px-5 w-full py-14 md:py-24 relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Left — the offer */}
          <div>
            {PROFILE.availableForWork && (
              <div
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mb-6"
                style={{ background: "rgba(62,255,160,0.08)", border: "1px solid rgba(62,255,160,0.2)", color: "var(--accent3)" }}
              >
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--accent3)", animation: "pulse-dot 2s infinite" }} />
                Available for new projects
              </div>
            )}

            <h1
              className="font-extrabold leading-[1.08] mb-5"
              style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.2rem, 5.5vw, 3.7rem)" }}
            >
              I build websites & web apps that{" "}
              <span className="text-gradient">bring you customers.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "var(--muted)", maxWidth: "540px" }}>
              {PROFILE.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead("hero")}
                className="btn btn-whatsapp"
                style={{ padding: "1rem 1.6rem", fontSize: "1rem" }}
              >
                <WhatsAppIcon size={20} />
                Get a Free Quote on WhatsApp
              </a>
              <a href="#work" className="btn btn-ghost" style={{ padding: "1rem 1.6rem", fontSize: "1rem" }}>
                See My Work ↓
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {PROFILE.guarantees.map((g) => (
                <li key={g} className="flex items-center gap-1.5">
                  <span style={{ color: "var(--accent3)" }}>✓</span> {g}
                </li>
              ))}
            </ul>

            <div
              className="grid grid-cols-4 gap-2 mt-10 pt-6 max-w-[540px]"
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

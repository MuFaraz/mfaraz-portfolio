"use client";
import { SERVICES } from "@/data/portfolio";
import { whatsappLink, trackLead } from "@/lib/contact";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <span className="eyebrow">How I Can Help</span>
          <h2 className="section-title">What I can build for you</h2>
          <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "560px" }}>
            Whether you need your first website or a complex platform, you get senior-level work and a single person
            responsible for getting it done.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="card-hover rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "rgba(124,107,255,0.1)", border: "1px solid rgba(124,107,255,0.2)" }}
              >
                {service.icon}
              </div>
              <h3 className="font-bold text-lg leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {service.description}
              </p>
              <p className="text-xs" style={{ color: "#a79fff" }}>
                <span style={{ color: "var(--muted)" }}>Ideal for: </span>
                {service.idealFor}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto" style={{ borderTop: "1px solid var(--border)" }}>
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--bg3)", color: "var(--muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={whatsappLink(`Hi Faraz, I'm interested in: ${service.title}. Can we discuss?`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead(`service-${service.id}`)}
                className="text-sm font-semibold mt-1 hover:underline"
                style={{ color: "var(--accent3)" }}
              >
                Ask about this →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

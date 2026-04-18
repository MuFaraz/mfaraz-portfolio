"use client";
import { SERVICES } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            What I Offer
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Services
          </h2>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "500px" }}>
            Available on Fiverr, Upwork, or direct contract. All services come with clear communication and on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="card-hover rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: service.highlighted ? "rgba(124,107,255,0.07)" : "var(--card)",
                border: service.highlighted
                  ? "1px solid rgba(124,107,255,0.3)"
                  : "1px solid var(--border)",
                position: "relative",
              }}
            >
              {service.highlighted && (
                <span
                  className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(124,107,255,0.15)",
                    border: "1px solid rgba(124,107,255,0.3)",
                    color: "var(--accent)",
                  }}
                >
                  Popular
                </span>
              )}
              <div className="text-2xl">{service.icon}</div>
              <h3
                className="font-bold text-sm leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "var(--bg3)",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { PROFILE } from "@/data/portfolio";

const contactLinks = [
  { label: "Email", icon: "✉️", value: "muhammadfaraz991@gmail.com", href: "mailto:muhammadfaraz991@gmail.com" },
  { label: "Phone / WhatsApp", icon: "📱", value: "+92 312 854 2140", href: "https://wa.me/923128542140" },
  { label: "LinkedIn", icon: "💼", value: "muhammad-faraz", href: "https://linkedin.com/in/muhammad-faraz" },
  { label: "GitHub", icon: "💻", value: "mfarazgt", href: "https://github.com/mfarazgt" },
];

const freelancePlatforms = [
  { label: "Fiverr", icon: "🟢", color: "#1dbf73", href: PROFILE.fiverr },
  { label: "Upwork", icon: "🔵", color: "#14a800", href: PROFILE.upwork },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s Build Something
          </h2>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "500px" }}>
            Have a project in mind? Let&apos;s discuss. I respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 card-hover"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "var(--text)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "var(--bg3)" }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{link.label}</p>
                  <p className="text-sm font-medium">{link.value}</p>
                </div>
              </a>
            ))}

            {/* Freelance platforms */}
            <div
              className="rounded-xl p-4"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                Find me on freelance platforms
              </p>
              <div className="flex gap-3">
                {freelancePlatforms.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      textDecoration: "none",
                      background: "var(--bg3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = p.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    {p.icon} {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact form (mailto based) */}
          <div
            className="rounded-xl p-6"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <h3
              className="font-bold text-base mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Send a Message
            </h3>
            <form
              action={`mailto:${PROFILE.email}`}
              method="GET"
              encType="text/plain"
              className="flex flex-col gap-3"
            >
              <div>
                <label className="text-xs mb-1 block" style={{ color: "var(--muted)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  required
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                />
              </div>
              <div>
                <label className="text-xs mb-1 block" style={{ color: "var(--muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                />
              </div>
              <div>
                <label className="text-xs mb-1 block" style={{ color: "var(--muted)" }}>
                  Project Details
                </label>
                <textarea
                  name="body"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-medium text-white transition-all duration-200"
                style={{ background: "var(--accent)", cursor: "pointer", border: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { PROFILE, SERVICES } from "@/data/portfolio";
import { whatsappLink, emailLink, trackLead } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const TIMELINES = ["As soon as possible", "Within a month", "In 1–3 months", "Just exploring"];

const inputClass =
  "w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 border border-[var(--border)] focus:border-[var(--accent)]";
const inputStyle = { background: "var(--bg3)", color: "var(--text)" };

export default function Contact() {
  const [form, setForm] = useState({ name: "", service: SERVICES[0].title, timeline: TIMELINES[0], details: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const message = [
    `Hi Faraz, I'm ${form.name || "interested in working with you"}.`,
    `Project: ${form.service}`,
    `Timeline: ${form.timeline}`,
    form.details && `Details: ${form.details}`,
  ]
    .filter(Boolean)
    .join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackLead("contact-form", "form");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const contactLinks = [
    { label: "WhatsApp / Phone", icon: "📱", value: PROFILE.phone, href: whatsappLink(), channel: "whatsapp" as const },
    { label: "Email", icon: "✉️", value: PROFILE.email, href: emailLink("Project enquiry"), channel: "email" as const },
    { label: "LinkedIn", icon: "💼", value: "Muhammad Faraz", href: PROFILE.linkedin },
    { label: "GitHub", icon: "💻", value: "MuFaraz", href: PROFILE.githubPersonal },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,211,102,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="mb-10 text-center">
          <span className="eyebrow" style={{ color: "var(--accent3)" }}>Let&apos;s Talk</span>
          <h2 className="section-title">Tell me about your project</h2>
          <p className="text-sm md:text-base leading-relaxed mt-3 mx-auto" style={{ color: "var(--muted)", maxWidth: "520px" }}>
            Free consultation, no obligation. Fill this in and it opens WhatsApp with your details ready to send — or
            reach me directly below.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl p-6 md:p-8 flex flex-col gap-4"
            style={{ background: "var(--card)", border: "1px solid rgba(37,211,102,0.25)" }}
          >
            <div>
              <label htmlFor="c-name" className="text-xs mb-1.5 block" style={{ color: "var(--muted)" }}>Your name</label>
              <input id="c-name" required value={form.name} onChange={update("name")} placeholder="e.g. Ahmed Khan" className={inputClass} style={inputStyle} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="c-service" className="text-xs mb-1.5 block" style={{ color: "var(--muted)" }}>What do you need?</label>
                <select id="c-service" value={form.service} onChange={update("service")} className={inputClass} style={inputStyle}>
                  {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-timeline" className="text-xs mb-1.5 block" style={{ color: "var(--muted)" }}>When do you need it?</label>
                <select id="c-timeline" value={form.timeline} onChange={update("timeline")} className={inputClass} style={inputStyle}>
                  {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="c-details" className="text-xs mb-1.5 block" style={{ color: "var(--muted)" }}>Project details (optional)</label>
              <textarea
                id="c-details"
                rows={4}
                value={form.details}
                onChange={update("details")}
                placeholder="A few lines about your business and what you want to build…"
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>
            <button type="submit" className="btn btn-whatsapp w-full" style={{ padding: "1rem" }}>
              <WhatsAppIcon size={20} />
              Send on WhatsApp
            </button>
            <a
              href={emailLink(`Project enquiry: ${form.service}`, message)}
              onClick={() => trackLead("contact-form", "email")}
              className="text-center text-sm hover:underline"
              style={{ color: "var(--muted)" }}
            >
              Prefer email? Send these details by email instead
            </a>
          </form>

          <div className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => link.channel && trackLead("contact-card", link.channel)}
                className="card-hover flex items-center gap-4 p-4 rounded-xl"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "var(--bg3)" }}>
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{link.label}</p>
                  <p className="text-sm font-medium truncate">{link.value}</p>
                </div>
              </a>
            ))}
            <div className="rounded-xl p-4 text-sm" style={{ background: "rgba(62,255,160,0.06)", border: "1px solid rgba(62,255,160,0.2)", color: "var(--accent3)" }}>
              ✓ I usually reply within a few hours, and always within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

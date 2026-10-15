"use client";
import { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolio";
import { whatsappLink, trackLead } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const CATEGORIES = ["All", "Web Apps", "E-Commerce", "Websites & Lead Gen"] as const;
const INITIAL_COUNT = 6;

const CATEGORY_TINT: Record<Project["category"], string> = {
  "Web Apps": "rgba(124,107,255,0.28)",
  "E-Commerce": "rgba(255,107,138,0.22)",
  "Websites & Lead Gen": "rgba(62,255,160,0.16)",
};

const INDUSTRY_ICON: Record<string, string> = {
  "Non-profit": "🌍",
  Education: "🎓",
  Healthcare: "🩺",
  Events: "🎟️",
  Logistics: "🚚",
  Legal: "⚖️",
  SaaS: "🎨",
  Retail: "🛍️",
  Automotive: "🚗",
  "Lead Gen": "📈",
  "Home Services": "🏠",
  Technology: "💡",
};

const displayDomain = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function Projects() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <span className="eyebrow">Recent Work</span>
          <h2 className="section-title">Projects I&apos;ve built</h2>
          <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "560px" }}>
            Live production platforms I&apos;ve developed or contributed to — from healthcare stores to education
            platforms to US lead-generation sites.
          </p>
          <p className="text-xs mt-2" style={{ color: "rgba(122,122,154,0.7)", maxWidth: "560px" }}>
            Many were delivered as part of development teams. All names and brands belong to their respective owners.
          </p>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-5 px-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setShowAll(false); }}
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap"
              style={{
                background: active === cat ? "var(--accent)" : "var(--card)",
                color: active === cat ? "#fff" : "var(--muted)",
                border: active === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="text-center mt-8">
            <button onClick={() => setShowAll(!showAll)} className="btn btn-ghost">
              {showAll ? "Show less" : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}

        <div
          className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ background: "linear-gradient(135deg, rgba(124,107,255,0.12), rgba(255,107,138,0.06))", border: "1px solid rgba(124,107,255,0.25)" }}
        >
          <div>
            <p className="font-bold text-lg md:text-xl" style={{ fontFamily: "Syne, sans-serif" }}>
              Want something like this for your business?
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              Send me a message — I&apos;ll reply with ideas and a free quote.
            </p>
          </div>
          <a
            href={whatsappLink("Hi Faraz, I saw your projects and want something similar for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("projects-cta")}
            className="btn btn-whatsapp w-full md:w-auto"
          >
            <WhatsAppIcon />
            Discuss My Project
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
    >
      <div
        className="relative h-28 flex items-center justify-between px-5"
        style={{ background: `linear-gradient(135deg, ${CATEGORY_TINT[project.category]}, var(--bg3))` }}
      >
        <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
          {INDUSTRY_ICON[project.industry] ?? "💼"}
        </span>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md" style={{ background: "rgba(7,7,15,0.7)", color: "var(--text)" }}>
            {project.industry}
          </span>
          {project.market && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md" style={{ background: "rgba(7,7,15,0.7)", color: "var(--accent3)" }}>
              {project.market} market
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="font-bold text-base leading-snug" style={{ fontFamily: "Syne, sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--bg3)", color: "var(--muted)" }}>
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-medium mt-1 transition-colors group-hover:text-[var(--text)]" style={{ color: "var(--accent)" }}>
          View live site · {displayDomain(project.url)} ↗
        </span>
      </div>
    </a>
  );
}

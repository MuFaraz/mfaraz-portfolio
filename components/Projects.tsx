"use client";
import { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolio";
import { whatsappLink } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProjectPreview from "@/components/ProjectPreview";

const CATEGORIES = ["All", "Web Apps", "E-Commerce", "Websites & Lead Gen"] as const;
const INITIAL_COUNT = 6;

const displayDomain = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function Projects() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <span className="eyebrow">Recent work</span>
          <h2 className="section-title">Projects I&apos;ve built</h2>
          <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: "var(--muted)", maxWidth: "560px" }}>
            Live production platforms I&apos;ve developed or contributed to — from healthcare stores to education
            platforms to US lead-generation sites.
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--muted)", maxWidth: "560px" }}>
            Many were delivered as part of development teams. All names and brands belong to their respective owners.
          </p>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-5 px-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setShowAll(false); }}
              className="text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap"
              style={{
                background: active === cat ? "var(--text)" : "transparent",
                color: active === cat ? "var(--bg)" : "var(--muted)",
                border: active === cat ? "1px solid var(--text)" : "1px solid var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
          className="mt-12 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div>
            <p className="font-semibold text-lg md:text-xl" style={{ fontFamily: "var(--font-display)" }}>
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
            data-track="projects-cta"
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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group rounded-xl overflow-hidden flex flex-col"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
    >
      <ProjectPreview category={project.category} domain={displayDomain(project.url)} />

      <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-1">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          {project.industry}
          {project.market && ` · ${project.market} market`}
        </p>
        <h3 className="font-semibold text-base leading-snug -mt-1" style={{ fontFamily: "var(--font-display)" }}>
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
          View live site ↗
        </span>
      </div>
    </a>
  );
}

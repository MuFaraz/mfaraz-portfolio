import { PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="pt-10 pb-28 md:pb-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
            Muhammad <span style={{ color: "var(--accent)" }}>Faraz</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            {PROFILE.title} · {PROFILE.location} · Working with clients worldwide
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-sm" style={{ color: "var(--muted)" }}>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-[var(--text)]">Email</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)]">LinkedIn</a>
          <a href={PROFILE.githubWork} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)]">GitHub</a>
        </div>
      </div>
      <p className="text-xs text-center mt-8" style={{ color: "rgba(120,120,150,0.5)" }}>
        © {new Date().getFullYear()} Muhammad Faraz. All rights reserved.
      </p>
    </footer>
  );
}
